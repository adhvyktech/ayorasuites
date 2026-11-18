import React from 'react';
import { Calendar, Users, Building2 } from 'lucide-react';

interface MeetingsSectionProps {
  onOpenMeetingModal: () => void;
}

export const MeetingsSection: React.FC<MeetingsSectionProps> = ({ onOpenMeetingModal }) => {
  return (
    <section className="py-20 sm:py-28 bg-ayora-dark text-white relative overflow-hidden" id="meetings">
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C49A50_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text & Services Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center space-x-2">
              <span className="w-8 h-[1px] bg-ayora-gold" />
              <span className="text-xs font-semibold uppercase tracking-luxury text-ayora-gold">
                Business &amp; Gatherings
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] text-white">
              Where business meets comfort.
            </h2>

            <p className="text-sm sm:text-base text-[#D4CFC7] font-light leading-relaxed">
              Positioned conveniently along New International Airport Road near prominent corporate parks, 
              Ayora Suites provides a professional destination for executive meetings, seminars, and group corporate stays.
            </p>

            {/* Three Corporate Pillars */}
            <div className="pt-2 space-y-4">
              <div className="flex items-start space-x-3.5 p-3.5 bg-white/5 rounded border border-white/10 hover:border-ayora-gold/40 transition-colors">
                <Building2 className="w-5 h-5 text-ayora-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">
                    Corporate Accommodation Enquiries
                  </h3>
                  <p className="text-xs text-[#B5B0A6] mt-0.5 leading-relaxed">
                    Seamless stay arrangements for visiting delegates, airport transit executives, and business teams.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-3.5 bg-white/5 rounded border border-white/10 hover:border-ayora-gold/40 transition-colors">
                <Users className="w-5 h-5 text-ayora-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">
                    Conference &amp; Meeting Enquiries
                  </h3>
                  <p className="text-xs text-[#B5B0A6] mt-0.5 leading-relaxed">
                    Tailored spaces configured for strategic reviews, presentations, board discussions, and team workshops.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-3.5 bg-white/5 rounded border border-white/10 hover:border-ayora-gold/40 transition-colors">
                <Calendar className="w-5 h-5 text-ayora-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">
                    Group Booking Enquiries
                  </h3>
                  <p className="text-xs text-[#B5B0A6] mt-0.5 leading-relaxed">
                    Dedicated coordinator assistance for streamlined group reservations, billing, and hospitality coordination.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onOpenMeetingModal}
                className="px-8 py-3.5 bg-ayora-gold hover:bg-ayora-gold-deep text-white text-xs font-semibold tracking-luxury uppercase rounded-sm shadow-xl transition-all duration-300 hover:shadow-gold-glow flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Enquire for Meetings</span>
              </button>
            </div>

          </div>

          {/* Right Photographic Column (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              <div className="relative rounded-sm overflow-hidden shadow-2xl border border-white/15 aspect-[4/3] bg-ayora-charcoal">
                <img
                  src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80"
                  alt="Ayora Suites Conference & Meeting Space"
                  className="w-full h-full object-cover filter brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ayora-dark/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-ayora-dark/90 backdrop-blur-md p-4 rounded border border-white/10 text-xs">
                  <span className="text-ayora-gold font-semibold uppercase tracking-wider block text-[11px]">
                    Airport Road Corporate Hub
                  </span>
                  <p className="text-white/80 mt-1 text-[11px] leading-relaxed">
                    Connecting Kempegowda International Airport with North Bengaluru's industrial &amp; aerospace parks.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
