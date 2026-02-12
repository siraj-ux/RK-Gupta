import { useEffect } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ThankYouPageGa = () => {

  /* 🔥 GOOGLE ADS LEAD CONVERSION */
   useEffect(() => {
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "conversion", {
          send_to: "AW-17912580773/Ec-BCJH0iPAbEKWVsd1C",
          value: 1.0,
          currency: "INR",
          transaction_id: "", // optional — can be populated later
        });
      }
    }, []);
  

  return (
    <section className="min-h-screen bg-[#04343b] flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-6 md:p-10 text-center">

        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-science font-bold text-[#04343b] mb-2">
          Registration Confirmed ✅
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Aapki seat <strong> Live Conceptual Learning Masterclass</strong> ke liye
          successfully confirm ho chuki hai.
        </p>

        {/* Important Notice */}
        <div className="bg-[#04343b]/5 border border-[#04343b]/10 rounded-xl p-4 mb-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            ⚠️ <strong>IMPORTANT:</strong><br />
            Live session link, reminders aur
            saari important updates sirf
            <strong> WhatsApp Group</strong> par share ki jaayengi.
            <br />
            <span className="text-xs text-gray-600">
              (Email ya Telegram par links nahi milengi)
            </span>
          </p>
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://chat.whatsapp.com/Gq9ZOw2An9M4q4WzAO5PZe"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button
            size="xl"
            className="
              w-full
              bg-green-500 hover:bg-green-600
              text-white
              font-bold
              rounded-xl
              flex items-center justify-center gap-2
              shadow-lg
            "
          >
            WhatsApp Group Join Karein
            <ArrowRight className="h-5 w-5" />
          </Button>
        </a>

        {/* Trust Line */}
        <p className="text-xs text-gray-500 mt-4 leading-relaxed">
          Yeh ek <strong>calm, structured aur educational live session</strong> hai —
          <br />
          bina hype, bina pressure, bina claims.
        </p>

      </div>
    </section>
  );
};
