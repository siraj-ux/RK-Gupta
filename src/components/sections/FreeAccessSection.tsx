import { Gift, Users, ArrowUpRight } from 'lucide-react';

export const FreeAccessSection = () => {
  const scrollToForm = () => {
    const el = document.getElementById('#register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#00171f] text-white">
      <div className="container max-w-6xl mx-auto">

        <div className="bg-[#003459] border border-[#007ea7]/50 rounded-3xl p-8 md:p-12 text-center shadow-xl">

          {/* ICON */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#00a8e8]/20 p-4 rounded-full">
              <Gift className="h-10 w-10 text-[#00a8e8]" />
            </div>
          </div>

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-science font-bold mb-4">
            First 100 Learners – FREE Access
          </h2>

          {/* DESCRIPTION */}
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-6">
            Is live learning initiative ka aim hai
            <span className="font-semibold"> maximum logon tak structured education pahunchana</span>.
            <br />
            Isliye pehle 100 registrations ke liye
            <span className="font-semibold"> complete access FREE</span> rakha gaya hai.
          </p>

          {/* PRICE */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Users className="h-5 w-5 text-[#00a8e8]" />
            <span className="text-sm text-white/80">
              Regular Learning Fee:
              <span className="line-through ml-1">₹999</span>
            </span>
          </div>

          {/* CTA */}
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 bg-[#00a8e8] hover:bg-[#00a8e8]/90 text-[#00171f] font-bold px-10 py-4 rounded-xl text-lg transition shadow-lg"
          >
            FREE Seat Claim Karein
            <ArrowUpRight className="h-5 w-5" />
          </button>

          {/* FOOT NOTE */}
          <p className="text-sm text-white/70 mt-4">
            Limited seats • Live learning • No hype, only clarity
          </p>
        </div>

      </div>
    </section>
  );
};
