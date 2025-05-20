import React from 'react';
import { useParams } from 'react-router-dom';

const FlightDetails = () => {
  const { id } = useParams();

  return (
    <div style={styles.container}>
      <img 
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80" 
        alt="Airplane" 
        style={styles.image} 
      />
      <h2 style={styles.title}>Flight Details for ID: {id}</h2>
      <p style={styles.text}>Details coming soon...</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '700px',
    margin: '2rem auto',
    padding: '1rem',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
    marginBottom: '1rem',
  },
  title: {
    color: '#0077cc',
    marginBottom: '0.5rem',
  },
  text: {
    fontSize: '1.1rem',
    color: '#555',
  },
};

export default FlightDetails;
