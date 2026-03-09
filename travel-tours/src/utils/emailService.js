import emailjs from '@emailjs/browser';

// ⚠️  Replace these with your actual EmailJS credentials
// Sign up at https://www.emailjs.com/ (free tier: 200 emails/month)
const SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // e.g. 'template_xyz789'
const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';  // e.g. 'user_XXXXXXXXXXXX'

// Your personal contact details — all form submissions land here
const ADMIN_EMAIL = 'aashutoshbhardwaj.2004@gmail.com';
const ADMIN_NAME  = 'Aashutosh Bhardwaj';

/**
 * Send a booking enquiry via EmailJS.
 * All booking emails will land in aashutoshbhardwaj.2004@gmail.com
 */
export const sendBookingEmail = async (bookingData) => {
  const templateParams = {
    from_name:    bookingData.name,
    from_email:   bookingData.email,
    phone:        bookingData.phone,
    tour_name:    bookingData.tourName,
    travel_date:  bookingData.date,
    num_people:   bookingData.people,
    message:      bookingData.message || 'No additional message.',
    to_name:      ADMIN_NAME,
    to_email:     ADMIN_EMAIL,   // {{to_email}} in your EmailJS template
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
};

/**
 * Send a general contact message via EmailJS.
 * All contact emails will land in aashutoshbhardwaj.2004@gmail.com
 */
export const sendContactEmail = async (contactData) => {
  const templateParams = {
    from_name:  contactData.name,
    from_email: contactData.email,
    subject:    contactData.subject,
    message:    contactData.message,
    to_name:    ADMIN_NAME,
    to_email:   ADMIN_EMAIL,     // {{to_email}} in your EmailJS template
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
};

// ── EmailJS Template Variables Reference ───────────────────────────────────
// In your EmailJS dashboard, set the recipient to: {{to_email}}
// This ensures every submission goes to aashutoshbhardwaj.2004@gmail.com
//
//  {{from_name}}   – Sender's full name
//  {{from_email}}  – Sender's email address
//  {{to_email}}    – aashutoshbhardwaj.2004@gmail.com  ← set as "To Email" in template
//  {{to_name}}     – Aashutosh Bhardwaj
//  {{phone}}       – Contact phone number          (booking only)
//  {{tour_name}}   – Name of the booked tour       (booking only)
//  {{travel_date}} – Desired travel date           (booking only)
//  {{num_people}}  – Number of travelers           (booking only)
//  {{subject}}     – Email subject                 (contact only)
//  {{message}}     – Free-form message
