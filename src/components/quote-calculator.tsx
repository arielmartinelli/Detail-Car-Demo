'use client';

import React, { useState } from 'react';
import { SERVICES_DATA, BRAND_INFO } from '@/data/car-detail-data';
import { Check, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

type VehicleCategory = 'hatchback' | 'sedan' | 'suv' | 'pickup';

interface VehicleTypeOption {
  id: VehicleCategory;
  name: string;
  example: string;
}

const VEHICLE_OPTIONS: VehicleTypeOption[] = [
  { id: 'hatchback', name: 'Hatchback / Compacto', example: 'VW Golf, Peugeot 208, Polo, Onix' },
  { id: 'sedan', name: 'Sedán / Coupé', example: 'VW Vento, Audi A4, BMW Serie 3, Corolla' },
  { id: 'suv', name: 'SUV / Crossover', example: 'VW Taos, Jeep Compass, SW4, Bronco' },
  { id: 'pickup', name: 'Pickup / 4x4', example: 'Toyota Hilux, VW Amarok, Ford Ranger, RAM' },
];

export const QuoteCalculator: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleCategory>('hatchback');
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>(['ceramic-9h']);

  const toggleService = (serviceId: string) => {
    if (selectedServiceIds.includes(serviceId)) {
      if (selectedServiceIds.length > 1) {
        setSelectedServiceIds(selectedServiceIds.filter((id) => id !== serviceId));
      }
    } else {
      setSelectedServiceIds([...selectedServiceIds, serviceId]);
    }
  };

  const selectedServices = SERVICES_DATA.filter((s) => selectedServiceIds.includes(s.id));
  
  const totalPrice = selectedServices.reduce((sum, service) => {
    return sum + service.priceRange[selectedVehicle];
  }, 0);

  const selectedVehicleObj = VEHICLE_OPTIONS.find((v) => v.id === selectedVehicle);

  const handleBooking = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#9333ea', '#6366f1', '#ffffff'],
    });

    const servicesListText = selectedServices.map((s) => `• ${s.title}`).join('%0A');
    const formattedPrice = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(totalPrice);

    const message = `Hola BM Car Detail! 👋 Coticé en su sitio web:%0A%0A🚗 *Vehículo*: ${selectedVehicleObj?.name} (${selectedVehicleObj?.example})%0A🛠️ *Servicios Seleccionados*:%0A${servicesListText}%0A%0A💰 *Presupuesto Estimado*: ~${formattedPrice}%0A%0A📍 *Ubicación*: Córdoba Capital%0A¿Tienen disponibilidad de turnos para esta semana?`;

    const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="cotizador" className="py-20 relative bg-radial-purple">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Calculadora en Tiempo Real</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cotizá el Detallado de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">Vehículo</span>
          </h2>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm">
            Seleccioná la categoría de tu vehículo y los tratamientos que deseas para calcular tu presupuesto estimado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: Selectors */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Step 1: Vehicle Type */}
            <div className="glass-panel p-5 rounded-2xl border border-purple-900/40">
              <h3 className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-600/30 text-purple-300 text-[11px] flex items-center justify-center border border-purple-500/40">1</span>
                Seleccioná el Tipo de Vehículo
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {VEHICLE_OPTIONS.map((v) => {
                  const isSelected = selectedVehicle === v.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVehicle(v.id)}
                      className={`p-3.5 rounded-xl text-left transition-all duration-200 flex flex-col justify-between border ${
                        isSelected
                          ? 'bg-purple-950/70 border-purple-500/80 shadow-md shadow-purple-950/50'
                          : 'bg-[#0d0e16]/60 border-purple-950/40 hover:border-purple-800/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-xs sm:text-sm">{v.name}</span>
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center ${isSelected ? 'bg-purple-500 text-white' : 'border border-slate-600'}`}>
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                      </div>
                      <span className="text-[11px] text-slate-400 mt-1 font-mono">{v.example}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Service Selection */}
            <div className="glass-panel p-5 rounded-2xl border border-purple-900/40">
              <h3 className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-600/30 text-purple-300 text-[11px] flex items-center justify-center border border-purple-500/40">2</span>
                Elegí los Tratamientos Deseados
              </h3>

              <div className="flex flex-col gap-2.5">
                {SERVICES_DATA.map((service) => {
                  const isChecked = selectedServiceIds.includes(service.id);
                  const servicePrice = service.priceRange[selectedVehicle];
                  const formattedServicePrice = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(servicePrice);

                  return (
                    <div
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`p-3.5 rounded-xl cursor-pointer transition-all duration-200 border flex items-center justify-between ${
                        isChecked
                          ? 'bg-purple-950/60 border-purple-500/60 shadow-sm'
                          : 'bg-[#0d0e16]/40 border-purple-950/30 hover:border-purple-900/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${isChecked ? 'bg-purple-600 text-white' : 'border border-slate-700 bg-slate-900'}`}>
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white text-xs sm:text-sm">{service.title}</span>
                            {service.popular && (
                              <span className="text-[9px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded border border-purple-500/30">
                                Recomendado
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{service.subtitle}</p>
                        </div>
                      </div>

                      <div className="text-right pl-2">
                        <span className="text-xs sm:text-sm font-extrabold text-purple-300">{formattedServicePrice}</span>
                        <span className="block text-[10px] text-slate-500 font-mono">{service.duration}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Panel: Quote Summary Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="glass-panel p-6 rounded-3xl border border-purple-500/40 shadow-2xl neon-purple-glow flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-purple-900/40">
                  <span className="text-xs font-mono uppercase text-purple-300 tracking-wider">Resumen de Cotización</span>
                  <span className="text-[11px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-semibold">
                    Córdoba Capital
                  </span>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-[#090a10] border border-purple-950/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Tipo de Vehículo:</span>
                  <span className="font-bold text-white">{selectedVehicleObj?.name}</span>
                </div>

                <div className="mt-3 flex flex-col gap-1.5 max-h-[200px] overflow-y-auto pr-1">
                  {selectedServices.map((s) => (
                    <div key={s.id} className="flex items-center justify-between text-xs py-1 border-b border-purple-950/30">
                      <span className="text-slate-200 font-medium">{s.title}</span>
                      <span className="text-purple-300 font-bold">
                        {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(s.priceRange[selectedVehicle])}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-3 border-t border-purple-950/50 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>Garantía escrita oficial por BM Car Detail</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Clock className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>Turno personalizado exclusivo para tu auto</span>
                  </div>
                </div>
              </div>

              {/* Total & Action */}
              <div className="mt-6 pt-5 border-t border-purple-900/50">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <span className="text-xs text-slate-400">Estimado Total:</span>
                    <span className="block text-2xl font-extrabold text-white tracking-tight">
                      {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(totalPrice)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleBooking}
                  className="w-full py-4 px-6 rounded-xl font-bold text-white text-xs sm:text-sm bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-900/60 transition-all duration-300 transform active:scale-95"
                >
                  Reservar Turno con este Presupuesto
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
