'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, MessageCircle, Heart } from 'lucide-react';
import { BRAND_INFO } from '@/data/car-detail-data';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#040406] border-t border-gray-800/60 pt-14 pb-10 text-slate-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-gray-800/40">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-wider text-white">
                BM <span className="text-red-500">CAR DETAIL</span>
              </span>
              <span className="text-[10px] text-slate-500 tracking-widest font-mono uppercase mt-1">
                Detailing Premium • Córdoba
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Taller de detailing profesional especializado en tratamientos cerámicos 9H, pulido corrección de laca, limpieza técnica de interiores y PPF en Córdoba, Argentina.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-500/50 transition-colors"
                aria-label="Instagram BM Car Detail"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-500/50 transition-colors"
                aria-label="WhatsApp BM Car Detail"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Navegación</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="#inicio" className="hover:text-red-500 transition-colors">Inicio</Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-red-500 transition-colors">Servicios</Link>
              </li>
              <li>
                <Link href="#galeria" className="hover:text-red-500 transition-colors">Galería de Trabajos</Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-red-500 transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Ubicación & Atención</h4>
            
            <div className="bg-gray-900/50 p-4 rounded-2xl border border-gray-800 space-y-3 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Córdoba Capital, Argentina</span>
                  <span className="block text-slate-400 text-[11px]">Atención exclusiva con turno previo agendado.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-slate-300">
                <Clock className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Horarios de Recepción:</span>
                  <span className="block text-slate-400 text-[11px]">{BRAND_INFO.schedule}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} BM Car Detail • Detailing Profesional Córdoba.</p>
          <p className="flex items-center gap-1">
            Hecho con <Heart className="w-3 h-3 text-red-500 fill-red-500" /> en Córdoba
          </p>
        </div>

      </div>
    </footer>
  );
};
