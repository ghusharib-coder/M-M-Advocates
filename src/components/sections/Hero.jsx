import { motion } from 'framer-motion';
import { ShieldAlert, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden pt-20" id="home" style={{backgroundImage: 'linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 50%, rgb(15, 23, 42) 100%)'}}>
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
          style={{backgroundColor: 'rgba(0, 102, 255, 0.1)'}}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{backgroundColor: 'rgba(168, 85, 247, 0.1)'}}
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center justify-center gap-2 mb-8 px-4 py-2 bg-white/10 border border-cyan-400/50 rounded-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ShieldAlert size={18} style={{color: 'var(--electric-blue)'}} />
          <span className="text-sm text-gray-300">Expert IP Dispute Resolution</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Protect Your{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">Intellectual Property</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Navigate complex copyright, trademark, and patent disputes with expert legal guidance. 
          Resolve conflicts efficiently with our advanced IP dispute resolution platform.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            className="gradient-btn glow-btn flex items-center gap-2 px-8 py-4 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Book Consultation</span>
            <ArrowRight size={20} />
          </motion.button>

          <motion.button
            className="px-8 py-4 text-lg font-semibold border-2 rounded-lg hover:opacity-80 transition-all duration-300"
            style={{
              borderColor: 'var(--electric-blue)',
              color: 'var(--electric-blue)'
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="mt-16 pt-16 border-t border-white/10 grid grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div>
            <div className="text-3xl font-bold gradient-text">500+</div>
            <p className="text-gray-400 text-sm mt-2">Cases Resolved</p>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text">98%</div>
            <p className="text-gray-400 text-sm mt-2">Success Rate</p>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text">50+</div>
            <p className="text-gray-400 text-sm mt-2">Legal Experts</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
