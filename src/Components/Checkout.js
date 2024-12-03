import React, { useState } from 'react';


const Checkout = ({ cart, totalCost, onCheckout }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  const handleCheckout = () => {
    if (name && email && address) {
      const orderDetails = {
        name,
        email,
        address,
        paymentMethod,
        totalCost,
      };
      
      localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
      localStorage.setItem('cart', JSON.stringify(cart));

      onCheckout(orderDetails); 
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-form">
        <label>
          Name:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </label>
        <label>
          Email:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
        <label>
          Address:
          <textarea 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
        </label>
        <label>
          Payment Method:
          <select 
            value={paymentMethod} 
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="UPI">UPI</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </select>
        </label>
        <div className="checkout-summary">
          <p>Total Cost: ${totalCost}</p>
        </div>
        <button onClick={handleCheckout}>Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
