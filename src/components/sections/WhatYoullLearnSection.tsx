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
  Search,
  AlertTriangle,
  Cpu
} from 'lucide-react';

export const WhatYoullLearnSection = () => {
  const scrollToForm = () => {
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-12 md:py-20 bg-[#003459] text-white">
      <div className="container max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-science font-bold mb-6">
            Is 2 Ghante Mein Yeh 3 Cheezein Clearly Samjh Aayengi:
          </h2>

          <p className="text-lg text-white/85">
            Is masterclass mein topics ko <span className="font-semibold text-[#00a8e8]">step-by-step</span>{' '}
            explain kiya jaayega, taaki flow samajh aaye aur clarity build ho.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* CARD 1 - HOW IT WORKS */}
          <div className="bg-[#00171f] border border-[#007ea7]/40 rounded-2xl p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <Cpu className="h-8 w-8 text-[#00a8e8]" />
              <h3 className="text-xl font-bold leading-tight">Crypto Actually Kaam Kaise Karta Hai</h3>
            </div>

            <ul className="space-y-4 text-sm text-white/85 flex-grow">
              <li className="flex gap-3"><BookOpen className="h-5 w-5 text-[#00a8e8] flex-shrink-0" /> Bitcoin, blockchain aur wallets ka basic structure</li>
              <li className="flex gap-3"><Layers className="h-5 w-5 text-[#00a8e8] flex-shrink-0" /> Bina technical jargon ke, ek simple model ke saath</li>
              <li className="flex gap-3"><HelpCircle className="h-5 w-5 text-[#00a8e8] flex-shrink-0" /> Digital assets ki real-world working clarity</li>
            </ul>
          </div>

          {/* CARD 2 - COMMON MISTAKES */}
          <div className="bg-[#007ea7] border border-[#00a8e8]/60 rounded-2xl p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <AlertTriangle className="h-8 w-8 text-white" />
              <h3 className="text-xl font-bold leading-tight">Logon Ke Saath Kya Galat Hota Hai</h3>
            </div>

            <ul className="space-y-4 text-sm text-white/95 flex-grow">
              <li className="flex gap-3"><ShieldCheck className="h-5 w-5 text-white flex-shrink-0" /> Common mistakes jo educated log bhi karte hain</li>
              <li className="flex gap-3"><Brain className="h-5 w-5 text-white flex-shrink-0" /> Galat decisions ke peeche ka psychological reason</li>
              <li className="flex gap-3"><Hourglass className="h-5 w-5 text-white flex-shrink-0" /> Hype aur FOMO ko identify karna seekhna</li>
            </ul>
          </div>

          {/* CARD 3 - SELF-DEPENDENCE */}
          <div className="bg-[#00171f] border border-[#007ea7]/40 rounded-2xl p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <Search className="h-8 w-8 text-[#00a8e8]" />
              <h3 className="text-xl font-bold leading-tight">Sahi Sawaal Poochna Seekhna</h3>
            </div>

            <ul className="space-y-4 text-sm text-white/85 flex-grow">
              <li className="flex gap-3"><MessageSquare className="h-5 w-5 text-[#00a8e8] flex-shrink-0" /> Bina kisi pe depend kiye khud judge karna</li>
              <li className="flex gap-3"><Eye className="h-5 w-5 text-[#00a8e8] flex-shrink-0" /> News, claims ya opportunities ko filter karna</li>
              <li className="flex gap-3"><ListOrdered className="h-5 w-5 text-[#00a8e8] flex-shrink-0" /> Self-dependent decision making framework</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          
          {/* New Reassurance Text */}
          <p className="text-base md:text-lg text-white/80 italic mb-6 max-w-2xl mx-auto leading-relaxed">
            ₹9 ek cup chai se bhi kam hai. Agar session aapke kaam ka na lage, aapko kuch nahi khona. <br className="hidden md:block" /> 
            Agar kaam aaya, toh clarity mil gayi.
          </p>

          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 bg-[#00a8e8] hover:bg-white hover:text-[#00171f] text-[#00171f] font-bold px-8 md:px-10 py-3 rounded-xl text-lg transition-all duration-300 shadow-xl"
          >
            Register for the Live Masterclass @ Just ₹9/-
            <ArrowUpRight className="h-5 w-5" />
          </button>

          <p className="text-sm text-white/70 mt-4 font-medium">
            Join 4,000+ Professionals • Live Conceptual Learning
          </p>
        </div>

      </div>
    </section>
  );
};