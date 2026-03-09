import { motion } from 'framer-motion';
import ContactSection from '../components/ContactSection';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24"
    >
      {/* Page Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark z-10" />
          <img
            src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=1400&q=80"
            alt="Contact hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary-400 text-sm font-semibold uppercase tracking-widest"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-5xl md:text-6xl font-bold text-white mt-3 mb-4"
          >
            We'd Love to <em className="not-italic text-gradient">Hear</em> from You
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/50 max-w-md mx-auto text-lg"
          >
            Whether you have a question about a tour, pricing, or just want to say hello — our team is here.
          </motion.p>
        </div>
      </div>

      <ContactSection />
    </motion.div>
  );
}
