import React, { useState } from 'react';

// Sample data for properties
const initialProperties = [
  {
    id: 1,
    title: 'Cozy Apartment in City Center',
    location: 'New York',
    price: 120, // Change to number for calculation purposes
    status: 'Available',
    image: 'https://propertymanagementselect.com/wp-content/uploads/2015/04/sacramento-property-management-apartments.jpg',
  }
];

const MyProperties = ({ addToCart }) => {
  const [properties, setProperties] = useState(initialProperties);
  const [newProperty, setNewProperty] = useState({
    title: '',
    location: '',
    price: '',
    status: 'Available',
    image: null,
  });

  // Function to handle adding a new property
  const addProperty = () => {
    if (newProperty.image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProperties((prevProperties) => [
          ...prevProperties,
          { ...newProperty, id: prevProperties.length + 1, image: reader.result, price: parseFloat(newProperty.price) },
        ]);
        setNewProperty({ title: '', location: '', price: '', status: 'Available', image: null });
      };
      reader.readAsDataURL(newProperty.image);
    } else {
      alert('Please upload an image.');
    }
  };

  return (
    <div>
      <h2>Add New Property</h2>
      <input
        type="text"
        placeholder="Title"
        value={newProperty.title}
        onChange={(e) => setNewProperty({ ...newProperty, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Location"
        value={newProperty.location}
        onChange={(e) => setNewProperty({ ...newProperty, location: e.target.value })}
      />
      <input
        type="text"
        placeholder="Price"
        value={newProperty.price}
        onChange={(e) => setNewProperty({ ...newProperty, price: e.target.value })}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setNewProperty({ ...newProperty, image: e.target.files[0] })}
      />
      <button onClick={addProperty}>Add Property</button>

      <h1>My Properties</h1>
      {properties.map((property) => (
        <div key={property.id} style={{ display: 'flex', margin: '10px 0' }}>
          <img
            src={property.image}
            alt={property.title}
            style={{ width: '30%', marginRight: '10px', borderRadius: '5px' }}
          />
          <div>
            <h3>{property.title}</h3>
            <p>Location: {property.location}</p>
            <p>Price: ${property.price.toFixed(2)}</p>
            <p>Status: {property.status}</p>
            <button onClick={() => addToCart(property)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProperties;
