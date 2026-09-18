import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md text-white z-50 border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
          SHUBHAM ATRE
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
          <a href="#home" className="hover:text-amber-400 transition-colors">HOME</a>
          <a href="#about" className="hover:text-amber-400 transition-colors">ABOUT</a>
          <a href="#services" className="hover:text-amber-400 transition-colors">SERVICES</a>
          <a href="#gallery" className="hover:text-amber-400 transition-colors">GALLERY</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">CONTACT</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a 
            href="https://wa.me/91XXXXXXXXXX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold px-5 py-2.5 rounded-full hover:scale-105 transition-transform duration-200 shadow-lg shadow-amber-500/20"
          >
            <PhoneCall size={18} />
            <span>BOOK NOW</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-amber-400 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-amber-500/20 px-4 pt-2 pb-6 space-y-4 text-center font-medium">
          <a href="#home" onClick={() => setIsOpen(false)} className="block py-2 hover:text-amber-400">HOME</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 hover:text-amber-400">ABOUT</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block py-2 hover:text-amber-400">SERVICES</a>
          <a href="#gallery" onClick={() => setIsOpen(false)} className="block py-2 hover:text-amber-400">GALLERY</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 hover:text-amber-400">CONTACT</a>
          <a 
            href="https://wa.me/91XXXXXXXXXX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-amber-500 text-black font-bold w-full py-3 rounded-full mt-2"
          >
            <PhoneCall size={18} />
            <span>BOOK NOW</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;