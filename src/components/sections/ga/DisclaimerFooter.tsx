import { AlertTriangle } from 'lucide-react';

export const DisclaimerFooter = () => {
  return (
    <footer className="bg-white py-8 border-t border-black/10">
      <div className="container max-w-5xl mx-auto text-center text-[#00171f]">

        {/* Title */}
        <h3 className="text-base md:text-lg font-bold mb-4 flex items-center justify-center gap-2">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          Important Disclaimer
        </h3>

        {/* Disclaimer Content */}
        <div className="text-sm text-[#00171f]/80 space-y-3 leading-relaxed">

          <p>
            <span className="font-semibold">EDUCATIONAL CONTENT ONLY:</span>{' '}
            This workshop provides educational information about blockchain technology
            and digital asset concepts for learning purposes only.
            This is <span className="font-semibold">not investment advice</span>,
            financial planning, or trading recommendations.
          </p>

          <p>
            <span className="font-semibold">SEBI COMPLIANCE:</span>{' '}
            SEBI registration number: <span className="font-semibold">Not Registered</span>.
            This educational program does not provide investment advisory services.
            Content focuses on technology understanding, not investment strategies.
          </p>

          <p>
            <span className="font-semibold">AGE REQUIREMENT:</span>{' '}
            Participants must be at least <span className="font-semibold">18 years old</span>
            to attend any financial or technology education programs or workshops.
          </p>

          <p>
            <span className="font-semibold text-red-600">HIGH RISK WARNING:</span>{' '}
            Cryptocurrency and digital asset markets are extremely volatile and high risk.
            You may lose all invested capital. This workshop focuses on technology education,
            not investment guidance.
          </p>

          <p>
            <span className="font-semibold">NO FINANCIAL GUARANTEES:</span>{' '}
            We make no promises or guarantees regarding profits, returns, or investment outcomes.
            This program is designed solely to build knowledge and understanding.
          </p>

          <p>
            <span className="font-semibold">PROFESSIONAL CONSULTATION:</span>{' '}
            Always consult qualified financial advisors before making any investment decisions.
            Educational content cannot substitute professional financial advice.
          </p>

          <p>
            <span className="font-semibold">RECORDING NOTICE:</span>{' '}
            Sessions may be recorded for educational and quality purposes.
            Participation indicates consent to recording.
          </p>

          <p>
            <span className="font-semibold">PLATFORM DISCLAIMER:</span>{' '}
            This program is not affiliated with Meta™, Facebook™, Instagram™, or
            any other social media platforms.
          </p>

          <p>
            <span className="font-semibold">TERMS:</span>{' '}
            Educational fees (if applicable) are non-refundable once sessions begin.
            Materials are for personal use only. Respectful participation is required.
          </p>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-black/10" />

        {/* Copyright */}
        <p className="text-[11px] text-[#00171f]/60">
          © {new Date().getFullYear()} RK Gupta • All Rights Reserved
        </p>
      </div>
    </footer>  );
};
