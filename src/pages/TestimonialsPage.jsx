import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechInnovate Inc.',
      text: 'IP Resolve helped us protect our patent portfolio during a critical negotiation. Their expertise and dedication were instrumental in securing a favorable settlement.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      company: 'Creative Studios',
      text: 'The team at IP Resolve resolved our copyright infringement case quickly and professionally. We felt confident and well-represented throughout the process.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Emma Rodriguez',
      company: 'Brand Marketing Co.',
      text: 'Excellent trademark dispute resolution. The attorneys understood our business needs and provided strategic advice that protected our brand identity effectively.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'David Thompson',
      company: 'E-Commerce Solutions',
      text: 'From initial consultation to final resolution, IP Resolve demonstrated exceptional professionalism. Their transparent communication and expertise gave us peace of mind.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Jessica Williams',
      company: 'Digital Arts Studio',
      text: 'We were impressed by IP Resolve\'s comprehensive approach to our copyright concerns. They protected our creative works and helped us understand the legal landscape.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Robert Martinez',
      company: 'Manufacturing Corp',
      text: 'Outstanding service! The team\'s knowledge of patent law is unmatched. They guided us through a complex dispute and secured a favorable outcome for our company.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Lisa Anderson',
      company: 'Software Developers',
      text: 'IP Resolve\'s online consultation service was convenient and effective. They provided expert advice on our software licensing issues without unnecessary complexity.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'James Wilson',
      company: 'Publishing House',
      text: 'We needed quick action on a trademark issue, and IP Resolve delivered. Fast, efficient, and professional – highly recommended for any IP concerns.',
      rating: 5,
      avatar: '👨‍💼'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Client <span className="gradient-text">Testimonials</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            See what our satisfied clients have to say about their experience with IP Resolve
          </p>
        </motion.div>

        {/* Success Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card text-center p-8">
            <div className="text-4xl font-bold gradient-text mb-2">500+</div>
            <p className="text-slate-700">Cases Resolved</p>
          </div>
          <div className="glass-card text-center p-8">
            <div className="text-4xl font-bold gradient-text mb-2">98%</div>
            <p className="text-slate-700">Success Rate</p>
          </div>
          <div className="glass-card text-center p-8">
            <div className="text-4xl font-bold gradient-text mb-2">4.9/5</div>
            <p className="text-slate-700">Average Rating</p>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#5c4033"
                    style={{color: '#5c4033'}}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-800 mb-6 italic leading-relaxed">"{testimonial.text}"</p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-amber-200">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-700">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="glass-card p-12 text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Ready to Resolve Your IP Concerns?</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have successfully resolved their intellectual property disputes with our expert team.
          </p>
          <motion.a
            href="/contact"
            className="gradient-btn glow-btn inline-flex items-center gap-2 px-8 py-4 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Free Consultation
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
