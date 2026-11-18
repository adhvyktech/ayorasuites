import React from 'react';
import { GallerySection } from '../components/home/GallerySection';
import { FinalCta } from '../components/home/FinalCta';
import { SEO } from '../components/common/SEO';

interface GalleryPageProps {
  onOpenBooking: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-20 bg-ayora-ivory">
      <SEO
        title="Photo Gallery | Ayora Suites – Visuals of Rooms, Suites & Venue"
        description="Browse genuine photographs of Ayora Suites: our boutique rooms, luxury suites, reception lounge, conference venue, and surroundings near Bengaluru Airport."
        keywords={[
          "Ayora Suites photos",
          "hotel gallery Bangalore airport",
          "boutique hotel photos Chikkajala",
          "Ayora Suites pictures",
          "suites images airport road Bangalore"
        ]}
        canonicalPath="/gallery"
      />
      <GallerySection />
      <FinalCta onOpenBooking={onOpenBooking} />
    </div>
  );
};
