export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-slate-800 bg-slate-950/70 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 grid md:grid-cols-4 gap-6 text-sm text-slate-400">
        {/* Branding */}
        <div className="md:col-span-2">
          <div className="font-semibold text-slate-200 text-lg">
            TRIBES <span className="text-orange-400">UNITE</span>
          </div>
          <p className="mt-2 text-slate-400">© {currentYear} — All rights reserved.</p>
          <p className="mt-2 text-xs text-slate-500">
            A roguelike deckbuilder forged as a mirror of the human mind.
          </p>
        </div>

        {/* Main Links */}
        <div className="space-y-2">
          <h3 className="text-slate-200 font-medium mb-2">Explore</h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            <a href="/gallery" className="block hover:text-white transition-colors">Gallery</a>
            <a href="/about" className="block hover:text-white transition-colors">About</a>
            <a href="/donate" className="block hover:text-white transition-colors">Support Us</a>
            <a href="/play" className="block hover:text-white transition-colors">Play Now</a>
          </div>
        </div>

        {/* Legal & Contact */}
        <div className="space-y-2">
          <h3 className="text-slate-200 font-medium mb-2">Legal</h3>
          <div className="space-y-1">
            <a href="/privacy" className="block hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="block hover:text-white transition-colors">Terms of Service</a>
            <a 
              href="mailto:hello@tribesunite.game" 
              className="block text-orange-400 hover:text-orange-300 transition-colors mt-4"
            >
              hello@tribesunite.game
            </a>
          </div>
        </div>
      </div>
      
      {/* Language Selector - Placeholder for future implementation */}
      <div className="border-t border-slate-800 py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <span className="text-xs text-slate-500">
            Coming soon: Français, Español, עברית
          </span>
          <div className="flex space-x-2">
            {['EN', 'FR', 'ES', 'HE'].map((lang) => (
              <button 
                key={lang}
                className="px-2 py-1 text-xs rounded border border-slate-700 hover:bg-slate-800/50 transition-colors"
                disabled={lang !== 'EN'}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
