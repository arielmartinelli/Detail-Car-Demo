'use client';

import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section 
      id="inicio" 
      className="relative w-full min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden bg-cover bg-center bg-no-repeat pt-20 pb-12 border-b border-gray-900"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(7, 7, 10, 0.7) 0%, rgba(7, 7, 10, 0.6) 50%, rgba(7, 7, 10, 0.95) 100%), url('https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=1800')`
      }}
    >
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-red pointer-events-none" />

      {/* Super Minimal Hero Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center justify-center my-auto">
        
        {/* Main Title Only */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
          EL MEJOR CAR DETAIL EN{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-rose-300">
            CÓRDOBA
          </span>
        </h1>

        {/* 2 Clean Action Buttons Only */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto px-4 sm:px-0">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4.5 rounded-xl text-base font-black text-white bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-2xl shadow-red-950/80 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 border border-red-500/40"
          >
            <Calendar className="w-5 h-5 stroke-[2.5]" />
            <span>Agendar Turno</span>
          </button>

          <a
            href="#servicios"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4.5 rounded-xl text-base font-bold text-slate-100 glass-panel border border-gray-700/80 hover:border-gray-500 transition-all active:scale-95 shadow-xl bg-[#0b0c12]/80"
          >
            <span>Ver Servicios</span>
            <ArrowRight className="w-5 h-5 text-red-500" />
          </a>
        </div>

      </div>

    </section>
  );
};
