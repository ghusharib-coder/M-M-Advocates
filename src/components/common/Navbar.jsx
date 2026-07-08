import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import lawLogo from '../../assets/law-logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Process', href: '/process' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'Consultation', href: '/consultation' },
  ];

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-white/80 border-b border-amber-200' : 'bg-white/40'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 w-full items-center justify-between gap-4 sm:h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <img src={lawLogo} alt="M&M Advocates Logo" className="h-12" />
              <span className="text-xl font-bold" style={{color: '#5c4033'}}>M&M Advocates</span>
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="nav-link"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/consultation"
              className="hidden md:inline-flex items-center justify-center whitespace-nowrap rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#5c4033]/25 transition-all duration-300 gradient-btn glow-btn"
            >
              <span>Book Consultation</span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-slate-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden bg-white/90 backdrop-blur-md border-t border-amber-200 ${
            isOpen ? 'block' : 'hidden'
          }`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <motion.button
              className="w-full gradient-btn text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Book Consultation</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
