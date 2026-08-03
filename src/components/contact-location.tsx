'use client';

import React from 'react';
import { MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';
import { BRAND_INFO } from '@/data/car-detail-data';

interface ContactLocationProps {
  onOpenBooking: () => void;
}

export const ContactLocation: React.FC<ContactLocationProps> = ({ onOpenBooking }) => {
  return (
    <section id="contacto" className="py-20 relative bg-[#07070a] border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Contacto & <span className="text-red-500">Ubicación</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: CTA Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            
            {/* CTA Card */}
            <div className="bg-[#0a0b10] p-8 rounded-3xl border border-gray-800 shadow-2xl">
              <h3 className="text-2xl font-black text-white">¿Cómo querés reservar?</h3>

              <div className="mt-6 flex flex-col gap-3.5">
                <button
                  onClick={onOpenBooking}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-5 rounded-xl text-sm font-extrabold text-white bg-red-600 hover:bg-red-500 shadow-xl shadow-red-950/60 transition-all duration-300 active:scale-95 border border-red-500/30"
                >
                  <Calendar className="w-4 h-4 stroke-[2.5]" />
                  <span>Reservar Turno</span>
                </button>

                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
                    'Hola BM Car Detail! Quisiera agendar un turno para mi auto en Córdoba.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-5 rounded-xl text-sm font-bold text-white bg-gray-900 hover:bg-gray-800 border border-gray-700 transition-all duration-300 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-red-500" />
                  <span>WhatsApp Directo</span>
                </a>
              </div>
            </div>

            {/* Location & Hours Info */}
            <div className="bg-[#0a0b10] p-6 rounded-3xl border border-gray-800 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-700 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Ubicación del Taller</h4>
                  <p className="text-xs text-slate-300 font-semibold">{BRAND_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-gray-800">
                <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-700 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Horarios de Atención</h4>
                  <p className="text-xs text-slate-300 font-semibold">{BRAND_INFO.schedule}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden p-2.5 border border-gray-800 shadow-2xl min-h-[380px] bg-[#0a0b10]">
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
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
