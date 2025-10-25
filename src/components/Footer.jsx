import React from 'react';

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8 text-sm text-slate-500">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <p>Made with React, Tailwind, and framer-motion</p>
        <p>
          Illustration is purely decorative. No external assets required.
        </p>
      </div>
    </footer>
  );
}
