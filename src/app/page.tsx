import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,146,60,.15),transparent_60%)] animate-pulse-slow" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,.1),transparent_60%)] animate-pulse-slow animation-delay-2000" />
        </div>
        
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              This is not just a game. 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                It is a tool.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
              A roguelike deckbuilder forged as a mirror of the human mind. 
              Unite the tribes. Walk the maze. Wake up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link 
                href="/play" 
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-4 font-semibold text-white hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95"
              >
                Play Now (Alpha)
              </Link>
              <Link 
                href="/subscribe" 
                className="inline-flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700 px-6 py-4 font-medium text-white hover:bg-slate-800/70 transition-all hover:scale-[1.02] active:scale-95"
              >
                Subscribe for Updates
              </Link>
            </div>
            <p className="text-sm text-slate-400 mt-2">
              No account needed for the alpha. No spam. Just updates.
            </p>
          </div>
          
          <div className="relative aspect-video rounded-2xl overflow-hidden ring-1 ring-slate-800/50 shadow-2xl bg-slate-900/50 backdrop-blur-sm">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <img 
              src="/placeholder-gameplay.jpg" 
              alt="TRIBES UNITE Gameplay" 
              className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-slate-950/50 to-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">A New Kind of Deckbuilder</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Combining strategic depth with psychological insight. Every choice matters.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Strategic Depth",
                description: "Hundreds of cards and combinations to discover and master.",
                icon: "♟️"
              },
              {
                title: "Psychological Insight",
                description: "Gameplay that reflects and responds to your decisions.",
                icon: "🧠"
              },
              {
                title: "Endless Replayability",
                description: "Procedural generation ensures no two runs are the same.",
                icon: "♾️"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800/50 hover:border-orange-500/30 transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              href="/about" 
              className="inline-flex items-center text-orange-400 hover:text-orange-300 group font-medium"
            >
              Learn more about our vision
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
