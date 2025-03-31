import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "animate.css";
import { Link } from "react-router-dom"; // Corrected usage of Link
import MainContent from "../components/MainContent";

// Importing icon images
import accountIcon from "../assets/images/LoginIcon.png";
import miningIcon from "../assets/images/MiningIcon.png";
import billingIcon from "../assets/images/billingIcon.png";
import technicalIcon from "../assets/images/TechnicalIcon.png";
import securityIcon from "../assets/images/SecurityIcon2.png";

const CustomerSupport = () => {
  const supportItems = [
    { title: "Account / Login Issues", icon: accountIcon, link: "/login-issues" },
    { title: "Mining / Trading Setup", icon: miningIcon, link: "/mining-setup" },
    { title: "Billing / Payments", icon: billingIcon, link: "/billing-payments" },
    { title: "Technical Problems", icon: technicalIcon, link: "/technical-problems" },
    { title: "Security and Privacy", icon: securityIcon, link: "/security-privacy" },
  ];

  return (
    <div className="container my-5 animate__animated animate__fadeIn">
      <MainContent />

      {/* Search Box */}
      <div className="text-center my-3 animate__animated animate__fadeInDown">
        <input
          type="text"
          className="form-control d-inline-block w-50"
          placeholder="Search for help..."
        />
        <button className="btn btn-primary ms-2">Search</button>
      </div>

      {/* Title */}
      <div style={{ color: "#352E5B" }}>
        <h2 className="text-center fw-bold animate__animated animate__fadeInDown">How Can We Help?</h2>
        <p className="text-center text-muted animate__animated animate__fadeInUp">
          Find answers, get help or contact our support team.
        </p>
      </div>

      {/* Support Cards */}
      <div className="row text-center g-3 my-4">
        {supportItems.map((item, index) => (
          <div
            key={index}
            className="col-md-4 col-sm-6 animate__animated animate__fadeInUp"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <Link to={item.link} className="text-decoration-none"> {/* Fixed Link usage */}
              <div
                className="card p-3 text-white rounded shadow d-flex flex-column align-items-center"
                style={{ backgroundColor: "#352E5B" }}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="img-fluid my-2"
                  style={{ height: "50px", width: "50px" }}
                />
                <p className="mt-2">{item.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Popular Questions */}
      <h4 className="fw-bold mt-5 animate__animated animate__fadeInLeft" style={{ color: "#352E5B" }}>
        Most Popular Questions
      </h4>
      <hr />
      <div className="text-start" style={{ color: "#352E5B" }}>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li>→ What is cryptocurrency mining?</li>
          <li>→ Do I need special hardware to start mining?</li>
          <li>→ Is crypto mining legal?</li>
        </ul>
      </div>

      {/* FAQs Accordion */}
      <div className="accordion text-start" id="faqAccordion" style={{ color: "#352E5B" }}>
        {[
          { question: "What is cryptocurrency mining?", answer: "Cryptocurrency mining is the process of validating transactions on a blockchain network and earning crypto rewards in return." },
          { question: "Do I need special hardware to start mining?", answer: "Not necessarily! With our platform, you can start cloud mining without hardware. If you have your own devices, you can connect them to our mining pool." },
          { question: "Is crypto mining legal?", answer: "Yes, crypto mining is legal in most countries. However, regulations vary, so we recommend checking your local laws." },
        ].map((item, index) => (
          <div className="accordion-item animate__animated animate__fadeInUp" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="true"
                aria-controls={`collapse${index}`}
              >
                {item.question}
              </button>
            </h2>
            <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#faqAccordion">
              <div className="accordion-body">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Us */}
      <div style={{ color: "#352E5B", marginTop: "20px" }} className="animate__animated animate__fadeInUp">
        <p>
          Didn't find an answer to your question?{" "}
          <button className="btn" style={{ backgroundColor: "#352E5B", color: "white" }}>
            Contact Us
          </button>
        </p>
      </div>
    </div>
  );
};

export default CustomerSupport;
