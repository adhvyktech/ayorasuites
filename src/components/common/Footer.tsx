import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { HOTEL_CONFIG } from '../../data/hotelConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ayora-dark text-[#D8D4CC] pt-16 pb-12 border-t border-ayora-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section with Brand & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Column 1: Official Logo & Brand Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo in warm ivory luxury frame to honor authentic asset */}
            <div className="inline-block bg-[#F8F4EC] p-3 sm:p-3.5 rounded-sm border border-ayora-gold/40 shadow-lg">
              <img 
                src={HOTEL_CONFIG.brand.logoUrl} 
                alt="AYORA SUITES - Official Logo" 
                className="h-12 sm:h-14 w-auto object-contain"
                loading="lazy"
              />
            </div>
            
            <p className="text-sm leading-relaxed text-[#A9A49A] max-w-sm">
              Discover a new standard of boutique hospitality on New International Airport Road, Bengaluru. 
              Offering thoughtfully designed rooms, executive conference venues, and attentive service for both business and leisure.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-luxury text-ayora-gold font-semibold">
                {HOTEL_CONFIG.brand.tagline}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-luxury-widest text-white border-l-2 border-ayora-gold pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wide">
              <li>
                <Link to="/" className="text-[#B3ADA3] hover:text-ayora-gold transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1 text-ayora-gold/60" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#B3ADA3] hover:text-ayora-gold transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1 text-ayora-gold/60" /> About Ayora
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-[#B3ADA3] hover:text-ayora-gold transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1 text-ayora-gold/60" /> Rooms & Suites
                </Link>
              </li>
              <li>
                <Link to="/meetings-events" className="text-[#B3ADA3] hover:text-ayora-gold transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1 text-ayora-gold/60" /> Meetings & Events
                </Link>
              </li>
              <li>
                <Link to="/amenities" className="text-[#B3ADA3] hover:text-ayora-gold transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1 text-ayora-gold/60" /> Amenities
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#B3ADA3] hover:text-ayora-gold transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1 text-ayora-gold/60" /> Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/location" className="text-[#B3ADA3] hover:text-ayora-gold transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1 text-ayora-gold/60" /> Location & Map
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#B3ADA3] hover:text-ayora-gold transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1 text-ayora-gold/60" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Accommodation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-luxury-widest text-white border-l-2 border-ayora-gold pl-2">
              Rooms & Suites
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wide">
              {HOTEL_CONFIG.rooms.map((room) => (
                <li key={room.id}>
                  <Link 
                    to={`/rooms/${room.slug}`}
                    className="text-[#B3ADA3] hover:text-ayora-gold transition-colors inline-flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-1 text-ayora-gold/60" /> {room.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <span className="text-[11px] text-[#8E8980] block italic">
                Direct enquiries receive personalized assistance &amp; instant support.
              </span>
            </div>
          </div>

          {/* Column 4: Contact & Location (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-luxury-widest text-white border-l-2 border-ayora-gold pl-2">
              Contact &amp; Location
            </h4>
            
            <div className="space-y-3 text-xs leading-relaxed text-[#B3ADA3]">
              {/* Address */}
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-ayora-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p>{HOTEL_CONFIG.contact.address.formatted}</p>
                  <a
                    href={HOTEL_CONFIG.contact.googleMaps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ayora-gold hover:underline inline-flex items-center mt-1 font-medium"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start space-x-2.5 pt-1">
                <Phone className="w-4 h-4 text-ayora-gold flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div>
                    <a 
                      href={`tel:${HOTEL_CONFIG.contact.primaryPhoneClean}`}
                      className="hover:text-ayora-gold transition-colors font-medium text-white"
                    >
                      {HOTEL_CONFIG.contact.primaryPhone}
                    </a>
                    <span className="text-[11px] text-[#8E8980] ml-2">(Primary / WhatsApp)</span>
                  </div>
                  <div>
                    <a 
                      href={`tel:${HOTEL_CONFIG.contact.secondaryPhoneClean}`}
                      className="hover:text-ayora-gold transition-colors font-medium text-white"
                    >
                      {HOTEL_CONFIG.contact.secondaryPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start space-x-2.5 pt-1">
                <Mail className="w-4 h-4 text-ayora-gold flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div>
                    <a 
                      href={`mailto:${HOTEL_CONFIG.contact.primaryEmail}`}
                      className="hover:text-ayora-gold transition-colors break-all"
                    >
                      {HOTEL_CONFIG.contact.primaryEmail}
                    </a>
                  </div>
                  <div>
                    <a 
                      href={`mailto:${HOTEL_CONFIG.contact.secondaryEmail}`}
                      className="hover:text-ayora-gold transition-colors break-all text-[#99948B]"
                    >
                      {HOTEL_CONFIG.contact.secondaryEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex items-center space-x-3 pt-3">
              <a
                href={HOTEL_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#25D366]/20 border border-[#25D366]/40 text-[#4EED88] hover:bg-[#25D366]/30 text-xs rounded-sm transition-colors"
              >
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${HOTEL_CONFIG.contact.primaryPhoneClean}`}
                className="px-3 py-1.5 bg-ayora-gold/20 border border-ayora-gold/50 text-ayora-gold-light hover:bg-ayora-gold/30 text-xs rounded-sm transition-colors"
              >
                Call Concierge
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Tagline, Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#8E8980] space-y-4 md:space-y-0">
          <div>
            <p className="font-serif text-base italic text-ayora-gold-light">
              "{HOTEL_CONFIG.brand.footerTagline}"
            </p>
            <p className="mt-1">
              &copy; {HOTEL_CONFIG.brand.copyrightYear} {HOTEL_CONFIG.brand.name}. All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6 text-xs">
            <Link to="/privacy-policy" className="hover:text-ayora-gold transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/terms" className="hover:text-ayora-gold transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-white/20">•</span>
            <span className="text-[#6D6962]">Official Website: ayorasuites.com</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
