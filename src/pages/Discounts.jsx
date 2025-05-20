import React, { useEffect, useState } from 'react';
import { Wheel } from 'react-custom-roulette';

const discountImages = {
  10: 'https://cdn-icons-png.flaticon.com/512/2331/2331949.png',   
  20: 'https://cdn-icons-png.flaticon.com/512/833/833472.png',     
  30: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',   
};

const wheelData = [
  { option: '5% OFF' },
  { option: '10% OFF' },
  { option: 'Free Upgrade' },
  { option: '15% OFF' },
  { option: 'Surprise Gift' },
];

export default function Discounts() {
  const [discount, setDiscount] = useState(0);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);
  const [gift, setGift] = useState(localStorage.getItem('gift') || '');
  const [lastSpinDate, setLastSpinDate] = useState(localStorage.getItem('lastSpinDate'));

  useEffect(() => {
    const stored = localStorage.getItem('bookings');
    const bookings = stored ? JSON.parse(stored) : [];

    const count = bookings.length;

    if (count >= 6) setDiscount(30);
    else if (count >= 4) setDiscount(20);
    else if (count >= 2) setDiscount(10);
    else setDiscount(0);
  }, []);

  const canSpinToday = () => {
    if (!lastSpinDate) return true;
    const lastDate = new Date(lastSpinDate);
    const today = new Date();
    return lastDate.toDateString() !== today.toDateString();
  };


  const handleSpinClick = () => {
    if (!canSpinToday()) {
      alert('You can only spin once per day. Come back tomorrow!');
      return;
    }
    const newPrize = Math.floor(Math.random() * wheelData.length);
    setPrizeNumber(newPrize);
    setMustSpin(true);
  };

  
  const handleStopSpin = () => {
    setMustSpin(false);
    const wonGift = wheelData[prizeNumber].option;
    setGift(wonGift);
    const today = new Date().toISOString();
    setLastSpinDate(today);
    localStorage.setItem('lastSpinDate', today);
    localStorage.setItem('gift', wonGift);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: 600, margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>Your Discounts & Gifts</h2>

      {/* Bookings-based Discount Section */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          backgroundColor: '#f8f8f8',
          padding: '1rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
        }}
      >
        {discount > 0 ? (
          <>
            <img
              src={discountImages[discount]}
              alt={`${discount}% OFF`}
              style={{ width: 80, height: 80 }}
            />
            <p style={{ fontSize: '1.2rem', margin: 0 }}>
              You qualify for a <strong>{discount}%</strong> discount on your next booking!
            </p>
          </>
        ) : (
          <p style={{ fontSize: '1.1rem', margin: 0 }}>
            No discounts yet. Book more flights to earn rewards!
          </p>
        )}
      </div>

      {/* Spin Wheel Section */}
      <div style={{ textAlign: 'center' }}>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={wheelData}
          backgroundColors={['#e94560', '#0f3460']}
          textColors={['#fff']}
          onStopSpinning={handleStopSpin}
          radiusLineColor="#fff"
          fontSize={14}
          outerBorderColor="#e94560"
          outerBorderWidth={5}
          innerBorderColor="#fff"
          innerBorderWidth={3}
          perpendicularText
        />
        <button
          onClick={handleSpinClick}
          style={{
            marginTop: '1.5rem',
            padding: '0.75rem 2rem',
            fontSize: '1.2rem',
            borderRadius: '30px',
            border: 'none',
            backgroundColor: '#e94560',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
          }}
        >
          Spin the Gift Wheel
        </button>

        {gift && (
          <p
            style={{
              marginTop: '1rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              color: '#0f3460',
            }}
          >
             You won: {gift} 
          </p>
        )}
      </div>
    </div>
  );
}
