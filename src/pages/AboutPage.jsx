import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  const features = [
    {
      icon: Award,
      title: 'Expert Legal Team',
      description: 'Our team comprises experienced IP attorneys with 20+ years of combined expertise in intellectual property law.'
    },
    {
      icon: Users,
      title: 'Client-Focused Approach',
      description: 'We prioritize understanding your unique needs and providing personalized solutions for maximum protection.'
    },
    {
      icon: Zap,
      title: 'Fast Resolution',
      description: 'Streamlined processes and proactive strategies ensure quick and efficient dispute resolution.'
    },
    {
      icon: CheckCircle,
      title: 'Proven Track Record',
      description: 'Successfully resolved 500+ cases with a 98% success rate across all IP dispute categories.'
    }
  ];

  const values = [
    {
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our professional dealings.'
    },
    {
      title: 'Excellence',
      description: 'Commitment to delivering superior quality legal services and strategic advice.'
    },
    {
      title: 'Innovation',
      description: 'Staying at the forefront of IP law developments and employing cutting-edge strategies.'
    },
    {
      title: 'Transparency',
      description: 'Clear communication and honest assessments of your IP protection needs and options.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            About <span className="gradient-text">M&M Advocates</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Leading intellectual property dispute resolution firm dedicated to protecting innovation and creativity worldwide.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="glass-card mb-20 p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 gradient-text">Our Mission</h2>
          <p className="text-slate-800 text-lg leading-relaxed mb-6">
            At IP Resolve, our mission is to help businesses and individuals effectively protect their intellectual property rights while navigating complex legal landscapes. We believe that innovation deserves protection, and creators deserve peace of mind knowing their work is safeguarded by expert legal professionals.
          </p>
          <p className="text-slate-800 text-lg leading-relaxed">
            Since our founding, we've successfully helped hundreds of clients resolve disputes across patents, trademarks, copyrights, and other IP matters. Our commitment to excellence, transparency, and client success drives everything we do.
          </p>
        </motion.div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">Why Choose IP Resolve?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="glass-card p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 mt-1 flex-shrink-0" style={{color: '#5c4033'}} />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-slate-900">{feature.title}</h3>
                      <p className="text-slate-700">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold mb-4 text-slate-900">
                  {value.title}
                </h3>
                <p className="text-slate-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card text-center p-8">
            <div className="text-4xl font-bold gradient-text mb-2">15+</div>
            <p className="text-slate-700">Years of Experience</p>
          </div>
          <div className="glass-card text-center p-8">
            <div className="text-4xl font-bold gradient-text mb-2">500+</div>
            <p className="text-slate-700">Successful Cases</p>
          </div>
          <div className="glass-card text-center p-8">
            <div className="text-4xl font-bold gradient-text mb-2">50+</div>
            <p className="text-slate-700">Legal Experts</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
