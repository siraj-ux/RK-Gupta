// src/pages/ThankYouPage.tsx (or similar)
import { useMemo } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

export const ThankYouPage = () => {
  // Generate a unique Event ID (memoized so it stays same for this page load)
  const purchaseEventId = useMemo(() => `purchase_${Date.now()}`, []);

  useFacebookPixel({
    eventName: "Purchase",
    eventParams: {
      value: 9.00,
      currency: "INR",
    },
    eventID: purchaseEventId,
  });

  return (
    <section className="min-h-screen bg-[#04343b] flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-6 md:p-10 text-center">
        
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#04343b] mb-2">
          Registration Confirmed ✅
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Aapki seat <strong> Live Crypto Learning Masterclass</strong> ke liye
          successfully confirm ho chuki hai.
        </p>

        {/* Important Notice */}
        <div className="bg-[#04343b]/5 border border-[#04343b]/10 rounded-xl p-4 mb-6">
          <p className="text-sm text-gray-700 leading-relaxed text-left">
            ⚠️ <strong>IMPORTANT:</strong><br />
            Live session link aur saari updates sirf <strong>WhatsApp Group</strong> par share ki jaayengi.
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
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-6 rounded-xl flex items-center justify-center gap-2 shadow-lg"
          >
            WhatsApp Group Join Karein
            <ArrowRight className="h-5 w-5" />
          </Button>
        </a>

        <p className="text-xs text-gray-500 mt-4">
          Bina hype, bina pressure — pure educational session.
        </p>
      </div>
    </section>
  );
};
