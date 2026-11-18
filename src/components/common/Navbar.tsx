import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, ArrowRight } from 'lucide-react';
import { HOTEL_CONFIG } from '../../data/hotelConfig';

interface NavbarProps {
  onOpenBooking: (roomCategory?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Meetings & Events', path: '/meetings-events' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Location', path: '/location' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#F8F4EC]/95 backdrop-blur-md shadow-md py-2.5 border-b border-ayora-border/70' 
          : 'bg-[#F8F4EC] py-3.5 border-b border-ayora-border/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - Official Original Asset */}
          <Link to="/" className="flex items-center group focus:outline-none" aria-label="Ayora Suites Home">
            <div className="h-12 sm:h-14 md:h-16 flex items-center overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
              <img 
                src={HOTEL_CONFIG.brand.logoUrl} 
                alt="AYORA SUITES - Luxury Stays, Conference, Airport Road" 
                className="h-full w-auto object-contain max-w-[210px] sm:max-w-[250px]"
                loading="eager"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide uppercase transition-colors duration-200 relative group ${
                  isActive(link.path)
                    ? 'text-ayora-gold font-semibold'
                    : 'text-ayora-charcoal hover:text-ayora-gold'
                }`}
              >
                {link.name}
                <span 
                  className={`absolute bottom-0 left-3 right-3 h-[1.5px] bg-ayora-gold transition-transform duration-300 origin-left ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${HOTEL_CONFIG.contact.primaryPhoneClean}`}
              className="hidden xl:inline-flex items-center text-xs tracking-wider uppercase text-ayora-charcoal hover:text-ayora-gold px-3 py-2 transition-colors duration-200 font-medium"
              title="Call Ayora Suites"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-ayora-gold" />
              <span>{HOTEL_CONFIG.contact.primaryPhone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 bg-ayora-gold hover:bg-ayora-gold-deep text-white text-xs font-semibold tracking-wider uppercase rounded-sm shadow-sm transition-all duration-300 hover:shadow-gold-glow active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              <span>Book Your Stay</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center px-3 py-2 bg-ayora-gold text-white text-[11px] font-semibold tracking-wider uppercase rounded-sm sm:hidden"
            >
              Book
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-ayora-charcoal hover:text-ayora-gold focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer / Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[74px] bottom-0 bg-ayora-ivory/98 backdrop-blur-lg border-t border-ayora-border overflow-y-auto z-50 px-6 py-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="text-center pb-4 border-b border-ayora-border/60">
              <span className="text-[11px] tracking-widest uppercase text-ayora-muted font-medium">
                {HOTEL_CONFIG.brand.tagline}
              </span>
            </div>

            <nav className="flex flex-col space-y-2 py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded text-sm tracking-wider uppercase transition-colors ${
                    isActive(link.path)
                      ? 'bg-ayora-beige text-ayora-gold font-bold'
                      : 'text-ayora-charcoal hover:bg-ayora-beige/60 hover:text-ayora-gold'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-ayora-gold/60" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-ayora-border space-y-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-ayora-gold hover:bg-ayora-gold-deep text-white text-xs font-semibold tracking-wider uppercase rounded-sm shadow-md flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay Now</span>
            </button>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={`tel:${HOTEL_CONFIG.contact.primaryPhoneClean}`}
                className="flex items-center justify-center py-2.5 px-3 border border-ayora-border bg-white text-ayora-charcoal text-xs font-medium rounded-sm hover:border-ayora-gold"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-ayora-gold" />
                <span>Call Us</span>
              </a>
              <a
                href={HOTEL_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center py-2.5 px-3 border border-[#25D366]/40 bg-white text-[#128C7E] text-xs font-medium rounded-sm hover:bg-[#25D366]/10"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
