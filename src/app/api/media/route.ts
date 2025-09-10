import { NextResponse } from 'next/server';

type MediaItem = {
  _id: string;
  type: 'video' | 'music' | 'image';
  title: string;
  description?: string;
  tags?: string[];
  thumbUrl?: string;
  mediaUrl?: string;
  youtubeId?: string;
  spotifyEmbedUrl?: string;
  album?: string;
  width?: number;
  height?: number;
  published: boolean;
  priority?: number;
  createdAt: Date | string;
};

// Mock data for development
const mockMedia: MediaItem[] = [
  // Videos
  {
    _id: 'v1',
    type: 'video',
    title: 'Game Trailer',
    description: 'Official trailer for Tribes Unite',
    youtubeId: 'dQw4w9WgXcQ', // This is a placeholder ID (Rick Astley - Never Gonna Give You Up)
    thumbUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    tags: ['trailer', 'gameplay'],
    published: true,
    priority: 1,
    createdAt: new Date('2024-02-15'),
  },
  {
    _id: 'v2',
    type: 'video',
    title: 'Gameplay Preview',
    youtubeId: 'oHg5SJYRHA0', // Another placeholder (Rickroll)
    thumbUrl: 'https://i.ytimg.com/vi/oHg5SJYRHA0/hqdefault.jpg',
    tags: ['gameplay', 'preview'],
    published: true,
    createdAt: new Date('2024-02-10'),
  },
  
  // Music
  {
    _id: 'm1',
    type: 'music',
    title: 'Main Theme',
    description: 'Epic orchestral theme for Tribes Unite',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/album/1B1fTltpxhLieM3j0GmGqU',
    tags: ['ost', 'theme'],
    published: true,
    priority: 1,
    createdAt: new Date('2024-01-20'),
  },
  
  // Images - Concept Art
  {
    _id: 'i1',
    type: 'image',
    title: 'Desert Oasis',
    description: 'Concept art for the desert region',
    mediaUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600',
    thumbUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400',
    album: 'concept',
    width: 1600,
    height: 1200,
    tags: ['environment', 'desert'],
    published: true,
    priority: 1,
    createdAt: new Date('2024-01-15'),
  },
  {
    _id: 'i2',
    type: 'image',
    title: 'Ancient Temple',
    mediaUrl: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1600',
    thumbUrl: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400',
    album: 'concept',
    width: 1600,
    height: 1067,
    tags: ['environment', 'temple'],
    published: true,
    createdAt: new Date('2024-01-14'),
  },
  
  // Images - UI
  {
    _id: 'i3',
    type: 'image',
    title: 'Main Menu',
    mediaUrl: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=1600',
    thumbUrl: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400',
    album: 'ui',
    width: 1600,
    height: 900,
    tags: ['ui', 'menu'],
    published: true,
    createdAt: new Date('2024-01-13'),
  },
  
  // Images - Behind the Scenes
  {
    _id: 'i4',
    type: 'image',
    title: 'Team Photo',
    mediaUrl: 'https://images.unsplash.com/photo-1522071820081-009c01201c0e?w=1600',
    thumbUrl: 'https://images.unsplash.com/photo-1522071820081-009c01201c0e?w=400',
    album: 'bts',
    width: 1600,
    height: 1067,
    tags: ['team', 'bts'],
    published: true,
    createdAt: new Date('2024-01-12'),
  },
];

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type') as 'video' | 'music' | 'image' | null;
    const album = searchParams.get('album');
    const tag = searchParams.get('tag');
    const page = Math.max(parseInt(searchParams.get('page') || '1', 10), 1);
    const limit = Math.min(parseInt(searchParams.get('limit') || '12', 10), 50);
    
    // Filter items
    let filteredItems = [...mockMedia];
    
    // Apply filters
    if (type) {
      filteredItems = filteredItems.filter(item => item.type === type);
    }
    
    if (album) {
      filteredItems = filteredItems.filter(item => item.album === album);
    }
    
    if (tag) {
      filteredItems = filteredItems.filter(item => 
        item.tags?.includes(tag)
      );
    }
    
    // Only return published items
    filteredItems = filteredItems.filter(item => item.published);
    
    // Sort by priority (highest first) and then by creation date (newest first)
    const sortedItems = filteredItems.sort((a, b) => {
      const priorityA = a.priority || 0;
      const priorityB = b.priority || 0;
      
      if (priorityA !== priorityB) {
        return priorityB - priorityA;
      }
      
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return dateB - dateA;
    });
    
    // Apply pagination
    const total = sortedItems.length;
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedItems = sortedItems.slice(start, end);
    
    // Format dates to ISO strings for JSON serialization
    const formattedItems = paginatedItems.map(item => ({
      ...item,
      createdAt: new Date(item.createdAt).toISOString(),
    }));
    
    return NextResponse.json({
      ok: true,
      items: formattedItems,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
    
  } catch (error) {
    console.error('Error in media API route:', error);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
