import GameCanvas from './components/GameCanvas';

export default function GamePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-white mb-4">
          TRIBES <span className="text-orange-400">UNITE</span>
        </h1>
        <p className="text-center text-slate-300 mb-8">Early Development Preview</p>
        <div className="flex justify-center">
          <GameCanvas />
        </div>
        <div className="mt-4 text-center text-slate-500 text-sm">
          Game canvas initialized successfully
        </div>
      </div>
    </div>
  );
}
