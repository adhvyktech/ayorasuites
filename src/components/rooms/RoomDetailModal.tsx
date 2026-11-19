import React, { useState, useEffect } from 'react';
import { X, Calendar, MessageSquare, Check, ShieldCheck, Sparkles } from 'lucide-react';
import { type RoomData, generateWhatsAppBookingLink } from '../../data/hotelConfig';

interface RoomDetailModalProps {
  room: RoomData | null;
  isOpen: boolean;
  onClose: () => void;
  onEnquire: (roomName: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  isOpen,
  onClose,
  onEnquire
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // ESC key and background body scroll lock
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !room) return null;

  const currentImage = selectedImage || room.image;

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center sm:items-center bg-black/80 backdrop-blur-sm overflow-hidden p-0 sm:p-4 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="bg-[#FAF7F2] w-full sm:max-w-4xl max-h-[92dvh] sm:max-h-[92vh] rounded-t-2xl sm:rounded-sm shadow-2xl border border-ayora-border overflow-hidden relative flex flex-col animate-slide-up sm:animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Header - Pinned & Always Visible on Mobile */}
        <div className="bg-ayora-dark text-white px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between border-b border-ayora-border-dark flex-shrink-0 sticky top-0 z-30 shadow-md">
          <div className="pr-2">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-luxury text-ayora-gold font-semibold block">
              Accommodation Overview
            </span>
            <h3 className="text-base sm:text-xl font-serif text-white truncate max-w-[220px] sm:max-w-none">
              {room.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white transition-all focus:outline-none min-h-[38px] flex-shrink-0 border border-white/15 hover:border-ayora-gold/60"
            aria-label="Close details modal"
            title="Close modal"
          >
            <span className="text-xs uppercase tracking-wider font-semibold text-ayora-gold sm:hidden">Close</span>
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6 overscroll-contain">
          
          {/* Main Visual Image & Gallery Thumbnails */}
          <div className="space-y-3">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-sm bg-ayora-charcoal relative shadow-md">
              <img
                src={currentImage}
                alt={room.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute bottom-3 left-3 bg-ayora-dark/80 backdrop-blur-md px-3 py-1 text-white text-[11px] tracking-wider uppercase rounded-sm border border-white/10">
                Ayora Suites Sanctuary
              </div>
            </div>

            {/* Gallery thumbnails */}
            {room.gallery && room.gallery.length > 1 && (
              <div className="flex items-center space-x-2 overflow-x-auto pb-1">
                {room.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`h-16 w-24 flex-shrink-0 rounded-sm overflow-hidden border-2 transition-all ${
                      currentImage === img ? 'border-ayora-gold scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${room.name} view ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Description & verified details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
            
            <div className="lg:col-span-2 space-y-4">
              <div>
                <h4 className="font-serif text-xl text-ayora-charcoal">
                  Thoughtful Design &amp; Serene Comfort
                </h4>
                <p className="text-xs sm:text-sm text-ayora-muted leading-relaxed mt-2">
                  {room.fullDescription}
                </p>
              </div>

              {/* Verified Features */}
              <div className="pt-2">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-ayora-charcoal mb-3">
                  Highlights &amp; In-Room Comforts
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {room.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-ayora-charcoal bg-white p-2.5 rounded border border-ayora-border/60">
                      <Sparkles className="w-3.5 h-3.5 text-ayora-gold flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transparency Notice regarding unverified specs */}
              <div className="bg-ayora-beige/60 border border-ayora-border rounded p-3 text-xs text-ayora-muted flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-ayora-gold flex-shrink-0" />
                <span className="text-[11px] leading-relaxed">
                  Verified exact square footage, bed configurations, and promotional tariffs will be provided directly by the reservations desk upon enquiry.
                </span>
              </div>
            </div>

            {/* Reservation Callout Card */}
            <div className="bg-white p-5 rounded-sm border border-ayora-border shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="border-b border-ayora-border pb-3">
                  <span className="text-[11px] uppercase tracking-wider text-ayora-muted block">
                    Direct Reservation
                  </span>
                  <span className="font-serif text-lg text-ayora-charcoal font-semibold">
                    {room.name}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-ayora-muted">
                  <p className="flex items-center text-ayora-charcoal">
                    <Check className="w-3.5 h-3.5 text-ayora-gold mr-1.5" /> Best Available Rate on Direct Enquiries
                  </p>
                  <p className="flex items-center text-ayora-charcoal">
                    <Check className="w-3.5 h-3.5 text-ayora-gold mr-1.5" /> Instant Confirmation Assistance
                  </p>
                  <p className="flex items-center text-ayora-charcoal">
                    <Check className="w-3.5 h-3.5 text-ayora-gold mr-1.5" /> Close to BLR International Airport
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onEnquire(room.name);
                  }}
                  className="w-full py-3 bg-ayora-gold hover:bg-ayora-gold-deep text-white text-xs font-semibold tracking-wider uppercase rounded-sm shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Enquire for {room.name}</span>
                </button>

                <a
                  href={generateWhatsAppBookingLink({ roomCategory: room.name })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#128C7E] text-xs font-semibold tracking-wider uppercase rounded-sm transition-all flex items-center justify-center space-x-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Enquiry</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 border border-ayora-border bg-white text-ayora-charcoal hover:bg-ayora-beige/60 text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors text-center"
                >
                  Close Overview
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
