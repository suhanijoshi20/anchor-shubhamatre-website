import React from 'react';
import { Camera, Play } from 'lucide-react';

const galleryItems = [
  {
    title: "Grand Sangeet Night",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Corporate Excellence Awards",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Live Concert Hosting",
    category: "Concert",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Destination Wedding Anchor",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Brand Launch Event",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Celebrity Meet & Greet",
    category: "Showcase",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-zinc-950 text-white relative border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Event <span className="text-amber-400">Gallery</span>
          </h2>
          <p className="text-gray-400 mt-3 text-lg">Glimpses of high-energy performances and luxury stages.</p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-xl aspect-video cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                <span className="text-xs font-semibold text-amber-400 tracking-widest uppercase mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="absolute top-4 right-4 bg-amber-500/20 p-2 rounded-full backdrop-blur-sm border border-amber-500/30 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera size={18} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;