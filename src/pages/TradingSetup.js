import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import MainContent from "../components/MainContent";

const TradingSetup = () => {
  return (
    <div className="container my-5">
        <div>
            <MainContent />
        </div>
      <h1 className="fw-bold text-start" style={{ color: "#352E5B" }}>
        Mining / Trading Setup <br />
        <span className="fs-6 text-muted" style={{ fontSize: "5px"}}>Customer support / Mining or Trading Setup</span>
      </h1>
<hr />
      <div className="text-start" style={{ color: "#352E5B" }}>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li>→ How do I start mining?</li>
          <li>→ What equipment do I need for mining?</li>
          <li>→ Can I mine multiple cryptocurrencies at the same time?</li>
        </ul>
      </div>

      <div className=" text-start" style={{ color: "#352E5B" }}>
        <h2 className="fw-bold" style={{ color: "#352E5B" }}>How do I start mining?</h2>
        <p>After logging in, go to the mining dashboard, select your preferred cryptocurrency and mining plan, and click “Start Mining.</p>
      </div>
    
    <div className="mt-5 text-start" style={{ color: "#352E5B" }}>
        <h2 className="fw-bold" style={{ color: "#352E5B" }}>What equipment do I need for mining?</h2>
        <p>If you’re using cloud mining, no hardware is required. For personal hardware, connect your devices to our mining pool.</p>
    </div>
    <div className="mt-5 text-start" style={{ color: "#352E5B" }}>
        <h2 className="fw-bold">Can I mine multiple cryptocurrencies at the same time?</h2>
        <p>Yes, our platform supports multi-currency mining. Check the dashboard for supported cryptocurrencies.</p>
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

export default TradingSetup;
