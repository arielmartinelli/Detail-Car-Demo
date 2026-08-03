'use client';

import React from 'react';
import { X, CheckCircle2, Clock, Award, Shield, MessageCircle, Calendar } from 'lucide-react';
import { ServiceItem, BRAND_INFO } from '@/data/car-detail-data';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenBooking: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenBooking,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl border border-purple-500/40 shadow-2xl p-6 sm:p-8 bg-[#0c0e17] max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-purple-950/80 border border-purple-800/40 text-slate-300 hover:text-white flex items-center justify-center transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 pb-4 border-b border-purple-950/50">
          <span className="text-xs font-mono font-bold text-lime-400 uppercase tracking-widest block">
            {service.subtitle}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">{service.title}</h2>
          
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-purple-950/70 px-3 py-1 rounded-lg border border-purple-900/40">
              <Clock className="w-3.5 h-3.5 text-purple-400" />
              {service.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 bg-emerald-950/40 px-3 py-1 rounded-lg border border-emerald-900/40">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              {service.warranty}
            </span>
            {service.popular && (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-black bg-lime-400 px-3 py-1 rounded-lg">
                ★ Recomendado Pro
              </span>
            )}
          </div>
        </div>

        {/* Body Content */}
        <div className="py-6 space-y-6">
          
          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-mono">
              ¿En qué consiste este tratamiento?
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Features Checklist */}
          <div className="p-5 rounded-2xl bg-[#07080f] border border-purple-950/60">
            <h4 className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-3 font-mono">
              Qué incluye este trabajo punto por punto:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended For */}
          <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-900/40 text-xs text-slate-300 flex items-start gap-2.5">
            <Shield className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white">Recomendado para:</span> {service.recommendedFor}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-purple-950/60 flex flex-col sm:flex-row items-center gap-3">
          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
              `Hola BM Car Detail! Quisiera más información sobre el servicio de ${service.title}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Consultar por WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenBooking(service.id);
            }}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs font-extrabold text-black bg-lime-400 hover:bg-lime-300 shadow-xl shadow-lime-400/30 transition-all active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Reservar este Tratamiento</span>
          </button>
        </div>

      </div>
    </div>
  );
};
