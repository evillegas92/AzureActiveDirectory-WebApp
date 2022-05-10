import React, { useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from './auth/SignInButton';
import { SignOutButton } from './auth/SignOutButton';
import './NavMenu.css';

export const NavMenu = (props) => {

  const { collapsed, setCollapsed } = useState(true);
  const isAuthenticated = useIsAuthenticated();

  const toggleNavbar = () => {
    setCollapsed(!this.state.collapsed);
  }

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
        <Container>
          <NavbarBrand tag={Link} to="/">WebApp</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
              </NavItem>
              { isAuthenticated ? <SignOutButton /> : <SignInButton />}
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
