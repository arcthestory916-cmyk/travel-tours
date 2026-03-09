import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, MapPin, Users, ArrowRight } from 'lucide-react';

export default function TourCard({ tour, index = 0, onBook }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  const difficultyColor = {
    Easy:     'text-emerald-400 bg-emerald-400/10',
    Moderate: 'text-sand-400 bg-sand-400/10',
    Hard:     'text-red-400 bg-red-400/10',
  }[tour.difficulty] || 'text-white/40 bg-white/5';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="card-tour group cursor-pointer"
      style={{
        boxShadow: '0 4px 32px rgba(0,0,0,0.3)',
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        {/* Skeleton */}
        {!imgLoaded && (
          <div className="absolute inset-0 shimmer" />
        )}
        <motion.img
          src={tour.image}
          alt={tour.title}
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-darkcard via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="glass text-xs font-semibold px-3 py-1 rounded-full text-white">
            {tour.category}
          </span>
        </div>

        {/* Difficulty badge */}
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${difficultyColor}`}>
            {tour.difficulty}
          </span>
        </div>

        {/* Price */}
        <div className="absolute bottom-3 right-3 glass rounded-xl px-3 py-1.5">
          <span className="text-lg font-bold text-white">${tour.price.toLocaleString()}</span>
          <span className="text-xs text-white/50"> /person</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-primary-400 text-xs font-medium mb-2">
          <MapPin size={12} />
          <span>{tour.location}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-semibold text-white leading-snug mb-3 group-hover:text-gradient transition-all duration-300 line-clamp-2">
          {tour.title}
        </h3>

        {/* Meta row */}
        <div className="flex items-center gap-4 text-sm text-white/50 mb-4">
          <span className="flex items-center gap-1.5">
            <Clock size={13} className="text-ocean-400" />
            {tour.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={13} className="text-ocean-400" />
            Max {tour.groupSize}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={13}
                className={i < Math.floor(tour.rating) ? 'fill-sand-400 text-sand-400' : 'text-white/20'}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-white">{tour.rating}</span>
          <span className="text-xs text-white/40">({tour.reviews} reviews)</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onBook && onBook(tour)}
            className="btn-primary text-sm py-2.5 px-4 flex-1 text-center"
          >
            Book Now
          </button>
          <Link
            to={`/tours/${tour.id}`}
            className="flex items-center justify-center w-10 h-10 rounded-full glass hover:bg-white/10 transition-colors duration-300 text-white/60 hover:text-white"
          >
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Hover glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ boxShadow: '0 0 40px rgba(249,115,22,0.12), inset 0 0 0 1px rgba(249,115,22,0.15)' }}
      />
    </motion.div>
  );
}
