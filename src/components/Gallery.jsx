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
    <section id="gallery" className="py-24 bg-gradient-to-b from-[#260812] via-[#4A1022] to-[#260812] text-[#FFF5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-[#D9A6A8] font-bold tracking-widest uppercase text-xs sm:text-sm bg-[#260812] border border-[#C98F8F]/30 px-4 py-1.5 rounded-full inline-block mb-3">
            Moments On Stage
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FFF5EA]">
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C98F8F] to-[#E8D5C4]">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C98F8F] to-[#D9A6A8] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((item, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-2xl border border-[#C98F8F]/30 bg-[#260812] h-72">
              <div className="w-full h-full bg-gradient-to-tr from-[#260812] via-[#4A1022] to-[#C98F8F]/20 flex items-center justify-center p-6 text-center group-hover:scale-105 transition-transform duration-500">
                <span className="text-[#D9A6A8] font-semibold text-sm">[ Stage Photo Placeholder ]</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#260812] via-[#260812]/70 to-transparent opacity-90 p-6 flex flex-col justify-end">
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