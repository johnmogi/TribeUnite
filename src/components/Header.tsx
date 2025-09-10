'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close menu when clicking outside or navigating
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    // Close menu on route change
    setIsMenuOpen(false);

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'FR', name: 'Français' },
    { code: 'ES', name: 'Español' },
    { code: 'HE', name: 'עברית' },
  ];

  const navLinks = [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/donate', label: 'Donate' },
    { href: '/about', label: 'About' },
    { href: '/play', label: 'Play' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/80 border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-orange-400 via-amber-500 to-fuchsia-500 transition-transform group-hover:scale-110" />
          <span className="text-lg tracking-wide font-semibold">
            TRIBES <span className="text-orange-400">UNITE</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm hover:text-white transition-colors ${
                pathname === link.href ? 'text-orange-400' : 'text-slate-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all hover:shadow-lg hover:shadow-green-500/20"
            aria-label="Contact us on WhatsApp"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.5 14.4l-2.1 1.1-1.4 1.4c-.2.2-.4.3-.7.3-.1 0-.3 0-.4-.1l-2.5-1.9c-2.1-1.6-3.5-3.9-3.5-6.4 0-3.6 2.9-6.5 6.5-6.5 1.7 0 3.3.7 4.5 1.8 1.2 1.1 1.9 2.7 1.9 4.4 0 3.6-2.9 6.5-6.5 6.5h-.3z" />
              <path d="M12 2C6.5 2 2 6.5 2 12c0 2.1.6 4.1 1.6 5.8L2 22l4.3-1.1c1.6.9 3.4 1.3 5.2 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm5.8 15.2l-1.1-1.7c-.3-.4-.9-.5-1.3-.2l-1.3.8c-.3.2-.7.1-1-.2l-2.5-2.1c-.2-.2-.3-.5-.2-.8l.5-2.6c.1-.4.5-.7.9-.6l3.1.7c.4.1.7.5.6.9l-.5 2.6c-.1.4.1.8.4 1l1.1 1.1c.2.2.5.3.8.2l2.6-.5c.4-.1.7-.5.6-.9l-.7-3.1c-.1-.4-.5-.7-.9-.6l-3.1.7c-.4.1-.7.5-.6.9l.5 2.6c.1.4-.1.8-.4 1l-1.1 1.1" />
            </svg>
            Chat on WhatsApp
          </a>
          
          {/* Language Selector - Desktop */}
          <div className="relative group">
            <button 
              className="flex items-center gap-1 text-slate-300 hover:text-white px-2 py-1 rounded-md text-sm"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {language}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-40 py-2 bg-slate-900 rounded-lg shadow-xl border border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`w-full text-left px-4 py-2 text-sm ${
                    language === lang.code 
                      ? 'text-orange-400 bg-slate-800' 
                      : 'text-slate-300 hover:bg-slate-800/50'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 -mr-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-5">
              <span className="sr-only">Menu</span>
              <span 
                className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : '-translate-y-1.5'
                }`}
              />
              <span 
                className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 translate-x-4' : 'opacity-100'
                }`}
              />
              <span 
                className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        ref={menuRef}
        className={`absolute top-full right-0 w-72 bg-slate-900 border border-slate-800 rounded-lg shadow-xl overflow-hidden z-50 transition-all duration-300 origin-top-right transform ${
          isMenuOpen 
            ? 'opacity-100 scale-100 translate-y-1' 
            : 'opacity-0 scale-95 translate-y-0 pointer-events-none'
        } md:hidden`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="p-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center px-4 py-3 text-base rounded-md ${
                pathname === link.href
                  ? 'bg-slate-800 text-orange-400'
                  : 'text-slate-200 hover:bg-slate-800/50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 text-base text-green-100 bg-green-700/90 hover:bg-green-600 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.498 14.382v3.3a1 1 0 0 1-1.5.865l-3.426-1.712a10 10 0 1 1 4.926-8.99 1 1 0 0 1 .5 1.5 8 8 0 0 0-.5 7.037z" />
            </svg>
            Chat on WhatsApp
          </a>

          {/* Language Selector */}
          <div className="pt-2 mt-2 border-t border-slate-800">
            <div className="px-3 py-2 text-xs font-medium text-slate-400 uppercase tracking-wider">
              Select Language
            </div>
            <div className="grid grid-cols-2 gap-2 p-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center justify-center px-3 py-2 text-sm rounded-md transition-colors ${
                    language === lang.code
                      ? 'bg-orange-500 text-white'
                      : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
