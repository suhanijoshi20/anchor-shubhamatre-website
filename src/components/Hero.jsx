import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mic, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-[#0B0F19] text-white overflow-hidden">
      
      {/* Warm Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-[#161F33] border border-[#D4AF37]/30 px-4 py-2 rounded-full shadow-inner">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
                Premium Celebrity Host & Anchor
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
              Elevating Stages With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFBF00] to-[#E6C280]">
                Unmatched Energy & Elegance
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Specializing in luxury weddings, high-profile corporate galas, live concerts, and grand celebrations across the globe.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="https://wa.me/916232091754"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-[#FFBF00] hover:to-[#D4AF37] text-[#0B0F19] px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all transform hover:scale-105 shadow-xl shadow-[#D4AF37]/20 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Reserve Your Date
              </a>

              <a
                href="#gallery"
                className="w-full sm:w-auto border border-gray-700 hover:border-[#D4AF37] text-gray-300 hover:text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 bg-[#161F33]/50"
              >
                <Mic className="w-5 h-5 text-[#D4AF37]" />
                Watch Gallery
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-gray-800">
              <div>
                <h3 className="text-3xl font-bold text-white">500+</h3>
                <p className="text-xs text-gray-400 font-medium uppercase mt-1">Shows Hosted</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">100k+</h3>
                <p className="text-xs text-gray-400 font-medium uppercase mt-1">Live Audience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#D4AF37]">5+</h3>
                <p className="text-xs text-gray-400 font-medium uppercase mt-1">Years On Stage</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl shadow-[#D4AF37]/10">
              <img
                src="/image/Image1.jpeg"
                alt="Anchor Shubham Atre"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;