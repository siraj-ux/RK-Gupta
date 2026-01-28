import { useRef, useEffect } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { WorkshopLearningSection } from '@/components/sections/Learning';
import { WhatYoullLearnSection } from '@/components/sections/WhatYoullLearnSection';
import { ActionStepsSection } from '@/components/sections/ActionStepsSection';
import { BonusesSection } from '@/components/sections/BonusesSection';
import { WhoIsThisForSection } from '@/components/sections/WhoIsThisForSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { MentorSection } from '@/components/sections/MentorSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { DisclaimerFooter } from '@/components/sections/DisclaimerFooter';
import { useFacebookPixel } from "@/hooks/useFacebookPixelHome";
import { LearningPhilosophySection } from '@/components/sections/LearningPhilosophySection';
import { FreeAccessSection } from '@/components/sections/FreeAccessSection';


const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

useFacebookPixel()



  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <LearningPhilosophySection/>
      <WhatYoullLearnSection />
      <WorkshopLearningSection />
      <FreeAccessSection/>
      <MentorSection />
      <FAQSection />
      <FinalCTASection onCTAClick={scrollToHero} />
      <DisclaimerFooter />
      <StickyMobileCTA onCTAClick={scrollToHero} />
    </main>
  );
};

export default Index;
