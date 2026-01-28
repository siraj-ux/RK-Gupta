import {
  Brain,
  Layers,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

export const LearningPhilosophySection = () => {
  return (
    <section className="py-16 md:py-24 bg-white text-[#00171f]">
      <div className="container max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-[#e6f6fb] text-[#007ea7] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Learning Philosophy
          </span>

          <h2 className="text-3xl md:text-4xl font-science font-bold leading-tight">
            Learning should feel <span className="text-[#007ea7]">clear</span>, not overwhelming
          </h2>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT – PHILOSOPHY */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-[#00171f]/90">
              Mera approach bilkul simple hai.  
              Main concepts ko <span className="font-semibold">slow, clear aur structured</span>{' '}
              tareeke se samjhata hoon — taaki understanding strong ho aur confusion naturally kam ho.
            </p>

            <p className="text-lg leading-relaxed text-[#00171f]/90">
              Yeh session un logon ke liye hai jo sirf information nahi,
              balki <span className="font-semibold">sochne ka sahi tareeqa</span> seekhna chahte hain.
            </p>

            {/* TRUST NOTE */}
            <div className="flex items-start gap-3 bg-[#f0f9ff] border border-[#00a8e8]/40 rounded-xl p-4">
              <ShieldCheck className="h-6 w-6 text-[#007ea7] mt-0.5" />
              <p className="text-sm leading-relaxed text-[#00171f]/90">
                Yeh session learning ke liye design kiya gaya hai —
                <span className="font-semibold"> na ki claims, guarantees ya pressure</span> ke liye.
              </p>
            </div>
          </div>

          {/* RIGHT – GOALS */}
          <div className="bg-[#003459] rounded-2xl p-6 md:p-8 border border-[#007ea7]/40 text-white">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Layers className="h-6 w-6 text-[#00a8e8]" />
              Is session ka clear goal:
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-[#00a8e8] mt-0.5" />
                <span>
                  Information ko <span className="font-semibold">simple language</span> mein explain karna
                </span>
              </li>

              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-[#00a8e8] mt-0.5" />
                <span>
                  Overthinking aur misinterpretation ko systematically reduce karna
                </span>
              </li>

              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-[#00a8e8] mt-0.5" />
                <span>
                  Decision sochne ka ek <span className="font-semibold">logical framework</span> banana
                </span>
              </li>
            </ul>

            {/* FOOT NOTE */}
            <div className="mt-6 flex items-center gap-3 text-sm text-white/80">
              <Brain className="h-5 w-5 text-[#00a8e8]" />
              <span>
                Clarity comes from structure — not speed.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
