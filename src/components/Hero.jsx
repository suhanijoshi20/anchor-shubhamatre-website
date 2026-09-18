import React from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-semibold mb-8">
          <Sparkles size={16} />
          <span>Celebrity Anchor & Luxury Event Emcee</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Transforming Events Into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
            Unforgettable Memories
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed font-light">
          Corporate Shows • Celebrity Weddings • Concerts • High-Energy Sangeet Nights
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%20Anchor%20Shubham,%20I%20want%20to%20book%20an%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-200 shadow-lg shadow-emerald-500/20"
          >
            <MessageCircle size={22} />
            <span>Chat On WhatsApp</span>
          </a>

          <a
            href="tel:+91XXXXXXXXXX"
            className="w-full sm:w-auto flex items-center justify-center gap-3 border border-amber-500/50 hover:bg-amber-500/10 text-amber-400 font-bold px-8 py-4 rounded-full transition-all duration-200"
          >
            <Phone size={20} />
            <span>Direct Call</span>
          </a>
        </div>

        {/* Highlights / Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-zinc-800 pt-10">
          <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <div className="text-3xl font-extrabold text-amber-400">500+</div>
            <div className="text-sm text-gray-400 mt-1">Shows Hosted</div>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <div className="text-3xl font-extrabold text-amber-400">5+</div>
            <div className="text-sm text-gray-400 mt-1">Years Experience</div>
          </div>
          <div className="col-span-2 md:col-span-1 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <div className="text-3xl font-extrabold text-amber-400">100%</div>
            <div className="text-sm text-gray-400 mt-1">Client Satisfaction</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;