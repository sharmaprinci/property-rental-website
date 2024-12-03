import React, { useCallback, useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';


const PropertyCarousel = ({ properties, onBookNow }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === properties.length - 1 ? 0 : prevIndex + 1
    );
  }, [properties.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? properties.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 2000);

    return () => clearInterval(interval);
  }, [goToNext]);

  const currentProperty = properties.length > 0 ? properties[currentIndex] : null;

  return (
    <div className="property-carousel">
      <button className="carousel-button prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <div className="carousel-container">
        {currentProperty && (
          <PropertyCard property={currentProperty} onBookNow={onBookNow} />
        )}
      </div>
      <button className="carousel-button next" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default PropertyCarousel;
