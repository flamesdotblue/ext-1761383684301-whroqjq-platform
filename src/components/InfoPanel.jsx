import React from 'react';
import { Play, PauseCircle, Info } from 'lucide-react';

export default function InfoPanel({ isPlaying, onToggle }) {
  return (
    <section className="w-full grid md:grid-cols-[1fr_auto] gap-4 items-center">
      <div className="rounded-xl bg-white/70 border border-slate-200 p-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-sky-100 text-sky-700"><Info className="w-4 h-4" /></div>
          <div>
            <h2 className="font-medium text-slate-800">About this scene</h2>
            <p className="text-slate-600 text-sm mt-1">
              A minimalist vector vignette of a peaceful village: a small hut, swaying trees, a reflective pool, and a girl dancing gracefully by the water. Use the control to play or pause the motion.
            </p>
          </div>
        </div>
      </div>
      <div className="flex md:justify-end">
        <button
          onClick={onToggle}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 active:translate-y-[1px] transition"
          aria-pressed={isPlaying}
        >
          {isPlaying ? <PauseCircle className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          {isPlaying ? 'Pause dance' : 'Play dance'}
        </button>
      </div>
    </section>
  );
}
