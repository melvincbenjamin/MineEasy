// src/components/SignUp.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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

    const { username, email, password, confirmPassword } = formData;

    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill all fields!');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    setError('');
    alert(`Account created for ${username}`);
    // Here you can integrate Firebase Auth or API calls
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100" style={{ backgroundColor: '#e5eaf5' }}>
      <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }}>
        <div className="text-center mb-3">
          <img src="https://img.icons8.com/fluency/48/000000/bitcoin.png" alt="Logo" width="40" />
          <h5 className="mt-2">MineEase</h5>
        </div>
        <h4 className="text-center mb-2">Welcome to MineEase!</h4>
        <p className="text-center text-muted mb-3">Create your account</p>

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
              <span className="input-group-text"><i className="bi bi-envelope"></i></span>
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                name="email"
                value={formData.email}
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

          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          {error && <div className="alert alert-danger py-1 text-center">{error}</div>}

          <div className="d-grid mb-2">
            <button type="submit" className="btn btn-warning text-white fw-bold">
              Sign Up
            </button>
          </div>

          <div className="text-center mb-2">or</div>

          <div className="d-grid mb-3">
            <button type="button" className="btn btn-outline-danger">
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="google" className="me-2" />
              Login With Google
            </button>
          </div>

          <div className="text-center">
            <span>Already have an account? </span>
            <a href="#" className="fw-bold text-danger text-decoration-none">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
