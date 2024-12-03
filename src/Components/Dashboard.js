import React, { useEffect, useState } from 'react';
import MyProperties from './MyProperties';
import ProfileSection from './ProfileSection'; // Import your ProfileSection component

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('stats'); // Track which section is active (default to 'stats')
  const [properties, setProperties] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || {});

  const [stats, setStats] = useState({
    totalProperties: 0,
    activeBookings: 0,
    revenue: 0,
  });

  // Fetch properties and bookings from localStorage or API
  useEffect(() => {
    const fetchPropertiesAndBookings = () => {
      const savedProperties = JSON.parse(localStorage.getItem('properties')) || [];
      const savedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
      setProperties(savedProperties);
      setBookings(savedBookings);

      // Calculate statistics
      const totalProperties = savedProperties.length;
      const activeBookings = savedBookings.length;
      const revenue = savedBookings.reduce((acc, booking) => acc + booking.totalCost, 0);

      setStats({ totalProperties, activeBookings, revenue });
    };

    fetchPropertiesAndBookings();
  }, []);

  // Handle section changes when clicking the sidebar links
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <button onClick={() => handleSectionChange('profile')}>Profile</button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('properties')}>My Properties</button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('bookings')}>My Bookings</button>
          </li>
          <li>
            <button onClick={() => handleSectionChange('stats')}>Statistics</button>
          </li>
        </ul>
      </aside>

      <main className="dashboard-content">
        {/* Conditionally render sections based on activeSection state */}
        {activeSection === 'stats' && (
          <section id="stats" className="dashboard-section">
            <h3>Dashboard Overview</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <h4>Total Properties</h4>
                <p>{stats.totalProperties}</p>
              </div>
              <div className="stat-card">
                <h4>Active Bookings</h4>
                <p>{stats.activeBookings}</p>
              </div>
              <div className="stat-card">
                <h4>Total Revenue</h4>
                <p>${stats.revenue}</p>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'profile' && (
          <ProfileSection user={user} />
        )}

        {activeSection === 'properties' && (
          <section id="properties" className="dashboard-section">
            <MyProperties /> {/* Show MyProperties only when this section is active */}
          </section>
        )}

        {activeSection === 'bookings' && (
          <section id="bookings" className="dashboard-section">
            <h3>My Bookings</h3>
            {bookings.length === 0 ? (
              <p>No bookings found.</p>
            ) : (
              bookings.map(booking => (
                <div key={booking.id} className="booking-card">
                  <h4>{booking.propertyName}</h4>
                  <p>Booking Date: {booking.date}</p>
                  <p>Total Cost: ${booking.totalCost}</p>
                </div>
              ))
            )}
          </section>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
