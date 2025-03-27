import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TransactionLog() {
  const deposits = [
    { user: 'Mike23', amount: '50 USD' },
    { user: 'Mike23', amount: '50 USD' },
    { user: 'Mike23', amount: '50 USD' },
    { user: 'Mike23', amount: '50 USD' },
    { user: 'Mike23', amount: '50 USD' },
  ];

  const withdrawals = [
    { user: 'Mike23', amount: '50 USD' },
    { user: 'Mike23', amount: '50 USD' },
    { user: 'Mike23', amount: '50 USD' },
    { user: 'Mike23', amount: '50 USD' },
    { user: 'Mike23', amount: '50 USD' },
  ];

  return (
    <div className="container my-5">
      <h4 className="fw-bold text-center mb-4">Transaction Log</h4>
      <p className="text-center text-muted mb-5">Our Latest Deposits And Withdrawals</p>
      <div className="row justify-content-center">
        {/* Latest Deposits */}
        <div className="col-md-5 mb-4">
          <h5 className="fw-bold mb-3 text-center">Latest Deposits</h5>
          <table className="table table-bordered table-striped text-center">
            <thead className="table-dark">
              <tr>
                <th>User</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {deposits.map((deposit, index) => (
                <tr key={index}>
                  <td>{deposit.user}</td>
                  <td>{deposit.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Latest Withdrawals */}
        <div className="col-md-5 mb-4">
          <h5 className="fw-bold mb-3 text-center">Latest Withdrawals</h5>
          <table className="table table-bordered table-striped text-center">
            <thead className="table-dark">
              <tr>
                <th>User</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {withdrawals.map((withdrawal, index) => (
                <tr key={index}>
                  <td>{withdrawal.user}</td>
                  <td>{withdrawal.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TransactionLog;
