import React from 'react';
import { Wifi, Car, AirVent, UtensilsCrossed, Bell, Presentation, Clock, Sparkles, ShieldCheck } from 'lucide-react';
import { HOTEL_CONFIG, type AmenityItem } from '../../data/hotelConfig';

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
  Wifi,
  Car,
  AirVent,
  UtensilsCrossed,
  Bell,
  Presentation,
  Clock,
  Sparkles
};

export const AmenitiesSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-ayora-ivory relative" id="amenities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center space-x-2 justify-center mb-3">
            <span className="w-6 h-[1px] bg-ayora-gold" />
            <span className="text-xs font-semibold uppercase tracking-luxury text-ayora-gold">
              Comfort &amp; Convenience
            </span>
            <span className="w-6 h-[1px] bg-ayora-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ayora-charcoal font-normal leading-tight">
            Everything you need for a comfortable stay.
          </h2>
          <p className="text-xs sm:text-sm text-ayora-muted mt-3 max-w-xl mx-auto font-light leading-relaxed">
            Essential hospitality amenities and attentive guest services designed to ensure seamless transit and restorative repose.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOTEL_CONFIG.amenities.map((item: AmenityItem) => {
            const IconComponent = iconMap[item.icon] || Sparkles;

            return (
              <div
                key={item.id}
                className="bg-white p-6 sm:p-7 rounded-sm border border-ayora-border shadow-sm hover:shadow-luxury transition-all duration-300 hover:border-ayora-gold/50 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-ayora-beige/80 group-hover:bg-ayora-gold flex items-center justify-center text-ayora-gold group-hover:text-white transition-colors duration-300 mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl text-ayora-charcoal font-medium group-hover:text-ayora-gold transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-ayora-muted mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-ayora-border/40 flex items-center justify-between text-[11px] text-ayora-muted">
                  <span className="uppercase tracking-wider">Ayora Standard</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-ayora-gold" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification Note */}
        <div className="mt-12 p-4 bg-ayora-beige/50 border border-ayora-border rounded-sm max-w-2xl mx-auto flex items-center justify-center space-x-2 text-xs text-ayora-muted text-center">
          <ShieldCheck className="w-4 h-4 text-ayora-gold flex-shrink-0" />
          <span>
            Complimentary facilities and services are maintained to standard. Specific in-room amenities can be verified or requested upon booking.
          </span>
        </div>

      </div>
    </section>
  );
};
