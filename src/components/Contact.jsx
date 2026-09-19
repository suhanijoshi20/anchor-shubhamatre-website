import React, { useState } from 'react';
import { Phone, MapPin, Send, Instagram, ShieldCheck, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', eventType: '', eventDate: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Anchor Shubham,%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Event Type:* ${formData.eventType}%0A*Event Date:* ${formData.eventDate}%0A*Details:* ${formData.message}`;
    window.open(`https://wa.me/916232091754?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#260812] text-[#FFF5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FFF5EA]">
            Book <span className="text-[#C98F8F]">Your Dates</span>
          </h2>
          <p className="text-[#E8D5C4] mt-3 text-lg">Indore Based • Available Domestic & Pan-India</p>
          <div className="w-20 h-1 bg-[#C98F8F] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#C98F8F]">Contact & Social</h3>
            
            <div className="space-y-6">
              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#4A1022] rounded-full text-[#C98F8F]">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="text-xs text-[#E8D5C4] uppercase font-semibold">Call / WhatsApp</div>
                  <a href="https://wa.me/916232091754" target="_blank" rel="noreferrer" className="text-lg sm:text-xl font-bold text-[#FFF5EA] hover:text-[#D9A6A8] transition-colors">
                    +91 6232091754
                  </a>
                </div>
              </div>

              {/* Instagram Handle */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#4A1022] rounded-full text-[#C98F8F]">
                  <Instagram size={22} />
                </div>
                <div>
                  <div className="text-xs text-[#E8D5C4] uppercase font-semibold">Instagram</div>
                  <a 
                    href="https://www.instagram.com/Anchor_shubhamatre" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-lg sm:text-xl font-bold text-[#FFF5EA] hover:text-[#D9A6A8] transition-colors block mt-0.5"
                  >
                    @Anchor_shubhamatre
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#4A1022] rounded-full text-[#C98F8F]">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="text-xs text-[#E8D5C4] uppercase font-semibold">Office Address</div>
                  <p className="text-sm font-medium text-[#FFF5EA] mt-1 leading-relaxed">
                    Amba Molina, Gulmarg Parisar, Near Vidyasagar School,<br />
                    Pipliyahana, Indore - 452016, Madhya Pradesh
                  </p>
                </div>
              </div>

              {/* Duration & Policy */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#4A1022] rounded-full text-[#C98F8F]">
                  <Clock size={22} />
                </div>
                <div>
                  <div className="text-xs text-[#E8D5C4] uppercase font-semibold">Performance & Booking</div>
                  <p className="text-sm font-medium text-[#FFF5EA] mt-1">
                    Standard 4 Hours Performance • 50% Advance Booking
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8D5C4]/20">
              <a 
                href="https://www.instagram.com/Anchor_shubhamatre" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A1022] hover:bg-[#D9A6A8] hover:text-[#260812] text-[#FFF5EA] rounded-full transition-all font-semibold text-sm shadow-md"
              >
                <Instagram size={18} className="text-[#C98F8F]" />
                <span>Follow @Anchor_shubhamatre</span>
              </a>
            </div>
          </div>

          <div className="bg-[#4A1022] p-8 rounded-2xl border border-[#E8D5C4]/30 shadow-xl">
            <h3 className="text-xl font-bold text-[#FFF5EA] mb-6">Send Booking Request</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-[#E8D5C4] mb-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Rahul Sharma"
                  className="w-full bg-[#260812] border border-[#E8D5C4]/30 rounded-lg px-4 py-3 text-[#FFF5EA] focus:outline-none focus:border-[#C98F8F]"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-[#E8D5C4] mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 9876543210"
                    className="w-full bg-[#260812] border border-[#E8D5C4]/30 rounded-lg px-4 py-3 text-[#FFF5EA] focus:outline-none focus:border-[#C98F8F]"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-[#E8D5C4] mb-1">Event Type</label>
                  <select 
                    required
                    defaultValue=""
                    className="w-full bg-[#260812] border border-[#E8D5C4]/30 rounded-lg px-4 py-3 text-[#FFF5EA] focus:outline-none focus:border-[#C98F8F]"
                    onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                  >
                    <option value="" disabled>Select Event</option>
                    <option value="Wedding / Sangeet">Wedding / Sangeet</option>
                    <option value="Pre-Wedding (Roka / Haldi)">Pre-Wedding (Roka / Haldi)</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Cocktail / Private Party">Cocktail / Private Party</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-[#E8D5C4] mb-1">Event Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full bg-[#260812] border border-[#E8D5C4]/30 rounded-lg px-4 py-3 text-[#FFF5EA] focus:outline-none focus:border-[#C98F8F]"
                  onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-[#E8D5C4] mb-1">Message / City</label>
                <textarea 
                  rows="3" 
                  placeholder="Mention venue city and gathering details..."
                  className="w-full bg-[#260812] border border-[#E8D5C4]/30 rounded-lg px-4 py-3 text-[#FFF5EA] focus:outline-none focus:border-[#C98F8F]"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#C98F8F] hover:bg-[#D9A6A8] text-[#260812] font-bold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
              >
                <Send size={18} />
                <span>Send Enquiry Via WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-[#E8D5C4]/20 text-center text-sm text-[#E8D5C4]/70">
          <p>© {new Date().getFullYear()} Anchor Shubham Atre. All Rights Reserved.</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;