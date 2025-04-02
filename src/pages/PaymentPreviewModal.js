import React, { useState } from "react";
import { Modal, Button, InputGroup, FormControl, Spinner } from "react-bootstrap";
import { QRCodeCanvas } from "qrcode.react";

const PaymentPreviewModal = ({ show, handleClose }) => {
  const [selectedGateway, setSelectedGateway] = useState("");
  const [amount, setAmount] = useState("");
  const [currentStep, setCurrentStep] = useState("deposit"); // Track current modal step
  const [paymentAddress] = useState("TRC20XYZ123456789");

  const gateways = ["Ethereum", "BTC", "USDT.TRC20", "USDT.PEP20", "USDT.ERC20"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep("preview"); // Show Payment Preview

    setTimeout(() => {
      setCurrentStep("loading"); // Show Loading after 4s
    }, 4000);

    setTimeout(() => {
      setCurrentStep("success"); // Show Payment Success after 8s
    }, 8000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(paymentAddress);
    alert("Copied to clipboard!");
  };

  const handleDownloadReceipt = () => {
    const receiptData = `Payment Receipt\n---------------------\nAmount: ${amount} ${selectedGateway}\nAddress: ${paymentAddress}\nStatus: Successful ✅`;
    const blob = new Blob([receiptData], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Payment_Receipt.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Deposit Modal */}
      <Modal show={show && currentStep === "deposit"} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deposit on Your USD Wallet</Modal.Title>
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
            <Button type="submit" className="w-100 text-white mt-3" style={{ backgroundColor: "#F9A826" }}>
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>

      {/* Payment Preview Modal */}
      <Modal show={currentStep === "preview"} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Payment Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>PLEASE SEND EXACTLY <strong>{amount} {selectedGateway}</strong> TO</p>
          <InputGroup className="mb-3">
            <FormControl value={paymentAddress} readOnly />
            <Button variant="outline-secondary" onClick={handleCopy}>Copy</Button>
          </InputGroup>
          <QRCodeCanvas value={paymentAddress} size={200} />
        </Modal.Body>
      </Modal>

      {/* Loading Modal */}
      <Modal show={currentStep === "loading"} centered backdrop="static">
        <Modal.Body className="text-center">
          <h5 className="fw-bold">Payment in progress...</h5>
          <p className="text-muted">PLEASE Wait</p>
          <Spinner animation="border" variant="primary" />
        </Modal.Body>
      </Modal>

      {/* Payment Successful Modal */}
      <Modal show={currentStep === "success"} centered backdrop="static">
        <Modal.Body className="text-center">
          <h5 className="fw-bold text-success">Payment Successful</h5>
          <p className="text-muted">Click the button below to return to your dashboard</p>

          {/* Payment Successful Icon with White Checkmark ✅ */}
          <div 
            className="d-flex justify-content-center align-items-center mb-3"
            style={{ 
              width: "80px", 
              height: "80px", 
              backgroundColor: "#17AF38", 
              borderRadius: "50%", 
              margin: "0 auto", 
              position: "relative"
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="50" 
              height="50" 
              fill="white" 
              viewBox="0 0 16 16"
              style={{ position: "absolute" }}
            >
              <path d="M13.485 1.929a1 1 0 0 1 1.414 1.414l-7.07 7.07a1 1 0 0 1-1.415 0l-3.535-3.535a1 1 0 0 1 1.415-1.414L7 8.586l6.485-6.657z"/>
            </svg>
          </div>

          <Button className="w-100 mt-3" variant="primary" onClick={() => window.location.href = "/dashboard"}>
            Back to Dashboard
          </Button>
          
          <Button className="w-100 mt-2" variant="outline-success" onClick={handleDownloadReceipt}>
            Download Receipt
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PaymentPreviewModal;