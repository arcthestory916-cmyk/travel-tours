import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Shield, Headphones } from 'lucide-react';
import Hero from '../components/Hero';
import TourCard from '../components/TourCard';
import BookingForm from '../components/BookingForm';
import ContactSection from '../components/ContactSection';
import { tours } from '../data/tours';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const whyUs = [
  {
    icon: <Compass size={22} />,
    title: 'Expert Curation',
    desc: 'Every itinerary is handpicked by seasoned travel experts who\'ve walked every path.',
  },
  {
    icon: <Shield size={22} />,
    title: 'Safe & Trusted',
    desc: 'Fully licensed and insured. Your safety is our top priority on every journey.',
  },
  {
    icon: <Headphones size={22} />,
    title: '24/7 Support',
    desc: 'Our team is always just a message away — before, during, and after your trip.',
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'New York, USA',
    text: 'The Bali tour exceeded every expectation. Our guide was incredible and the rice terraces at sunrise — absolutely magical.',
    avatar: 'https://i.pravatar.cc/100?img=47',
    tour: 'Bali Sacred Temples',
    rating: 5,
  },
  {
    name: 'James K.',
    location: 'London, UK',
    text: 'Wanderlust turned our anniversary into an epic adventure through Santorini. Perfect in every detail.',
    avatar: 'https://i.pravatar.cc/100?img=32',
    tour: 'Santorini Luxury Escape',
    rating: 5,
  },
  {
    name: 'Priya R.',
    location: 'Mumbai, India',
    text: 'The Japan Cherry Blossom tour was the trip of a lifetime. Seamless organisation, unforgettable moments.',
    avatar: 'https://i.pravatar.cc/100?img=44',
    tour: 'Japanese Cherry Blossom',
    rating: 5,
  },
];

export default function Home() {
  const [bookingTour, setBookingTour] = useState(null);
  const featuredTours = tours.filter(t => t.featured);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero */}
      <Hero />

      {/* Why Us */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest">Why Wanderlust</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
              Travel with <em className="not-italic text-gradient">Confidence</em>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-2xl p-7 group hover:border-primary-500/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-500/15 flex items-center justify-center text-primary-400 mb-5 group-hover:bg-primary-500/25 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="section-pad bg-darkcard/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest">Featured Tours</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
                Handpicked <em className="not-italic text-gradient">Experiences</em>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Link
                to="/tours"
                className="hidden md:flex items-center gap-2 text-sm text-white/50 hover:text-primary-400 transition-colors duration-300"
              >
                View All Tours <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredTours.map((tour, i) => (
              <TourCard key={tour.id} tour={tour} index={i} onBook={setBookingTour} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10 md:hidden"
          >
            <Link to="/tours" className="btn-outline inline-flex items-center gap-2">
              See All Tours <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Destinations banner */}
      <section className="section-pad overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1400&q=80"
              alt="destinations"
              className="w-full h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 md:px-16">
              <div>
                <p className="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-3">85+ Destinations</p>
                <h3 className="font-display text-3xl md:text-5xl font-bold text-white mb-5 max-w-md">
                  Your Next Adventure Awaits
                </h3>
                <Link to="/tours" className="btn-primary inline-flex items-center gap-2">
                  Browse All Tours <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad bg-darkcard/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest">Testimonials</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
              Stories from Our <em className="not-italic text-gradient">Travelers</em>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="glass rounded-2xl p-7 flex flex-col gap-5"
              >
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j} className="text-sand-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-white/60 text-sm leading-relaxed flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-500/30" />
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.location}</p>
                  </div>
                  <span className="ml-auto text-xs text-primary-400/60 font-medium text-right leading-snug max-w-[100px]">
                    {t.tour}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />

      {/* Booking Modal */}
      {bookingTour && (
        <BookingForm tour={bookingTour} onClose={() => setBookingTour(null)} />
      )}
    </motion.div>
  );
}
