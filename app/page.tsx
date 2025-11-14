import { Navigation } from '@/components/Navigation';
import { StarField } from '@/components/StarField';
import { LandingHero } from '@/components/home/LandingHero';
import { Features } from '@/components/home/Features';
import { HowItWorks } from '@/components/home/HowItWorks';
import { DreamGallery } from '@/components/home/DreamGallery';

const Home = () => {
  return (
    <div className="min-h-screen bg-dream-main relative overflow-hidden">
      <StarField />
      <Navigation />
      
      <main className="relative z-10">
        <LandingHero />
        <Features />
        <HowItWorks />
        <DreamGallery />
      </main>
    </div>
  );
};

export default Home;
