import React from 'react';
import { Camera } from 'lucide-react';

export const PhotoGallerySection = () => {
  const images = [
    { src: '/new-images/1.svg', alt: 'Gallery 1', className: 'md:col-span-2 md:row-span-2 col-span-2' }, 
    { src: '/new-images/2.svg', alt: 'Gallery 2', className: 'col-span-1' },
    { src: '/new-images/3.svg', alt: 'Gallery 3', className: 'col-span-1' },
    { src: '/new-images/7.svg', alt: 'Gallery 4', className: 'col-span-1' },
    { src: '/new-images/8.svg', alt: 'Gallery 5', className: 'col-span-1' },
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container max-w-4xl mx-auto px-4">
        
        {/* Minimalist Gallery Header */}
        <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2">
            <Camera className="h-4 w-4 text-gray-400" />
            <h2 className="text-lg md:text-xl font-bold text-[#00171f] tracking-tight">
              Gallery
            </h2>
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
            Live Masterclass
          </span>
        </div>

        {/* Compact Small Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg bg-gray-50 group border border-gray-100 shadow-sm ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-[#003459]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Footer Nudge */}
        <p className="mt-3 text-right text-[9px] text-gray-300 font-bold uppercase tracking-widest">
          Hindi Crypto Masterclass
        </p>

      </div>
    </section>
  );
};