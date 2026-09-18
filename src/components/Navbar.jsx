import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#260812] text-[#FFF5EA] border-b border-[#E8D5C4]/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex-shrink-0">
            <a href="#" className="text-xl sm:text-2xl font-extrabold tracking-wider text-[#FFF5EA]">
              SHUBHAM <span className="text-[#C98F8F]">ATRE</span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-[#FFF5EA] hover:text-[#D9A6A8] px-3 py-2 text-sm font-medium transition-colors">Home</a>
              <a href="#about" className="text-[#FFF5EA] hover:text-[#D9A6A8] px-3 py-2 text-sm font-medium transition-colors">About</a>
              <a href="#services" className="text-[#FFF5EA] hover:text-[#D9A6A8] px-3 py-2 text-sm font-medium transition-colors">Services</a>
              <a href="#gallery" className="text-[#FFF5EA] hover:text-[#D9A6A8] px-3 py-2 text-sm font-medium transition-colors">Gallery</a>
              <a href="#contact" className="bg-[#4A1022] hover:bg-[#C98F8F] text-[#FFF5EA] font-bold px-5 py-2.5 rounded-full text-sm transition-all duration-200 shadow-md">Book Now</a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#FFF5EA] hover:text-[#D9A6A8] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#260812] border-b border-[#E8D5C4]/20 px-2 pt-2 pb-4 space-y-1 sm:px-3">
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-[#FFF5EA] hover:text-[#D9A6A8] px-3 py-2 text-base font-medium">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-[#FFF5EA] hover:text-[#D9A6A8] px-3 py-2 text-base font-medium">About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block text-[#FFF5EA] hover:text-[#D9A6A8] px-3 py-2 text-base font-medium">Services</a>
          <a href="#gallery" onClick={() => setIsOpen(false)} className="block text-[#FFF5EA] hover:text-[#D9A6A8] px-3 py-2 text-base font-medium">Gallery</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-center bg-[#4A1022] hover:bg-[#C98F8F] text-[#FFF5EA] font-bold px-5 py-2.5 rounded-full text-base mt-2">Book Now</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;