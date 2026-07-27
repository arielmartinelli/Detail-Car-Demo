'use client';

import React from 'react';
import { SERVICES_DATA } from '@/data/car-detail-data';
import { Sparkles, CheckCircle2, Clock, Award, ArrowRight } from 'lucide-react';

export const ServicesExplained: React.FC = () => {
  return (
    <section id="servicios" className="py-16 sm:py-20 relative bg-[#060609] border-t border-purple-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Nuestros Servicios</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Qué hace cada <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Tratamiento</span>?
          </h2>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm">
            Resumen rápido de las opciones para proteger y mejorar la estética de tu auto en Córdoba.
          </p>
        </div>

        {/* Compact Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className={`glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col justify-between border relative ${
                service.popular ? 'border-purple-500/60 shadow-lg shadow-purple-950/40' : 'border-purple-900/30'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-white">{service.title}</h3>
                  {service.popular && (
                    <span className="bg-purple-500/20 text-purple-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-purple-500/30 flex-shrink-0">
                      Popular
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-900/40">
                    <Clock className="w-3 h-3 text-purple-400" />
                    {service.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-300 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/40">
                    <Award className="w-3 h-3 text-emerald-400" />
                    {service.warranty}
                  </span>
                </div>

                {/* Key Points Only */}
                <div className="space-y-1.5 pt-3 border-t border-purple-950/50">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-purple-950/60 mt-4">
                <a
                  href="#cotizador"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white bg-purple-950/70 hover:bg-purple-600 border border-purple-500/30 transition-all"
                >
                  <span>Cotizar Trabajo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
