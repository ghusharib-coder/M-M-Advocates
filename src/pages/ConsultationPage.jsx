import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: 'copyright',
    date: '',
    time: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const consultationTypes = [
    { value: 'copyright', label: 'Copyright Protection' },
    { value: 'trademark', label: 'Trademark Management' },
    { value: 'patent', label: 'Patent Filing' },
    { value: 'trade-secret', label: 'Trade Secret Protection' },
    { value: 'litigation', label: 'Litigation Support' },
    { value: 'valuation', label: 'IP Valuation' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      {/* Header */}
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">Book Your Consultation</span>
        </h1>
        <p className="text-xl text-slate-700 max-w-3xl mx-auto">
          Schedule a one-on-one consultation with our expert IP lawyers. Let's discuss your intellectual property needs and develop a tailored strategy.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-slate-900 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-lg focus:outline-none transition-colors text-slate-900 placeholder-slate-400"
                    style={{borderColor: '#5c4033'}}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-slate-900 font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-lg focus:outline-none transition-colors text-slate-900 placeholder-slate-400"
                    style={{borderColor: '#5c4033'}}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-slate-900 font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-lg focus:outline-none transition-colors text-slate-900 placeholder-slate-400"
                    style={{borderColor: '#5c4033'}}
                  />
                </div>

                {/* Consultation Type */}
                <div>
                  <label className="block text-slate-900 font-semibold mb-2">Consultation Type *</label>
                  <select
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-lg focus:outline-none transition-colors text-slate-900"
                    style={{borderColor: '#5c4033'}}
                  >
                    {consultationTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-900 font-semibold mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-lg focus:outline-none transition-colors text-slate-900"
                      style={{borderColor: '#5c4033'}}
                    />
                  </div>
                  <div>
                    <label className="block text-slate-900 font-semibold mb-2">Preferred Time *</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-lg focus:outline-none transition-colors text-slate-900"
                      style={{borderColor: '#5c4033'}}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-slate-900 font-semibold mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your IP concern or question..."
                    rows="5"
                    className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-lg focus:outline-none transition-colors resize-none text-slate-900 placeholder-slate-400"
                    style={{borderColor: '#5c4033'}}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="gradient-btn w-full px-6 py-4 rounded-lg text-white font-semibold text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {submitted ? 'Submitted!' : 'Book Consultation'}
                </motion.button>

                {/* Success Message */}
                {submitted && (
                  <motion.div
                    className="flex items-center gap-3 p-4 bg-green-50 border-2 border-green-300 rounded-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle size={24} style={{color: '#5c4033'}} />
                    <div>
                      <p className="font-semibold text-slate-900">Consultation Booked!</p>
                      <p className="text-sm text-slate-700">We'll contact you shortly to confirm the appointment.</p>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Sidebar - Info & Benefits */}
          <motion.div
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Consultation Info */}
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-4" style={{color: '#5c4033'}}>
                Consultation Details
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Clock size={24} style={{color: '#5c4033'}} className="flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Duration</p>
                    <p className="text-sm text-slate-700">60 minutes</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MessageSquare size={24} style={{color: '#5c4033'}} className="flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Format</p>
                    <p className="text-sm text-slate-700">Virtual or In-Person</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <User size={24} style={{color: '#5c4033'}} className="flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Expert</p>
                    <p className="text-sm text-slate-700">Specialized IP Attorney</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-4" style={{color: '#5c4033'}}>
                What to Expect
              </h3>
              <ul className="space-y-3">
                {[
                  'Comprehensive case assessment',
                  'Strategic recommendations',
                  'Cost & timeline estimates',
                  'Customized action plan',
                  'Confidential discussion'
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                  >
                    <CheckCircle size={20} style={{color: '#5c4033'}} className="flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Need Help? */}
            <div className="glass-card">
              <h3 className="text-lg font-bold mb-3" style={{color: '#5c4033'}}>
                Need Help?
              </h3>
              <p className="text-slate-700 mb-4">
                Call us at <span className="font-semibold">+1-800-IP-LAW-1</span> or email <span className="font-semibold">info@mmadvocates.com</span>
              </p>
              <p className="text-sm text-slate-600">
                Available Mon-Fri 9AM-6PM, Sat 10AM-4PM (Emergency 24/7)
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
