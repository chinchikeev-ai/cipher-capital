import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { PerformanceSimulation } from '@/components/PerformanceSimulation';
import { AcademySection } from '@/components/AcademySection';
import { SystemTicker } from '@/components/SystemTicker';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <SystemTicker />
        <ServicesSection />
        <PerformanceSimulation />
        <AcademySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
