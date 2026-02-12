import {
  BookOpen,
  HelpCircle,
  MessageSquare,
  Brain,
  Eye,
  Hourglass,
  Layers,
  ListOrdered,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';

export const WhatYoullLearnSection = () => {
  const scrollToForm = () => {
    const el = document.getElementById('#register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-8 md:py-24 bg-[#003459] text-white">
      <div className="container max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
         
          <h2 className="text-2xl md:text-4xl font-science font-bold mb-4">
            Is Live Session Mein Kya Cover Hoga
          </h2>

          <p className="text-md text-white/85 text-left">
            Is masterclass mein topics ko <span className="font-semibold">step-by-step</span>{' '}
            explain kiya jaayega — taaki flow samajh aaye aur clarity build ho.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <div className="bg-[#00171f] border border-[#007ea7]/40 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-7 w-7 text-[#00a8e8]" />
              <h3 className="text-xl font-bold">Foundational Understanding</h3>
            </div>

            <ul className="space-y-4 text-sm text-white/85">
              <li className="flex gap-3"><HelpCircle className="h-5 w-5 text-[#00a8e8]" /> Basic concepts ka clear explanation</li>
              <li className="flex gap-3"><MessageSquare className="h-5 w-5 text-[#00a8e8]" /> Common confusion points ka breakdown</li>
              <li className="flex gap-3"><Brain className="h-5 w-5 text-[#00a8e8]" /> Terminology ko simple context mein samajhna</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#007ea7] border border-[#00a8e8]/60 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="h-7 w-7 text-white" />
              <h3 className="text-xl font-bold">Decision-Thinking Approach</h3>
            </div>

            <ul className="space-y-4 text-sm text-white/95">
              <li className="flex gap-3"><Brain className="h-5 w-5 text-white" /> Situations ko logically dekhna</li>
              <li className="flex gap-3"><Hourglass className="h-5 w-5 text-white" /> Observation aur patience ka role</li>
              <li className="flex gap-3"><ShieldCheck className="h-5 w-5 text-white" /> Emotional & impulsive thinking handle karna</li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#00171f] border border-[#007ea7]/40 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="h-7 w-7 text-[#00a8e8]" />
              <h3 className="text-xl font-bold">Structured Learning Framework</h3>
            </div>

            <ul className="space-y-4 text-sm text-white/85">
              <li className="flex gap-3"><ListOrdered className="h-5 w-5 text-[#00a8e8]" /> Concepts ko sequence mein process karna</li>
              <li className="flex gap-3"><ShieldCheck className="h-5 w-5 text-[#00a8e8]" /> Information overload se bachna</li>
              <li className="flex gap-3"><Brain className="h-5 w-5 text-[#00a8e8]" /> Long-term clarity ke liye disciplined approach</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 bg-[#00a8e8] hover:bg-[#00a8e8]/90 text-[#00171f] font-bold px-10 py-2 rounded-xl text-lg transition shadow-lg"
          >
            Register for the Live Masterclass
            <ArrowUpRight className="h-5 w-5" />
          </button>

          <p className="text-sm text-white/70 mt-3">
            Seats limited • Live conceptual learning
          </p>
        </div>

      </div>
    </section>
  );
};
