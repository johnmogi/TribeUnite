'use client';

import { useEffect, useRef } from 'react';
import { GameState, createGameState } from '../types/game.types';

const GameCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameState = useRef<GameState>({
    width: 800,
    height: 600,
    isRunning: false,
    lastTime: 0,
    ctx: null,
  });
  const animationFrameId = useRef<number>();

  // Initialize game
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = gameState.current.width;
    canvas.height = gameState.current.height;
    gameState.current.ctx = ctx;

    // Handle window resize
    const handleResize = () => {
      if (!canvas) return;
      // You can add responsive sizing here if needed
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Game loop
  useEffect(() => {
    const gameLoop = (timestamp: number) => {
      const deltaTime = timestamp - gameState.current.lastTime;
      gameState.current.lastTime = timestamp;

      update(deltaTime);
      render();

      if (gameState.current.isRunning) {
        animationFrameId.current = requestAnimationFrame(gameLoop);
      }
    };

    const update = (deltaTime: number) => {
      // Update game logic here
    };

    const render = () => {
      const { ctx, width, height } = gameState.current;
      if (!ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Draw background
      ctx.fillStyle = '#0f172a'; // Dark blue background
      ctx.fillRect(0, 0, width, height);

      // Draw a simple shape to verify it's working
      ctx.fillStyle = '#f59e0b'; // Orange
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 30, 0, Math.PI * 2);
      ctx.fill();

      // Add some text
      ctx.fillStyle = '#ffffff';
      ctx.font = '24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('TRIBES UNITE', width / 2, height / 2 - 50);
      ctx.font = '16px Arial';
      ctx.fillText('Game Canvas Initialized', width / 2, height / 2 + 50);
    };

    // Start the game loop
    gameState.current.isRunning = true;
    animationFrameId.current = requestAnimationFrame(gameLoop);

    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="bg-slate-900 border border-slate-700 rounded-lg shadow-xl w-full max-w-4xl aspect-video"
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '80vh',
        }}
        width={gameState.current.width}
        height={gameState.current.height}
      />
      {!gameState.current.ctx && (
        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
          <p>Loading game canvas...</p>
        </div>
      )}
    </div>
  );
};

export default GameCanvas;
