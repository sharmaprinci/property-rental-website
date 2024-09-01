import React from 'react';
import '../CSS/style.css';

function PropertyCard({ property, onBookNow }) {
  const handleClick = () => {
    onBookNow(property);
  };

  const propertyClass = `property-card-${property.id}`;

  return (
    <div className={`property-card ${propertyClass}`}>
    <div className="property-details">
      <div className='property-data'>
        <h3>{property.name}</h3>
        <p className="price">${property.price}</p>
        <p>{property.property_type}</p>
        <p>{property.bedrooms} bedrooms, {property.bathrooms} bathrooms</p>
      </div>
      <div className='btn'>
        <button onClick={handleClick}>Book Now</button>
      </div>
    </div>
    </div>
  );
}

export default PropertyCard;
