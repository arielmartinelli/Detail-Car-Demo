'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { BRAND_INFO } from '@/data/car-detail-data';

export const WhatsappFloat: React.FC = () => {
  const [tooltipOpen, setTooltipOpen] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {tooltipOpen && (
        <div className="relative glass-panel px-4 py-3 rounded-2xl border border-emerald-500/40 shadow-2xl max-w-[260px] text-xs animate-in fade-in slide-in-from-bottom-3 duration-300 bg-[#0c0d16]/95">
          <button
            onClick={() => setTooltipOpen(false)}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center border border-slate-700"
            aria-label="Cerrar aviso"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-emerald-400">Atención en Córdoba</span>
          </div>
          <p className="text-slate-200 font-medium leading-snug">
            ¿Tenés dudas o querés cotizar? Escribinos directo por WhatsApp.
          </p>
        </div>
      )}

      {/* Floating Official Wikimedia WhatsApp Icon */}
      <a
        href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
          'Hola BM Car Detail! Quisiera consultar la disponibilidad de turnos en Córdoba.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group transition-transform duration-300 transform hover:scale-110 active:scale-95 block"
        aria-label="Contactar por WhatsApp"
      >
        <span className="animate-ping absolute inset-0 rounded-full bg-[#25D366] opacity-30"></span>
        <img
          src="/whatsapp_icon.png"
          alt="WhatsApp BM Car Detail"
          className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-[0_10px_20px_rgba(37,211,102,0.45)] relative z-10"
        />
      </a>
    </div>
  );
};
