'use client';

import React from 'react';
import { Sparkles, MessageCircle, MapPin, Shield } from 'lucide-react';
import { BRAND_INFO } from '@/data/car-detail-data';

export const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-28 sm:pt-32 pb-16 overflow-hidden bg-radial-purple">
      
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Location & Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <MapPin className="w-3.5 h-3.5 text-purple-400" />
          <span>📍 Córdoba, Argentina • Turnos por WhatsApp</span>
        </div>

        {/* Main Clean Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Más que un lavado,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
            una transformación
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Detailing Profesional en Córdoba. Tratamientos Cerámicos 9H, pulido corrección de laca, limpieza técnica de interiores y PPF.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 px-4 sm:px-0">
          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
              'Hola BM Car Detail! Quisiera consultar la disponibilidad de turnos en Córdoba.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-950/60 transition-all duration-300 transform active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Consultar Turno WhatsApp</span>
          </a>

          <a
            href="#cotizador"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 glass-panel border border-purple-500/30 hover:border-purple-400 transition-all active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Cotizar Mi Auto</span>
          </a>
        </div>

        {/* Hero Showcase Image */}
        <div className="mt-10 max-w-4xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden glass-panel p-2 sm:p-2.5 border border-purple-500/30 shadow-2xl neon-purple-glow">
          <div className="relative h-[220px] sm:h-[380px] w-full rounded-xl sm:rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1200"
              alt="BM Car Detail Córdoba - Tratamiento Cerámico"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-black/20" />
            
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 glass-panel p-3 rounded-xl border border-purple-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-bold text-white">BM CAR DETAIL • CÓRDOBA</span>
              </div>
              <span className="text-[11px] sm:text-xs text-purple-300 font-medium">Tratamientos Cerámicos 9H 🛡️</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
