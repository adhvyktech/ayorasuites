import React from 'react';
import { LocationSection } from '../components/home/LocationSection';
import { FinalCta } from '../components/home/FinalCta';

interface LocationPageProps {
  onOpenBooking: () => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-20 bg-ayora-ivory">
      <LocationSection />
      <FinalCta onOpenBooking={onOpenBooking} />
    </div>
  );
};
