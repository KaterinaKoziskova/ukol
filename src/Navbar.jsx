import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Produkty</Link></li>
        <li><Link to="/kontakty">Kontakty</Link></li>
        <li><Link to="/kosik">Košík</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
