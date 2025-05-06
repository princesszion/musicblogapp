import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">About</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
};

export default Navbar;
