import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Share2, Video, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Anchor Shubham,%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Event Type:* ${formData.eventType}%0A*Event Date:* ${formData.eventDate}%0A*Details:* ${formData.message}`;
    window.open(`https://wa.me/91XXXXXXXXXX?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-black text-white relative border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Book <span className="text-amber-400">Your Dates</span>
          </h2>
          <p className="text-gray-400 mt-3 text-lg">Let's discuss how we can make your event unforgettable.</p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-amber-400">Get In Touch</h3>
            <p className="text-gray-300 leading-relaxed">
              Available for national & international corporate shows, luxury weddings, and concerts.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-900 border border-amber-500/30 rounded-full text-amber-400">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase">Call / WhatsApp</div>
                  <a href="tel:+91XXXXXXXXXX" className="text-lg font-semibold hover:text-amber-400">+91 XXXXXXXXXX</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-900 border border-amber-500/30 rounded-full text-amber-400">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase">Email Enquiries</div>
                  <a href="mailto:info@anchorshubham.com" className="text-lg font-semibold hover:text-amber-400">info@anchorshubham.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-900 border border-amber-500/30 rounded-full text-amber-400">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase">Location</div>
                  <div className="text-lg font-semibold">India (Available Worldwide)</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-800">
              <h4 className="text-sm font-semibold text-gray-400 uppercase mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-zinc-900 border border-zinc-800 hover:border-amber-400 text-amber-400 rounded-full transition-colors flex items-center gap-2">
                  <Share2 size={20} />
                  <span className="text-xs font-semibold">Instagram</span>
                </a>
                <a href="#" className="p-3 bg-zinc-900 border border-zinc-800 hover:border-amber-400 text-amber-400 rounded-full transition-colors flex items-center gap-2">
                  <Video size={20} />
                  <span className="text-xs font-semibold">YouTube</span>
                </a>
                <a href="#" className="p-3 bg-zinc-900 border border-zinc-800 hover:border-amber-400 text-amber-400 rounded-full transition-colors flex items-center gap-2">
                  <Globe size={20} />
                  <span className="text-xs font-semibold">Socials</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/60 p-8 rounded-2xl border border-zinc-800 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-6">Send Event Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-400 mb-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Rahul Sharma"
                  className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-400 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 9876543210"
                    className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-400 mb-1">Event Type</label>
                  <select 
                    required
                    defaultValue=""
                    className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                    onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                  >
                    <option value="" disabled>Select Event</option>
                    <option value="Wedding / Sangeet">Wedding / Sangeet</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Concert / Live Show">Concert / Live Show</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-gray-400 mb-1">Event Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                  onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-gray-400 mb-1">Message / Requirements</label>
                <textarea 
                  rows="3" 
                  placeholder="Tell us about venue, expected gathering, etc."
                  className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform duration-200 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <Send size={18} />
                <span>Send Enquiry Via WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-zinc-800/80 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Anchor Shubham Atre. All Rights Reserved.</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;