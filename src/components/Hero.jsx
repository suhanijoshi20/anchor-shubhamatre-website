import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mic, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-[#FDFBF7] text-[#1E293B] overflow-hidden">
      
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FEF08A]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-[#FFFBEB] border-2 border-[#D4AF37] px-4 py-2 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#B45309] uppercase">
                India's Premium Stage Artist
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#1E293B] leading-tight font-funky">
              Bringing Life To <br />
              <span className="text-[#D4AF37]">
                Every Grand Stage
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#475569] max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Elevating weddings, corporate galas, live concerts, and celebrity shows with high-energy hosting, unmatched crowd engagement, and unforgettable memories.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="https://wa.me/916232091754"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#1E293B] text-white hover:text-[#D4AF37] px-8 py-4 rounded-full font-black font-funky text-xs uppercase tracking-wider transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book For Your Event
              </a>

              <a
                href="#gallery"
                className="w-full sm:w-auto border-2 border-[#1E293B] hover:border-[#D4AF37] text-[#1E293B] hover:text-[#D4AF37] px-8 py-4 rounded-full font-black font-funky text-xs uppercase tracking-wider transition-all transform hover:scale-105 flex items-center justify-center gap-2 bg-white"
              >
                <Mic className="w-5 h-5" />
                Explore Gallery
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t-2 border-[#E2E8F0]">
              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-[#D4AF37] font-funky">500+</h3>
                <p className="text-xs sm:text-sm text-[#475569] font-bold uppercase">Shows Hosted</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-[#1E293B] font-funky">100k+</h3>
                <p className="text-xs sm:text-sm text-[#475569] font-bold uppercase">Happy Audience</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-[#B38F24] font-funky">5+</h3>
                <p className="text-xs sm:text-sm text-[#475569] font-bold uppercase">Years On Stage</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border-4 border-[#D4AF37] shadow-xl">
              <img
                src="/image/Image1.jpeg"
                alt="Anchor Shubham Atre"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;