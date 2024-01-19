// src/components/Navbar.js
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <FaBars />
      </div>
      {isOpen && (
        <div className={`menu-dropdown ${isOpen ? 'active' : ''}`}>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
