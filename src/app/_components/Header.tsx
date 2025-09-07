'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/subscribe", label: "Subscribe" },
    { href: "/gallery", label: "Gallery" },
    { href: "/donate", label: "Donate" },
    { href: "/about", label: "About" },
    { href: "/play", label: "Play" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/80 border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-orange-400 via-amber-500 to-fuchsia-500" />
          <span className="text-lg tracking-wide font-semibold">
            TRIBES <span className="text-orange-400">UNITE</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`hover:text-white ${
                pathname === l.href ? "text-orange-400" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen((v: boolean) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-xl bg-orange-500 px-3 py-2 text-sm font-semibold hover:bg-orange-400"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          Menu
        </button>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-slate-800 bg-slate-950/95"
          onClick={() => setOpen(false)}
        >
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-2 text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`block rounded-lg px-3 py-2 border ${
                  pathname === l.href
                    ? "border-orange-500/50 bg-slate-900"
                    : "border-slate-800 hover:bg-slate-900"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
