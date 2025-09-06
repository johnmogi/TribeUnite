import Image from "next/image";
import CtaStrip from "@/components/CtaStrip";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(ellipse_at_top_right,rgba(251,146,60,.35),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,.3),transparent_40%)]"/>
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl leading-tight font-extrabold">
              This is not just a game. <span className="text-orange-400">It is a tool.</span>
            </h1>
            <p className="mt-4 text-slate-300">A roguelike deckbuilder forged as a mirror of the human mind. Unite the tribes. Walk the maze. Wake up.</p>
            <a href="/subscribe" className="mt-8 inline-flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-3 font-semibold hover:bg-orange-400 transition">Subscribe for early access</a>
            <div className="mt-3 text-xs text-slate-400">No spam. Milestones, drops, and playtest invites.</div>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden ring-1 ring-slate-800 shadow-xl">
            {/* replace PLAYLIST_ID */}
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/videoseries?list=PL_PLAYLIST_ID"
              title="TRIBES UNITE — YouTube Album" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>
          </div>
        </div>
      </section>
      <CtaStrip/>
    </>
  );
}
