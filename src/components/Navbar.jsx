import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Funky Neon Mic Badge SVG
const SMicBadgeLarge = () => (
  <svg
    viewBox="0 0 48 48"
    width="44"
    height="44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-[0_0_12px_rgba(255,0,127,0.9)]"
  >
    <circle cx="24" cy="24" r="22" fill="#FF007F" stroke="#CCFF00" strokeWidth="2.5" />
    <rect x="19" y="8" width="10" height="13" rx="5" fill="#00E5FF" stroke="#0F0C20" strokeWidth="1.5" />
    <line x1="19" y1="11" x2="29" y2="11" stroke="#0F0C20" strokeWidth="1.5" />
    <line x1="19" y1="15" x2="29" y2="15" stroke="#0F0C20" strokeWidth="1.5" />
    <rect x="18" y="20" width="12" height="3" rx="0.5" fill="#FFB800" />
    <path d="M20 23L21 30H27L28 23H20Z" fill="#0F0C20" stroke="#CCFF00" strokeWidth="1" />
    <rect x="22.5" y="30" width="3" height="2.5" fill="#CCFF00" />
    <path
      d="M24 32.5 C30 33.5, 30 37, 24 38 C18 39, 18 42.5, 24 43.5"
      stroke="#CCFF00"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Standard English text so Google Font can style it properly
  const navLinks = [
    { name: 'START HERE', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'MY EXPERTISE', href: '#expertise' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F0C20]/95 backdrop-blur-md shadow-[0_4px_25px_rgba(255,0,127,0.4)] py-3 border-b-2 border-[#FF007F]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Name Section */}
          <a href="#home" className="flex items-center gap-3 group">
            <motion.div
              initial={{ x: -60, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: [1, 1.2, 1] }}
              transition={{
                x: { type: 'spring', stiffness: 140, damping: 10, delay: 0.5 },
                scale: { duration: 0.6, repeat: Infinity, repeatDelay: 3.5, ease: 'easeInOut' },
                opacity: { duration: 0.3 }
              }}
              whileHover={{ rotate: 12, scale: 1.15 }}
              className="flex items-center justify-center cursor-pointer shrink-0"
            >
              <SMicBadgeLarge />
            </motion.div>

            <motion.span
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 11,
                delay: 0.1
              }}
              className="text-xl sm:text-2xl font-black font-funky tracking-wider text-[#CCFF00] drop-shadow-[0_2px_10px_rgba(204,255,0,0.5)]"
            >
              ANCHOR SHUBHAM ATRE
            </motion.span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-funky tracking-widest font-bold transition-all duration-200 text-[#FFFFFF] hover:text-[#00E5FF] hover:scale-110"
              >
                {link.name}
              </a>
            ))}
            
            <a
              href="https://wa.me/916232091754"
              target="_blank"
              rel="noreferrer"
              className="bg-[#FF007F] hover:bg-[#CCFF00] text-[#0F0C20] hover:text-[#0F0C20] px-5 py-2.5 rounded-full font-funky font-black text-xs uppercase tracking-wider transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(255,0,127,0.8)]"
            >
              Reserve your golden dates
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#CCFF00] focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-[#0F0C20] border-b-2 border-[#FF007F] px-4 pt-4 pb-6 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-[#FFFFFF] hover:text-[#00E5FF] font-funky font-bold text-base py-2 tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/916232091754"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center bg-[#FF007F] text-[#0F0C20] py-3 rounded-full font-funky font-black text-sm uppercase tracking-wider mt-4"
          >
            Reserve your golden dates
          </a>
        </motion.div>
      )}
   </nav>
  );
};

export default Navbar;