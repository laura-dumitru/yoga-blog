import React from "react";
import { Link } from "react-router-dom";
//import logo from "./logo.svg";

export default function Header() {
  return (
    <div id="header">
      <div className="container">
        <Link to="/" id="header-title">
          <em>Yoga with Laura</em>
        </Link>
        <Link to="/about">About</Link>
        <Link to="/timetable">Timetable</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
