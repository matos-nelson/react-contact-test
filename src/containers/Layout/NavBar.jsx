import logo from "assets/img/brand/logo.svg";
import sygnet from "assets/img/brand/sygnet.svg";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { Badge, Dropdown, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    document.body.classList.add("header-fixed");
    const username = "Nelson Matos";
    setUsername(username);
  }, []);

  const handleMobileSidebarToggle = () => {
    document.body.classList.toggle("sidebar-show");
  };

  const handleSidebarToggle = () => {
    document.body.classList.toggle("sidebar-lg-show");
  };

  return (
    <header className="app-header navbar">
      <Navbar.Toggle
        name="sidebar-toggle-mobile"
        className="d-lg-none"
        data-sidebar-toggler="true"
        onClick={handleMobileSidebarToggle}
      />
      <Navbar.Brand>
        <img
          className="navbar-brand-full"
          src={logo}
          width="89"
          height="25"
          alt="CoreUI Logo"
        />
        <img
          className="navbar-brand-minimized"
          src={sygnet}
          width="30"
          height="30"
          alt="CoreUI Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        name="sidebar-toggle"
        className="d-md-down-none"
        data-sidebar-toggler="true"
        onClick={handleSidebarToggle}
      />

      <Nav bsPrefix="d-md-down-none navbar-nav">
        <Nav.Item className="px-3">
          <NavLink to="/dashboard" className="nav-link">
            Dashboard
          </NavLink>
        </Nav.Item>
      </Nav>
      <Nav bsPrefix="ml-auto navbar-nav">
        <Nav.Item className="d-md-down-none">
          <NavLink to="#" className="nav-link">
            <i className="fas fa-bell" />
            <Badge pill variant="danger">
              5
            </Badge>
          </NavLink>
        </Nav.Item>
        <Dropdown navbar direction="down">
          <Dropdown.Toggle variant="link" bsPrefix="dropdown" className="p-2">
            <Avatar round color="#20a8d8" size="35px" name={username} />
          </Dropdown.Toggle>
        </Dropdown>
      </Nav>
    </header>
  );
};

export default NavBar;
