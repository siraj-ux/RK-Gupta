import { useEffect, useState } from 'react';
import {
  Calendar,
  Clock,
  Globe,
  Video,
  BookOpen,
} from 'lucide-react';
import { useUTMParams, buildRazorpayURL } from '@/hooks/useUTMParams';

const REGISTRATION_RAZORPAY_URL = 'https://pages.razorpay.com/pl_RkKu9mBvHqnbE1/view';
const EBOOKS_RAZORPAY_URL = 'https://pages.razorpay.com/pl_SAAygaG1atU5Ub/view';

/* MM:SS TIMER */
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
  const utmParams = useUTMParams();
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
    date: '',
    time: '',
  });

  /* FETCH CSV */
  useEffect(() => {
    fetch(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTNbThNq5PaLsO8hgj4EIb5CTjMp8-kOOI9jpi18eTL-p9v5vh-QeOSOeqaozauJOAy2fs5mOQIhk4G/pub?output=csv'
    )
      .then((res) => res.text())
      .then((text) => {
        const rows = text.trim().split('\n');
        const values = rows[1].split(',');

        setSheetData({
          date: values[0],
          time: values[1],
        });
      })
      .catch((err) => console.error('CSV fetch error:', err));
  }, []);

  const getParam = (key) =>
    new URLSearchParams(window.location.search).get(key) || '';

  /* VALIDATION */
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPhone = (phone) =>
    /^[0-9]{10}$/.test(phone);

  /* SUBMIT HANDLER */
  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;
    const newErrors = { email: '', phone: '' };

    if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      hasError = true;
    }

    if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
      hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;

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

    /* If ebook add-on selected → ₹99 ebooks Razorpay link; else → ₹9 registration payment */
    if (addEbook) {
      const query = new URLSearchParams({
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        ...utmParams,
      }).toString();
      window.location.href = `${EBOOKS_RAZORPAY_URL}?${query}`;
    } else {
      const razorpayURL = buildRazorpayURL(
        REGISTRATION_RAZORPAY_URL,
        formData,
        utmParams,
        9
      );
      window.location.href = razorpayURL;
    }
  };

  return (
    <section className="relative min-h-screen bg-[#00171f] text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/bg.webp')" }}
      />

      <div className="container relative pt-10 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Confusion Kam Karo <br />
              <span className="text-[#00a8e8] text-xl">
                Concepts Ko Clear Tareeke Se Samjho
              </span>
            </h1>

            <p className="text-md text-white/90">
              Reserve Your Seat In This Live Crypto Learning Session
              {/* <span className="font-semibold"> shaant, structured aur practical </span>
              tareeke se seekhna chahte hain. */}
            </p>

            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
              {[
                { icon: Calendar, label: 'Date', value: sheetData.date },
                { icon: Clock, label: 'Time', value: sheetData.time },
                { icon: Globe, label: 'Language', value: 'Hindi' },
                { icon: Video, label: 'Mode', value: 'Online (Live)' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-3 flex items-center gap-3 text-black"
                >
                  <item.icon className="h-5 w-5 text-[#007ea7]" />
                  <div>
                    <p className="text-xs">{item.label}</p>
                    <p className="font-semibold text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6 max-w-md mx-auto w-full">
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
                  className="w-full border rounded-lg px-4 py-3"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <div>
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    className={`w-full border rounded-lg px-4 py-3 ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setErrors({ ...errors, email: '' });
                    }}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    maxLength={10}
                    className={`w-full border rounded-lg px-4 py-3 ${
                      errors.phone ? 'border-red-500' : ''
                    }`}
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      setFormData({ ...formData, phone: value });
                      setErrors({ ...errors, phone: '' });
                    }}
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <input
                  required
                  placeholder="City"
                  className="w-full border rounded-lg px-4 py-3"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
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
                    <span className="text-xs text-gray-500 ml-5">
                      (Worth ₹4,999 • purely educational)
                    </span>
                  </div>
                </label>

                <button
                  type="submit"
                  className="w-full bg-[#007ea7] hover:bg-[#00a8e8] text-white font-bold py-4 rounded-xl text-lg transition"
                >
                  Reserve My Seat
                </button>
              </form>

              <p className="text-xs text-center text-gray-500 mt-3">
                No hype • No tips • Only clarity
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
