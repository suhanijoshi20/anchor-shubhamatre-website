import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Big & Bold Mic Badge with 'S' Shaped Wire
const SMicBadgeLarge = () => (
  <svg
    viewBox="0 0 48 48"
    width="42"
    height="42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-lg"
  >
    {/* Outer Big Circle Background */}
    <circle cx="24" cy="24" r="22" fill="#4A1022" stroke="#C98F8F" strokeWidth="2.5" />

    {/* Big Mic Metallic Grid */}
    <rect x="19" y="8" width="10" height="13" rx="5" fill="#D9A6A8" stroke="#260812" strokeWidth="1" />
    <line x1="19" y1="11" x2="29" y2="11" stroke="#260812" strokeWidth="1" />
    <line x1="19" y1="15" x2="29" y2="15" stroke="#260812" strokeWidth="1" />

    {/* Bright Metallic Middle Ring */}
    <rect x="18" y="20" width="12" height="2.5" rx="0.5" fill="#FFF5EA" />

    {/* Mic Body Handle */}
    <path d="M20 22.5L21 30H27L28 22.5H20Z" fill="#260812" stroke="#C98F8F" strokeWidth="0.8" />

    {/* Cord Connector */}
    <rect x="22.5" y="30" width="3" height="2.5" fill="#C98F8F" />

    {/* Bold 'S' SHAPED WIRE */}
    <path
      d="M24 32.5 C30 33.5, 30 37, 24 38 C18 39, 18 42.5, 24 43.5"
      stroke="#FFF5EA"
      strokeWidth="2.8"
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

  // Custom font navigation items
  const navLinks = [
    { name: 'ᔕTᗩᖇT ᕼEᖇE', href: '#home' },
    { name: 'ᗩᗷOᑌT', href: '#about' },
    { name: 'ᗰY E᙭ᑭEᖇTIᔕE', href: '#expertise' },
    { name: 'ᗴᗩᒪᒪEᖇY', href: '#gallery' },
    { name: 'ᑕOᑎTᗩᑕT', href: '#contact' },
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
            
            {/* STEP 2: Left Side se Jump karke aane wala Bada Mic Logo */}
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
              ᗩᑎᑕᕼOᖇ ᔕᕼᑌᗷᕼᗩᗰ ᗩTᖇE
            </motion.span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs sm:text-sm tracking-wider font-semibold transition-colors duration-200 ${
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
              className="bg-[#C98F8F] hover:bg-[#D9A6A8] text-[#260812] px-5 py-2.5 rounded-full font-bold text-xs tracking-wider transition-all shadow-md"
            >
              Reserve your golden dates
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
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
          className="lg:hidden bg-[#260812] border-b border-[#E8D5C4]/20 px-4 pt-4 pb-6 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-[#FFF5EA] hover:text-[#C98F8F] text-base font-medium py-2 tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/916232091754"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center bg-[#C98F8F] text-[#260812] py-3 rounded-full font-bold text-sm tracking-wider mt-4"
          >
            Reserve your golden dates
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;