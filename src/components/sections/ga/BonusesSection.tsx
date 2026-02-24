import { useEffect, useState } from 'react';
import { Wallet, Heart, Briefcase, Shield, Gift } from 'lucide-react';

const bonuses = [
  {
    icon: Wallet,
    title: 'Money & Business Growth',
    description: 'Attract high-paying clients & increase revenue consistency',
    accent: 'from-green-400 to-emerald-500',
  },
  {
    icon: Heart,
    title: 'Health & Energy Hacks',
    description: 'Beat fatigue, balance BP & restore daily energy',
    accent: 'from-red-400 to-pink-500',
  },
  {
    icon: Heart,
    title: 'Love & Relationships',
    description: 'Remove misunderstandings & attract meaningful love',
    accent: 'from-pink-400 to-rose-500',
  },
  {
    icon: Briefcase,
    title: 'Career & Growth Rituals',
    description: 'Switchwords for focus, success & growth',
    accent: 'from-blue-400 to-cyan-500',
  },
  {
    icon: Gift,
    title: 'Numerology Software (FREE)',
    description: 'Premium software worth ₹5,000 — FREE for lifetime',
    accent: 'from-yellow-400 to-orange-500',
    highlight: true,
  },
  {
    icon: Shield,
    title: 'Protection Rituals',
    description: 'Shield yourself from evil eye & negative energies',
    accent: 'from-purple-400 to-violet-500',
  },
];

export const BonusesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  /* 📱 Scroll highlight (mobile only) */
  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const cards = document.querySelectorAll('.bonus-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-8 md:py-20 bg-[#04343b] overflow-visible">

      {/* 🌟 Section Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-400/10 blur-[140px]" />
      </div>

      <div className="container relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Gift className="h-4 w-4 text-yellow-400" />
            Exclusive Bonuses
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Bonuses Worth{' '}
            <span className="relative inline-block text-yellow-400">
              ₹5,000+
              <span className="absolute inset-0 blur-xl bg-yellow-400/40 -z-10 animate-pulse" />
            </span>{' '}
            Included{' '}
            <span className="relative inline-block text-green-400">
              FREE
              <span className="absolute inset-0 blur-xl bg-green-400/40 -z-10 animate-pulse" />
            </span>
          </h2>

          <p className="text-white/70 mt-3">
            These bonuses alone are worth more than the workshop price
          </p>
        </div>

        {/* Bonuses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              data-index={index}
              className={`
                bonus-card group relative rounded-2xl p-6
                overflow-visible
                bg-white/10 backdrop-blur-lg
                border border-white/15
                transition-all duration-300
                ${
                  activeIndex === index
                    ? 'scale-[1.05] shadow-2xl'
                    : ''
                }
                md:hover:-translate-y-2 md:hover:shadow-2xl
              `}
            >

              {/* 🎀 TOP-LEFT BONUS RIBBON */}
              {bonus.highlight && (
                <div className="absolute top-0 left-0 z-40 pointer-events-none">
                  <div className="
                    bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500
                    text-white text-[11px] font-extrabold tracking-wider
                    px-4 py-1
                    rounded-br-xl
                    shadow-xl
                  ">
                    BONUS
                  </div>
                </div>
              )}

              {/* ✨ Glow layer (behind everything) */}
              <div
                className={`
                  absolute inset-0 rounded-2xl -z-10
                  transition-opacity duration-500
                  bg-gradient-to-br ${bonus.accent} blur-xl
                  ${
                    activeIndex === index
                      ? 'opacity-100'
                      : 'opacity-0 md:group-hover:opacity-100'
                  }
                `}
              />

              {/* Content */}
              <div className="relative z-10">
                <div
                  className={`
                    w-14 h-14 rounded-xl mb-4
                    flex items-center justify-center
                    bg-gradient-to-br ${bonus.accent}
                    shadow-lg
                  `}
                >
                  <bonus.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="font-bold text-white mb-1">
                  {bonus.title}
                </h3>

                <p className="text-white/80 text-sm">
                  {bonus.description}
                </p>

                {bonus.highlight && (
                  <span className="relative inline-block mt-4 text-xs font-bold text-white bg-green-500 px-3 py-1 rounded-full">
                    FREE BONUS
                    <span className="absolute inset-0 blur-lg bg-green-400/50 -z-10 animate-pulse" />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
