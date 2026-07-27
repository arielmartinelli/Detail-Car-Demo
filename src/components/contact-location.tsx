'use client';

import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { BRAND_INFO } from '@/data/car-detail-data';

export const ContactLocation: React.FC = () => {
  return (
    <section id="contacto" className="py-24 relative bg-[#07070a] border-t border-purple-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title with Enlarged Text */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400">Atención en Córdoba</span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mt-1">
            Ubicación & <span className="text-purple-400">Contacto</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Atendemos con turno previo en Córdoba Capital para garantizar la dedicación exclusiva que tu auto requiere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Info & WhatsApp Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            
            {/* Location & Hours Info */}
            <div className="glass-panel p-6 rounded-2xl border border-purple-900/30 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Ubicación del Taller</h3>
                  <p className="text-xs text-slate-300 font-semibold">{BRAND_INFO.address}</p>
                  <p className="text-[11px] text-slate-400 mt-1">Se brinda la ubicación exacta en GPS al confirmar el turno.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-purple-950/40">
                <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Horarios de Recepción</h3>
                  <p className="text-xs text-slate-300 font-semibold">{BRAND_INFO.schedule}</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Contact Card */}
            <div className="glass-panel p-6 rounded-2xl border border-purple-500/40 neon-purple-glow bg-gradient-to-br from-purple-950/40 via-[#0d0e17] to-[#07070a]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-emerald-400">Respuesta Inmediata</span>
                </div>
                <span className="text-[10px] text-slate-400">WhatsApp Oficial</span>
              </div>

              <h3 className="text-lg font-bold text-white">¿Querés reservar o consultar?</h3>
              <p className="text-xs text-slate-300 mt-1">Escribinos directamente para consultar disponibilidad de turnos esta semana en Córdoba.</p>

              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hola BM Car Detail! Quisiera agendar un turno para mi auto en Córdoba.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 shadow-lg shadow-emerald-950/50 transition-all duration-300 active:scale-95"
              >
                Abrir Chat de WhatsApp
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden glass-panel p-2 border border-purple-500/30 shadow-xl min-h-[320px]">
            <div className="relative w-full h-full min-h-[320px] rounded-xl overflow-hidden">
              <iframe
                title="Mapa BM Car Detail Córdoba"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108985.49830508005!2d-64.25863595!3d-31.40864385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xbb593c6813182235!2sC%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px', filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-3 right-3 glass-panel px-3 py-1.5 rounded-lg border border-purple-500/30 text-[11px] font-bold text-white flex items-center gap-1.5 backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>Córdoba Capital</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
