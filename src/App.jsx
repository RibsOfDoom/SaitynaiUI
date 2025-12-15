// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import CityPage from './pages/CityPage/CityPage';
import FishPage from './pages/FishPage/FishPage';
import FishInfoPage from './pages/FishInfoPage/FishInfoPage';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/city/:city/waters" element={<CityPage />} />
        <Route path="/city/:city/:water/fish" element={<FishPage />} />
        <Route path="/city/:city/:water/fish/:fishName" element={<FishInfoPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
