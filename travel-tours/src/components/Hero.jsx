import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Star, MapPin } from "lucide-react";
import { stats } from "../data/tours";

const heroImage =
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=90";

const destinations = [
  {
    name: "Santorini",
    img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=200&q=80",
  },
  {
    name: "Bali",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=200&q=80",
  },
  {
    name: "Japan",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=200&q=80",
  },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-transparent to-transparent z-10" />
        <img
          src={heroImage}
          alt="Travel hero"
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-ocean-500/10 rounded-full blur-3xl z-0" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full pt-24 pb-12"
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
          >
            <Star size={14} className="text-sand-400 fill-sand-400" />
            <span className="text-sm text-white/80">
              Rated #1 Travel Agency — 2024
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6"
          >
            Explore the <em className="text-gradient not-italic">World's</em>
            <br />
            Hidden Wonders
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Handcrafted journeys to the planet's most breathtaking places. Let
            us turn your dream destination into an unforgettable memory.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Link
                to="/tours"
                className="btn-primary flex items-center gap-2 text-base"
              >
                Start Exploring
                <ArrowRight size={18} />
              </Link>
            </motion.div>
            <button className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300 group">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                <Play size={16} className="fill-white text-white ml-0.5" />
              </div>
              <span className="font-medium text-sm">Watch Our Story</span>
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="glass rounded-2xl p-4"
              >
                <div className="font-display text-2xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-xs text-white/50 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating destination cards */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-12 right-4 md:right-8 lg:right-16 flex flex-col gap-3"
        >
          <p className="text-xs text-white/40 uppercase tracking-widest mb-1">
            Popular Now
          </p>
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + i * 0.12 }}
              whileHover={{ scale: 1.04, x: -4 }}
              className="flex items-center gap-3 glass rounded-xl px-3 py-2 cursor-pointer"
            >
              <img
                src={dest.img}
                alt={dest.name}
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <p className="text-sm font-medium text-white">{dest.name}</p>
                <p className="text-xs text-white/40 flex items-center gap-1">
                  <MapPin size={10} /> Top Rated
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
        <span className="text-xs text-white/30 tracking-widest uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
