import React from 'react';
import { HOTEL_CONFIG } from '../data/hotelConfig';
import { FileText } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-ayora-ivory">
      <SEO
        title="Terms & Conditions | Ayora Suites Bengaluru"
        description="Terms and conditions, reservation policies, check-in requirements and stay regulations at Ayora Suites."
        keywords={["Ayora Suites terms", "hotel policies Bangalore airport"]}
        canonicalPath="/terms"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="border-b border-ayora-border pb-6 mb-8">
          <div className="inline-flex items-center space-x-2 text-ayora-gold mb-2">
            <FileText className="w-5 h-5" />
            <span className="text-xs uppercase tracking-luxury font-semibold">Terms of Service</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-ayora-charcoal font-normal">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-ayora-muted mt-2">
            Effective Date: November 2026 | Ayora Suites (ayorasuites.com)
          </p>
        </div>

        <div className="prose prose-sm max-w-none text-xs sm:text-sm text-ayora-charcoal leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="font-serif text-lg text-ayora-charcoal font-medium">1. Reservation &amp; Enquiries</h2>
            <p className="text-ayora-muted">
              Submissions via our website booking bar, enquiry modals, or WhatsApp channel constitute an enquiry for accommodation. Confirmation of reservation is subject to room availability, verification of identification, and agreement upon agreed booking tariffs provided by the front desk.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-ayora-charcoal font-medium">2. Identification Requirements</h2>
            <p className="text-ayora-muted">
              In accordance with government regulations in India, all adult guests must present valid government-issued photographic identification (e.g., Aadhaar card, Passport, Voter ID, or Driver's License) upon arrival at check-in. Foreign nationals are required to present a valid passport and Indian visa.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-ayora-charcoal font-medium">3. Check-In &amp; Check-Out Timing</h2>
            <p className="text-ayora-muted">
              Standard check-in is from 12:00 PM and check-out is by 11:00 AM. Early check-in or late check-out requests are subject to room availability and may incur nominal charges as confirmed by the concierge desk.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-ayora-charcoal font-medium">4. Meeting &amp; Event Bookings</h2>
            <p className="text-ayora-muted">
              Corporate meetings, conference hall bookings, and group accommodation arrangements are finalized via mutual written agreement detailing seating configuration, technical requirements, and payment schedule.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-ayora-charcoal font-medium">5. Contact Information</h2>
            <p className="text-ayora-muted">
              For any clarification regarding our stay policies, please write to:
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
