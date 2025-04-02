import React from "react";

const MiningWalletsTable = ({ isMinerLoggedIn }) => {
  return (
    <div className="mt-5 container-fluid">
      {/* Mining Wallets Table */}
      <h4 className="mt-4 text-start text-dark">Mining Wallets</h4>
      <div className="table-responsive">
        <table 
          className="table table-striped w-100"
          style={{
            border: "3px solid #352E5B",
            borderCollapse: "collapse",
            tableLayout: "fixed"
          }}
        >
          <thead>
            <tr>
              <th className="px-2 py-2 text-center" style={{ backgroundColor: "#352E5B", color: "white", border: "2px solid white", fontSize: "clamp(12px, 2vw, 14px)" }}>Wallet Name</th>
              <th className="px-2 py-2 text-center" style={{ backgroundColor: "#352E5B", color: "white", border: "2px solid white", fontSize: "clamp(12px, 2vw, 14px)" }}>Miner Status</th>
              <th className="px-2 py-2 text-center" style={{ backgroundColor: "#352E5B", color: "white", border: "2px solid white", fontSize: "clamp(12px, 2vw, 14px)" }}>Block Hash</th>
              <th className="px-2 py-2 text-center" style={{ backgroundColor: "#352E5B", color: "white", border: "2px solid white", fontSize: "clamp(12px, 2vw, 14px)" }}>Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-2 py-2 text-start" style={{ color: "#352E5B", fontSize: "10px", border: "2px solid #352E5B", wordBreak: "break-word" }}>CLOUD MINING NEWBIE</td>
              <td className="px-2 py-2 text-center" style={{ border: "2px solid #352E5B" }}>
                <button 
                  className="btn btn-sm w-100"
                  disabled={!isMinerLoggedIn} 
                  style={{ 
                    backgroundColor: isMinerLoggedIn ? "green" : "gray", 
                    color: "white", 
                    border: "none", 
                    borderRadius: "5px",
                    fontSize: "clamp(10px, 1.5vw, 12px)",
                    padding: "4px"
                  }}
                >
                  {isMinerLoggedIn ? "Powered On" : "Offline"}
                </button>
              </td>
              <td className="px-2 py-2 text-start" style={{ color: "#352E5B", fontSize: "10px", border: "2px solid #352E5B", wordBreak: "break-word" }}>ajdyhshfud....jduwu72637udh</td>
              <td className="px-2 py-2 text-start" style={{ color: "#352E5B", fontSize: "10px", border: "2px solid #352E5B" }}>0.00000BTC ≈ $0.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MiningWalletsTable;
