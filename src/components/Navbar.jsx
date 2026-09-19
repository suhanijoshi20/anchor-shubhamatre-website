import React, { useState, useEffect } from 'react';
import { Menu, X, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

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
          
          {/* Logo / Name Section with Left Jump Mic Animation */}
          <a href="#home" className="flex items-center gap-2 group">
            
            {/* Left se Jump karke aane wala Mic Logo */}
            <motion.div
              initial={{ x: -50, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: [1, 1.25, 1] }}
              transition={{
                x: { type: 'spring', stiffness: 120, damping: 10, delay: 0.3 },
                scale: { duration: 0.6, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' },
                opacity: { duration: 0.4 }
              }}
              whileHover={{ rotate: -15, scale: 1.2 }}
              className="p-1.5 rounded-full bg-[#4A1022] text-[#C98F8F] shadow-md border border-[#C98F8F]/40 flex items-center justify-center cursor-pointer"
            >
              <Mic size={18} className="text-[#C98F8F]" />
            </motion.div>

            <span className={`text-xl sm:text-2xl font-extrabold tracking-wider ${isScrolled ? 'text-[#FFF5EA]' : 'text-[#4A1022]'}`}>
              SHUBHAM ATRE
            </span>
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