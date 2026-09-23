import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, Sparkles } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#FDFBF7] text-[#1E293B] relative border-t-4 border-[#1E293B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border-4 border-[#1E293B] rounded-3xl p-8 sm:p-12 shadow-2xl text-center space-y-8 relative overflow-hidden">
          
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF007F]/20 rounded-full blur-2xl pointer-events-none" />

          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black font-funky text-[#1E293B]"
          >
            LET'S MAKE YOUR EVENT <span className="text-[#FF007F]">SUPER FUN!</span> 🎉
          </motion.h2>

          <p className="text-[#475569] text-base sm:text-lg max-w-xl mx-auto font-bold">
            Available for worldwide bookings across weddings, sangeet battles, haldi games, and corporate shows.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#F8FAFC] border-2 border-[#1E293B]">
              <Phone className="w-6 h-6 text-[#FF007F]" />
              <span className="text-xs text-[#64748B] font-black uppercase">Call / WhatsApp</span>
              <span className="text-sm font-black text-[#1E293B]">+91 62320 91754</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#F8FAFC] border-2 border-[#1E293B]">
              <Mail className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-xs text-[#64748B] font-black uppercase">Email</span>
              <span className="text-sm font-black text-[#1E293B]">shubhamatre@gmail.com</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#F8FAFC] border-2 border-[#1E293B]">
              <MapPin className="w-6 h-6 text-[#8B5CF6]" />
              <span className="text-xs text-[#64748B] font-black uppercase">Location</span>
              <span className="text-sm font-black text-[#1E293B]">India / Worldwide</span>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="https://wa.me/916232091754"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#FF007F] hover:bg-[#D4AF37] text-white border-2 border-[#1E293B] px-8 py-4 rounded-full font-black font-funky text-base uppercase tracking-wider transition-all transform hover:scale-105 shadow-xl"
            >
              <MessageSquare className="w-5 h-5" />
              Direct WhatsApp Chat
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;