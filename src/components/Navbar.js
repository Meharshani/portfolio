import React from 'react';
import { NavLink } from 'react-router-dom';
import { mhrsolutionlogo } from '../images/image';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        <img 
          src={mhrsolutionlogo}
          alt="MHR Solution logo"
          className="nav-logo"
          style={{ width: "150px", height: "auto", maxHeight: "65px" }}
        />
        {/* <span style={{ fontSize: '1.5rem' }}>MHR Solution</span> */}
      </NavLink>
      <ul className="nav-links">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
