import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  { id: 1, src: '/image/Image1.jpeg', title: 'Grand Sangeet Night' },
  { id: 2, src: '/image/Image1.jpeg', title: 'Corporate Gala' },
  { id: 3, src: '/image/Image1.jpeg', title: 'Luxury Wedding Host' },
  { id: 4, src: '/image/Image1.jpeg', title: 'Celebrity Show' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-[#260812] text-[#FFF5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wider text-[#C98F8F]">
            ᗴᗩᒪᒪEᖇY
          </h2>
          <p className="text-[#E8D5C4] mt-2 tracking-wide">
            Moments Captured Across Elite Stage Shows
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl shadow-lg border border-[#C98F8F]/30 group"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Solid dark overlay with inline style gradient (Fixes Tailwind gradient error) */}
              <div 
                className="absolute inset-0 opacity-80 group-hover:opacity-95 transition-opacity"
                style={{
                  background: 'linear-gradient(to top, #260812 0%, transparent 100%)'
                }}
              />
              <div className="absolute bottom-4 left-4 z-10">
                <p className="text-sm font-bold text-[#FFF5EA]">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;