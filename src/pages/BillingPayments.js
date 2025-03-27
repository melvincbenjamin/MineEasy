import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

const BillingPayments = () => {
  return (
    <div className="container my-5">
        <div>
            <Sidebar />
        </div>
      <h1 className="fw-bold text-center" style={{ color: "#352E5B" }}>
        Billing / Payments <br />
        <span className="fs-6 text-muted" style={{ fontSize: "5px"}}>Customer support / Billing and Payments</span>
      </h1>
<hr />
      <div className="text-start" style={{ color: "#352E5B" }}>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li>→ What payment methods do you accept?</li>
          <li>→ How do I upgrade or downgrade my mining plan?</li>
          <li>→ How do I withdraw my earnings?</li>
        </ul>
      </div>

      <div className=" text-start" style={{ color: "#352E5B" }}>
        <h2 className="fw-bold" style={{ color: "#352E5B" }}>What payment methods do you accept?</h2>
        <p>We accept a variety of payment methods, including credit/debit cards, bank transfers, and popular cryptocurrencies.</p>
      </div>
    
    <div className="mt-5 text-start" style={{ color: "#352E5B" }}>
        <h2 className="fw-bold" style={{ color: "#352E5B" }}>How do I upgrade or downgrade my mining plan?</h2>
        <p>Go to the “Plans & Pricing” section, select your desired plan, and confirm the change. The new plan will take effect immediately.</p>
    </div>
    <div className="mt-5 text-start" style={{ color: "#352E5B" }}>
        <h2 className="fw-bold">How do I withdraw my earnings?</h2>
        <p>Visit the dashboard, click “Withdraw,” choose your payment method, and follow the prompts to complete the transaction.</p>
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
