

import React, { useState } from 'react';
import logo from './logo.png';
import './navbar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';



const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // window.onscroll = () => {
  //   const Nav = document.querySelector('.navigation');
  //   if(this.scroll <= 100) Nav.className = ''; else Nav.className = 'scroll';
  // };

  return (
    <div className="navigation nav-scrolled">
      <Navbar color="transparent" light expand="md">
        <NavbarBrand href="/"><img src={logo} alt="logo" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href='/'><span className="navItems">Home</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/jobs'><span className="navItems">Jobs</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/about'><span className="navItems">About</span></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;