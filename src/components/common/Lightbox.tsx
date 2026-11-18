import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../../data/hotelConfig';

interface LightboxProps {
  images: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6 select-none animate-fade-in">
      {/* Top Bar */}
      <div className="flex items-center justify-between text-white/80 z-10">
        <div>
          <span className="text-xs uppercase tracking-luxury text-ayora-gold font-medium">
            {currentImage.category}
          </span>
          <h4 className="text-sm sm:text-base font-serif text-white mt-0.5">
            {currentImage.title}
          </h4>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-xs text-white/50 tracking-wider">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-all focus:outline-none border border-white/10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img
          src={currentImage.imageUrl}
          alt={currentImage.title}
          className="max-h-[82vh] max-w-[92vw] object-contain rounded-sm shadow-2xl transition-all duration-300"
        />

        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-all focus:outline-none border border-white/10"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Thumbnail Strip / Indicator */}
      <div className="flex items-center justify-center space-x-2 py-2 overflow-x-auto max-w-xl mx-auto">
        {images.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => {
              const diff = idx - currentIndex;
              if (diff > 0) {
                for (let i = 0; i < diff; i++) onNext();
              } else if (diff < 0) {
                for (let i = 0; i < Math.abs(diff); i++) onPrev();
              }
            }}
            className={`h-1.5 transition-all rounded-full ${
              idx === currentIndex ? 'w-8 bg-ayora-gold' : 'w-2 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
