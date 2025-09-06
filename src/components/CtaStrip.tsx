export default function CtaStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
        <div className="text-xl font-semibold">Unite the tribes. Walk the maze. Wake up.</div>
        <a href="/subscribe" className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 font-semibold hover:bg-orange-400">Join the Circle</a>
      </div>
    </section>
  );
}
