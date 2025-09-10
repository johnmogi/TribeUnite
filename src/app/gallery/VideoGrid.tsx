'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

type VideoItem = {
  _id: string;
  title: string;
  youtubeId: string;
  thumbUrl: string;
  tags?: string[];
};

export default function VideoGrid() {
  const [items, setItems] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState<VideoItem | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch('/api/media?type=video&limit=12');
        const json = await res.json();
        setItems(json.items || []);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <Skeleton />;
  if (items.length === 0) return <p className="text-gray-400 text-center py-10">No videos available yet.</p>;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((video) => (
          <button
            key={video._id}
            onClick={() => setActive(video)}
            className="group relative text-left overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700 hover:border-orange-500/50 transition"
          >
            <div className="aspect-video relative">
              <Image
                src={video.thumbUrl}
                alt={video.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-600/80 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 ml-1 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold line-clamp-1">{video.title}</h3>
              {video.tags && video.tags.length > 0 && (
                <div className="mt-1 flex flex-wrap gap-1">
                  {video.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-gray-700/50 rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Video Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1`}
              title={active.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="p-4 bg-gray-900">
              <h3 className="text-lg font-semibold">{active.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Skeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl bg-gray-800/50 border border-gray-700 h-64 animate-pulse"
        />
      ))}
    </div>
  );
}
