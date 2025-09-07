'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/70 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 grid md:grid-cols-3 gap-6 text-sm text-slate-400">
        <div>
          <div className="font-semibold text-slate-200">
            TRIBES <span className="text-orange-400">UNITE</span>
          </div>
          <p className="mt-2">
            © {new Date().getFullYear()} — All rights reserved.
          </p>
        </div>
        <div className="space-y-1">
          <Link href="/subscribe" className="block hover:text-white">
            Subscribe
          </Link>
          <Link href="/gallery" className="block hover:text-white">
            Gallery
          </Link>
          <Link href="/donate" className="block hover:text-white">
            Donate
          </Link>
          <Link href="/about" className="block hover:text-white">
            About
          </Link>
          <Link href="/play" className="block hover:text-white">
            Play
          </Link>
          <Link href="/privacy" className="block hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="block hover:text-white">
            Terms
          </Link>
        </div>
        <div className="space-y-2">
          <p>
            Contact:{" "}
            <a
              className="underline hover:text-white"
              href="mailto:hello@tribesunite.game"
            >
              hello@tribesunite.game
            </a>
          </p>
          <p className="text-xs">
            Built as a browser-first SPA. Game will mount at <code>/play</code>.
          </p>
        </div>
      </div>
    </footer>
  );
}
