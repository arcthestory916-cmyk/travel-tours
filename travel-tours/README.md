# 🌍 Wanderlust — Travel & Tour Booking Website

A fully responsive, frontend-only Travel & Tour Booking website built with React + Vite, TailwindCSS, Framer Motion, React Router and EmailJS.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:5173
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          — Sticky nav with blur, mobile hamburger menu
│   ├── Hero.jsx            — Parallax hero with animated stats & floating cards
│   ├── TourCard.jsx        — Hover animations, skeleton loading, glow effect
│   ├── BookingForm.jsx     — Slide-up modal with success animation
│   ├── ContactSection.jsx  — Contact form + WhatsApp CTA
│   └── Footer.jsx          — Newsletter, social links, sitemap
│
├── pages/
│   ├── Home.jsx            — Hero + featured tours + testimonials
│   ├── Tours.jsx           — Filterable/sortable tour listing
│   ├── TourDetails.jsx     — Gallery, highlights, sticky booking card
│   └── Contact.jsx         — Full contact page
│
├── data/
│   └── tours.js            — Tour data (6 curated destinations)
│
├── utils/
│   └── emailService.js     — EmailJS helper functions
│
├── App.jsx                 — Router setup with AnimatePresence page transitions
├── main.jsx
└── index.css               — Tailwind + custom utilities (glass, gradients, shimmer)
```

---

## 📧 EmailJS Setup

1. Sign up at [https://www.emailjs.com](https://www.emailjs.com) (free: 200 emails/month)
2. Create an **Email Service** (Gmail, Outlook, etc.)
3. Create an **Email Template** using these variables:

   | Variable       | Description              |
   |----------------|--------------------------|
   | `{{from_name}}`  | Sender's name           |
   | `{{from_email}}` | Sender's email          |
   | `{{phone}}`      | Phone number (booking)  |
   | `{{tour_name}}`  | Tour name (booking)     |
   | `{{travel_date}}`| Travel date (booking)   |
   | `{{num_people}}` | Number of travelers     |
   | `{{subject}}`    | Subject (contact form)  |
   | `{{message}}`    | Message body            |

4. Copy your credentials into `src/utils/emailService.js`:

```js
const SERVICE_ID  = 'service_xxxxxxx';
const TEMPLATE_ID = 'template_xxxxxxx';
const PUBLIC_KEY  = 'user_XXXXXXXXXXX';
```

---

## 📱 WhatsApp Integration

Update the phone number in:
- `src/components/Navbar.jsx` (line ~60)
- `src/components/ContactSection.jsx` (line ~6)
- `src/components/Footer.jsx` (line ~6)

Change `WHATSAPP_NUMBER = '1234567890'` to your number (no + or dashes).

---

## 🎨 Design Highlights

| Feature              | Implementation                        |
|----------------------|---------------------------------------|
| Dark luxury theme    | CSS variables + Tailwind custom colors |
| Playfair Display     | Google Fonts display font             |
| Glass morphism       | `.glass` / `.glass-dark` utility classes |
| Parallax hero        | Framer Motion `useScroll` + `useTransform` |
| Stagger animations   | `whileInView` with staggered `delay`  |
| Page transitions     | `AnimatePresence` + `mode="wait"`     |
| Booking modal        | Slide-up spring animation             |
| Success animation    | Scale spring on checkmark             |
| Shimmer skeleton     | CSS keyframe animation                |
| Glow card hover      | Box-shadow on `whileHover`            |
| Gradient text        | `-webkit-background-clip: text`       |

---

## 🛠 Tech Stack

| Package              | Version   | Purpose                      |
|----------------------|-----------|------------------------------|
| react                | ^18.2.0   | UI framework                 |
| react-router-dom     | ^6.22.3   | Client-side routing          |
| framer-motion        | ^11.1.7   | Animations & page transitions|
| tailwindcss          | ^3.4.3    | Utility-first CSS            |
| lucide-react         | ^0.372.0  | Icon library                 |
| @emailjs/browser     | ^4.3.3    | Send emails without backend  |
| react-hot-toast      | ^2.4.1    | Toast notifications          |
| vite                 | ^5.2.0    | Build tool & dev server      |

---

## 📦 Build for Production

```bash
npm run build
# Output in /dist folder — ready to deploy on Vercel, Netlify, etc.
```

---

## 🌐 Deployment (Vercel)

```bash
npm install -g vercel
vercel
# Follow prompts — auto-detects Vite
```

> **Note:** Since this is a SPA with client-side routing, add a `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
