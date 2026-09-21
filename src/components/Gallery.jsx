import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  { id: 1, src: '/image/Image1.jpeg', title: 'Grand Sangeet Night', category: 'Wedding Host' },
  { id: 2, src: '/image/image2.jpeg', title: 'Corporate Excellence Gala', category: 'Corporate Show' },
  { id: 3, src: '/image/image3.jpeg', title: 'Royal Wedding Reception', category: 'Stage Anchor' },
  { id: 4, src: '/image/image4.jpeg', title: 'Celebrity Musical Night', category: 'Live Concert' },
  { id: 5, src: '/image/Image1.jpeg', title: 'Interactive Ring Ceremony', category: 'Pre-Wedding' },
  { id: 6, src: '/image/image2.jpeg', title: 'Exclusive Private Party', category: 'Special Host' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative py-24 bg-[#FDF8F2] text-[#260812] overflow-hidden">
      
      {/* Background Side Ornate Anchoring Borders / Microphone Filigree Decorative Art */}
      <div className="absolute top-10 left-3 sm:left-6 opacity-20 pointer-events-none hidden md:block">
        <svg width="70" height="260" viewBox="0 0 100 400" fill="none" stroke="#260812" strokeWidth="2">
          <path d="M50 10 V 390 M20 50 Q 50 100 80 50 M20 150 Q 50 200 80 150 M20 250 Q 50 300 80 250" />
          <circle cx="50" cy="30" r="12" fill="#260812" />
        </svg>
      </div>

      <div className="absolute top-10 right-3 sm:right-6 opacity-20 pointer-events-none hidden md:block">
        <svg width="70" height="260" viewBox="0 0 100 400" fill="none" stroke="#260812" strokeWidth="2">
          <path d="M50 10 V 390 M20 50 Q 50 100 80 50 M20 150 Q 50 200 80 150 M20 250 Q 50 300 80 250" />
          <circle cx="50" cy="30" r="12" fill="#260812" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A2143] bg-[#F7E7D8] px-4 py-1.5 rounded-full border border-[#D4A373]">
              Visual Showcase
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-wider text-[#260812] mt-4">
              ᗴᗩᒪᒪEᖇY
            </h2>
            <p className="text-[#6B4423] mt-3 tracking-wide text-sm sm:text-base max-w-xl mx-auto">
              Capturing Timeless Stage Moments & High-Energy Hosting Across Elite Events
            </p>
          </motion.div>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative bg-[#FFFDF9] p-3.5 sm:p-4 rounded-2xl shadow-xl border-2 border-[#D4A373]/60 transition-all duration-300 hover:shadow-2xl hover:border-[#9A2143]"
            >
              {/* Corner Decorative Ornate Accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#9A2143] z-20 pointer-events-none" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#9A2143] z-20 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#9A2143] z-20 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#9A2143] z-20 pointer-events-none" />

              {/* Animated Image Container (B&W to Color Transition) */}
              <motion.div
                initial={{ filter: 'grayscale(100%)' }}
                whileInView={{ filter: 'grayscale(0%)' }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, delay: 0.2, ease: 'easeInOut' }}
                className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-200 border border-[#D4A373]/30"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Gradient Shadow Layer for Text Contrast */}
                <div 
                  className="absolute inset-0 opacity-70 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(38, 8, 18, 0.85) 0%, transparent 60%)'
                  }}
                />

                <div className="absolute bottom-3 left-3 right-3 z-10 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F7E7D8] bg-[#9A2143]/80 px-2 py-0.5 rounded-sm">
                    {img.category}
                  </span>
                  <h3 className="text-base font-bold text-[#FFFDF9] mt-1 drop-shadow-md truncate">
                    {img.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;