import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechStart Inc.',
      text: 'IP Resolve helped us protect our trademark during a critical dispute. Excellent guidance!',
      rating: 5,
      image: '👩‍💼',
    },
    {
      name: 'James Morrison',
      company: 'Creative Studios',
      text: 'Fast, professional, and results-driven. Highly recommend for copyright protection.',
      rating: 5,
      image: '👨‍💼',
    },
    {
      name: 'Maria Garcia',
      company: 'Innovation Labs',
      text: 'The patent consultation team was incredibly knowledgeable. Worth every penny.',
      rating: 5,
      image: '👩‍🔬',
    },
    {
      name: 'David Lee',
      company: 'Digital Marketing Co.',
      text: 'Resolved our brand dispute in record time. Professional and transparent.',
      rating: 5,
      image: '👨‍💻',
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-light/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real stories from businesses we've helped.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-card"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: '0 0 30px rgba(0, 217, 255, 0.25)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    style={{color: '#5c4033'}}
                    className="fill-current"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-electric-blue to-purple-light flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
