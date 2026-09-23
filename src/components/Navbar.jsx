import React, { useState, useEffect } from 'react';
import { Menu, X, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
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
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERTISE', href: '#expertise' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-[#D4AF37]/20 py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#FFBF00] flex items-center justify-center shadow-lg shadow-[#D4AF37]/20">
              <Mic className="w-5 h-5 text-[#0B0F19]" />
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              SHUBHAM <span className="text-[#D4AF37]">ATRE</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold tracking-widest text-gray-300 hover:text-[#D4AF37] transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <a
              href="https://wa.me/916232091754"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-[#FFBF00] hover:to-[#D4AF37] text-[#0B0F19] px-6 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-[#D4AF37]/20 hover:scale-105"
            >
              Book Now
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#D4AF37] focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F19] border-b border-[#D4AF37]/20 px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-[#D4AF37] font-semibold text-sm py-2 tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/916232091754"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center bg-[#D4AF37] text-[#0B0F19] py-3 rounded-full font-bold text-sm uppercase tracking-wider mt-4"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;