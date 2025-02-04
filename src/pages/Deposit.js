import React from 'react';

const Deposit = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
        {/* First Table - Deposit Log */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center border-b-2 border-purple-600 pb-2">
            <div className="w-1/5 font-semibold">Transaction ID</div>
            <div className="w-1/5 font-semibold">Gateway</div>
            <div className="w-1/5 font-semibold">Amount</div>
            <div className="w-1/5 font-semibold">Status</div>
            <div className="w-1/5 font-semibold">Time</div>
          </div>
          <div className="flex justify-center items-center h-32">
            <p className="text-gray-500">No wallet found yet!</p>
            <button className="ml-4 bg-purple-600 text-white px-4 py-2 rounded-lg">Deposit</button>
          </div>
        </section>
</div>
  );
};

export default Deposit;
