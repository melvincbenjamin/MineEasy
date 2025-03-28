import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import PurchaseViewAll from '../pages/PurchaseViewAll';
import PurchaseModal from "../pages/PurchaseModal";

const MiningContracts = () => {
  const [showModal, setShowModal] = useState(false);
  const [showViewAll, setShowViewAll] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleViewAllShow = () => setShowViewAll(true);
  const handleViewAllClose = () => setShowViewAll(false);

  const contracts = [
    {
      title: "Cloud Mining - Newbie",
      Prize: "$500/ 30 Days",
      Contract_Price: "$500 / 30 Days",
      Contract_Duration: "30 Days",
      Daily_Mining: "0.000381BTC - 0.001905BTC( ≈ $34 - $173 )",
      total_Mining: "0.015 BTC",
      hashrate: "Hashrate of $500 with 18,758 TH",
      Purchase_Agreement: "View All",
    },
    {
      title: "Mining Farm - Bronze",
      Prize: "$1,500/ 60 Days",
      Contract_Price: "$1,500 / 60 Days",
      Contract_Duration: "60 Days",
      Daily_Mining: "0.003046BTC - 0.005708BTC ( ≈ $287 - $539 )",
      total_Mining: "0.16BTC (≈ $15,420)",
      hashrate: "Hashrate of $1,500 with 37,515 TH",
      Purchase_Agreement: "View All",
    },
    {
      title: "Mining Pool - Silver",
      Prize: "$3000/ 150 Days",
      Contract_Price: "$3,000",
      Contract_Duration: "150 Days",
      Daily_Mining: "0.0065BTC( ≈ $615.54 )",
      total_Mining: "0.33BTC (≈ $30,840 )",
      hashrate: "Hashrate of $3,000 with 93,788 TH",
      Purchase_Agreement: "View All"
    }
  ];

  const contracts2 = [
    {
      title: "DEDICATED MINING FARM - DIAMOND",
      Prize: "$5000/ 3 months",
      Contract_Price: "$5000",
      Contract_Duration: "3 months",
      Daily_Mining: "0.000123BTC ($5.13)",
      total_Mining: "0.015 BTC",
      hashrate: "HashRate: 5,000 MH/s 242.5TH",
      Purchase_Agreement: "View All",
    },
    {
      title: "MINING POOL ACCESS - GOLD",
      Prize: "$10000",
      Contract_Price: "$10,000",
      Contract_Duration: "6 months",
      Daily_Mining: "0.000123BTC ($5.13)",
      total_Mining: "0.16BTC (≈ $15,420)",
      hashrate: "HashRate: 10,000 MH/s 525.7TH",
      Purchase_Agreement: "View All",
    },
    {
      title: "DEDICATED MINING SERVER - PLATINUM",
      Prize: "$15000",
      Contract_Price: "$15000",
      Contract_Duration: "10 months",
      Daily_Mining: "0.000123BTC ($5.13)",
      total_Mining: "0.33BTC (≈ $30,840 )",
      hashrate: "HashRate: 15,000 MH/s 862.5TH",
      Purchase_Agreement: "View All"
    }
  ];

  // Function to format prize display safely
  const formatPrize = (prize) => {
    if (!prize || typeof prize !== 'string') return <span>Invalid Prize</span>;

    const parts = prize.split('/');
    const price = parts[0]?.trim();
    const duration = parts[1]?.trim();

    return (
      <div>
        <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>{price}</span>
        {duration && (
          <span style={{ fontSize: "1rem", marginLeft: "5px" }}>/ {duration}</span>
        )}
      </div>
    );
  };

  return (
    <div className="container text-start py-5">
      <h2 className="mb-4 text-center">The Most Popular Mining Contracts</h2>
      <div className="row justify-content-center">
        {contracts.map((plan, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm" style={{ backgroundColor: "#0E2E45", color: "white" }}>
              <h5 className='text-center mt-2'>{plan.title}</h5>

              {/* Formatted Prize */}
              <div className="mb-3 p-2">
                {formatPrize(plan.Prize)}
              </div>

              {/* Other Info */}
              <div className='mb-2 p-2'>
                <p>Contract Price: {plan.Contract_Price}</p>
              </div>
              <div className='p-2'>
                <p>Contract Duration: {plan.Contract_Duration}</p>
                <p>Daily Mining: {plan.Daily_Mining}</p>
                <p>Total Mining: {plan.total_Mining}</p>
                <p>Hashrate: {plan.hashrate}</p>
              </div>

              {/* Purchase Agreement */}
              <div className="d-flex align-items-center justify-content-start mb-3">
                <p className="mb-0 me-2">Purchase Agreement:</p>
                <button
                  className="btn btn-link p-0 text-danger"
                  onClick={handleViewAllShow}
                  style={{ textDecoration: 'underline' }}
                >
                  {plan.Purchase_Agreement}
                </button>
              </div>
              {/* Progress Bar */}
              <div className="progress mb-3 w-100" // Ensures full width on all screens
     style={{ height: '25px', marginTop: "10px", backgroundColor: "#D9D9D9", border: "1px solid #FFFFFF" }}>
   <div
    className="progress-bar"
    role="progressbar"
    style={{
      width: `49.8%`, // Reduced width
      backgroundColor: "#08FF3D",
      color: "#000",
      fontWeight: "bold"
    }}
  >
    9000/4480 (49.8%)
  </div>
</div>


              {/* Buy Now Button */}
              <div className="text-start p-3">
                <button 
                  className="btn btn-warning mb-3" 
                  onClick={handleShowModal} 
                  style={{ maxWidth: "50%", padding: "12px 16px" }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contracts with Maximum Benefit */}
      <h2 className="mt-5 text-center">Contracts with Maximum Benefit in TH/s</h2>
      <div className="row justify-content-center">
        {contracts2.map((plan, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm" style={{ backgroundColor: "#0E2E45", color: "white" }}>
              <h5 className='text-center mt-2'>{plan.title}</h5>

              {/* Formatted Prize */}
              <div className="mb-3 p-2">
                {formatPrize(plan.Prize)}
              </div>

              {/* Other Info */}
              <div className='mb-2 p-2'>
                <p>Contract Price: {plan.Contract_Price}</p>
              </div>
              <div className='p-2'>
                <p>Contract Duration: {plan.Contract_Duration}</p>
                <p>Daily Mining: {plan.Daily_Mining}</p>
                <p>Total Mining: {plan.total_Mining}</p>
                <p>Hashrate: {plan.hashrate}</p>
              </div>
              
              {/* Progress Bar */}
              <div className="progress mb-3 w-100" // Ensures full width on all screens
     style={{ height: '25px', marginTop: "10px", backgroundColor: "#D9D9D9", border: "1px solid #FFFFFF" }}>
   <div
    className="progress-bar"
    role="progressbar"
    style={{
      width: `49.8%`, // Reduced width
      backgroundColor: "#08FF3D",
      color: "#000",
      fontWeight: "bold"
    }}
  >
    9000/4480 (49.8%)
  </div>
</div>


{/* Buy Now Button */}
<div className="text-center p-3">
  <button 
    className="btn btn-warning mb-3 fw-bold" 
    onClick={handleShowModal} 
    style={{ maxWidth: "50%", padding: "12px 16px" }} // Further reduced width
  >
    Buy Now
  </button>
</div>
            </div>
            
          </div>
        ))}
        
      </div>


      {/* Modals */}
      <PurchaseModal show={showModal} handleClose={handleCloseModal} />
      <PurchaseViewAll show={showViewAll} handleClose={handleViewAllClose} />
    </div>
  );
};

export default MiningContracts;
