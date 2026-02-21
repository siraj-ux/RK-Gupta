import { useEffect, useState } from 'react';
import {
  Calendar,
  Clock,
  Globe,
  Video,
  BookOpen,
  X,
} from 'lucide-react';
import { useUTMParams } from '@/hooks/useUTMParams';
import { useFacebookPixel } from '@/hooks/useFacebookPixel';

// URLs
const REGISTRATION_RAZORPAY_URL = 'https://pages.razorpay.com/pl_SAAxQmR7a5jwEr/view'; // ₹9 LINK
const EBOOKS_RAZORPAY_URL = 'https://pages.razorpay.com/pl_SAAygaG1atU5Ub/view';       // ₹99 LINK

/* MM:SS TIMER COMPONENT */
const MiniTimer = ({ initialSeconds = 900 }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');

  return (
    <div className="flex items-center gap-2 font-mono text-xl font-bold text-[#003459]">
      <Clock className="h-5 w-5 text-[#007ea7]" />
      {mm}:{ss}
    </div>
  );
};

export const HeroSection = () => {
  // Initialize Facebook Pixel
  useFacebookPixel();

  const utmParams = useUTMParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [addEbook, setAddEbook] = useState(false);

  /* FORM DATA */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
  });

  /* FORM ERRORS */
  const [errors, setErrors] = useState({
    email: '',
    phone: '',
  });

  /* GOOGLE SHEET DATA */
  const [sheetData, setSheetData] = useState({
    date: 'Loading...',
    time: 'Loading...',
  });

  /* FETCH EVENT DETAILS */
  useEffect(() => {
    fetch(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTNbThNq5PaLsO8hgj4EIb5CTjMp8-kOOI9jpi18eTL-p9v5vh-QeOSOeqaozauJOAy2fs5mOQIhk4G/pub?output=csv'
    )
      .then((res) => res.text())
      .then((text) => {
        const rows = text.trim().split('\n');
        const values = rows[1].split(',');
        setSheetData({
          date: values[0] || 'TBA',
          time: values[1] || 'TBA',
        });
      })
      .catch((err) => console.error('CSV fetch error:', err));
  }, []);

  const getParam = (key: string) =>
    new URLSearchParams(window.location.search).get(key) || '';

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone: string) => /^[0-9]{10}$/.test(phone);

  /* SUBMIT HANDLER */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    let hasError = false;
    const newErrors = { email: '', phone: '' };

    if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      hasError = true;
    }
    if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
      hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;

    setIsSubmitting(true);

    // Track Lead
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Masterclass Registration',
        value: addEbook ? 99 : 9,
        currency: 'INR'
      });
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      utm_source: getParam('utm_source'),
      utm_campaign: getParam('utm_campaign'),
      utm_term: getParam('utm_term'),
      utm_content: getParam('utm_content'),
      gclid: getParam('gclid'),
      fbclid: getParam('fbclid'),
      coursename: 'FB',
    };

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbzReyWQdO6dpy4U5QnTiXJ-7zSSYUDDht70pGq6eTV_J5kjZNn1dZxsK57WgvxTWroUGQ/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(payload).toString(),
        }
      );
    } catch (err) {
      console.error('Lead save failed', err);
    }

    /* REDIRECTION LOGIC - Corrected to pass name via multiple keys */
    const queryParams = new URLSearchParams({
      name: formData.name,      // For standard pages
      full_name: formData.name, // For newer pages
      Name: formData.name,      // Some custom pages use capitalized Name
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      ...utmParams,
    }).toString();

    if (addEbook) {
      // IF CHECKED (YES) -> Redirect to ₹99 Link
      window.location.href = `${EBOOKS_RAZORPAY_URL}?${queryParams}`;
    } else {
      // IF UNCHECKED (NO) -> Redirect to ₹9 Link
      window.location.href = `${REGISTRATION_RAZORPAY_URL}?${queryParams}`;
    }
  };

  return (
    <section className="relative min-h-screen bg-[#00171f] text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/bg.webp')" }}
      />

      <div className="container relative pt-10 pb-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* 1. HEADLINES (Left Aligned + Yellow Color) */}
          <div className="order-1 lg:col-start-1 lg:row-start-1 text-left space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Digital Assets Ko Samajhkar Enter Karein, <br />
              <span className="text-[#facc15]">Guesswork Se Nahi</span>
            </h1>

            <p className="text-[#00a8e8] text-base md:text-lg block mt-4 font-normal leading-loose tracking-wide">
              A structured live masterclass for professionals who want clarity before stepping into crypto.
            </p>

            <p className="text-base md:text-lg text-white/90">
              Reserve Your Seat In This Live Crypto Learning Session
            </p>
          </div>

          {/* 2. DATE GRID (Left Aligned) */}
          <div className="order-2 lg:col-start-1 lg:row-start-2 grid grid-cols-2 gap-3 max-w-md w-full">
            {[
              { icon: Calendar, label: 'Date', value: sheetData.date },
              { icon: Clock, label: 'Time', value: sheetData.time },
              { icon: Globe, label: 'Language', value: 'Hindi' },
              { icon: Video, label: 'Mode', value: 'Online (Live)' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-3 flex items-center gap-3 text-black hover:bg-gray-50 transition"
              >
                <item.icon className="h-5 w-5 text-[#007ea7] shrink-0" />
                <div>
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="font-semibold text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 3. STICKY FORM */}
          <div className="order-3 lg:col-start-2 lg:row-start-1 lg:row-span-3 sticky top-10 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-[#00171f]" id="register">

              <h3 className="text-2xl font-bold text-center mb-1">
                Register for the Live Masterclass @ only ₹9/-
              </h3>

              <p className="text-sm text-center mb-4 animate-pulse font-semibold text-red-600 flex items-center justify-center gap-2">
                <Clock className="h-4 w-4" />
                Limited seats • Live learning format
              </p>

              <div className="flex justify-center mb-4">
                <MiniTimer initialSeconds={900} />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  required
                  placeholder="Full Name"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#007ea7]"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />

                <div>
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#007ea7] ${errors.email ? 'border-red-500' : ''}`}
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setErrors({ ...errors, email: '' });
                    }}
                  />
                  {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    maxLength={10}
                    className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#007ea7] ${errors.phone ? 'border-red-500' : ''}`}
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      setFormData({ ...formData, phone: value });
                      setErrors({ ...errors, phone: '' });
                    }}
                  />
                  {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                </div>

                <input
                  required
                  placeholder="City"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#007ea7]"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />

                <label className="flex items-start gap-3 bg-[#f0f9ff] border border-[#00a8e8] rounded-lg p-3 cursor-pointer">
                  <BookOpen className="h-5 w-5 text-[#007ea7] mt-1 shrink-0" />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={addEbook}
                        onChange={(e) => setAddEbook(e.target.checked)}
                        className="mt-0.5"
                      />
                      <span className="text-sm font-bold">
                        Yes, ₹99 mein 3 learning ebooks add karein
                      </span>
                    </div>
                  </div>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-bold py-4 rounded-xl text-lg transition shadow-lg
                    ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#007ea7] hover:bg-[#00a8e8] text-white transform hover:-translate-y-1'}
                  `}
                >
                  {isSubmitting ? 'Submitting...' : 'Reserve My Seat'}
                </button>
              </form>

              <p className="text-xs text-center text-gray-500 mt-3">
                No hype • No tips • Only clarity
              </p>
            </div>
          </div>

          {/* 4. NOT FOR EVERYONE SECTION (Left Aligned) */}
          <div className="order-4 lg:col-start-1 lg:row-start-3 bg-white/5 border border-white/10 rounded-xl p-6 max-w-lg w-full">
            <h3 className="text-base md:text-lg font-bold text-amber-400 uppercase mb-4 tracking-wide border-b border-white/10 pb-2 inline-block">
              This Masterclass Is Not For Everyone
            </h3>
            <ul className="space-y-3 text-left">
              {["Looking for quick profit tips", "Expecting trading signals", "Want overnight success", "Prefer shortcuts over understanding"].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-white/90 text-sm md:text-base">
                  <X className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};