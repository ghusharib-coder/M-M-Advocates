import { motion } from 'framer-motion';
import { Mail, MessageSquare, Share2, Zap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: ['Copyright Protection', 'Trademark Disputes', 'Patent Consultation', 'Brand Protection'],
    Company: ['About Us', 'Blog', 'Careers', 'Press'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Disclaimer'],
    Resources: ['FAQ', 'Contact', 'Support', 'Documentation'],
  };

  const socialLinks = [
    { icon: Mail, label: 'Email' },
    { icon: MessageSquare, label: 'Chat' },
    { icon: Share2, label: 'Share' },
    { icon: Zap, label: 'Updates' },
  ];

  return (
    <footer className="bg-slate-100 border-t border-amber-200">
      {/* Newsletter Section */}
      <motion.div
        className="border-b border-amber-200 px-4 sm:px-6 lg:px-8 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Stay Updated</h3>
              <p className="text-slate-700">Get the latest IP news and insights delivered to your inbox.</p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-white border border-amber-300 rounded-lg focus:outline-none transition-colors text-slate-900 placeholder-slate-400"
                style={{borderColor: '#5c4033'}}  
              />
              <motion.button
                className="gradient-btn px-6 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-2xl font-bold gradient-text mb-4">M&M Advocates</div>
              <p className="text-slate-700 text-sm">Expert intellectual property dispute resolution for the modern era.</p>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map((column, idx) => (
              <motion.div
                key={column[0]}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h4 className="font-bold text-slate-900 mb-4">{column[0]}</h4>
                <ul className="space-y-3">
                  {column[1].map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-slate-700 transition-colors text-sm hover:text-slate-900"
                        style={{color: '#5c4033'}}  
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-amber-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {/* Copyright */}
              <p className="text-slate-700 text-sm">
                © {currentYear} IP Resolve. All rights reserved. | Protecting IP Worldwide
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href="#"
                      className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-white hover:text-white transition-all duration-300"
                      style={{
                        backgroundImage: 'linear-gradient(135deg, #5c4033, #8b6f47)'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundImage = 'linear-gradient(135deg, #5c4033, #8b6f47)'}
                      onMouseLeave={(e) => e.target.style.backgroundImage = 'none'}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}