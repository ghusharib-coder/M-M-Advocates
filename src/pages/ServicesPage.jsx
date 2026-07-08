import { motion } from 'framer-motion';
import { Copyright, Shield, FileText, Zap, BarChart3, MessageSquare, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Copyright,
      title: 'Copyright Protection',
      shortDesc: 'Comprehensive copyright registration and enforcement',
      details: 'Register and protect your creative works with expert legal guidance.',
      color: '#5c4033'
    },
    {
      icon: Shield,
      title: 'Trademark Management',
      shortDesc: 'Complete trademark registration and defense',
      details: 'Build and protect your brand identity across all markets.',
      color: '#5c4033'
    },
    {
      icon: FileText,
      title: 'Patent Filing',
      shortDesc: 'Expert patent application and prosecution',
      details: 'Secure your innovations with comprehensive patent protection.',
      color: '#5c4033'
    },
    {
      icon: Zap,
      title: 'Trade Secret Protection',
      shortDesc: 'Safeguard confidential business information',
      details: 'Develop strategies to protect your valuable trade secrets.',
      color: '#5c4033'
    },
    {
      icon: BarChart3,
      title: 'IP Valuation & Analytics',
      shortDesc: 'Assess and monetize your IP portfolio',
      details: 'Understand and maximize the value of your intellectual property.',
      color: '#5c4033'
    },
    {
      icon: MessageSquare,
      title: 'Litigation Support',
      shortDesc: 'Expert representation in IP disputes',
      details: 'Aggressive advocacy for your IP rights in legal proceedings.',
      color: '#5c4033'
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      {/* Header */}
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">Our Services</span>
        </h1>
        <p className="text-xl text-slate-700 max-w-3xl">
          Comprehensive intellectual property solutions tailored to your unique business needs. From registration to litigation, we protect what matters most.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="glass-card group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1, delay: index * 0.01 }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 0 40px rgba(92, 64, 51, 0.2)',
                }}
              >
                {/* Icon Container */}
                <div className="mb-6 inline-block p-4 bg-white rounded-lg group-hover:border-amber-900 transition-all duration-300">
                  <Icon className="w-8 h-8" style={{color: service.color}} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-700 mb-4">{service.shortDesc}</p>
                <p className="text-slate-600 text-sm mb-6">{service.details}</p>

                {/* CTA Link */}
                <motion.div
                  className="inline-flex items-center gap-2 font-semibold group/link"
                  style={{color: '#5c4033'}}
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <motion.span
                    whileHover={{ x: 3 }}
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center py-16 px-8 rounded-2xl glass-card border-2 border-amber-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
            Contact our experts to discuss your specific intellectual property needs and get a tailored strategy.
          </p>
          <button className="gradient-btn px-8 py-3 rounded-lg text-white font-semibold hover:scale-105 transition-transform">
            Schedule Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
}
