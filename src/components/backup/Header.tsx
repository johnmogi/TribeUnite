export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/80 border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/favicon.svg" alt="logo" className="h-9 w-9 rounded-full"/>
          <span className="text-lg tracking-wide font-semibold">
            TRIBES <span className="text-orange-400">UNITE</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="/subscribe" className="hover:text-white">Subscribe</a>
          <a href="/gallery" className="hover:text-white">Gallery</a>
          <a href="/donate" className="hover:text-white">Donate</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="/play" className="hover:text-white">Play</a>
        </nav>
        <a href="/subscribe" className="md:hidden inline-flex items-center justify-center rounded-xl bg-orange-500 px-3 py-2 text-sm font-semibold hover:bg-orange-400">Join</a>
      </div>
    </header>
  );
}
