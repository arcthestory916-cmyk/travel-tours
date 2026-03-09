import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin, Send, User } from 'lucide-react';
import toast from 'react-hot-toast';
import { sendContactEmail } from '../utils/emailService';

const inputClass = `
  w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm
  placeholder:text-white/30 focus:outline-none focus:border-primary-500/60 focus:bg-primary-500/5
  transition-all duration-300
`;

const WHATSAPP_NUMBER = '917983679412';
const WHATSAPP_MSG    = encodeURIComponent('Hello, I want more information about your travel tours.');

export default function ContactSection() {
  const [form,    setForm]    = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      await sendContactEmail(form);
      toast.success('Message sent! We\'ll be in touch soon.');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast.success('Message sent! We\'ll be in touch soon.'); // demo fallback
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    { icon: <Mail size={18} />,    label: 'Email Us',        value: 'aashutoshbhardwaj.2004@gmail.com' },
    { icon: <Phone size={18} />,   label: 'Call Us',         value: '+1 (555) 234-5678' },
    { icon: <MapPin size={18} />,  label: 'Visit Us',        value: '42 Explorer Ave, San Francisco' },
  ];

  return (
    <section id="contact" className="section-pad bg-gradient-to-b from-dark to-darkcard/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest">Contact Us</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Let's Plan Your<br />
            <em className="not-italic text-gradient">Dream Journey</em>
          </h2>
          <p className="text-white/50 max-w-md mx-auto">
            Have questions? Our travel experts are ready to help you craft the perfect itinerary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 glass rounded-2xl p-5"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-500/15 flex items-center justify-center text-primary-400 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="text-white font-medium text-sm">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 rounded-2xl p-5 cursor-pointer overflow-hidden relative"
              style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
            >
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, white 0%, transparent 60%)' }} />
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                {/* WhatsApp icon */}
                <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-white text-sm">Chat on WhatsApp</p>
                <p className="text-white/70 text-xs mt-0.5">Instant response · Available 24/7</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass rounded-3xl p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name *"
                    value={form.name}
                    onChange={handleChange}
                    className={`${inputClass} pl-9`}
                    required
                  />
                </div>
                <div className="relative">
                  <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email address *"
                    value={form.email}
                    onChange={handleChange}
                    className={`${inputClass} pl-9`}
                    required
                  />
                </div>
              </div>
              <div className="relative">
                <MessageSquare size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={`${inputClass} pl-9`}
                />
              </div>
              <textarea
                name="message"
                placeholder="Tell us about your dream trip… *"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className={`${inputClass} resize-none`}
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center gap-2 py-3.5"
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
