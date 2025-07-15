import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="brand">
          <Link to="/">
            <h1>Anjal</h1>
          </Link>
        </div>
        <button className="mobile-menu" onClick={toggleMenu}>
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </button>
        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
