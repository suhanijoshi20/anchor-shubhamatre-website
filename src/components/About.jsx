import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Zap, UserCheck } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Zap className="w-8 h-8 text-[#CCFF00]" />,
      title: 'High Voltage Energy',
      desc: 'Keeps the audience dynamic and charged from start to finish.'
    },
    {
      icon: <Heart className="w-8 h-8 text-[#FF007F]" />,
      title: 'Personalized Touch',
      desc: 'Tailors scripts and hosting style according to family & client preferences.'
    },
    {
      icon: <Award className="w-8 h-8 text-[#00E5FF]" />,
      title: 'Stage Excellence',
      desc: 'Flawless crowd management with zero dull moments during live events.'
    },
    {
      icon: <UserCheck className="w-8 h-8 text-[#FFB800]" />,
      title: 'Versatile Hosting',
      desc: 'Expertise in multi-genre events from royal weddings to corporate summits.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0F0C20] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-black font-funky text-[#CCFF00] drop-shadow-[0_4px_15px_rgba(204,255,0,0.3)]"
          >
            ABOUT SHUBHAM
          </motion.h2>
          <p className="text-[#00E5FF] mt-3 font-semibold tracking-wide text-base sm:text-lg">
            The Voice & Energy Behind Memorable Stage Stories
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden border-4 border-[#00E5FF] shadow-[0_0_25px_rgba(0,229,255,0.4)]"
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
            transition={{ duration: 0.6 }}
            className="space-y-6 text-[#E2D9FF] text-base sm:text-lg leading-relaxed font-medium"
          >
            <p>
              Anchor Shubham Atre is a renowned professional stage host known for his electrifying presence, witty humor, and flawless audience connection. With years of experience across luxury weddings, corporate galas, live music shows, and cultural nights, he brings a seamless blend of charm and professionalism.
            </p>
            <p>
              Whether it is orchestrating high-energy sangeet performances or leading formal award ceremonies with dignity, Shubham creates an engaging atmosphere that leaves a lasting impression on every guest.
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
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-[#1C1438] border-2 border-[#FF007F]/40 p-6 rounded-3xl text-center space-y-3 hover:border-[#CCFF00] transition-all shadow-[0_5px_20px_rgba(0,0,0,0.4)]"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-black font-funky text-white">{item.title}</h3>
              <p className="text-sm text-[#E2D9FF] font-normal">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;