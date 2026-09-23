import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Mic } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-[#0F0C20] text-white overflow-hidden">
      
      {/* Decorative Background Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FF007F]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00E5FF]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-[#1C1438] border-2 border-[#FF007F] px-4 py-2 rounded-full shadow-[0_0_15px_rgba(255,0,127,0.4)]">
              <Sparkles className="w-4 h-4 text-[#CCFF00]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#CCFF00] uppercase">
                India's Premium Stage Artist
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#FFFFFF] leading-tight font-funky drop-shadow-md">
              Bringing Life To <br />
              <span className="text-[#CCFF00] drop-shadow-[0_4px_20px_rgba(204,255,0,0.4)]">
                Every Grand Stage
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#E2D9FF] max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Elevating weddings, corporate galas, live concerts, and celebrity shows with high-energy hosting, unmatched crowd engagement, and unforgettable memories.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="https://wa.me/916232091754"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-[#FF007F] hover:bg-[#CCFF00] text-[#0F0C20] hover:text-[#0F0C20] px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,0,127,0.7)] flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book For Your Event
              </a>

              <a
                href="#gallery"
                className="w-full sm:w-auto border-2 border-[#00E5FF] hover:bg-[#00E5FF] text-[#00E5FF] hover:text-[#0F0C20] px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,229,255,0.4)]"
              >
                <Mic className="w-5 h-5" />
                Explore Gallery
              </a>
            </div>

            {/* Stats Counter Row */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t-2 border-[#1C1438]">
              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-[#CCFF00] font-funky">500+</h3>
                <p className="text-xs sm:text-sm text-[#00E5FF] font-bold uppercase">Shows Hosted</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-[#FF007F] font-funky">100k+</h3>
                <p className="text-xs sm:text-sm text-[#00E5FF] font-bold uppercase">Happy Audience</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-[#FFB800] font-funky">5+</h3>
                <p className="text-xs sm:text-sm text-[#00E5FF] font-bold uppercase">Years On Stage</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image Feature */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border-4 border-[#FF007F] shadow-[0_0_35px_rgba(255,0,127,0.5)]">
              <img
                src="/image/Image1.jpeg"
                alt="Anchor Shubham Atre"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0C20] via-transparent to-transparent opacity-80" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;