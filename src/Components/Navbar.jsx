// ...existing code...
import React, { useState } from 'react';
import companyLogo from "../assets/companylogo.png";
// removed: import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (name) => setActiveDropdown(activeDropdown === name ? null : name);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={companyLogo} alt="Matura logo" className="h-8 w-8 object-contain" />
            <a href="/" className="text-lg font-semibold">Matura</a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="text-gray-700 hover:text-gray-900 flex items-center gap-2"
              >
                Services <span className="text-sm">▼</span>
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute mt-2 right-0 bg-white border rounded shadow-md py-2 w-44">
                  <a href="/web-dev" className="block px-3 py-2 hover:bg-gray-50">Web Development</a>
                  <a href="/mobile-dev" className="block px-3 py-2 hover:bg-gray-50">Mobile Development</a>
                  <a href="/consulting" className="block px-3 py-2 hover:bg-gray-50">Consulting</a>
                </div>
              )}
            </div>

            <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center border rounded overflow-hidden">
              <input type="text" placeholder="Search..." className="px-2 py-1 outline-none" />
              <button className="px-3 bg-gray-100 hover:bg-gray-200">🔍</button>
            </div>

            <button
              className="md:hidden p-2 rounded hover:bg-gray-100"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-2 space-y-2">
            <a href="/" className="block px-2 py-1">Home</a>
            <button onClick={() => toggleDropdown('services')} className="w-full text-left px-2 py-1">Services ▼</button>
            {activeDropdown === 'services' && (
              <div className="pl-4">
                <a href="/web-dev" className="block px-2 py-1">Web Development</a>
                <a href="/mobile-dev" className="block px-2 py-1">Mobile Development</a>
                <a href="/consulting" className="block px-2 py-1">Consulting</a>
              </div>
            )}
            <a href="/about" className="block px-2 py-1">About</a>
            <a href="/contact" className="block px-2 py-1">Contact</a>
            <div className="px-2 py-1">
              <input type="text" placeholder="Search..." className="w-full px-2 py-1 border rounded" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
// ...existing code...