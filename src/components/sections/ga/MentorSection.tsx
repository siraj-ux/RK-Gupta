import { CheckCircle2, ShieldCheck } from 'lucide-react';

export const MentorSection = () => {
  return (
    <section className="py-8 md:py-24 bg-white">
      <div className="container max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-6">
          

          <h2 className="text-2xl md:text-5xl font-science font-bold text-[#00171f]">
            Aapka Educator: RK Gupta
          </h2>
        </div>

        {/* Mentor Card */}
        <div className="bg-[#f0f9ff] rounded-3xl p-6 md:p-10 border border-[#00a8e8]/30 shadow-lg">
          <div className="flex flex-col md:flex-row gap-10 items-center">

            {/* Image */}
            <div className="flex-shrink-0 text-center">
              <div className="w-56 h-72 rounded-2xl overflow-hidden shadow-md border border-[#007ea7]/30">
                <img
                  src="/coach.jpeg"
                  alt="RK Gupta"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">

              <h3 className="text-2xl font-science font-bold text-[#00171f] mb-2">
                RK Gupta
              </h3>

              <p className="text-sm font-semibold text-[#003459] mb-6">
                Conceptual Learning Mentor • Process-Based Educator
              </p>

              {/* CORE PHILOSOPHY */}
              <p className="text-md text-[#00171f]/90 mb-6 leading-relaxed text-left">
                Main complex topics ko <span className="font-semibold">exaggeration ke saath present nahi karta</span>.  
                <br />
                Mera focus hota hai <span className="font-semibold">clarity, structure aur understanding</span> par.
              </p>

              {/* POINTS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                {[
                  'Hindi mein clear explanation',
                  'Step-by-step teaching approach',
                  'Overloading se bachkar learning',
                  'Thinking aur discipline pe focus',
                ].map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 border border-[#00a8e8]/30"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#007ea7] mt-0.5 flex-shrink-0" />
                    <p className="text-[#00171f] text-sm font-medium">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* DISCLAIMER STYLE NOTE */}
              <div className="flex items-start gap-3 bg-[#003459] rounded-xl p-4 text-white">
                <ShieldCheck className="h-5 w-5 text-[#00a8e8] mt-0.5 flex-shrink-0 mt-8" />
                <p className="text-sm leading-relaxed text-left">
                  Is session mein <span className="font-semibold">koi tips, calls ya recommendations</span> nahi di jaati.  
                  Yeh ek <span className="font-semibold">pure educational learning experience</span> hai.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
