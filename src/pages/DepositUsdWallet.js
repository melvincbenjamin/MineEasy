import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from '../components/Sidebar';


const DepositUSDWallet = () => {
  const [selectedGateway, setSelectedGateway] = useState("");
  const [amount, setAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const gateways = ["Ethereum", "BTC", "USDT.TRC20", "USDT.PEP20", "USDT.ERC20"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <div>
        <Sidebar />
      </div>
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: "500px", width: "100%" }}>
        <div className="card-header text-white text-center fw-bold" style={{ backgroundColor: "#3C2A58" }}>
          Deposit on Your USD Wallet
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Select Gateway</label>
              <select 
                className="form-select"
                value={selectedGateway}
                onChange={(e) => setSelectedGateway(e.target.value)}
              >
                <option value="">Select One</option>
                {gateways.map((gateway, index) => (
                  <option key={index} value={gateway}>{gateway}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Amount</label>
              <div className="input-group">
                <input 
                  type="number" 
                  className="form-control" 
                  placeholder="Enter amount" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <span className="input-group-text">USD</span>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <p className="mb-1">Limit:</p>
                <p className="mb-1">Charge:</p>
                <p className="mb-1">Payable:</p>
              </div>
              <div className="text-end">
                <p className="mb-1"><strong>0.00 USD - 1,000,000.00 USD</strong></p>
                <p className="mb-1"><strong>0 USD</strong></p>
                <p className="mb-1"><strong>{submitted ? `${amount} USD` : "0 USD"}</strong></p>
              </div>
            </div>
            {submitted && selectedGateway && amount && (
              <div className="border p-2 rounded mt-3">
                <p><strong>Selected Gateway:</strong> {selectedGateway}</p>
                <p><strong>Amount:</strong> {amount} USD</p>
              </div>
            )}
            {submitted && selectedGateway && (
              <p className="text-muted mt-2">Conversion with <strong>{selectedGateway}</strong> and final value will show on next step.</p>
            )}
            <button type="submit" className="btn w-100 text-white mt-3" style={{ backgroundColor: "#F9A826" }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DepositUSDWallet;
