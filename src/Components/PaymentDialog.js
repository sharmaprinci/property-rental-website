import React, { useState } from 'react';
import '../CSS/style.css';

const PaymentDialog = ({ isOpen, onClose, orderDetails, onPaymentComplete }) => {
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');
  const [debitCardNumber, setDebitCardNumber] = useState('');
  const [debitCardExpiryDate, setDebitCardExpiryDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const paymentDetails = {
      paymentMethod,
      cardNumber,
      expiryDate,
      cvv,
      upiId,
      debitCardNumber,
      debitCardExpiryDate,
    };

    if (paymentMethod === 'Cash on Delivery') {
      alert('Your order is placed.'); 
    } else {
      console.log('Payment details:', paymentDetails);
    }

    onPaymentComplete(); 
    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="payment-dialog">
      <div className="payment-dialog-content">
        <button className="payment-dialog-close" onClick={onClose}>×</button>
        <h2>Payment</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Payment Method:
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="UPI">UPI</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
          </label>
          {paymentMethod === 'Credit Card' && (
            <>
              <label>
                Card Number:
                <input 
                  type="text" 
                  value={cardNumber} 
                  onChange={(e) => setCardNumber(e.target.value)} 
                  required 
                />
              </label>
              <label>
                Expiry Date:
                <input 
                  type="text" 
                  value={expiryDate} 
                  onChange={(e) => setExpiryDate(e.target.value)} 
                  placeholder="MM/YY"
                  required 
                />
              </label>
              <label>
                CVV:
                <input 
                  type="text" 
                  value={cvv} 
                  onChange={(e) => setCvv(e.target.value)} 
                  required 
                />
              </label>
            </>
          )}
          {paymentMethod === 'Debit Card' && (
            <>
              <label>
                Debit Card Number:
                <input 
                  type="text" 
                  value={debitCardNumber} 
                  onChange={(e) => setDebitCardNumber(e.target.value)} 
                  required 
                />
              </label>
              <label>
                Expiry Date:
                <input 
                  type="text" 
                  value={debitCardExpiryDate} 
                  onChange={(e) => setDebitCardExpiryDate(e.target.value)} 
                  placeholder="MM/YY"
                  required 
                />
              </label>
            </>
          )}
          {paymentMethod === 'UPI' && (
            <label>
              UPI ID:
              <input 
                type="text" 
                value={upiId} 
                onChange={(e) => setUpiId(e.target.value)} 
                required 
              />
            </label>
          )}
          <div className="payment-dialog-summary">
            <p><strong>Total Cost:</strong> ${orderDetails.totalCost}</p>
          </div>
          <button type="submit">Submit Payment</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentDialog;
