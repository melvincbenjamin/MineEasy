import React from 'react';
import MainContent from '../components/MainContent';

const Referral = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <MainContent />
        {/* Second Table - Referral Bonus */}
        <section className="bg-white shadow-md rounded-lg p-6">
          {/* Mining Wallets Table */}
<div className="mt-5 table-responsive mt-5">
  <table className="table table-striped text-white table-md">
    <thead>
      <tr>
        <th style={{ backgroundColor: '#352E5B', color: 'white', fontSize: '0.7rem' }}>User</th>
        <th style={{ backgroundColor: '#352E5B', color: 'white', fontSize: '0.7rem' }} >Reacharge Amount</th>
        <th style={{ backgroundColor: '#352E5B', color: 'white', fontSize: '0.7rem' }} >Amount</th>
        <th style={{ backgroundColor: '#352E5B', color: 'white', fontSize: '0.7rem' }} >Time</th>
      </tr>
    </thead>
    </table>
</div>
          <div className="flex justify-center text-center items-center h-32">
            <p style={{ color: "#352e5b"}}>No referral bonus received yet!</p>
            <button style={{ backgroundColor: '#352E5B', color: 'white' }} className="ml-0 sm:ml-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
          Deposit
        </button>
          </div>
        </section>

      </div>
  );
};

export default Referral;
