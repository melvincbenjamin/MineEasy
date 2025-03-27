import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import miningbg from "../assets/images/miningbg.png";
import Hardware from "../assets/images/Hardware.png";
import Alternative from "../assets/images/Alternative.png";
import InstantWithdrawal from "../assets/images/instantWithdrawal.png";
import Secure from "../assets/images/Secure.png";
import Container from "../assets/images/Container (10).png";
import crypto from "../assets/images/3d-crypto.png";
import webVideo from "../assets/images/web-video-player-icon-outline-style-vector 1.png";
import image5 from '../assets/images/image 5.png';
import InvestorSay from '../components/InvestorSay';
import NewsCard from '../components/NewsCard';
import registerIcon from '../assets/images/registerIcon.png';
import planIcon from '../assets/images/planIcon.png';
import receiveIcon from '../assets/images/receiveIcon.png';
import MiningFarmCalculator from '../components/MiningFarmCalculator';
import MiningContracts from "../components/MiningContract";

const MiningPage = () => {
  
  return (
    <div>
      <header className="container-fluid text-center py-5" style={{ backgroundColor: "#F8F8F8"}}>
        <h1>Start Crypto Mining Today!</h1>
        <p>Maximize Your Profits with One Click. Start Mining Today!</p>
        <button className="btn btn-warning mx-2">Login</button>
        <button className="btn btn-outline-warning">Sign Up</button>
      </header>

      <div
        style={{
          backgroundImage: `url(${miningbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          position: "relative",
        }}
      ></div>

      {/* Info Section */}
      <section className="container text-center my-5">
        <div className="row">
          {[{ img: Hardware, title: "MINING HARDWARE IS READY", desc: "Your Mining Hardware is ready - Let the Crypto Flow" },
            { img: Alternative, title: "ALTERNATIVE CRYPTOCURRENCY", desc: "Explore Beyond Bitcoin - Unlock the Power of Alternative Cryptocurrency" },
            { img: InstantWithdrawal, title: "GET INSTANT WITHDRAWAL", desc: "Fast and Easy. Get your Funds With Instant Withdrawals" },
            { img: Secure, title: "MOST SECURE AND TRUSTED", desc: "Experience Top Tier Security - your Crypto is Safe With Us!" }]
            .map((item, index) => (
              <div className="col-md-3 mt-4" key={index}>
                <div className="card p-4 shadow-sm text-center" style={{ backgroundColor: "#D0DAFE" }}>
                  <img src={item.img} alt={item.title} className="img-fluid mx-auto d-block mb-3" style={{ width: "80px", height: "80px" }} />
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Bitcoin Section */}
<section className="container text-center my-5">
  <div className="row align-items-center"> {/* Align items vertically centered */}
    <div className="col-md-6">
      <img 
        src={Container} 
        alt="Bitcoin" 
        className="img-fluid rounded"  // Added border-radius
      />
    </div>
    <div className="col-md-6 d-flex flex-column justify-content-center text-md-start mb-5"> 
      {/* Ensure text aligns left on md+ screens */}
      <h2>Bitcoin is an Innovative & a New Kind of Money</h2>
      <p>
        Embrace the future of finance with Bitcoin, where traditional boundaries are redefined, and financial control is handed back to you. It's not just a new kind of money; it's the forefront of the financial revolution.
      </p>
      <div className="d-md-flex justify-content-md-start mt-3"> {/* Move button to the left on md+ screens */}
        <button className="btn btn-warning">READ MORE</button>
      </div>
    </div>
  </div>
</section>



      {/* Mining Explanation Section */}
<section className="container my-5">
  <div className="row align-items-center">
    {/* Text Content */}
    <div className="col-md-6 text-md-start text-center"> {/* Align left on md+ screens, center on small */}
      <h2>What is Bitcoin Mining?</h2>
      <p>Bitcoin mining is the process by which new bitcoins are created and transactions are verified on the Bitcoin network.</p>
      <h2>How Does Bitcoin Mining Work?</h2>
      <p>Bitcoin mining introduces new bitcoins into circulation and validates transactions within the Bitcoin network.</p>
      <h2>What is Proof of Work?</h2>
      <p>Bitcoin uses a consensus mechanism called Proof of Work (PoW), where miners must perform computational work to solve a cryptographic puzzle.</p>
    </div>

    {/* Image */}
    <div className="col-md-6 text-center">
      <img src={crypto} alt="Crypto Mining" className="img-fluid rounded mt-4 mt-md-0" /> {/* Remove top margin on md+ screens */}
    </div>
  </div>
</section>


      {/* Crypto Mining Guide */}
<section className="container my-5">
  <div className="row align-items-center">
    {/* Image Section */}
    <div className="col-md-6">
      <img 
        src={webVideo} 
        alt="How to Mine Crypto" 
        className="img-fluid rounded shadow-sm"  // Added rounded corners and subtle shadow
      />
    </div>

    {/* Text Section */}
    <div className="col-md-6 d-flex flex-column justify-content-center text-md-start text-center px-md-5">
      <h2 className="mb-4 fw-bold">How to Mine Crypto</h2>  {/* Bolder heading with spacing */}
      <p className="lead mb-4">
        Unlock the power of crypto mining—just a few clicks away. 
        Mine crypto with ease—fast, simple, and profitable.
      </p>
    </div>
  </div>
</section>


      {/* Call to Action */}
      <section className="text-center py-5 text-white" style={{backgroundColor: '#19193D'}}>
        <h1>Open an Account for Free and Start Mining Now!</h1>
        <button className="btn btn-warning mx-2">Buy Now</button>
        <button className="btn btn-outline-warning">Get Started</button>
      </section>

      {/* Popular Mining Contracts */}
      <div>
        <MiningContracts />
      </div>

{/* Bitcoin Section */}
      <section className="container text-center my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={image5} alt="Bitcoin" className="img-fluid" />
          </div>
          <div className="col-md-6 text-left">
            <p>Our Mission</p>
            <h2>Start Bitcoin Mining With Three Simple Steps</h2>
            <p>Bitcoin Mining Made Simple—Follow These 3 Steps to Start Earning.</p>
            <ul className="list-unstyled text-center">
        <li className="d-flex align-items-center justify-content-center my-3">
          <img src={registerIcon} alt="Register Account" className="me-2" width="30" height="30" />
          Register Account
        </li>
        <li className="d-flex align-items-center justify-content-center my-3">
          <img src={planIcon} alt="Choose Your Plan" className="me-2" width="30" height="30" />
          Choose Your Plan
        </li>
        <li className="d-flex align-items-center justify-content-center my-3">
          <img src={receiveIcon} alt="Receive Currency" className="me-2" width="30" height="30" />
          Receive Currency
        </li>
      </ul>
          </div>
        </div>
      </section>  
      <div>
          <MiningFarmCalculator />
      </div>  
      <InvestorSay />
      <NewsCard />
    </div>
  );
};

export default MiningPage;
