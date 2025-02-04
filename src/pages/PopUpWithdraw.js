import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Withdraw = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState(0);
  const minWithdrawLimit = 50;
  const maxWithdrawLimit = 500;
  const withdrawFee = 30;
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleWithdraw = () => {
    if (!walletAddress) {
      alert('Please update your wallet address.');
      return;
    }
    if (withdrawAmount < minWithdrawLimit || withdrawAmount > maxWithdrawLimit) {
      alert(`Withdraw amount must be between ${minWithdrawLimit} USDT and ${maxWithdrawLimit} USDT.`);
      return;
    }
    if (withdrawAmount + withdrawFee > balance) {
      alert('Insufficient balance.');
      return;
    }

    setBalance(balance - withdrawAmount - withdrawFee);
    alert(`Withdrawal of ${withdrawAmount} USDT successful!`);
    setShowPopup(false);
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 text-center">
        <h2 className="mb-4">Dashboard</h2>

        <div className="card mx-auto" style={{ maxWidth: '400px' }}>
          <div className="card-header bg-light">
            <strong>USDT Wallet</strong>
          </div>
          <div className="card-body">
            <p>
              <strong>Address:</strong>{' '}
              {walletAddress ? walletAddress : <span className="text-danger">Please Update Your Wallet Address</span>}
            </p>

            <input 
              type="text" 
              className="form-control mb-3" 
              placeholder="Enter Wallet Address" 
              value={walletAddress} 
              onChange={(e) => setWalletAddress(e.target.value)} 
            />

            <p><strong>Balance:</strong> {balance.toFixed(8)} USDT</p>
            <p><strong>Min Withdrawal Limit:</strong> {minWithdrawLimit.toFixed(8)} USDT</p>
            <p><strong>Max Withdrawal Limit:</strong> {maxWithdrawLimit.toFixed(8)} USDT</p>
            <p><strong>Withdrawal Fee:</strong> {withdrawFee.toFixed(8)} USDT</p>

            <p className="text-danger">
              Your daily profit will be released to your account at UTC 00:23:59 for withdrawal.
            </p>

            <button 
              className="btn btn-warning w-100" 
              onClick={() => setShowPopup(true)}
            >
              Withdraw Now
            </button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Withdraw</h5>
                <button type="button" className="close" onClick={() => setShowPopup(false)}>&times;</button>
              </div>
              <div className="modal-body">
                <label className="form-label">Enter Amount:</label>
                <input 
                  type="number" 
                  className="form-control mb-3" 
                  placeholder="0.00 USDT" 
                  value={withdrawAmount} 
                  onChange={(e) => setWithdrawAmount(Number(e.target.value))} 
                />
                <p><strong>Withdrawal Fee:</strong> <span className="text-danger">{withdrawFee.toFixed(4)} USDT</span></p>
                <p><strong>Total Estimated Proceeds:</strong> {(withdrawAmount - withdrawFee > 0 ? (withdrawAmount - withdrawFee).toFixed(4) : 0)} USDT</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowPopup(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleWithdraw}>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Withdraw;
