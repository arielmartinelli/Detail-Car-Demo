'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Calendar } from 'lucide-react';

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
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-2 bg-[#07070a]/95 backdrop-blur-xl border-b border-gray-800/60 shadow-2xl shadow-black/50'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo — Bold & Minimal */}
          <Link href="#inicio" className="flex items-center gap-2 group">
            <span className="text-xl sm:text-2xl font-black tracking-wider text-white uppercase">
              BM <span className="text-red-500">CAR DETAIL</span>
            </span>
          </Link>

          {/* Desktop Navigation — Clean, no pill, bigger text */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-bold text-slate-300 hover:text-red-500 transition-colors duration-300 tracking-wide relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-extrabold text-white bg-red-600 hover:bg-red-500 shadow-lg shadow-red-950/60 transition-all duration-300 active:scale-95 border border-red-500/30 hover:shadow-red-900/50 hover:shadow-xl"
            >
              <Calendar className="w-4 h-4 stroke-[2.5]" />
              <span>Reservar Turno</span>
            </button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 rounded-xl text-white active:scale-95 transition-all"
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-red-500" /> : <Menu className="w-7 h-7 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 z-50 p-5 bg-[#07070a]/98 backdrop-blur-2xl border-b border-gray-800 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1 max-w-lg mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-4 text-lg font-bold text-white hover:text-red-400 hover:bg-white/5 rounded-xl transition-all"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-3 mt-2 border-t border-gray-800/80">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-4 px-4 text-sm font-black text-white bg-red-600 hover:bg-red-500 rounded-xl shadow-xl shadow-red-950/80 active:scale-95 transition-all"
              >
                <Calendar className="w-4 h-4 stroke-[2.5]" />
                <span>Reservar Turno</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
