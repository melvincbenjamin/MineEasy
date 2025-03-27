import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PurchaseViewAll = ({ show, handleClose }) => {
  return (
    <div className='box-shadow: 0px 4px 23px 0px #0E142A40;
' style={{
      
    }}>
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton style={{ backgroundColor: "#ffffff", color: "#3C3C3C", marginLeft: "25px" }}>
        <Modal.Title>Agreement</Modal.Title>
      </Modal.Header>
      <div style={{
        color: "#A5A2B8"
      }}>
        
      </div>

      <Modal.Body style={{ maxHeight: "80vh", overflowY: "auto", backgroundColor: "#ffffff", color: "#3C3C3C" }}>
        <h4 style={{ marginLeft: "25px"}}>MineEase</h4>
        <ol>
          <li><strong>Purchase Instructions</strong>: The mining contract becomes effective immediately after the payment is confirmed. All purchases are final and non-refundable unless otherwise required by applicable law or specific offer.</li>
          <li><strong>Calculate the Output</strong>: For the calculation of mining revenue, please refer to the planning contract.</li>
          <li><strong>Equipment Maintenance</strong>: After the start of the contract, the platform (MineEase) will carry out daily maintenance of the equipment. The contract price includes the maintenance fee, and the platform (MineEase) will not charge additional maintenance fees.</li>
          <li><strong>Output Settlement</strong>: After the contract starts, mining will start automatically, and the system will settle the income for you every day. You can withdraw your income at any time, and the minimum withdrawal amount is 0.001 BTC.</li>
          <li><strong>Termination of Contract</strong>: Automatically terminated upon expiration. Early termination is non-refundable. Thank you for your understanding.</li>
          <li><strong>Risk Warning</strong>: 
            <ul>
              <li><strong>Policy Risk</strong>: Due to the formulation or modification of laws, regulations, and normative documents for digital assets in various countries, digital asset transactions may be suspended or banned at any time. You must understand and agree that due to the formulation or modification of national laws, regulations, and regulatory documents, the transaction of digital assets may be suspended or prohibited, and all economic losses caused by this will be borne by you.</li>
              <li><strong>Force Majeure Risk</strong>: The platform is responsible for information network equipment maintenance, information network connection failures, computer, communication, or other system failures, power failures, hacker attacks, weather reasons, accidents, strikes, labor disputes, riots, uprisings, lack of productivity or means of production, fires, floods, storms, explosions, wars, reasons of banks or other partners, digital asset market collapse, government actions, orders from judicial or administrative agencies, or other events beyond the control of this platform. The platform does not assume any responsibility for the failure or delay of service caused by these factors, as well as your losses.</li>
            </ul>
          </li>
        </ol>
        <p>The platform reserves the right of final interpretation of the terms of this contract.</p>
      </Modal.Body>

      <Modal.Footer style={{ backgroundColor: "#0E2E45" }}>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
};

export default PurchaseViewAll;
