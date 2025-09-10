'use client';

import GameCanvas from '../game/components/GameCanvas';
import Link from 'next/link';

export default function PlayPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">Play TRIBES UNITE</h1>
        <p className="text-slate-400">
          Early development preview. The full game experience is coming soon.
        </p>
      </div>
      
      <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="relative w-full aspect-video">
          <GameCanvas />
          
          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-950/90 to-transparent pointer-events-none">
            <div className="text-center p-6 max-w-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/20 mb-4">
                <div className="w-8 h-8 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Game Loading</h3>
              <p className="text-slate-300 text-sm mb-4">
                The game engine is initializing. This is a placeholder for the actual game canvas.
              </p>
              <div className="pointer-events-auto">
                <Link 
                  href="/about" 
                  className="inline-flex items-center text-sm text-orange-400 hover:text-orange-300 group font-medium"
                >
                  Learn more about the game
                  <svg className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <div className="mt-6 text-center">
          <p className="text-slate-400 text-sm">
            Early development preview. The full game experience is coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
