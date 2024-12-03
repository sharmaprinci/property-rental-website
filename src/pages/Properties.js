import React from 'react';
import PropertyCard from '../Components/PropertyCard';
import PropertyCarousel from '../Components/PropertyCarousel';
import properties from '../data/data';

const Properties = ({ onBookNow }) => {
  return (
    <div className="properties">
      <PropertyCarousel properties={properties} onBookNow={onBookNow} />
      <div className="property-cards">
        {properties.map(property => (
          <PropertyCard 
            key={property.id} 
            property={property} 
            onBookNow={onBookNow} 
          />
        ))}
      </div>
    </div>
  );
};

export default Properties;
