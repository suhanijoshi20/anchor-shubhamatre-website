import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Animated Brand Logo & Mic */}
        <a href="#" className="flex items-center gap-3 group">
          
          {/* Mic Icon: Left se Jump karte hue aayega */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotate: -20 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 18,
              delay: 0.1
            }}
            className="p-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-xl group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors"
          >
            <Mic className="w-6 h-6" />
          </motion.div>

          {/* Logo Text: Top se Jump karte hue aayega */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 220,
              damping: 16,
              delay: 0.2
            }}
            className="flex flex-col"
          >
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
              Anchor Shubham Atre
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold -mt-1">
              Celebrity Anchor & Host
            </span>
          </motion.div>

        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
          <a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a>
          <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
        </div>

        {/* Book Now Action Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all shadow-md shadow-amber-500/10"
          >
            Book Event
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-4">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-amber-400 font-medium text-base py-1"
          >
            About
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-amber-400 font-medium text-base py-1"
          >
            Gallery
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-amber-400 font-medium text-base py-1"
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-amber-400 font-medium text-base py-1"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;