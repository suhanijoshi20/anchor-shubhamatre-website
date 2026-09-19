import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Image style realistic mic SVG component
const RealisticMicIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="currentColor"
    className={className}
  >
    {/* Mic Mesh Head */}
    <path
      d="M12 2C9.79 2 8 3.79 8 6V11C8 13.21 9.79 15 12 15C14.21 15 16 13.21 16 11V6C16 3.79 14.21 2 12 2Z"
      fill="#D9A6A8"
    />
    {/* Mesh Line Details */}
    <path
      d="M8.5 6.5H15.5M8.5 8.5H15.5M9.5 4.5H14.5"
      stroke="#260812"
      strokeWidth="0.6"
      strokeLinecap="round"
    />
    {/* Metallic Ring */}
    <rect x="7.8" y="10.2" width="8.4" height="1.8" rx="0.5" fill="#FFF5EA" />
    {/* Mic Handle */}
    <path
      d="M9.5 12L10.5 20H13.5L14.5 12H9.5Z"
      fill="#4A1022"
    />
    {/* Bottom Cord Base */}
    <path
      d="M11 20H13V22C13 22.5 12.5 23 12 23C11.5 23 11 22.5 11 22V20Z"
      fill="#C98F8F"
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
          <a href="#home" className="flex items-center gap-2.5 group">
            
            {/* STEP 2: Left Side se Jump / Slide karke aane wala Realistic Mic Logo */}
            <motion.div
              initial={{ x: -60, opacity: 0, scale: 0.5, rotate: -25 }}
              animate={{ x: 0, opacity: 1, scale: [1, 1.2, 1], rotate: -12 }}
              transition={{
                x: { type: 'spring', stiffness: 140, damping: 10, delay: 0.5 },
                scale: { duration: 0.6, repeat: Infinity, repeatDelay: 3.5, ease: 'easeInOut' },
                opacity: { duration: 0.3 }
              }}
              whileHover={{ rotate: 0, scale: 1.25 }}
              className="p-2 rounded-xl bg-gradient-to-br from-[#4A1022] to-[#260812] shadow-lg border border-[#C98F8F]/50 flex items-center justify-center cursor-pointer"
            >
              <RealisticMicIcon />
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