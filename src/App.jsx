import React, { useState } from 'react';
import Header from './components/Header';
import Scene from './components/Scene';
import InfoPanel from './components/InfoPanel';
import Footer from './components/Footer';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-emerald-50 to-amber-50 text-slate-800 flex flex-col">
      <Header />
      <main className="container mx-auto px-4 flex-1 flex flex-col gap-6">
        <div className="w-full rounded-2xl border border-emerald-200/60 shadow-sm bg-white/70 backdrop-blur p-3 md:p-4">
          <Scene isPlaying={isPlaying} />
        </div>
        <InfoPanel isPlaying={isPlaying} onToggle={() => setIsPlaying((v) => !v)} />
      </main>
      <Footer />
    </div>
  );
}
