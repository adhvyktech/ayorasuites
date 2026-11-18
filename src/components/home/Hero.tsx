import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Star, Plane, ShieldCheck, Sparkles } from 'lucide-react';
import { HOTEL_CONFIG } from '../../data/hotelConfig';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-16">
      {/* Background Photography with Warm Luxury Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hotel/exterior/exterior-night.jpg"
          alt="Ayora Suites Luxury Boutique Hospitality Building"
          className="w-full h-full object-cover object-center filter brightness-[0.85]"
          loading="eager"
        />
        {/* Editorial Gradients for Readability and Mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-ayora-dark/90 via-ayora-dark/45 to-ayora-dark/65" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40" />
      </div>

      {/* Decorative Gold Border Line Accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-ayora-gold/60 to-transparent z-10" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white my-auto">
        
        {/* Three Golden Stars & Tagline Pill */}
        <div className="inline-flex items-center space-x-2 bg-black/35 backdrop-blur-md px-4 py-1.5 rounded-full border border-ayora-gold/40 mb-6 shadow-lg animate-fade-in">
          <div className="flex items-center space-x-1 text-ayora-gold">
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
          </div>
          <span className="text-[10px] sm:text-xs font-semibold tracking-luxury-widest uppercase text-ayora-gold-light">
            LUXURY STAYS | CONFERENCE | AIRPORT ROAD
          </span>
        </div>

        {/* Suggested Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.1] max-w-4xl mx-auto drop-shadow-md">
          {HOTEL_CONFIG.brand.headline}
        </h1>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center space-x-3 my-6">
          <span className="w-12 h-[1px] bg-ayora-gold/60"></span>
          <span className="w-2 h-2 rotate-45 border border-ayora-gold bg-ayora-gold/40"></span>
          <span className="w-12 h-[1px] bg-ayora-gold/60"></span>
        </div>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-base md:text-lg text-[#EDE8DF] font-light max-w-2xl mx-auto leading-relaxed drop-shadow">
          {HOTEL_CONFIG.brand.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-3.5 bg-ayora-gold hover:bg-ayora-gold-deep text-white text-xs font-semibold tracking-luxury uppercase rounded-sm shadow-xl transition-all duration-300 hover:shadow-gold-glow transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Stay</span>
          </button>

          <Link
            to="/rooms"
            className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white hover:text-white border border-white/50 hover:border-ayora-gold text-xs font-semibold tracking-luxury uppercase rounded-sm backdrop-blur-sm transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Explore Rooms</span>
            <ArrowRight className="w-4 h-4 text-ayora-gold-light" />
          </Link>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="flex items-center space-x-3 bg-black/25 backdrop-blur-sm p-3 rounded border border-white/5">
            <Plane className="w-5 h-5 text-ayora-gold flex-shrink-0" />
            <div>
              <span className="block text-xs font-semibold text-white">15 Mins Away</span>
              <span className="text-[11px] text-white/70">Bengaluru Airport (BLR)</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-black/25 backdrop-blur-sm p-3 rounded border border-white/5">
            <Sparkles className="w-5 h-5 text-ayora-gold flex-shrink-0" />
            <div>
              <span className="block text-xs font-semibold text-white">Boutique Luxury</span>
              <span className="text-[11px] text-white/70">Refined Stay Experience</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-black/25 backdrop-blur-sm p-3 rounded border border-white/5">
            <Calendar className="w-5 h-5 text-ayora-gold flex-shrink-0" />
            <div>
              <span className="block text-xs font-semibold text-white">Conference Venue</span>
              <span className="text-[11px] text-white/70">Corporate Gatherings</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-black/25 backdrop-blur-sm p-3 rounded border border-white/5">
            <ShieldCheck className="w-5 h-5 text-ayora-gold flex-shrink-0" />
            <div>
              <span className="block text-xs font-semibold text-white">Direct Privilege</span>
              <span className="text-[11px] text-white/70">Best Rates &amp; Support</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
