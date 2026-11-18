import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { HOTEL_CONFIG, type GalleryItem } from '../../data/hotelConfig';
import { Lightbox } from '../common/Lightbox';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['All', 'Property', 'Rooms', 'Interiors', 'Meetings & Events', 'Surroundings'];

  const filteredImages = activeCategory === 'All'
    ? HOTEL_CONFIG.gallery
    : HOTEL_CONFIG.gallery.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#EEE7DB]/50 relative" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 justify-center mb-3">
            <span className="w-6 h-[1px] bg-ayora-gold" />
            <span className="text-xs font-semibold uppercase tracking-luxury text-ayora-gold">
              Visual Narrative
            </span>
            <span className="w-6 h-[1px] bg-ayora-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ayora-charcoal font-normal leading-tight">
            Glimpses of Ayora Suites
          </h2>
          <p className="text-xs sm:text-sm text-ayora-muted mt-3 max-w-xl mx-auto font-light leading-relaxed">
            Explore our thoughtfully composed spaces, serene rooms, and executive meeting venues tailored for luxury stays near the airport.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-sm transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-ayora-gold text-white shadow-sm'
                  : 'bg-white text-ayora-charcoal hover:bg-ayora-beige border border-ayora-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetrical / Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredImages.map((item: GalleryItem, index: number) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative rounded-sm overflow-hidden bg-ayora-beige shadow-sm cursor-pointer border border-ayora-border aspect-[4/3]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />
              
              {/* Overlay with Hover Reveal */}
              <div className="absolute inset-0 bg-gradient-to-t from-ayora-dark/85 via-ayora-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[10px] uppercase tracking-luxury text-ayora-gold font-semibold">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg text-white mt-0.5">
                  {item.title}
                </h4>
                <div className="mt-2 flex items-center text-xs text-white/80 space-x-1">
                  <Eye className="w-3.5 h-3.5 text-ayora-gold" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Component */}
      <Lightbox
        isOpen={lightboxOpen}
        images={filteredImages}
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
