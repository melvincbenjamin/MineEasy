import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainContent from "../components/MainContent";

const Wallet = () => {
  const [balance, setBalance] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const updateBalance = () => {
    const amount = parseFloat(inputValue);
    if (!isNaN(amount)) {
      setBalance(balance + amount);
      setInputValue("");
    } else {
      alert("Please enter a valid number");
    }
  };

  return (
    <div className="d-flex flex-column flex-md-row w-100">
      <MainContent />
      {/* Wallet Content */}
      <div className="container-fluid mt-md-5 p-3 ms-md-0" style={{ maxWidth: "100%" }}>
        <div className="d-flex justify-content-between align-items-center" style={{ paddingTop: "50px" }}>
          <h5>USDT Wallet</h5>
          <h6>Balance: ${balance.toFixed(2)}</h6>
        </div>
        <div className="d-flex flex-column pt-3">
          <input
            type="number"
            className="form-control mb-3 w-100"
            placeholder="Enter amount"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="btn btn-warning w-100" onClick={updateBalance}>
            Update Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
