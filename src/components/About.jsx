import React from 'react';
import { Award, Users, Mic, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#260812] via-[#4A1022] to-[#260812] text-[#FFF5EA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-[#D9A6A8] font-bold tracking-widest uppercase text-xs sm:text-sm bg-[#4A1022]/80 border border-[#C98F8F]/30 px-4 py-1.5 rounded-full inline-block mb-3">
            Get To Know Me
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FFF5EA]">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C98F8F] to-[#E8D5C4]">Anchor Shubham</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C98F8F] to-[#D9A6A8] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#C98F8F] via-[#D9A6A8] to-[#4A1022] opacity-40 blur-lg"></div>
            <div className="relative bg-[#260812] border border-[#C98F8F]/30 p-8 rounded-2xl shadow-2xl">
              <p className="text-[#E8D5C4] text-lg leading-relaxed mb-6">
                Welcome to the world of captivating stage presence! With over 5+ years of emceeing experience, I bring unparalleled energy, charisma, and elegance to every event.
              </p>
              <p className="text-[#FFF5EA]/80 leading-relaxed mb-8">
                From high-octane corporate galas and luxury celebrity sangeets to large-scale musical concerts, my goal is to keep audiences hooked, engaged, and entertained throughout.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#C98F8F]/20">
                <div className="flex items-center gap-3">
                  <Star className="text-[#C98F8F]" size={20} />
                  <span className="text-sm font-semibold text-[#E8D5C4]">Versatile Anchor</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mic className="text-[#D9A6A8]" size={20} />
                  <span className="text-sm font-semibold text-[#E8D5C4]">High Energy Host</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#4A1022]/60 border border-[#C98F8F]/30 p-6 rounded-xl hover:border-[#C98F8F] transition-all">
              <Award className="text-[#C98F8F] mb-4" size={32} />
              <h3 className="text-xl font-bold text-[#FFF5EA] mb-2">Corporate Galas</h3>
              <p className="text-[#E8D5C4] text-sm">Professional hosting for awards nights, product launches, and brand summits.</p>
            </div>

            <div className="bg-[#4A1022]/60 border border-[#C98F8F]/30 p-6 rounded-xl hover:border-[#C98F8F] transition-all">
              <Users className="text-[#D9A6A8] mb-4" size={32} />
              <h3 className="text-xl font-bold text-[#FFF5EA] mb-2">Wedding Sangeet</h3>
              <p className="text-[#E8D5C4] text-sm">Interactive game setups, family dance cues, and lively crowd entertainment.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;