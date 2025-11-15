import { LandingHero } from '@/components/home/LandingHero';
import { Features } from '@/components/home/Features';
import { HowItWorks } from '@/components/home/HowItWorks';
import { DreamGallery } from '@/components/home/DreamGallery';

const Home = () => {
  return (
    <main className="relative z-10">
      <LandingHero />
      <Features />
      <HowItWorks />
      <DreamGallery />
    </main>
  );
};

export default Home;
