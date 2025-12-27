import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { PerformanceSimulation } from '@/components/PerformanceSimulation';
import { AcademySection } from '@/components/AcademySection';
import { SystemTicker } from '@/components/SystemTicker';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
};

export default Index;
