import React from 'react';
import { HOTEL_CONFIG, type RoomData } from '../data/hotelConfig';
import { Calendar, Eye, Sparkles, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/common/SEO';

interface RoomsPageProps {
  onSelectRoom: (room: RoomData) => void;
  onEnquireRoom: (roomName: string) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({
  onSelectRoom,
  onEnquireRoom
}) => {
  const roomsSchema = {
    "@type": "ItemList",
    "name": "Ayora Suites Room Categories",
    "itemListElement": HOTEL_CONFIG.rooms.map((room, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "HotelRoom",
        "name": room.name,
        "description": room.shortDescription,
        "image": room.image.startsWith('http') ? room.image : `https://www.ayorasuites.com${room.image}`,
        "url": `https://www.ayorasuites.com/rooms/${room.slug}`
      }
    }))
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.ayorasuites.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Rooms & Suites",
        "item": "https://www.ayorasuites.com/rooms"
      }
    ]
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-ayora-ivory">
      <SEO
        title="Rooms & Suites | Ayora Suites – Boutique Stays Near Bengaluru Airport"
        description="Choose from Deluxe Rooms, Twin Sharing Rooms, Executive Rooms, and Luxury Suites at Ayora Suites. Thoughtfully appointed comfort near Kempegowda International Airport."
        keywords={[
          "Ayora Suites rooms",
          "deluxe hotel room Bangalore airport",
          "twin sharing hotel Chikkajala",
          "executive suites airport road Bengaluru",
          "luxury rooms near Kempegowda airport",
          "transit stay rooms BLR",
          "business hotel suites Devanahalli"
        ]}
        canonicalPath="/rooms"
        schema={[roomsSchema, breadcrumbSchema]}
      />
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center space-x-2 justify-center mb-3">
          <span className="w-6 h-[1px] bg-ayora-gold" />
          <span className="text-xs font-semibold uppercase tracking-luxury text-ayora-gold">
            Accommodation Collection
          </span>
          <span className="w-6 h-[1px] bg-ayora-gold" />
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ayora-charcoal font-normal leading-tight">
          Find your perfect stay.
        </h1>
        <p className="text-sm sm:text-base text-ayora-muted mt-4 max-w-2xl mx-auto font-light leading-relaxed">
          Four distinct categories of boutique rooms and suites designed for individual executives, colleagues, and families seeking refined comfort.
        </p>
      </div>

      {/* Rooms Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {HOTEL_CONFIG.rooms.map((room, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={room.id}
              className={`bg-white rounded-sm border border-ayora-border shadow-luxury overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center`}
            >
              {/* Image Column (7 cols) */}
              <div className={`lg:col-span-7 relative aspect-[16/10] bg-ayora-beige overflow-hidden group ${
                isEven ? 'lg:order-2' : 'lg:order-1'
              }`}>
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-ayora-dark/85 backdrop-blur-sm px-3 py-1 text-white text-[10px] uppercase tracking-wider rounded-sm border border-white/10">
                  Ayora Suites Collection
                </div>
              </div>

              {/* Text Column (5 cols) */}
              <div className={`lg:col-span-5 p-8 sm:p-10 space-y-5 ${
                isEven ? 'lg:order-1' : 'lg:order-2'
              }`}>
                <div>
                  <span className="text-[11px] uppercase tracking-luxury text-ayora-gold font-semibold block mb-1">
                    Room Category 0{index + 1}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-ayora-charcoal font-medium">
                    {room.name}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-ayora-muted leading-relaxed">
                  {room.shortDescription}
                </p>

                {/* Features */}
                <div className="space-y-2 pt-2 border-t border-ayora-border/60">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-ayora-charcoal">
                      <Sparkles className="w-3.5 h-3.5 text-ayora-gold mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onSelectRoom(room)}
                    className="px-5 py-2.5 border border-ayora-border hover:border-ayora-gold text-ayora-charcoal hover:text-ayora-gold text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors flex items-center space-x-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={() => onEnquireRoom(room.name)}
                    className="px-5 py-2.5 bg-ayora-gold hover:bg-ayora-gold-deep text-white text-xs font-semibold tracking-wider uppercase rounded-sm shadow-sm transition-all flex items-center space-x-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Enquire Now</span>
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Note */}
      <div className="max-w-3xl mx-auto px-4 mt-16 text-center">
        <div className="p-4 bg-ayora-beige/60 border border-ayora-border rounded-sm flex items-center justify-center space-x-2 text-xs text-ayora-muted">
          <ShieldCheck className="w-4 h-4 text-ayora-gold flex-shrink-0" />
          <span>
            Verified dimensions, bed configurations, and corporate discounted tariffs are provided upon direct reservation enquiry.
          </span>
        </div>
      </div>

    </div>
  );
};
