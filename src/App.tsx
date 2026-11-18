import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { ScrollToTop } from './components/common/ScrollToTop';
import { BookingModal } from './components/forms/BookingModal';
import { MeetingModal } from './components/forms/MeetingModal';
import { RoomDetailModal } from './components/rooms/RoomDetailModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { RoomsPage } from './pages/RoomsPage';
import { RoomDetailPage } from './pages/RoomDetailPage';
import { MeetingsPage } from './pages/MeetingsPage';
import { AmenitiesPage } from './pages/AmenitiesPage';
import { GalleryPage } from './pages/GalleryPage';
import { LocationPage } from './pages/LocationPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

import type { RoomData } from './data/hotelConfig';

export const App: React.FC = () => {
  // Modal states
  const [bookingModalState, setBookingModalState] = useState<{
    isOpen: boolean;
    initialRoom?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: string | number;
  }>({
    isOpen: false
  });

  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const [selectedRoomForDetail, setSelectedRoomForDetail] = useState<RoomData | null>(null);

  const handleOpenBooking = (roomCategory?: string) => {
    setBookingModalState({
      isOpen: true,
      initialRoom: roomCategory
    });
  };

  const handleOpenBookingWithDetails = (details: {
    checkIn: string;
    checkOut: string;
    guests: string;
    roomCategory: string;
  }) => {
    setBookingModalState({
      isOpen: true,
      initialRoom: details.roomCategory !== 'All Categories' ? details.roomCategory : undefined,
      checkIn: details.checkIn,
      checkOut: details.checkOut,
      guests: details.guests
    });
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-ayora-ivory text-ayora-charcoal selection:bg-ayora-gold selection:text-white">
        
        {/* Sticky Premium Navbar */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Main Content View */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenBooking={handleOpenBooking}
                  onOpenBookingWithDetails={handleOpenBookingWithDetails}
                  onSelectRoom={(room) => setSelectedRoomForDetail(room)}
                  onOpenMeetingModal={() => setIsMeetingModalOpen(true)}
                />
              }
            />

            <Route
              path="/about"
              element={<AboutPage onOpenBooking={() => handleOpenBooking()} />}
            />

            <Route
              path="/rooms"
              element={
                <RoomsPage
                  onSelectRoom={(room) => setSelectedRoomForDetail(room)}
                  onEnquireRoom={(roomName) => handleOpenBooking(roomName)}
                />
              }
            />

            <Route
              path="/rooms/:slug"
              element={<RoomDetailPage onOpenBooking={handleOpenBooking} />}
            />

            <Route
              path="/meetings-events"
              element={<MeetingsPage onOpenMeetingModal={() => setIsMeetingModalOpen(true)} />}
            />

            <Route
              path="/amenities"
              element={<AmenitiesPage onOpenBooking={() => handleOpenBooking()} />}
            />

            <Route
              path="/gallery"
              element={<GalleryPage onOpenBooking={() => handleOpenBooking()} />}
            />

            <Route
              path="/location"
              element={<LocationPage onOpenBooking={() => handleOpenBooking()} />}
            />

            <Route path="/contact" element={<ContactPage />} />

            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

            <Route path="/terms" element={<TermsPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Discreet Floating WhatsApp Concierge */}
        <WhatsAppButton />

        {/* Booking Enquiry Modal */}
        <BookingModal
          isOpen={bookingModalState.isOpen}
          onClose={() => setBookingModalState({ isOpen: false })}
          initialRoom={bookingModalState.initialRoom}
          initialCheckIn={bookingModalState.checkIn}
          initialCheckOut={bookingModalState.checkOut}
          initialGuests={bookingModalState.guests}
        />

        {/* Meetings Enquiry Modal */}
        <MeetingModal
          isOpen={isMeetingModalOpen}
          onClose={() => setIsMeetingModalOpen(false)}
        />

        {/* Room Detail Modal */}
        <RoomDetailModal
          room={selectedRoomForDetail}
          isOpen={!!selectedRoomForDetail}
          onClose={() => setSelectedRoomForDetail(null)}
          onEnquire={(roomName) => handleOpenBooking(roomName)}
        />

      </div>
    </BrowserRouter>
  );
};

export default App;
