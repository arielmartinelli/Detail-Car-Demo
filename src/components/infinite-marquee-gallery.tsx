'use client';

import React from 'react';

interface MarqueeCardProps {
  image: string;
  title: string;
  category: string;
}

const MarqueeCard: React.FC<MarqueeCardProps> = ({ image, title, category }) => (
  <div className="flex-shrink-0 w-72 sm:w-80 h-44 rounded-2xl overflow-hidden border border-gray-800/60 hover:border-red-500/60 relative group transition-all duration-300 shadow-xl bg-[#08090e]">
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    <div className="absolute top-3 left-3">
      <span className="text-[10px] font-bold text-white bg-red-600/90 backdrop-blur-sm px-2.5 py-1 rounded-lg">
        {category}
      </span>
    </div>
    <div className="absolute bottom-3 left-3 right-3">
      <h4 className="text-sm font-bold text-white line-clamp-1">{title}</h4>
    </div>
  </div>
);

export const InfiniteMarqueeGallery: React.FC = () => {
  const row1 = [
    { image: '/img/PREVENTA-DESPUES.png', title: 'Peugeot 208 GT', category: 'Pre-Venta' },
    { image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800', title: 'VW Golf GTI', category: 'Cerámico 9H' },
    { image: '/img/INTERIOR-DESPUES.png', title: 'BMW M4 Competition', category: 'Interior' },
    { image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800', title: 'Audi A4 Quattro', category: 'Pulido Pro' },
    { image: '/img/PINTUYRA-DESPUES.png', title: 'VW Vento TSI', category: 'Brillo Espejo' },
  ];

  const row2 = [
    { image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800', title: 'Toyota Hilux GR-Sport', category: 'Cerámico 4x4' },
    { image: '/img/PREVENTA-ANTES.png', title: 'Peugeot 208 GT', category: 'Antes' },
    { image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800', title: 'Porsche 911 Carrera', category: 'PPF Film' },
    { image: '/img/PINTURA-ANTES.png', title: 'VW Golf GTI', category: 'Corrección Laca' },
    { image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800', title: 'BMW M3 Sedan', category: 'Acrílico' },
  ];

  const row3 = [
    { image: '/img/INTERIOR-ANTES.png', title: 'BMW M4 Interior', category: 'Antes' },
    { image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800', title: 'Ford Mustang GT', category: 'Cerámico 9H' },
    { image: '/img/PREVENTA-DESPUES.png', title: 'Fiat Cronos Precision', category: 'Pre-Venta' },
    { image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800', title: 'Mercedes-Benz C63', category: 'Detailing' },
    { image: '/img/PINTUYRA-DESPUES.png', title: 'VW Amarok V6', category: 'Protección 9H' },
  ];

  return (
    <section id="galeria" className="py-16 relative bg-[#060609] border-t border-gray-900 overflow-hidden">
      
      {/* Simple Title */}
      <div className="text-center max-w-3xl mx-auto mb-10 px-4">
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Galería de <span className="text-red-500">Trabajos</span>
        </h2>
      </div>

      {/* 3 Rows Marquee */}
      <div className="space-y-4 max-w-full">
        
        {/* ROW 1: Left */}
        <div className="flex gap-4 animate-marquee-left hover:[animation-play-state:paused] w-max">
          {[...row1, ...row1, ...row1].map((item, idx) => (
            <MarqueeCard key={`r1-${idx}`} {...item} />
          ))}
        </div>

        {/* ROW 2: Right */}
        <div className="flex gap-4 animate-marquee-right hover:[animation-play-state:paused] w-max">
          {[...row2, ...row2, ...row2].map((item, idx) => (
            <MarqueeCard key={`r2-${idx}`} {...item} />
          ))}
        </div>

        {/* ROW 3: Left */}
        <div className="flex gap-4 animate-marquee-left hover:[animation-play-state:paused] w-max">
          {[...row3, ...row3, ...row3].map((item, idx) => (
            <MarqueeCard key={`r3-${idx}`} {...item} />
          ))}
        </div>

      </div>

    </section>
  );
};
