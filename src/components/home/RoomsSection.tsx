import React from 'react';
import { Eye, Calendar, Sparkles } from 'lucide-react';
import { HOTEL_CONFIG, type RoomData } from '../../data/hotelConfig';

interface RoomsSectionProps {
  onSelectRoom: (room: RoomData) => void;
  onEnquireRoom: (roomName: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  onSelectRoom,
  onEnquireRoom
}) => {
  return (
    <section className="py-20 sm:py-28 bg-[#EEE7DB]/60 relative" id="rooms">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center space-x-2 justify-center mb-3">
            <span className="w-6 h-[1px] bg-ayora-gold" />
            <span className="text-xs font-semibold uppercase tracking-luxury text-ayora-gold">
              Accommodation
            </span>
            <span className="w-6 h-[1px] bg-ayora-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ayora-charcoal font-normal leading-tight">
            Find your perfect stay.
          </h2>
          <p className="text-xs sm:text-sm text-ayora-muted mt-3 max-w-xl mx-auto font-light leading-relaxed">
            Discover four thoughtfully designed room categories combining restful comfort, refined aesthetics, and modern convenience near Bengaluru Airport.
          </p>
        </div>

        {/* 4 Premium Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {HOTEL_CONFIG.rooms.map((room) => (
            <div
              key={room.id}
              className="group bg-white rounded-sm border border-ayora-border overflow-hidden shadow-sm hover:shadow-luxury-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Room Photograph with Hover Zoom */}
                <div className="relative aspect-[4/3] overflow-hidden bg-ayora-beige">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Subtle Badge */}
                  <div className="absolute top-3 left-3 bg-ayora-dark/85 backdrop-blur-sm px-2.5 py-1 text-white text-[10px] uppercase tracking-wider rounded-sm border border-white/10">
                    Boutique Stay
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl text-ayora-charcoal font-medium group-hover:text-ayora-gold transition-colors">
                    {room.name}
                  </h3>

                  <p className="text-xs text-ayora-muted leading-relaxed line-clamp-3">
                    {room.shortDescription}
                  </p>

                  {/* Highlights list */}
                  <div className="pt-2 border-t border-ayora-border/60 space-y-1.5">
                    {room.features.slice(0, 2).map((feature, i) => (
                      <div key={i} className="flex items-center text-[11px] text-ayora-charcoal">
                        <Sparkles className="w-3 h-3 text-ayora-gold mr-1.5 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: View Details & Enquire Now */}
              <div className="p-5 sm:p-6 pt-0 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectRoom(room)}
                    className="py-2.5 px-3 border border-ayora-border hover:border-ayora-gold text-ayora-charcoal hover:text-ayora-gold text-[11px] font-semibold tracking-wider uppercase rounded-sm transition-colors flex items-center justify-center space-x-1"
                  >
                    <Eye className="w-3 h-3" />
                    <span>Details</span>
                  </button>

                  <button
                    onClick={() => onEnquireRoom(room.name)}
                    className="py-2.5 px-3 bg-ayora-gold hover:bg-ayora-gold-deep text-white text-[11px] font-semibold tracking-wider uppercase rounded-sm shadow-sm transition-all flex items-center justify-center space-x-1"
                  >
                    <Calendar className="w-3 h-3" />
                    <span>Enquire</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Note on Verified Information */}
        <div className="mt-12 text-center">
          <p className="text-xs text-ayora-muted italic">
            * Exact bed configurations, dimensions and tailored corporate tariffs are provided directly upon enquiry to match your schedule.
          </p>
        </div>

      </div>
    </section>
  );
};
