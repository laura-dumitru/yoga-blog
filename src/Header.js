import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./Header.css";

export default function Header() {
  return (
    <div id="header">
      <div className="container">
        <Link to="/" id="header-title">
          <Logo />
        </Link>
        <Link to="/about">About</Link>
        <Link to="/timetable">Timetable</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
