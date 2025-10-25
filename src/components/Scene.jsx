import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function Scene({ isPlaying }) {
  const rippleAnim = useMemo(() => ({
    r: isPlaying ? [2, 18] : 6,
    opacity: isPlaying ? [0.6, 0] : 0.3,
    transition: isPlaying
      ? { duration: 2.4, repeat: Infinity, ease: 'easeOut' }
      : { duration: 0.3 },
  }), [isPlaying]);

  const sway = useMemo(() => ({
    rotate: isPlaying ? [0, 3, -3, 0] : 0,
    transition: isPlaying
      ? { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }
      : { duration: 0.2 },
  }), [isPlaying]);

  const armWaveLeft = useMemo(() => ({
    rotate: isPlaying ? [10, 25, 10] : 10,
    transition: isPlaying
      ? { duration: 1.4, repeat: Infinity, ease: 'easeInOut' }
      : { duration: 0.2 },
  }), [isPlaying]);

  const armWaveRight = useMemo(() => ({
    rotate: isPlaying ? [-10, -28, -10] : -10,
    transition: isPlaying
      ? { duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }
      : { duration: 0.2 },
  }), [isPlaying]);

  const step = useMemo(() => ({
    y: isPlaying ? [0, -2, 0] : 0,
    transition: isPlaying
      ? { duration: 0.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.1 }
      : { duration: 0.2 },
  }), [isPlaying]);

  return (
    <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-gradient-to-b from-sky-200 to-sky-100">
      <svg viewBox="0 0 960 540" className="w-full h-full">
        <defs>
          <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#bfe7ff" />
            <stop offset="100%" stopColor="#eaf6ff" />
          </linearGradient>
          <linearGradient id="water" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#88d0f0" />
            <stop offset="100%" stopColor="#6bbddf" />
          </linearGradient>
          <linearGradient id="grass" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#a7e6a1" />
            <stop offset="100%" stopColor="#71c97c" />
          </linearGradient>
          <linearGradient id="dress" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ff7aa2" />
            <stop offset="100%" stopColor="#ff4f88" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="960" height="540" fill="url(#sky)" />

        <g>
          <ellipse cx="150" cy="380" rx="160" ry="60" fill="#68b96f" opacity="0.5" />
          <ellipse cx="760" cy="410" rx="220" ry="80" fill="#66bb6a" opacity="0.45" />
        </g>

        <g>
          <rect x="90" y="280" width="140" height="90" fill="#c97a40" />
          <polygon points="80,280 160,230 240,280" fill="#9a4d2a" />
          <rect x="120" y="310" width="35" height="60" fill="#6b3d22" />
          <rect x="170" y="300" width="40" height="35" fill="#f0d9a6" />
        </g>

        <g>
          <ellipse cx="520" cy="380" rx="200" ry="70" fill="url(#water)" />
          <ellipse cx="520" cy="380" rx="210" ry="80" fill="#2a7faa" opacity="0.18" />

          <motion.circle cx="520" cy="380" fill="none" stroke="#ffffff" strokeWidth="2" {...rippleAnim} />
          <motion.circle cx="520" cy="380" fill="none" stroke="#ffffff" strokeWidth="2" {...rippleAnim} transition={isPlaying ? { ...rippleAnim.transition, delay: 0.6 } : rippleAnim.transition} />
          <motion.circle cx="520" cy="380" fill="none" stroke="#ffffff" strokeWidth="2" {...rippleAnim} transition={isPlaying ? { ...rippleAnim.transition, delay: 1.2 } : rippleAnim.transition} />
        </g>

        <g>
          <g transform="translate(740,330)">
            <rect x="-10" y="-80" width="20" height="80" fill="#6b4f2a" />
            <circle cx="0" cy="-120" r="40" fill="#58a55b" />
            <circle cx="-30" cy="-110" r="26" fill="#58a55b" />
            <circle cx="26" cy="-108" r="24" fill="#58a55b" />
          </g>
          <g transform="translate(320,320)">
            <rect x="-10" y="-80" width="20" height="80" fill="#6b4f2a" />
            <circle cx="0" cy="-120" r="44" fill="#5ab25f" />
            <circle cx="-34" cy="-108" r="26" fill="#5ab25f" />
            <circle cx="30" cy="-110" r="28" fill="#5ab25f" />
          </g>
        </g>

        <rect x="0" y="360" width="960" height="180" fill="url(#grass)" />

        <motion.g
          transform="translate(360,345)"
          style={{ transformOrigin: '360px 345px' }}
          {...sway}
        >
          <motion.g {...step}>
            <circle cx="0" cy="-120" r="18" fill="#f5c39b" />
            <path d="M -18 -72 Q 0 -96 18 -72 L 12 -20 Q 0 -12 -12 -20 Z" fill="url(#dress)" />
            <rect x="-6" y="-100" width="12" height="24" rx="6" fill="#f5c39b" />

            <motion.g style={{ transformOrigin: '-16px -88px' }} {...armWaveLeft}>
              <rect x="-44" y="-92" width="28" height="8" rx="4" fill="#f5c39b" />
            </motion.g>
            <motion.g style={{ transformOrigin: '16px -88px' }} {...armWaveRight}>
              <rect x="16" y="-92" width="28" height="8" rx="4" fill="#f5c39b" />
            </motion.g>

            <g>
              <rect x="-12" y="-20" width="10" height="34" rx="4" fill="#6a4436" />
              <rect x="2" y="-20" width="10" height="34" rx="4" fill="#6a4436" />
              <rect x="-16" y="14" width="18" height="6" rx="3" fill="#3a2b23" />
              <rect x="0" y="14" width="18" height="6" rx="3" fill="#3a2b23" />
            </g>

            <path d="M -14 -136 Q 0 -150 14 -136 Q 0 -132 -14 -136" fill="#38251d" />
            <rect x="-12" y="-134" width="24" height="8" rx="4" fill="#38251d" />
          </motion.g>
        </motion.g>

        <g opacity="0.33">
          <ellipse cx="360" cy="360" rx="28" ry="6" fill="#356e40" />
        </g>

        <g>
          <circle cx="840" cy="90" r="10" fill="#fff8c4" />
          <circle cx="840" cy="90" r="30" fill="#fff8c4" opacity="0.3" />
        </g>

        <g opacity="0.3">
          <circle cx="140" cy="120" r="26" fill="#ffffff" />
          <circle cx="170" cy="120" r="20" fill="#ffffff" />
          <circle cx="116" cy="130" r="16" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
}
