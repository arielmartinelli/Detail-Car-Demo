'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Shield, MapPin } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  vehicle: string;
  image: string;
  badge: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'work-1',
    title: 'Volkswagen Golf GTI 2.0 TSI',
    category: 'Tratamiento Cerámico 9H',
    vehicle: 'Golf GTI Clubsport',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1200',
    badge: 'Brillo Espejo 9H Escrito',
  },
  {
    id: 'work-2',
    title: 'BMW M4 Competition',
    category: 'Detallado & Cuidado de Cuero',
    vehicle: 'BMW M4 Coupe',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1200',
    badge: 'Acabado Mate Original',
  },
  {
    id: 'work-3',
    title: 'Toyota Hilux GR-Sport IV',
    category: 'Cerámico Heavy Duty 4x4',
    vehicle: 'Hilux 4x4 Off-Road',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200',
    badge: 'Protección Anti-Barro',
  },
  {
    id: 'work-4',
    title: 'Peugeot 208 GT',
    category: 'Preparación Pre-Venta',
    vehicle: 'Peugeot 208',
    image: '/img/PREVENTA-DESPUES.png',
    badge: 'Acondicionado Reventa 0km',
  },
  {
    id: 'work-5',
    title: 'Audi A4 2.0 TFSI Quattro',
    category: 'Corrección de Laca Multi-Paso',
    vehicle: 'Audi A4 Sedan',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=1200',
    badge: 'Libre de Hologramas',
  },
];

export const PortfolioCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? PORTFOLIO_ITEMS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === PORTFOLIO_ITEMS.length - 1 ? 0 : prev + 1));
  };

  // Autoplay carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentItem = PORTFOLIO_ITEMS[currentIndex];

  return (
    <section id="trabajos" className="py-24 relative bg-[#060609] border-t border-purple-950/40 overflow-hidden">
      
      {/* Glow mesh background */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Galería de Trabajos</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Trabajos</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Algunos de los vehículos transformados y entregados con garantía escrita en Córdoba Capital.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          
          <div className="glass-panel p-3 rounded-3xl border border-purple-500/30 shadow-2xl neon-purple-glow relative overflow-hidden">
            
            {/* Main Carousel Slide Image */}
            <div className="relative h-[350px] sm:h-[500px] w-full rounded-2xl overflow-hidden group">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-black/30" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 glass-panel px-3.5 py-1.5 rounded-xl border border-purple-400/40 backdrop-blur-md">
                <span className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-purple-400" />
                  {currentItem.category}
                </span>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-4 left-4 right-4 glass-panel p-4 rounded-xl border border-purple-500/30 flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-white">{currentItem.title}</h3>
                  <p className="text-xs text-purple-300 font-medium flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-purple-400" />
                    Córdoba Capital • {currentItem.badge}
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{currentIndex + 1} / 0{PORTFOLIO_ITEMS.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass-panel border border-purple-500/40 text-white hover:bg-purple-600 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-lg z-20"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass-panel border border-purple-500/40 text-white hover:bg-purple-600 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-lg z-20"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {PORTFOLIO_ITEMS.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 bg-purple-500 shadow-md shadow-purple-500/50'
                    : 'w-2.5 bg-purple-950/60 hover:bg-purple-800'
                }`}
                aria-label={`Ver foto ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
