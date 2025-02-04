// components/WhyChooseUs.js
import React from "react";
import paymentIcon from '../assets/images/paymentIcon.png';
import securityIcon from '../assets/images/securityIcon.png';
import coverageIcon from '../assets/images/coverageIcon.png';
import complianceIcon from '../assets/images/complianceIcon.png';
import tradingIcon from '../assets/images/tradingIcon.png';
import commissionIcon from '../assets/images/commissionIcon.png';
import marginIcon from '../assets/images/crossPlatformIcon.png';
import bitcoinLogo from '../assets/images/BitcoinLogo.png';

const WhyChooseUs = () => {
  const cardStyle = {
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    padding: "1rem",
  };

  const features = [
    { icon: paymentIcon, title: "Payment Options", desc: "Flexible Payments for a Global Audience—Choose Your Method." },
    { icon: securityIcon, title: "Strong Security", desc: "Your Assets, Our Priority—Maximum Protection Guaranteed." },
    { icon: coverageIcon, title: "World Coverage", desc: "Mine Anytime, Anywhere—We’re Global, Just Like Crypto." },
    { icon: complianceIcon, title: "Legal Compliance", desc: "Trustworthy and Transparent—Fully Compliant with Industry Standards." },
    { icon: tradingIcon, title: "Cross-Platform Trading", desc: "Trade Seamlessly Across All Your Devices." },
    { icon: marginIcon, title: "Margin Trading", desc: "Amplify Your Earnings with Powerful Margin Trading Tools." },
    { icon: commissionIcon, title: "Low Commission", desc: "Keep More of Your Profits—Enjoy Low Fees and Transparent Rates." }
  ];

  return (
    <div className="container text-center">
      {/* Heading */}
      <h2 className="mb-3">Why Choose Us</h2>
      <p className="mb-5">Discover What Sets Us Apart. Your Trusted Partner in Crypto Mining.</p>

      {/* Features - Mobile View */}
      <div className="d-md-none">
        {features.map((feature, index) => (
          <div className="card mb-4" style={cardStyle} key={index}>
            <img
              src={feature.icon}
              alt={`${feature.title} Icon`}
              className="img-fluid mx-auto d-block mb-3"
              style={{ maxWidth: "50px" }}
            />
            <h4>{feature.title}</h4>
            <p>{feature.desc}</p>
          </div>
        ))}
        <img
          src={bitcoinLogo}
          alt="Bitcoin Logo"
          className="img-fluid mx-auto d-block mb-3"
          style={{ maxWidth: "200px" }}
        />
      </div>

      {/* Features - Desktop View */}
      <div className="d-none d-md-block">
        <div className="row justify-content-center">
          {/* Left Side Features */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100" style={cardStyle}>
              <img
                src={paymentIcon}
                alt="Payment Options Icon"
                className="img-fluid mx-auto mb-3"
                style={{ maxWidth: "50px" }}
              />
              <h4>Payment Options</h4>
              <p>Flexible Payments for a Global Audience—Choose Your Method.</p>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100" style={cardStyle}>
              <img
                src={securityIcon}
                alt="Strong Security Icon"
                className="img-fluid mx-auto mb-3"
                style={{ maxWidth: "50px" }}
              />
              <h4>Strong Security</h4>
              <p>Your Assets, Our Priority—Maximum Protection Guaranteed.</p>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100" style={cardStyle}>
              <img
                src={coverageIcon}
                alt="World Coverage Icon"
                className="img-fluid mx-auto mb-3"
                style={{ maxWidth: "50px" }}
              />
              <h4>World Coverage</h4>
              <p>Mine Anytime, Anywhere—We’re Global, Just Like Crypto.</p>
            </div>
          </div>
        </div>

        {/* Bitcoin Logo */}
        <div className="mb-4 d-flex justify-content-center align-items-center">
          <img
            src={bitcoinLogo}
            alt="Bitcoin Logo"
            className="img-fluid mx-auto d-block"
            style={{ maxWidth: "200px" }}
          />
        </div>

        {/* Right Side Features */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100" style={cardStyle}>
              <img
                src={complianceIcon}
                alt="Legal Compliance Icon"
                className="img-fluid mx-auto mb-3"
                style={{ maxWidth: "50px" }}
              />
              <h4>Legal Compliance</h4>
              <p>Trustworthy and Transparent—Fully Compliant with Industry Standards.</p>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100" style={cardStyle}>
              <img
                src={tradingIcon}
                alt="Cross-Platform Trading Icon"
                className="img-fluid mx-auto mb-3"
                style={{ maxWidth: "50px" }}
              />
              <h4>Cross-Platform Trading</h4>
              <p>Trade Seamlessly Across All Your Devices.</p>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100" style={cardStyle}>
              <img
                src={marginIcon}
                alt="Margin Trading Icon"
                className="img-fluid mx-auto mb-3"
                style={{ maxWidth: "50px" }}
              />
              <h4>Margin Trading</h4>
              <p>Amplify Your Earnings with Powerful Margin Trading Tools.</p>
            </div>
          </div>
        </div>

        {/* Third Row - Low Commission Feature */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100" style={cardStyle}>
              <img
                src={commissionIcon}
                alt="Commission Icon"
                className="img-fluid mx-auto mb-3"
                style={{ maxWidth: "50px" }}
              />
              <h4>Low Commission</h4>
              <p>Keep More of Your Profits—Enjoy Low Fees and Transparent Rates.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
