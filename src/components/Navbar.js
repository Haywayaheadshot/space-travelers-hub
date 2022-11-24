import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import '../styles/navbar.css';
import logo from './images/planet.png';

function Navbar() {
  const [isOpen, isClosed] = useState(false);
  return (
    <nav className="nav-div">
      <section className="logo-div">
        <img className="space-hub-logo" src={logo} alt="Space Hub Logo" />
        <h1 className="logo">Space Travelers&apos; Hub</h1>
      </section>
      <section className="hamburger-div for-phone">
        <Hamburger
          color="#0290ff"
          toggled={isOpen}
          toggle={isClosed}
          duration={0.8}
          label="Show menu"
        />
        {isOpen
          ? (
            <ul className="nav-popUp-ul">
              <li className="nav-popUp-li">
                Rockets
              </li>
              <li className="nav-popUp-li">
                Missions
              </li>
              <li className="nav-popUp-li">
                My Profile
              </li>
            </ul>
          )
          : null}
      </section>
      <ul className="nav-links for-desktop">
        <li className="nav-desk-li">
          Rockets
        </li>
        <li className="nav-desk-li">
          Missions
        </li>
        <li className="nav-desk-li">
          My Profile
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
