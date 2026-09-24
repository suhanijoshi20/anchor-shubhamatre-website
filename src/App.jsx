import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Offers from './components/Offers';
import About from './components/About';
import FunExpertise from './components/FunExpertise';
import Games from './components/Games';
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

  const handleOpenOffer = () => setIsOfferOpen(true);
  const handleCloseOffer = () => setIsOfferOpen(false);

  return (
    <div className="bg-[#FDFBF7] text-[#1E293B] min-h-screen font-sans selection:bg-[#FF007F] selection:text-white">
      <Navbar onOpenOffer={handleOpenOffer} />
      <Hero onOpenOffer={handleOpenOffer} />
      <Offers onOpenOffer={handleOpenOffer} />
      <About />
      <FunExpertise />
      <Games onOpenOffer={handleOpenOffer} />
      <Gallery />
      <Contact />

      {/* Front Pop-up Modal */}
      <OfferModal isOpen={isOfferOpen} onClose={handleCloseOffer} />
    </div>
  );
}

export default App;