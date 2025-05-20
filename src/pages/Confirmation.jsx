// src/pages/Confirmation.jsx
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state?.booking;

  // Redirect to home if no booking info found 
  useEffect(() => {
    if (!booking) {
      navigate('/home');
    }
  }, [booking, navigate]);

  if (!booking) return null;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Booking Confirmed!</h2>
      <p>
        Thank you, <strong>{booking.name}</strong>.<br />
        Your ticket from <strong>{booking.from}</strong> to <strong>{booking.to}</strong> on <strong>{booking.date}</strong> at <strong>{booking.time}</strong> is booked.<br />
        <br />
        A confirmation email has been sent to <strong>{booking.email}</strong>.
      </p>
    </div>
  );
}
