import React from 'react';
import { Hero } from '../components/home/Hero';
import { BookingBar } from '../components/home/BookingBar';
import { Welcome } from '../components/home/Welcome';
import { RoomsSection } from '../components/home/RoomsSection';
import { MeetingsSection } from '../components/home/MeetingsSection';
import { AmenitiesSection } from '../components/home/AmenitiesSection';
import { GallerySection } from '../components/home/GallerySection';
import { LocationSection } from '../components/home/LocationSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FinalCta } from '../components/home/FinalCta';
import { SEO } from '../components/common/SEO';
import type { RoomData } from '../data/hotelConfig';

interface HomePageProps {
  onOpenBooking: (roomCategory?: string) => void;
  onOpenBookingWithDetails: (details: {
    checkIn: string;
    checkOut: string;
    guests: string;
    roomCategory: string;
  }) => void;
  onSelectRoom: (room: RoomData) => void;
  onOpenMeetingModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onOpenBookingWithDetails,
  onSelectRoom,
  onOpenMeetingModal
}) => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Ayora Suites",
    "url": "https://ayorasuites.com",
    "image": "https://ayorasuites.com/images/ayora-logo.jpg",
    "logo": "https://ayorasuites.com/images/ayora-logo.jpg",
    "description": "Ayora Suites is a premium boutique hotel on New International Airport Road near Decathlon Chikkajala, Bengaluru. Offering luxury stays, executive conference venues, and effortless BLR airport connectivity.",
    "telephone": "+919980028502",
    "email": "ayorasuites@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Building No: 1997/1289/9/32, New International Airport Road, Near Decathlon, Chikkajala, Kadigenahalli Gate",
      "addressLocality": "Bengaluru Urban",
      "addressRegion": "Karnataka",
      "postalCode": "562157",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.1764,
      "longitude": 77.6322
    },
    "checkinTime": "12:00",
    "checkoutTime": "11:00",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Free High-Speed Wi-Fi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Secure Parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Conference & Meeting Rooms", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "24/7 Front Desk", "value": true }
    ]
  };

  return (
    <div className="relative">
      <SEO
        title="Ayora Suites | Boutique Hotel Near Bengaluru Airport | Luxury Stays & Conference"
        description="Ayora Suites is a premium boutique hotel on New International Airport Road near Decathlon Chikkajala, Bengaluru. Offering luxury stays, executive conference venues, and effortless BLR airport connectivity."
        keywords={[
          "Ayora Suites",
          "hotels near Bengaluru Airport",
          "hotels near Bangalore Airport Road",
          "hotels near Decathlon Chikkajala",
          "boutique hotel Chikkajala",
          "transit hotel Bangalore airport",
          "luxury suites near BLR airport",
          "hotels near Kadigenahalli Gate",
          "conference hotel Bangalore airport road",
          "business hotel North Bengaluru",
          "hotel near KIADB Aerospace Park"
        ]}
        canonicalPath="/"
        ogType="website"
        schema={homeSchema}
      />

      {/* 1. Hero */}
      <Hero onOpenBooking={() => onOpenBooking()} />

      {/* 2. Booking Search Bar */}
      <BookingBar onCheckAvailability={onOpenBookingWithDetails} />

      {/* 3. Welcome to Ayora Suites */}
      <Welcome />

      {/* 4. Rooms & Suites */}
      <RoomsSection
        onSelectRoom={onSelectRoom}
        onEnquireRoom={(roomName) => onOpenBooking(roomName)}
      />

      {/* 5. Meetings & Events */}
      <MeetingsSection onOpenMeetingModal={onOpenMeetingModal} />

      {/* 6. Amenities */}
      <AmenitiesSection />

      {/* 7. Gallery */}
      <GallerySection />

      {/* 8. Location */}
      <LocationSection />

      {/* 9. Testimonials (Google Reviews Placeholder) */}
      <TestimonialsSection />

      {/* 10. Final CTA */}
      <FinalCta onOpenBooking={() => onOpenBooking()} />
    </div>
  );
};
