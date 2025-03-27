import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TransactionLog from "../components/TransactionLog";
import MiningContracts from '../components/MiningContract';

function MiningDevice() {
  return (
    <div className="container py-4" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Dashboard Header */}
      <div className="d-flex justify-content-between align-items-center mb-4 p-3 bg-white shadow-sm rounded">
        <div>
          <h3 className="fw-bold text-start mb-1">Dashboard</h3>
          <p className="mb-0 text-start" style={{ fontSize: '14px', color: "#3C3C3C", fontFamily: "poppins" }}>
            <span style={{ color: "#BE0104"}}>Your selected mining contract is activated automatically once your payment is confirmed. </span>
            <br /> The best way to get rich is investing on Bitcoin miner , your main money is back soon and then you get profit everyday Active your miners today and Multiply your money. <br /> <span style={{ color: "#BE0104"}}> For example: if you activate CLOUD MINING - NEWBIE miner with 500 USD, after 30 days you can withdraw 1.0244BTC (~$5055). </span>
          </p>
          <div className="text-start mt-5">
          <p className="mb-3">You can have the fastest bitcoin miner in 5 minutes:</p>
      <ol text-left>
        <li>
          Choose one of the below miners.
        </li>
        <li>
          Click on <strong>"Buy Now"</strong> button and pay the miner price.
        </li>
        <li>
          Your miner is launched and adds bitcoin to your balance every second (until 1 year).
        </li>
        <li>
          Your bitcoin increases every minute and you can withdraw it or buy a new bigger miner.
        </li>
      </ol>
    </div>
        </div>
      </div>

      {/* Mining Contracts */}
      <div>
        <MiningContracts />
      </div>
          <div>
                <TransactionLog />
            </div>
        </div>
  );
}

export default MiningDevice;
