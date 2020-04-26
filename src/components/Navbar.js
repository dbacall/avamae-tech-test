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
      <li key="home">
        <Link to="/">HOME</Link>
      </li>
      <li key="about">
        <Link to="/about-us">ABOUT US</Link>
      </li>
      <li key="contact">
        <Link to="/contact-us">CONTACT US</Link>
      </li>
      <li key="login">
        <Link to="">Log in</Link>
      </li>
    </ul>
  );
};
