import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../assets/images/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

function NavList() {
  const [dropdownState, setDropdownState] = useState({ home: false, pages: false });
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [expanded, setExpanded] = useState(false); // Track Navbar state

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (key) => {
    if (!isSmallScreen) {
      setDropdownState((prevState) => ({ ...prevState, [key]: true }));
    }
  };

  const handleMouseLeave = (key) => {
    if (!isSmallScreen) {
      setDropdownState((prevState) => ({ ...prevState, [key]: false }));
    }
  };

  const handleToggleClick = (key) => {
    if (isSmallScreen) {
      setDropdownState((prevState) => ({ ...prevState, [key]: !prevState[key] }));
    }
  };

  const closeNavbar = () => setExpanded(false); // Close Navbar on click

  return (
    <Navbar expand="lg" className="bg-white" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={closeNavbar}>
          <img src={Logo} alt="Logo" height="40" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="animate__animated animate__fadeInDown"
        >
          <Nav className="ms-auto flex-column flex-md-row align-items-start align-items-md-center">
            <NavDropdown
              title="Home"
              id="home-nav-dropdown"
              show={dropdownState.home}
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={() => handleMouseLeave("home")}
              onClick={() => handleToggleClick("home")}
              className="animate__animated animate__fadeIn"
            >
              <NavDropdown.Item as={Link} to="/default" onClick={closeNavbar}>Default</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/wallet/dashboard" onClick={closeNavbar}>Wallet/Dashboard</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mining" onClick={closeNavbar}>Mining</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Pages"
              id="pages-nav-dropdown"
              show={dropdownState.pages}
              onMouseEnter={() => handleMouseEnter("pages")}
              onMouseLeave={() => handleMouseLeave("pages")}
              onClick={() => handleToggleClick("pages")}
              className="animate__animated animate__fadeIn"
            >
              <NavDropdown.Item as={Link} to="/about-section" onClick={closeNavbar}>About Section</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/service" onClick={closeNavbar}>Service</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog" onClick={closeNavbar}>Blog</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/pricing" onClick={closeNavbar}>Pricing</Nav.Link>
            <Nav.Link as={NavLink} to="/dashboard" onClick={closeNavbar}>Dashboard</Nav.Link>
            <Nav.Link as={NavLink} to="/about-us" onClick={closeNavbar}>About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/contact-us" onClick={closeNavbar}>Contact Us</Nav.Link>
          </Nav>

          {/* Sign In and Sign Up */}
          <Nav className="ms-auto d-flex gap-2 mt-3 mt-md-0">
            <Nav.Link
              as={NavLink}
              to="/signin"
              onClick={closeNavbar}
              style={{
                backgroundColor: "yellow",
                color: "black",
                padding: "8px 16px",
                borderRadius: "4px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Sign In
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/signup"
              onClick={closeNavbar}
              style={{
                backgroundColor: "white",
                color: "orange",
                border: "1px solid orange",
                padding: "6px 16px",
                borderRadius: "4px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavList;
