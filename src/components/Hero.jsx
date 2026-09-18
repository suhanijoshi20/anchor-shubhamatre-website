import React from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-[#260812] via-[#4A1022] to-[#260812] text-[#FFF5EA]">
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C98F8F]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C98F8F]/40 bg-[#C98F8F]/10 text-[#D9A6A8] text-sm font-semibold mb-8">
          <Sparkles size={16} />
          <span>Celebrity Anchor & Luxury Event Emcee</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Transforming Events Into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5EA] via-[#C98F8F] to-[#D9A6A8]">
            Unforgettable Memories
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[#E8D5C4] mb-10 leading-relaxed font-light">
          Corporate Shows • Celebrity Weddings • Concerts • High-Energy Sangeet Nights
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%20Anchor%20Shubham,%20I%20want%20to%20book%20an%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#C98F8F] text-[#260812] font-bold px-8 py-4 rounded-full hover:bg-[#D9A6A8] hover:scale-105 transition-all duration-200 shadow-lg shadow-[#C98F8F]/20"
          >
            <MessageCircle size={22} />
            <span>Chat On WhatsApp</span>
          </a>

          <a
            href="tel:+91XXXXXXXXXX"
            className="w-full sm:w-auto flex items-center justify-center gap-3 border border-[#C98F8F]/50 hover:bg-[#C98F8F]/10 text-[#C98F8F] font-bold px-8 py-4 rounded-full transition-all duration-200"
          >
            <Phone size={20} />
            <span>Direct Call</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-[#C98F8F]/20 pt-10">
          <div className="p-4 rounded-xl bg-[#260812]/60 border border-[#C98F8F]/20">
            <div className="text-3xl font-extrabold text-[#C98F8F]">500+</div>
            <div className="text-sm text-[#E8D5C4] mt-1">Shows Hosted</div>
          </div>
          <div className="p-4 rounded-xl bg-[#260812]/60 border border-[#C98F8F]/20">
            <div className="text-3xl font-extrabold text-[#C98F8F]">5+</div>
            <div className="text-sm text-[#E8D5C4] mt-1">Years Experience</div>
          </div>
          <div className="col-span-2 md:col-span-1 p-4 rounded-xl bg-[#260812]/60 border border-[#C98F8F]/20">
            <div className="text-3xl font-extrabold text-[#C98F8F]">100%</div>
            <div className="text-sm text-[#E8D5C4] mt-1">Client Satisfaction</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;