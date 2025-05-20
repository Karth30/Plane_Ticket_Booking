import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SearchFlights from './pages/SearchFlights';
import FlightDetails from './pages/FlightDetails';
import BookingForm from './pages/BookingForm';
import Confirmation from './pages/Confirmation';
import Login from './pages/Login';
import Register from './pages/Register';
import PastBookings from './pages/PastBookings';
import Discounts from './pages/Discounts';
import TravelGuides from './pages/TravelGuides';
import './App.css';



export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<SearchFlights />} />
        <Route path="/flight/:id" element={<FlightDetails />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/bookings" element={<PastBookings />} />
        <Route path="/discounts" element={<Discounts />} />
        <Route path="/guides" element={<TravelGuides />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}
