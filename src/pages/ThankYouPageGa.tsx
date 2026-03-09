import { useEffect, useState } from 'react';
import { CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ThankYouPageGa = () => {
  // 1. State for the dynamic WhatsApp link
  const [whatsappLink, setWhatsappLink] = useState('');
  const [loading, setLoading] = useState(true);

  /* 🔥 GOOGLE ADS LEAD CONVERSION */
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-17912580773/Ec-BCJH0iPAbEKWVsd1C",
        value: 1.0,
        currency: "INR",
        transaction_id: "", // optional
      });
    }
  }, []);

  /* 📊 FETCH WHATSAPP LINK FROM GOOGLE SHEET */
  useEffect(() => {
    fetch(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTNbThNq5PaLsO8hgj4EIb5CTjMp8-kOOI9jpi18eTL-p9v5vh-QeOSOeqaozauJOAy2fs5mOQIhk4G/pub?output=csv'
    )
      .then((res) => res.text())
      .then((text) => {
        const rows = text.trim().split('\n');
        if (rows.length > 1) {
          const values = rows[1].split(',');
          // values[2] is the whatsapp_link column
          const link = values[2] ? values[2].trim().replace(/^"|"$/g, '') : '';
          setWhatsappLink(link);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('CSV fetch error:', err);
        setLoading(false);
      });
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

        {/* Dynamic WhatsApp CTA */}
        {whatsappLink ? (
          <a
            href={whatsappLink}
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
                py-6
              "
            >
              WhatsApp Group Join Karein
              <ArrowRight className="h-5 w-5" />
            </Button>
          </a>
        ) : (
          <Button
            disabled
            size="xl"
            className="w-full bg-gray-200 text-gray-500 font-bold rounded-xl flex items-center justify-center gap-2 py-6"
          >
            <Loader2 className="h-5 w-5 animate-spin" />
            {loading ? "Link Load Ho Raha Hai..." : "Link Not Available"}
          </Button>
        )}

        {/* Trust Line */}
        <p className="text-xs text-gray-500 mt-4 leading-relaxed">
          Yeh ek <strong>calm, structured aur educational live session</strong> hai,
          <br />
          bina hype, bina pressure, bina claims.
        </p>

      </div>
    </section>
  );
};