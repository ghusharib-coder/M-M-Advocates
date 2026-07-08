import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What types of IP disputes do you handle?',
      answer: 'We specialize in copyright disputes, trademark conflicts, patent cases, and brand protection matters. Our team can handle virtually any intellectual property issue.',
    },
    {
      question: 'How long does the dispute resolution process take?',
      answer: 'Timeline varies depending on case complexity. Most cases are resolved within 2-8 weeks. We keep you updated throughout the process.',
    },
    {
      question: 'What is your success rate?',
      answer: 'We maintain a 98% success rate in resolving disputes favorably for our clients. Our data-driven approach ensures the best outcomes.',
    },
    {
      question: 'Do you offer online consultations?',
      answer: 'Yes! All consultations can be conducted online via video call or email. We serve clients globally with convenient scheduling.',
    },
    {
      question: 'What are your pricing options?',
      answer: 'We offer transparent, flexible pricing based on your case type and complexity. Initial consultation is free, with customized packages available.',
    },
    {
      question: 'How do I get started?',
      answer: 'Simply book a consultation through our website. Share details about your case, and our team will assess and provide guidance on next steps.',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-400">
            Get answers to common questions about our services.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass-card p-0 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-6 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-bold text-white text-left">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="flex-shrink-0" size={24} style={{color: 'var(--electric-blue)'}} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-400 border-t border-white/10">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
