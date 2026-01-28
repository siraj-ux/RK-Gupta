import { AlertTriangle } from 'lucide-react';

export const DisclaimerFooter = () => {
  return (
    <footer className="bg-white py-8 border-t border-black/10">
      <div className="container max-w-5xl mx-auto text-center text-[#00171f]">

        {/* Title */}
        <h3 className="text-base md:text-lg font-bold mb-3 flex items-center justify-center gap-2">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          Important Disclaimer
        </h3>

        {/* Disclaimer Content */}
        <div className="text-sm text-[#00171f]/80 space-y-2 leading-relaxed">
          <p>
            Yeh workshop <span className="font-semibold">sirf educational purposes</span> ke liye hai.
            Ismein investment advice, financial planning, ya guaranteed returns include nahi hain.
          </p>

          <p>
            <span className="font-semibold">Crypto / digital assets</span> high risk aur volatile hote hain.
            Aap apna capital lose kar sakte ho.
          </p>

          <p>
            Koi bhi decision lene se pehle
            <span className="font-semibold"> qualified financial advisor</span> se consult karna recommended hai.
          </p>

          <p className="font-semibold text-red-600">
            SEBI Registration: Not Registered
          </p>
        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-black/10" />

        {/* Copyright */}
        <p className="text-[11px] text-[#00171f]/60">
          © {new Date().getFullYear()} RK Gupta • All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
