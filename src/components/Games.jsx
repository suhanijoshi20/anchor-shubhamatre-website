import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Sparkles, Heart, Flame, Users, Trophy, ChevronRight } from 'lucide-react';

const Games = ({ onOpenOffer }) => {
  const [activeTab, setActiveTab] = useState('sangeet');

  const categories = [
    { id: 'sangeet', label: 'Wedding & Sangeet', icon: <Heart className="w-4 h-4" /> },
    { id: 'haldi', label: 'Haldi & Mehendi Fun', icon: <Flame className="w-4 h-4" /> },
    { id: 'corporate', label: 'Corporate & Icebreakers', icon: <Users className="w-4 h-4" /> },
  ];

  const gamesData = {
    sangeet: [
      {
        title: "Bride vs. Groom Family Showdown ⚔️",
        desc: "A hilarious battle of wits, dance steps, and funny family secret trivia where the audience votes the winners!",
        players: "Both Families",
        vibe: "High Voltage Fun",
        tag: "MUST HAVE"
      },
      {
        title: "The Shoe Game (Crazy Twist) 👠👞",
        desc: "The classic couple shoe game boosted with funny rapid-fire audio triggers and audience polling.",
        players: "Bride & Groom",
        vibe: "Romantic & Funny",
        tag: "FAN FAVORITE"
      },
      {
        title: "Bollywood Hook Step Relay 💃",
        desc: "Passing funny dance hook-steps down a line of uncles, aunts, and cousins with live beats!",
        players: "Open for All",
        vibe: "Pure Madness",
        tag: "CROWD BOOSTER"
      }
    ],
    haldi: [
      {
        title: "Tug-of-War: Yellow Edition 💛",
        desc: "High-octane Haldi team rivalry with funny commentary, energetic cheering, and surprise twists.",
        players: "Team Ladkewale vs Ladkiwale",
        vibe: "Super Energetic",
        tag: "CLASSIC"
      },
      {
        title: "Water Balloon Target Challenge 🎈",
        desc: "A messy, laughter-filled challenge on stage involving groomsmen and bridesmaids aiming for prizes.",
        players: "Friends & Cousins",
        vibe: "Crazy & Wild",
        tag: "POPULAR"
      },
      {
        title: "Couple Haldi Challenge 💑",
        desc: "Hilarious blindfold tasks and romantic mini-challenges designed for picture-perfect Haldi moments.",
        players: "Bride & Groom",
        vibe: "Sweet & Funny",
        tag: "SPECIAL"
      }
    ],
    corporate: [
      {
        title: "Speed Networking Bingo ⚡",
        desc: "Break the ice instantly! Employees find colleagues matching secret hilarious attributes within 3 minutes.",
        players: "Entire Audience",
        vibe: "Interactive",
        tag: "ICEBREAKER"
      },
      {
        title: "The Ultimate Boss Roast Trivia 🎤",
        desc: "Lighthearted, respectful, and funny trivia quiz about company culture and leadership quirks.",
        players: "Teams / Departments",
        vibe: "Witty & Fun",
        tag: "HIGH ENGAGEMENT"
      },
      {
        title: "Minute-to-Win-It Extravaganza ⏱️",
        desc: "Fast-paced physical & mental mini-challenges live on stage with real-time leaderboard scores.",
        players: "Selected Volunteers",
        vibe: "Competitive",
        tag: "NON-STOP"
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="games" className="py-24 bg-[#FEF3C7]/40 text-[#1E293B] relative overflow-hidden border-t-4 border-[#1E293B]">
      
      {/* Background Floating Glows */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF007F]/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#FF007F]/10 text-[#FF007F] px-4 py-1.5 rounded-full font-funky font-black text-xs uppercase mb-3 border border-[#FF007F]/20"
          >
            <Gamepad2 className="w-4 h-4" /> Non-Stop Crowd Engagement
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black font-funky text-[#1E293B]"
          >
            CRAZY <span className="text-[#FF007F]">STAGE GAMES</span> 🎮
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#475569] mt-3 font-bold text-base sm:text-lg max-w-2xl mx-auto"
          >
            Custom-designed interactive games that turn passive spectators into active, dancing participants!
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-funky font-black text-sm uppercase transition-all duration-300 border-2 ${
                activeTab === cat.id
                  ? 'bg-[#1E293B] text-white border-[#1E293B] shadow-lg scale-105'
                  : 'bg-white text-[#1E293B] border-[#1E293B]/20 hover:border-[#FF007F]'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tab Content with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {gamesData[activeTab].map((game, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="bg-white border-4 border-[#1E293B] rounded-3xl p-6 relative shadow-lg flex flex-col justify-between hover:border-[#FF007F] transition-all duration-300"
              >
                {/* Badge */}
                <span className="absolute -top-3 right-6 bg-[#D4AF37] text-[#1E293B] font-black font-funky text-[10px] px-3 py-1 rounded-full border-2 border-[#1E293B] shadow-sm">
                  {game.tag}
                </span>

                <div>
                  <h3 className="text-xl font-black font-funky text-[#1E293B] mb-3 leading-snug">
                    {game.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#64748B] mb-6 leading-relaxed">
                    {game.desc}
                  </p>
                </div>

                {/* Metadata Footer */}
                <div className="space-y-3 pt-4 border-t-2 border-[#1E293B]/10">
                  <div className="flex items-center justify-between text-xs font-bold text-[#475569]">
                    <span>👥 Target:</span>
                    <span className="text-[#1E293B] font-black">{game.players}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-[#475569]">
                    <span>🔥 Energy Vibe:</span>
                    <span className="text-[#FF007F] font-black">{game.vibe}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-[#1E293B] text-white rounded-3xl p-8 border-4 border-[#FF007F] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#D4AF37] font-black font-funky text-xs uppercase mb-2">
              <Sparkles className="w-4 h-4" /> Customized Scripting Available
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-funky text-white">
              Want Custom Games Designed For Your Event? 🎯
            </h3>
            <p className="text-slate-300 font-medium text-sm mt-1">
              Shubham designs personalized family trivia and couple showdowns tailored to your story!
            </p>
          </div>

          <button
            onClick={onOpenOffer}
            className="whitespace-nowrap bg-[#FF007F] hover:bg-[#D4AF37] text-white hover:text-[#1E293B] font-funky font-black px-8 py-4 rounded-2xl uppercase tracking-wider transition-all duration-300 shadow-xl border-2 border-white flex items-center gap-2"
          >
            Claim Custom Games <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Games;