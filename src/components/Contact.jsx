import React, { useState } from 'react';
import { Phone, MapPin, Send, ShieldCheck, Clock } from 'lucide-react';

// Custom SVG Instagram Icon Component (Main component ke bahar)
const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*New Event Inquiry*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Date:* ${formData.eventDate}%0A*Event:* ${formData.eventType}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/916232091754?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#FFF5EA] text-[#260812]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#4A1022] mb-4">
            Book Your Event
          </h2>
          <p className="text-base sm:text-lg text-[#260812]/80 max-w-2xl mx-auto">
            Let's turn your special occasion into an unforgettable celebration. Reach out today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <div className="space-y-8 bg-[#E8D5C4]/30 p-8 rounded-3xl border-2 border-[#E8D5C4]">
            <h3 className="text-2xl font-bold text-[#4A1022]">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#4A1022] text-[#FFF5EA] rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs text-[#260812]/60 uppercase font-semibold">Call / WhatsApp</div>
                  <a href="tel:+916232091754" className="text-lg font-bold text-[#4A1022] hover:text-[#C98F8F]">
                    +91 62320 91754
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#4A1022] text-[#FFF5EA] rounded-full">
                  <InstagramIcon size={24} />
                </div>
                <div>
                  <div className="text-xs text-[#260812]/60 uppercase font-semibold">Instagram</div>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-lg font-bold text-[#4A1022] hover:text-[#C98F8F]">
                    @anchorshubhamatre
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#4A1022] text-[#FFF5EA] rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs text-[#260812]/60 uppercase font-semibold">Location</div>
                  <div className="text-lg font-bold text-[#4A1022]">
                    Indore, Madhya Pradesh (Available Pan India)
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8D5C4] space-y-3">
              <div className="flex items-center gap-2 text-sm text-[#260812]/80">
                <ShieldCheck size={18} className="text-[#C98F8F]" />
                <span>Guaranteed High Energy & Professional Execution</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#260812]/80">
                <Clock size={18} className="text-[#C98F8F]" />
                <span>Quick Response Within 2 Hours</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-3xl shadow-lg border border-[#E8D5C4]">
            <div>
              <label className="block text-sm font-semibold text-[#4A1022] mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:outline-none focus:border-[#4A1022]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#4A1022] mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:outline-none focus:border-[#4A1022]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#4A1022] mb-1">Event Date</label>
                <input
                  type="date"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:outline-none focus:border-[#4A1022]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#4A1022] mb-1">Event Type</label>
              <select
                name="eventType"
                required
                value={formData.eventType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:outline-none focus:border-[#4A1022]"
              >
                <option value="">Select Event Type</option>
                <option value="Wedding / Sangeet">Wedding / Sangeet</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Concert / Festival">Concert / Festival</option>
                <option value="Private Party">Private Party</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#4A1022] mb-1">Message / Requirements</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your event..."
                className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:outline-none focus:border-[#4A1022]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4A1022] text-[#FFF5EA] font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#340a17] transition-colors shadow-md"
            >
              <Send size={18} />
              <span>Send Inquiry On WhatsApp</span>
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;