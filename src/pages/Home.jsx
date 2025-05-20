import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={styles.container}>
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80"
        alt="Airplane flying"
        style={styles.heroImage}
      />
      <h1 style={styles.title}>Welcome to TravelNow</h1>
      <p style={styles.subtitle}>Trusted platform to book the best flights !</p>
      <Link to="/search" style={styles.button}>Search Flights</Link>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '700px',
    margin: '3rem auto',
    padding: '1rem',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heroImage: {
    width: '100%',
    borderRadius: '15px',
    marginBottom: '1.5rem',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
  },
  title: {
    fontSize: '2.5rem',
    color: '#0077cc',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#444',
  },
  button: {
    display: 'inline-block',
    padding: '0.75rem 1.75rem',
    backgroundColor: '#0077cc',
    color: '#fff',
    fontWeight: '600',
    textDecoration: 'none',
    borderRadius: '30px',
    boxShadow: '0 4px 12px rgba(0, 119, 204, 0.5)',
    transition: 'background-color 0.3s ease',
  },
};
