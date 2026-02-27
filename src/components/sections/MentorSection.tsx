import React from 'react';
import { ShieldCheck, Youtube, Instagram, Linkedin, Book } from 'lucide-react';

export const MentorSection = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#00171f]">
            Aapka Educator: RK Gupta
          </h2>
        </div>

        {/* Mentor Card */}
        <div className="bg-[#f0f9ff] rounded-3xl p-6 md:p-10 border border-[#00a8e8]/30 shadow-lg mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            {/* Image & Socials */}
            <div className="flex-shrink-0 mx-auto md:mx-0 text-center">
              <div className="w-64 md:w-72 h-80 rounded-2xl overflow-hidden shadow-md border border-[#007ea7]/30 mb-6">
                <img
                  src="/coach.jpeg"
                  alt="RK Gupta"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-center gap-4">
                <a href="https://www.youtube.com/@CryptowithRKGupta" target="_blank" className="flex items-center gap-2 text-xs font-bold text-[#003459] hover:text-[#007ea7] transition-colors"><Youtube className="h-4 w-4 text-red-600" /> YouTube</a>
                <a href="https://www.instagram.com/compoundthemoney/" target="_blank" className="flex items-center gap-2 text-xs font-bold text-[#003459] hover:text-[#007ea7] transition-colors"><Instagram className="h-4 w-4 text-pink-600" /> Instagram</a>
                <a href="https://www.linkedin.com/in/ctm-rkgupt" target="_blank" className="flex items-center gap-2 text-xs font-bold text-[#003459] hover:text-[#007ea7] transition-colors"><Linkedin className="h-4 w-4 text-blue-700" /> LinkedIn</a>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#00171f]">RK Gupta</h3>
                <p className="text-md md:text-lg font-bold text-[#007ea7]">Crypto Educator</p>
              </div>
              
              <div className="space-y-4 mb-8 text-[#00171f]/90 leading-relaxed">
                <p className="text-base md:text-lg">
                  6+ saal se digital assets aur blockchain ko Hindi mein explain kar raha hoon. 
                  <span className="font-bold text-[#003459]"> 4,000+ professionals</span> ko in-person aur online sessions de chuka hoon.
                </p>
                
                <p className="text-sm md:text-base italic border-l-4 border-[#00a8e8] pl-4 bg-white/50 py-2.5">
                  "Mera ek hi goal hai: jo genuinely complex lagta hai, use simple aur structured banana — bina hype, bina shortcuts."
                </p>
              </div>

              {/* EDUCATION DISCLAIMER */}
              <div className="flex items-start gap-3 bg-[#003459] rounded-xl p-4 text-white shadow-md">
                <ShieldCheck className="h-5 w-5 text-[#00a8e8] flex-shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm opacity-90 text-left">
                  <span className="font-bold text-[#00a8e8]">Education Only:</span> Is session mein koi tips, calls ya recommendations nahi di jaati.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AUTHOR SECTION */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
            
            {/* LARGE IMAGES DISPLAY */}
            <div className="w-full lg:w-3/5 flex-shrink-0 grid grid-cols-2 gap-4 md:gap-6">
              <div className="filter drop-shadow-2xl transition-transform hover:scale-105 duration-300">
                <img 
                  src="/new-images/5.svg" 
                  alt="Financial Guide Book 1" 
                  className="w-full h-auto rounded-2xl border border-gray-100 shadow-sm" 
                />
              </div>
              
              <div className="filter drop-shadow-2xl transition-transform hover:scale-105 duration-300">
                <img 
                  src="/new-images/4.svg" 
                  alt="Financial Guide Book 2" 
                  className="w-full h-auto rounded-2xl border border-gray-100 shadow-sm" 
                />
              </div>
            </div>

            {/* CONTENT SIDE */}
            <div className="w-full lg:w-2/5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00a8e8]/10 text-[#00a8e8] text-xs font-bold uppercase tracking-widest mb-4">
                <Book className="h-4 w-4" /> Published Author
              </div>
              
              <h3 className="text-2xl md:text-4xl font-bold text-[#00171f] mb-4 leading-tight">
                National Published Author of Financial Guides
              </h3>
              
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                RK Gupta has authored multiple influential books created specifically to 
                <span className="font-bold text-[#003459]"> simplify market psychology </span> 
                and trading logic for the common investor.
              </p>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center lg:justify-start">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                  Verified National Publications
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};