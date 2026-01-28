import { Button } from '@/components/ui/button';
import { CountdownTimer } from '@/components/CountdownTimer';
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  BookOpen,
} from 'lucide-react';

interface FinalCTASectionProps {
  onCTAClick?: () => void;
}

export const FinalCTASection = ({ onCTAClick }: FinalCTASectionProps) => {

  const scrollToRegister = () => {
    const el = document.getElementById('#register');
    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    if (onCTAClick) onCTAClick();
  };

  return (
    <section className="py-10 md:py-14 bg-black text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">

          {/* HEADER */}
          <span className="inline-block bg-white/10 text-[#00a8e8] px-3 py-1 rounded-full text-xs font-semibold mb-3">
            Final Note
          </span>

          <h2 className="text-2xl md:text-3xl font-science font-bold mb-3 leading-tight">
            Yeh session un logon ke liye hai jo{' '}
            <span className="text-[#00a8e8]">clarity aur structure</span> ke saath seekhna chahte hain
          </h2>

          {/* COPY */}
          <p className="text-sm md:text-base text-white/80 max-w-3xl mx-auto leading-relaxed mb-6">
            Agar aap concepts ko clear aur structured tareeke se samajhna chahte ho,
            aur learning ko bina pressure lena chahte ho,
            toh yeh session aapke liye hai.
            <br className="hidden md:block" />
            Yeh ek calm, safe aur focused learning experience hai —
            bina hype, bina promises, bina shortcuts.
          </p>

          {/* CTA CARD */}
          <div className="bg-white rounded-xl p-4 md:p-5 shadow-xl text-[#00171f]">

            {/* TIMER */}
            <div className="flex items-center justify-center gap-2 mb-3 text-[#007ea7]">
              <Clock className="h-4 w-4" />
              <span className="text-xs font-semibold">
                Registration closes soon
              </span>
            </div>

            <div className="flex justify-center mb-4 scale-90">
              <CountdownTimer />
            </div>

            {/* CTA BUTTON */}
            <Button
              size="lg"
              onClick={scrollToRegister}
              className="w-full md:w-auto bg-[#00a8e8] hover:bg-[#00a8e8]/90 text-[#00171f] font-bold px-8"
            >
              FREE Seat Claim Karein
              <ArrowRight className="h-4 w-4" />
            </Button>

            <p className="text-[11px] text-gray-500 mt-1">
              First 100 learners only
            </p>

            {/* TRUST STRIP */}
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 text-[11px] text-gray-600">
              <div className="flex items-center justify-center gap-1">
                <ShieldCheck className="h-3 w-3 text-[#007ea7]" />
                <span>Live</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <BookOpen className="h-3 w-3 text-[#007ea7]" />
                <span>Educational</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <ShieldCheck className="h-3 w-3 text-[#007ea7]" />
                <span>Hindi</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <BookOpen className="h-3 w-3 text-[#007ea7]" />
                <span>Structured</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
