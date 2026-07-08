import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Statistics() {
  const [counts, setCounts] = useState({
    cases: 0,
    clients: 0,
    experts: 0,
    rate: 0,
  });

  useEffect(() => {
    const targets = { cases: 500, clients: 2500, experts: 50, rate: 98 };
    const increment = { cases: 10, clients: 50, experts: 1, rate: 1.96 };
    let current = { cases: 0, clients: 0, experts: 0, rate: 0 };

    const timer = setInterval(() => {
      current.cases = Math.min(current.cases + increment.cases, targets.cases);
      current.clients = Math.min(current.clients + increment.clients, targets.clients);
      current.experts = Math.min(current.experts + increment.experts, targets.experts);
      current.rate = Math.min(current.rate + increment.rate, targets.rate);

      setCounts({
        cases: Math.floor(current.cases),
        clients: Math.floor(current.clients),
        experts: Math.floor(current.experts),
        rate: Math.floor(current.rate),
      });

      if (
        current.cases === targets.cases &&
        current.clients === targets.clients &&
        current.experts === targets.experts &&
        current.rate === targets.rate
      ) {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: 'Cases Resolved', value: counts.cases, suffix: '+' },
    { label: 'Clients Served', value: counts.clients, suffix: '+' },
    { label: 'Legal Experts', value: counts.experts, suffix: '+' },
    { label: 'Success Rate', value: counts.rate, suffix: '%' },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            By The <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our track record speaks for itself.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card text-center"
              whileHover={{
                y: -10,
                boxShadow: '0 0 50px rgba(0, 217, 255, 0.4)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="text-5xl font-bold gradient-text mb-3"
                key={stat.value}
              >
                {stat.value}
                <span style={{color: 'var(--electric-blue)'}}>{stat.suffix}</span>
              </motion.div>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
