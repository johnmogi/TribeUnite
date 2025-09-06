"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Media = {
  type: "image" | "video";
  title: string;
  thumbUrl: string;
  mediaUrl: string;
  tags?: string[];
};

export default function MediaGrid() {
  const [items, setItems] = useState<Media[]>([]);
  const [filter, setFilter] = useState<"all"|"image"|"video">("all");

  useEffect(() => {
    fetch("/media.json").then(r => r.json()).then(setItems);
  }, []);

  const filtered = items.filter(i => filter==="all" ? true : i.type===filter);

  return (
    <>
      <div className="flex gap-2">
        {["all","image","video"].map(f => (
          <button key={f} onClick={()=>setFilter(f as any)}
            className={`rounded-xl px-3 py-2 border text-sm ${filter===f ? "bg-slate-800 border-slate-700" : "bg-slate-900/60 border-slate-800 hover:bg-slate-800"}`}>
            {f[0].toUpperCase()+f.slice(1)}
          </button>
        ))}
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((m, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-800">
            {m.type==="image" ? (
              <Image src={m.thumbUrl} alt={m.title} width={1200} height={700}
                     className="h-56 w-full object-cover transition group-hover:scale-[1.03]"/>
            ) : (
              <div className="aspect-video">
                <iframe className="w-full h-full" src={m.mediaUrl} title={m.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"/>
            <div className="absolute bottom-3 left-3 text-sm">{m.title}</div>
          </div>
        ))}
      </div>
    </>
  );
}
