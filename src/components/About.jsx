import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Zap, UserCheck, Gamepad2, Sparkles } from 'lucide-react';

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

  return (
    <section id="about" className="py-24 bg-[#F8FAFC] text-[#1E293B] relative overflow-hidden border-t-4 border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black font-funky text-[#1E293B]"
          >
            MEET THE <span className="text-[#FF007F]">FUNKY ANCHOR!</span> 🎤
          </motion.h2>
          <p className="text-[#475569] mt-3 font-bold tracking-wide text-base sm:text-lg">
            The Voice, Wit & Crazy Energy Behind Grand Celebrations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border-4 border-[#1E293B] shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform"
          >
            <img
              src="/image/image2.jpeg"
              alt="Shubham Atre Hosting"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-[#475569] text-base sm:text-lg leading-relaxed font-semibold"
          >
            <p>
              Anchor Shubham Atre is a renowned stage host known for his electrifying presence, witty humor, and flawless audience connection. He brings a unique mix of high-voltage fun, funny crowd banters, and engaging stage games that make every guest dance and cheer!
            </p>
            <p>
              Whether it is orchestrating high-energy sangeet battles, funny Haldi games, or leading formal award ceremonies with dignity, Shubham creates an atmosphere that leaves everyone smiling.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border-4 border-[#1E293B] p-6 rounded-3xl text-center space-y-3 hover:border-[#FF007F] transition-all shadow-md"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-black font-funky text-[#1E293B]">{item.title}</h3>
              <p className="text-sm text-[#64748B] font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;