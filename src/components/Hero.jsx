import React from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 bg-[#FFF5EA] text-[#260812]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#E8D5C4] bg-[#E8D5C4]/40 text-[#4A1022] text-xs sm:text-sm font-semibold mb-8 uppercase tracking-widest">
          <Sparkles size={16} className="text-[#C98F8F]" />
          <span>Celebrity Anchor & Luxury Event Emcee</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-[#4A1022]">
          Transforming Events Into <br />
          <span className="italic text-[#C98F8F] font-normal">
            Unforgettable Memories
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#260812]/80 mb-10 leading-relaxed font-normal tracking-wide">
          Corporate Shows • Celebrity Weddings • Concerts • High-Energy Sangeet Nights
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%20Anchor%20Shubham,%20I%20want%20to%20book%20an%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#4A1022] hover:bg-[#D9A6A8] text-[#FFF5EA] font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg tracking-wider text-sm uppercase"
          >
            <MessageCircle size={20} className="text-[#C98F8F]" />
            <span>Chat On WhatsApp</span>
          </a>

          <a
            href="tel:+91XXXXXXXXXX"
            className="w-full sm:w-auto flex items-center justify-center gap-3 border-2 border-[#4A1022] text-[#4A1022] hover:bg-[#E8D5C4] font-bold px-8 py-4 rounded-full transition-all duration-200 tracking-wider text-sm uppercase"
          >
            <Phone size={18} className="text-[#C98F8F]" />
            <span>Direct Call</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-[#E8D5C4] pt-10">
          <div className="p-4 rounded-xl bg-[#E8D5C4]/50 border border-[#E8D5C4]">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#4A1022]">500+</div>
            <div className="text-xs sm:text-sm text-[#260812]/80 mt-1 font-semibold uppercase tracking-wider">Shows Hosted</div>
          </div>
          <div className="p-4 rounded-xl bg-[#E8D5C4]/50 border border-[#E8D5C4]">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#4A1022]">5+</div>
            <div className="text-xs sm:text-sm text-[#260812]/80 mt-1 font-semibold uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="col-span-2 md:col-span-1 p-4 rounded-xl bg-[#E8D5C4]/50 border border-[#E8D5C4]">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#4A1022]">100%</div>
            <div className="text-xs sm:text-sm text-[#260812]/80 mt-1 font-semibold uppercase tracking-wider">Client Satisfaction</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;