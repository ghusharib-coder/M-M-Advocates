import { motion } from 'framer-motion';
import {
  Copyright,
  Shield,
  FileText,
  Zap,
  BarChart3,
  MessageSquare,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Copyright,
      title: 'Copyright Protection',
      description: 'Defend your creative works against unauthorized use and infringement.',
      color: '#00d9ff',
    },
    {
      icon: Shield,
      title: 'Trademark Disputes',
      description: 'Resolve brand conflicts and protect your trademark rights.',
      color: '#a855f7',
    },
    {
      icon: FileText,
      title: 'Patent Consultation',
      description: 'Navigate complex patent disputes with expert guidance.',
      color: '#0066ff',
    },
    {
      icon: Zap,
      title: 'Brand Protection',
      description: 'Proactive strategies to protect your brand identity.',
      color: '#00d9ff',
    },
    {
      icon: BarChart3,
      title: 'Legal Documentation',
      description: 'Comprehensive documentation for all your IP needs.',
      color: '#a855f7',
    },
    {
      icon: MessageSquare,
      title: 'Online Consultation',
      description: 'Expert advice available anytime, anywhere.',
      color: '#0066ff',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive intellectual property solutions tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="glass-card group cursor-pointer"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: '0 0 40px rgba(0, 217, 255, 0.3)',
                }}
              >
                {/* Icon Container */}
                <div className="mb-6 inline-block p-4 bg-white/5 rounded-lg group-hover:bg-white/10 transition-all duration-300">
                  <Icon className="w-8 h-8" style={{color: service.color}} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>

                {/* CTA Link */}
                <motion.div
                  className="inline-flex items-center gap-2 font-semibold group/link"
                  style={{color: 'var(--electric-blue)'}}
                  whileHover={{ x: 5 }}
                >
                  <span>Learn More</span>
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/0 to-purple-light/0 group-hover:from-electric-blue/10 group-hover:to-purple-light/10 rounded-xl transition-all duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
