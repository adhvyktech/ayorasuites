import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Users, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { HOTEL_CONFIG } from '../../data/hotelConfig';

export const Welcome: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-ayora-ivory relative overflow-hidden" id="about">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-ayora-gold/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Photo Composition (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative Gold Accent Border */}
              <div className="absolute -inset-4 sm:-inset-6 border border-ayora-gold/30 rounded-sm translate-x-3 translate-y-3 pointer-events-none hidden sm:block" />

              {/* Main Image */}
              <div className="relative rounded-sm overflow-hidden shadow-luxury-lg z-10 aspect-[4/3] bg-ayora-beige">
                <img
                  src="/images/hotel/exterior/exterior-front.jpg"
                  alt="Ayora Suites Grand Entrance and Facade"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Overlapping Floating Badge */}
              <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:right-6 z-20 bg-ayora-dark text-white p-4 sm:p-5 rounded-sm shadow-xl border border-ayora-gold/40 max-w-xs">
                <div className="flex items-center space-x-2 text-ayora-gold mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-luxury-widest font-semibold">
                    Prime Connectivity
                  </span>
                </div>
                <p className="font-serif text-sm sm:text-base italic text-white/95">
                  "Thoughtfully designed for effortless airport transit &amp; corporate stays."
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Text & 3 Highlights (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2">
              <span className="w-8 h-[1px] bg-ayora-gold" />
              <span className="text-xs font-semibold uppercase tracking-luxury text-ayora-gold">
                {HOTEL_CONFIG.brand.welcomeEyebrow}
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ayora-charcoal font-normal leading-[1.15]">
              {HOTEL_CONFIG.brand.welcomeHeading}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-ayora-muted leading-relaxed font-light">
              {HOTEL_CONFIG.brand.welcomeDescription}
            </p>

            {/* Three Required Highlights */}
            <div className="pt-3 space-y-4">
              
              <div className="flex items-start space-x-4 p-3.5 bg-white/70 rounded-sm border border-ayora-border/60 transition-colors hover:border-ayora-gold/40">
                <div className="w-10 h-10 rounded-sm bg-ayora-beige flex items-center justify-center text-ayora-gold flex-shrink-0">
                  <Bed className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ayora-charcoal uppercase tracking-wider">
                    Comfortable Stays
                  </h3>
                  <p className="text-xs text-ayora-muted mt-0.5 leading-relaxed">
                    Thoughtfully appointed rooms for a relaxing experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-3.5 bg-white/70 rounded-sm border border-ayora-border/60 transition-colors hover:border-ayora-gold/40">
                <div className="w-10 h-10 rounded-sm bg-ayora-beige flex items-center justify-center text-ayora-gold flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ayora-charcoal uppercase tracking-wider">
                    Meetings &amp; Events
                  </h3>
                  <p className="text-xs text-ayora-muted mt-0.5 leading-relaxed">
                    A dedicated space for professional gatherings.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-3.5 bg-white/70 rounded-sm border border-ayora-border/60 transition-colors hover:border-ayora-gold/40">
                <div className="w-10 h-10 rounded-sm bg-ayora-beige flex items-center justify-center text-ayora-gold flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ayora-charcoal uppercase tracking-wider">
                    Convenient Location
                  </h3>
                  <p className="text-xs text-ayora-muted mt-0.5 leading-relaxed">
                    A welcoming base near Bengaluru Airport.
                  </p>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-luxury text-ayora-charcoal hover:text-ayora-gold transition-colors group"
              >
                <span>Read More About Our Story</span>
                <ArrowRight className="w-4 h-4 text-ayora-gold transform transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
