import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { ServicesExplained } from '@/components/services-explained';
import { BeforeAfterSlider } from '@/components/before-after-slider';
import { QuoteCalculator } from '@/components/quote-calculator';
import { ContactLocation } from '@/components/contact-location';
import { Footer } from '@/components/footer';
import { WhatsappFloat } from '@/components/whatsapp-float';
import { GlowingBubblesBg } from '@/components/glowing-bubbles-bg';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07070a] text-slate-100 flex flex-col relative overflow-hidden">
      <GlowingBubblesBg />
      <Navbar />
      <HeroSection />
      <ServicesExplained />
      <BeforeAfterSlider />
      <QuoteCalculator />
      <ContactLocation />
      <Footer />
      <WhatsappFloat />
    </main>
  );
}
