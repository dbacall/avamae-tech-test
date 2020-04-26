import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Navbar.css";
import Logo from "../assets/Logo.svg";

export const Navbar = () => {
  return (
    <ul>
      <li>
        <img src={Logo} className="logo" alt="logo" />
      </li>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/about-us">ABOUT US</Link>
      </li>
      <li>
        <Link to="/contact-us">CONTACT US</Link>
      </li>
      <li>
        <Link>Log in</Link>
      </li>
    </ul>
  );
};
