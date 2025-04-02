import React, { useState} from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaWallet, FaClipboardList, FaGift, FaDownload } from "react-icons/fa";
import MainContent from "../components/MainContent";
import btc from "../assets/images/token-branded_hbtc.png";
import DepositUSDWallet from "./DepositUsdWallet";
import MiningWalletTable from "../components/MiningWalletTable";


const Dashboard = () => {
  const navigate = useNavigate();
  const [showDepositModal, setShowDepositModal] = useState(false);


  return (
    <div className="container-fluid px-3">
      <div className="row">
        {/* Main Content */}
        <MainContent />
        <div className="col-12 col-md-9">
          {/* Balance Cards Section */}
          <div className="mt-5">
            <h1 className="text-start text-dark">Balance</h1>
            <p className="text-start text-secondary">Total Mined</p>

            <div className="row row-cols-1 row-cols-md-3 g-3">
              {/* USD Wallet Balance */}
              <div className="col">
                <h5 className="text-start text-primary">USD Wallet Balance</h5>
                <Card className="shadow border-0 bg-primary text-white" style={{ minHeight: "180px" }}>
                  <Card.Body className="d-flex flex-column align-items-center">
                    <FaWallet className="position-absolute top-0 start-0 m-2" size={24} />
                    <h2 className="pt-4">$1,820</h2>
                    <button className="btn btn-light btn-sm mt-2 position-absolute top-0 end-0 m-2" onClick={() => navigate("/depositusdwallet")}>
                      Deposit
                    </button>
                  </Card.Body>
                </Card>
              </div>

              {/* Deposit Log */}
              <div className="col">
                <h5 className="text-start text-primary">Deposit Log</h5>
                <Card className="shadow border-0 bg-light" style={{ minHeight: "180px" }}>
                  <Card.Body className="d-flex flex-column align-items-center">
                    <FaClipboardList className="position-absolute top-0 start-0 m-2" size={24} />
                    <h2 className="text-primary pt-4">$1,100</h2>
                    <button className="btn btn-primary btn-sm mt-2 position-absolute top-0 end-0 m-2" onClick={() => navigate("/depositlog")}>
                      View all
                    </button>
                  </Card.Body>
                </Card>
              </div>

              {/* Referral Bonus */}
              <div className="col">
                <h5 className="text-start text-primary">Referral Bonus</h5>
                <Card className="shadow border-0 bg-secondary text-white" style={{ minHeight: "180px" }}>
                  <Card.Body className="d-flex flex-column align-items-center">
                    <FaGift className="position-absolute top-0 start-0 m-2" size={24} />
                    <h2 className="text-primary pt-4">$1,100</h2>
                    <button className="btn btn-primary btn-sm mt-2 position-absolute top-0 end-0 m-2" onClick={() => navigate("/referral")}>
                      View all
                    </button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>

          {/* BTC Image & Deposit Button Section */}
            <div className="text-center mt-4">
            <Card className="mx-auto border-0 shadow" style={{ maxWidth: "1200px", padding: "15px", borderRadius: "8px" }}>
              <Card.Body className="d-flex flex-column align-items-center">
                <img src={btc} alt="cardPic-btc" className="img-fluid" style={{ maxWidth: "80%", height: "auto" }} />
                <div className="w-100 d-flex justify-content-center mt-3">
                  <button
                    className="btn btn-primary d-flex align-items-center justify-content-center w-75 py-2"
                    onClick={() => setShowDepositModal(true)}
                  >
                    <FaDownload className="me-2" /> Deposit Now
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>

          {/* Mining Wallets Table */}
          <div>
            <MiningWalletTable />
          </div>
        </div>

        {/* Right-Hand Side - Latest Deposits & Withdrawals */}
        <div className="col-12 col-md-3 mt-4">
          <h4 style={{marginTop: 80}}>Latest Deposits</h4>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="bg-dark text-white">
                  <th>User</th>
                  <th>Amount</th>
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

          <h4 className="mt-4">Latest Withdrawals</h4>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr className="bg-dark text-white">
                  <th>User</th>
                  <th>Amount</th>
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
      </div>
      <div>
        
      </div>
      {/* Deposit Modal */}
      <DepositUSDWallet show={showDepositModal} handleClose={() => setShowDepositModal(false)} />
    </div>
  );
};

export default Dashboard;