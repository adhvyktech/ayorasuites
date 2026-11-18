import React from 'react';
import { AmenitiesSection } from '../components/home/AmenitiesSection';
import { FinalCta } from '../components/home/FinalCta';

interface AmenitiesPageProps {
  onOpenBooking: () => void;
}

export const AmenitiesPage: React.FC<AmenitiesPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-20 bg-ayora-ivory">
      <AmenitiesSection />
      <FinalCta onOpenBooking={onOpenBooking} />
    </div>
  );
};
