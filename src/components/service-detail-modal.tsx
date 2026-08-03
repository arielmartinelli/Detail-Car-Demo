'use client';

import React from 'react';
import { X, CheckCircle2, MessageCircle, Calendar } from 'lucide-react';
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
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl border border-gray-800 shadow-2xl p-6 sm:p-8 bg-[#0c0d14] max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-900 border border-gray-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 pb-4 border-b border-gray-800">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">{service.title}</h2>
          <p className="text-sm font-semibold text-red-500 mt-1">{service.subtitle}</p>
        </div>

        {/* Body Content */}
        <div className="py-6 space-y-6">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-mono">
              Descripción del Tratamiento
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Features Checklist */}
          <div className="p-5 rounded-2xl bg-[#07080d] border border-gray-800">
            <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3 font-mono">
              Qué incluye este trabajo:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-gray-800 flex flex-col sm:flex-row items-center gap-3">
          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
              `Hola BM Car Detail! Quisiera más información sobre el servicio de ${service.title}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-bold text-white bg-gray-900 hover:bg-gray-800 border border-gray-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-red-500" />
            <span>Consultar por WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenBooking(service.id);
            }}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-extrabold text-white bg-red-600 hover:bg-red-500 shadow-xl shadow-red-950/60 transition-all active:scale-95 border border-red-500/30"
          >
            <Calendar className="w-4 h-4" />
            <span>Reservar este Turno</span>
          </button>
        </div>

      </div>
    </div>
  );
};
