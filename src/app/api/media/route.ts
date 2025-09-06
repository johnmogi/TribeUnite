import { NextResponse } from "next/server";

// Temporary sample data for testing
const sampleMedia = [
  {
    _id: "1",
    title: "Ancient Egyptian Temple",
    description: "Majestic temple ruins in the desert",
    url: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800",
    type: "image",
    tags: ["temple", "ancient", "desert"],
    createdAt: new Date("2024-01-15")
  },
  {
    _id: "2", 
    title: "Pharaoh's Treasure",
    description: "Golden artifacts from ancient Egypt",
    url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
    type: "image",
    tags: ["treasure", "gold", "artifacts"],
    createdAt: new Date("2024-01-14")
  },
  {
    _id: "3",
    title: "Pyramid at Sunset",
    description: "The great pyramid silhouetted against the setting sun",
    url: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800",
    type: "image", 
    tags: ["pyramid", "sunset", "silhouette"],
    createdAt: new Date("2024-01-13")
  },
  {
    _id: "4",
    title: "Game Trailer",
    description: "Tribes Unite gameplay preview",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    type: "video",
    tags: ["gameplay", "trailer", "preview"],
    createdAt: new Date("2024-01-12")
  }
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = Math.min(parseInt(searchParams.get("limit") || "12"), 50);
  const skip = (page - 1) * limit;

  let filteredItems = sampleMedia;
  if (type && type !== "all") {
    filteredItems = sampleMedia.filter(item => item.type === type);
  }

  const items = filteredItems
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(skip, skip + limit);

  const total = filteredItems.length;
  return NextResponse.json({
    items,
    pagination: { page, limit, total, pages: Math.ceil(total / limit) }
  });
}
