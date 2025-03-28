import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setDropdownState({ home: false, pages: false });
    setExpanded(false);
  }, [location.pathname]);

  const handleMouseEnter = (key) => {
    if (!isSmallScreen) {
      setDropdownState({ home: false, pages: false, [key]: true });
    }
  };

  const handleMouseLeave = (key, event) => {
    if (!isSmallScreen) {
      // Check if the cursor is still inside the dropdown
      if (!event.relatedTarget || !event.relatedTarget.closest(".dropdown-menu")) {
        setDropdownState({ home: false, pages: false });
      }
    }
  };

  const handleToggleClick = (key) => {
    setDropdownState((prevState) => ({ home: false, pages: false, [key]: !prevState[key] }));
  };

  return (
    <Navbar expand="lg" className="bg-white" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)} className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav" className="animate__animated animate__fadeInDown">
          <Nav className="gap-3 ms-auto flex-column flex-md-row align-items-start align-items-md-center nav-links">
            <NavDropdown
              title="Home"
              id="home-nav-dropdown"
              show={dropdownState.home}
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={(e) => handleMouseLeave("home", e)}
              onClick={() => handleToggleClick("home")}
              className="animate__animated animate__fadeIn"
            >
              <div className="dropdown-scroll" onMouseLeave={(e) => handleMouseLeave("home", e)}>
                <NavDropdown.Item as={Link} to="/default">Default</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/wallet/dashboard">Wallet/Dashboard</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/mining">Mining</NavDropdown.Item>
              </div>
            </NavDropdown>

            <NavDropdown
              title="Pages"
              id="pages-nav-dropdown"
              show={dropdownState.pages}
              onMouseEnter={() => handleMouseEnter("pages")}
              onMouseLeave={(e) => handleMouseLeave("pages", e)}
              onClick={() => handleToggleClick("pages")}
              className="animate__animated animate__fadeIn"
            >
              <div className="dropdown-scroll" onMouseLeave={(e) => handleMouseLeave("pages", e)}>
                <NavDropdown.Item as={Link} to="/about-section">About Section</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/service">Service</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blog">Blog</NavDropdown.Item>
              </div>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/pricing">Pricing</Nav.Link>
            <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={NavLink} to="/about-us">About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/contact-us">Contact Us</Nav.Link>
          </Nav>

          {/* Sign In and Sign Up */}
          <Nav className="ms-auto d-flex gap-2 mt-3 mt-md-0 auth-buttons">
            <Nav.Link as={NavLink} to="/signin" className="btn-signin">Sign In</Nav.Link>
            <Nav.Link as={NavLink} to="/signup" className="btn-signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style>{`
        .logo {
          height: 40px;
        }

        @media (min-width: 768px) {
          .logo {
            height: 60px;
          }

          .nav-links .nav-link, .nav-links .nav-dropdown {
            font-size: 1.2rem;
          }

          .auth-buttons {
            margin-left: auto;
          }
        }

        /* Scrollable Dropdown */
        .dropdown-scroll {
          max-height: 300px;
          overflow-y: auto;
        }

        .btn-signin {
          background-color: yellow;
          color: black;
          padding: 8px 16px;
          border-radius: 4px;
          font-weight: bold;
          text-align: center;
          font-size: 20px;
        }

        .btn-signup {
          background-color: white;
          color: orange;
          border: 1px solid orange;
          padding: 6px 16px;
          border-radius: 4px;
          font-weight: bold;
          text-align: center;
          font-size: 20px;
        }
      `}</style>
    </Navbar>
  );
}

export default NavList;
