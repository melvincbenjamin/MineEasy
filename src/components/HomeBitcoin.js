import React from "react";
import key from "../assets/images/key.png";
import hidden from "../assets/images/No hidden.png";
import Licence from "../assets/images/Licence-Bourg.png";
import instantmining from "../assets/images/instantmining.png";
import closeuphands from "../assets/images/close-up-hands.png";

const HomeBitcoin = () => {
  return (
    <div className="container text-center my-5">
      <div className="row">
        {/* Licensed Mining */}
        <div className="col-12 col-md-3 mb-4 mb-md-0">
          <div
            className="card d-flex flex-column align-items-center p-3 h-100"
            style={{
              backgroundColor: "#FFF1E0",
              maxWidth: "250px",
              margin: "0 auto",
            }}
          >
            <img
              src={Licence}
              alt="Licensed Mining Icon"
              className="img-fluid mb-3 w-25 w-md-50"
            />
            <h4>Licensed Mining</h4>
            <p className="text-center">
              Empowering Crypto Mining with Verified Expertise and Compliance.
            </p>
          </div>
        </div>

        {/* No Hidden Fees */}
        <div className="col-12 col-md-3 mb-4 mb-md-0">
          <div
            className="card d-flex flex-column align-items-center p-3 h-100"
            style={{
              backgroundColor: "#FFF1E0",
              maxWidth: "250px",
              margin: "0 auto",
            }}
          >
            <img
              src={hidden}
              alt="No Hidden Fees Icon"
              className="img-fluid mb-3 w-25 w-md-50"
            />
            <h4>No Hidden Fees</h4>
            <p className="text-center">
              Transparent Costs, Maximum Gains—No Hidden Fees.
            </p>
          </div>
        </div>

        {/* Instant Mining */}
        <div className="col-12 col-md-3 mb-4 mb-md-0">
          <div
            className="card d-flex flex-column align-items-center p-3 h-100"
            style={{
              backgroundColor: "#FFF1E0",
              maxWidth: "250px",
              margin: "0 auto",
            }}
          >
            <img
              src={instantmining}
              alt="Instant Mining Icon"
              className="img-fluid mb-3 w-25 w-md-50"
            />
            <h4>Instant Mining</h4>
            <p className="text-center">
              Start Mining in Seconds—Instant Setup, Instant Rewards.
            </p>
          </div>
        </div>

        {/* Secure Trusted */}
        <div className="col-12 col-md-3 mb-4 mb-md-0">
          <div
            className="card d-flex flex-column align-items-center p-3 h-100"
            style={{
              backgroundColor: "#FFF1E0",
              maxWidth: "250px",
              margin: "0 auto",
            }}
          >
            <img
              src={key}
              alt="Secure Trusted Icon"
              className="img-fluid mb-3 w-25 w-md-50"
            />
            <h4>Secure Trusted</h4>
            <p className="text-center">
              Rock-Solid Security, Trusted by Miners Worldwide.
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-5" style={{ backgroundColor: "#F8F8F8", marginTop: '20px'}}>
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img
            src={closeuphands}
            alt="Bitcoin Illustration"
            className="img-fluid"
            style={{
              borderRadius: "20px",
            }}
          />
        </div>
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-start mb-5">
          <h2>Bitcoin is an innovative & a new kind of money.</h2>
          <p>
            Embrace the future of finance with Bitcoin, where traditional
            boundaries are redefined, and financial control is handed back to
            you.
          </p>
          <div>
            <button className="btn btn-warning mt-4">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBitcoin;
