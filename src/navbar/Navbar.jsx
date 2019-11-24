import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

const NavBar = () => {
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark pl-5">
  <NavLink to="/Home"><span className="logo"><img src={logo} alt="logo"/></span></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav text-center">
      <li className="nav-item mr-5">
        <NavLink to="/Home"className="nav-link" ><span className="navItems">Home </span><span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item mr-5">
        <NavLink to="/jobs" className="nav-link" ><span className="navItems">Jobs </span></NavLink>
      </li>
      <li className="nav-item mr-5">
        <NavLink to="/about" className="nav-link" ><span className="navItems">About </span></NavLink>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default NavBar;