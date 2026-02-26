import { useEffect, useRef, useState } from 'react';

// Updated StarRating to handle partial fills (e.g., 4.8)
const StarRating = ({ rating = 4.8 }) => (
  <div className="flex gap-0.5 my-1.5">
    {[...Array(5)].map((_, i) => {
      const isFull = i + 1 <= Math.floor(rating);
      const isPartial = i === Math.floor(rating);
      
      return (
        <div key={i} className="relative w-4 h-4">
          {/* Background Gray Star */}
          <svg className="w-4 h-4 fill-gray-600" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          
          {/* Yellow Overlay Star */}
          {isFull && (
            <svg className="absolute inset-0 w-4 h-4 fill-[#fbbc04]" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          )}

          {isPartial && (
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${(rating % 1) * 100}%` }}>
              <svg className="w-4 h-4 fill-[#fbbc04]" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          )}
        </div>
      );
    })}
  </div>
);

export const PastAttendeesSection = () => {
  const testimonials = [
    { name: 'gaurav singh', info: '2 reviews • 1 photo', link: 'https://maps.app.goo.gl/9uf79ZkNyQ6VDYpPA', quote: "I had the privilege to learn from RK Gupta Sir, and I must say he is one of the best trainers. Generated profit of ₹6,500.", image: '/p1 (1).png' },
    { name: 'Abhishek Singh', info: '1 review • 2 photos', link: 'https://maps.app.goo.gl/V1L2rArXDs9zmhP37', quote: "Thanks for your guidance! Continuously getting profit with your strategy. Anyone can make consistent profit.", image: '/p1 (2).png' },
    { name: 'Pratap Misra', info: 'Local Guide • 23 reviews', link: 'https://maps.app.goo.gl/aqCCZsDwo4qkkLCC8', quote: "Thanks to RK Sir for guidance for this risk free monthly strategy. Received the book 'Risk hai to Ishq hai'.", image: '/Pratap Misra.png' },
    { name: 'Bharti Kumari', info: '3 reviews', link: 'https://maps.app.goo.gl/QGYf8WnZ6cwSdzfe9', quote: "This is platform where anybody can make passive income such an easy way of teaching they are providing.", image: '/p1 (11).png' },
    { name: 'bhargav patel', info: '10 reviews • 1 photo', link: 'https://maps.app.goo.gl/PHVAyh1xznx3ULtV7', quote: "Happy to joined Gupta sir class and i know about how to get margin benifits and consistency passive income.", image: '/p1 (3).png' },
    { name: 'Pooja Braahmbhatt', info: 'Local Guide • 12 reviews', link: 'https://maps.app.goo.gl/BTCvEfBgwvGELSnj9', quote: "RK Gupta Sir's journey is deeply inspiring. The way he simplifies the world of options trading reflects his expertise.", image: '/p1 (12).png' },
    { name: 'satish kumar', info: '2 reviews', link: 'https://maps.app.goo.gl/uHrH7Xj4izMsSeBR7', quote: "RK sir calendar spread strategy is like bramastra. It protects capital erosion and helps in consistent money making.", image: '/satish kumar.png' },
    { name: 'Kkaushal Shah', info: '10 reviews', link: 'https://maps.app.goo.gl/YeSQ255xH5K8SJRd9', quote: "Learnt Golden Range Strategy from RK Sir. No fear of making huge loss. Made a decent profit of 2.25% in 8 days.", image: '/p1 (4).png' },
    { name: 'Rajesh A', info: '2 reviews', link: 'https://maps.app.goo.gl/y5eMRQ6MyzuTmmaA9', quote: "Was in loss of ₹9000 but after adjustment advice my position is in ₹2764 profit. A good experience.", image: '/p1 (5).png' },
    { name: 'Yogendra Negi', info: 'Local Guide • 18 reviews', link: 'https://maps.app.goo.gl/nVCCbwTZrwJnSTV96', quote: "Coaching on option trading is truly excellent. His approach is clear and concise, making complex concepts easy.", image: '/p1 (6).png' },
    { name: 'Anita gupta', info: '3 reviews', link: 'https://maps.app.goo.gl/nQQueVHixmByUYY87', quote: "I'm a home maker now I feel like I have a confidence to do something in trading. Thanks to RK sir and team.", image: '/p1 (13).png' },
    { name: 'Dipankar Dutta', info: '1 review', link: 'https://maps.app.goo.gl/3TBgJxG9wrLfrsuB9', quote: "Fantastic experience mind blowing hand holding support. RK Sir is the 'Badshah of Adjustment'.", image: '/dipankar-dutta.png' },
    { name: 'Rakesh Kumar', info: '4 reviews', link: 'https://maps.app.goo.gl/nbpBqFSjczQJ1PXy7', quote: "First time I have got constant profit with very marginal loss pressure. Mentor is very polite and calm.", image: '/p1 (7).png' },
    { name: 'SHABBIER AHMED', info: 'Local Guide • 13 reviews', link: 'https://maps.app.goo.gl/4Bw8Hn1Ngqo3f4628', quote: "After joining this program I am booking profits within two weeks. Support from tech buddy is awesome.", image: '/SHABBIER AHMED.png' },
    { name: 'Praveen Kumar Sharma', info: '3 reviews • 1 photo', link: 'https://maps.app.goo.gl/PBFW2DLAHZiLAn9JA', quote: "Booked profit on BTC trade July expiry @48%. It's simply magical & wow moment of my trading journey.", image: '/p1 (8).png' },
    { name: 'Injarapu Naresh', info: '1 review', link: 'https://maps.app.goo.gl/AaqzAiSGHoAwDKWC7', quote: "First time deployed calendar spread along with experienced staff and made good profit.", image: '/p1 (9).png' },
    { name: 'Mahita Naidu', info: '3 reviews', link: 'https://maps.app.goo.gl/YmmFAsRA3SCt3J8r8', quote: "Made 3% profit from the first trade BankNifty combo. Looking forward to make consistent profits.", image: '/p1 (14).png' },
    { name: 'Praveen PK', info: '6 reviews', link: 'https://maps.app.goo.gl/3FkmwnL5zi3CiepU8', quote: "Best risk free Crypto Strategy. Earn 30-40% monthly easily within a weeks time.", image: '/praven pk.png' }
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || isPaused) return;

    let scrollAmount = container.scrollLeft;
    const scroll = () => {
      scrollAmount += 0.25; 
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
      container.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-12 md:py-20 bg-[#00171f] text-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 tracking-tight">
            What Past Attendees Are Saying
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2">
                {/* Updated Text to 4.8 */}
                <span className="text-xl font-bold text-white">4.8</span>
                <StarRating rating={4.8} />
            </div>
            <div className="h-6 w-px bg-white/20 hidden md:block" />
            <div className="flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
               <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-[#00a8e8]">Verified Google Reviews</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#00171f] to-transparent z-10 pointer-events-none" />
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#00171f] to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar flex-nowrap py-6"
          >
            {[...testimonials, ...testimonials].map((t, index) => (
              <div
                key={`${t.name}-${index}`}
                className="min-w-[280px] md:min-w-[380px] bg-white text-slate-900 rounded-2xl p-5 md:p-6 flex flex-col shadow-2xl"
              >
                <div className="flex items-center gap-3 md:gap-4 mb-3">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="h-10 w-10 md:h-11 md:w-11 rounded-full object-cover shrink-0 shadow-sm border border-gray-100" 
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm md:text-[15px] font-bold leading-tight capitalize">{t.name}</h4>
                    <p className="text-[10px] md:text-[11px] text-slate-500 font-medium">{t.info}</p>
                  </div>
                  <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                     <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  </div>
                </div>

                <StarRating rating={5} />
                <p className="text-xs md:text-[14px] leading-relaxed text-slate-700 italic flex-grow py-2">"{t.quote}"</p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-slate-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Verified Review</div>
                  <a href={t.link} target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-[11px] font-bold text-blue-600 hover:text-blue-800 transition-colors">View Source</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-[10px] text-white/30 mt-4 md:hidden">Tap and hold to pause reading</p>
      </div>
    </section>
  );
};