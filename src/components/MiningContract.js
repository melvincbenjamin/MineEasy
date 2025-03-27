import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PurchaseViewAll from '../pages/PurchaseViewAll';
import PurchaseModal from "../pages/PurchaseModal";

const MiningContracts = () => {
  const navigate = useNavigate();
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

  // Function to format prize display
  const formatPrize = (prize) => {
    const [price, duration] = prize.split('/');
    return (
      <div>
        <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>{price.trim()}</span>
        <span style={{ fontSize: "1rem", marginLeft: "5px" }}>/ {duration.trim()}</span>
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

              {/* Horizontal Line with Circle */}
              <div className="d-flex align-items-center my-4">
                <hr className="flex-grow-1 m-0" style={{ borderTop: `3px solid white` }} />
                <div
                  className="mx-2"
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#ffffff",
                    borderRadius: "50%",
                  }}
                ></div>
                <hr className="flex-grow-1 m-0" style={{ borderTop: `3px solid white` }} />
              </div>

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
     style={{ height: '25px', margin: "20px", backgroundColor: "#D9D9D9", border: "1px solid #FFFFFF" }}>
   <div
    className="progress-bar"
    role="progressbar"
    style={{
      width: `40%`, // Reduced width
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
