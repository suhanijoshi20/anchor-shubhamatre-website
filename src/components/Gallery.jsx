import React from 'react';

const Gallery = () => {
  const photos = [
    { title: "Sangeet Night Host", cat: "Weddings" },
    { title: "Corporate Awards Gala", cat: "Corporate" },
    { title: "Live Concert Energy", cat: "Concerts" },
    { title: "Destination Show", cat: "Luxury" },
    { title: "Interactive Audience Game", cat: "Engagement" },
    { title: "Celebrity Interaction", cat: "VIP Events" }
  ];

  return (
    <section id="gallery" className="py-24 bg-[#E8D5C4]/30 text-[#260812]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-[#4A1022] font-bold tracking-widest uppercase text-xs sm:text-sm bg-[#E8D5C4] px-4 py-1.5 rounded-full inline-block mb-3 border border-[#E8D5C4]">
            Moments On Stage
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#4A1022]">
            Event <span className="text-[#C98F8F]">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-[#C98F8F] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((item, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-2xl border-2 border-[#E8D5C4] bg-[#FFF5EA] h-72 shadow-md">
              <div className="w-full h-full bg-[#E8D5C4]/50 flex items-center justify-center p-6 text-center group-hover:scale-105 transition-transform duration-500">
                <span className="text-[#4A1022] font-semibold text-sm">[ Stage Photo Placeholder ]</span>
              </div>
              <div className="absolute inset-0 bg-[#260812]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-[#FFF5EA]">
                <span className="text-xs font-bold text-[#C98F8F] uppercase tracking-wider mb-1">{item.cat}</span>
                <h3 className="text-lg font-bold text-[#FFF5EA]">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;