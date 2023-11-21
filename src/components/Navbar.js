import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyles.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/" className="navbar-link">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/form" className="navbar-link">
            Formulário
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar-link">
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
