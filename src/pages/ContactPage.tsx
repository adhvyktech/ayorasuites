import React from 'react';
import { HOTEL_CONFIG } from '../data/hotelConfig';
import { ContactForm } from '../components/forms/ContactForm';
import { MapPin, Phone, Mail, MessageSquare, ExternalLink } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const ContactPage: React.FC = () => {
  const contactSchema = {
    "@type": "ContactPage",
    "name": "Contact Ayora Suites",
    "url": "https://www.ayorasuites.com/contact",
    "mainEntity": {
      "@type": "Hotel",
      "name": "Ayora Suites",
      "telephone": "+919980028502",
      "email": "ayorasuites@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Building No: 1997/1289/9/32, New International Airport Road, Near Decathlon, Chikkajala, Kadigenahalli Gate",
        "addressLocality": "Bengaluru Urban",
        "addressRegion": "Karnataka",
        "postalCode": "562157",
        "addressCountry": "IN"
      }
    }
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.ayorasuites.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Us",
        "item": "https://www.ayorasuites.com/contact"
      }
    ]
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-ayora-ivory">
      <SEO
        title="Contact & Reservations | Ayora Suites Bengaluru Airport Road"
        description="Connect with Ayora Suites for instant reservations, corporate bookings, or transit support. Call +91 99800 28502, chat on WhatsApp, or email ayorasuites@gmail.com."
        keywords={[
          "Ayora Suites contact number",
          "Ayora Suites phone",
          "hotel booking Bangalore airport",
          "Ayora Suites email",
          "WhatsApp hotel reservation Bangalore airport",
          "hotel reservations Chikkajala"
        ]}
        canonicalPath="/contact"
        schema={[contactSchema, breadcrumbSchema]}
      />
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center space-x-2 justify-center mb-3">
          <span className="w-6 h-[1px] bg-ayora-gold" />
          <span className="text-xs font-semibold uppercase tracking-luxury text-ayora-gold">
            Get in Touch
          </span>
          <span className="w-6 h-[1px] bg-ayora-gold" />
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ayora-charcoal font-normal leading-tight">
          We are here to assist you.
        </h1>
        <p className="text-sm sm:text-base text-ayora-muted mt-4 max-w-xl mx-auto font-light leading-relaxed">
          Reach out for room reservations, corporate bookings, airport transit queries, or directions to Ayora Suites.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Addresses (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white p-6 sm:p-7 rounded-sm border border-ayora-border shadow-sm space-y-4">
              <div className="flex items-center space-x-2 text-ayora-gold">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <h2 className="text-xs font-semibold uppercase tracking-wider text-ayora-charcoal">
                  Hotel Address
                </h2>
              </div>
              <p className="text-xs text-ayora-muted leading-relaxed">
                {HOTEL_CONFIG.contact.address.formatted}
              </p>
              <a
                href={HOTEL_CONFIG.contact.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-ayora-gold hover:underline inline-flex items-center"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

            {/* Direct Phone Numbers */}
            <div className="bg-white p-6 sm:p-7 rounded-sm border border-ayora-border shadow-sm space-y-4">
              <div className="flex items-center space-x-2 text-ayora-gold">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <h2 className="text-xs font-semibold uppercase tracking-wider text-ayora-charcoal">
                  Direct Phone Lines
                </h2>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 bg-ayora-beige/30 rounded border border-ayora-border/60">
                  <a
                    href={`tel:${HOTEL_CONFIG.contact.primaryPhoneClean}`}
                    className="font-medium text-ayora-charcoal hover:text-ayora-gold transition-colors"
                  >
                    {HOTEL_CONFIG.contact.primaryPhone}
                  </a>
                  <span className="text-[10px] uppercase text-ayora-gold font-semibold">Primary / WhatsApp</span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-ayora-beige/30 rounded border border-ayora-border/60">
                  <a
                    href={`tel:${HOTEL_CONFIG.contact.secondaryPhoneClean}`}
                    className="font-medium text-ayora-charcoal hover:text-ayora-gold transition-colors"
                  >
                    {HOTEL_CONFIG.contact.secondaryPhone}
                  </a>
                  <span className="text-[10px] uppercase text-ayora-muted">Reservations</span>
                </div>
              </div>
            </div>

            {/* Email Addresses */}
            <div className="bg-white p-6 sm:p-7 rounded-sm border border-ayora-border shadow-sm space-y-4">
              <div className="flex items-center space-x-2 text-ayora-gold">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <h2 className="text-xs font-semibold uppercase tracking-wider text-ayora-charcoal">
                  Email Enquiries
                </h2>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-ayora-beige/30 rounded border border-ayora-border/60">
                  <span className="text-[10px] uppercase text-ayora-muted block">Primary Email</span>
                  <a
                    href={`mailto:${HOTEL_CONFIG.contact.primaryEmail}`}
                    className="font-medium text-ayora-charcoal hover:text-ayora-gold transition-colors break-all"
                  >
                    {HOTEL_CONFIG.contact.primaryEmail}
                  </a>
                </div>

                <div className="p-2.5 bg-ayora-beige/30 rounded border border-ayora-border/60">
                  <span className="text-[10px] uppercase text-ayora-muted block">Additional Inquiries</span>
                  <a
                    href={`mailto:${HOTEL_CONFIG.contact.secondaryEmail}`}
                    className="font-medium text-ayora-charcoal hover:text-ayora-gold transition-colors break-all"
                  >
                    {HOTEL_CONFIG.contact.secondaryEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Action */}
            <div className="p-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-sm text-center">
              <span className="text-xs text-ayora-charcoal block mb-2 font-medium">
                Prefer immediate messaging with our concierge?
              </span>
              <a
                href={HOTEL_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center py-2.5 px-5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold tracking-wider uppercase rounded-sm shadow transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1.5 fill-current" />
                <span>Chat via WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>

    </div>
  );
};
