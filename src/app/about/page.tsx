"use client";
import { useState } from "react";

export default function AboutPage() {
  const [tab, setTab] = useState<"vision"|"tech"|"roadmap">("vision");
  return (
    <section className="mx-auto max-w-4xl px-4 py-14">
      <h2 className="text-2xl font-bold">About the Project</h2>
      <div className="mt-6 flex gap-2">
        {["vision","tech","roadmap"].map(t => (
          <button key={t} onClick={()=>setTab(t as any)}
            className={`rounded-xl px-3 py-2 border text-sm ${tab===t ? "bg-slate-800 border-slate-700" : "bg-slate-900/60 border-slate-800 hover:bg-slate-800"}`}>
            {t[0].toUpperCase()+t.slice(1)}
          </button>
        ))}
      </div>

      {tab==="vision" && (
        <section className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
          <p className="text-slate-300">Unite the four tribes, cross the maze of mind, and awaken. A browser-first deckbuilder that treats play as a path.</p>
        </section>
      )}

      {tab==="tech" && (
        <section className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
          <ul className="list-disc pl-5 text-slate-300 space-y-2">
            <li>App Router (Next.js), Tailwind, no custom backend (Phase A).</li>
            <li>YouTube playlist on landing; game mounts at <code>/play</code> later.</li>
            <li>Newsletter via Mailchimp embed or provider of choice.</li>
            <li>Gallery loads from <code>/media.json</code>.</li>
          </ul>
        </section>
      )}

      {tab==="roadmap" && (
        <section className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
          <ol className="list-decimal pl-5 text-slate-300 space-y-2">
            <li>Ship shell with playlist + subscribe.</li>
            <li>Fill gallery from <code>public/media.json</code>.</li>
            <li>Hook donate buttons.</li>
            <li>Add <code>/play</code> canvas.</li>
            <li>(Phase B) Add Mongo + <code>/api/subscribe</code>.</li>
          </ol>
        </section>
      )}
    </section>
  );
}
