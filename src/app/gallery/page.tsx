'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components with no SSR to avoid hydration issues
const VideoGrid = dynamic(() => import('./VideoGrid'), { ssr: false });
const MusicList = dynamic(() => import('./MusicList'), { ssr: false });
const ImageGrid = dynamic(() => import('./ImageGrid'), { ssr: false });

type Tab = 'videos' | 'music' | 'images';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<Tab>('videos');

  return (
    <main className="min-h-screen bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            Gallery
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our collection of videos, music, and images from the Tribes Unite project.
          </p>
        </header>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: 'videos', label: 'Videos' },
            { id: 'music', label: 'Music' },
            { id: 'images', label: 'Images' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/20'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'videos' && <VideoGrid />}
          {activeTab === 'music' && <MusicList />}
          {activeTab === 'images' && <ImageGrid />}
        </div>
      </div>
    </main>
  );
}
