import React from 'react';
import { Building2, Heart, Music, Sparkles, Trophy, Mic2 } from 'lucide-react';

const services = [
  {
    icon: <Heart className="text-amber-400" size={32} />,
    title: "Luxury Weddings & Sangeet",
    description: "High-energy sangeet hosting, grand entry execution, and memorable wedding ceremonies with personalized storytelling."
  },
  {
    icon: <Building2 className="text-amber-400" size={32} />,
    title: "Corporate Galas & Summits",
    description: "Professional, crisp, and articulate emceeing for award shows, product launches, brand meets, and annual galas."
  },
  {
    icon: <Music className="text-amber-400" size={32} />,
    title: "Concerts & Live Shows",
    description: "Commanding stage presence for music festivals, college fests, celebrity concerts, and massive public gatherings."
  },
  {
    icon: <Trophy className="text-amber-400" size={32} />,
    title: "Sports & Award Nights",
    description: "Engaging commentary, high-octane stage energy, and smooth transition management for sports leagues and award ceremonies."
  },
  {
    icon: <Sparkles className="text-amber-400" size={32} />,
    title: "Private Parties & Destination Events",
    description: "Tailored crowd interaction and fun interactive games for birthdays, anniversaries, and exclusive private celebrations."
  },
  {
    icon: <Mic2 className="text-amber-400" size={32} />,
    title: "Interactive Game Hosting",
    description: "Keeping the audience hooked with custom ice-breaker games, audience trivia, and engaging stage activities."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-black text-white relative border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Premium <span className="text-amber-400">Services</span>
          </h2>
          <p className="text-gray-400 mt-3 text-lg">Elevating every stage with voice, vibe, and versatility.</p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-2 group shadow-lg"
            >
              <div className="mb-6 p-3 inline-block rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;