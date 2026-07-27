'use client';

import React from 'react';
import { Sparkles, MessageCircle, MapPin } from 'lucide-react';
import { BRAND_INFO } from '@/data/car-detail-data';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="relative w-full min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden bg-cover bg-center bg-no-repeat border-b border-purple-950/50 pt-20 pb-12"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(7, 7, 10, 0.65) 0%, rgba(7, 7, 10, 0.55) 50%, rgba(7, 7, 10, 0.85) 100%), url('https://t3.ftcdn.net/jpg/15/25/01/54/360_F_1525015475_7EBNENsdhtJFRgk3uVi3NQMezUuT2kUM.jpg')`
      }}
    >
      
      {/* Background radial purple glow overlay */}
      <div className="absolute inset-0 bg-radial-purple pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center justify-center my-auto">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/90 border border-purple-500/50 text-purple-300 text-xs font-semibold mb-6 backdrop-blur-md shadow-xl shadow-purple-950/60">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <MapPin className="w-3.5 h-3.5 text-purple-400" />
          <span>📍 Córdoba, Argentina • Turnos por WhatsApp</span>
        </div>

        {/* Headline with Drop Shadow */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          Más que un lavado,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
            una transformación
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-xl text-slate-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Detailing Profesional en Córdoba. Tratamientos Cerámicos 9H, pulido corrección de laca, limpieza técnica de interiores y PPF.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
              'Hola BM Car Detail! Quisiera consultar la disponibilidad de turnos en Córdoba.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-950/80 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>Consultar Turno WhatsApp</span>
          </a>

          <a
            href="#cotizador"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-white glass-panel border border-purple-500/50 hover:border-purple-400 transition-all active:scale-95 shadow-lg bg-[#07070a]/70"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Cotizar Mi Auto</span>
          </a>
        </div>

      </div>
    </section>
  );
};
