import React, { useState } from 'react';
import companyLogo from "../assets/companylogo.png";
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
           <img src={companyLogo} alt="Matura logo" className='companylogo' />
          <a href="/">Matura</a>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </div>
          
          <div className="nav-item dropdown">
            <div 
              className="nav-link dropdown-trigger"
              onClick={() => toggleDropdown('services')}
            >
              Services <span className="dropdown-arrow">▼</span>
            </div>
            {activeDropdown === 'services' && (
              <div className="dropdown-menu">
                <a href="/web-dev" className="dropdown-item">Web Development</a>
                <a href="/mobile-dev" className="dropdown-item">Mobile Development</a>
                <a href="/consulting" className="dropdown-item">Consulting</a>
              </div>
            )}
          </div>
          
          <div className="nav-item">
            <a href="/about" className="nav-link">
              About
            </a>
          </div>
          
          <div className="nav-item">
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </div>
        </div>
        
        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;