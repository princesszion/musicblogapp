// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png'; // Make sure the path is correct

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="headerContent">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>☰</button>

        <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/audios" onClick={() => setMenuOpen(false)}>Music</Link>
          <Link to="/blogs" onClick={() => setMenuOpen(false)}>Stories</Link>
          <Link to="/books" onClick={() => setMenuOpen(false)}>Books</Link>
          <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
