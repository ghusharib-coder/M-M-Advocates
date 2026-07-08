import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@ipresolve.com',
      link: 'mailto:info@ipresolve.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Legal Center Drive, Law City, ST 12345',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-40 left-10 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{backgroundColor: 'rgba(92, 64, 51, 0.2)'}}
        animate={{
          x: [0, 30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 right-10 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{backgroundColor: 'rgba(139, 111, 71, 0.2)'}}  
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            Have questions? Our team is ready to help. Reach out to schedule a free consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  className="text-center p-8 hover:scale-105 transition-transform"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Icon className="w-8 h-8 mx-auto mb-4" style={{color: '#5c4033'}} />
                  <p className="text-sm text-slate-700 mb-2">{info.label}</p>
                  <p className="font-semibold text-slate-900">{info.value}</p>
                </motion.a>
              );
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-2xl mx-auto glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-800">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-amber-300 rounded-lg focus:outline-none transition-colors text-slate-900 placeholder-slate-400"
                      style={{borderColor: submitted ? '#5c4033' : '#fcd34d'}}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-800">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-amber-300 rounded-lg focus:outline-none transition-colors text-slate-900 placeholder-slate-400"
                      style={{borderColor: submitted ? '#5c4033' : '#fcd34d'}}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-800">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-amber-300 rounded-lg focus:outline-none transition-colors text-slate-900 placeholder-slate-400"
                    style={{borderColor: '#d4a574'}}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-800">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-amber-300 rounded-lg focus:outline-none transition-colors text-slate-900 placeholder-slate-400"
                    style={{borderColor: '#fcd34d'}}
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-800">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-white border border-amber-300 rounded-lg focus:outline-none transition-colors resize-none text-slate-900 placeholder-slate-400"
                    style={{borderColor: submitted ? '#5c4033' : '#d4a574'}}
                    placeholder="Tell us about your IP concern..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full gradient-btn glow-btn flex items-center justify-center gap-2 py-4 text-lg font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {submitted ? (
                    <>
                      <span>Message Sent! ✓</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={20} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Office Hours */}
        <motion.div
          className="glass-card p-12 text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-slate-900">Office Hours</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="font-semibold mb-2 text-slate-900">Monday - Friday</p>
              <p className="text-slate-700">9:00 AM - 6:00 PM</p>
            </div>
            <div>
              <p className="font-semibold mb-2 text-slate-900">Saturday</p>
              <p className="text-slate-700">10:00 AM - 4:00 PM</p>
            </div>
            <div>
              <p className="font-semibold mb-2 text-slate-900">Sunday</p>
              <p className="text-slate-700">Closed</p>
            </div>
            <div>
              <p className="font-semibold mb-2 text-slate-900">Emergency</p>
              <p className="text-slate-700">24/7 Available</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
