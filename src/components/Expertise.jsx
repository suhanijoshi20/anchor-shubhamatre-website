import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Users, Sparkles, Flame, HeartHandshake, Mic } from 'lucide-react';

const FunExpertise = () => {
  const expertiseList = [
    {
      icon: <PartyPopper className="w-8 h-8 text-[#FF007F]" />,
      title: 'Grand Weddings & Sangeet',
      desc: 'High-energy couple entries, funny family roast sessions, and non-stop sangeet dance coordination.',
      badge: 'Popular'
    },
    {
      icon: <Flame className="w-8 h-8 text-[#FF8C00]" />,
      title: 'Crazy Haldi & Mehendi Games',
      desc: 'Haldi couple showdowns, funny tug-of-war, water balloon challenges, and crowd energetic banter.',
      badge: 'Trending'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#D4AF37]" />,
      title: 'Corporate Galas & Awards',
      desc: 'Sophisticated yet super engaging hosting, team ice-breakers, funny award categories, and live polls.',
      badge: 'Premium'
    },
    {
      icon: <Users className="w-8 h-8 text-[#8B5CF6]" />,
      title: 'Private Parties & Anniversaries',
      desc: 'Personalized interactive games, nostalgia trivia, rapid-fire rounds, and energetic dance floors.',
      badge: 'Custom'
    }
  ];

  // Motion variants for container and staggered child cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier
      },
    },
  };

  return (
    <section id="expertise" className="py-24 bg-white relative overflow-hidden border-t-4 border-[#1E293B]">
      
      {/* Subtle Background Floating Glows */}
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[-80px] w-80 h-80 bg-[#FF007F]/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 left-[-80px] w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-[#D4AF37]/15 text-[#B8860B] px-4 py-1.5 rounded-full font-funky font-black text-xs uppercase mb-3 border border-[#D4AF37]/30"
          >
            <Mic className="w-4 h-4 text-[#FF007F]" /> Unforgettable Event Experiences
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black font-funky text-[#1E293B]"
          >
            FUN <span className="text-[#FF007F]">EXPERTISE & SERVICES</span> ⚡
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-[#475569] mt-3 font-bold text-base sm:text-lg max-w-2xl mx-auto"
          >
            Transforming ordinary celebrations into extraordinary memories with humor, games & high energy.
          </motion.p>
        </div>

        {/* Staggered Animated Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {expertiseList.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                transition: { duration: 0.25, ease: "easeOut" } 
              }}
              className="bg-[#F8FAFC] border-4 border-[#1E293B] rounded-3xl p-7 relative flex flex-col justify-between hover:border-[#FF007F] hover:bg-white hover:shadow-2xl transition-colors duration-300 group"
            >
              {/* Badge with slight scale animation */}
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="absolute top-4 right-4 bg-[#1E293B] text-white text-[10px] font-black font-funky uppercase tracking-wider px-3 py-1 rounded-full group-hover:bg-[#FF007F] transition-colors duration-300"
              >
                {item.badge}
              </motion.span>

              <div>
                {/* Icon with interactive spring motion on hover */}
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  className="p-3 bg-white border-2 border-[#1E293B] rounded-2xl w-fit shadow-md mb-5 group-hover:border-[#FF007F] transition-colors"
                >
                  {item.icon}
                </motion.div>

                <h3 className="text-xl font-black font-funky text-[#1E293B] mb-3 group-hover:text-[#FF007F] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-semibold text-[#64748B] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="mt-6 pt-4 border-t-2 border-[#1E293B]/10 flex items-center justify-between text-xs font-black text-[#1E293B]">
                <span className="flex items-center gap-1 group-hover:text-[#FF007F] transition-colors">
                  <HeartHandshake className="w-4 h-4" /> Customized Vibe
                </span>
                <span className="text-[#FF007F] font-funky text-base group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FunExpertise;