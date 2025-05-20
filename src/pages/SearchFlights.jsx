import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const fixedTimes = ['08:00 AM', '12:00 PM', '06:00 PM'];

export default function SearchFlights() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [availableFlights, setAvailableFlights] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!from || !to || !date) {
      setAvailableFlights([]);
      return;
    }

    const flights = fixedTimes.map((time, index) => ({
      id: `${from.substring(0, 2).toUpperCase()}${to.substring(0, 2).toUpperCase()}${index + 1}00`, // e.g. CHGO100
      from,
      to,
      date,
      time,
      flightName: `${from} to ${to} Flight ${index + 1}`,
    }));

    setAvailableFlights(flights);
  };

  const handleSelectFlight = (flight) => {
    // Pass flight data to booking page
    navigate('/booking', { state: { flight } });
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Search Flights</h2>
      <form onSubmit={handleSearch} style={{ marginBottom: '1rem' }}>
        <input
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          required
          style={{ marginRight: '0.5rem' }}
        />
        <input
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
          style={{ marginRight: '0.5rem' }}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={{ marginRight: '0.5rem' }}
        />
        <button type="submit">Search</button>
      </form>

      {availableFlights.length > 0 ? (
        <div>
          <h3>Available Flights</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {availableFlights.map((flight) => (
              <li key={flight.id} style={{ marginBottom: '0.75rem', border: '1px solid #ccc', padding: '0.75rem', borderRadius: '5px' }}>
                <strong>{flight.flightName}</strong> | Date: {flight.date} | Time: {flight.time}{' '}
                <button onClick={() => handleSelectFlight(flight)} style={{ marginLeft: '1rem' }}>
                  Book This Flight
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Please enter the Details</p>
      )}
    </div>
  );
}
