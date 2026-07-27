'use client';

import React, { useEffect, useState } from 'react';

interface SoapBubble {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const GlowingBubblesBg: React.FC = () => {
  const [bubbles, setBubbles] = useState<SoapBubble[]>([]);

  useEffect(() => {
    // 9 subtle, highly transparent soap bubbles
    const initialBubbles: SoapBubble[] = Array.from({ length: 9 }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 26) + 14, // 14px to 40px
      left: Math.random() * 92 + 3, // 3% to 95%
      duration: Math.random() * 10 + 12, // 12s to 22s (very slow and gentle)
      delay: Math.random() * 8, // 0s to 8s
      opacity: Math.random() * 0.12 + 0.06, // Ultra translucent: 0.06 to 0.18 opacity
    }));
    setBubbles(initialBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full border border-white/20 animate-bubble-float"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            bottom: '-50px',
            opacity: b.opacity,
            background: 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.02) 60%, rgba(168, 85, 247, 0.15) 100%)',
            boxShadow: 'inset -2px -2px 6px rgba(168, 85, 247, 0.15), inset 2px 2px 6px rgba(255, 255, 255, 0.3)',
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
          }}
        >
          {/* Subtle specular shine dot */}
          <span className="absolute top-[20%] left-[20%] w-[20%] h-[20%] rounded-full bg-white/40 blur-[0.5px]" />
        </div>
      ))}
    </div>
  );
};
