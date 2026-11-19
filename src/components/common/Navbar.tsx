import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, ArrowRight, ChevronDown, Sparkles, Image, Coffee, Bed, Building2, MapPin, Mail } from 'lucide-react';
import { HOTEL_CONFIG } from '../../data/hotelConfig';

interface NavbarProps {
  onOpenBooking: (roomCategory?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHotelDropdownOpen, setIsHotelDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
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

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsHotelDropdownOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isMobileMenuOpen]);

  // Escape key closes mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsHotelDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsHotelDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsHotelDropdownOpen(false);
    }, 150);
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isHotelActive = isActive('/about') || isActive('/amenities') || isActive('/gallery');

  const hotelSubLinks = [
    {
      name: 'About Ayora',
      path: '/about',
      description: 'Our boutique story & philosophy',
      icon: Sparkles
    },
    {
      name: 'Amenities & Services',
      path: '/amenities',
      description: 'Comforts, dining & 24/7 service',
      icon: Coffee
    },
    {
      name: 'Photo Gallery',
      path: '/gallery',
      description: 'Property, rooms & interior tour',
      icon: Image
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 ${isMobileMenuOpen ? 'z-50' : 'z-40'} transition-colors duration-200 ${isScrolled
          ? 'bg-[#F8F4EC]/95 backdrop-blur-md shadow-md py-2 sm:py-2.5 border-b border-ayora-border/70'
          : 'bg-[#F8F4EC] py-2 sm:py-2.5 border-b border-ayora-border/50'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between gap-4">

          {/* Logo - Official Original Asset (Transparent & Balanced) */}
          <Link
            to="/"
            className="flex items-center group focus:outline-none flex-shrink-0 py-0.5"
            aria-label="Ayora Suites Home"
          >
            <div className="h-12 sm:h-14 md:h-16 lg:h-[70px] flex items-center transition-transform duration-300 group-hover:scale-[1.02]">
              <img
                src={HOTEL_CONFIG.brand.logoUrl}
                alt={`AYORA SUITES - ${HOTEL_CONFIG.brand.tagline}`}
                className="h-full w-auto object-contain max-h-[70px]"
                loading="eager"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links - Logically Streamlined & Non-Congested */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 2xl:space-x-3">

            {/* Home */}
            <Link
              to="/"
              className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-[13px] font-medium tracking-luxury uppercase transition-colors duration-200 relative group whitespace-nowrap ${isActive('/')
                  ? 'text-ayora-gold font-semibold'
                  : 'text-ayora-charcoal hover:text-ayora-gold'
                }`}
            >
              Home
              <span
                className={`absolute bottom-0 left-2.5 right-2.5 h-[1.5px] bg-ayora-gold transition-transform duration-300 origin-left ${isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
              />
            </Link>

            {/* Rooms */}
            <Link
              to="/rooms"
              className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-[13px] font-medium tracking-luxury uppercase transition-colors duration-200 relative group whitespace-nowrap ${isActive('/rooms')
                  ? 'text-ayora-gold font-semibold'
                  : 'text-ayora-charcoal hover:text-ayora-gold'
                }`}
            >
              Rooms &amp; Suites
              <span
                className={`absolute bottom-0 left-2.5 right-2.5 h-[1.5px] bg-ayora-gold transition-transform duration-300 origin-left ${isActive('/rooms') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
              />
            </Link>

            {/* Meetings & Events */}
            <Link
              to="/meetings-events"
              className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-[13px] font-medium tracking-luxury uppercase transition-colors duration-200 relative group whitespace-nowrap ${isActive('/meetings-events')
                  ? 'text-ayora-gold font-semibold'
                  : 'text-ayora-charcoal hover:text-ayora-gold'
                }`}
            >
              Meetings &amp; Events
              <span
                className={`absolute bottom-0 left-2.5 right-2.5 h-[1.5px] bg-ayora-gold transition-transform duration-300 origin-left ${isActive('/meetings-events') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
              />
            </Link>

            {/* The Hotel (Dropdown: About, Amenities, Gallery) */}
            <div
              className="relative group py-1"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/about"
                className={`inline-flex items-center px-2.5 xl:px-3 py-1.5 text-xs xl:text-[13px] font-medium tracking-luxury uppercase transition-colors duration-200 relative whitespace-nowrap ${isHotelActive
                    ? 'text-ayora-gold font-semibold'
                    : 'text-ayora-charcoal hover:text-ayora-gold'
                  }`}
              >
                <span>The Hotel</span>
                <ChevronDown className={`w-3.5 h-3.5 ml-1 text-ayora-gold transition-transform duration-200 ${isHotelDropdownOpen ? 'rotate-180' : ''}`} />
                <span
                  className={`absolute bottom-0 left-2.5 right-2.5 h-[1.5px] bg-ayora-gold transition-transform duration-300 origin-left ${isHotelActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                />
              </Link>

              {/* Luxury Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-0.5 w-64 bg-[#F8F4EC] border border-ayora-gold/25 rounded-sm shadow-xl py-2 z-50 transition-all duration-200 ${isHotelDropdownOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                    : 'opacity-0 translate-y-1 pointer-events-none invisible'
                  }`}
              >
                <div className="px-3 py-1.5 border-b border-ayora-border/40 mb-1">
                  <span className="text-[10px] tracking-widest uppercase text-ayora-muted font-medium block">
                    Experience Ayora Suites
                  </span>
                </div>

                {hotelSubLinks.map((item) => {
                  const ItemIcon = item.icon;
                  const itemIsActive = isActive(item.path);
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsHotelDropdownOpen(false)}
                      className={`flex items-start px-3.5 py-2.5 transition-colors ${itemIsActive
                          ? 'bg-ayora-beige/80 text-ayora-gold font-medium'
                          : 'text-ayora-charcoal hover:bg-ayora-beige/50 hover:text-ayora-gold'
                        }`}
                    >
                      <ItemIcon className="w-4 h-4 text-ayora-gold mr-2.5 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-xs font-medium tracking-wide uppercase block">
                          {item.name}
                        </span>
                        <span className="text-[11px] text-ayora-muted block font-normal leading-tight mt-0.5">
                          {item.description}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Location */}
            <Link
              to="/location"
              className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-[13px] font-medium tracking-luxury uppercase transition-colors duration-200 relative group whitespace-nowrap ${isActive('/location')
                  ? 'text-ayora-gold font-semibold'
                  : 'text-ayora-charcoal hover:text-ayora-gold'
                }`}
            >
              Location
              <span
                className={`absolute bottom-0 left-2.5 right-2.5 h-[1.5px] bg-ayora-gold transition-transform duration-300 origin-left ${isActive('/location') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
              />
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-[13px] font-medium tracking-luxury uppercase transition-colors duration-200 relative group whitespace-nowrap ${isActive('/contact')
                  ? 'text-ayora-gold font-semibold'
                  : 'text-ayora-charcoal hover:text-ayora-gold'
                }`}
            >
              Contact
              <span
                className={`absolute bottom-0 left-2.5 right-2.5 h-[1.5px] bg-ayora-gold transition-transform duration-300 origin-left ${isActive('/contact') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
              />
            </Link>

          </nav>

          {/* Header Action CTAs - Spacious & Non-Congested */}
          <div className="hidden sm:flex items-center space-x-2.5 xl:space-x-3 flex-shrink-0">

            {/* Phone: Compact Icon on laptops, Full number on large screens */}
            <a
              href={`tel:${HOTEL_CONFIG.contact.primaryPhoneClean}`}
              className="hidden 2xl:inline-flex items-center text-xs tracking-wider uppercase text-ayora-charcoal hover:text-ayora-gold px-2.5 py-1.5 transition-colors duration-200 font-medium whitespace-nowrap"
              title="Call Ayora Suites"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-ayora-gold flex-shrink-0" />
              <span className="whitespace-nowrap">{HOTEL_CONFIG.contact.primaryPhone}</span>
            </a>

            <a
              href={`tel:${HOTEL_CONFIG.contact.primaryPhoneClean}`}
              className="hidden lg:inline-flex 2xl:hidden p-2 rounded-full border border-ayora-border bg-white/70 hover:bg-white text-ayora-charcoal hover:text-ayora-gold hover:border-ayora-gold transition-colors duration-200"
              title={`Call Ayora Suites: ${HOTEL_CONFIG.contact.primaryPhone}`}
              aria-label={`Call Ayora Suites at ${HOTEL_CONFIG.contact.primaryPhone}`}
            >
              <Phone className="w-3.5 h-3.5 text-ayora-gold" />
            </a>

            {/* Primary CTA - Guaranteed Single-line */}
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center justify-center px-4 xl:px-5 py-2.5 bg-ayora-gold hover:bg-ayora-gold-deep text-white text-xs font-semibold tracking-wider uppercase rounded-sm shadow-sm transition-all duration-300 hover:shadow-gold-glow active:scale-95 whitespace-nowrap flex-shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
              <span className="whitespace-nowrap">Book Your Stay</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:hidden flex-shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center px-3 py-2 bg-ayora-gold text-white text-[11px] font-semibold tracking-wider uppercase rounded-sm sm:hidden whitespace-nowrap"
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

      {/* Mobile Drawer / Fullscreen Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#F8F4EC] flex flex-col justify-between overflow-hidden animate-fade-in">

          {/* Mobile Drawer Top Bar - Pinned with Logo and Close Button */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 border-b border-ayora-border/80 bg-[#F8F4EC] flex-shrink-0 shadow-sm">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center focus:outline-none"
              aria-label="Ayora Suites Home"
            >
              <img
                src={HOTEL_CONFIG.brand.logoUrl}
                alt="AYORA SUITES"
                className="h-10 sm:h-12 w-auto object-contain max-h-[50px]"
              />
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-ayora-charcoal text-white hover:bg-black active:scale-95 transition-all focus:outline-none min-h-[38px] shadow-sm border border-ayora-gold/30"
              aria-label="Close navigation menu"
            >
              <span className="text-xs uppercase tracking-wider font-semibold text-ayora-gold">Close</span>
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Scrollable Navigation Body */}
          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4 overscroll-contain">
            <div className="text-center pb-2.5 border-b border-ayora-border/60">
              <span className="text-[10px] sm:text-[11px] tracking-widest uppercase text-ayora-muted font-medium block">
                {HOTEL_CONFIG.brand.tagline}
              </span>
            </div>

            <nav className="flex flex-col space-y-1.5 py-1">
              {[
                { name: 'Home', path: '/', icon: Building2 },
                { name: 'Rooms & Suites', path: '/rooms', icon: Bed },
                { name: 'Meetings & Events', path: '/meetings-events', icon: Building2 },
                { name: 'About Ayora Suites', path: '/about', icon: Sparkles },
                { name: 'Amenities & Services', path: '/amenities', icon: Coffee },
                { name: 'Photo Gallery', path: '/gallery', icon: Image },
                { name: 'Location & Airport Route', path: '/location', icon: MapPin },
                { name: 'Contact & Enquiries', path: '/contact', icon: Mail },
              ].map((link) => {
                const LinkIcon = link.icon;
                const linkIsActive = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded text-xs tracking-wider uppercase transition-all ${linkIsActive
                        ? 'bg-ayora-beige text-ayora-gold font-bold shadow-sm border border-ayora-gold/30'
                        : 'text-ayora-charcoal hover:bg-ayora-beige/60 hover:text-ayora-gold'
                      }`}
                  >
                    <div className="flex items-center space-x-3">
                      <LinkIcon className={`w-4 h-4 ${linkIsActive ? 'text-ayora-gold' : 'text-ayora-gold/80'}`} />
                      <span>{link.name}</span>
                    </div>
                    <ArrowRight className={`w-3.5 h-3.5 ${linkIsActive ? 'text-ayora-gold' : 'text-ayora-gold/60'}`} />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bottom Fixed Action Footer in Mobile Drawer */}
          <div className="p-4 sm:p-5 border-t border-ayora-border bg-[#F8F4EC] space-y-2.5 flex-shrink-0 shadow-lg">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-ayora-gold hover:bg-ayora-gold-deep active:scale-95 text-white text-xs font-semibold tracking-luxury uppercase rounded-sm shadow-md flex items-center justify-center space-x-2 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay Now</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${HOTEL_CONFIG.contact.primaryPhoneClean}`}
                className="flex items-center justify-center py-2.5 px-3 border border-ayora-border bg-white text-ayora-charcoal text-xs font-semibold uppercase tracking-wider rounded-sm hover:border-ayora-gold shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-ayora-gold" />
                <span>Call Us</span>
              </a>
              <a
                href={HOTEL_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center py-2.5 px-3 border border-[#25D366]/40 bg-white text-[#128C7E] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#25D366]/10 shadow-sm"
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
