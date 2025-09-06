import "dotenv/config";
import { db } from "../src/lib/db/connection";
import { Media } from "../src/lib/db/models/Media";

async function seedMedia() {
  await db;
  
  await Media.insertMany([
    {
      type: "image",
      title: "Concept — Fractured Sun",
      thumbUrl: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop",
      mediaUrl: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=2400&auto=format&fit=crop",
      tags: ["concept"],
      priority: 10
    },
    {
      type: "image", 
      title: "The Maze — Consciousness Layer",
      thumbUrl: "https://images.unsplash.com/photo-1520975922284-9f53e84ea2a2?q=80&w=1200&auto=format&fit=crop",
      mediaUrl: "https://images.unsplash.com/photo-1520975922284-9f53e84ea2a2?q=80&w=2400&auto=format&fit=crop",
      tags: ["maze"],
      priority: 9
    },
    {
      type: "video",
      title: "Gameplay Demo",
      thumbUrl: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1200&auto=format&fit=crop", 
      mediaUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["demo"],
      priority: 8
    },
    {
      type: "image",
      title: "Tribal Symbols",
      thumbUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1200&auto=format&fit=crop",
      mediaUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2400&auto=format&fit=crop",
      tags: ["concept", "symbols"],
      priority: 7
    },
    {
      type: "image",
      title: "Card Design Mockup",
      thumbUrl: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=1200&auto=format&fit=crop",
      mediaUrl: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=2400&auto=format&fit=crop", 
      tags: ["cards", "design"],
      priority: 6
    }
  ]);
  
  console.log("Seeded media collection");
  process.exit(0);
}

seedMedia().catch(console.error);
