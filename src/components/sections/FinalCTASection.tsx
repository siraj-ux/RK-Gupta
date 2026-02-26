import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ShieldCheck,
  Calendar,
  Clock,
  BookOpen,
} from 'lucide-react';

interface FinalCTASectionProps {
  onCTAClick?: () => void;
}

export const FinalCTASection = ({ onCTAClick }: FinalCTASectionProps) => {

  const scrollToForm = () => {
    if (onCTAClick) {
      onCTAClick();
      return;
    }
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-14 md:py-20 bg-black text-white">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight tracking-tight">
            Yeh Session Un Logon Ke Liye Hai Jo{' '}
            <span className="text-[#00a8e8]">Clarity Aur Structure</span> Ke Saath Seekhna Chahte Hain
          </h2>

          <p className="text-sm md:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Agar aap concepts ko clear aur structured tareeke se samajhna chahte ho, aur learning ko bina pressure lena chahte ho, toh yeh session aapke liye hai.
          </p>

          {/* CTA CARD */}
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl text-[#00171f] border-t-4 border-[#00a8e8]">
            
            {/* SESSION DETAILS */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-10 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#00a8e8]" />
                <span className="text-base font-bold text-[#003459]">28 February 2026</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-gray-200" />
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#00a8e8]" />
                <span className="text-base font-bold text-[#003459]">11 AM & 1 PM</span>
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-500 italic mb-6">
              "₹9 ek cup chai se bhi kam hai. Clarity ke liye itna toh banta hai."
            </p>

            {/* ADAPTIVE BUTTON: 2-LINES ON MOBILE, 1-LINE ON DESKTOP */}
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={scrollToForm}
                className="group w-full md:w-auto h-auto bg-[#00a8e8] hover:bg-[#003459] text-[#00171f] hover:text-white font-bold px-6 py-4 md:px-12 md:py-4 rounded-xl transition-all shadow-md hover:shadow-xl"
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="flex flex-col md:flex-row items-center leading-tight md:leading-normal">
                    <span className="text-lg md:text-xl font-black">
                      Pay Only ₹9/-
                    </span>
                    <span className="text-sm md:text-lg font-medium md:ml-1.5">
                      & Seat Claim Karein
                    </span>
                  </div>
                  <ArrowRight className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Button>
            </div>

            {/* URGENCY & TRUST */}
            <div className="mt-8">
              <p className="text-xs md:text-sm font-semibold text-[#003459] mb-6">
                Seats are limited to keep the session interactive. 
                <span className="block text-[#00a8e8] mt-1 uppercase tracking-wider text-[10px]">Registration closes once full</span>
              </p>
              
              <div className="pt-6 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40">
                <div className="flex items-center justify-center gap-1.5">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Live</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Hindi</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Educational</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Structured</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};