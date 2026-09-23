import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  { id: 1, src: '/image/Image1.jpeg', title: 'Grand Sangeet Night', category: 'Wedding Host' },
  { id: 2, src: '/image/image2.jpeg', title: 'Royal Wedding Reception', category: 'Stage Anchor' },
  { id: 3, src: '/image/image3.jpeg', title: 'Corporate Excellence Gala', category: 'Corporate Show' },
  { id: 4, src: '/image/image4.jpeg', title: 'Celebrity Concert Night', category: 'Live Concert' },
  { id: 5, src: '/image/Image1.jpeg', title: 'Interactive Ring Ceremony', category: 'Pre-Wedding' },
  { id: 6, src: '/image/image2.jpeg', title: 'Haldi & Mehendi Dhamaka', category: 'Cultural Host' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative py-24 bg-[#FDF8F2] text-[#260812] overflow-hidden">
      
      {/* LEFT SIDE: DECORATION BORDER */}
      <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-20 pointer-events-none hidden md:flex flex-col justify-between items-center py-10 opacity-25">
        <svg width="40" height="100%" viewBox="0 0 40 800" fill="none" stroke="#260812" strokeWidth="1.5">
          <path d="M20 0 V 800 M10 20 Q 20 40 30 20 M10 60 Q 20 80 30 60 M10 100 Q 20 120 30 100" />
          <circle cx="20" cy="40" r="6" fill="#C98F8F" />
          <circle cx="20" cy="140" r="6" fill="#C98F8F" />
          <circle cx="20" cy="240" r="6" fill="#C98F8F" />
          <circle cx="20" cy="340" r="6" fill="#C98F8F" />
          <circle cx="20" cy="440" r="6" fill="#C98F8F" />
          <circle cx="20" cy="540" r="6" fill="#C98F8F" />
          <circle cx="20" cy="640" r="6" fill="#C98F8F" />
          <circle cx="20" cy="740" r="6" fill="#C98F8F" />
        </svg>
      </div>

      {/* RIGHT SIDE: DECORATION BORDER */}
      <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-20 pointer-events-none hidden md:flex flex-col justify-between items-center py-10 opacity-25">
        <svg width="40" height="100%" viewBox="0 0 40 800" fill="none" stroke="#260812" strokeWidth="1.5">
          <path d="M20 0 V 800 M10 20 Q 20 40 30 20 M10 60 Q 20 80 30 60 M10 100 Q 20 120 30 100" />
          <circle cx="20" cy="40" r="6" fill="#C98F8F" />
          <circle cx="20" cy="140" r="6" fill="#C98F8F" />
          <circle cx="20" cy="240" r="6" fill="#C98F8F" />
          <circle cx="20" cy="340" r="6" fill="#C98F8F" />
          <circle cx="20" cy="440" r="6" fill="#C98F8F" />
          <circle cx="20" cy="540" r="6" fill="#C98F8F" />
          <circle cx="20" cy="640" r="6" fill="#C98F8F" />
          <circle cx="20" cy="740" r="6" fill="#C98F8F" />
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
            <span className="text-xs font-bold uppercase tracking-widest text-[#4A1022] bg-[#F7E7D8] px-4 py-1.5 rounded-full border border-[#C98F8F]">
              Royal Gallery
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-wider text-[#260812] mt-4">
              ᗴᗩᒪᒪEᖇY
            </h2>
            <p className="text-[#6B4423] mt-3 tracking-wide text-sm sm:text-base max-w-xl mx-auto">
              Capturing Timeless Royal Moments & High-Energy Stages
            </p>
          </motion.div>
        </div>

        {/* Gallery Arch Frame Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center group"
            >
              {/* Outer Arch Frame Container (max-w-xs se pixel bracket error fix) */}
              <div className="relative p-2.5 bg-[#4A1022] rounded-t-full rounded-b-2xl shadow-2xl border-2 border-[#C98F8F] w-full max-w-xs">
                
                {/* Inner Arch Frame with B&W to Color Transition */}
                <motion.div
                  initial={{ filter: 'grayscale(100%)' }}
                  whileInView={{ filter: 'grayscale(0%)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: 0.3, ease: 'easeInOut' }}
                  style={{ aspectRatio: '3/4' }}
                  className="relative w-full overflow-hidden rounded-t-full rounded-b-xl border border-[#C98F8F]/40 bg-[#260812]"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, rgba(38, 8, 18, 0.9) 0%, transparent 50%)'
                    }}
                  />

                  <div className="absolute bottom-4 left-3 right-3 text-center z-10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFF5EA] bg-[#4A1022]/90 px-3 py-1 rounded-full border border-[#C98F8F]/50">
                      {img.category}
                    </span>
                  </div>
                </motion.div>
              </div>

              <h3 className="text-lg font-bold text-[#260812] mt-4 tracking-wide text-center">
                {img.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;