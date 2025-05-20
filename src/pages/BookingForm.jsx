import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BookingForm() {
  const location = useLocation();
  const navigate = useNavigate();


  const flight = location.state?.flight;

  useEffect(() => {
    if (!flight) {
      navigate('/search');
    }
  }, [flight, navigate]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setError('Please enter your name and email.');
      return;
    }

    const booking = {
      id: Date.now(),
      name,
      email,
      flightId: flight.id,
      from: flight.from,
      to: flight.to,
      date: flight.date,
      time: flight.time,
      flightName: flight.flightName,
    };

    
    const existing = JSON.parse(localStorage.getItem('bookings')) || [];
    localStorage.setItem('bookings', JSON.stringify([...existing, booking]));

    setError('');
   
    navigate('/confirmation', { state: { booking } });
  };

  if (!flight) {
    return null; 
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Booking Form</h2>
      <p>
        Booking for: <strong>{flight.flightName}</strong> <br />
        Date: {flight.date} | Time: {flight.time}
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginBottom: '1rem', padding: '0.5rem', width: '300px', display: 'block' }}
        />
        <input
          type="email"
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginBottom: '1rem', padding: '0.5rem', width: '300px', display: 'block' }}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
