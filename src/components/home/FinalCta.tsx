import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Mail } from 'lucide-react';

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 sm:py-24 bg-ayora-dark text-white relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-ayora-gold/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(#C49A50_1px,transparent_1px)] opacity-5 [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center space-x-2 justify-center">
          <span className="w-8 h-[1px] bg-ayora-gold" />
          <span className="text-xs font-semibold uppercase tracking-luxury text-ayora-gold">
            Reserve Your Experience
          </span>
          <span className="w-8 h-[1px] bg-ayora-gold" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-tight">
          Your next stay starts here.
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-[#EDE8DF] font-light max-w-xl mx-auto leading-relaxed">
          Experience comfort, convenience and warm hospitality at Ayora Suites.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-3.5 bg-ayora-gold hover:bg-ayora-gold-deep text-white text-xs font-semibold tracking-luxury uppercase rounded-sm shadow-xl transition-all duration-300 hover:shadow-gold-glow transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Stay</span>
          </button>

          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-ayora-gold text-xs font-semibold tracking-luxury uppercase rounded-sm transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Mail className="w-4 h-4 text-ayora-gold" />
            <span>Contact Us</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
