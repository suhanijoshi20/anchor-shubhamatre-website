import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: '/image/Image1.jpeg', title: 'Royal Wedding Sangeet' },
  { src: '/image/image2.jpeg', title: 'Corporate Gala Night' },
  { src: '/image/image3.jpeg', title: 'Live Arena Concert' },
  { src: '/image/image4.jpeg', title: 'Fun Haldi & Mehendi Games' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-[#F8FAFC] text-[#1E293B] relative border-t-4 border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black font-funky text-[#1E293B]"
          >
            STAGE <span className="text-[#FF007F]">GALLERY</span> 📸
          </motion.h2>
          <p className="text-[#475569] mt-3 font-bold tracking-wide text-base sm:text-lg">
            Real Moments Of Pure Joy, Laughter & Celebration
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-square rounded-3xl overflow-hidden border-4 border-[#1E293B] group shadow-xl hover:border-[#FF007F]"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-funky font-black text-lg">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;