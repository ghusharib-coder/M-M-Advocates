import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What is intellectual property and why is it important?',
      answer: 'Intellectual property refers to creations of the mind including inventions, literary and artistic works, designs, symbols, names, and images. IP is important because it protects the rights of creators and innovators, ensuring they receive recognition and compensation for their work while maintaining competitive advantage in the marketplace.'
    },
    {
      question: 'How long does a typical IP dispute take to resolve?',
      answer: 'The timeline varies depending on the complexity of the case. Simple disputes may take 3-6 months, while complex litigation can take 1-3 years. Our team works efficiently to expedite resolution through negotiation, mediation, or litigation as appropriate.'
    },
    {
      question: 'What are the costs associated with IP dispute resolution?',
      answer: 'Costs depend on factors like case complexity, dispute type, and resolution method. We offer transparent pricing and flexible arrangements. Our initial consultation is free, and we provide detailed cost estimates before proceeding with your case.'
    },
    {
      question: 'Can I negotiate a settlement in IP disputes?',
      answer: 'Yes, settlement is often an effective and cost-efficient way to resolve IP disputes. Our experienced negotiators work to reach favorable settlements that protect your interests while avoiding lengthy litigation. Many cases are successfully resolved through negotiation and mediation.'
    },
    {
      question: 'Do you handle international IP disputes?',
      answer: 'Yes, we have experience with international IP matters. We work with partners in various countries and understand the complexities of cross-border IP disputes, including jurisdictional issues, enforcement, and international treaties.'
    },
    {
      question: 'How do I get started with a consultation?',
      answer: 'Simply fill out our contact form or call us to schedule a consultation. During the initial meeting, we\'ll assess your situation, explain our approach, provide preliminary advice, and discuss next steps. The initial consultation is complimentary.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            Find answers to common questions about intellectual property and our services
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-20">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass-card p-0 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-amber-100/50 transition-colors"
                whileHover={{ backgroundColor: 'rgba(219, 234, 254, 0.5)' }}
              >
                <h3 className="text-lg font-bold text-slate-900 pr-8">{faq.question}</h3>
                <ChevronDown
                  className="flex-shrink-0 transition-transform"
                  size={24}
                  style={{
                    color: '#5c4033',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                />
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-amber-200"
                  >
                    <p className="p-6 text-slate-700 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Additional Help */}
        <motion.div
          className="glass-card text-center py-12 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Didn't find your answer?</h2>
          <p className="text-slate-700 mb-6">
            Contact our team directly for detailed answers to specific questions about your case.
          </p>
          <motion.a
            href="/contact"
            className="gradient-btn glow-btn inline-flex items-center gap-2 px-8 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
