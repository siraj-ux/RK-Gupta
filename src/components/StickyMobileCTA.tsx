import { Button } from '@/components/ui/button';
import { CountdownTimer } from './CountdownTimer';
import { Clock, ArrowRight, Users } from 'lucide-react';

interface StickyMobileCTAProps {
  onCTAClick: () => void;
}

export const StickyMobileCTA = ({ onCTAClick }: StickyMobileCTAProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-black/10 p-3 md:hidden z-50 shadow-xl">
      
      {/* CONTENT */}
      <div className="flex flex-col gap-2">

        {/* MAIN ROW */}
        <div className="flex items-center justify-between gap-3">

          {/* TIMER SIDE */}
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-red-600 animate-pulse flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Register @ only ₹9/-
            </span>
            <CountdownTimer className="scale-75 origin-left" />
          </div>

          {/* BUTTON + COUNTER SIDE */}
          <div className="flex flex-col items-center gap-1">
            <a href='#register'>
              <Button
                size="sm"
                onClick={onCTAClick}
                className="bg-[#003459] hover:bg-[#003459]/90 text-white flex items-center gap-1 px-4 h-9 text-xs"
              >
                Register Now
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </a>
            
            {/* COUNTER BELOW BUTTON */}
            <span className="text-[10px] font-bold text-[#003459] flex items-center gap-1">
              <Users className="h-2.5 w-2.5" /> 4,772+ Joined
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};