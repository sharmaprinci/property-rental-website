import React from 'react';

function PropertyCard({ property, onBookNow }) {
  const handleClick = () => {
    onBookNow(property);
  };

  return (
    <div className={`property-card property-card-${property.id}`}>
      <div className="property-details">
        <div className="property-info">
          <h3 className="property-name">{property.name}</h3>
          <p className="property-price">${property.price}</p>
          <p className="property-type">{property.property_type}</p>
          <p className="property-features">
            {property.bedrooms} bedrooms, {property.bathrooms} bathrooms
          </p>
        </div>
        <div className="action-btn">
          <button className="book-now-btn" onClick={handleClick}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
