import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Navbar.css";
import Logo from "../assets/Logo.svg";

export const Navbar = () => {
  return (
    <ul className="nav-ul">
      <img src={Logo} className="logo" alt="logo" />
      <div className="nav-btns">
        <li key="login">
          <Link to="" className="nav-li" id="login">
            Log in
          </Link>
        </li>
        <li key="contact">
          <Link className="nav-li" to="/contact-us">
            CONTACT US
          </Link>
        </li>
        <li key="about">
          <Link className="nav-li" to="/about-us">
            ABOUT US
          </Link>
        </li>
        <li key="home">
          <Link className="nav-li" to="/">
            HOME
          </Link>
        </li>
      </div>
    </ul>
  );
};
