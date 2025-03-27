import React from 'react';

const WalletPopUp = ({ withdrawAmount, withdrawFee, show, onClose, onConfirm, setWithdrawAmount }) => {
  if (!show) return null;

  return (
    <div className="modal d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content p-3">
          {/* Header with Close Button */}
          <div className="modal-header d-flex justify-content-between align-items-center">
            <h5 className="modal-title">Withdraw</h5>
            <button 
              type="button" 
              className="btn btn-sm text-white " 
              style={{ background: '#FF0202' }} 
              onClick={onClose}
            >
              Close
            </button>
          </div>

          {/* Body */}
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

          {/* Footer with Buttons */}
          <div className="modal-footer d-flex justify-content-end">
            <button 
              type="button" 
              className="btn text-white me-2" 
              style={{ background: '#888686' }} 
              onClick={onClose}
            >
              Close
            </button>
            <button 
              type="button" 
              className="btn text-white" 
              style={{ background: '#7D67FF' }} 
              onClick={onConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPopUp;
