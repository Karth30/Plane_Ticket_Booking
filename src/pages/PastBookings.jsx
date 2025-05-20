import React, { useEffect, useState } from 'react';

export default function PastBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Load bookings from localStorage or API
    const stored = localStorage.getItem('bookings');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) setBookings(parsed);
      } catch (e) {
        console.error('Invalid bookings data', e);
      }
    }
  }, []);

  if (!bookings.length) return <p>No past bookings found.</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Past Bookings</h2>
      <ul>
        {bookings.map((booking, i) => {
          if (!booking) return null;

          const { from, to, date, time } = booking || {};

          return (
            <li key={i} style={{ marginBottom: '1rem' }}>
              <strong>From:</strong> {from || 'Unknown'} <br />
              <strong>To:</strong> {to || 'Unknown'} <br />
              <strong>Date:</strong> {date || 'Unknown'} <br />
              <strong>Time:</strong> {time || 'Unknown'} <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
