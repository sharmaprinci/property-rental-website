import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';
import Checkout from './Checkout';
import Modal from './Model';
import PaymentDialog from './PaymentDialog';

const Cart = ({ cart, removeProperty, increaseQuantity, decreaseQuantity, clearCart }) => {
  const { user } = useContext(AuthContext); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [isCartEmptyMessageVisible, setIsCartEmptyMessageVisible] = useState(false);
  const navigate = useNavigate();

  const totalCost = cart.reduce((total, property) => total + property.price * property.quantity, 0);

  const handleCheckout = (orderDetails) => {
    console.log('Order details:', orderDetails);
    setOrderDetails(orderDetails);
    setIsModalOpen(false); 
  };

  const handlePayNowClick = () => {
    setIsPaymentDialogOpen(true);
  };

  const handlePaymentComplete = () => {
    // Save the order to local storage
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const newBookings = cart.map(property => ({
      id: property.id,
      propertyName: property.name,
      date: new Date().toLocaleDateString(), // Set the booking date to today
      totalCost: property.price * property.quantity,
    }));

    // Add new bookings to existing bookings
    const updatedBookings = [...existingBookings, ...newBookings];
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));

    // Optionally save properties as booked (if needed)
    const existingProperties = JSON.parse(localStorage.getItem('properties')) || [];
    const updatedProperties = existingProperties.map(property => {
      if (cart.some(item => item.id === property.id)) {
        return { ...property, status: 'Booked' }; // Update the status if booked
      }
      return property;
    });
    localStorage.setItem('properties', JSON.stringify(updatedProperties));

    clearCart();
    setOrderDetails(null); 
    setIsPaymentDialogOpen(false); 
    setIsCartEmptyMessageVisible(true); 
  };

  const handleCheckoutClick = () => {
    if (user) { 
      setIsModalOpen(true);
    } else {
      alert("Please login first");
      navigate('/login'); 
    }
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 || isCartEmptyMessageVisible ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(property => (
            <div key={property.id} className="cart-item">
              <h3>{property.name}</h3>
              <p>${property.price} x {property.quantity}</p>
              <button onClick={() => decreaseQuantity(property.id)}>-</button>
              <span className="quantity">{property.quantity}</span> 

              <button onClick={() => increaseQuantity(property.id)}>+</button>
              <button onClick={() => removeProperty(property.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-summary">
            <p>Total Cost: ${totalCost.toFixed(2)}</p>
            {!orderDetails ? (
              <button className="checkout-button" onClick={handleCheckoutClick}>Checkout</button>
            ) : (
              <div className="order-summary">
                <h3>Order Summary</h3>
                <div className="order-summary-detail">
                  <span className="label">Name:</span>
                  <span className="value">{orderDetails.name}</span>
                </div>
                <div className="order-summary-detail">
                  <span className="label">Email:</span>
                  <span className="value">{orderDetails.email}</span>
                </div>
                <div className="order-summary-detail">
                  <span className="label">Address:</span>
                  <span className="value">{orderDetails.address}</span>
                </div>
                <div className="order-summary-detail">
                  <span className="label">Payment Method:</span>
                  <span className="value">{orderDetails.paymentMethod}</span>
                </div>
                <div className="order-summary-detail">
                  <span className="label">Total Cost:</span>
                  <span className="value">${totalCost.toFixed(2)}</span>
                </div>
                <button onClick={handlePayNowClick} className='pay-btn'>Pay Now</button>
              </div>
            )}
          </div>
        </>
      )}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Checkout 
          cart={cart} 
          totalCost={totalCost} 
          onCheckout={handleCheckout} 
        />
      </Modal>
      <PaymentDialog 
        isOpen={isPaymentDialogOpen} 
        onClose={() => setIsPaymentDialogOpen(false)} 
        orderDetails={orderDetails} 
        onPaymentComplete={handlePaymentComplete} 
      />
    </div>
  );
};

export default Cart;
