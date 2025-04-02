import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "../assets/images/Homepage.png"; // Replace with your image path
import HomeBitcoin from "../components/HomeBitcoin";
import WhychooseUs from "../components/WhychooseUs";
import InvestorSay from "../components/InvestorSay";
import NewsCard from "../components/NewsCard";
import CTABanner from "../components/CTABanner";

function Home() {
  const data = [
    { title: "BTC/NZD", value: "---" },
    { title: "BTC/USD", value: "---" },
    { title: "BTC/EUR", value: "---" },
    { title: "BTC/JPY", value: "---" },
    { title: "BTC/AUD", value: "---" },
  ];

  return (
    <div>

      {/* Header Section */}
      <div
        className="home-container text-white"
        style={{
          backgroundImage: `url(${Homepage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
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
  className="p-5 content d-flex flex-column justify-content-center text-center text-md-start"
  style={{
    position: "relative",
    zIndex: 2,
    maxWidth: "600px",
    padding: "20px",
  }}
>
  <h4
    className="mt-1 fw-bold fs-2 fs-md-4 mt-md-5"
    style={{
      marginTop: "20px",
    }}
  >
    Mine Crypto with Ease and Maximize Your Earnings
  </h4>
  <p className="mt-3 fs-3 fs-md-5">
    Maximize your earnings with optimized mining algorithms and
    transparent fees.
  </p>
  <div>
    <button
      className="btn btn-primary btn-lg me-2"
      style={{
        backgroundColor: "#FCB42D",
        marginTop: "30px",
      }}
    >
      Start Mining
    </button>
  </div>
</div>
</div>

      {/* Financial Cards Section */}
      <div
        className="financial-container text-white"
        style={{
          padding: "30px 0",
          backgroundColor: "#000", // Set a dark background for the cards
        }}
      >
        <div className="container">
          <div className="row">
            {data.map((item, index) => (
              <div
                key={index}
                className="col-6 col-md-2 mb-4 text-center"
              >
                <h6 className="fw-bold py-5">{item.title}</h6>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other Components */}
      <div>
        <HomeBitcoin />
        <WhychooseUs />
        <InvestorSay />
        <CTABanner />
        <NewsCard />
      </div>
    </div>
  );
}

export default Home;
