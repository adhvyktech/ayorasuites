import React from 'react';
import { Calendar, Check } from 'lucide-react';
import { SEO } from '../components/common/SEO';

interface MeetingsPageProps {
  onOpenMeetingModal: () => void;
}

export const MeetingsPage: React.FC<MeetingsPageProps> = ({ onOpenMeetingModal }) => {
  const meetingSchema = {
    "@type": "EventVenue",
    "name": "Ayora Suites Conference & Meeting Facilities",
    "description": "Executive corporate meeting spaces, boardroom seminars, and corporate group accommodation on New International Airport Road near Kempegowda International Airport.",
    "url": "https://ayorasuites.com/meetings-events",
    "telephone": "+919980028502",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Building No: 1997/1289/9/32, New International Airport Road, Near Decathlon, Chikkajala, Kadigenahalli Gate",
      "addressLocality": "Bengaluru Urban",
      "addressRegion": "Karnataka",
      "postalCode": "562157",
      "addressCountry": "IN"
    }
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ayorasuites.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Meetings & Events",
        "item": "https://ayorasuites.com/meetings-events"
      }
    ]
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-ayora-ivory">
      <SEO
        title="Meetings & Events | Ayora Suites – Corporate Conference Venue Bangalore Airport"
        description="Host executive board meetings, corporate conferences, and company seminars at Ayora Suites on New International Airport Road near Decathlon Chikkajala, Bengaluru."
        keywords={[
          "conference hall near Bangalore Airport",
          "meeting rooms Chikkajala",
          "corporate event venue airport road Bengaluru",
          "business meeting hotel BLR",
          "corporate accommodation packages North Bangalore",
          "seminar venue Devanahalli"
        ]}
        canonicalPath="/meetings-events"
        schema={[meetingSchema, breadcrumbSchema]}
      />
      
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
                src="/images/hotel/conference/conference-main.jpg"
                alt="Ayora Suites Conference & Boardroom Facility"
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
