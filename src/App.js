import React, { createContext, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Cart from './Components/Cart';
import ContactPage from './Components/ContactPage';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Login from './Components/Login';
import MyProperties from './Components/MyProperties'; // Import MyProperties component
import SignUp from './Components/Signup';
import AboutUs from './pages/AboutUs';
import HomePage from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Properties from './pages/Properties';
import TestimonialPage from './pages/TestimonialPage';

export const AuthContext = createContext();

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(!!user);

  const location = useLocation(); 

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    setIsAuthenticated(!!user);
  }, [user]);

  const handleLogin = (userInfo) => {
    setUser(userInfo);
    localStorage.setItem('user', JSON.stringify(userInfo));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const handleBookNow = (property) => {
    setCart((prevCart) => {
      const existingProperty = prevCart.find(item => item.id === property.id);
      if (existingProperty) {
        return prevCart.map(item =>
          item.id === property.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...property, quantity: 1 }];
    });
  };

  const removeProperty = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart'); 
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      <div className="App">
        <Header cart={cart} />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignUp onLogin={handleLogin} />} />
            <Route path="/cart" element={
              <Cart 
                cart={cart} 
                removeProperty={removeProperty} 
                increaseQuantity={increaseQuantity} 
                decreaseQuantity={decreaseQuantity} 
                clearCart={clearCart}
              />
            } />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/properties" element={<Properties onBookNow={handleBookNow} />} />
            <Route path="/testimonials" element={<TestimonialPage />} />
            <Route path="/my-properties" element={<MyProperties addToCart={handleBookNow} />} />
 {/* Add route for MyProperties */}
          </Routes>

          {location.pathname !== '/cart' && <TestimonialPage />}
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

function AppWrapper() {
  return <App />;
}

export default function Root() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
