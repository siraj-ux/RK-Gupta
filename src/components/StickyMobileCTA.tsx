import { Button } from '@/components/ui/button';
import { CountdownTimer } from './CountdownTimer';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';

interface StickyMobileCTAProps {
  onCTAClick: () => void;
}

export const StickyMobileCTA = ({ onCTAClick }: StickyMobileCTAProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-black/10 p-3 md:hidden z-50 shadow-xl">
      
      {/* CONTENT */}
      <div className="flex flex-col gap-2">

        {/* TITLE */}
        <p className="text-xs font-semibold text-[#00171f] leading-tight text-center">
          Agar aapko <span className="text-[#007ea7]">options genuinely samajhna hai</span>,  
          <br />
          toh session join karo.
        </p>

        <p className="text-[11px] text-[#00171f]/80 text-center">
          Main aapko <span className="font-semibold">basics se clarity</span> tak le jaunga.
        </p>

        {/* TIMER + SEATS */}
        <div className="flex items-center justify-between gap-3">

          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-red-600 animate-blink flex items-center gap-1">
              <Clock className="h-3 w-3" />
              First 100 FREE
            </span>
            <CountdownTimer className="scale-75 origin-left" />
          </div>

          {/* CTA */}
          <a href='#register'>
            <Button
              size="lg"
              onClick={onCTAClick}
              className="bg-[#003459] hover:bg-[#003459]/90 text-white flex items-center gap-1 px-4"
            >
              Register Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>

        </div>
      </div>
    </div>
  );
};
