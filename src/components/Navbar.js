import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import logo from './images/planet.png';

function Navbar() {
  return (
    <header className="nav-div">
      <section className="logo-div">
        <img className="space-hub-logo" src={logo} alt="Space Hub Logo" />
        <h1 className="logo">Space Travelers&apos; Hub</h1>
      </section>
      <nav className="nav-links">
        <NavLink to="/" activeclassname="active-link">
          Rockets
        </NavLink>
        <NavLink to="/missions" activeclassname="active-link">
          Missions
        </NavLink>
        <NavLink to="/profile" activeclassname="active-link">
          My Profile
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
