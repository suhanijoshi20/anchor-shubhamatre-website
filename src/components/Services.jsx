import React from 'react';
import { Sparkles, Music, Crown, Briefcase, PartyPopper } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Crown className="text-[#C98F8F]" size={36} />,
      title: "Luxury Weddings & Sangeet",
      desc: "Creating magical, high-energy celebrations for destination weddings and sangeet nights."
    },
    {
      icon: <Briefcase className="text-[#D9A6A8]" size={36} />,
      title: "Corporate Events & Awards",
      desc: "Polished, engaging, and professional hosting for corporate summits, award functions, and launches."
    },
    {
      icon: <Music className="text-[#E8D5C4]" size={36} />,
      title: "Concerts & Live Shows",
      desc: "Managing huge stadium crowds with unmatched vocal energy and seamless artist cues."
    },
    {
      icon: <PartyPopper className="text-[#C98F8F]" size={36} />,
      title: "Private & Glamour Parties",
      desc: "Custom interactive games, theme hosting, and exclusive VIP entertainment."
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#260812] text-[#FFF5EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-[#D9A6A8] font-bold tracking-widest uppercase text-xs sm:text-sm bg-[#4A1022] border border-[#C98F8F]/30 px-4 py-1.5 rounded-full inline-block mb-3">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FFF5EA]">
            Hosting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C98F8F] via-[#D9A6A8] to-[#E8D5C4]">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C98F8F] to-[#D9A6A8] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-gradient-to-b from-[#4A1022] to-[#260812] border border-[#C98F8F]/30 rounded-2xl p-8 hover:border-[#C98F8F] hover:-translate-y-2 transition-all duration-300 shadow-xl group">
              <div className="p-4 bg-[#260812] rounded-xl w-fit border border-[#C98F8F]/20 mb-6 group-hover:border-[#C98F8F] transition-colors">
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold text-[#FFF5EA] mb-3">{srv.title}</h3>
              <p className="text-[#E8D5C4] text-sm leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;