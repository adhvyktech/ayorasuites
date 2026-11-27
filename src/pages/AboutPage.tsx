import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, MapPin, Calendar } from 'lucide-react';
import { SEO } from '../components/common/SEO';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  const aboutSchema = {
    "@type": "AboutPage",
    "name": "About Ayora Suites",
    "url": "https://www.ayorasuites.com/about",
    "description": "Discover the boutique hospitality philosophy of Ayora Suites, offering serene, comfortable accommodation near Kempegowda International Airport Road in Bengaluru.",
    "mainEntity": {
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
        "name": "About Us",
        "item": "https://www.ayorasuites.com/about"
      }
    ]
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-ayora-ivory">
      <SEO
        title="About Us | Ayora Suites – Boutique Hospitality Near Bengaluru Airport"
        description="Learn about Ayora Suites, our boutique hospitality philosophy, and our dedication to providing refined, peaceful stays along Bengaluru's New International Airport Road."
        keywords={[
          "About Ayora Suites",
          "boutique hotel story Bangalore",
          "hospitality near Kempegowda Airport",
          "hotels in Chikkajala",
          "luxury boutique stay Bengaluru Airport Road"
        ]}
        canonicalPath="/about"
        schema={[aboutSchema, breadcrumbSchema]}
      />
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center space-x-2 justify-center mb-3">
          <span className="w-6 h-[1px] bg-ayora-gold" />
          <span className="text-xs font-semibold uppercase tracking-luxury text-ayora-gold">
            Our Story &amp; Philosophy
          </span>
          <span className="w-6 h-[1px] bg-ayora-gold" />
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ayora-charcoal font-normal leading-tight">
          Thoughtful Hospitality.<br />Timeless Comfort.
        </h1>
        <p className="text-sm sm:text-base text-ayora-muted mt-4 max-w-2xl mx-auto font-light leading-relaxed">
          Discover a boutique haven created to redefine transit and corporate stays along the Bengaluru Airport Road.
        </p>
      </div>

      {/* Main Narrative Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-luxury-lg border border-ayora-border bg-ayora-beige">
              <img
                src="/images/hotel/reception/reception-lobby.jpg"
                alt="Ayora Suites Reception & Guest Foyer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-ayora-charcoal font-normal leading-snug">
              A Warm Welcome Near Bengaluru International Airport
            </h2>
            <p className="text-xs sm:text-sm text-ayora-muted leading-relaxed">
              At <strong>Ayora Suites</strong>, we believe every stay should be an effortless blend of comfort, convenience, and warm attentiveness. Located along the prominent New International Airport Road corridor in Chikkajala, our property provides a peaceful retreat for business travelers, conference attendees, and families transiting through Bengaluru.
            </p>
            <p className="text-xs sm:text-sm text-ayora-muted leading-relaxed">
              Instead of generic corporate spaces, Ayora Suites is designed with intimate boutique warmth—featuring calm ivory and beige tones, refined gold accents, and thoughtful attention to the traveler's needs.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded border border-ayora-border shadow-sm">
                <Sparkles className="w-5 h-5 text-ayora-gold mb-2" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-ayora-charcoal">
                  Boutique Character
                </h3>
                <p className="text-[11px] text-ayora-muted mt-1 leading-relaxed">
                  Carefully curated room categories with serene aesthetics and functional ergonomics.
                </p>
              </div>

              <div className="p-4 bg-white rounded border border-ayora-border shadow-sm">
                <MapPin className="w-5 h-5 text-ayora-gold mb-2" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-ayora-charcoal">
                  Strategic Hub
                </h3>
                <p className="text-[11px] text-ayora-muted mt-1 leading-relaxed">
                  Moments from Kempegowda International Airport and North Bengaluru's industrial nodes.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Brand Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#EEE7DB]/60 p-8 sm:p-12 rounded-sm border border-ayora-border text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-ayora-charcoal font-normal mb-8">
            The Ayora Suites Commitment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-sm border border-ayora-border">
              <ShieldCheck className="w-6 h-6 text-ayora-gold mb-3" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ayora-charcoal">
                Restorative Comfort
              </h3>
              <p className="text-xs text-ayora-muted mt-2 leading-relaxed">
                Quiet spaces, cozy bedding, and modern climate control ensure deep rest between flights and business meetings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-ayora-border">
              <HeartHandshake className="w-6 h-6 text-ayora-gold mb-3" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ayora-charcoal">
                Attentive Hospitality
              </h3>
              <p className="text-xs text-ayora-muted mt-2 leading-relaxed">
                Our front desk and concierge team are available round-the-clock to coordinate transit, luggage, and special guest needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-ayora-border">
              <Calendar className="w-6 h-6 text-ayora-gold mb-3" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ayora-charcoal">
                Corporate Convenience
              </h3>
              <p className="text-xs text-ayora-muted mt-2 leading-relaxed">
                Dedicated meeting rooms, high-speed Wi-Fi, and convenient corporate billing for hassle-free business trips.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 bg-ayora-gold hover:bg-ayora-gold-deep text-white text-xs font-semibold tracking-luxury uppercase rounded-sm shadow-md transition-all inline-flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay with Us</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
