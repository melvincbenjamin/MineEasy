import React from 'react';
import MainContent from '../components/MainContent';

const DepositLog = () => {
  return (
    <div className="">
      <div>
        <MainContent />
      </div>

      {/* Mining Wallets Table */}
<div className=" table-responsive">
  <table className="fs-6 table table-striped text-white table-md mt-5">
    <thead>
      <tr>
        <th style={{ backgroundColor: '#352E5B', color: 'white', fontSize: '0.7rem' }}>Transaction ID</th>
        <th style={{ backgroundColor: '#352E5B', color: 'white', fontSize: '0.7rem' }} >Gateway</th>
        <th style={{ backgroundColor: '#352E5B', color: 'white', fontSize: '0.7rem' }} >Amount</th>
        <th style={{ backgroundColor: '#352E5B', color: 'white', fontSize: '0.7rem' }} >Status</th>
        <th style={{ backgroundColor: '#352E5B', color: 'white', fontSize: '0.7rem' }} >Time</th>
      </tr>
    </thead>
    </table>
</div>

      {/* No Wallet Found Message and Button */}
      <div className="flex flex-row justify-center items-center text-center h-32 space-x-4">
        <p className="text-sm sm:text-base" style={{ color: "#352E5B"}}>No wallet found yet!</p>
        <button style={{ backgroundColor: "#352E5B"}} className="bg-[#352E5B] hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
          Deposit
        </button>
      </div>
    </div>
  );
};

export default DepositLog;
