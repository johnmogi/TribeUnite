'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function PlayPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.clientWidth;
      canvas.height = Math.min(600, window.innerHeight * 0.7);
      drawPlaceholder(canvas, ctx);
    };

    // Initial resize
    resizeCanvas();
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const drawPlaceholder = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw background
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    
    const gridSize = 40;
    const rows = Math.ceil(canvas.height / gridSize);
    const cols = Math.ceil(canvas.width / gridSize);
    
    // Draw vertical lines
    for (let i = 0; i <= cols; i++) {
      const x = i * gridSize;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    
    // Draw horizontal lines
    for (let i = 0; i <= rows; i++) {
      const y = i * gridSize;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    
    // Draw game title
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 24px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('TRIBES UNITE', canvas.width / 2, canvas.height / 2 - 30);
    
    // Draw subtitle
    ctx.fillStyle = '#94a3b8';
    ctx.font = '14px sans-serif';
    ctx.fillText('Game Canvas (Development Preview)', canvas.width / 2, canvas.height / 2 + 10);
    
    // Draw loading indicator
    const now = Date.now();
    const radius = 20;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2 + 60;
    
    // Outer circle
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();
    
    // Progress arc
    const progress = (now % 2000) / 2000;
    ctx.strokeStyle = '#f97316';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, -Math.PI/2, -Math.PI/2 + progress * Math.PI * 2);
    ctx.stroke();
    
    // Add animation frame
    if (canvas) {
      requestAnimationFrame(() => drawPlaceholder(canvas, ctx));
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Play TRIBES UNITE</h1>
        <p className="text-slate-400">
          Early development preview. The full game experience is coming soon.
        </p>
      </div>
      
      <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        {/* Game Canvas */}
        <div className="relative">
          <canvas 
            ref={canvasRef} 
            className="w-full h-auto max-h-[70vh]"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-950/90 to-transparent pointer-events-none">
            <div className="text-center p-6 max-w-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/20 mb-4">
                <div className="w-8 h-8 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Game Loading</h3>
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
        
        {/* Game Controls */}
        <div className="border-t border-slate-800 bg-slate-900/80 p-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button 
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700/80 text-slate-200 text-sm font-medium transition-colors"
              disabled
            >
              New Game
            </button>
            <button 
              className="px-4 py-2 rounded-lg border border-slate-700 hover:border-slate-600 text-slate-300 text-sm font-medium transition-colors"
              disabled
            >
              Load Game
            </button>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
            <span>Alpha v0.1.0</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-6 rounded-xl bg-slate-900/50 border border-slate-800">
        <h3 className="text-lg font-semibold mb-3">About This Preview</h3>
        <p className="text-slate-300 mb-4">
          This is a development preview of the TRIBES UNITE game interface. The full game is currently in development.
          The canvas above will eventually contain the actual game once development is complete.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/subscribe" 
            className="inline-flex items-center text-sm text-orange-400 hover:text-orange-300 font-medium"
          >
            Get notified when we launch
          </Link>
          <Link 
            href="/about" 
            className="inline-flex items-center text-sm text-slate-400 hover:text-slate-200 font-medium"
          >
            Learn about our development roadmap
          </Link>
        </div>
      </div>
    </div>
  );
}
