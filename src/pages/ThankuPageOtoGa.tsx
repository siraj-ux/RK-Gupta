import { useEffect, useState } from 'react';
import { CheckCircle, ArrowDown, ArrowRight, BookOpen, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

export const ThankYouPageOtoGa = () => {
  // 1. State for the dynamic WhatsApp link
  const [whatsappLink, setWhatsappLink] = useState('');
  const [loading, setLoading] = useState(true);

  // Facebook Pixel Hook (Preserved)
  useFacebookPixel({
    eventName: "Purchase",
    eventParams: {
      value: 99.00,
      currency: "INR",
      content_name: "OTO Workshop",
      content_ids: ["OTO_99"],
      content_type: "product",
    },
  });

  // 2. Fetch WhatsApp Link from Google Sheet
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
          Payment Successful ✅
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Aapka <strong>₹99 Learning Resource Pack</strong> successfully unlock ho chuka hai.
          <br />
          Neeche diye gaye ebooks aap turant download kar sakte hain.
        </p>

        {/* Resources Section */}
        <div className="bg-[#04343b]/5 border border-[#04343b]/10 rounded-xl p-5 mb-6 text-left space-y-4">
          <div className="flex items-center gap-2 font-semibold text-[#04343b]">
            <BookOpen className="h-5 w-5" />
            Download Your Learning Resources
          </div>

          <a
            href="/Crypto-The-Future-of-Finance.pdf"
            download
            className="flex items-center justify-between bg-white border rounded-lg px-4 py-3 hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm">📘 Ebook 1 – Crypto-The-Future-of-Finance</span>
            <ArrowDown className="h-4 w-4 text-gray-400" />
          </a>

          <a
            href="/Crypto-Debunking Crypto Myths.pdf"
            download
            className="flex items-center justify-between bg-white border rounded-lg px-4 py-3 hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm">📗 Ebook 2 – Crypto-Debunking Crypto Myths</span>
            <ArrowDown className="h-4 w-4 text-gray-400" />
          </a>

          <a
            href="/Crypto Derivative Trading.pdf"
            download
            className="flex items-center justify-between bg-white border rounded-lg px-4 py-3 hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm">📙 Ebook 3 – Crypto Derivative Trading </span>
            <ArrowDown className="h-4 w-4 text-gray-400" />
          </a>
        </div>

        {/* Dynamic WhatsApp CTA */}
        {whatsappLink ? (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4"
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
                py-7
              "
            >
              Join WhatsApp for Live Session Updates
              <ArrowRight className="h-5 w-5" />
            </Button>
          </a>
        ) : (
          <Button
            disabled
            size="xl"
            className="w-full bg-gray-200 text-gray-500 font-bold rounded-xl flex items-center justify-center gap-2 py-7 mb-4"
          >
            <Loader2 className="h-5 w-5 animate-spin" />
            {loading ? "Link Load Ho Raha Hai..." : "Link Not Available"}
          </Button>
        )}

        {/* Trust Line */}
        <p className="text-xs text-gray-500 leading-relaxed">
          Yeh ek <strong>purely educational learning experience</strong> hai,
          <br />
          bina hype, bina pressure, bina promises.
        </p>

      </div>
    </section>
  );
};