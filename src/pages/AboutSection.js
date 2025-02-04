import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import pageDrop from '../assets/images/pageDrop.png';
import CryptoCurrency from '../assets/images/CryptoCurrency.png';
import WhyChooseUs from "../components/WhychooseUs";
import InvestorSay from "../components/InvestorSay";
import ContactUs from "../pages/ContactUs";
import contactus from "../assets/images/contactus.png";

const AboutSection = () => {
  return (
    <section>
      <div>
        {/* Header Section */}
      <div
        className="home-container text-white"
        style={{
          backgroundImage: `url(${pageDrop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "50vh",
          width: "100vw",
          position: "relative",
        }}
      >
        {/* Overlay to darken the image */}
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
            zIndex: 1,
          }}
        ></div>

        {/* Content on the image */}
<div 
  style={{
    position: "relative",
    zIndex: 2,
    paddingTop: "100px",
  }}
>
  <h4 className="text-center">
    About <br /> MineEase
  </h4>
  <p className="mt-3 fs-6 fs-md-5 fs-lg-4 text-center">
    Building a Secure and Simple Crypto Mining Experience-AboutUs
  </p>
  <div>
    </div>
    </div>
    </div>
    <div className="container mt-5 mb-4">
  <div className="text-center">
    <h2 className="text-dark" style={{ marginTop: '20px' }}>Our Mission</h2>
  </div>

  <div className="row align-items-center mt-4">
    {/* Text Section */}
    <div className="col-md-6 order-2 order-md-1 text-center text-md-start">
      <h2 className="fw-bold text-dark">
        Discover Who We Are and How We Revolutionize Crypto Mining
      </h2>
      <p className="mt-3 text-muted" style={{ color: '#3C3C3C' }}>
        At [Your Company Name], our mission is to empower individuals and businesses by providing seamless access to cryptocurrency mining and trading. We aim to make crypto easy, secure, and profitable for everyone, from beginners to experts. Through cutting-edge technology, transparent services, and a commitment to trust and security, we strive to revolutionize the way you earn and trade digital assets. Join us as we shape the future of decentralized finance!
      </p>
    </div>

    {/* Image Section */}
    <div className="col-md-6 order-1 order-md-2 text-center mb-3 mb-md-0">
      <img src={CryptoCurrency} alt="Crypto Mining" className="img-fluid rounded" />
    </div>
  </div>

          
  <div 
  className="py-5" 
  style={{
    backgroundImage: `url(${contactus})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    marginTop: "50px",
    width: "100vw",         // Ensures full viewport width
    position: "relative",   // Positions it relative to viewport
    left: "0",              // Aligns to the very left edge
    marginLeft: "calc(-50vw + 50%)"  // Cancels out container's center alignment
  }}
>
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
        <h4 className="fw-bold" style={{ color: '#43E6FB' }}>$20.0M</h4>
        <p className="fs-7 fs-md-4 fs-lg-3" style={{ color: '#575757' }}>
          The amount of finance in the system
        </p>
      </div>
      <div className="col-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
        <h4 className="fw-bold" style={{ color: '#43E6FB' }}>20.0M</h4>
        <p className="fs-7 fs-md-4 fs-lg-3" style={{ color: '#575757' }}>
          Active Users
        </p>
      </div>
      <div className="col-12 col-md-4 text-center text-md-start">
        <h4 className="fw-bold" style={{ color: '#43E6FB' }}>25.1</h4>
        <p className="fs-7 fs-md-4 fs-lg-3" style={{ color: '#575757' }}>
          Supported Countries
        </p>
      </div>
    </div>
  </div>
</div>


<div className="mt-5">
<WhyChooseUs />
</div>
           
            <InvestorSay />
            <ContactUs />
          </div>
        </div>
    </section>
  );
};

export default AboutSection;
