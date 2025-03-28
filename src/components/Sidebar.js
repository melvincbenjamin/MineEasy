import React, { useState } from "react";
import { FaTachometerAlt, FaWallet, FaTools, FaCoins, FaCogs, FaHeadset, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/images/Logo.png";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="d-flex">
      {/* Sidebar Toggle Button */}
      <button
        className={`toggle-button btn position-fixed ${isOpen ? "inside" : "outside"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="d-flex flex-column p-3 vh-100 bg-light">
          {/* Logo */}
          <div className="d-flex align-items-center mb-4">
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <img src={Logo} alt="Logo" height="40" />
              <h4 className="ms-2 mb-0">MineEase</h4>
            </Link>
          </div>

          {/* Navigation */}
          <ul className="nav flex-column">
            <li className="nav-item mb-3">
              <Link to="/dashboard" className="nav-link text-dark d-flex align-items-center">
                <FaTachometerAlt className="me-2" />
                <span className="nav-text">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/wallet/dashboard" className="nav-link text-dark d-flex align-items-center">
                <FaWallet className="me-2" />
                <span className="nav-text">Wallet</span>
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/miningdevice" className="nav-link text-dark d-flex align-items-center">
                <FaTools className="me-2" />
                <span className="nav-text">Mining Device</span>
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/withdraw" className="nav-link text-dark d-flex align-items-center">
                <FaCoins className="me-2" />
                <span className="nav-text">Withdraw</span>
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/settings" className="nav-link text-dark d-flex align-items-center">
                <FaCogs className="me-2" />
                <span className="nav-text">Settings</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/support" className="nav-link text-dark d-flex align-items-center">
                <FaHeadset className="me-2" />
                <span className="nav-text">Customer Support</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Sidebar Styles */}
      <style>{`
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: 250px;
          height: 100%;
          transition: transform 0.3s ease-in-out;
          z-index: 1000;
        }

        .closed {
          transform: translateX(-100%);
        }

        .open {
          transform: translateX(0);
        }

        .toggle-button {
          top: 10px;
          left: 10px;
          z-index: 1100;
          transition: left 0.3s ease-in-out;
        }

        .inside {
          position: absolute;
          left: 210px;
        }

        @media (min-width: 992px) {
          .sidebar {
            transform: translateX(0);
            position: relative;
          }

          .toggle-button {
            display: none;
          }

          .nav-text {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
