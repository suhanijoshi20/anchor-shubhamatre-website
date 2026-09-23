import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#0F0C20] text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;