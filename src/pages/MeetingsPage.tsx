import React from 'react';
import { Calendar, Check } from 'lucide-react';

interface MeetingsPageProps {
  onOpenMeetingModal: () => void;
}

export const MeetingsPage: React.FC<MeetingsPageProps> = ({ onOpenMeetingModal }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-ayora-ivory">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center space-x-2 justify-center mb-3">
          <span className="w-6 h-[1px] bg-ayora-gold" />
          <span className="text-xs font-semibold uppercase tracking-luxury text-ayora-gold">
            Business &amp; Gatherings
          </span>
          <span className="w-6 h-[1px] bg-ayora-gold" />
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ayora-charcoal font-normal leading-tight">
          Where business meets comfort.
        </h1>
        <p className="text-sm sm:text-base text-ayora-muted mt-4 max-w-2xl mx-auto font-light leading-relaxed">
          Convenient corporate gathering spaces, board meeting venues, and executive accommodation near Bengaluru International Airport.
        </p>
      </div>

      {/* Main Feature Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-luxury-lg border border-ayora-border bg-ayora-beige">
              <img
                src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80"
                alt="Ayora Suites Conference Space"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-ayora-charcoal font-normal leading-snug">
              Strategic Airport Corridor Meeting Destination
            </h2>
            <p className="text-xs sm:text-sm text-ayora-muted leading-relaxed">
              Ayora Suites offers an ideal retreat for business executives, delegates, and corporate teams arriving in Bengaluru. Positioned close to the airport road and key industrial belts, our dedicated venues support productive conferences, executive seminars, and strategic discussions.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3 text-xs text-ayora-charcoal">
                <Check className="w-4 h-4 text-ayora-gold flex-shrink-0 mt-0.5" />
                <span>Executive boardroom &amp; seminar configurations</span>
              </div>
              <div className="flex items-start space-x-3 text-xs text-ayora-charcoal">
                <Check className="w-4 h-4 text-ayora-gold flex-shrink-0 mt-0.5" />
                <span>Corporate team accommodation packages</span>
              </div>
              <div className="flex items-start space-x-3 text-xs text-ayora-charcoal">
                <Check className="w-4 h-4 text-ayora-gold flex-shrink-0 mt-0.5" />
                <span>High-speed Wi-Fi and audio-visual support on request</span>
              </div>
              <div className="flex items-start space-x-3 text-xs text-ayora-charcoal">
                <Check className="w-4 h-4 text-ayora-gold flex-shrink-0 mt-0.5" />
                <span>Bespoke catering and refreshment coordination</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenMeetingModal}
                className="px-8 py-3.5 bg-ayora-gold hover:bg-ayora-gold-deep text-white text-xs font-semibold tracking-luxury uppercase rounded-sm shadow-md transition-all flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Enquire for Meetings &amp; Events</span>
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
