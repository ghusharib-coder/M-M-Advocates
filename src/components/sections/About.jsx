import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function About() {
  const features = [
    'Expert legal consultation',
    'Fast dispute resolution',
    'Comprehensive IP protection',
    'Transparent pricing',
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Intellectual Property <span className="gradient-text">Matters</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Your intellectual property is your competitive advantage. Protect it with expert guidance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-3xl font-bold mb-8"
              variants={itemVariants}
            >
              Comprehensive IP Solutions
            </motion.h3>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 mb-6"
                variants={itemVariants}
              >
                <CheckCircle className="flex-shrink-0 mt-1" size={24} style={{color: 'var(--electric-blue)'}} />
                <div>
                  <p className="text-lg text-gray-300">{feature}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Glass Cards */}
          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card">
              <h4 className="text-xl font-bold mb-3" style={{color: 'var(--electric-blue)'}}>Our Mission</h4>
              <p className="text-gray-300">
                To empower businesses and creators by providing accessible, expert-led intellectual property dispute resolution.
              </p>
            </div>

            <div className="glass-card">
              <h4 className="text-xl font-bold mb-3" style={{color: 'var(--purple-light)'}}>Why Choose Us</h4>
              <p className="text-gray-300">
                Decades of combined legal expertise, proven track record, and commitment to client success.
              </p>
            </div>

            <div className="glass-card">
              <h4 className="text-xl font-bold mb-3" style={{color: 'var(--blue-accent)'}}>Our Approach</h4>
              <p className="text-gray-300">
                Data-driven analysis, strategic thinking, and personalized solutions for each unique case.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
