// src/components/Header/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <h1><Link to="/" className="site-title">Žvejyba</Link></h1>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/login"><button className="nav-btn">Log In</button></Link>
        <Link to="/register"><button className="nav-btn">Register</button></Link>
      </nav>
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
    </header>
  );
};

export default Header;
