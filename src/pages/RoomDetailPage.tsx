import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HOTEL_CONFIG, generateWhatsAppBookingLink } from '../data/hotelConfig';
import { Calendar, MessageSquare, ArrowLeft, Sparkles, Check, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/common/SEO';

interface RoomDetailPageProps {
  onOpenBooking: (roomName?: string) => void;
}

export const RoomDetailPage: React.FC<RoomDetailPageProps> = ({ onOpenBooking }) => {
  const { slug } = useParams<{ slug: string }>();

  const room = HOTEL_CONFIG.rooms.find((r) => r.slug === slug) || HOTEL_CONFIG.rooms[0];
  const [selectedImage, setSelectedImage] = useState<string>(room.image);

  const roomSchema = {
    "@type": "HotelRoom",
    "name": `${room.name} – Ayora Suites`,
    "description": room.fullDescription,
    "image": room.image.startsWith('http') ? room.image : `https://www.ayorasuites.com${room.image}`,
    "url": `https://www.ayorasuites.com/rooms/${room.slug}`,
    "amenityFeature": room.features.map((f) => ({
      "@type": "LocationFeatureSpecification",
      "name": f,
      "value": true
    })),
    "containedInPlace": {
      "@type": "Hotel",
      "name": "Ayora Suites",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Building No: 1997/1289/9/32, New International Airport Road, Near Decathlon, Chikkajala, Kadigenahalli Gate",
        "addressLocality": "Bengaluru Urban",
        "addressRegion": "Karnataka",
        "postalCode": "562157",
        "addressCountry": "IN"
      }
    }
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": room.name,
        "item": `https://www.ayorasuites.com/rooms/${room.slug}`
      }
    ]
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-ayora-ivory">
      <SEO
        title={`${room.name} | Ayora Suites – Boutique Stay Near Bengaluru Airport`}
        description={`${room.shortDescription} Located near Kempegowda International Airport on New Airport Road, Chikkajala.`}
        keywords={[
          room.name,
          `${room.name} Bangalore airport`,
          "hotel room Chikkajala",
          "stay near Decathlon Bangalore airport",
          "transit stay Bangalore airport road",
          "Ayora Suites accommodation"
        ]}
        canonicalPath={`/rooms/${room.slug}`}
        ogImage={room.image}
        schema={[roomSchema, breadcrumbSchema]}
      />
      
      {/* Back button & Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/rooms"
          className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-ayora-muted hover:text-ayora-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          <span>Back to All Rooms</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Visuals (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="aspect-[16/10] rounded-sm overflow-hidden shadow-luxury-lg bg-ayora-beige border border-ayora-border relative">
              <img
                src={selectedImage}
                alt={room.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>

            {/* Gallery Thumbnails */}
            {room.gallery && room.gallery.length > 1 && (
              <div className="flex items-center space-x-3 overflow-x-auto pb-2">
                {room.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`h-20 w-32 flex-shrink-0 rounded-sm overflow-hidden border-2 transition-all ${
                      selectedImage === img ? 'border-ayora-gold scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${room.name} ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Enquiries (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-luxury text-ayora-gold font-semibold block mb-1">
                Ayora Boutique Accommodation
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl text-ayora-charcoal font-medium">
                {room.name}
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-ayora-muted leading-relaxed">
              {room.fullDescription}
            </p>

            {/* Highlights */}
            <div className="pt-2 border-t border-ayora-border space-y-2.5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ayora-charcoal">
                Room Amenities &amp; Features
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {room.features.map((feat, i) => (
                  <div key={i} className="flex items-center text-xs text-ayora-charcoal bg-white p-2.5 rounded border border-ayora-border/60">
                    <Sparkles className="w-3.5 h-3.5 text-ayora-gold mr-2 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reservation Card */}
            <div className="bg-white p-6 rounded-sm border border-ayora-border shadow-sm space-y-4">
              <div className="border-b border-ayora-border/60 pb-3">
                <span className="text-[11px] uppercase tracking-wider text-ayora-muted block">
                  Enquire &amp; Reserve
                </span>
                <span className="font-serif text-xl text-ayora-charcoal">
                  Direct Guest Privilege
                </span>
              </div>

              <div className="space-y-2 text-xs text-ayora-muted">
                <p className="flex items-center text-ayora-charcoal">
                  <Check className="w-3.5 h-3.5 text-ayora-gold mr-2 flex-shrink-0" />
                  Best rate guaranteed on direct enquiry
                </p>
                <p className="flex items-center text-ayora-charcoal">
                  <Check className="w-3.5 h-3.5 text-ayora-gold mr-2 flex-shrink-0" />
                  Instant WhatsApp or Phone confirmation
                </p>
                <p className="flex items-center text-ayora-charcoal">
                  <Check className="w-3.5 h-3.5 text-ayora-gold mr-2 flex-shrink-0" />
                  Close to Kempegowda International Airport (BLR)
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => onOpenBooking(room.name)}
                  className="w-full py-3.5 bg-ayora-gold hover:bg-ayora-gold-deep text-white text-xs font-semibold tracking-wider uppercase rounded-sm shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Enquire for {room.name}</span>
                </button>

                <a
                  href={generateWhatsAppBookingLink({ roomCategory: room.name })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#128C7E] text-xs font-semibold tracking-wider uppercase rounded-sm transition-all flex items-center justify-center space-x-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Reservation Desk</span>
                </a>
              </div>
            </div>

            <div className="p-3 bg-ayora-beige/60 border border-ayora-border rounded-sm flex items-center space-x-2 text-xs text-ayora-muted">
              <ShieldCheck className="w-4 h-4 text-ayora-gold flex-shrink-0" />
              <span className="text-[11px]">
                Specifications, bed dimensions and customized corporate packages will be finalized directly with the reservation coordinator.
              </span>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
