import React from 'react';

const AboutUs = () => {
  return (
    <main className="about-container">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">About Us</h1>
          <p className="about-intro">
            Welcome to <strong>Your Dream Home Finder</strong>, your trusted partner in finding the perfect rental home that meets your needs and exceeds your expectations.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="about-section">
        <h2 className="section-title">Who We Are</h2>
        <p className="section-description">
          At Your Dream Home Finder, we are passionate about helping individuals and families discover their next home. With a team of dedicated real estate professionals, tech enthusiasts, and customer service experts, we have created a platform that combines cutting-edge technology with a human touch. Our goal is to provide a user-friendly, reliable, and comprehensive rental property search platform that empowers you to make informed decisions.
        </p>
      </section>

      {/* Mission Section */}
      <section className="about-section">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-description">
          Our mission is simple: to revolutionize the rental property search experience by providing a platform that is both intuitive and comprehensive. We aim to bridge the gap between prospective renters and property owners by offering a wide range of curated listings, detailed property information, and robust search tools that cater to your unique needs.
        </p>
      </section>

      {/* What We Offer Section */}
      <section className="about-section">
        <h2 className="section-title">What We Offer</h2>
        <ul className="offer-list">
          <li className="offer-item"><strong>Curated Property Listings:</strong> We handpick properties that meet our high standards of quality, comfort, and value.</li>
          <li className="offer-item"><strong>Advanced Search and Filter Options:</strong> Easily filter properties by location, price, size, amenities, and more.</li>
          <li className="offer-item"><strong>Detailed Property Information:</strong> Each listing includes comprehensive details such as high-quality photos, virtual tours, neighborhood insights, and amenities.</li>
          <li className="offer-item"><strong>Secure and Seamless Booking Process:</strong> Our secure booking process is designed to make it easy for you to reserve your dream home.</li>
          <li className="offer-item"><strong>Expert Support Team:</strong> Our customer support team is here to assist you every step of the way.</li>
        </ul>
      </section>

      {/* Values Section */}
      <section className="about-section">
        <h2 className="section-title">Our Values</h2>
        <ul className="values-list">
          <li className="value-item"><strong>Transparency:</strong> We believe in clear and open communication.</li>
          <li className="value-item"><strong>Customer-Centricity:</strong> Your satisfaction is our top priority.</li>
          <li className="value-item"><strong>Innovation:</strong> We are constantly enhancing our platform to provide the best experience.</li>
          <li className="value-item"><strong>Integrity:</strong> We operate with the highest level of integrity.</li>
        </ul>
      </section>

      {/* Join Our Community Section */}
      <section className="about-section">
        <h2 className="section-title">Join Our Community</h2>
        <p className="section-description">
          We invite you to explore our platform, discover our featured properties, and join our growing community of satisfied renters. Subscribe to our newsletter for the latest updates, property listings, and exclusive offers. Your dream home is just a click away!
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="about-section">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-description">
          Have questions or need assistance? Our team is here to help! Visit our <a href="/contact" className="contact-link">Contact Us</a> page to get in touch, and let us guide you on your journey to finding the perfect rental home.
        </p>
      </section>
    </main>
  );
};

export default AboutUs;
