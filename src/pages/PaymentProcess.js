import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const PaymentProcess = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h2 className="fw-bold">Dashboard</h2>
      {step === 1 && (
        <div className="card p-4 shadow-sm">
          <h4 className="fw-bold">Payment Preview</h4>
          <p>Please send exactly <span className="text-success">99.73681 USDT TRC20</span> to:</p>
          <div className="border p-2 mb-2">T9XJc4WmYbGZ4xFNY97QQxhsykAh</div>
          <button className="btn btn-secondary">Copy</button>
          <div className="mt-3">
            <img src="/qr-code.png" alt="QR Code" className="img-fluid" style={{ maxWidth: "150px" }} />
          </div>
          <button className="btn btn-primary mt-3" onClick={handleNext}>Proceed</button>
        </div>
      )}
      {step === 2 && (
        <div className="card p-4 shadow-sm">
          <h4 className="fw-bold">Payment in Progress...</h4>
          <p>Please wait</p>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="card p-4 shadow-sm">
          <h4 className="fw-bold">Payment Successful</h4>
          <p>Click the button below to return to your dashboard.</p>
          <div className="text-success display-4">✔</div>
          <div className="mt-3">
            <button className="btn btn-primary me-2">Back to Dashboard</button>
            <button className="btn btn-outline-primary">Download Receipt</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentProcess;