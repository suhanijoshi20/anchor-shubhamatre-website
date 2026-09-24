import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Sparkles, X, Maximize2 } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: '/images/Image1.jpeg',
      title: 'High-Energy Crowd Moments',
      category: 'Sangeet Night'
    },
    {
      src: '/images/image2.jpeg',
      title: 'Stage Hosting & Mic Control',
      category: 'Anchor Live'
    },
    {
      src: '/images/image3.jpeg',
      title: 'Celebrations With Couple',
      category: 'Wedding Day'
    },
    {
      src: '/images/image4.jpeg',
      title: 'Haldi Ceremony Highlights',
      category: 'Haldi Event'
    },
    {
      src: '/images/image5.jpeg',
      title: 'Interactive Crowd Banter',
      category: 'Family Fun'
    },
    {
      src: '/images/Image6.jpeg',
      title: 'Grand Entry Coordination',
      category: 'Special Moments'
    },
    {
      src: '/images/Image7.jpeg',
      title: 'Unstoppable Stage Energy',
      category: 'After Party'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-900 text-slate-100 relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Camera className="w-4 h-4" /> Portfolio Highlights
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Event <span className="text-amber-400">Gallery</span>
          </h2>

          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            A glimpse into live stage performances, interactive hosting, and unforgettable celebrations.
          </p>
        </div>

        {/* Professional Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedImage(img)}
              className="group relative rounded-2xl overflow-hidden bg-slate-800/80 border border-slate-700/60 shadow-lg hover:shadow-2xl hover:border-amber-500/40 cursor-pointer transition-all duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                
                {/* Subtle Hover Gradient & Information */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-end">
                    <span className="p-2 bg-slate-900/80 backdrop-blur-md rounded-full text-white border border-slate-700">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  <div>
                    <span className="inline-block bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-medium px-2.5 py-1 rounded-md mb-2">
                      {img.category}
                    </span>
                    <h3 className="text-base font-semibold text-white">
                      {img.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Clean Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-slate-800 text-slate-300 p-2 rounded-full hover:bg-slate-700 hover:text-white transition-colors border border-slate-600"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[75vh] flex items-center justify-center bg-black/50">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>

              <div className="p-5 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-amber-400 text-xs font-medium uppercase tracking-wider">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white mt-0.5">
                    {selectedImage.title}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                  <Sparkles className="w-4 h-4 text-amber-400" /> Live Event Photo
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