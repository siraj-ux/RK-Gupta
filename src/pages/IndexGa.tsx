import { useRef, useEffect } from 'react';
import { HeroSection } from '@/components/sections/ga/HeroSection';
import { WorkshopLearningSection } from '@/components/sections/ga/Learning';
import { WhatYoullLearnSection } from '@/components/sections/ga/WhatYoullLearnSection';
import { ActionStepsSection } from '@/components/sections/ga/ActionStepsSection';
import { BonusesSection } from '@/components/sections/ga/BonusesSection';
import { WhoIsThisForSection } from '@/components/sections/ga/WhoIsThisForSection';
import { TestimonialsSection } from '@/components/sections/ga/TestimonialsSection';
import { MentorSection } from '@/components/sections/ga/MentorSection';
import { FAQSection } from '@/components/sections/ga/FAQSection';
import { FinalCTASection } from '@/components/sections/ga/FinalCTASection';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { DisclaimerFooter } from '@/components/sections/ga/DisclaimerFooter';
import { useFacebookPixel } from "@/hooks/useFacebookPixelHome";
import { LearningPhilosophySection } from '@/components/sections/ga/LearningPhilosophySection';
import { FreeAccessSection } from '@/components/sections/ga/FreeAccessSection';
import { CelebsBeliefSection } from '@/components/sections/ga/CelebsBeliefSection';


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
      <CelebsBeliefSection/>
      <MentorSection />
      <FAQSection />
      <FinalCTASection onCTAClick={scrollToHero} />
      <DisclaimerFooter />
      <StickyMobileCTA onCTAClick={scrollToHero} />
    </main>
  );
};

export default Index;
