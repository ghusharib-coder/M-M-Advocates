import { motion } from 'framer-motion';
import { Upload, Search, Users, CheckCircle } from 'lucide-react';

export default function ProcessPage() {
  const steps = [
    {
      number: '01',
      icon: Upload,
      title: 'Submit Issue',
      description: 'Begin by submitting your IP dispute details through our secure online form. Provide all relevant documentation and context about your case.',
      details: [
        'Describe the intellectual property at stake',
        'Provide evidence of ownership or rights',
        'Detail the nature of the dispute',
        'Submit supporting documents'
      ]
    },
    {
      number: '02',
      icon: Search,
      title: 'Case Review',
      description: 'Our expert team conducts a thorough review of your case, analyzing all evidence and determining the best legal strategy.',
      details: [
        'Comprehensive legal analysis',
        'Evidence evaluation',
        'Risk assessment',
        'Strategy recommendation'
      ]
    },
    {
      number: '03',
      icon: Users,
      title: 'Expert Consultation',
      description: 'Meet with our IP specialists for an in-depth consultation to discuss findings, options, and the recommended course of action.',
      details: [
        'One-on-one consultation',
        'Strategy discussion',
        'Timeline planning',
        'Cost estimation'
      ]
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Resolution',
      description: 'We execute the agreed-upon strategy, handling all communications and negotiations to reach an optimal resolution for your case.',
      details: [
        'Active case management',
        'Legal representation',
        'Negotiations',
        'Final settlement or judgment'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Our <span className="gradient-text">Process</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            A transparent, step-by-step approach to resolving your intellectual property disputes
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="glass-card text-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
                  {/* Step Number */}
                  <div className="flex flex-col items-center justify-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl text-white"
                      style={{
                        background: 'linear-gradient(135deg, #5c4033, #8b6f47)'
                      }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Icon and Title */}
                  <div className="flex flex-col items-center md:items-start gap-4 col-span-1 md:col-span-2">
                    <motion.div
                      className="p-4 rounded-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8" style={{color: '#5c4033'}} />
                    </motion.div>

                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                      <p className="text-slate-700 text-sm">{step.description}</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="text-left">
                    <p className="text-sm font-semibold mb-3 text-slate-800">What's Included:</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Divider */}
                <div className="absolute top-0 bottom-0 left-0 w-1" style={{background:'#5c4033'}} />
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Visualization */}
        <motion.div
          className="glass-card p-12 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center text-slate-900">Typical Timeline</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text mb-2">1-2 Days</p>
              <p className="text-slate-700 text-sm">Initial Review</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text mb-2">3-5 Days</p>
              <p className="text-slate-700 text-sm">Case Analysis</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text mb-2">1 Week</p>
              <p className="text-slate-700 text-sm">Consultation</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text mb-2">Ongoing</p>
              <p className="text-slate-700 text-sm">Resolution Phase</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
