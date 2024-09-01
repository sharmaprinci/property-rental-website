import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/style.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are a leading property rental platform, connecting renters with property owners across the globe.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link> 
            </li>
            <li>
              <Link to="/about">About Us</Link> 
            </li>
            <li>
              <Link to="/contact">Contact</Link> 
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link> 
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: princiinps@gmail.com</p>
          <p>Phone: +91 9554946832</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Property Rental. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
