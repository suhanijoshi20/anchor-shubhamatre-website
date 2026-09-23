import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Heart, Award, UserCheck } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Zap className="w-7 h-7 text-[#D4AF37]" />,
      title: 'High-Voltage Energy',
      desc: 'Keeps the crowd engaged, lively, and connected throughout the event.'
    },
    {
      icon: <Heart className="w-7 h-7 text-[#D4AF37]" />,
      title: 'Personalized Touch',
      desc: 'Adapts scripting and flow according to family and client preferences.'
    },
    {
      icon: <Award className="w-7 h-7 text-[#D4AF37]" />,
      title: 'Professional Hosting',
      desc: 'Flawless execution with premium decorum for grand celebrations.'
    },
    {
      icon: <UserCheck className="w-7 h-7 text-[#D4AF37]" />,
      title: 'Multi-Genre Expertise',
      desc: 'Seamless transition between traditional weddings and corporate summits.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#F8FAFC] text-[#1E293B] relative border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1E293B]"
          >
            ABOUT <span className="text-[#D4AF37]">SHUBHAM</span>
          </motion.h2>
          <p className="text-[#64748B] mt-3 font-medium text-base sm:text-lg">
            The Voice & Energy Behind Memorable Celebrations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border-4 border-white shadow-lg"
          >
            <img
              src="/image/image2.jpeg"
              alt="Shubham Atre Hosting"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-[#475569] text-base sm:text-lg leading-relaxed"
          >
            <p>
              Anchor Shubham Atre is a professional stage host known for his charming stage presence, spontaneous wit, and effortless crowd connection. Over the years, he has hosted hundreds of luxury weddings, corporate summits, concerts, and social galas across India.
            </p>
            <p>
              Whether it is orchestrating high-octane sangeet celebrations or anchoring dignified corporate awards, Shubham ensures every moment on stage feels lively, memorable, and flawlessly managed.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-[#E2E8F0] p-6 rounded-2xl text-center space-y-3 hover:border-[#D4AF37] transition-all shadow-sm"
            >
              <div className="flex justify-center mb-2">{item.icon}</div>
              <h3 className="text-lg font-bold text-[#1E293B]">{item.title}</h3>
              <p className="text-sm text-[#64748B] font-normal leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;