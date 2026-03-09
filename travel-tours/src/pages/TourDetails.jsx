import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Star, Clock, Users, MapPin, CheckCircle2,
  Mountain, Calendar, ArrowRight,
} from 'lucide-react';
import BookingForm from '../components/BookingForm';
import TourCard from '../components/TourCard';
import { tours } from '../data/tours';

export default function TourDetails() {
  const { id }       = useParams();
  const navigate     = useNavigate();
  const tour         = tours.find(t => t.id === Number(id));
  const [activeImg,   setActiveImg]   = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);

  if (!tour) {
    return (
      <div className="pt-32 text-center text-white/50 min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="font-display text-3xl">Tour not found</p>
        <Link to="/tours" className="btn-primary">Back to Tours</Link>
      </div>
    );
  }

  const related = tours.filter(t => t.id !== tour.id && t.category === tour.category).slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm">Back</span>
        </button>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left — main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <div>
              <motion.div
                key={activeImg}
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 1 }}
                className="relative aspect-video rounded-3xl overflow-hidden mb-3"
              >
                <img
                  src={tour.gallery[activeImg]}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="glass text-xs font-semibold px-3 py-1.5 rounded-full text-white">
                    {tour.category}
                  </span>
                </div>
              </motion.div>
              <div className="flex gap-3">
                {tour.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`flex-1 aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      activeImg === i ? 'border-primary-500' : 'border-transparent opacity-60 hover:opacity-90'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Title block */}
            <div>
              <div className="flex items-center gap-2 text-primary-400 text-sm font-medium mb-2">
                <MapPin size={14} /> {tour.location}
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                {tour.title}
              </h1>
              <div className="flex flex-wrap items-center gap-5 text-sm text-white/50">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-ocean-400" /> {tour.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users size={14} className="text-ocean-400" /> Max {tour.groupSize} people
                </span>
                <span className="flex items-center gap-1.5">
                  <Mountain size={14} className="text-ocean-400" /> {tour.difficulty}
                </span>
                <span className="flex items-center gap-1.5">
                  <Star size={13} className="fill-sand-400 text-sand-400" />
                  <strong className="text-white">{tour.rating}</strong>
                  <span>({tour.reviews} reviews)</span>
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="glass rounded-2xl p-6">
              <h2 className="font-display text-xl font-bold text-white mb-3">About This Tour</h2>
              <p className="text-white/60 leading-relaxed">{tour.description}</p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="font-display text-xl font-bold text-white mb-4">Tour Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {tour.highlights.map((h, i) => (
                  <motion.div
                    key={h}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 glass rounded-xl p-3.5"
                  >
                    <CheckCircle2 size={16} className="text-primary-400 mt-0.5 shrink-0" />
                    <span className="text-white/70 text-sm">{h}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div>
              <h2 className="font-display text-xl font-bold text-white mb-4">What's Included</h2>
              <ul className="space-y-2.5">
                {tour.included.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={12} className="text-emerald-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — booking card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-3xl p-7"
              >
                <div className="mb-5">
                  <p className="text-white/40 text-sm mb-1">Starting from</p>
                  <div className="flex items-end gap-2">
                    <span className="font-display text-4xl font-bold text-gradient">
                      ${tour.price.toLocaleString()}
                    </span>
                    <span className="text-white/40 text-sm mb-1">/person</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-white/5">
                    <span className="text-white/50 text-sm flex items-center gap-2">
                      <Clock size={14} /> Duration
                    </span>
                    <span className="text-white text-sm font-medium">{tour.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-white/5">
                    <span className="text-white/50 text-sm flex items-center gap-2">
                      <Users size={14} /> Group size
                    </span>
                    <span className="text-white text-sm font-medium">Max {tour.groupSize}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-white/5">
                    <span className="text-white/50 text-sm flex items-center gap-2">
                      <Mountain size={14} /> Difficulty
                    </span>
                    <span className="text-white text-sm font-medium">{tour.difficulty}</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-white/50 text-sm flex items-center gap-2">
                      <Calendar size={14} /> Availability
                    </span>
                    <span className="text-emerald-400 text-sm font-medium">Available</span>
                  </div>
                </div>

                <button
                  onClick={() => setBookingOpen(true)}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-base mb-3"
                >
                  Book This Tour <ArrowRight size={18} />
                </button>
                <p className="text-xs text-white/30 text-center">
                  No upfront payment · Free cancellation 48h
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Related Tours */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-3xl font-bold text-white mb-8">
              Similar <em className="not-italic text-gradient">Tours</em>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((t, i) => (
                <TourCard key={t.id} tour={t} index={i} onBook={() => setBookingOpen(true)} />
              ))}
            </div>
          </div>
        )}
      </div>

      {bookingOpen && (
        <BookingForm tour={tour} onClose={() => setBookingOpen(false)} />
      )}
    </motion.div>
  );
}
