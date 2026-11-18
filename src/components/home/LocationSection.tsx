import React from 'react';
import { MapPin, Phone, MessageSquare, ExternalLink, Navigation, Clock } from 'lucide-react';
import { HOTEL_CONFIG } from '../../data/hotelConfig';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-ayora-ivory relative" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center space-x-2 justify-center mb-3">
            <span className="w-6 h-[1px] bg-ayora-gold" />
            <span className="text-xs font-semibold uppercase tracking-luxury text-ayora-gold">
              Find Us
            </span>
            <span className="w-6 h-[1px] bg-ayora-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ayora-charcoal font-normal leading-tight">
            Your convenient stay near Bengaluru Airport.
          </h2>
          <p className="text-xs sm:text-sm text-ayora-muted mt-3 max-w-xl mx-auto font-light leading-relaxed">
            Ideally situated on the New International Airport Road corridor in Chikkajala, offering effortless connectivity for airport flights and corporate hubs.
          </p>
        </div>

        {/* Two-Column Grid: Address & Info on Left, Interactive Map Embed on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Buttons & Proximity (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-sm border border-ayora-border shadow-luxury flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-ayora-gold">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Hotel Address
                </span>
              </div>

              {/* Exact Hotel Address */}
              <div className="p-4 bg-ayora-ivory rounded border border-ayora-border/60 text-xs text-ayora-charcoal leading-relaxed space-y-1">
                <p className="font-semibold text-sm font-serif text-ayora-charcoal">
                  {HOTEL_CONFIG.brand.name}
                </p>
                <p>{HOTEL_CONFIG.contact.address.building},</p>
                <p>{HOTEL_CONFIG.contact.address.street},</p>
                <p>{HOTEL_CONFIG.contact.address.landmark},</p>
                <p>{HOTEL_CONFIG.contact.address.city},</p>
                <p>{HOTEL_CONFIG.contact.address.state} – {HOTEL_CONFIG.contact.address.pincode}, {HOTEL_CONFIG.contact.address.country}.</p>
              </div>

              {/* Proximity Guide */}
              <div className="pt-2 space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-ayora-muted block">
                  Transit &amp; Key Landmarks
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {HOTEL_CONFIG.nearbyLandmarks.slice(0, 4).map((lm, idx) => (
                    <div key={idx} className="p-2.5 bg-ayora-beige/40 rounded border border-ayora-border/50">
                      <span className="font-medium text-ayora-charcoal block truncate text-[11px]">{lm.name}</span>
                      <span className="text-[10px] text-ayora-gold font-semibold flex items-center mt-0.5">
                        <Clock className="w-3 h-3 mr-1" /> {lm.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Action Buttons: Get Directions, Call Now, WhatsApp */}
            <div className="pt-4 border-t border-ayora-border space-y-2.5">
              <a
                href={HOTEL_CONFIG.contact.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-ayora-gold hover:bg-ayora-gold-deep text-white text-xs font-semibold tracking-wider uppercase rounded-sm shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${HOTEL_CONFIG.contact.primaryPhoneClean}`}
                  className="py-2.5 px-3 border border-ayora-border hover:border-ayora-gold text-ayora-charcoal hover:text-ayora-gold text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-ayora-gold" />
                  <span>Call Now</span>
                </a>

                <a
                  href={HOTEL_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#128C7E] text-xs font-semibold tracking-wider uppercase rounded-sm transition-all flex items-center justify-center space-x-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Responsive Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7 rounded-sm overflow-hidden border border-ayora-border shadow-luxury relative min-h-[380px] lg:min-h-full bg-ayora-beige">
            <iframe
              title="Ayora Suites Google Map Location"
              src={HOTEL_CONFIG.contact.googleMaps.embedUrl}
              className="w-full h-full min-h-[400px] border-0 filter contrast-[1.02]"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map Pin Label Badge */}
            <div className="absolute top-4 left-4 bg-ayora-dark/90 backdrop-blur-md text-white px-3.5 py-2 rounded-sm border border-ayora-gold/40 text-xs shadow-lg pointer-events-none">
              <span className="text-ayora-gold font-semibold uppercase tracking-wider block text-[10px]">
                Property Location
              </span>
              <span className="font-serif text-sm">Ayora Suites, Chikkajala</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
