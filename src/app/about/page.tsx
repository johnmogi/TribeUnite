'use client';

import { useState } from 'react';
import Link from 'next/link';

type TabType = 'vision' | 'tech' | 'roadmap';

function VisionTab() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Our Vision</h2>
        <p className="text-gray-300">
          Tribes Unite is more than a game—it's a canvas where history's greatest civilizations meet modern strategy. 
          We're building a world where every decision shapes the course of history, and every player's journey is unique.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Core Principles</h3>
        <ul className="space-y-3">
          {[
            "Historical Depth, Not Historical Accuracy - We take inspiration from history but aren't bound by it",
            "Strategic Depth - Every card and decision matters in the grand scheme",
            "Accessible Complexity - Easy to learn, challenging to master",
            "Community Driven - Your feedback shapes the game's evolution"
          ].map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="text-orange-400 mr-2">•</span>
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TechTab() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Technology Stack</h2>
        <p className="text-gray-300">
          We're building Tribes Unite with modern web technologies to ensure a smooth, responsive experience across all devices.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Frontend</h3>
          <ul className="space-y-2">
            {[
              "Next.js 14 (App Router)",
              "React 19",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion (animations)"
            ].map((item, i) => (
              <li key={i} className="flex items-center">
                <span className="text-orange-400 mr-2">•</span>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Backend</h3>
          <ul className="space-y-2">
            {[
              "Node.js",
              "MongoDB (data storage)",
              "Next.js API Routes",
              "WebSockets (future multiplayer)"
            ].map((item, i) => (
              <li key={i} className="flex items-center">
                <span className="text-orange-400 mr-2">•</span>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function RoadmapTab() {
  const phases = [
    {
      title: "Phase 1: Foundation",
      status: "completed",
      items: [
        "Core game design",
        "Basic card mechanics",
        "Single-player prototype"
      ]
    },
    {
      title: "Phase 2: Development",
      status: "current",
      items: [
        "Web interface",
        "Card collection system",
        "Basic AI opponents",
        "Tutorial system"
      ]
    },
    {
      title: "Phase 3: Expansion",
      status: "upcoming",
      items: [
        "Multiplayer functionality",
        "Additional civilizations",
        "Campaign mode",
        "Mobile app"
      ]
    },
    {
      title: "Future",
      status: "planned",
      items: [
        "Tournament system",
        "Mod support",
        "Expansion packs",
        "Community features"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Development Roadmap</h2>
        <p className="text-gray-300">
          Our journey to create an engaging strategy experience is divided into clear phases.
          We're currently in Phase 2, with many exciting features on the horizon.
        </p>
      </div>

      <div className="space-y-8">
        {phases.map((phase, index) => (
          <div key={index} className="relative pl-6 border-l-2 border-gray-700">
            <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-2 top-1"></div>
            <h3 className="text-xl font-semibold mb-2">
              {phase.title}
              <span className="ml-3 text-sm font-normal px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                {phase.status === 'completed' ? '✓ Completed' : 
                 phase.status === 'current' ? '🔄 In Progress' : 
                 '📅 Planned'}
              </span>
            </h3>
            <ul className="space-y-2 mt-3">
              {phase.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<TabType>('vision');

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Tribes Unite</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A strategy card game where ancient civilizations shape history through trade, alliances, and conquest
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {(['vision', 'tech', 'roadmap'] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gray-800/50 rounded-xl p-6 md:p-8 border border-gray-700 min-h-[400px]">
          {activeTab === 'vision' && <VisionTab />}
          {activeTab === 'tech' && <TechTab />}
          {activeTab === 'roadmap' && <RoadmapTab />}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Ready to join the journey?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to get updates on our progress and be the first to know when we launch.
          </p>
          <Link
            href="/subscribe"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Subscribe for Updates
          </Link>
        </div>
      </div>
    </main>
  );
}
