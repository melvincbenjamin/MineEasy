// src/components/SignIn.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function SignIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setError('Please enter both username and password!');
      return;
    }

    setError('');
    alert(`Logging in as ${formData.username}`);
    // Here you can add actual login functionality (API calls, Firebase auth, etc.)
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100" style={{ backgroundColor: '#e5eaf5' }}>
      <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }}>
        <div className="text-center mb-3">
          <img src="https://img.icons8.com/fluency/48/000000/bitcoin.png" alt="Logo" width="40" />
          <h5 className="mt-2">MineEase</h5>
        </div>
        <h4 className="text-center mb-3">Welcome Back</h4>
        <p className="text-center text-muted mb-4">Enter your credentials for login</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-person"></i></span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-lock"></i></span>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          {error && <div className="alert alert-danger py-1 text-center">{error}</div>}

          <div className="d-grid mb-2">
            <button type="submit" className="btn btn-warning text-white fw-bold">
              Log in Now
            </button>
          </div>

          <div className="text-center mb-2">
            <a href="#" className="text-decoration-none">Forgotten Password?</a>
          </div>

          <div className="text-center">
            <span>Don't have an account? </span>
            <a href="#" className="fw-bold text-danger text-decoration-none">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
