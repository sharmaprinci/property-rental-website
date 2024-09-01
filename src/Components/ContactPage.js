import React from 'react';
import '../CSS/style.css';

const ContactPage = () => {
  return (
    <main className="contact-container">
      <section className="contact-section">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-description">We'd love to hear from you! Please fill out the form below to get in touch.</p>
        <form className="contact-form">
          <input type="text" className="contact-input" placeholder="Your Name" required />
          <input type="email" className="contact-input" placeholder="Your Email" required />
          <textarea className="contact-textarea" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn2 primary-btn">Send Message</button>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
