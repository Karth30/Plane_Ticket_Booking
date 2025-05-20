import React, { useState } from 'react';

export default function TravelGuide() {
  const [destination, setDestination] = useState('');
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchInfo = async () => {
    if (!destination) {
      setError('Please enter a location.');
      return;
    }

    setLoading(true);
    setError('');
    setInfo('');

    try {
      const wikiResponse = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&format=json&titles=${destination}&prop=extracts&exintro&explaintext&origin=*`
      );
      const wikiData = await wikiResponse.json();
      const pages = wikiData.query.pages;
      const pageId = Object.keys(pages)[0];

      if (pageId === '-1') {
        setError('No information found for this location.');
      } else {
        setInfo(pages[pageId].extract);
      }
    } catch (err) {
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '1rem' }}>Travel Guide</h2>
      <input
        type="text"
        placeholder="Enter a place (e.g., Tokyo)"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        style={{ padding: '0.5rem', width: '250px', marginRight: '0.5rem' }}
      />
      <button onClick={fetchInfo} style={{ padding: '0.5rem 1rem' }}>
        Search
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {info && (
        <div style={{ marginTop: '1.5rem' }}>
          <h3>{destination} Overview:</h3>
          <p style={{ whiteSpace: 'pre-wrap' }}>{info}</p>
        </div>
      )}
    </div>
  );
}
