import { CheckCircle, ArrowDown, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

export const ThankYouPageOtoFb = () => {
  useFacebookPixel({
    eventName: "OTO_Purchase",
     eventParams: {
          value: 99,
          currency: "INR",
        },
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

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-science font-bold text-[#04343b] mb-2">
          Payment Successful ✅
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Aapka <strong>₹99 Learning Resource Pack</strong> successfully unlock ho chuka hai.
          <br />
          Neeche diye gaye ebooks aap turant download kar sakte hain.
        </p>

        {/* Resources */}
        <div className="bg-[#04343b]/5 border border-[#04343b]/10 rounded-xl p-5 mb-6 text-left space-y-4">

          <div className="flex items-center gap-2 font-semibold text-[#04343b]">
            <BookOpen className="h-5 w-5" />
            Download Your Learning Resources
          </div>

          <a
            href="/Crypto-The-Future-of-Finance.pdf"
            download
            className="flex items-center justify-between bg-white border rounded-lg px-4 py-3 hover:bg-gray-50"
          >
            <span className="text-sm">📘 Ebook 1 – Crypto-The-Future-of-Finance</span>
            <ArrowDown className="h-4 w-4" />
          </a>

          <a
            href="/Crypto-Debunking Crypto Myths.pdf"
            download
            className="flex items-center justify-between bg-white border rounded-lg px-4 py-3 hover:bg-gray-50"
          >
            <span className="text-sm">📗 Ebook 2 – Crypto-Debunking Crypto Myths</span>
            <ArrowDown className="h-4 w-4" />
          </a>

          <a
            href="/Crypto Derivative Trading.pdf"
            download
            className="flex items-center justify-between bg-white border rounded-lg px-4 py-3 hover:bg-gray-50"
          >
            <span className="text-sm">📙 Ebook 3 – Crypto Derivative Trading </span>
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>

        {/* CTA */}
        <a
          href="https://chat.whatsapp.com/Gq9ZOw2An9M4q4WzAO5PZe"
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
            "
          >
            Join WhatsApp for Live Session Updates
            <ArrowRight className="h-5 w-5" />
          </Button>
        </a>

        {/* Trust Line */}
        <p className="text-xs text-gray-500 leading-relaxed">
          Yeh ek <strong>purely educational learning experience</strong> hai —
          <br />
          bina hype, bina pressure, bina promises.
        </p>

      </div>
    </section>
  );
};
