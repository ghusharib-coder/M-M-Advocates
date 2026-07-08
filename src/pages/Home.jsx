import { motion } from 'framer-motion';
import { ArrowRight, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import lawHeaderImage from '../assets/law-header.jpeg';

export default function Home() {
  const stats = [
    { value: 500, label: 'Cases Resolved', suffix: '+' },
    { value: 98, label: 'Success Rate', suffix: '%' },
    { value: 50, label: 'Legal Experts', suffix: '+' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative overflow-hidden pt-24 py-12" id="home" style={{backgroundImage: `url(${lawHeaderImage})`}}>
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
          style={{backgroundColor: 'rgba(92, 64, 51, 0.15)'}}
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{backgroundColor: 'rgba(139, 111, 71, 0.15)'}}
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center justify-center gap-2 mb-8 px-4 py-2 bg-white/20 border border-white/40 rounded-full backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ShieldAlert size={18} style={{color: '#ffffff'}} />
            <span className="text-sm font-medium text-white">Protect Your Intellectual Property</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Protect Your{' '}
            <span>Intellectual Property</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-white mb-12 max-w-2xl mx-auto drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Expert consultation and legal guidance for copyright, trademark, and patent disputes. Resolve conflicts efficiently with our specialized team.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/consultation">
              <motion.button
                className="gradient-btn glow-btn flex items-center gap-2 px-8 py-4 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Book Consultation</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                className="px-8 py-4 text-lg font-semibold border-2 rounded-lg hover:bg-white/20 transition-all duration-300 text-white backdrop-blur-sm"
                style={{
                  borderColor: '#ffffff'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-lg text-center backdrop-blur-md bg-white/10 border-white/30"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold mb-2 text-white">
                  {stat.value}
                  <span style={{color: '#ffffff'}}>{stat.suffix}</span>
                </div>
                <p className="text-white/90">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About M&M Advocates Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">M&M Advocates</span>
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              A team of experienced intellectual property lawyers dedicated to protecting your innovations and intellectual assets with excellence and integrity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-slate-900">
                Expert Legal Guidance
              </h3>
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  Our team comprises seasoned intellectual property attorneys with decades of combined experience in copyright, trademark, patent, and trade secret law.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  We specialize in resolving complex IP disputes and providing strategic counsel to businesses of all sizes, from startups to multinational corporations.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  With a proven track record of 500+ cases resolved and 98% success rate, M&M Advocates stands as a trusted partner in IP protection and enforcement.
                </p>
              </div>
              <motion.button
                className="gradient-btn mt-8 px-6 py-3 rounded-lg text-white font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                Meet Our Team
              </motion.button>
            </motion.div>

            {/* Right Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card text-center">
                <div className="text-4xl font-bold mb-2" style={{color: '#5c4033'}}>
                  50+
                </div>
                <p className="text-slate-700 font-semibold">Lawyers & Advocates</p>
                <p className="text-sm text-slate-600">Specialized in IP Law</p>
              </div>
              <div className="glass-card text-center">
                <div className="text-4xl font-bold mb-2" style={{color: '#5c4033'}}>
                  15+
                </div>
                <p className="text-slate-700 font-semibold">Years Experience</p>
                <p className="text-sm text-slate-600">In Intellectual Property</p>
              </div>
              <div className="glass-card text-center">
                <div className="text-4xl font-bold mb-2" style={{color: '#5c4033'}}>
                  500+
                </div>
                <p className="text-slate-700 font-semibold">Cases Won</p>
                <p className="text-sm text-slate-600">Across Multiple Domains</p>
              </div>
              <div className="glass-card text-center">
                <div className="text-4xl font-bold mb-2" style={{color: '#5c4033'}}>
                  98%
                </div>
                <p className="text-slate-700 font-semibold">Success Rate</p>
                <p className="text-sm text-slate-600">Client Satisfaction</p>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              {
                title: 'Excellence',
                desc: 'Unwavering commitment to delivering superior legal representation and results.'
              },
              {
                title: 'Integrity',
                desc: 'Building trust through ethical practices and transparent communication with clients.'
              },
              {
                title: 'Innovation',
                desc: 'Staying ahead with cutting-edge strategies in IP law and dispute resolution.'
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                className="glass-card text-center"
                whileHover={{ y: -5 }}
              >
                <h4 className="text-2xl font-bold mb-3" style={{color: '#5c4033'}}>
                  {value.title}
                </h4>
                <p className="text-slate-700">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
