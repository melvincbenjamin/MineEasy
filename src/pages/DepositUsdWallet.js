import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import PaymentPreviewModal from "./PaymentPreviewModal";

const DepositUSDWallet = ({ show, handleClose }) => {
  const [selectedGateway, setSelectedGateway] = useState("");
  const [amount, setAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [showPaymentPreview, setShowPaymentPreview] = useState(false);
  const gateways = ["Ethereum", "BTC", "USDT.TRC20", "USDT.PEP20", "USDT.ERC20"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!submitted) {
      setSubmitted(true);
    } else {
      setConfirmed(true);
      setShowPaymentPreview(true);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Deposit on Your USD Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Select Gateway</label>
              <select 
                className="form-select"
                value={selectedGateway}
                onChange={(e) => setSelectedGateway(e.target.value)}
                required
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
                  required
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
            {submitted && selectedGateway && amount && !confirmed && (
              <div className="border p-2 rounded mt-3">
                <p><strong>Selected Gateway:</strong> {selectedGateway}</p>
                <p><strong>Amount:</strong> {amount} USD</p>
              </div>
            )}
            {submitted && selectedGateway && !confirmed && (
              <p className="text-muted mt-2">
                Conversion with <strong>{selectedGateway}</strong> and final value will show on the next step.
              </p>
            )}
            <Button 
              type="submit" 
              className="w-100 text-white mt-3" 
              style={{ backgroundColor: "#F9A826" }}
            >
              {submitted && !confirmed ? "Confirm" : "Submit"}
            </Button>
          </form>
        </Modal.Body>
      </Modal>
      <PaymentPreviewModal 
        show={showPaymentPreview} 
        onHide={() => setShowPaymentPreview(false)} 
        amount={amount} 
        selectedGateway={selectedGateway} 
      />
    </>
  );
};

export default DepositUSDWallet;