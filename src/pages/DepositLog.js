import React from 'react';
import MainContent from '../components/MainContent';

const DepositLog = () => {
  return (
    <div className="">
      <div>
        <MainContent />
      </div>

      {/* Mining Wallets Table */}
<div className="mt-5 table-responsive">
  <table className="table table-striped text-white table-md">
    <thead>
      <tr>
        <th style={{ backgroundColor: '#352E5B', color: 'white', fontSize: '1rem' }}>Transaction ID</th>
        <th style={{ backgroundColor: '#352E5B', color: 'white', fontSize: '1rem' }} >Gateway</th>
        <th style={{ backgroundColor: '#352E5B', color: 'white', fontSize: '1rem' }} >Amount</th>
        <th style={{ backgroundColor: '#352E5B', color: 'white', fontSize: '1rem' }} >Status</th>
        <th style={{ backgroundColor: '#352E5B', color: 'white', fontSize: '1rem' }} >Time</th>
      </tr>
    </thead>
    </table>
</div>

      {/* No Wallet Found Message and Button */}
      <div className="flex flex-col sm:flex-row justify-center items-center text-center h-32 mt-6">
        <p className="text-gray-500 text-sm sm:text-base mb-2 sm:mb-0">No wallet found yet!</p>
        <button style={{ backgroundColor: '#352E5B', color: 'white' }} className="ml-0 sm:ml-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
          Deposit
        </button>
      </div>
    </div>
  );
};

export default DepositLog;
