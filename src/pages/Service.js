import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "../assets/images/Homepage.png";
import contactus from "../assets/images/contactus.png";
import InvestorSay from "../components/InvestorSay";


// Define card data
const features = [
  {
    title: "Cloud Mining",
    description:
      "Provide users with mine cryptocurrencies without needing to own mining hardware. They can rent hashing power from your platform.",
    icon: "⛏️", // Placeholder emoji for icon
  },
  {
    title: "Crypto Trading",
    description:
      "Offer users to buy and sell cryptocurrencies instantly on the platform.",
    icon: "📈",
  },
  {
    title: "Portfolio Management",
    description:
      "Track and optimize your crypto investments with our powerful tools.",
    icon: "⚙️",
  },
  {
    title: "Real-Time Analytics",
    description:
      "Dynamic graphs showcasing crypto market performance, mining operations, and real-time earnings.",
    icon: "⛏️",
  },
  {
    title: "Educational Resources",
    description:
      "Master crypto mining and trading with our educational resources.",
    icon: "⛏️",
  },
  {
    title: "Referral Program",
    description:
      "Offers a service by referring friends to join and earn crypto rewards for each referral.",
    icon: "⛏️",
  },
];

const Service = () => {
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
    Awesome Services
  </h4>
  <p className="mt-3 fs-6 fs-md-5 fs-lg-4 text-center">
    Unlock powerful solutions-Explore our Crypto mining and trading Services
  </p>
  <div>
    </div>
    </div>
    </div>

    <Container>

      <Row className="gy-4">
        {features.map((feature, index) => (
          <Col key={index} md={4}>
            <Card
              className="mt-3 text-center shadow-sm"
              style={{
                backgroundColor: "#F9F5EC",
                border: "none",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <div
                className="mb-3"
                style={{
                  fontSize: "40px",
                  textAlign: "center",
                  color: "#000",
                }}
              >
                {feature.icon}
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">{feature.title}</Card.Title>
                <Card.Text style={{ color: "#575757", fontSize: "14px" }}>
                  {feature.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
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
  
<div>
    <InvestorSay />
</div>
    </div>
  );
};

export default Service;
