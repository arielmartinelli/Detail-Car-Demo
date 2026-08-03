'use client';

import React, { useState } from 'react';
import { X, Check, Calendar, Clock, User, Car, Phone, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { SERVICES_DATA, BRAND_INFO } from '@/data/car-detail-data';
import confetti from 'canvas-confetti';

interface BookingWizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const BookingWizardModal: React.FC<BookingWizardModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
}) => {
  const [step, setStep] = useState(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(preselectedServiceId || SERVICES_DATA[0].id);
  const [selectedDate, setSelectedDate] = useState<string>('Mañana (Mañana)');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('09:00 hs (Mañana)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [carModel, setCarModel] = useState('');

  if (!isOpen) return null;

  const selectedService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const dateOptions = [
    'Mañana (Turno Mañana)',
    'En 2 días (Turno Mañana)',
    'Próximo Lunes (09:00 hs)',
    'Próximo Miércoles (14:00 hs)',
    'Próximo Viernes (09:00 hs)',
  ];

  const timeSlots = [
    '09:00 hs (Mañana)',
    '11:00 hs (Mañana)',
    '14:30 hs (Tarde)',
    '16:30 hs (Tarde)',
  ];

  const handleFinishBooking = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ccff00', '#a855f7', '#10b981', '#ffffff'],
    });

    const message = `Hola BM Car Detail! 👋 Solicitud de Reserva desde la web:%0A%0A🛠️ *Tratamiento*: ${selectedService.title}%0A📅 *Día Preferido*: ${selectedDate}%0A⏰ *Horario*: ${selectedTimeSlot}%0A%0A👤 *Nombre*: ${name || 'Cliente'}%0A📱 *Teléfono*: ${phone || 'No especificado'}%0A🚗 *Vehículo*: ${carModel || 'No especificado'}%0A📍 *Ubicación*: Córdoba Capital%0A%0A¿Me confirman la disponibilidad para ingresar el auto?`;

    const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl border border-lime-400/40 shadow-2xl p-6 sm:p-8 bg-[#0c0e17] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-purple-900/40">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase text-lime-400 tracking-wider">
              Reserva de Turno • Paso {step} de 3
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {step === 1 && 'Seleccioná el Tratamiento'}
              {step === 2 && 'Elegí Día y Horario'}
              {step === 3 && 'Completá tus Datos de Contacto'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-purple-950/60 border border-purple-800/40 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-slate-800 rounded-full my-6 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-lime-400 to-emerald-400 transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* STEP 1: Select Service */}
        {step === 1 && (
          <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
            {SERVICES_DATA.map((service) => {
              const isSelected = selectedServiceId === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all border flex items-center justify-between ${
                    isSelected
                      ? 'bg-purple-950/70 border-lime-400 shadow-md ring-1 ring-lime-400/50'
                      : 'bg-[#080910] border-purple-950/40 hover:border-purple-800/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center ${isSelected ? 'bg-lime-400 text-black font-bold' : 'border border-slate-700 bg-slate-900'}`}>
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{service.title}</h4>
                      <p className="text-xs text-slate-400">{service.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-lime-400 bg-lime-400/10 px-2.5 py-1 rounded-lg border border-lime-400/20">
                    {service.duration}
                  </span>
                </div>
              );
            })}

            <button
              onClick={() => setStep(2)}
              className="mt-6 w-full py-4 rounded-xl font-bold text-sm text-black bg-lime-400 hover:bg-lime-300 shadow-lg shadow-lime-400/30 flex items-center justify-center gap-2 transition-all"
            >
              <span>Continuar al Paso 2</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: Select Date & Time */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-lime-400" />
                Día de Preferencia en Córdoba:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {dateOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelectedDate(opt)}
                    className={`p-3 rounded-xl text-left text-xs font-semibold transition-all border ${
                      selectedDate === opt
                        ? 'bg-purple-950/80 border-lime-400 text-white shadow-md'
                        : 'bg-[#080910] border-purple-950/40 text-slate-300 hover:border-purple-800'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-lime-400" />
                Horario de Ingreso:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTimeSlot(slot)}
                    className={`p-2.5 rounded-xl text-center text-xs font-bold transition-all border ${
                      selectedTimeSlot === slot
                        ? 'bg-lime-400 text-black border-lime-300 font-extrabold shadow-md'
                        : 'bg-[#080910] border-purple-950/40 text-slate-300 hover:border-purple-800'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-purple-950/50">
              <button
                onClick={() => setStep(1)}
                className="py-3 px-5 rounded-xl text-xs font-bold text-slate-300 bg-slate-900 border border-slate-700 hover:bg-slate-800 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver</span>
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 py-3.5 rounded-xl font-bold text-sm text-black bg-lime-400 hover:bg-lime-300 shadow-lg shadow-lime-400/30 flex items-center justify-center gap-2 transition-all"
              >
                <span>Siguiente: Datos de Contacto</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Contact Details & Submit */}
        {step === 3 && (
          <form onSubmit={handleFinishBooking} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-lime-400" />
                Tu Nombre y Apellido:
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Gonzalo Benítez"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#080910] border border-purple-900/50 text-white text-sm focus:outline-none focus:border-lime-400 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-lime-400" />
                Teléfono / WhatsApp:
              </label>
              <input
                type="tel"
                required
                placeholder="Ej. 351 123-4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#080910] border border-purple-900/50 text-white text-sm focus:outline-none focus:border-lime-400 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-lime-400" />
                Modelo de Auto & Año:
              </label>
              <input
                type="text"
                required
                placeholder="Ej. VW Golf GTI 2021"
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#080910] border border-purple-900/50 text-white text-sm focus:outline-none focus:border-lime-400 transition-colors"
              />
            </div>

            <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-800/40 text-xs text-slate-300">
              <span className="font-bold text-lime-400">Resumen:</span> {selectedService.title} • {selectedDate}
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-purple-950/50">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="py-3 px-5 rounded-xl text-xs font-bold text-slate-300 bg-slate-900 border border-slate-700 hover:bg-slate-800 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver</span>
              </button>
              <button
                type="submit"
                className="flex-1 py-4 rounded-xl font-extrabold text-sm text-black bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-300 hover:to-emerald-300 shadow-xl shadow-lime-400/30 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-black/20" />
                <span>Enviar Reserva por WhatsApp</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
