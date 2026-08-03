'use client';

import React from 'react';
import { MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';
import { BRAND_INFO } from '@/data/car-detail-data';

interface ContactLocationProps {
  onOpenBooking: () => void;
}

export const ContactLocation: React.FC<ContactLocationProps> = ({ onOpenBooking }) => {
  return (
    <section id="contacto" className="py-24 relative bg-[#07070a] border-t border-purple-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-lime-400 font-bold block mb-1">
            Atención Personalizada en Córdoba
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mt-1">
            Agendá tu turno o <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-emerald-400">comunicate con nosotros</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Atendemos únicamente con turno previo en Córdoba Capital para garantizar la dedicación exclusiva que tu auto requiere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct WhatsApp & Wizard Booking CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            
            {/* Direct CTA Card */}
            <div className="glass-panel p-8 rounded-3xl border border-lime-400/40 neon-purple-glow bg-gradient-to-br from-purple-950/50 via-[#0d0e17] to-[#07070a] shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-emerald-400 font-mono">Turnos Disponibles Esta Semana</span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-white">¿Cómo deseas reservar?</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Podés hacer una reserva rápida por pasos o conversar directamente con nuestro equipo técnico.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <button
                  onClick={onOpenBooking}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-5 rounded-xl text-xs sm:text-sm font-extrabold text-black bg-lime-400 hover:bg-lime-300 shadow-xl shadow-lime-400/30 transition-all duration-300 active:scale-95"
                >
                  <Calendar className="w-4 h-4 stroke-[2.5]" />
                  <span>Reservar Turno (Por Pasos)</span>
                </button>

                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
                    'Hola BM Car Detail! Quisiera agendar un turno para mi auto en Córdoba.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/60 transition-all duration-300 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>WhatsApp Directo</span>
                </a>
              </div>
            </div>

            {/* Location & Hours Info */}
            <div className="glass-panel p-6 rounded-3xl border border-purple-900/30 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Ubicación del Taller</h4>
                  <p className="text-xs text-slate-300 font-semibold">{BRAND_INFO.address}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Se brinda la ubicación exacta en GPS al confirmar el turno.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-purple-950/40">
                <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Horarios de Atención</h4>
                  <p className="text-xs text-slate-300 font-semibold">{BRAND_INFO.schedule}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden glass-panel p-2.5 border border-purple-500/30 shadow-2xl min-h-[380px]">
            <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden">
              <iframe
                title="Mapa BM Car Detail Córdoba"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108985.49830508005!2d-64.25863595!3d-31.40864385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xbb593c6813182235!2sC%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px', filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 right-4 glass-panel px-3.5 py-2 rounded-xl border border-purple-500/40 text-xs font-bold text-white flex items-center gap-2 backdrop-blur-md">
                <MapPin className="w-4 h-4 text-lime-400" />
                <span>Córdoba Capital</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
