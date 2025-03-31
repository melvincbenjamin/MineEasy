import React from "react";
import kim from "../assets/images/Kim Seon Ho - Link 1 (1).png"; // Ensure correct path

const MainContent = () => {
  return (
    <div className="main-content">
      {/* Full-Width Background Section */}
      <div className="background-bar">
        <h3 className="dashboard-title" style={{ marginLeft: "50px"}}>Dashboard</h3>
        <img 
          src={kim}
          alt="Profile"
          className="rounded-circle profile-img"
        />
      </div>

      {/* Styles */}
      <style>{`
        .main-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .background-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 60px;
          background-color: #F8F7FF;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 15px;
          transition: left 0.3s ease-in-out, width 0.3s ease-in-out;
        }

        .dashboard-title {
          font-size: 1.1rem;
          font-weight: bold;
          margin: 0;
        }

        .profile-img {
          width: 35px;
          height: 35px;
          object-fit: cover;
        }

        /* Large screens (desktop) */
        @media (min-width: 992px) {
          .background-bar {
            left: 20%;
            width: 80%;
          }

          .dashboard-title {
            font-size: 1.25rem;
          }

          .profile-img {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default MainContent;
