import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Sparkles, Gift, CheckCircle } from 'lucide-react';

const Offers = ({ onOpenOffer }) => {
  const offersList = [
    {
      title: "Wedding Sangeet Bonanza 🎉",
      discount: "FLAT 20% OFF",
      desc: "Complete Sangeet Hosting + Crazy Family Games + Custom Scripting included!",
      badge: "POPULAR"
    },
    {
      title: "Haldi & Mehendi Fun Package 💛",
      discount: "SPECIAL COMBO DEAL",
      desc: "Interactive games, funny couple challenges, and lively crowd engagement for pre-weddings.",
      badge: "HOT DEAL"
    },
    {
      title: "Early Bird Booking Offer 🚀",
      discount: "SAVE ₹5000",
      desc: "Book 30 days prior to your event date and unlock complimentary surprise game prizes!",
      badge: "LIMITED"
    }
  ];

  return (
    <section id="offers" className="py-20 bg-gradient-to-r from-[#FFE4E6] via-[#FEF3C7] to-[#E0E7FF] text-[#1E293B] relative border-t-4 border-[#FF007F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FF007F] text-white px-4 py-1.5 rounded-full font-funky font-black text-xs uppercase mb-3 shadow-md">
            <Gift className="w-4 h-4" /> Limited Season Deals
          </div>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black font-funky text-[#1E293B]"
          >
            LIMITED TIME <span className="text-[#FF007F]">SPECIAL OFFERS!</span> 🔥
          </motion.h2>
          <p className="text-[#475569] mt-2 font-bold text-base sm:text-lg">
            Grab exclusive packages with fun-filled extras for your event!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offersList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white border-4 border-[#1E293B] rounded-3xl p-6 shadow-xl relative hover:scale-105 transition-all flex flex-col justify-between"
            >
              <span className="absolute -top-4 right-6 bg-[#D4AF37] text-[#1E293B] font-black font-funky text-xs px-3 py-1 rounded-full border-2 border-[#1E293B] shadow-md">
                {item.badge}
              </span>

              <div>
                <h3 className="text-2xl font-black font-funky text-[#1E293B] mb-2">{item.title}</h3>
                <div className="text-3xl font-black font-funky text-[#FF007F] mb-4 bg-[#FFE4E6] p-2 rounded-2xl text-center border-2 border-[#FF007F]">
                  {item.discount}
                </div>
                <p className="text-[#475569] font-medium text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <button
                onClick={onOpenOffer}
                className="w-full bg-[#1E293B] hover:bg-[#FF007F] text-white font-funky font-black py-3 rounded-2xl uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Tag className="w-4 h-4" /> Claim This Offer
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Offers;