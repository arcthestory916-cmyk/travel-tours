import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Compass,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  ArrowRight,
} from "lucide-react";

const WHATSAPP_NUMBER = "917983679412";
const WHATSAPP_MSG = encodeURIComponent(
  "Hello, I want more information about your travel tours.",
);

const footerLinks = {
  Company: [
    { label: "About Us", to: "/contact" },
    { label: "Our Tours", to: "/tours" },
    { label: "Contact", to: "/contact" },
  ],
  Support: [
    { label: "FAQ", to: "#" },
    { label: "Booking Policy", to: "#" },
    { label: "Privacy Policy", to: "#" },
    { label: "Terms of Use", to: "#" },
  ],
};

const socials = [
  { icon: <Instagram size={18} />, href: "#" },
  { icon: <Twitter size={18} />, href: "#" },
  { icon: <Facebook size={18} />, href: "#" },
  { icon: <Youtube size={18} />, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-darkcard border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-sand-400 flex items-center justify-center">
                <Compass size={18} className="text-white" />
              </div>
              <span className="font-display text-xl font-bold text-white">
                Wander<span className="text-gradient">lust</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Crafting unforgettable journeys to the world's most extraordinary
              destinations. Travel smarter. Explore deeper.
            </p>

            {/* Newsletter */}
            <div className="flex gap-2 max-w-xs">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary-500/50 transition-colors"
              />
              <button className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center hover:bg-primary-400 transition-colors shrink-0">
                <ArrowRight size={16} className="text-white" />
              </button>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors duration-300"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-white/40 text-sm hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Wanderlust Travel. All rights reserved.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-white/40 hover:text-[#25D366] transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
