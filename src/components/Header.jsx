import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="container mx-auto px-4 pt-8 pb-4">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-800">
            Village Dance by the Pool
          </h1>
          <p className="text-slate-600 text-sm md:text-base">
            A serene 2D scene of a village girl dancing by the water
          </p>
        </div>
      </div>
    </header>
  );
}
