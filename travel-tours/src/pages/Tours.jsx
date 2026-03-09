import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import TourCard from '../components/TourCard';
import BookingForm from '../components/BookingForm';
import { tours, categories } from '../data/tours';

const sortOptions = [
  { label: 'Popular',    value: 'popular' },
  { label: 'Price: Low', value: 'price-asc' },
  { label: 'Price: High',value: 'price-desc' },
  { label: 'Rating',     value: 'rating' },
  { label: 'Duration',   value: 'duration' },
];

function applySort(arr, sort) {
  const copy = [...arr];
  switch (sort) {
    case 'price-asc':  return copy.sort((a, b) => a.price - b.price);
    case 'price-desc': return copy.sort((a, b) => b.price - a.price);
    case 'rating':     return copy.sort((a, b) => b.rating - a.rating);
    case 'duration':   return copy.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
    default:           return copy;
  }
}

export default function Tours() {
  const [query,       setQuery]       = useState('');
  const [category,    setCategory]    = useState('All');
  const [sort,        setSort]        = useState('popular');
  const [bookingTour, setBookingTour] = useState(null);

  const filtered = applySort(
    tours.filter(t => {
      const matchCat = category === 'All' || t.category === category;
      const matchQ   = !query || t.title.toLowerCase().includes(query.toLowerCase()) ||
                       t.location.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    }),
    sort
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24"
    >
      {/* Page hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark z-10" />
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1400&q=80"
            alt="Tours hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary-400 text-sm font-semibold uppercase tracking-widest"
          >
            All Destinations
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-5xl md:text-6xl font-bold text-white mt-3 mb-4"
          >
            Explore Our <em className="not-italic text-gradient">Tours</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/50 max-w-md mx-auto text-lg"
          >
            Discover {tours.length} thoughtfully crafted journeys across {'>'}50 countries.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-4 md:p-5 mb-10 flex flex-col md:flex-row items-stretch md:items-center gap-4"
        >
          {/* Search */}
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              placeholder="Search destinations or tours…"
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary-500/50 transition-colors"
            />
            {query && (
              <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white">
                <X size={14} />
              </button>
            )}
          </div>

          {/* Category filters */}
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`text-xs font-medium px-4 py-2 rounded-xl transition-all duration-300 ${
                  category === cat
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'glass text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={15} className="text-white/30 shrink-0" />
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-primary-500/50 transition-colors appearance-none cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value} className="bg-darkcard">{opt.label}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Result count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-white/40 text-sm">
            Showing <span className="text-white font-medium">{filtered.length}</span> tours
            {category !== 'All' && <span> in <span className="text-primary-400">{category}</span></span>}
          </p>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={`${category}-${sort}-${query}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((tour, i) => (
                <TourCard key={tour.id} tour={tour} index={i} onBook={setBookingTour} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="font-display text-2xl text-white/30 mb-2">No tours found</p>
              <p className="text-white/20 text-sm">Try adjusting your filters</p>
              <button
                onClick={() => { setQuery(''); setCategory('All'); }}
                className="btn-outline mt-6 text-sm"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {bookingTour && (
        <BookingForm tour={bookingTour} onClose={() => setBookingTour(null)} />
      )}
    </motion.div>
  );
}
