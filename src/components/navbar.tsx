'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Shield, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios & Resultados', href: '#servicios' },
    { name: 'Antes / Después', href: '#antes-despues' },
    { name: 'Cotizador', href: '#cotizador' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#07070a]/95 backdrop-blur-md border-b border-purple-950/50 shadow-xl'
          : 'py-4 sm:py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="#inicio" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-lime-400 via-purple-600 to-indigo-900 p-0.5 shadow-md shadow-purple-600/30">
              <div className="w-full h-full bg-[#0d0e15] rounded-[10px] flex items-center justify-center">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-wide text-white">
                BM <span className="text-lime-400">CAR DETAIL</span>
              </span>
              <span className="text-[10px] text-slate-400 tracking-tight font-mono">
                Detailing Premium • Córdoba
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 glass-panel px-5 py-2 rounded-full border border-purple-900/40">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-slate-300 hover:text-lime-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Reservar Turno CTA */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold text-black bg-lime-400 hover:bg-lime-300 shadow-md shadow-lime-400/20 transition-all duration-300 active:scale-95"
            >
              <Calendar className="w-4 h-4 stroke-[2.5]" />
              <span>Reservar Turno</span>
            </button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-white bg-purple-950/60 border border-purple-500/40 active:scale-95 transition-all shadow-lg"
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-lime-400" /> : <Menu className="w-5 h-5 text-lime-400" />}
          </button>
        </div>
      </div>

      {/* Sleek Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-3 top-16 z-50 p-5 rounded-3xl bg-[#0a0b12]/95 backdrop-blur-2xl border border-purple-500/30 shadow-2xl shadow-purple-950/60 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-purple-900/40">
            <span className="text-xs font-bold text-lime-400 uppercase tracking-widest font-mono">Navegación</span>
            <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-900/40">
              📍 Córdoba Capital
            </span>
          </div>

          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-bold text-slate-100 hover:text-lime-300 hover:bg-purple-900/30 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-lime-400 font-mono">→</span>
              </Link>
            ))}

            <div className="pt-3 border-t border-purple-900/40 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-extrabold text-black bg-lime-400 hover:bg-lime-300 rounded-xl shadow-lg shadow-lime-400/30 active:scale-95 transition-all"
              >
                <Calendar className="w-4 h-4 stroke-[2.5]" />
                <span>Reservar Turno (Por Pasos)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
