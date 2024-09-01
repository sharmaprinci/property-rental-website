import React from 'react';
import PropertyCard from '../Components/PropertyCard';
import PropertyCarousel from '../Components/PropertyCarousel';
import properties from '../data/data';

const Dashboard = ({ onBookNow }) => {
  return (
    <div className="dashboard">
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

export default Dashboard;
