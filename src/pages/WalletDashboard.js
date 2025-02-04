import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Sidebar from '../components/Sidebar';


const Wallet = () => {
  const [balance, setBalance] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const updateBalance = () => {
    const amount = parseFloat(inputValue);
    if (!isNaN(amount)) {
      setBalance(balance + amount);
      setInputValue('');
    } else {
      alert('Please enter a valid number');
    }
  };

  return (
    <div>
    <div>
      <Sidebar />
    </div>
    <div className="container position-relative">
        <div className="position-absolute top-0 end-1">
        <h6>USDT Wallet</h6>
      </div>
      <div className="position-absolute top-0 end-0">
        <h6>Balance: ${balance.toFixed(2)}</h6>
      </div>
      <div className="d-flex flex-column align-items-center pt-4">
        <input
          type="number"
          className="form-control mb-3 w-100"
          placeholder="Enter amount"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-warning w-100 mb-5"
          onClick={updateBalance}
        >
          Update Wallet
        </button>
      </div>
    </div>
    </div>
  );
};

export default Wallet;
