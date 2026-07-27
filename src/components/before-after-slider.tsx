'use client';

import React, { useState, useRef, useCallback } from 'react';
import { BEFORE_AFTER_PRESETS, BeforeAfterPreset } from '@/data/car-detail-data';
import { ArrowLeftRight, Sparkles } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [activePreset, setActivePreset] = useState<BeforeAfterPreset>(BEFORE_AFTER_PRESETS[0]);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="antes-despues" className="py-20 relative bg-[#07070a] border-t border-b border-purple-950/40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Resultados Reales</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Antes y <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Después</span>
          </h2>

          {/* Presets Tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {BEFORE_AFTER_PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => {
                  setActivePreset(preset);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activePreset.id === preset.id
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/40'
                    : 'glass-panel text-slate-400 hover:text-white hover:bg-purple-950/40 border border-purple-900/30'
                }`}
              >
                {preset.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Slider Container */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-2.5 rounded-3xl border border-purple-500/30 shadow-2xl neon-purple-glow">
            
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={() => setIsDragging(true)}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => setIsDragging(false)}
              className="relative h-[320px] sm:h-[460px] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none touch-none"
            >
              {/* AFTER IMAGE */}
              <img
                src={activePreset.afterImg}
                alt={activePreset.afterLabel}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* AFTER LABEL */}
              <div className="absolute top-4 right-4 glass-panel px-3 py-1.5 rounded-lg border border-purple-400/40 bg-purple-950/80 backdrop-blur-md pointer-events-none z-10">
                <span className="text-xs font-bold text-purple-200">
                  {activePreset.afterLabel}
                </span>
              </div>

              {/* BEFORE IMAGE (Clipped overlay) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activePreset.beforeImg}
                  alt={activePreset.beforeLabel}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
                  style={{ width: containerRef.current?.getBoundingClientRect().width || '100%' }}
                />
              </div>

              {/* BEFORE LABEL */}
              <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-lg border border-slate-700/60 bg-black/80 backdrop-blur-md pointer-events-none z-10">
                <span className="text-xs font-bold text-slate-300">
                  {activePreset.beforeLabel}
                </span>
              </div>

              {/* SLIDER SEPARATOR LINE */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] pointer-events-none z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-purple-600 border-2 border-white shadow-xl shadow-purple-600/80 flex items-center justify-center text-white transform hover:scale-110 transition-transform">
                  <ArrowLeftRight className="w-5 h-5" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
