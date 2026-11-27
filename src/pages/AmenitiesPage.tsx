import React from 'react';
import { AmenitiesSection } from '../components/home/AmenitiesSection';
import { FinalCta } from '../components/home/FinalCta';
import { SEO } from '../components/common/SEO';

interface AmenitiesPageProps {
  onOpenBooking: () => void;
}

export const AmenitiesPage: React.FC<AmenitiesPageProps> = ({ onOpenBooking }) => {
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
        "name": "Amenities & Services",
        "item": "https://www.ayorasuites.com/amenities"
      }
    ]
  };

  return (
    <div className="pt-20 bg-ayora-ivory">
      <SEO
        title="Amenities & Guest Services | Ayora Suites Bangalore Airport"
        description="Experience modern comforts at Ayora Suites: High-Speed Wi-Fi, Secure Parking, Air Conditioning, In-Room Dining, 24/7 Front Desk, and Conference Facilities near Kempegowda Airport."
        keywords={[
          "Ayora Suites amenities",
          "hotel facilities Bangalore airport",
          "hotel with parking Chikkajala",
          "high speed wifi hotel airport road",
          "24/7 front desk hotel BLR"
        ]}
        canonicalPath="/amenities"
        schema={breadcrumbSchema}
      />
      <AmenitiesSection />
      <FinalCta onOpenBooking={onOpenBooking} />
    </div>
  );
};
