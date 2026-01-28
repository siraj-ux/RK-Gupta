import { useEffect, useState } from 'react';
import {
  Calendar,
  Clock,
  Globe,
  Video,
  Star,
  User,
  Award,
  BookOpen,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [addEbook, setAddEbook] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(addEbook ? '/oto-with-ebook' : '/oto-no-ebook');
  };

  return (
    <section className="relative min-h-screen bg-[#00171f] text-white overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/bg.webp')" }}
      />

      <div className="container relative pt-10 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-center lg:text-left">

            <div className="inline-flex items-center gap-2 bg-[#003459]/70 px-4 py-2 rounded-full text-sm">
              <Star className="h-4 w-4 text-[#00a8e8]" />
              <span>Live Conceptual Masterclass</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Confusion Kam Karo <br />
              <span className="text-[#00a8e8] text-2xl">
                Concepts Ko Clear Tareeke Se Samjho
              </span>
            </h1>

            <p className="text-lg text-white/90">
              Yeh workshop un logon ke liye hai jo learning ko
              <span className="font-semibold"> shaant, structured aur practical </span>
              tareeke se lena chahte hain.
            </p>

            {/* DETAILS */}
            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
              {[
                { icon: Calendar, label: 'Date', value: '29 & 30 January' },
                { icon: Clock, label: 'Time', value: '8 PM – 10 PM' },
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

            {/* EDUCATOR HIGHLIGHT */}
            <div className="bg-[#003459] border border-[#00a8e8] rounded-2xl p-5 text-center shadow-xl">
              <div className="flex justify-center mb-2">
                <User className="h-8 w-8 text-[#00a8e8]" />
              </div>
              <p className="text-sm text-white/80 mb-1">Your Educator</p>
              <p className="text-2xl font-bold text-white">RK Gupta</p>
              <p className="text-sm text-white/90">
                Conceptual Learning Mentor • Process-Based Educator
              </p>
              <div className="flex items-center justify-center gap-2 mt-1 text-sm text-white/90">
                <Award className="h-4 w-4 text-[#00a8e8]" />
                <span>TEDx Speaker • ISO Certified Trainer</span>
              </div>
            </div>

            {/* FORM CARD */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-[#00171f]" id='#register'>

              <h3 className="text-2xl font-bold text-center mb-1">
                Register for the Live Masterclass For FREE
              </h3>

              <p className="text-sm text-center mb-4 animate-pulse font-semibold text-red-600 flex items-center justify-center gap-2">
                <Clock className="h-4 w-4" />
                Limited seats • Live learning format
              </p>

              {/* TIMER */}
              <div className="flex justify-center mb-4">
                <MiniTimer initialSeconds={900} />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">

                <input required placeholder="Full Name" className="w-full border rounded-lg px-4 py-3" />
                <input required type="email" placeholder="Email Address" className="w-full border rounded-lg px-4 py-3" />
                <input required type="tel" placeholder="Phone Number" className="w-full border rounded-lg px-4 py-3" />
                <input required placeholder="City" className="w-full border rounded-lg px-4 py-3" />

                {/* OTO */}
                <label className="flex items-start gap-3 bg-[#f0f9ff] border border-[#00a8e8] rounded-lg p-3 cursor-pointer">
                  <BookOpen className="h-5 w-5 text-[#007ea7] mt-1" />
                  <input
                    type="checkbox"
                    checked={addEbook}
                    onChange={(e) => setAddEbook(e.target.checked)}
                    className="mt-1"
                  />
                  <span className="text-sm">
                    <strong>Add Ebooks for ₹99</strong>
                    <br />
                    <span className="text-gray-600">
                      Helps you grasp concepts faster and stay a step ahead
                    </span>
                  </span>
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
