import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Zap, Gamepad2, Sparkles } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Zap className="w-8 h-8 text-[#FF007F]" />,
      title: 'High Voltage Energy',
      desc: 'Keeps the audience dynamic, laughing, and charged from start to finish.'
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-[#D4AF37]" />,
      title: 'Crazy Stage Games',
      desc: 'Funky couple showdowns, family roast battles, and hilarious audience interaction.'
    },
    {
      icon: <Heart className="w-8 h-8 text-[#8B5CF6]" />,
      title: 'Personalized Touch',
      desc: 'Tailors scripts and hosting style according to family & client preferences.'
    },
    {
      icon: <Award className="w-8 h-8 text-[#FF007F]" />,
      title: 'Zero Dull Moments',
      desc: 'Flawless crowd management with non-stop excitement throughout the show.'
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="about" className="py-24 bg-[#F8FAFC] text-[#1E293B] relative overflow-hidden border-t-4 border-[#1E293B]">
      
      {/* Ambient Glows */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-[-100px] w-96 h-96 bg-[#FF007F] rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 right-[-100px] w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-[#FF007F]/10 text-[#FF007F] px-4 py-1.5 rounded-full font-funky font-black text-xs uppercase mb-3 border border-[#FF007F]/20"
          >
            <Sparkles className="w-4 h-4 animate-spin" /> High-Energy Entertainment
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black font-funky text-[#1E293B]"
          >
            MEET THE <span className="text-[#FF007F]">FUNKY ANCHOR!</span> 🎤
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="text-[#475569] mt-3 font-bold tracking-wide text-base sm:text-lg"
          >
            The Voice, Wit & Crazy Energy Behind Grand Celebrations
          </motion.p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02, rotate: 0 }}
            className="rounded-3xl overflow-hidden border-4 border-[#1E293B] shadow-2xl transform -rotate-1 transition-all duration-300 relative group"
          >
            <img
              src="/image/image2.jpeg"
              alt="Shubham Atre Hosting"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-funky font-black text-lg">⚡ Live On Stage!</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="space-y-6 text-[#475569] text-base sm:text-lg leading-relaxed font-semibold"
          >
            <p className="bg-white p-6 rounded-2xl border-2 border-[#1E293B]/10 shadow-sm hover:border-[#FF007F]/40 transition-colors">
              Anchor Shubham Atre is a renowned stage host known for his electrifying presence, witty humor, and flawless audience connection. He brings a unique mix of high-voltage fun, funny crowd banters, and engaging stage games that make every guest dance and cheer!
            </p>
            <p className="bg-white p-6 rounded-2xl border-2 border-[#1E293B]/10 shadow-sm hover:border-[#D4AF37]/40 transition-colors">
              Whether it is orchestrating high-energy sangeet battles, funny Haldi games, or leading formal award ceremonies with dignity, Shubham creates an atmosphere that leaves everyone smiling.
            </p>
          </motion.div>

        </div>

        {/* Highlight Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white border-4 border-[#1E293B] p-6 rounded-3xl text-center space-y-3 hover:border-[#FF007F] transition-all duration-300 shadow-md hover:shadow-2xl"
            >
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex justify-center"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-black font-funky text-[#1E293B]">{item.title}</h3>
              <p className="text-sm text-[#64748B] font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;