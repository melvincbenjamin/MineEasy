import React from 'react';

const Referral = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
        {/* Second Table - Referral Bonus */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center border-b-2 border-purple-600 pb-2">
            <div className="w-1/4 font-semibold">User</div>
            <div className="w-1/4 font-semibold">Recharge amount</div>
            <div className="w-1/4 font-semibold">Amount</div>
            <div className="w-1/4 font-semibold">Time</div>
          </div>
          <div className="flex justify-center items-center h-32">
            <p className="text-gray-500">No referral bonus received yet!</p>
          </div>
        </section>

      </div>
  );
};

export default Referral;
