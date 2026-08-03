'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { ServicesExplained } from '@/components/services-explained';
import { InfiniteMarqueeGallery } from '@/components/infinite-marquee-gallery';
import { BeforeAfterSlider } from '@/components/before-after-slider';
import { QuoteCalculator } from '@/components/quote-calculator';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ContactLocation } from '@/components/contact-location';
import { Footer } from '@/components/footer';
import { WhatsappFloat } from '@/components/whatsapp-float';
import { GlowingBubblesBg } from '@/components/glowing-bubbles-bg';
import { ServiceDetailModal } from '@/components/service-detail-modal';
import { BookingWizardModal } from '@/components/booking-wizard-modal';
import { ServiceItem } from '@/data/car-detail-data';

export default function Home() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPreselectedServiceId, setBookingPreselectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setBookingPreselectedServiceId(serviceId);
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#07070a] text-slate-100 flex flex-col relative overflow-hidden">
      <GlowingBubblesBg />
      
      {/* Top Floating Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* 1. Hero Section (Vivid Wash Reference Aesthetic with Foam Wash Photo & Animated Counters) */}
      <HeroSection onOpenBooking={() => handleOpenBooking()} />

      {/* 2. Servicios & Resultados Catalog */}
      <ServicesExplained
        onSelectService={(service) => setSelectedService(service)}
        onOpenBooking={(serviceId) => handleOpenBooking(serviceId)}
      />

      {/* 3. 3-Row Infinite Marquee Gallery (Moving in Alternating Directions) */}
      <InfiniteMarqueeGallery />

      {/* 4. Interactive Before & After Slider */}
      <BeforeAfterSlider />

      {/* 5. Quote Calculator */}
      <QuoteCalculator />

      {/* 6. Testimonials & Verified 5-Star Reviews */}
      <TestimonialsSection />

      {/* 7. Agendá Tu Turno & Ubicación */}
      <ContactLocation onOpenBooking={() => handleOpenBooking()} />

      {/* Footer & Floating WhatsApp */}
      <Footer />
      <WhatsappFloat />

      {/* Modals */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenBooking={(serviceId) => handleOpenBooking(serviceId)}
      />

      <BookingWizardModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedServiceId={bookingPreselectedServiceId}
      />
    </main>
  );
}
