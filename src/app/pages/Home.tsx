import { useScroll } from '../../hooks/useScroll';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import TrustSection from '../components/home/TrustSection';
import FeaturesSection from '../components/home/FeaturesSection';
import ProgramsSection from '../components/home/ProgramsSection';
import PricingSection from '../components/home/PricingSection';
import CTASection from '../components/home/CTASection';
import MobileActionBar from '../components/home/MobileActionBar';

export default function Home() {
  const isScrolled = useScroll();

  return (
    <div dir="rtl" className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-yellow-500 selection:text-zinc-950">
      <Navigation isScrolled={isScrolled} />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <StatsSection />
        <TrustSection />
        <FeaturesSection />
      </div>
      <div id="programs">
        <ProgramsSection />
        <PricingSection />
      </div>
      <CTASection />
      <Footer />
      <MobileActionBar />
    </div>
  );
}
