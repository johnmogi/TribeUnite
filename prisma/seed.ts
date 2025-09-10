import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Clear existing data
  await prisma.media.deleteMany({});
  console.log('🗑️  Cleared existing media data');

  // Sample media data
  const mediaData = [
    // Videos
    {
      type: 'video',
      title: 'Tribes Unite - Teaser #1',
      description: 'First look at Tribes Unite gameplay',
      youtubeId: 'dQw4w9WgXcQ',
      thumbUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
      tags: ['teaser', 'gameplay'],
      published: true,
      priority: 10,
    },
    {
      type: 'video',
      title: 'Tribes Unite - Teaser #2',
      description: 'Gameplay showcase',
      youtubeId: 'oHg5SJYRHA0',
      thumbUrl: 'https://i.ytimg.com/vi/oHg5SJYRHA0/hqdefault.jpg',
      tags: ['teaser', 'gameplay'],
      published: true,
      priority: 9,
    },
    // Music
    {
      type: 'music',
      title: 'Tribes Unite - Main Theme',
      description: 'Original soundtrack by Composer Name',
      spotifyEmbedUrl: 'https://open.spotify.com/embed/album/1',
      tags: ['ost', 'soundtrack'],
      published: true,
      priority: 10,
    },
    // Images - Concept Art
    {
      type: 'image',
      title: 'Desert Oasis',
      description: 'Concept art for the desert region',
      album: 'concept',
      mediaUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600',
      thumbUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400',
      width: 1600,
      height: 900,
      tags: ['environment', 'desert'],
      published: true,
      priority: 5,
    },
    {
      type: 'image',
      title: 'Mountain Pass',
      description: 'Concept art for the mountain region',
      album: 'concept',
      mediaUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600',
      thumbUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400',
      width: 1600,
      height: 900,
      tags: ['environment', 'mountains'],
      published: true,
      priority: 4,
    },
    // Images - UI
    {
      type: 'image',
      title: 'Main Menu',
      description: 'Game main menu UI design',
      album: 'ui',
      mediaUrl: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1600',
      thumbUrl: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400',
      width: 1600,
      height: 900,
      tags: ['ui', 'menu'],
      published: true,
      priority: 3,
    },
    // Images - Behind the Scenes
    {
      type: 'image',
      title: 'Development Setup',
      description: 'Our development workspace',
      album: 'bts',
      mediaUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600',
      thumbUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
      width: 1600,
      height: 900,
      tags: ['office', 'team'],
      published: true,
      priority: 1,
    },
  ];

  // Insert media data
  for (const data of mediaData) {
    await prisma.media.create({
      data,
    });
  }

  console.log(`✅ Seeded ${mediaData.length} media items`);
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
