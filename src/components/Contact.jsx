import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, Calendar, User, Send, CheckCircle2, Sparkles, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding / Sangeet',
    eventDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form submission simulation / WhatsApp Redirect integration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 4 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          eventType: 'Wedding / Sangeet',
          eventDate: '',
          message: ''
        });
      }, 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-slate-100 relative overflow-hidden border-t border-slate-800">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-1/3 left-[-100px] w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-100px] w-96 h-96 bg-slate-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-4 h-4" /> Get In Touch
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Book <span className="text-amber-400">Anchor Shubham</span>
          </h2>

          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Have an upcoming event? Fill out the form below or reach out directly to check availability and package details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" /> Contact Details
              </h3>

              <p className="text-slate-400 text-sm">
                Feel free to connect via WhatsApp or Phone Call for quick inquiries and dates check.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-500/40 hover:bg-slate-800 transition-all group"
                >
                  <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-medium">Call Directly</p>
                    <p className="text-base font-semibold text-white">+91 98765 43210</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/40 hover:bg-slate-800 transition-all group"
                >
                  <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-medium">WhatsApp Chat</p>
                    <p className="text-base font-semibold text-white">Chat on WhatsApp</p>
                  </div>
                </a>

                <a
                  href="mailto:contact@anchorshubham.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-500/40 hover:bg-slate-800 transition-all group"
                >
                  <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-medium">Email Inquiries</p>
                    <p className="text-base font-semibold text-white">contact@anchorshubham.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-800">
                  <div className="p-3 bg-slate-800 text-slate-400 rounded-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-medium">Location</p>
                    <p className="text-base font-semibold text-white">Available Pan India & Globally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Client Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 relative">
              
              <h3 className="text-xl font-semibold text-white mb-6">
                Send Booking Inquiry
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Inquiry Received!</h4>
                  <p className="text-slate-400 max-w-md mx-auto text-sm">
                    Thank you for reaching out. We will review your event details and get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="w-5 h-5 text-slate-500 absolute left-3.5 top-3" />
                        <input
                          type="text"
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-5 h-5 text-slate-500 absolute left-3.5 top-3" />
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Event Type */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                        Event Category
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        <option value="Wedding / Sangeet">Wedding / Sangeet</option>
                        <option value="Haldi / Reception">Haldi / Reception</option>
                        <option value="Corporate Event">Corporate Event</option>
                        <option value="Private Celebration">Private Celebration</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Event Date */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                        Event Date
                      </label>
                      <div className="relative">
                        <Calendar className="w-5 h-5 text-slate-500 absolute left-3.5 top-3" />
                        <input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                      Event Location & Details
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mention event location, estimated guest count, or specific requirements..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;