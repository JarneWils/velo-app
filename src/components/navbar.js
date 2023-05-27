import React, { useState } from "react";
import '../styles/navbar.css';
import '../styles/global.css';
import logo from '../public/velo-logo.png';


function Navbar() {
  const [active, setActive] = useState("nav__menu");

  const navToggle = () => {
    setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
  };

  return (
    <nav className="nav">
      <a href="https://" className="nav__logo"><img className="logo" src={logo} alt="Logo" /></a>
      <ul className={active}>
        <li className="nav__item"> <a href="https://" className="nav__link"> <div className="home">Home</div> </a> </li>
        <li className="nav__item"> <a href="https://" className="nav__link"> <div className="bikes">Bikes</div> </a> </li>
        <li className="nav__item"> <a href="https://" className="nav__link"> <div className="abonneer">Abonneer</div> </a> </li>
        <li className="nav__item"> <a href="https://" className="nav__link"> <div className="help">Help</div> </a> </li>
      </ul>
      <div onClick={navToggle} className="nav__toggler">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
