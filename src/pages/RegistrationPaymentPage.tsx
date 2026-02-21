import { Link } from 'react-router-dom';
import { RegistrationPaymentForm } from '@/components/RegistrationPaymentForm';
import { ArrowLeft } from 'lucide-react';

export const RegistrationPaymentPage = () => {
  return (
    <section className="min-h-screen bg-[#04343b] flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-md w-full">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10">
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-[#04343b] mb-2">
              Complete Your Registration
            </h1>
            <p className="text-gray-600 text-sm">
              Confirm your seat. Fill in your details and you’ll be redirected to secure payment.
            </p>
          </div>

          <RegistrationPaymentForm />
        </div>
      </div>
    </section>
  );
};
