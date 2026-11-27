import React from 'react';
import { HOTEL_CONFIG } from '../data/hotelConfig';
import { ShieldCheck } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-ayora-ivory">
      <SEO
        title="Privacy Policy | Ayora Suites Bengaluru"
        description="Privacy policy and data protection terms for Ayora Suites guests and online website visitors."
        keywords={["Ayora Suites privacy policy", "hotel privacy policy Bangalore"]}
        canonicalPath="/privacy-policy"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="border-b border-ayora-border pb-6 mb-8">
          <div className="inline-flex items-center space-x-2 text-ayora-gold mb-2">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-xs uppercase tracking-luxury font-semibold">Legal &amp; Transparency</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-ayora-charcoal font-normal">
            Privacy Policy
          </h1>
          <p className="text-xs text-ayora-muted mt-2">
            Last Updated: November 2026 | Ayora Suites (ayorasuites.com)
          </p>
        </div>

        <div className="prose prose-sm max-w-none text-xs sm:text-sm text-ayora-charcoal leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="font-serif text-lg text-ayora-charcoal font-medium">1. Introduction</h2>
            <p className="text-ayora-muted">
              At <strong>Ayora Suites</strong>, we are committed to respecting and protecting the privacy of our guests, website visitors, and corporate clients. This Privacy Policy outlines the types of information we collect, how it is used, and how it is secured when you visit <strong>https://www.ayorasuites.com</strong> or interact with our reservation services.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-ayora-charcoal font-medium">2. Information We Collect</h2>
            <p className="text-ayora-muted">
              When you submit a reservation enquiry, meeting enquiry, or contact form, we collect the details you provide voluntarily:
            </p>
            <ul className="list-disc pl-5 text-ayora-muted space-y-1">
              <li>Full name and contact details (email address and telephone number).</li>
              <li>Stay dates (check-in and check-out) and room preferences.</li>
              <li>Corporate details (company name and attendee count for event enquiries).</li>
              <li>Special accommodation or transit requests communicated to our concierge.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-ayora-charcoal font-medium">3. Purpose of Processing</h2>
            <p className="text-ayora-muted">
              Your details are used strictly to:
            </p>
            <ul className="list-disc pl-5 text-ayora-muted space-y-1">
              <li>Facilitate room reservations, availability checks, and rate confirmations.</li>
              <li>Coordinate conference room scheduling and corporate billing.</li>
              <li>Respond to your inquiries via email, phone, or official WhatsApp channels.</li>
              <li>Comply with hospitality statutory requirements under Indian law.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-ayora-charcoal font-medium">4. Data Sharing &amp; Security</h2>
            <p className="text-ayora-muted">
              Ayora Suites does not sell, lease, or distribute your personal contact information to third-party marketing companies. Reasonable technical safeguards are maintained to protect your communications against unauthorized access.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-ayora-charcoal font-medium">5. Contact Information</h2>
            <p className="text-ayora-muted">
              If you have any questions regarding your data or wish to update your contact details, please contact us at:
            </p>
            <p className="text-ayora-charcoal font-medium">
              Ayora Suites<br />
              Email: <a href={`mailto:${HOTEL_CONFIG.contact.primaryEmail}`} className="text-ayora-gold underline">{HOTEL_CONFIG.contact.primaryEmail}</a><br />
              Phone: {HOTEL_CONFIG.contact.primaryPhone}<br />
              Address: {HOTEL_CONFIG.contact.address.formatted}
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};
