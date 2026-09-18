import React from 'react';
import { Award, Mic, Users, HeartHandshake } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-zinc-950 text-white relative border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About <span className="text-amber-400">Anchor Shubham Atre</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Welcome to the world of high-octane stage presence, charisma, and unmatched crowd engagement. 
              With over <span className="text-amber-400 font-semibold">5+ years of experience</span>, Anchor Shubham Atre has mastered the art of elevating live events into luxury experiences.
            </p>
            <p>
              From high-profile corporate galas and celebrity weddings to energetic sangeet ceremonies and concert stages, Shubham seamlessly connects with audiences, ensuring every moment feels energetic, elegant, and personal.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <Mic className="text-amber-400" size={24} />
                <span className="font-semibold text-white">Dynamic Host</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-amber-400" size={24} />
                <span className="font-semibold text-white">Versatile Artist</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-amber-400" size={24} />
                <span className="font-semibold text-white">Crowd Master</span>
              </div>
              <div className="flex items-center gap-3">
                <HeartHandshake className="text-amber-400" size={24} />
                <span className="font-semibold text-white">Top Rated Emcee</span>
              </div>
            </div>
          </div>

          {/* Right Card Feature */}
          <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-amber-500/20 shadow-2xl relative">
            <div className="absolute -top-4 -right-4 bg-amber-500 text-black font-bold px-4 py-1 rounded-full text-sm">
              Luxury Experience
            </div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Why Choose Shubham?</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-bold">✓</span>
                <span>Tailored scripts & personalized event flow</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-bold">✓</span>
                <span>Fluent in English, Hindi & Gujarati interactive hosting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-bold">✓</span>
                <span>Expert in keeping guests engaged with zero dry moments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-bold">✓</span>
                <span>Professional punctuality & premium stage attire</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;