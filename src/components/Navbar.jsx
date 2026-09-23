import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const SMicBadgeLarge = () => (
  <svg
    viewBox="0 0 48 48"
    width="44"
    height="44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-md"
  >
    <circle cx="24" cy="24" r="22" fill="#FF007F" stroke="#1E293B" strokeWidth="2" />
    <rect x="19" y="8" width="10" height="13" rx="5" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.5" />
    <line x1="19" y1="11" x2="29" y2="11" stroke="#1E293B" strokeWidth="1.5" />
    <line x1="19" y1="15" x2="29" y2="15" stroke="#1E293B" strokeWidth="1.5" />
    <rect x="18" y="20" width="12" height="3" rx="0.5" fill="#D4AF37" />
    <path d="M20 23L21 30H27L28 23H20Z" fill="#1E293B" stroke="#FF007F" strokeWidth="1" />
    <rect x="22.5" y="30" width="3" height="2.5" fill="#FFFFFF" />
    <path
      d="M24 32.5 C30 33.5, 30 37, 24 38 C18 39, 18 42.5, 24 43.5"
      stroke="#1E293B"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const Navbar = ({ onOpenOffer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'START HERE', href: '#home' },
    { name: 'OFFERS 🔥', href: '#offers' },
    { name: 'ABOUT', href: '#about' },
    { name: 'FUN EXPERTISE', href: '#expertise' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md border-b-4 border-[#FF007F] py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <a href="#home" className="flex items-center gap-3 group">
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="flex items-center justify-center cursor-pointer shrink-0"
            >
              <SMicBadgeLarge />
            </motion.div>

            <span className="text-xl sm:text-2xl font-black font-funky tracking-wider text-[#1E293B]">
              ANCHOR <span className="text-[#FF007F]">SHUBHAM</span> <span className="text-[#D4AF37]">ATRE</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center space-x-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-funky tracking-widest font-black transition-all duration-200 text-[#1E293B] hover:text-[#FF007F] hover:scale-110"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={onOpenOffer}
              className="flex items-center gap-1 bg-gradient-to-r from-[#FF007F] to-[#8B5CF6] text-white px-4 py-2 rounded-full font-funky font-black text-xs uppercase tracking-wider animate-pulse hover:scale-105 transition-all shadow-md"
            >
              <Tag className="w-4 h-4" /> Claim Offer
            </button>
            
            <a
              href="https://wa.me/916232091754"
              target="_blank"
              rel="noreferrer"
              className="bg-[#D4AF37] hover:bg-[#FF007F] text-white px-5 py-2.5 rounded-full font-funky font-black text-xs uppercase tracking-wider transition-all transform hover:scale-105 shadow-md border-2 border-[#1E293B]"
            >
              Book Fun Dates 🎉
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenOffer}
              className="p-2 bg-[#FF007F] text-white rounded-full font-funky font-bold text-xs"
            >
              🔥 Offer
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#FF007F] focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-[#FDFBF7] border-b-4 border-[#FF007F] px-4 pt-4 pb-6 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-[#1E293B] hover:text-[#FF007F] font-funky font-black text-base py-2 tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/916232091754"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center bg-[#FF007F] text-white py-3 rounded-full font-funky font-black text-sm uppercase tracking-wider mt-4"
          >
            Book Fun Dates 🎉
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;