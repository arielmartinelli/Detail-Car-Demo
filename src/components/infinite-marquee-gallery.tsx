'use client';

import React from 'react';
import { Sparkles, Shield } from 'lucide-react';

interface MarqueeCardProps {
  image: string;
  title: string;
  category: string;
}

const MarqueeCard: React.FC<MarqueeCardProps> = ({ image, title, category }) => (
  <div className="flex-shrink-0 w-72 sm:w-80 h-44 rounded-2xl overflow-hidden glass-panel border border-purple-900/40 hover:border-lime-400/60 relative group transition-all duration-300 shadow-xl">
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
    <div className="absolute top-3 left-3">
      <span className="text-[10px] font-extrabold text-lime-300 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-lime-400/30 flex items-center gap-1">
        <Shield className="w-3 h-3 text-lime-400" />
        {category}
      </span>
    </div>
    <div className="absolute bottom-3 left-3 right-3">
      <h4 className="text-xs sm:text-sm font-extrabold text-white line-clamp-1">{title}</h4>
      <span className="text-[10px] text-purple-300 font-mono">Córdoba Capital</span>
    </div>
  </div>
);

export const InfiniteMarqueeGallery: React.FC = () => {
  const row1 = [
    { image: '/img/PREVENTA-DESPUES.png', title: 'Peugeot 208 GT', category: 'Pre-Venta' },
    { image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800', title: 'VW Golf GTI', category: 'Cerámico 9H' },
    { image: '/img/INTERIOR-DESPUES.png', title: 'BMW M4 Competition', category: 'Detallado Interior' },
    { image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800', title: 'Audi A4 Quattro', category: 'Pulido Pro' },
    { image: '/img/PINTUYRA-DESPUES.png', title: 'VW Vento TSI', category: 'Brillo Espejo' },
  ];

  const row2 = [
    { image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800', title: 'Toyota Hilux GR-Sport', category: 'Cerámico 4x4' },
    { image: '/img/PREVENTA-ANTES.png', title: 'Peugeot 208 GT', category: 'Antes de Trabajo' },
    { image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800', title: 'Porsche 911 Carrera', category: 'PPF Film' },
    { image: '/img/PINTURA-ANTES.png', title: 'VW Golf GTI', category: 'Corrección Laca' },
    { image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800', title: 'BMW M3 Sedan', category: 'Acrílico 12M' },
  ];

  const row3 = [
    { image: '/img/INTERIOR-ANTES.png', title: 'BMW M4 Interior', category: 'Antes de Limpieza' },
    { image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800', title: 'Ford Mustang GT', category: 'Cerámico 9H' },
    { image: '/img/PREVENTA-DESPUES.png', title: 'Fiat Cronos Precision', category: 'Pre-Venta' },
    { image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800', title: 'Mercedes-Benz C63', category: 'Detailing Pro' },
    { image: '/img/PINTUYRA-DESPUES.png', title: 'VW Amarok V6', category: 'Protección 9H' },
  ];

  return (
    <section className="py-20 relative bg-[#060609] border-t border-b border-purple-950/40 overflow-hidden">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-lime-400" />
          <span>Galería Continua 360°</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Galería de <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-emerald-400">Trabajos Reales</span>
        </h2>
      </div>

      {/* 3 Rows Marquee Showcase */}
      <div className="space-y-4 max-w-full">
        
        {/* ROW 1: Left to Right */}
        <div className="flex gap-4 animate-marquee-left hover:[animation-play-state:paused] w-max">
          {[...row1, ...row1, ...row1].map((item, idx) => (
            <MarqueeCard key={`r1-${idx}`} {...item} />
          ))}
        </div>

        {/* ROW 2: Right to Left */}
        <div className="flex gap-4 animate-marquee-right hover:[animation-play-state:paused] w-max">
          {[...row2, ...row2, ...row2].map((item, idx) => (
            <MarqueeCard key={`r2-${idx}`} {...item} />
          ))}
        </div>

        {/* ROW 3: Left to Right */}
        <div className="flex gap-4 animate-marquee-left hover:[animation-play-state:paused] w-max">
          {[...row3, ...row3, ...row3].map((item, idx) => (
            <MarqueeCard key={`r3-${idx}`} {...item} />
          ))}
        </div>

      </div>

    </section>
  );
};
