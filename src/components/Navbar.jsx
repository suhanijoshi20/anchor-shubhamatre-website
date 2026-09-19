import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Stylish Mic with 'S' Shaped Wire Badge
const SMicBadge = () => (
  <svg
    viewBox="0 0 44 44"
    width="32"
    height="32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-md"
  >
    {/* Outer Glowing Ring */}
    <circle cx="22" cy="22" r="20" fill="#4A1022" stroke="#C98F8F" strokeWidth="2" />

    {/* Mic Head Grid */}
    <rect x="18" y="8" width="8" height="11" rx="4" fill="#D9A6A8" stroke="#260812" strokeWidth="0.8" />
    <line x1="18" y1="11" x2="26" y2="11" stroke="#260812" strokeWidth="0.8" />
    <line x1="18" y1="14" x2="26" y2="14" stroke="#260812" strokeWidth="0.8" />

    {/* Metallic Center Band */}
    <rect x="17.5" y="18" width="9" height="2" rx="0.5" fill="#FFF5EA" />

    {/* Mic Body Handle */}
    <path d="M19 20L20 27H24L25 20H19Z" fill="#260812" stroke="#C98F8F" strokeWidth="0.5" />

    {/* Cord Base Connector */}
    <rect x="21" y="27" width="2" height="2" fill="#C98F8F" />

    {/* 'S' SHAPED WIRE (Denoting 'S' for Shubham) */}
    <path
      d="M22 29 C27 30, 27 33, 22 34 C17 35, 17 38, 22 39"
      stroke="#FFF5EA"
      strokeWidth="2.2"
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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#260812]/90 backdrop-blur-md shadow-lg py-3 border-b border-[#E8D5C4]/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Name Section */}
          <a href="#home" className="flex items-center gap-3 group">
            
            {/* STEP 2: Left Side se Jump karke aane wala S-Wire Mic Badge */}
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
              <SMicBadge />
            </motion.div>

            {/* STEP 1: Upar se Jump / Bounce karke pehle aane wala Name Text */}
            <motion.span
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 11,
                delay: 0.1
              }}
              className={`text-xl sm:text-2xl font-extrabold tracking-wider ${
                isScrolled ? 'text-[#FFF5EA]' : 'text-[#4A1022]'
              }`}
            >
              ᔕᕼᑌᗷᕼᗩᗰ ᗩTᖇE
            </motion.span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm uppercase tracking-wider font-semibold transition-colors duration-200 ${
                  isScrolled
                    ? 'text-[#FFF5EA] hover:text-[#C98F8F]'
                    : 'text-[#4A1022] hover:text-[#C98F8F]'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <a
              href="https://wa.me/916232091754"
              target="_blank"
              rel="noreferrer"
              className="bg-[#C98F8F] hover:bg-[#D9A6A8] text-[#260812] px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-[#FFF5EA]' : 'text-[#4A1022]'} focus:outline-none`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-[#260812] border-b border-[#E8D5C4]/20 px-4 pt-4 pb-6 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-[#FFF5EA] hover:text-[#C98F8F] text-base font-medium py-2 uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/916232091754"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center bg-[#C98F8F] text-[#260812] py-3 rounded-full font-bold text-sm uppercase tracking-wider mt-4"
          >
            Book Now
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;