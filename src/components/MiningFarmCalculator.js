import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const MiningFarmCalculator = () => {
  const [hashRate, setHashRate] = useState(0);
  const [powerConsumption, setPowerConsumption] = useState(0);
  const [electricityCost, setElectricityCost] = useState(0);
  const [cryptoPrice, setCryptoPrice] = useState(0);
  const [result, setResult] = useState(null);

  const calculateValue = () => {
    const revenue = (hashRate * cryptoPrice) / 1000;
    const cost = (powerConsumption * electricityCost * 24) / 1000;
    const profit = revenue - cost;
    setResult(profit.toFixed(2));
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <p className="h4">Calculator</p>
        <h2>Calculate the Value of Your Mining Farm Right Now.</h2>
      </div>
      
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Hash Rate (MH/s)</label>
          <input 
            type="number" 
            className="form-control" 
            value={hashRate} 
            onChange={(e) => setHashRate(e.target.value)} 
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Power Consumption (W)</label>
          <input 
            type="number" 
            className="form-control" 
            value={powerConsumption} 
            onChange={(e) => setPowerConsumption(e.target.value)} 
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Electricity Cost ($/kWh)</label>
          <input 
            type="number" 
            step="0.01"
            className="form-control" 
            value={electricityCost} 
            onChange={(e) => setElectricityCost(e.target.value)} 
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Cryptocurrency Price ($/MH)</label>
          <input 
            type="number" 
            step="0.01"
            className="form-control" 
            value={cryptoPrice} 
            onChange={(e) => setCryptoPrice(e.target.value)} 
          />
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={calculateValue}>Calculate</button>
      </div>

      {result !== null && (
        <div className="alert alert-info text-center mt-4">
          <h4>Your Estimated Daily Profit: ${result}</h4>
        </div>
      )}
    </div>
  );
};

export default MiningFarmCalculator;
