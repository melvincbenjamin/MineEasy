import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import MainContent from "../components/MainContent";

const BillingPayments = () => {
  return (
    <div className="container my-5">
        <div>
            <MainContent />
        </div>
      <h1 className="fw-bold text-start" style={{ color: "#352E5B" }}>
        Technical / Problems <br />
        <span className="fs-6 text-muted" style={{ fontSize: "5px"}}>Customer support /  Technical Problems</span>
      </h1>
<hr />
      <div className="text-start" style={{ color: "#352E5B" }}>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li>→ What should I do if my mining stops unexpectedly?</li>
          <li>→ Why is my hash rate lower than expected?</li>
          <li>→ Can I use the platform on mobile devices?</li>
        </ul>
      </div>

      <div className=" text-start" style={{ color: "#352E5B" }}>
        <h2 className="fw-bold" style={{ color: "#352E5B" }}>What should I do if my mining stops unexpectedly?</h2>
        <p>Ensure your device is connected and operational. Check the system status on your dashboard or contact support if the issue persists.</p>
      </div>
    
    <div className="mt-5 text-start" style={{ color: "#352E5B" }}>
        <h2 className="fw-bold" style={{ color: "#352E5B" }}>Why is my hash rate lower than expected?</h2>
        <p>Hash rate fluctuations are normal. Check your hardware performance and network stability for potential issues.</p>
    </div>
    <div className="mt-5 text-start" style={{ color: "#352E5B" }}>
        <h2 className="fw-bold">Can I use the platform on mobile devices?</h2>
        <p>Yes, our platform is fully optimized for mobile use, or you can download our dedicated app.</p>
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

export default BillingPayments;