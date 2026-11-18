import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { HOTEL_CONFIG } from '../../data/hotelConfig';

interface WhatsAppButtonProps {
  customMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ customMessage }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMessage = "Hello Ayora Suites, I would like to know more about your property and room availability.";
  const message = customMessage || defaultMessage;
  const whatsappUrl = `https://wa.me/${HOTEL_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Contextual Popover Tooltip */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-white text-ayora-charcoal text-xs p-3.5 rounded-lg shadow-luxury-lg border border-ayora-border relative animate-fade-in">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-ayora-muted hover:text-ayora-charcoal"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-semibold text-ayora-charcoal mb-1">Enquire with Ayora Suites</p>
          <p className="text-ayora-muted text-[11px] leading-relaxed">
            Need quick assistance or looking for instant room availability? Chat directly with our reservations team.
          </p>
        </div>
      )}

      {/* Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group flex items-center bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
        aria-label="Chat with Ayora Suites on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline-block ml-2 text-xs font-semibold tracking-wide uppercase">
          WhatsApp Us
        </span>
        {/* Pulse badge */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-[#25D366]"></span>
        </span>
      </a>
    </div>
  );
};
