import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'My Expertise', href: '#expertise' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f051d]/90 backdrop-blur-lg border-b-4 border-[#ff007f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo (Original style preserved) */}
          <a href="#home" className="logo-text text-xl sm:text-2xl font-extrabold tracking-widest text-[#00f0ff]">
            SHUBHAM ATRE
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-extrabold tracking-wide hover:text-[#ffe600] transition-transform hover:-translate-y-1 inline-block"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/916232091754"
              target="_blank"
              rel="noreferrer"
              className="bg-[#ff007f] hover:bg-[#ffe600] text-[#0f051d] px-6 py-2.5 rounded-2xl font-black text-xs uppercase tracking-wider transition-all border-2 border-white shadow-[4px_4px_0px_#00f0ff] hover:shadow-[2px_2px_0px_#00f0ff] hover:translate-x-0.5 hover:translate-y-0.5"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#00f0ff] focus:outline-none text-3xl font-black"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1c0b36] border-b-4 border-[#ff007f] px-6 pt-4 pb-8 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-xl font-extrabold tracking-wider text-white hover:text-[#ffe600]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/916232091754"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="inline-block bg-[#ff007f] text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider border-2 border-white shadow-[4px_4px_0px_#00f0ff]"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;