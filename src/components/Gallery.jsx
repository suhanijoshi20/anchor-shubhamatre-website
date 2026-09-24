import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Sparkles, X, Maximize2 } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: '/images/Image1.jpeg',
      title: 'High-Energy Crowd Moments',
      tag: 'Sangeet Night'
    },
    {
      src: '/images/image2.jpeg',
      title: 'Stage Hosting & Mic Control',
      tag: 'Anchor Shubham'
    },
    {
      src: '/images/image3.jpeg',
      title: 'With The Beautiful Couple',
      tag: 'Wedding Celebration'
    },
    {
      src: '/images/image4.jpeg',
      title: 'Haldi Board Presentation',
      tag: 'Haldi Ceremony'
    },
    {
      src: '/images/image5.jpeg',
      title: 'Interactive Crowd Banter',
      tag: 'Family Games'
    },
    {
      src: '/images/Image6.jpeg',
      title: 'Live Stage Coordination',
      tag: 'Grand Entry'
    },
    {
      src: '/images/Image7.jpeg',
      title: 'Unstoppable Celebrations',
      tag: 'Party Energy'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#1E293B] text-white relative overflow-hidden border-t-4 border-[#FF007F]">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-[-100px] w-96 h-96 bg-[#FF007F]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-100px] w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#FF007F]/20 text-[#FF007F] px-4 py-1.5 rounded-full font-funky font-black text-xs uppercase mb-3 border border-[#FF007F]/30"
          >
            <Camera className="w-4 h-4" /> Visual Highlights
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black font-funky"
          >
            EVENT <span className="text-[#FF007F]">GALLERY</span> 📸
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 mt-3 font-semibold text-base sm:text-lg max-w-2xl mx-auto"
          >
            Real smiles, real high energy, and unforgettable memories captured live on stage!
          </motion.p>
        </div>

        {/* Responsive Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedImage(img)}
              className="group relative rounded-3xl overflow-hidden border-4 border-[#334155] bg-slate-800 shadow-xl cursor-pointer hover:border-[#FF007F] transition-all duration-300"
            >
              {/* Image Container with Black & White to Smooth Color transition */}
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <motion.img
                  src={img.src}
                  alt={img.title}
                  initial={{ filter: "grayscale(100%)", scale: 1 }}
                  whileInView={{ filter: "grayscale(0%)" }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Overlay Glow & Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-[#1E293B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-end">
                    <span className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>

                  <div>
                    <span className="inline-block bg-[#FF007F] text-white text-[10px] font-black font-funky px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                      {img.tag}
                    </span>
                    <h3 className="text-lg font-black font-funky text-white leading-snug">
                      {img.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Fullscreen Image Preview Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#1E293B] border-4 border-[#FF007F] rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-[#FF007F] text-white p-2 rounded-full hover:bg-[#D4AF37] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-h-[80vh] overflow-hidden flex items-center justify-center bg-black">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[80vh] w-auto object-contain grayscale-0"
                />
              </div>

              <div className="p-6 bg-[#1E293B] border-t-2 border-slate-700 flex items-center justify-between">
                <div>
                  <span className="text-[#D4AF37] text-xs font-black font-funky uppercase tracking-wider">
                    {selectedImage.tag}
                  </span>
                  <h3 className="text-xl font-black font-funky text-white mt-0.5">
                    {selectedImage.title}
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-[#FF007F] font-funky text-sm">
                  <Sparkles className="w-4 h-4" /> Live Event
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Gallery;