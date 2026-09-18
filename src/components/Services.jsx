import React from 'react';
import { Music, Crown, Briefcase, PartyPopper } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Crown className="text-[#C98F8F]" size={36} />,
      title: "Luxury Weddings & Sangeet",
      desc: "Creating magical, high-energy celebrations for destination weddings and sangeet nights."
    },
    {
      icon: <Briefcase className="text-[#C98F8F]" size={36} />,
      title: "Corporate Events & Awards",
      desc: "Polished, engaging, and professional hosting for corporate summits, award functions, and launches."
    },
    {
      icon: <Music className="text-[#C98F8F]" size={36} />,
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
    <section id="services" className="py-24 bg-[#FFF5EA] text-[#260812]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-[#4A1022] font-bold tracking-widest uppercase text-xs sm:text-sm bg-[#E8D5C4] px-4 py-1.5 rounded-full inline-block mb-3 border border-[#E8D5C4]">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#4A1022]">
            Hosting <span className="text-[#C98F8F]">Services</span>
          </h2>
          <div className="w-20 h-1 bg-[#C98F8F] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-[#E8D5C4]/30 border-2 border-[#E8D5C4] rounded-2xl p-8 hover:border-[#D9A6A8] hover:-translate-y-2 transition-all duration-300 shadow-md">
              <div className="p-4 bg-[#FFF5EA] rounded-xl w-fit border border-[#E8D5C4] mb-6">
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold text-[#4A1022] mb-3">{srv.title}</h3>
              <p className="text-[#260812]/80 text-sm leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;