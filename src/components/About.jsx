import React from 'react';
import { Award, Users, Mic, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#E8D5C4]/30 text-[#260812]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-[#4A1022] font-bold tracking-widest uppercase text-xs sm:text-sm bg-[#E8D5C4] px-4 py-1.5 rounded-full inline-block mb-3 border border-[#E8D5C4]">
            Get To Know Me
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#4A1022]">
            About <span className="text-[#C98F8F]">Anchor Shubham</span>
          </h2>
          <div className="w-20 h-1 bg-[#C98F8F] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="bg-[#FFF5EA] border-2 border-[#E8D5C4] p-8 rounded-2xl shadow-md">
            <p className="text-[#260812] text-lg leading-relaxed mb-6 font-medium">
              Welcome to the world of captivating stage presence! With over 5+ years of emceeing experience, I bring unparalleled energy, charisma, and elegance to every event.
            </p>
            <p className="text-[#260812]/80 leading-relaxed mb-8">
              From high-octane corporate galas and luxury celebrity sangeets to large-scale musical concerts, my goal is to keep audiences hooked, engaged, and entertained throughout.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E8D5C4]">
              <div className="flex items-center gap-3">
                <Star className="text-[#C98F8F]" size={20} />
                <span className="text-sm font-bold text-[#4A1022]">Versatile Anchor</span>
              </div>
              <div className="flex items-center gap-3">
                <Mic className="text-[#C98F8F]" size={20} />
                <span className="text-sm font-bold text-[#4A1022]">High Energy Host</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#FFF5EA] border border-[#E8D5C4] p-6 rounded-xl hover:border-[#D9A6A8] transition-all shadow-sm">
              <Award className="text-[#C98F8F] mb-4" size={32} />
              <h3 className="text-xl font-bold text-[#4A1022] mb-2">Corporate Galas</h3>
              <p className="text-[#260812]/80 text-sm">Professional hosting for awards nights, product launches, and brand summits.</p>
            </div>

            <div className="bg-[#FFF5EA] border border-[#E8D5C4] p-6 rounded-xl hover:border-[#D9A6A8] transition-all shadow-sm">
              <Users className="text-[#C98F8F] mb-4" size={32} />
              <h3 className="text-xl font-bold text-[#4A1022] mb-2">Wedding Sangeet</h3>
              <p className="text-[#260812]/80 text-sm">Interactive game setups, family dance cues, and lively crowd entertainment.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;