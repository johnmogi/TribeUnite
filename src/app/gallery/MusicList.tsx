'use client';
import { useEffect, useState } from 'react';

type MusicItem = {
  _id: string;
  title: string;
  spotifyEmbedUrl: string;
  tags?: string[];
  description?: string;
};

export default function MusicList() {
  const [items, setItems] = useState<MusicItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const res = await fetch('/api/media?type=music&limit=10');
        if (!res.ok) {
          throw new Error('Failed to fetch music');
        }
        const json = await res.json();
        setItems(json.items || []);
      } catch (err) {
        console.error('Error fetching music:', err);
        setError('Failed to load music. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMusic();
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-400">
        <p>{error}</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-10 text-gray-400">
        <p>No music available yet. Check back soon for updates!</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {items.map((item) => (
        <div
          key={item._id}
          className="rounded-xl overflow-hidden border border-gray-700 bg-gray-800/50 transition hover:border-orange-500/50"
        >
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            {item.description && (
              <p className="text-gray-300 mb-4">{item.description}</p>
            )}
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-gray-700/50 rounded-full text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="w-full">
            <iframe
              src={item.spotifyEmbedUrl}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function Skeleton() {
  return (
    <div className="grid gap-6">
      {Array.from({ length: 2 }).map((_, i) => (
        <div key={i} className="rounded-xl bg-gray-800/50 border border-gray-700 p-6">
          <div className="h-7 w-48 bg-gray-700 rounded mb-4 animate-pulse"></div>
          <div className="h-4 w-32 bg-gray-700 rounded mb-6 animate-pulse"></div>
          <div className="h-36 w-full bg-gray-700 rounded animate-pulse"></div>
        </div>
      ))}
    </div>
  );
}
