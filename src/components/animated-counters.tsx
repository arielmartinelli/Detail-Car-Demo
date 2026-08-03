'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Award, Star, ShieldCheck } from 'lucide-react';

interface CounterItemProps {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

const CounterItem: React.FC<CounterItemProps> = ({ end, prefix = '', suffix = '', label, sublabel, icon }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="glass-panel p-5 rounded-2xl border border-lime-400/20 hover:border-lime-400/50 transition-all duration-300 transform hover:-translate-y-1 shadow-xl group bg-[#0d0f17]/90">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400 group-hover:scale-110 group-hover:bg-lime-400 group-hover:text-black transition-all duration-300 shadow-lg shadow-lime-400/20">
          {icon}
        </div>
        <div>
          <span className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight group-hover:text-lime-300 transition-colors">
            {prefix}{count}{suffix}
          </span>
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mt-0.5">{label}</h4>
          <p className="text-[11px] text-slate-400">{sublabel}</p>
        </div>
      </div>
    </div>
  );
};

export const AnimatedCounters: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-10">
      <CounterItem
        end={520}
        prefix="+"
        label="Autos Transformados"
        sublabel="Garantía Escrita Oficial"
        icon={<Award className="w-6 h-6" />}
      />
      <CounterItem
        end={100}
        suffix="%"
        label="Calidad 5 Estrellas"
        sublabel="140+ Reseñas en Google"
        icon={<Star className="w-6 h-6 fill-current" />}
      />
      <CounterItem
        end={8}
        prefix="+"
        suffix=" Años"
        label="Experiencia Pro"
        sublabel="Detailers Certificados"
        icon={<ShieldCheck className="w-6 h-6" />}
      />
    </div>
  );
};
