import {
  Layers,
  AlignLeft,
  Brain,
  ShieldCheck,
} from 'lucide-react';

export const WorkshopLearningSection = () => {
  return (
    <section className="py-8 md:py-24 bg-white text-[#00171f]">
      <div className="container max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
        

          <h2 className="text-2xl md:text-4xl font-science font-bold mb-2">
            Yeh Session Aapke Liye Hai Agar
          </h2>

          <p className="text-md text-[#00171f]/80 text-left">
            Yeh masterclass un logon ke liye design ki gayi hai
            jo learning ko <span className="font-semibold">depth aur clarity</span> ke saath lena chahte hain.
          </p>
        </div>

        {/* CONTENT CARDS */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* CARD 1 */}
          <div className="bg-[#f0f9ff] border border-[#00a8e8]/40 rounded-2xl p-6 flex gap-4">
            <Layers className="h-7 w-7 text-[#007ea7] flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">
                Surface-level se aage jaana chahte ho
              </h3>
              <p className="text-sm text-[#00171f]/80">
                Aap sirf definitions nahi, balki concepts ke peeche ka logic samajhna chahte ho.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#f0f9ff] border border-[#00a8e8]/40 rounded-2xl p-6 flex gap-4">
            <AlignLeft className="h-7 w-7 text-[#007ea7] flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">
                Structured explanation prefer karte ho
              </h3>
              <p className="text-sm text-[#00171f]/80">
                Aapko step-by-step flow chahiye — random information nahi.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#f0f9ff] border border-[#00a8e8]/40 rounded-2xl p-6 flex gap-4">
            <Brain className="h-7 w-7 text-[#007ea7] flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">
                Calm aur practical learning chahte ho
              </h3>
              <p className="text-sm text-[#00171f]/80">
                Aap learning ko pressure-free aur realistic tareeke se lena pasand karte ho.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-[#f0f9ff] border border-[#00a8e8]/40 rounded-2xl p-6 flex gap-4">
            <ShieldCheck className="h-7 w-7 text-[#007ea7] flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">
                Hype aur confusion se door rehna chahte ho
              </h3>
              <p className="text-sm text-[#00171f]/80">
                Aapko claims, noise aur shortcuts se zyada clarity aur process chahiye.
              </p>
            </div>
          </div>
        </div>

        {/* FOOT NOTE */}
        <div className="mt-8 max-w-3xl mx-auto text-center">
          <p className="text-lg text-[#00171f]/80">
            Yeh session un logon ke liye hai jo
            <span className="font-semibold"> samajh ke seekhna</span> chahte hain —  
            na ki shortcuts, hype ya guarantees ke liye.
          </p>
        </div>

      </div>
    </section>
  );
};
