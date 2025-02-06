import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { FaWallet, FaClipboardList, FaGift, FaDownload } from "react-icons/fa";
//import Sidebar from "../components/Sidebar";
import MainContent from '../components/MainContent';
import btc from '../assets/images/token-branded_hbtc.png';


const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="row">
          <div>
            <MainContent />
          </div>
          {/* Balance Cards Section */}
          <div className="row">
            <h1 className="text-start" style={{color: "#352E5B"}}>Balance</h1>
            <p className="text-start" style={{color: "#A5A2B899"}}>Total Mined</p>
            {/* USD Wallet Balance */}
            <div className="col-12 col-md-4 mb-3">
              <h5 className="text-start" style={{ color: "#7D67FF" }}>USD Wallet Balance</h5>
              <Card
                className="shadow"
                style={{
                  background: "linear-gradient(292.53deg, #7D67FF 31.56%, rgba(147, 129, 255, 0.75) 97.92%)",
                  color: "#FFF",
                  position: "relative",
                  minHeight: "180px"
                }}
              >
                <Card.Body className="d-flex flex-column align-items-center">
                  <FaWallet size={24} style={{ position: "absolute", top: "10px", left: "10px" }} />
                  <h2 className="pt-5">$1,820</h2>
                  <button
                  className="btn btn-primary mt-2"
                  style={{ position: "absolute", top: "10px", right: "10px" }}
                  onClick={() => navigate('/depositusdwallet')}
                >
                  Deposit
                </button>
                </Card.Body>
              </Card>
            </div>

            {/* Deposit Log Card */}
          <div className="col-12 col-md-4 mb-3">
            <h5 className="text-start" style={{ color: "#7D67FF" }}>Deposit Log</h5>
            <Card className="shadow" style={{ backgroundColor: "#F8F7FF", position: "relative", minHeight: "180px" }}>
              <Card.Body className="d-flex flex-column align-items-center">
                <FaClipboardList size={24} style={{ position: "absolute", top: "10px", left: "10px" }} />
                <h2 className="text-primary pt-5">$1,100</h2>
                <button
                  className="btn btn-primary mt-2"
                  style={{ position: "absolute", top: "10px", right: "10px" }}
                  onClick={() => navigate('/deposit')}
                >
                  View all
                </button>
              </Card.Body>
            </Card>
          </div>

            {/* Referral Bonus */}
          <div className="col-12 col-md-4 mb-3">
            <h5 className="text-start" style={{ color: "#7D67FF" }}>Referral Bonus</h5>
            <Card className="shadow" style={{ backgroundColor: "#E7E7E7", position: "relative", minHeight: "180px" }}>
              <Card.Body className="d-flex flex-column align-items-center">
                <FaGift size={24} style={{ position: "absolute", top: "10px", left: "10px" }} />
                <h2 className="text-primary pt-5">$1,100</h2>
                <button
                  className="btn btn-primary mt-2"
                  style={{ position: "absolute", top: "10px", right: "10px" }}
                  onClick={() => navigate('/referral')}
                >
                  View all
                </button>
              </Card.Body>
            </Card>

            </div>
          </div>

          {/* BTC Image & Deposit Button Section */}
          <div className="text-center mt-5">
            <Card className="mx-auto" style={{
              maxWidth: "1200px",
              padding: "20px",
              borderRadius: "8px",
              minHeight: "250px"
            }}>
              <Card.Body className="d-flex flex-column align-items-center">
                <img src={btc} alt="cardPic-btc" style={{ maxWidth: '80%', height: 'auto' }} />
                {/* Deposit Button */}
                <div className="w-100 d-flex justify-content-center mt-4">
                  <div className="w-75 bg-primary text-center py-3 rounded">
                    <button className="w-100 btn d-flex align-items-center justify-content-center">
                      <FaDownload className="me-2" /> Deposit Now
                    </button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          {/* Mining Wallets Table */}
          <h4 className="mt-5 text-start text-dark">Mining Wallets</h4>
          <table className="table table-striped bg-[#352E5B] text-white">
            <thead>
              <tr>
                <th style={{backgroundColor: '#352E5B', color: 'white'}}>Wallet Name</th>
                <th style={{backgroundColor: '#352E5B', color: 'white'}}>Miner Status</th>
                <th style={{backgroundColor: '#352E5B', color: 'white'}}>Block Hash</th>
                <th style={{backgroundColor: '#352E5B', color: 'white'}}>Block Hash</th>
                <th style={{backgroundColor: '#352E5B', color: 'white'}}>Balance</th>
              </tr>
            </thead>
          </table>
        </div>

        {/* Right-hand Content Section */}
<div className="col-12 col-md-3 mt-5">
  <h4 className="mt-4">Latest Deposits</h4>
  <table className="table mb-4">
    <thead>
      <tr>
        <th style={{ backgroundColor: "#011C2A", color: "white" }}>User</th>
        <th style={{ backgroundColor: "#011C2A", color: "white" }}>Amount</th>
      </tr>
    </thead>
    <tbody>
      {[...Array(6)].map((_, i) => (
        <tr key={i}>
          <td>Mike23</td>
          <td>50 USD</td>
        </tr>
      ))}
    </tbody>
  </table>


          <h4 className="mt-5">Latest Withdrawal</h4>
          <table className="table table-striped mb-4">
            <thead>
              <tr>
                <th style={{ backgroundColor: "#011C2A", color: "white" }}>User</th>
                <th style={{ backgroundColor: "#011C2A", color: "white" }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(6)].map((_, i) => (
                <tr key={i}>
                  <td>Mike23</td>
                  <td>50 USD</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default Dashboard;
