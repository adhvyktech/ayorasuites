import React, { useState } from 'react';
import { Calendar, Search, MessageSquare } from 'lucide-react';
import { HOTEL_CONFIG, generateWhatsAppBookingLink } from '../../data/hotelConfig';

interface BookingBarProps {
  onCheckAvailability: (details: {
    checkIn: string;
    checkOut: string;
    guests: string;
    roomCategory: string;
  }) => void;
}

export const BookingBar: React.FC<BookingBarProps> = ({ onCheckAvailability }) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState('2');
  const [roomCategory, setRoomCategory] = useState('');
  const [dateError, setDateError] = useState('');

  const handleCheckInChange = (newCheckIn: string) => {
    setCheckIn(newCheckIn);
    setDateError('');
    // Auto adjust checkout if invalid
    if (new Date(checkOut) <= new Date(newCheckIn)) {
      const nextDay = new Date(new Date(newCheckIn).getTime() + 86400000).toISOString().split('T')[0];
      setCheckOut(nextDay);
    }
  };

  const handleCheckOutChange = (newCheckOut: string) => {
    if (new Date(newCheckOut) <= new Date(checkIn)) {
      setDateError('Check-out must be after check-in date');
      return;
    }
    setDateError('');
    setCheckOut(newCheckOut);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (new Date(checkOut) <= new Date(checkIn)) {
      setDateError('Check-out must be after check-in date');
      return;
    }
    setDateError('');
    onCheckAvailability({
      checkIn,
      checkOut,
      guests,
      roomCategory: roomCategory || 'All Categories'
    });
  };

  const directWhatsAppUrl = generateWhatsAppBookingLink({
    checkIn,
    checkOut,
    guests,
    roomCategory: roomCategory || 'Any Available Room'
  });

  return (
    <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12">
      <div className="bg-[#FAF7F2] rounded-sm shadow-luxury-lg border border-ayora-border p-4 sm:p-6 lg:p-7">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-ayora-border/60 text-xs">
          <div className="flex items-center space-x-2 text-ayora-charcoal font-semibold uppercase tracking-wider">
            <Calendar className="w-4 h-4 text-ayora-gold" />
            <span>Direct Reservation &amp; Availability Check</span>
          </div>
          <span className="text-[11px] text-ayora-muted mt-1 sm:mt-0 italic">
            Best rate guarantee &amp; airport transit assistance
          </span>
        </div>

        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
          
          {/* Check-in Date */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-ayora-muted mb-1">
              Check-in Date
            </label>
            <div className="relative bg-white border border-ayora-border rounded-sm">
              <input
                type="date"
                min={today}
                value={checkIn}
                onChange={(e) => handleCheckInChange(e.target.value)}
                className="w-full px-3 py-2.5 text-xs text-ayora-charcoal bg-transparent focus:outline-none focus:ring-1 focus:ring-ayora-gold"
                required
              />
            </div>
          </div>

          {/* Check-out Date */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-ayora-muted mb-1">
              Check-out Date
            </label>
            <div className="relative bg-white border border-ayora-border rounded-sm">
              <input
                type="date"
                min={checkIn || today}
                value={checkOut}
                onChange={(e) => handleCheckOutChange(e.target.value)}
                className="w-full px-3 py-2.5 text-xs text-ayora-charcoal bg-transparent focus:outline-none focus:ring-1 focus:ring-ayora-gold"
                required
              />
            </div>
          </div>

          {/* Number of Guests */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-ayora-muted mb-1">
              Guests
            </label>
            <div className="relative bg-white border border-ayora-border rounded-sm">
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-3 py-2.5 text-xs text-ayora-charcoal bg-transparent focus:outline-none focus:ring-1 focus:ring-ayora-gold"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4+">4+ Guests (Group)</option>
              </select>
            </div>
          </div>

          {/* Room Category (Optional) */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-ayora-muted mb-1">
              Room Category (Optional)
            </label>
            <div className="relative bg-white border border-ayora-border rounded-sm">
              <select
                value={roomCategory}
                onChange={(e) => setRoomCategory(e.target.value)}
                className="w-full px-3 py-2.5 text-xs text-ayora-charcoal bg-transparent focus:outline-none focus:ring-1 focus:ring-ayora-gold"
              >
                <option value="">All Categories</option>
                {HOTEL_CONFIG.rooms.map((r) => (
                  <option key={r.id} value={r.name}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit CTA */}
          <div>
            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-ayora-gold hover:bg-ayora-gold-deep text-white text-xs font-semibold tracking-wider uppercase rounded-sm shadow-md transition-all duration-200 flex items-center justify-center space-x-1.5 hover:shadow-gold-glow active:scale-95"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Check Availability</span>
            </button>
          </div>

        </form>

        {dateError && (
          <p className="text-xs text-red-600 mt-2 font-medium">{dateError}</p>
        )}

        {/* Quick WhatsApp fallback button below search */}
        <div className="mt-3.5 pt-3 border-t border-ayora-border/40 flex flex-wrap items-center justify-between text-xs text-ayora-muted gap-2">
          <span>Need immediate assistance or corporate billing?</span>
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#128C7E] hover:text-[#0b6359] inline-flex items-center font-medium"
          >
            <MessageSquare className="w-3.5 h-3.5 mr-1 text-[#25D366] fill-current" />
            <span>Enquire instantly via WhatsApp &rarr;</span>
          </a>
        </div>

      </div>
    </div>
  );
};
