import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

// Number Count-Up Component
const Counter = ({ from = 0, to, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = from;
      const end = parseInt(to);
      const totalSteps = 60;
      const increment = (end - start) / totalSteps;
      const stepTime = (duration * 1000) / totalSteps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 bg-[#FFF5EA] text-[#260812] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#E8D5C4] bg-[#E8D5C4]/40 text-[#4A1022] text-xs sm:text-sm font-semibold mb-8 uppercase tracking-widest"
        >
          <Sparkles size={16} className="text-[#C98F8F]" />
          <span>Celebrity Anchor & Luxury Event Emcee</span>
        </motion.div>

        {/* Main Heading */}
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

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-[#260812]/80 mb-10 leading-relaxed font-normal tracking-wide"
        >
          Corporate Shows • Celebrity Weddings • Concerts • High-Energy Sangeet Nights
        </motion.p>

        {/* Call-to-action Buttons */}
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

        {/* Pop-up Animated Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-[#E8D5C4] pt-10">
          
          {/* Card 1: 500+ Shows Hosted */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20, 
              delay: 0.2 
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 rounded-2xl bg-[#E8D5C4]/30 border-2 border-[#E8D5C4] shadow-md hover:border-[#C98F8F] transition-colors"
          >
            <div className="text-3xl sm:text-5xl font-extrabold text-[#4A1022]">
              <Counter to={500} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm text-[#260812]/80 mt-2 font-semibold uppercase tracking-wider">
              Shows Hosted
            </div>
          </motion.div>

          {/* Card 2: 5+ Years Experience */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20, 
              delay: 0.4 
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 rounded-2xl bg-[#E8D5C4]/30 border-2 border-[#E8D5C4] shadow-md hover:border-[#C98F8F] transition-colors"
          >
            <div className="text-3xl sm:text-5xl font-extrabold text-[#4A1022]">
              <Counter to={5} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm text-[#260812]/80 mt-2 font-semibold uppercase tracking-wider">
              Years Experience
            </div>
          </motion.div>

          {/* Card 3: 100% Client Satisfaction */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20, 
              delay: 0.6 
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="col-span-2 md:col-span-1 p-6 rounded-2xl bg-[#E8D5C4]/30 border-2 border-[#E8D5C4] shadow-md hover:border-[#C98F8F] transition-colors"
          >
            <div className="text-3xl sm:text-5xl font-extrabold text-[#4A1022]">
              <Counter to={100} suffix="%" />
            </div>
            <div className="text-xs sm:text-sm text-[#260812]/80 mt-2 font-semibold uppercase tracking-wider">
              Client Satisfaction
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;