import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: '/image/Image1.jpeg', title: 'Royal Wedding Sangeet' },
  { src: '/image/image2.jpeg', title: 'Corporate Gala Night' },
  { src: '/image/image3.jpeg', title: 'Live Arena Concert' },
  { src: '/image/image4.jpeg', title: 'Intimate Ceremony' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-[#0F0C20] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-black font-funky text-[#CCFF00] drop-shadow-[0_4px_15px_rgba(204,255,0,0.3)]"
          >
            GALLERY
          </motion.h2>
          <p className="text-[#00E5FF] mt-3 font-semibold tracking-wide text-base sm:text-lg">
            Capturing Energetic Stage Moments
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative aspect-square rounded-2xl overflow-hidden border-2 border-[#FF007F]/50 group shadow-[0_5px_20px_rgba(0,0,0,0.5)] hover:border-[#CCFF00]"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0C20] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-funky font-bold text-lg">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;