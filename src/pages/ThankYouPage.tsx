import { useMemo, useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

export const ThankYouPage = () => {
  // 1. Set state for the link (Empty initially)
  const [whatsappLink, setWhatsappLink] = useState('');

  // Generate a unique Event ID
  const purchaseEventId = useMemo(() => `purchase_${Date.now()}`, []);

  // Facebook Pixel Hook
  useFacebookPixel({
    eventName: "Purchase",
    eventParams: {
      value: 9.00,
      currency: "INR",
    },
    eventID: purchaseEventId,
  });

  // 2. Exact same fetch logic as your HeroSection
  useEffect(() => {
    fetch(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTNbThNq5PaLsO8hgj4EIb5CTjMp8-kOOI9jpi18eTL-p9v5vh-QeOSOeqaozauJOAy2fs5mOQIhk4G/pub?output=csv'
    )
      .then((res) => res.text())
      .then((text) => {
        const rows = text.trim().split('\n');
        if (rows.length > 1) {
          const values = rows[1].split(',');
          // values[0] is Date, values[1] is Time, values[2] is whatsapp_link
          // We use .replace to remove any double quotes Google adds to the URL
          const link = values[2] ? values[2].trim().replace(/^"|"$/g, '') : '';
          setWhatsappLink(link);
        }
      })
      .catch((err) => console.error('CSV fetch error:', err));
  }, []);

  return (
    <section className="min-h-screen bg-[#04343b] flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-6 md:p-10 text-center">
        
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

        <div className="bg-[#04343b]/5 border border-[#04343b]/10 rounded-xl p-4 mb-6">
          <p className="text-sm text-gray-700 leading-relaxed text-left">
            ⚠️ <strong>IMPORTANT:</strong><br />
            Live session link aur saari updates sirf <strong>WhatsApp Group</strong> par share ki jaayengi.
          </p>
        </div>

        {/* 3. Conditional Rendering: Only show the button when link is ready */}
        {whatsappLink ? (
          <a
            href={whatsappLink}
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
        ) : (
          <Button
            disabled
            className="w-full bg-gray-300 text-gray-600 font-bold py-6 rounded-xl flex items-center justify-center gap-2"
          >
            <Loader2 className="h-5 w-5 animate-spin" />
            Loading WhatsApp Link...
          </Button>
        )}

        <p className="text-xs text-gray-500 mt-4">
          Bina hype, bina pressure, pure educational session.
        </p>
      </div>
    </section>
  );
};