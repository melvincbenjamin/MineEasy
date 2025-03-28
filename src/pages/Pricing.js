import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Homepage from '../assets/images/Homepage.png';
import MiningContracts from '../components/MiningContract';


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
<div>
  <MiningContracts />
</div>
  </div>
  );
};

export default Pricing;
