import React, { useState, useEffect } from 'react';

interface HeroCarouselProps {
  images: string[];
  interval?: number;
  showIndicators?: boolean;
  indicatorClass?: string;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ 
  images, 
  interval = 5000,
  showIndicators = true,
  indicatorClass = "bottom-6" 
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-100">
      {/* Sliding Container */}
      <div 
        className="flex w-full h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div 
            key={index}
            className="w-full h-full flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
            role="img"
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Indicators (Dots) */}
      {showIndicators && (
        <div className={`absolute ${indicatorClass} left-0 w-full flex justify-center gap-2 z-20`}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => { e.stopPropagation(); setActiveIndex(index); }}
              className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
                index === activeIndex 
                  ? 'bg-white w-6 opacity-100' 
                  : 'bg-white w-2 opacity-60 hover:opacity-90'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;