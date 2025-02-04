import React from "react";
import kim from "../assets/images/Kim Seon Ho - Link 1 (1).png"; // Adjust the path accordingly

const MainContent = () => {
  return (
    <div className="col-12 col-md-7 p-3 position-relative">
      {/* Top Section with Full-Width Background */}
      <div
        className="position-absolute top-0 start-0 w-100vw"
        style={{
          backgroundColor: "#F8F7FF",
          height: "80px", // Adjust this height as needed
          zIndex: "-1",
        }}
      ></div>

      {/* Content inside the background */}
      <div
        className="ml-4 d-flex justify-content-between align-items-center mb-3 position-relative mb-5"
        style={{ marginLeft: "15px" }}
      >
        <h3 className="fs-sm-sm" style={{ marginLeft: "30px" }}>
          Dashboard
        </h3>
        <img
          src={kim}
          alt="Profile"
          className="rounded-circle"
          style={{ width: "40px", height: "40px" }}
        />
      </div>
    </div>
  );
};

export default MainContent;
