import React from 'react';
import { LocationSection } from '../components/home/LocationSection';
import { FinalCta } from '../components/home/FinalCta';
import { SEO } from '../components/common/SEO';

interface LocationPageProps {
  onOpenBooking: () => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ onOpenBooking }) => {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Ayora Suites Location",
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
    "hasMap": "https://www.google.com/maps/search/?api=1&query=Building+No+1997%2F1289%2F9%2F32+New+International+Airport+Road+Near+Decathlon+Chikkajala+Kadigenahalli+Gate+Bengaluru+562157"
  };

  return (
    <div className="pt-20 bg-ayora-ivory">
      <SEO
        title="Location & Directions | Ayora Suites Near Decathlon Chikkajala"
        description="Ayora Suites is located at Building No: 1997/1289/9/32, New International Airport Road, Near Decathlon, Chikkajala, Bengaluru. Just 15 mins to Kempegowda International Airport (BLR)."
        keywords={[
          "Ayora Suites location",
          "hotel near Decathlon Chikkajala",
          "hotels Kadigenahalli Gate",
          "directions to Ayora Suites",
          "distance to Bangalore airport from Chikkajala",
          "hotels on New International Airport Road Bangalore"
        ]}
        canonicalPath="/location"
        schema={locationSchema}
      />
      <LocationSection />
      <FinalCta onOpenBooking={onOpenBooking} />
    </div>
  );
};
