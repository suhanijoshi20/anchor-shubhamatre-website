import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Gamepad2, Flame } from 'lucide-react';

const expertiseData = [
  {
    id: 1,
    title: 'Luxury Weddings & Sangeet Battles',
    image: '/image/Image1.jpeg',
    description:
      'Elevating royal wedding celebrations and high-energy sangeet nights with dance face-offs, funny family awards, and non-stop stage energy.',
    badge: 'PARTY MODE'
  },
  {
    id: 2,
    title: 'Haldi, Mehendi & Crazy Stage Games',
    image: '/image/image4.jpeg',
    description:
      'Specialized fun games for Haldi & Mehendi! Featuring couple compatibility quizzes, bride vs groom squad challenges, flower shower games, and funny family banter to make pre-wedding events super interactive.',
    badge: 'MOST POPULAR 💛'
  },
  {
    id: 3,
    title: 'Corporate Galas & Fun Awards',
    image: '/image/image2.jpeg',
    description:
      'Bringing professional sophistication mixed with witty ice-breaker games, team challenges, and lively crowd interaction to corporate summits.',
    badge: 'CLASSY & FUN'
  },
  {
    id: 4,
    title: 'Celebrity & Concert Hosting',
    image: '/image/image3.jpeg',
    description:
      'Commanding large arena audiences with high voltage energy, seamless celebrity intros, and unmatched stage presence for mega live concerts.',
    badge: 'ARENA ENERGY'
  },
  {
    id: 5,
    title: 'Private Parties & Ring Ceremony Fun',
    image: '/image/Image1.jpeg',
    description:
      'Creating vibrant social vibes, engaging interactive games, and non-stop entertainment customized for exclusive private celebrations.',
    badge: 'EXCLUSIVE VIBES'
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 bg-[#FDFBF7] text-[#1E293B] overflow-hidden relative border-t-4 border-[#1E293B]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black font-funky text-[#1E293B]"
          >
            MY <span className="text-[#FF007F]">FUN EXPERTISE</span> 🎯
          </motion.h2>
          <p className="text-[#475569] mt-3 font-bold tracking-wide text-base sm:text-lg">
            Turning Every Single Stage Into An Unforgettable Fun Festival
          </p>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {expertiseData.map((item, index) => (
            <div
              key={item.id}
              className="bg-white border-4 border-[#1E293B] rounded-3xl p-6 sm:p-8 shadow-xl hover:border-[#FF007F] transition-all duration-300 relative"
            >
              <div className="mb-6 border-b-2 border-[#1E293B]/20 pb-4 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-4xl font-black font-funky text-[#1E293B]">
                    {item.title}
                  </h3>
                </div>
                <span className="text-white font-black font-funky text-xs bg-[#FF007F] px-4 py-1.5 rounded-full border-2 border-[#1E293B] shadow-sm">
                  {item.badge}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                
                <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-2 border-[#1E293B] group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-6">
                  <p className="text-[#475569] text-base sm:text-lg leading-relaxed font-semibold">
                    {item.description}
                  </p>

                  <div className="pt-2">
                    <a
                      href="https://wa.me/916232091754"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block bg-[#D4AF37] hover:bg-[#FF007F] text-white px-7 py-3 rounded-full font-funky font-black text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105 border-2 border-[#1E293B]"
                    >
                      Book Fun Games For This Event 🎉
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Expertise;