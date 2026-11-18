import React from 'react';
import { GallerySection } from '../components/home/GallerySection';
import { FinalCta } from '../components/home/FinalCta';

interface GalleryPageProps {
  onOpenBooking: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-20 bg-ayora-ivory">
      <GallerySection />
      <FinalCta onOpenBooking={onOpenBooking} />
    </div>
  );
};
