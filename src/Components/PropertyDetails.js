import React, { useEffect, useState } from 'react';

import apartment from '../images/apartment.jpg';
function PropertyDetails({ onBookNow }) {
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const propertyData = {
        id: 1,
        name: 'Luxury Apartment in Downtown',
        description: 'A beautiful, fully-furnished luxury apartment located in the heart of downtown. Close to all amenities, with breathtaking city views.',
        price: 1200,
        location: 'Downtown, Cityville',
        amenities: ['Free Wi-Fi', 'Air Conditioning', 'Gym', 'Pool', 'Parking'],
        images: [
          apartment
        ],
      };
      setProperty(propertyData);
    };

    fetchProperty();
  }, []);

  const handleBookNowClick = () => {
    if (property) {
      const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
      existingCart.push(property);
      localStorage.setItem('cart', JSON.stringify(existingCart));

      if (onBookNow) {
        onBookNow(property); 
      }
    }
  };

  if (!property) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="property-details">
      <div className="property-images">
        {property.images.map((image, index) => (
          <img key={index} src={image} alt={`Property ${index + 1}`} />
        ))}
      </div>
      <div className="property-info">
        <h1>{property.name}</h1>
        <p className="property-location">{property.location}</p>
        <p className="property-description">{property.description}</p>
        <p className="property-price">${property.price} / month</p>
        <h3>Amenities</h3>
        <ul className="property-amenities">
          {property.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
        <button className="booking-button" onClick={handleBookNowClick}>Book Now</button>
      </div>
    </div>
  );
}

export default PropertyDetails;
