# Gallery Update Guide

This document provides step-by-step instructions for updating the gallery section of the Tribes Unite website.

## Table of Contents
1. [Gallery Structure](#gallery-structure)
2. [Adding New Media](#adding-new-media)
   - [Images](#adding-images)
   - [Videos](#adding-videos)
   - [Music](#adding-music)
3. [Managing Albums](#managing-albums)
4. [API Integration](#api-integration)
5. [Best Practices](#best-practices)

## Gallery Structure

The gallery is built with the following components:

- `src/app/gallery/page.tsx` - Main gallery page with tab navigation
- `src/app/gallery/ImageGrid.tsx` - Handles image display and filtering
- `src/app/gallery/VideoGrid.tsx` - Handles video display
- `src/app/gallery/MusicList.tsx` - Handles audio content
- `public/media.json` - Media metadata and configuration
- `public/media/` - Directory containing media files

## Adding New Media

### Adding Images

1. **Add Image Files**
   - Place your image files in `public/media/images/`
   - Recommended formats: `.webp` (preferred), `.jpg`, or `.png`
   - Recommended dimensions: Minimum 1200x800px for best quality

2. **Update Media Metadata**
   - Open `public/media.json`
   - Add a new entry to the `images` array:
     ```json
     {
       "_id": "unique-id-here",
       "title": "Descriptive Title",
       "mediaUrl": "/media/images/your-image.jpg",
       "thumbUrl": "/media/images/thumbnails/your-image-thumb.jpg",
       "album": "album-name",
       "width": 1200,
       "height": 800,
       "tags": ["tag1", "tag2"]
     }
     ```

### Adding Videos

1. **Upload Videos**
   - Upload videos to a video hosting service (e.g., YouTube, Vimeo)
   - Alternatively, place video files in `public/media/videos/`

2. **Update Media Metadata**
   - Add a new entry to the `videos` array in `public/media.json`:
     ```json
     {
       "_id": "unique-id-here",
       "title": "Video Title",
       "youtubeId": "youtube-video-id", // If using YouTube
       "thumbUrl": "/media/thumbnails/video-thumb.jpg",
       "tags": ["tag1", "tag2"]
     }
     ```

### Adding Music

1. **Add Audio Files**
   - Place audio files in `public/media/music/`
   - Recommended format: `.mp3` or `.m4a`

2. **Update Media Metadata**
   - Add a new entry to the `music` array in `public/media.json`:
     ```json
     {
       "_id": "unique-id-here",
       "title": "Track Title",
       "artist": "Artist Name",
       "duration": "3:45",
       "fileUrl": "/media/music/track.mp3",
       "albumArt": "/media/music/covers/album-cover.jpg"
     }
     ```

## Managing Albums

1. **Create a New Album**
   - Simply specify a new album name in the `album` field of your media items
   - The gallery will automatically group items by album

2. **Update Album Information**
   - Currently, album names are used as-is for display
   - For special formatting, update the `formatAlbumName` function in `ImageGrid.tsx`

## API Integration

The gallery fetches media data from the `/api/media` endpoint. The API expects the following query parameters:

- `type`: Media type (`image`, `video`, or `music`)
- `limit`: Maximum number of items to return
- `album`: (Optional) Filter by album name

Example API call:
```typescript
const response = await fetch('/api/media?type=image&limit=12&album=gameplay');
const data = await response.json();
```

## Best Practices

1. **Image Optimization**
   - Use WebP format for better compression
   - Create thumbnails (recommended size: 400x300px)
   - Keep original aspect ratio for all images

2. **File Naming**
   - Use kebab-case for all filenames (e.g., `gameplay-screenshot-1.webp`)
   - Be descriptive but concise

3. **Metadata**
   - Always include `_id`, `title`, and relevant URLs
   - Add appropriate tags for better filtering
   - Include dimensions for images to prevent layout shifts

4. **Performance**
   - Keep image files under 500KB when possible
   - Use lazy loading for images below the fold
   - Consider implementing pagination for large collections

5. **Accessibility**
   - Always include descriptive `alt` text for images
   - Ensure sufficient color contrast for text overlays
   - Provide captions or descriptions where appropriate

## Troubleshooting

- If images don't appear, check:
  - File paths in `media.json`
  - File permissions
  - Console for 404 errors
  - CORS headers if loading from external sources

- If the gallery doesn't update:
  - Clear browser cache
  - Restart the development server
  - Check for syntax errors in `media.json`
