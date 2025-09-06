import { fetchJSON } from "@/lib/api";

type MediaItem = {
  _id: string; type: "image"|"video"; title: string;
  thumbUrl: string; mediaUrl: string; tags?: string[];
};

async function getMedia(): Promise<MediaItem[]> {
  const base = process.env.NEXT_PUBLIC_API_BASE || "";
  const data = await fetchJSON<{ ok: boolean; items: MediaItem[] }>(`${base}/api/media?limit=12`);
  return data.items || [];
}

export default async function GalleryPage() {
  const items = await getMedia();
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-bold">Gallery</h2>
        <div className="text-sm text-slate-400">Images & Videos</div>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(it => (
          <article key={it._id} className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-800">
            {it.type === "image" ? (
              <img src={it.thumbUrl} alt={it.title} className="h-56 w-full object-cover transition group-hover:scale-[1.03]" />
            ) : (
              <div className="aspect-video">
                <iframe className="w-full h-full" src={it.mediaUrl} title={it.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
            <div className="absolute bottom-3 left-3 text-sm">{it.title}</div>
          </article>
        ))}
        {items.length === 0 && (
          <div className="text-slate-400">No media yet. Add to the database or stub a few items.</div>
        )}
      </div>
    </section>
  );
}
