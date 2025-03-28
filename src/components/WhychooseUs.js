import React from "react";
import "./WhychooseUs.css";
import paymentIcon from "../assets/images/paymentIcon.png";
import securityIcon from "../assets/images/securityIcon.png";
import coverageIcon from "../assets/images/coverageIcon.png";
import complianceIcon from "../assets/images/complianceIcon.png";
import tradingIcon from "../assets/images/tradingIcon.png";
import commissionIcon from "../assets/images/commissionIcon.png";
import marginIcon from "../assets/images/miningbg.png";
import advancedIcon from "../assets/images/Alternative.png";
import bitcoinLogo from "../assets/images/BitcoinLogo.png";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-container">
      <h2 className="why-choose-heading">Why Choose Us</h2>
      <p className="why-choose-subtext">
        Discover What Sets Us Apart. Your Trusted Partner in Crypto Mining.
      </p>

      <div className="grid-container">
        {/* First Row */}
        <FeatureCard icon={paymentIcon} title="Payment Options" desc="Flexible Payments for a Global Audience—Choose Your Method." />
        <FeatureCard icon={securityIcon} title="Strong Security" desc="Your Assets, Our Priority—Maximum Protection Guaranteed." />
        <FeatureCard icon={coverageIcon} title="World Coverage" desc="Mine Anytime, Anywhere—We're Global, Just Like Crypto." />

        {/* Second Row (Bitcoin logo in the center) */}
        <FeatureCard icon={tradingIcon} title="Cross-Platform Trading" desc="Trade Seamlessly Across All Your Devices." />
        <div className="bitcoin-container">
          <img src={bitcoinLogo} alt="Bitcoin Logo" className="bitcoin-logo" />
        </div>
        <FeatureCard icon={complianceIcon} title="Legal Compliance" desc="Trustworthy and Transparent—Fully Compliant with Industry Standards." />

        {/* Third Row */}
        <FeatureCard icon={marginIcon} title="Margin Trading" desc="Amplify Your Earnings with Powerful Margin Trading Tools." />
        <FeatureCard icon={advancedIcon} title="Advanced Reporting" desc="Stay informed with Detailed, Real-Time Analysis." />
        <FeatureCard icon={commissionIcon} title="Competitive Commissions" desc="Earn More, Pay Less—Low Fees, High Returns." />
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="feature-card">
      <img src={icon} alt={title} className="feature-icon" />
      <h4 className="card-title">{title}</h4>
      <p className="card-desc">{desc}</p>
    </div>
  );
};

export default WhyChooseUs;
