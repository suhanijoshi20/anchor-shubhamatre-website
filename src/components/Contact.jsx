import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Share2, Video, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', eventType: '', eventDate: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Anchor Shubham,%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Event Type:* ${formData.eventType}%0A*Event Date:* ${formData.eventDate}%0A*Details:* ${formData.message}`;
    window.open(`https://wa.me/91XXXXXXXXXX?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#260812] text-[#FFF5EA] border-t border-[#C98F8F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FFF5EA]">
            Book <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C98F8F] to-[#E8D5C4]">Your Dates</span>
          </h2>
          <p className="text-[#E8D5C4] mt-3 text-lg">Let's discuss how we can make your event unforgettable.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C98F8F] to-[#D9A6A8] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#C98F8F]">Get In Touch</h3>
            <p className="text-[#E8D5C4] leading-relaxed">
              Available for corporate shows, luxury weddings, and concerts across India and worldwide.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#4A1022] border border-[#C98F8F]/40 rounded-full text-[#C98F8F]">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="text-xs text-[#D9A6A8] uppercase font-semibold">Call / WhatsApp</div>
                  <a href="tel:+91XXXXXXXXXX" className="text-lg font-semibold text-[#FFF5EA] hover:text-[#C98F8F]">+91 XXXXXXXXXX</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#4A1022] border border-[#C98F8F]/40 rounded-full text-[#C98F8F]">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="text-xs text-[#D9A6A8] uppercase font-semibold">Email Enquiries</div>
                  <a href="mailto:info@anchorshubham.com" className="text-lg font-semibold text-[#FFF5EA] hover:text-[#C98F8F]">info@anchorshubham.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#4A1022] border border-[#C98F8F]/40 rounded-full text-[#C98F8F]">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="text-xs text-[#D9A6A8] uppercase font-semibold">Location</div>
                  <div className="text-lg font-semibold text-[#FFF5EA]">India (Available Worldwide)</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#C98F8F]/20">
              <h4 className="text-xs font-semibold text-[#D9A6A8] uppercase mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-[#4A1022] border border-[#C98F8F]/30 hover:border-[#C98F8F] text-[#FFF5EA] rounded-full transition-colors flex items-center gap-2">
                  <Share2 size={18} className="text-[#C98F8F]" />
                  <span className="text-xs font-semibold">Instagram</span>
                </a>
                <a href="#" className="p-3 bg-[#4A1022] border border-[#C98F8F]/30 hover:border-[#C98F8F] text-[#FFF5EA] rounded-full transition-colors flex items-center gap-2">
                  <Video size={18} className="text-[#D9A6A8]" />
                  <span className="text-xs font-semibold">YouTube</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#4A1022]/40 p-8 rounded-2xl border border-[#C98F8F]/30 shadow-xl">
            <h3 className="text-xl font-bold text-[#FFF5EA] mb-6">Send Event Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-[#D9A6A8] mb-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Rahul Sharma"
                  className="w-full bg-[#260812] border border-[#C98F8F]/30 rounded-lg px-4 py-3 text-[#FFF5EA] focus:outline-none focus:border-[#C98F8F]"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-[#D9A6A8] mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 9876543210"
                    className="w-full bg-[#260812] border border-[#C98F8F]/30 rounded-lg px-4 py-3 text-[#FFF5EA] focus:outline-none focus:border-[#C98F8F]"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-[#D9A6A8] mb-1">Event Type</label>
                  <select 
                    required
                    defaultValue=""
                    className="w-full bg-[#260812] border border-[#C98F8F]/30 rounded-lg px-4 py-3 text-[#FFF5EA] focus:outline-none focus:border-[#C98F8F]"
                    onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                  >
                    <option value="" disabled>Select Event</option>
                    <option value="Wedding / Sangeet">Wedding / Sangeet</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Concert / Live Show">Concert / Live Show</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-[#D9A6A8] mb-1">Event Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full bg-[#260812] border border-[#C98F8F]/30 rounded-lg px-4 py-3 text-[#FFF5EA] focus:outline-none focus:border-[#C98F8F]"
                  onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-[#D9A6A8] mb-1">Message</label>
                <textarea 
                  rows="3" 
                  placeholder="Tell us about venue, gathering, etc."
                  className="w-full bg-[#260812] border border-[#C98F8F]/30 rounded-lg px-4 py-3 text-[#FFF5EA] focus:outline-none focus:border-[#C98F8F]"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#C98F8F] to-[#D9A6A8] text-[#260812] font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#C98F8F]/20"
              >
                <Send size={18} />
                <span>Send Enquiry Via WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-[#C98F8F]/20 text-center text-sm text-[#E8D5C4]/70">
          <p>© {new Date().getFullYear()} Anchor Shubham Atre. All Rights Reserved.</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;