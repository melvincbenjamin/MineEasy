import React from 'react';

const CTABanner = () => {
  return (
    <div 
      className="d-flex flex-column flex-md-row align-items-center justify-content-between text-white text-center text-md-start px-3 px-md-5"
      style={{
        backgroundColor: '#F7921A',
        width: '100%',
        minHeight: '176px',
        padding: '20px 15px',
      }}
    >
      <p className="mb-3 mb-md-0 fs-6 fs-md-5 fw-bold">
        Open account for free and start mining now!
      </p>
      <button 
        style={{ backgroundColor: "#F7921A" }} 
        className="btn btn-light text-white fw-bold px-3 py-2 px-md-4 py-md-2"
      >
        Get Started
      </button>
    </div>
  );
};

export default CTABanner;
