import { useEffect, useRef } from 'react';

export const CelebsBeliefSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 0.5;

    const scroll = () => {
      scrollAmount += speed;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
      container.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  const images = [
    '/1.webp',
    '/2.webp',
    '/3.webp',
    '/4.webp',
    '/5.webp',
    '/6.webp',
    '/7.webp',
  ];

  return (
    <section className="py-16 bg-[#003459] overflow-hidden">
      <div className="container">

        {/* TITLE */}
        <h2 className="text-center text-2xl md:text-3xl font-science font-bold mb-10 text-white">
          People That You Believe In, Believe In Me
        </h2>

        {/* CAROUSEL */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-hidden whitespace-nowrap"
        >
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="
                min-w-[220px] md:min-w-[260px]
                h-[300px]
                rounded-2xl
                overflow-hidden
                bg-white
                border border-white/20
                shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                transition-transform duration-300
                hover:scale-[1.03]
              "
            >
              <img
                src={src}
                alt="Public Figure Association"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
