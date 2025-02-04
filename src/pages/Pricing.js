import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Homepage from '../assets/images/Homepage.png';
const plans = [
  { title: 'CLOUD MINING - NEWBIE', price: 500, duration: '30 Day', contract: '30.0$', daily: '0.000061BTC - 0.000065BTC ($2.3 - $2.7)', hashRate: '5,000 MH/s 38.7TH', agreement: '1 Year' },
  { title: 'MINING FARM - BRONZE', price: 1500, duration: '180 Day', contract: '100.0$', daily: '0.000061BTC - 0.000065BTC ($2.3 - $2.7)', hashRate: '15,000 MH/s 75.7TH', agreement: '1 Year' },
  { title: 'MINING POOL - SILVER', price: 3000, duration: '180 Day', contract: '100.0$', daily: '0.000061BTC - 0.000065BTC ($2.3 - $2.7)', hashRate: '30,000 MH/s 303.8TH', agreement: '1 Year' },
  { title: 'DEDICATED MINING FARM - DIAMOND', price: 5000, duration: '3 months', contract: '100.0$', daily: '0.000123BTC ($5.13)', hashRate: '5,000 MH/s 242.5TH', agreement: '1 Year' },
  { title: 'MINING POOL ACCESS - GOLD', price: 10000, duration: '3 months', contract: '100.0$', daily: '0.000123BTC ($5.13)', hashRate: '10,000 MH/s 525.7TH', agreement: '1 Year' },
  { title: 'DEDICATED MINING SERVER - PLATINUM', price: 15000, duration: '3 months', contract: '100.0$', daily: '0.000123BTC ($5.13)', hashRate: '15,000 MH/s 862.5TH', agreement: '1 Year' }
];

const Pricing = () => {
  return (
    <div>
      {/* Header Section */}
      <div
  className="mb-5 home-container text-white"
  style={{
    backgroundImage: `url(${Homepage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "50vh",
    width: "100vw", // Ensures full width
    position: "relative",
  }}
>
  {/* Content on the image */}
  <div className="justify-content-center"
    style={{
      zIndex: 2,
      paddingTop: '100px'
    }}
  >
    <h2 className="text-center text-white">Pricing Table</h2>
    <p className="text-center text-light">That guarantee you some hashing power.</p>
  </div>
</div>

  <div className="container py-5">
      <h2 className="text-center text-dark">The most popular mining contracts</h2>
      <div className="row mt-4">
        {plans.slice(0, 3).map((plan, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card text-white bg-dark p-3">
              <h5 className="text-center">{plan.title}</h5>
              <p className="text-center">${plan.price} / {plan.duration}</p>
              <p>Contract price: {plan.contract}</p>
              <p>Daily mining: {plan.daily}</p>
              <p>HashRate: {plan.hashRate}</p>
              <p>Purchase Agreement: {plan.agreement}</p>
              <div className="progress">
                <div className="progress-bar bg-success" style={{ width: '100%' }}>Active</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-center text-dark mt-5">Contracts with maximum benefit in TH/s</h2>
      <div className="row mt-4">
        {plans.slice(3).map((plan, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card text-white bg-dark p-3">
              <h5 className="text-center">{plan.title}</h5>
              <p className="text-center">${plan.price} / {plan.duration}</p>
              <p>Contract price: {plan.contract}</p>
              <p>Daily mining: {plan.daily}</p>
              <p>HashRate: {plan.hashRate}</p>
              <p>Purchase Agreement: {plan.agreement}</p>
              <div className="progress">
                <div className="progress-bar bg-success" style={{ width: '100%' }}>Active</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Pricing;
