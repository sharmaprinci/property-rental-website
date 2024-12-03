import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/dashboard'); 
  };

  return (
    <main className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Find Your Perfect Rental Home</h1>
          <p className="hero-description">
            Welcome to <strong>Your Dream Home Finder</strong>, the ultimate destination for discovering your next rental home. Whether you're looking for a serene suburban house or a bustling city apartment, we make it easy to explore, compare, and find the best rental options.
          </p>
          <button className="explore-btn" onClick={handleExploreClick}>Explore Properties</button>
        </div>
      </section>

      <section className="categories">
        <h2 className="section-title">Explore Our Property Types</h2>
        <div className="category-list">
        </div>
      </section>

      <section className="why-us">
        <h2 className="section-title">Why Choose Us?</h2>
        <ul className="benefit-list">
        </ul>
      </section>

      <section className="featured">
        <h2 className="section-title">Featured Properties</h2>
        <p className="featured-description">Discover some of the most popular and unique homes available right now, offering something special for everyone.</p>
      </section>

      <section className="cta">
        <h2 className="cta-title">Start Your Search Today!</h2>
        <p className="cta-description">Ready to find your new home? Start exploring now! Our platform is here to help you every step of the way.</p>
        <button className="btn1 primary-btn" onClick={handleExploreClick}>Browse Properties</button>
      </section>
      <section className="newsletter">
        <h2 className="newsletter-title">Stay Updated</h2>
        <p className="newsletter-description">Join our community and subscribe to our newsletter for the latest updates, property listings, and exclusive offers.</p>
        <Link to="/contact" className="btn1 secondary-btn">Contact Us</Link>
      </section>
    </main>
  );
};

export default HomePage;
