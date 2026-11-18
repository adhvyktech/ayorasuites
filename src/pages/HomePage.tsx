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
  return (
    <div className="relative">
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
