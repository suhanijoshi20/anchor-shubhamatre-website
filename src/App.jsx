import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Offers from './components/Offers';
import About from './components/About';
import Expertise from './components/Expertise';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import OfferModal from './components/OfferModal';

function App() {
  const [isOfferOpen, setIsOfferOpen] = useState(false);

  // Auto trigger pop-up after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOfferOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#FDFBF7] text-[#1E293B] min-h-screen font-sans">
      <Navbar onOpenOffer={() => setIsOfferOpen(true)} />
      <Hero onOpenOffer={() => setIsOfferOpen(true)} />
      <Offers onOpenOffer={() => setIsOfferOpen(true)} />
      <About />
      <Expertise />
      <Gallery />
      <Contact />

      {/* Front Pop-up */}
      <OfferModal isOpen={isOfferOpen} onClose={() => setIsOfferOpen(false)} />
    </div>
  );
}

export default App;