'use client';
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

type ImageItem = {
  _id: string;
  title: string;
  mediaUrl: string;
  thumbUrl?: string;
  album?: string;
  width?: number;
  height?: number;
  tags?: string[];
};

export default function ImageGrid() {
  const [items, setItems] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [album, setAlbum] = useState<string | undefined>(undefined);
  const [active, setActive] = useState<ImageItem | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('/api/media?type=image&limit=48');
        if (!res.ok) {
          throw new Error('Failed to fetch images');
        }
        const json = await res.json();
        setItems(json.items || []);
      } catch (err) {
        console.error('Error fetching images:', err);
        setError('Failed to load images. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Get unique albums from items
  const albums = useMemo(() => {
    const albumSet = new Set<string>();
    items.forEach((item) => {
      if (item.album) {
        albumSet.add(item.album);
      }
    });
    return Array.from(albumSet).sort();
  }, [items]);

  // Filter items by selected album
  const filteredItems = useMemo(() => {
    if (!album) return items;
    return items.filter((item) => item.album === album);
  }, [items, album]);

  if (loading) return <Skeleton />;

  if (error) {
    return (
      <div className="text-center py-10 text-red-400">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      {/* Album Filters */}
      {albums.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setAlbum(undefined)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              !album ? 'bg-orange-600' : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            All
          </button>
          {albums.map((albumName) => (
            <button
              key={albumName}
              onClick={() => setAlbum(albumName)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                album === albumName ? 'bg-orange-600' : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {formatAlbumName(albumName)}
            </button>
          ))}
        </div>
      )}

      {/* Image Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-gray-800/30 rounded-xl border border-dashed border-gray-700">
          <p className="text-gray-400">No images found{album ? ` in ${formatAlbumName(album)}` : ''}.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredItems.map((img) => (
            <button
              key={img._id}
              onClick={() => setActive(img)}
              className="group relative overflow-hidden rounded-lg bg-gray-800/50 border border-gray-700 hover:border-orange-500/50 transition"
            >
              <div className="aspect-square relative">
                <Image
                  src={img.thumbUrl || img.mediaUrl}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>
              {(img.title || img.album) && (
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  {img.title && <div className="font-medium text-sm truncate">{img.title}</div>}
                  {img.album && <div className="text-xs text-gray-300 mt-0.5">{formatAlbumName(img.album)}</div>}
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-gray-300 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setActive(null);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div
            className="relative max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-0 pb-[56.25%] bg-black">
              <Image
                src={active.mediaUrl}
                alt={active.title || 'Gallery image'}
                fill
                className="object-contain"
                priority
              />
            </div>
            {(active.title || active.album) && (
              <div className="p-4 bg-gray-900 border-t border-gray-800">
                {active.title && <h3 className="text-lg font-semibold">{active.title}</h3>}
                {active.album && (
                  <div className="text-sm text-gray-400 mt-1">
                    Album: {formatAlbumName(active.album)}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// Helper function to format album names for display
function formatAlbumName(albumName: string): string {
  return albumName
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function Skeleton() {
  return (
    <div className="space-y-6">
      {/* Album filters skeleton */}
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-9 w-20 bg-gray-800 rounded-full animate-pulse"
          />
        ))}
      </div>
      
      {/* Image grid skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-gray-800/50 rounded-lg animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}
