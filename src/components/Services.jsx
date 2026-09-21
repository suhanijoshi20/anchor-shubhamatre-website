import React from 'react';
import { motion } from 'framer-motion';

const expertiseData = [
  {
    id: 1,
    title: 'Luxury Weddings & Sangeet',
    image: '/image/Image1.jpeg',
    description:
      'Elevating royal wedding celebrations and high-energy sangeet nights with flawless stage timing, interactive guest engagement, and memorable hosting.',
  },
  {
    id: 2,
    title: 'Corporate Galas & Awards',
    image: '/image/image2.jpeg',
    description:
      'Bringing professional sophistication, crisp presentation, and lively crowd interaction to corporate award shows, product launches, and summits.',
  },
  {
    id: 3,
    title: 'Celebrity & Concert Hosting',
    image: '/image/image3.jpeg',
    description:
      'Commanding large arena audiences with high voltage energy, seamless celebrity intros, and unmatched stage presence for mega live concerts.',
  },
  {
    id: 4,
    title: 'Haldi, Mehendi & Ring Ceremony',
    image: '/image/image4.jpeg',
    description:
      'Adding traditional charm, joyful games, and warm family bonding moments to make pre-wedding ceremonies intimately special.',
  },
  {
    id: 5,
    title: 'Private Parties & Cultural Nights',
    image: '/image/Image1.jpeg',
    description:
      'Creating vibrant social vibes, engaging ice-breakers, and non-stop entertainment customized for exclusive private celebrations.',
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 bg-[#260812] text-[#FFF5EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Main Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-wider text-[#C98F8F]"
          >
            ᗰY E᙭ᑭEᖇTIᔕE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#E8D5C4] mt-3 tracking-wide text-sm sm:text-base"
          >
            Crafting Unforgettable Experiences Across Diverse Stages
          </motion.p>
        </div>

        {/* 5 Blocks Container */}
        <div className="space-y-16 lg:space-y-20">
          {expertiseData.map((item, index) => (
            <div
              key={item.id}
              className="bg-[#3B0C1B]/50 border border-[#C98F8F]/20 rounded-3xl p-6 sm:p-8 backdrop-blur-sm"
            >
              {/* 1. TOP: Jump from Top for Topic */}
              <motion.div
                initial={{ y: -60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 120,
                  damping: 14,
                  delay: 0.1,
                }}
                className="mb-6 border-b border-[#C98F8F]/20 pb-4 flex items-center justify-between flex-wrap gap-2"
              >
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFF5EA] tracking-wide">
                  {item.title}
                </h3>
                <span className="text-[#C98F8F] font-bold text-lg">0{index + 1}</span>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                
                {/* 2. LEFT: Jump from Left for Image with Black & White to Color Transition */}
                <motion.div
                  initial={{ x: -120, opacity: 0, filter: 'grayscale(100%)' }}
                  whileInView={{ x: 0, opacity: 1, filter: 'grayscale(0%)' }}
                  viewport={{ once: true }}
                  transition={{
                    x: { type: 'spring', stiffness: 100, damping: 14, delay: 0.35 },
                    opacity: { duration: 0.5, delay: 0.35 },
                    filter: { duration: 1.5, delay: 0.7, ease: 'easeInOut' },
                  }}
                  className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-[#C98F8F]/30 group"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>

                {/* 3. RIGHT: Jump from Right for Content */}
                <motion.div
                  initial={{ x: 120, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 14,
                    delay: 0.6,
                  }}
                  className="space-y-4"
                >
                  <p className="text-[#E8D5C4] text-base sm:text-lg leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2">
                    <a
                      href="https://wa.me/916232091754"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block bg-[#C98F8F] hover:bg-[#D9A6A8] text-[#260812] px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105"
                    >
                      Book For This Event
                    </a>
                  </div>
                </motion.div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Expertise;