'use client';

import React from 'react';
import { SERVICES_DATA, ServiceItem } from '@/data/car-detail-data';
import { Sparkles, Clock, Award, Info, Calendar } from 'lucide-react';

interface ServicesExplainedProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: (serviceId: string) => void;
}

export const ServicesExplained: React.FC<ServicesExplainedProps> = ({
  onSelectService,
  onOpenBooking,
}) => {
  const serviceImages: Record<string, string> = {
    'pre-venta': '/img/PREVENTA-DESPUES.png',
    'ceramic-9h': '/img/PINTUYRA-DESPUES.png',
    'pulido-correccion': '/img/PINTURA-ANTES.png',
    'interior-premium': '/img/INTERIOR-DESPUES.png',
    'tratamiento-acrilico': 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
    'ppf-protection': 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800',
  };

  return (
    <section id="servicios" className="py-24 relative bg-[#060609] border-t border-purple-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-lime-400" />
            <span>Catálogo Completo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Servicios & <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-emerald-400">Resultados</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Hacé clic en <span className="text-white font-bold">"Ver Servicio"</span> para ver la descripción completa, fotos del tratamiento y opciones de reserva.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const cardImg = serviceImages[service.id] || serviceImages['ceramic-9h'];

            return (
              <div
                key={service.id}
                className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-purple-900/40 hover:border-lime-400/50 flex flex-col justify-between transition-all duration-300 group bg-[#090b12]"
              >
                <div>
                  {/* Photo of Car with Service */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                    <img
                      src={cardImg}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090b12] via-transparent to-black/20" />
                    
                    {service.popular && (
                      <span className="absolute top-3 right-3 bg-lime-400 text-black text-[10px] font-extrabold px-3 py-1 rounded-full shadow-lg">
                        ★ Popular
                      </span>
                    )}

                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <span className="text-[10px] font-semibold text-slate-200 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700">
                        <Clock className="w-3 h-3 text-lime-400 inline mr-1" />
                        {service.duration}
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-300 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700">
                        <Award className="w-3 h-3 text-emerald-400 inline mr-1" />
                        {service.warranty}
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-extrabold text-white group-hover:text-lime-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-purple-300 mt-1">{service.subtitle}</p>
                    <p className="text-xs text-slate-400 mt-3 line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 space-y-2.5">
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-purple-950/80 hover:bg-purple-900 border border-purple-500/40 flex items-center justify-center gap-2 transition-all"
                  >
                    <Info className="w-4 h-4 text-purple-400" />
                    <span>Ver Servicio / Más Información</span>
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="w-full py-3 px-4 rounded-xl text-xs font-extrabold text-black bg-lime-400 hover:bg-lime-300 shadow-md shadow-lime-400/20 flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Reservar este Turno</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
