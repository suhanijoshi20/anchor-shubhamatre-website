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
    <section id="gallery" className="relative py-24 bg-[#0f051d] text-white overflow-hidden">
      
      {/* Decorative Neon Side Dots / Flares */}
      <div className="absolute top-1/4 left-4 w-6 h-6 rounded-full bg-[#ff007f] blur-sm animate-ping hidden md:block" />
      <div className="absolute bottom-1/4 right-4 w-6 h-6 rounded-full bg-[#00f0ff] blur-sm animate-ping hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-black uppercase tracking-widest text-[#0f051d] bg-[#ffe600] px-5 py-2 rounded-full border-2 border-white shadow-[3px_3px_0px_#ff007f]">
              Visual Showcase
            </span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-wider funky-text-gradient mt-6 uppercase">
              Gallery
            </h2>
            <p className="text-[#00f0ff] mt-3 font-bold text-base sm:text-lg max-w-xl mx-auto">
              Capturing Timeless Stage Moments & High-Energy Hosting Across Elite Events
            </p>
          </motion.div>
        </div>

        {/* Gallery Cards Grid */}
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
              {/* Outer Funky Arch Frame */}
              <div className="relative p-3 bg-[#1c0b36] rounded-t-full rounded-b-3xl border-4 border-[#ff007f] shadow-[8px_8px_0px_#00f0ff] w-full max-w-xs transition-transform duration-300 group-hover:-translate-y-2">
                
                {/* Inner Arch Frame with Black & White to Color Animation */}
                <motion.div
                  initial={{ filter: 'grayscale(100%)' }}
                  whileInView={{ filter: 'grayscale(0%)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: 0.2, ease: 'easeInOut' }}
                  style={{ aspectRatio: '3/4' }}
                  className="relative w-full overflow-hidden rounded-t-full rounded-b-2xl border-2 border-[#ffe600] bg-[#0f051d]"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Shadow Overlay */}
                  <div 
                    className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, rgba(15, 5, 29, 0.95) 0%, transparent 60%)'
                    }}
                  />

                  {/* Category Pill */}
                  <div className="absolute bottom-4 left-3 right-3 text-center z-10">
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#0f051d] bg-[#00f0ff] px-3 py-1 rounded-full border border-white">
                      {img.category}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Title Under Card */}
              <h3 className="text-xl font-black text-[#ffe600] mt-4 tracking-wide text-center">
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