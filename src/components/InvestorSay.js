// components/InvestorSay.js
import React from "react";
import john from '../assets/images/john.png';

const InvestorSay = () => {
  return (
    <div 
      className="mt-5 text-center"
      style={{ 
        backgroundColor: "#F8F8F8", 
        width: "100%",   // Ensure full width
        height: "100%",
        paddingLeft: "0", 
        paddingRight: "0",
        paddingTop: "10px", 
        paddingBottom: "40px"
      }}
    >
      <h2 style={{
        marginTop: '50px',
      }}>What Investors Say</h2>
      <p>What Our Users Are Saying. Join Thousands of Satisfied Users. Trusted by the Crypto Community.</p>
      <div className="card mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-body">
          <img
            src={john}
            alt="John Doe"
            className="rounded-circle mb-3"
          />
          <blockquote className="blockquote">
            <p className="mb-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </blockquote>
          <footer className="blockquote-footer">John Doe</footer>
        </div>
      </div>
    </div>
  );
};

export default InvestorSay;
