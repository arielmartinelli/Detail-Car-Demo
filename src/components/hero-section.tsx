'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, DollarSign, CheckCircle2, MapPin, ArrowRight, Calendar } from 'lucide-react';
import { AnimatedCounters } from './animated-counters';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section 
      id="inicio" 
      className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-cover bg-center bg-no-repeat pt-28 pb-12 border-b border-purple-950/50"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(7, 7, 10, 0.75) 0%, rgba(7, 7, 10, 0.65) 50%, rgba(7, 7, 10, 0.95) 100%), url('https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=1800')`
      }}
    >
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-purple pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Hero Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Badges */}
          <motion.div 
            className="lg:col-span-8 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-semibold mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>📍 Córdoba Capital • Turnos Abiertos</span>
            </div>

            {/* Giant Title inspired by Vivid Wash Reference */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] uppercase">
              DONDE TU AUTO ENCUENTRA SU{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400 font-mono">
                MÁXIMO BRILLO
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed">
              Detailing Profesional de alta precisión en Córdoba. Tratamientos nanocerámicos 9H, pulido corrección de laca y restauraciones de showroom.
            </p>

            {/* Connected Floating Badge Nodes (Vivid Wash Reference Style) */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-950/60 border border-purple-500/30 text-slate-200 text-xs font-bold shadow-md">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Calidad Premium Garantizada</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-950/60 border border-purple-500/30 text-slate-200 text-xs font-bold shadow-md">
                <DollarSign className="w-3.5 h-3.5 text-lime-400" />
                <span>Presupuestos Sin Sorpresas</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-950/60 border border-purple-500/30 text-slate-200 text-xs font-bold shadow-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Detailing de Confianza</span>
              </div>
            </div>

            {/* Primary Action CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-extrabold text-black bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-300 hover:to-emerald-300 shadow-xl shadow-lime-400/30 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Mi Turno (Por Pasos)</span>
              </button>

              <a
                href="#servicios"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-white glass-panel border border-purple-500/40 hover:border-purple-400 transition-all"
              >
                <span>Ver Servicios & Resultados</span>
                <ArrowRight className="w-4 h-4 text-purple-400" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Animated Live Counters Row */}
        <AnimatedCounters />

      </div>

    </section>
  );
};
