import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import MainContent from "../components/MainContent";

const securityPrivacy = () => {
  return (
    <div className="container my-5">
        <div>
            <MainContent />
        </div>
      <h1 className="fw-bold text-start" style={{ color: "#352E5B" }}>
        Security / Privacy <br />
        <span className="fs-6 text-muted" style={{ fontSize: "5px"}}>Customer support /  Security and Privacy</span>
      </h1>
<hr />
      <div className="text-start" style={{ color: "#352E5B" }}>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li>→  Is my account information secure?</li>
          <li>→ What happens if my account is compromised?</li>
          <li>→ Do you share my personal data with third parties?</li>
        </ul>
      </div>

      <div className=" text-start" style={{ color: "#352E5B" }}>
        <h2 className="fw-bold" style={{ color: "#352E5B" }}>Is my account information secure?</h2>
        <p>Absolutely. We use advanced encryption, secure storage systems, and two-factor authentication (2FA) to protect your data.</p>
      </div>
    
    <div className="mt-5 text-start" style={{ color: "#352E5B" }}>
        <h2 className="fw-bold" style={{ color: "#352E5B" }}>What happens if my account is compromised?</h2>
        <p>Contact support immediately to secure your account and investigate unauthorized access.</p>
    </div>
    <div className="mt-5 text-start" style={{ color: "#352E5B" }}>
        <h2 className="fw-bold">Do you share my personal data with third parties?</h2>
        <p>No, we strictly adhere to our privacy policy and do not share user data without consent.</p>
    </div>
    <hr />
      {/* Contact Us */}
      <div style={{ color: "#352E5B", marginTop: "30px" }} className="animate__animated animate__fadeInUp">
        <p>
          Didn't find an answer to your question?{" "}
          <button className="btn" style={{ backgroundColor: "#352E5B", color: "white" }}>
            Contact Us
          </button>
        </p>
      </div>
      <div className="mt-3">
        <Link to="/support" className="text-decoration-none">← Back to Support</Link>
      </div>
    </div>
  );
};

export default securityPrivacy;