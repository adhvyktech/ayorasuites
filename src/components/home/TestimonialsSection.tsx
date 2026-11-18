import React from 'react';
import { Star, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { HOTEL_CONFIG } from '../../data/hotelConfig';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#EEE7DB]/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow & Heading */}
        <div className="inline-flex items-center space-x-2 justify-center mb-3">
          <span className="w-6 h-[1px] bg-ayora-gold" />
          <span className="text-xs font-semibold uppercase tracking-luxury text-ayora-gold">
            Guest Experience
          </span>
          <span className="w-6 h-[1px] bg-ayora-gold" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ayora-charcoal font-normal leading-tight">
          Words from our guests.
        </h2>

        {/* Premium Placeholder State for Verified Google Reviews */}
        <div className="mt-12 bg-white rounded-sm border border-ayora-border p-8 sm:p-12 shadow-luxury max-w-3xl mx-auto text-center relative overflow-hidden">
          
          <div className="w-14 h-14 bg-ayora-beige text-ayora-gold rounded-full flex items-center justify-center mx-auto mb-5">
            <MessageCircle className="w-7 h-7" />
          </div>

          <div className="flex items-center justify-center space-x-1.5 text-ayora-gold mb-3">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
          </div>

          <h3 className="font-serif text-xl sm:text-2xl text-ayora-charcoal font-normal">
            Committed to Exemplary Hospitality
          </h3>

          <p className="text-xs sm:text-sm text-ayora-muted mt-3 max-w-xl mx-auto leading-relaxed">
            Authentic guest reviews will be seamlessly integrated via Google Reviews as we welcome travelers and conference attendees to Ayora Suites. Your comfort and seamless airport connection are our highest priorities.
          </p>

          <div className="mt-8 pt-6 border-t border-ayora-border/60 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
            <span className="text-ayora-charcoal font-medium flex items-center">
              <ShieldCheck className="w-4 h-4 text-ayora-gold mr-1.5" />
              Verified Reviews Integration Ready
            </span>

            <span className="hidden sm:inline text-ayora-muted">•</span>

            <a
              href={HOTEL_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ayora-gold hover:underline font-semibold inline-flex items-center"
            >
              <span>Connect with our Hospitality Desk</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
