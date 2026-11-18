import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center pt-24 pb-16 bg-ayora-ivory px-4">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-sm border border-ayora-border shadow-luxury text-center space-y-5">
        
        <span className="font-serif text-6xl text-ayora-gold font-normal block">
          404
        </span>

        <h1 className="font-serif text-2xl text-ayora-charcoal font-medium">
          Page Not Found
        </h1>

        <p className="text-xs sm:text-sm text-ayora-muted leading-relaxed">
          The hospitality page or resource you are looking for is unavailable or has been relocated.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-2.5 bg-ayora-gold hover:bg-ayora-gold-deep text-white text-xs font-semibold tracking-wider uppercase rounded-sm shadow transition-all flex items-center justify-center space-x-1.5"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/rooms"
            className="w-full sm:w-auto px-6 py-2.5 border border-ayora-border hover:border-ayora-gold text-ayora-charcoal hover:text-ayora-gold text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors flex items-center justify-center space-x-1.5"
          >
            <span>Explore Rooms</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
