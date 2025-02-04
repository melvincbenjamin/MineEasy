import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import pageDrop from '../assets/images/pageDrop.png';
import CryptoCurrency from '../assets/images/CryptoCurrency.png';
import WhyChooseUs from "../components/WhychooseUs";
import InvestorSay from "../components/InvestorSay";
import ContactUs from "../pages/ContactUs";
import contactus from "../assets/images/contactus.png";

const AboutUs = () => {
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
        <div className="mt-5 text-center mb-4">
          <h2 className="text-dark" style={{marginTop: '20px'}}>Our Mission</h2>
        </div>
        <h2 className="fw-bold text-dark">Discover Who We Are and How We Revolutionize Crypto Mining</h2>
        <p className="mt-3 text-muted" style={{color: '#3C3C3C'}}>
          At [Your Company Name], our mission is to empower individuals and businesses by providing seamless access to cryptocurrency mining and trading. We aim to make crypto easy, secure, and profitable for everyone, from beginners to experts. Through cutting-edge technology, transparent services, and a commitment to trust and security, we strive to revolutionize the way you earn and trade digital assets. Join us as we shape the future of decentralized finance!
        </p>
        <div className="row align-items-center mt-4">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <img src={CryptoCurrency} alt="Crypto Mining" className="img-fluid rounded" />
          </div>
          <div className="col-md-6 text-center bg-gray text-md-start"
  style={{
    backgroundImage: `url(${contactus})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="row">
    <div className="col-4">
      <h4 className="fw-bold" style={{ color: '#43E6FB' }}>$20.0M</h4>
      <p className="fs-7 fs-md-4 fs-lg-3" style={{ color: '#575757' }}>The amount of finance in the system</p>
    </div>
    <div className="col-4">
      <h4 className="fw-bold" style={{ color: '#43E6FB' }}>20.0M</h4>
      <p className="fs-7 fs-md-4 fs-lg-3" style={{ color: '#575757' }}>Active Users</p>
    </div>
    <div className="col-4">
      <h4 className="fw-bold" style={{ color: '#43E6FB' }}>25.1</h4>
      <p className="fs-7 fs-md-4 fs-lg-3" style={{ color: '#575757' }}>Supported Countries</p>
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

export default AboutUs;
