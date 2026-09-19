import React from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 bg-[#FFF5EA] text-[#260812] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
        
        {/* Badge Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#E8D5C4] bg-[#E8D5C4]/40 text-[#4A1022] text-xs sm:text-sm font-semibold mb-8 uppercase tracking-widest"
        >
          <Sparkles size={16} className="text-[#C98F8F]" />
          <span>Celebrity Anchor & Luxury Event Emcee</span>
        </motion.div>

        {/* Heading Animation */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-[#4A1022]"
        >
          Transforming Events Into <br />
          <span className="italic text-[#C98F8F] font-normal">
            Unforgettable Memories
          </span>
        </motion.h1>

        {/* Subtitle Animation */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-[#260812]/80 mb-10 leading-relaxed font-normal tracking-wide"
        >
          Corporate Shows • Celebrity Weddings • Concerts • High-Energy Sangeet Nights
        </motion.p>

        {/* Buttons Hover & Tap Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/91XXXXXXXXXX?text=Hi%20Anchor%20Shubham,%20I%20want%20to%20book%20an%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#4A1022] text-[#FFF5EA] font-bold px-8 py-4 rounded-full shadow-lg tracking-wider text-sm uppercase"
          >
            <MessageCircle size={20} className="text-[#C98F8F]" />
            <span>Chat On WhatsApp</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+91XXXXXXXXXX"
            className="w-full sm:w-auto flex items-center justify-center gap-3 border-2 border-[#4A1022] text-[#4A1022] font-bold px-8 py-4 rounded-full tracking-wider text-sm uppercase"
          >
            <Phone size={18} className="text-[#C98F8F]" />
            <span>Direct Call</span>
          </motion.a>
        </motion.div>

        {/* Stats Section Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-[#E8D5C4] pt-10"
        >
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
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;