import React from "react";
import { Modal, Button } from "react-bootstrap";
import payNow from "../assets/images/payNow.png"; // Ensure you have the logo in assets

const PayNowPopup = ({ show, onHide, amount, selectedGateway }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Body className="text-center">
        {/* payNow logo and heading */}
        <div className="d-flex align-items-center mb-3">
          <img src={payNow} alt="Tether" width="50" height="50" className="justify-content-start" />
          <h5 className="mb-0 ms-auto">Payment Preview</h5>
        </div>

        {/* Payment details */}
        <table className="table text-start">
          <tbody>
            <tr>
              <td><strong>Amount:</strong></td>
              <td className="text-end">{amount} USD</td>
            </tr>
            <tr>
              <td><strong>Charge:</strong></td>
              <td className="text-end">0 USD</td>
            </tr>
            <tr>
              <td><strong>Payable:</strong></td>
              <td className="text-end">{amount} USD</td>
            </tr>
            <tr>
              <td><strong>Conversion Rate:</strong></td>
              <td className="text-end">1 USD = 1 USD</td>
            </tr>
            <tr>
              <td><strong>In USD:</strong></td>
              <td className="text-end">{amount}</td>
            </tr>
          </tbody>
        </table>

        {/* Gateway selection and note */}
        <p className="text-muted">
          Conversion with <strong>{selectedGateway}</strong> and final value will show on the next step.
        </p>

        {/* Pay Now button */}
        <Button variant="warning" className="w-100 fw-bold" onClick={onHide}>
          Pay Now
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default PayNowPopup;
