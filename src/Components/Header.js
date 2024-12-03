import React, { useContext, useState } from 'react';
import { FaBars, FaHome, FaInfoCircle, FaShoppingCart, FaSignInAlt, FaSignOutAlt, FaTachometerAlt, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../App';

function Header({ cart }) {
  const { user, handleLogout } = useContext(AuthContext); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <FaHome /> Property Rental
          </Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <FaTachometerAlt /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FaInfoCircle /> About Us
              </Link>
            </li>
            <li>
              <Link to="/properties">
                <FaHome /> Properties
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <FaShoppingCart /> Cart
                {totalItems > 0 && (
                  <span className="cart-count">{totalItems}</span>
                )}
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/profile" className="user-link">
                    {/* Display the user avatar and name horizontally */}
                    {user.avatar && (
                      <img
                        src={user.avatar}
                        alt="User Avatar"
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          marginRight: '10px',
                        }}
                      />
                    )}
                    {user.name}
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="logout-button">
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    <FaSignInAlt /> Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <FaUserPlus /> Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
