import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
                <NavLink onClick={() => isClosed(false)} to="/" activeclassname="active-link">
                  Rockets
                </NavLink>
              </li>
              <li className="nav-popUp-li">
                <NavLink onClick={() => isClosed(false)} to="/missions" activeclassname="active-link">
                  Missions
                </NavLink>
              </li>
              <li className="nav-popUp-li">
                <NavLink onClick={() => isClosed(false)} to="/profile" activeclassname="active-link">
                  My Profile
                </NavLink>
              </li>
            </ul>
          )
          : null}
      </section>
      <ul className="nav-links for-desktop">
        <li className="nav-desk-li">
          <NavLink to="/" className="links" activeclassname="active-link">
            Rockets
          </NavLink>
        </li>
        <li className="nav-desk-li">
          <NavLink to="/missions" className="links" activeclassname="active-link">
            Missions
          </NavLink>
        </li>
        <li className="nav-desk-li">
          <NavLink to="/profile" className="links" activeclassname="active-link">
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
