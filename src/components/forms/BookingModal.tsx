import React, { useState, useEffect } from 'react';
import { X, User, Phone, Mail, MessageSquare, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { HOTEL_CONFIG, generateWhatsAppBookingLink } from '../../data/hotelConfig';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoom?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: string | number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoom,
  initialCheckIn,
  initialCheckOut,
  initialGuests
}) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: initialCheckIn || today,
    checkOut: initialCheckOut || tomorrow,
    guests: initialGuests ? String(initialGuests) : '2',
    roomCategory: initialRoom || 'Deluxe Room',
    specialRequests: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedState, setSubmittedState] = useState<null | {
    summary: string;
    whatsappUrl: string;
  }>(null);

  useEffect(() => {
    if (isOpen) {
      if (initialRoom) {
        setFormData(prev => ({ ...prev, roomCategory: initialRoom }));
      }
      if (initialCheckIn) {
        setFormData(prev => ({ ...prev, checkIn: initialCheckIn }));
      }
      if (initialCheckOut) {
        setFormData(prev => ({ ...prev, checkOut: initialCheckOut }));
      }
      if (initialGuests) {
        setFormData(prev => ({ ...prev, guests: String(initialGuests) }));
      }
      setErrors({});
      setSubmittedState(null);
    }
  }, [isOpen, initialRoom, initialCheckIn, initialCheckOut, initialGuests]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format';
    }

    const phoneRegex = /^[+]?[\d\s-]{8,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your contact phone number';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.checkIn) {
      newErrors.checkIn = 'Select check-in date';
    }

    if (!formData.checkOut) {
      newErrors.checkOut = 'Select check-out date';
    } else if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      newErrors.checkOut = 'Check-out must be after check-in';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate backend relay attempt & generate direct WhatsApp handoff
    setTimeout(() => {
      setIsSubmitting(false);
      const waUrl = generateWhatsAppBookingLink({
        name: formData.name,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        guests: formData.guests,
        roomCategory: formData.roomCategory
      });

      setSubmittedState({
        summary: `${formData.roomCategory} | ${formData.checkIn} to ${formData.checkOut} (${formData.guests} Guests)`,
        whatsappUrl: waUrl
      });
    }, 600);
  };

  const handleDateChange = (field: 'checkIn' | 'checkOut', value: string) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      if (field === 'checkIn' && new Date(updated.checkOut) <= new Date(value)) {
        const nextDay = new Date(new Date(value).getTime() + 86400000).toISOString().split('T')[0];
        updated.checkOut = nextDay;
      }
      return updated;
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#FAF7F2] w-full max-w-xl rounded-sm shadow-2xl border border-ayora-border overflow-hidden my-8 relative animate-fade-in">
        
        {/* Modal Header */}
        <div className="bg-ayora-dark text-white px-6 py-5 flex items-center justify-between border-b border-ayora-border-dark">
          <div>
            <span className="text-[11px] uppercase tracking-luxury text-ayora-gold font-semibold">
              Boutique Reservations
            </span>
            <h3 className="text-xl font-serif text-white mt-0.5">
              Book Your Stay at Ayora Suites
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {submittedState ? (
            <div className="space-y-6 text-center py-4">
              <div className="w-14 h-14 bg-ayora-gold/15 text-ayora-gold rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-xl font-serif text-ayora-charcoal">
                  Booking Enquiry Prepared
                </h4>
                <p className="text-xs text-ayora-muted mt-2 max-w-md mx-auto">
                  Your enquiry for <strong className="text-ayora-charcoal">{submittedState.summary}</strong> has been structured.
                </p>
              </div>

              {/* Notice regarding backend integration */}
              <div className="bg-amber-50/80 border border-amber-200/80 rounded p-3.5 text-left text-xs text-amber-900 flex items-start space-x-2.5">
                <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-amber-800">
                    Direct Email Delivery Status
                  </p>
                  <p className="text-[11px] leading-relaxed text-amber-700">
                    Direct email dispatch to <strong>{HOTEL_CONFIG.contact.primaryEmail}</strong> will be active upon connecting SMTP or API keys. For immediate booking confirmation and room reservation, please connect directly via WhatsApp.
                  </p>
                </div>
              </div>

              {/* Instant WhatsApp Handover */}
              <div className="pt-2 space-y-3">
                <a
                  href={submittedState.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold tracking-wider uppercase rounded-sm shadow-md flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send Enquiry via WhatsApp for Instant Confirmation</span>
                </a>

                <p className="text-[11px] text-ayora-muted">
                  Or call concierge directly: <a href={`tel:${HOTEL_CONFIG.contact.primaryPhoneClean}`} className="text-ayora-charcoal font-semibold underline">{HOTEL_CONFIG.contact.primaryPhone}</a>
                </p>
              </div>

              <div className="pt-4 border-t border-ayora-border">
                <button
                  type="button"
                  onClick={() => setSubmittedState(null)}
                  className="text-xs text-ayora-muted hover:text-ayora-charcoal"
                >
                  &larr; Modify Enquiry Details
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Check-in & Check-out row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ayora-charcoal uppercase tracking-wider mb-1">
                    Check-In Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={today}
                      value={formData.checkIn}
                      onChange={(e) => handleDateChange('checkIn', e.target.value)}
                      className={`w-full px-3 py-2.5 bg-white border text-xs text-ayora-charcoal rounded-sm focus:outline-none focus:border-ayora-gold transition-colors ${
                        errors.checkIn ? 'border-red-400' : 'border-ayora-border'
                      }`}
                    />
                  </div>
                  {errors.checkIn && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.checkIn}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ayora-charcoal uppercase tracking-wider mb-1">
                    Check-Out Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={formData.checkIn || today}
                      value={formData.checkOut}
                      onChange={(e) => handleDateChange('checkOut', e.target.value)}
                      className={`w-full px-3 py-2.5 bg-white border text-xs text-ayora-charcoal rounded-sm focus:outline-none focus:border-ayora-gold transition-colors ${
                        errors.checkOut ? 'border-red-400' : 'border-ayora-border'
                      }`}
                    />
                  </div>
                  {errors.checkOut && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.checkOut}</p>
                  )}
                </div>
              </div>

              {/* Room Category & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ayora-charcoal uppercase tracking-wider mb-1">
                    Room Category
                  </label>
                  <select
                    value={formData.roomCategory}
                    onChange={(e) => setFormData({ ...formData, roomCategory: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-ayora-border text-xs text-ayora-charcoal rounded-sm focus:outline-none focus:border-ayora-gold"
                  >
                    {HOTEL_CONFIG.rooms.map((r) => (
                      <option key={r.id} value={r.name}>
                        {r.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ayora-charcoal uppercase tracking-wider mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-ayora-border text-xs text-ayora-charcoal rounded-sm focus:outline-none focus:border-ayora-gold"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4+">4+ Guests (Group)</option>
                  </select>
                </div>
              </div>

              {/* Guest Name */}
              <div>
                <label className="block text-xs font-semibold text-ayora-charcoal uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-ayora-muted absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full pl-9 pr-3 py-2.5 bg-white border text-xs text-ayora-charcoal rounded-sm focus:outline-none focus:border-ayora-gold ${
                      errors.name ? 'border-red-400' : 'border-ayora-border'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ayora-charcoal uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-ayora-muted absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="tel"
                      placeholder="+91 99800 28502"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 bg-white border text-xs text-ayora-charcoal rounded-sm focus:outline-none focus:border-ayora-gold ${
                        errors.phone ? 'border-red-400' : 'border-ayora-border'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ayora-charcoal uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-ayora-muted absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 bg-white border text-xs text-ayora-charcoal rounded-sm focus:outline-none focus:border-ayora-gold ${
                        errors.email ? 'border-red-400' : 'border-ayora-border'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-semibold text-ayora-charcoal uppercase tracking-wider mb-1">
                  Special Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Airport transfer requirements, early check-in preference, corporate billing, etc."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-ayora-border text-xs text-ayora-charcoal rounded-sm focus:outline-none focus:border-ayora-gold resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-ayora-gold hover:bg-ayora-gold-deep text-white text-xs font-semibold tracking-wider uppercase rounded-sm shadow-md transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Details...</span>
                  ) : (
                    <>
                      <span>Check Availability &amp; Enquire</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center">
                  <a
                    href={generateWhatsAppBookingLink({
                      name: formData.name,
                      checkIn: formData.checkIn,
                      checkOut: formData.checkOut,
                      guests: formData.guests,
                      roomCategory: formData.roomCategory
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-[#128C7E] hover:underline font-medium"
                  >
                    <MessageSquare className="w-3.5 h-3.5 mr-1 text-[#25D366] fill-current" />
                    <span>Skip form &amp; enquire directly on WhatsApp</span>
                  </a>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
