import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#FDFBF7] text-[#1E293B] relative border-t-2 border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border-4 border-[#D4AF37] rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-8">
          
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black font-funky text-[#1E293B]"
          >
            LET'S MAKE YOUR EVENT <span className="text-[#D4AF37]">UNFORGETTABLE!</span>
          </motion.h2>

          <p className="text-[#475569] text-base sm:text-lg max-w-xl mx-auto font-medium">
            Available for worldwide bookings across weddings, corporate galas, and live stage shows.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <Phone className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-xs text-[#64748B] font-bold uppercase">Call / WhatsApp</span>
              <span className="text-sm font-bold text-[#1E293B]">+91 62320 91754</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <Mail className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-xs text-[#64748B] font-bold uppercase">Email</span>
              <span className="text-sm font-bold text-[#1E293B]">shubhamatre@gmail.com</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <MapPin className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-xs text-[#64748B] font-bold uppercase">Location</span>
              <span className="text-sm font-bold text-[#1E293B]">India / Worldwide</span>
            </div>
          </div>

          <div className="pt-6">
            <a
              href="https://wa.me/916232091754"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#1E293B] text-white hover:text-[#D4AF37] px-8 py-4 rounded-full font-black font-funky text-base uppercase tracking-wider transition-all transform hover:scale-105 shadow-md"
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