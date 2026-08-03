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
  const [selectedDate, setSelectedDate] = useState<string>('Mañana');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('09:00 hs');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [carModel, setCarModel] = useState('');

  if (!isOpen) return null;

  const selectedService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const dateOptions = [
    'Mañana',
    'En 2 días',
    'Próximo Lunes',
    'Próximo Miércoles',
    'Próximo Viernes',
  ];

  const timeSlots = [
    '09:00 hs',
    '11:00 hs',
    '14:30 hs',
    '16:30 hs',
  ];

  const handleFinishBooking = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#dc2626', '#ef4444', '#ffffff'],
    });

    const message = `Hola BM Car Detail! 👋 Solicitud de Reserva desde la web:%0A%0A🛠️ *Tratamiento*: ${selectedService.title}%0A📅 *Día*: ${selectedDate}%0A⏰ *Horario*: ${selectedTimeSlot}%0A%0A👤 *Nombre*: ${name || 'Cliente'}%0A📱 *Teléfono*: ${phone || 'No especificado'}%0A🚗 *Vehículo*: ${carModel || 'No especificado'}%0A📍 *Ubicación*: Córdoba Capital%0A%0A¿Me confirman la disponibilidad?`;

    const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl border border-red-500/40 shadow-2xl p-6 sm:p-8 bg-[#0c0d14] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-800">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-red-500 tracking-wider">
              Reserva de Turno • Paso {step} de 3
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
              {step === 1 && 'Seleccioná el Producto'}
              {step === 2 && 'Elegí Día y Horario'}
              {step === 3 && 'Completá tus Datos'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-900 border border-gray-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-gray-800 rounded-full my-6 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-600 to-red-500 transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* STEP 1: Select Product Only (No duration text) */}
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
                      ? 'bg-red-950/40 border-red-500 shadow-md ring-1 ring-red-500/50'
                      : 'bg-[#08090f] border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center ${isSelected ? 'bg-red-600 text-white font-bold' : 'border border-gray-700 bg-gray-900'}`}>
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{service.title}</h4>
                      <p className="text-xs text-slate-400">{service.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <button
              onClick={() => setStep(2)}
              className="mt-6 w-full py-4 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-500 shadow-lg shadow-red-950/60 flex items-center justify-center gap-2 transition-all border border-red-500/40"
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
                <Calendar className="w-4 h-4 text-red-500" />
                Día de Preferencia:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {dateOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelectedDate(opt)}
                    className={`p-3.5 rounded-xl text-left text-xs font-semibold transition-all border ${
                      selectedDate === opt
                        ? 'bg-red-950/50 border-red-500 text-white shadow-md'
                        : 'bg-[#08090f] border-gray-800 text-slate-300 hover:border-gray-700'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-red-500" />
                Horario:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTimeSlot(slot)}
                    className={`p-3 rounded-xl text-center text-xs font-bold transition-all border ${
                      selectedTimeSlot === slot
                        ? 'bg-red-600 text-white border-red-500 font-extrabold shadow-md'
                        : 'bg-[#08090f] border-gray-800 text-slate-300 hover:border-gray-700'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
              <button
                onClick={() => setStep(1)}
                className="py-3.5 px-5 rounded-xl text-xs font-bold text-slate-300 bg-gray-900 border border-gray-700 hover:bg-gray-800 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver</span>
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 py-4 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-500 shadow-lg shadow-red-950/60 flex items-center justify-center gap-2 transition-all border border-red-500/40"
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
                <User className="w-3.5 h-3.5 text-red-500" />
                Nombre y Apellido:
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Gonzalo Benítez"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-[#08090f] border border-gray-800 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-red-500" />
                Teléfono / WhatsApp:
              </label>
              <input
                type="tel"
                required
                placeholder="Ej. 351 123-4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-[#08090f] border border-gray-800 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-red-500" />
                Modelo de Auto:
              </label>
              <input
                type="text"
                required
                placeholder="Ej. VW Golf GTI"
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-[#08090f] border border-gray-800 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>

            <div className="p-3 rounded-xl bg-gray-900 border border-gray-800 text-xs text-slate-300">
              <span className="font-bold text-red-400">Resumen:</span> {selectedService.title} • {selectedDate}
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="py-3.5 px-5 rounded-xl text-xs font-bold text-slate-300 bg-gray-900 border border-gray-700 hover:bg-gray-800 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver</span>
              </button>
              <button
                type="submit"
                className="flex-1 py-4 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-950/80 flex items-center justify-center gap-2 transition-all active:scale-95 border border-red-500/40"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Enviar Reserva por WhatsApp</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
