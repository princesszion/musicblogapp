// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="headerContent">
        <div className="logo">
          <Link to="/">
            <img src="https://www.moi-albert.com/assets/logo-3528c10c.svg" alt="Logo" /> {/* Update with your logo path */}
          </Link>
        </div>
        <nav className="navigation">
          <Link to="/audios">Music</Link>
          <Link to="/blogs">Stories</Link>
          <Link to="/books">Books</Link>
          <Link to="/events">Events</Link>
          <Link to="/manage-blogs" className="active">Manage all blogs</Link>
        </nav>
        <div className="profile">
          <Link to="/profile" className="profileLink">
            <span className="profileInitial">M</span>
            My Profile
          </Link>
          <button className="signOutButton">Sign out</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
