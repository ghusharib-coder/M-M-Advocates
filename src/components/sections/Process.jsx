import { motion } from 'framer-motion';
import { Upload, Search, Users, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Upload,
      title: 'Submit Issue',
      description: 'Share details about your IP dispute with our team.',
      number: '01',
    },
    {
      icon: Search,
      title: 'Review Case',
      description: 'Our experts analyze your case thoroughly.',
      number: '02',
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Get personalized guidance from legal experts.',
      number: '03',
    },
    {
      icon: CheckCircle,
      title: 'Resolution',
      description: 'We work to resolve your dispute efficiently.',
      number: '04',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-light/50" id="process">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Simple, transparent, and effective dispute resolution.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute top-24 left-1/2 w-full h-1 bg-gradient-to-r from-electric-blue to-purple-light hidden md:block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ originX: 0, translateX: '50%' }}
                  />
                )}

                {/* Card */}
                <motion.div
                  className="glass-card text-center relative z-10"
                  whileHover={{ y: -10, boxShadow: '0 0 40px rgba(0, 217, 255, 0.3)' }}
                >
                  {/* Step Number */}
                  <motion.div
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-electric-blue to-purple-light rounded-full flex items-center justify-center font-bold text-navy">
                      {step.number}
                    </div>
                  </motion.div>

                  {/* Icon */}
                  <div className="mb-6 mt-8 flex justify-center">
                    <motion.div
                      className="p-4 bg-white/5 rounded-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8" style={{color: 'var(--electric-blue)'}} />
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
