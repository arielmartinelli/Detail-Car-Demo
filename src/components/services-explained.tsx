'use client';

import React from 'react';
import { SERVICES_DATA, ServiceItem } from '@/data/car-detail-data';

interface ServicesExplainedProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: (serviceId: string) => void;
}

export const ServicesExplained: React.FC<ServicesExplainedProps> = ({
  onSelectService,
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
    <section id="servicios" className="py-20 relative bg-[#060609] border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Simple Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Nuestros <span className="text-red-500">Servicios</span>
          </h2>
        </div>

        {/* Minimal Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const cardImg = serviceImages[service.id] || serviceImages['ceramic-9h'];

            return (
              <div
                key={service.id}
                className="glass-panel rounded-3xl overflow-hidden border border-gray-800/80 hover:border-red-500/60 flex flex-col justify-between transition-all duration-300 group bg-[#090a0f]"
              >
                <div>
                  {/* Large Photo */}
                  <div className="relative h-60 sm:h-64 w-full overflow-hidden">
                    <img
                      src={cardImg}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent" />
                  </div>

                  {/* Title & Brief Description Only */}
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-red-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Single Action Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full py-3.5 px-4 rounded-xl text-sm font-extrabold text-white bg-red-600 hover:bg-red-500 shadow-md shadow-red-950/60 flex items-center justify-center gap-2 transition-all active:scale-95 border border-red-500/30"
                  >
                    <span>Ver Servicio</span>
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
