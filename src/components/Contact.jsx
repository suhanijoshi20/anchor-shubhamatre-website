import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0F0C20] text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#1C1438] border-4 border-[#FF007F] rounded-3xl p-8 sm:p-12 shadow-[0_0_35px_rgba(255,0,127,0.4)] text-center space-y-8">
          
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black font-funky text-[#CCFF00]"
          >
            LET'S MAKE YOUR EVENT UNFORGETTABLE!
          </motion.h2>

          <p className="text-[#E2D9FF] text-base sm:text-lg max-w-xl mx-auto font-medium">
            Available for worldwide bookings across weddings, corporate galas, and live stage shows.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#0F0C20] border border-[#00E5FF]/40">
              <Phone className="w-6 h-6 text-[#00E5FF]" />
              <span className="text-xs text-[#00E5FF] font-bold uppercase">Call / WhatsApp</span>
              <span className="text-sm font-bold text-white">+91 62320 91754</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#0F0C20] border border-[#FF007F]/40">
              <Mail className="w-6 h-6 text-[#FF007F]" />
              <span className="text-xs text-[#FF007F] font-bold uppercase">Email</span>
              <span className="text-sm font-bold text-white">shubhamatre@gmail.com</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#0F0C20] border border-[#CCFF00]/40">
              <MapPin className="w-6 h-6 text-[#CCFF00]" />
              <span className="text-xs text-[#CCFF00] font-bold uppercase">Location</span>
              <span className="text-sm font-bold text-white">India / Worldwide</span>
            </div>
          </div>

          <div className="pt-6">
            <a
              href="https://wa.me/916232091754"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#CCFF00] hover:bg-[#FF007F] text-[#0F0C20] hover:text-white px-8 py-4 rounded-full font-black font-funky text-base uppercase tracking-wider transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(204,255,0,0.6)]"
            >
              <MessageSquare className="w-5 h-5" />
              Chat On WhatsApp Directly
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;