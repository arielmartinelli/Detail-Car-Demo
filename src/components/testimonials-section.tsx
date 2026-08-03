'use client';

import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';

interface ReviewItem {
  id: string;
  name: string;
  vehicle: string;
  service: string;
  comment: string;
  rating: number;
}

const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Gonzalo Martelli',
    vehicle: 'VW Golf GTI',
    service: 'Tratamiento Cerámico 9H',
    comment: 'Impresionante el nivel de detalle y el brillo espejo que le sacaron al Golf. La atención en Córdoba fue impecable, me entregaron el certificado de garantía escrita. 100% recomendado.',
    rating: 5,
  },
  {
    id: 'rev-2',
    name: 'Martín Soria',
    vehicle: 'Toyota Hilux 4x4',
    service: 'Preparación Pre-Venta',
    comment: 'Llevé la Hilux para reacondicionarla antes de venderla y parecía 0km recien salida de concesionaria. La publiqué y la vendí en menos de 48 hs al precio que quería.',
    rating: 5,
  },
  {
    id: 'rev-3',
    name: 'Agustina Carrizo',
    vehicle: 'Peugeot 208 GT',
    service: 'Detallado de Interior & Vapor',
    comment: 'La limpieza de tapizados y paneles a vapor fue tremenda. Los cueros quedaron mate como de fábrica sin ese brillo grasoso feo de lavaderos comunes. Excelente trabajo.',
    rating: 5,
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#07070a] border-t border-purple-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Opiniones de Clientes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Reseñas <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-lime-400">Verificadas</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Lo que dicen los dueños de autos en Córdoba que confiaron el cuidado de su vehículo en BM Car Detail.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="glass-panel p-6 rounded-3xl border border-purple-900/40 hover:border-lime-400/50 transition-all duration-300 flex flex-col justify-between bg-[#0b0c16] relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-purple-600/20" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-950/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                  <span className="text-[11px] text-purple-300 font-mono">{rev.vehicle} • {rev.service}</span>
                </div>
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
