import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Footer Component
export const Footer = () => {
  return (
    <footer className="text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Member Access</h5>
            <button className="btn btn-warning mt-2">Sign in</button>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Pages</li>
              <li>Pricing</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Helpful Links</h5>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li>Mining Access</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Add margin-top auto to push this down in flex */}
      <div className="text-center mt-auto d-block d-md-none">
        <p>&copy; 2024 EasyMining. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
