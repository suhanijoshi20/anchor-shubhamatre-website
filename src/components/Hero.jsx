import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mic, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-[#FDFBF7] text-[#1E293B] overflow-hidden">
      
      {/* Light Golden Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FEF08A]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-[#FFFBEB] border border-[#FDE68A] px-4 py-2 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-bold tracking-widest text-[#B45309] uppercase">
                Premium Celebrity Host & Anchor
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1E293B] leading-tight">
              Elevating Stages With <br />
              <span className="text-[#D4AF37]">
                Unmatched Energy & Elegance
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#475569] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Specializing in luxury weddings, high-profile corporate galas, live concerts, and grand celebrations across the globe.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="https://wa.me/916232091754"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#B38F24] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Reserve Your Date
              </a>

              <a
                href="#gallery"
                className="w-full sm:w-auto border border-[#CBD5E1] hover:border-[#D4AF37] text-[#334155] hover:text-[#D4AF37] px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 bg-white shadow-sm"
              >
                <Mic className="w-5 h-5 text-[#D4AF37]" />
                Watch Gallery
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-[#E2E8F0]">
              <div>
                <h3 className="text-3xl font-bold text-[#1E293B]">500+</h3>
                <p className="text-xs text-[#64748B] font-semibold uppercase mt-1">Shows Hosted</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#1E293B]">100k+</h3>
                <p className="text-xs text-[#64748B] font-semibold uppercase mt-1">Live Audience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#D4AF37]">5+</h3>
                <p className="text-xs text-[#64748B] font-semibold uppercase mt-1">Years On Stage</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border-4 border-white shadow-xl">
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