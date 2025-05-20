import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail');

  // Hide navbar on login page or if not logged in
  if (location.pathname === '/login' || !userEmail) return null;

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  return (
    <nav style={{ padding: '1rem', background: '#3e77b6' }}>
      <Link to="/home" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/search" style={{ marginRight: '1rem' }}>Search Flights</Link>
      <Link to="/bookings" style={{ marginRight: '1rem' }}>Past Bookings</Link>
      <Link to="/discounts" style={{ marginRight: '1rem' }}>Discounts</Link>
      <Link to="/guides" style={{ marginRight: '1rem' }}>Travel Guides</Link>
      <button onClick={handleLogout} style={{ marginLeft: '2rem', padding: '0.3rem 0.6rem' }}>
        Logout
      </button>
    </nav>
  );
}
