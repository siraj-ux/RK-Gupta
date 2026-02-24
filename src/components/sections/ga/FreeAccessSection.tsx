import { Gift, Users, ArrowUpRight } from 'lucide-react';

export const FreeAccessSection = () => {
  const scrollToForm = () => {
    // ❌ '#register' was wrong
    // ✅ getElementById expects only the ID
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative py-8 md:py-24 bg-[#00171f] text-white overflow-hidden">

      {/* 🌟 Section glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00a8e8]/10 blur-[140px]" />
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto">

        <div className="relative bg-[#003459] border border-[#007ea7]/50 rounded-3xl p-8 md:p-12 text-center shadow-xl overflow-hidden">

          {/* ✨ Card glow */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#00a8e8]/20 via-transparent to-transparent blur-2xl" />

          {/* ICON */}
          <div className="flex justify-center mb-6">
            <div className="relative bg-[#00a8e8]/20 p-4 rounded-full">
              <Gift className="h-10 w-10 text-[#E1B125]" />
              <span className="absolute inset-0 bg-[#00a8e8]/30 blur-xl rounded-full -z-10 animate-pulse" />
            </div>
          </div>

          {/* TITLE */}
          <h2 className="text-2xl md:text-4xl font-science font-bold mb-4">
            First 100 Learners –{' '}
            <span className="relative inline-block text-[#E1B125]">
              Register @ only ₹9/-
              <span className="absolute inset-0 bg-[#00ffcc]/40 blur-xl -z-10 animate-pulse" />
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-md text-white/90 max-w-3xl mx-auto leading-relaxed mb-6">
            Is live learning initiative ka aim hai
            <span className="font-semibold"> maximum logon tak structured education pahunchana</span>.
            <br />
            Isliye pehle 100 registrations ke liye
            <span className="font-semibold text-[#E1B125]"> nominal registration fee sirf only ₹9/-</span> rakha gaya hai.
          </p>

          {/* PRICE */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Users className="h-5 w-5 text-[#00a8e8]" />
            <span className="text-sm text-white/80">
              Regular Learning Fee:
              <span className="line-through ml-1">₹999</span>
            </span>
          </div>

          {/* 🔥 CTA with glow */}
          <div className="relative inline-block">
            <button
              onClick={scrollToForm}
              className="
                relative inline-flex items-center gap-2
                bg-[#00a8e8] hover:bg-[#00a8e8]/90
                text-[#00171f] font-bold
                px-8 py-4 rounded-xl text-lg
                transition shadow-xl z-10
              "
            >
              Pay only ₹9/- & Seat Claim Karein
              <ArrowUpRight className="h-5 w-5" />
            </button>

            {/* CTA glow */}
            <div className="absolute inset-0 bg-[#00a8e8]/50 blur-2xl rounded-xl animate-pulse -z-10" />
          </div>

          {/* FOOT NOTE */}
          <p className="text-sm text-white/70 mt-5">
            Limited seats • Live learning • No hype, only clarity
          </p>
        </div>

      </div>
    </section>
  );
};
