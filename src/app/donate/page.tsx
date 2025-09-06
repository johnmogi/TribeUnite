export default function DonatePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="text-2xl font-bold">Support the Vision</h2>
        <p className="mt-1 text-sm text-slate-400">If this resonates, help ship the browser build and soundtrack.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {/* replace links */}
          <a href="https://patreon.com/" target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 hover:bg-slate-800"><span>💖</span> Patreon</a>
          <a href="https://paypal.me/" target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 hover:bg-slate-800"><span>💸</span> PayPal</a>
          <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 hover:bg-slate-800"><span>🪙</span> Crypto</a>
        </div>
      </div>
    </section>
  );
}
