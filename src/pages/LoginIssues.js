import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import MainContent from "../components/MainContent";

const LoginIssues = () => {
  return (
    <div className="container my-5">
        <div>
            <MainContent />
        </div>
      <h1 className="fw-bold text-start" style={{ color: "#352E5B" }}>
        Account / Login Issues <br />
        <span className="fs-6 text-muted" style={{ fontSize: "5px"}}>Customer Support / Account and Login Issues</span>
      </h1>
<hr />
      <div className="text-start" style={{ color: "#352E5B" }}>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li>→ How do I create an account?</li>
          <li>→ I forgot my password. What should I do?</li>
          <li>→ Can I have multiple accounts?</li>
        </ul>
      </div>

      <div className=" text-start" style={{ color: "#352E5B" }}>
        <h2 className="fw-bold" style={{ color: "#352E5B" }}>How do i create an account?</h2>
        <p>Click the "Sign Up" button at the top of the page, fill out the registration form, and verify your email to get started.</p>
      </div>
    
    <div className="mt-5 text-start" style={{ color: "#352E5B" }}>
        <h2 className="fw-bold" style={{ color: "#352E5B" }}>I forgot my password. What should I do?</h2>
        <p>Click the “Forgot Password?” link on the login page, enter your registered email, and follow the instructions to reset your password.</p>
    </div>
    <div className="mt-5 text-start" style={{ color: "#352E5B" }}>
        <h2 className="fw-bold">Can I have multiple accounts?</h2>
        <p>No, our platform allows only one account per user to ensure fairness and transparency.</p>
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

export default LoginIssues;
