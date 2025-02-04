import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Sidebar from '../components/Sidebar';

const Settings = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    mobile: '',
    country: '',
    address: '',
    state: '',
    zipCode: '',
    city: ''
  });

  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const updateProfile = (e) => {
    e.preventDefault();
    console.log('Profile updated:', profile);
  };

  const changePassword = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert('New password and confirmation do not match.');
      return;
    }
    console.log('Password changed:', passwords);
  };

  return (
    <div>
    <div>
      <Sidebar />
    </div>
    <div className="container mt-5">
      <div className="card p-4">
        <h5 className="text-start text-white p-2" style={{backgroundColor: '#352E5B'}}>Update Your Profile</h5>
        <form onSubmit={updateProfile} className="text-start">
          <div className="row mb-3">
            <div className="col-md-4">
              <label className='text-start'>First Name:</label>
              <input type="text" className="form-control" name="firstName" value={profile.firstName} onChange={handleProfileChange} />
            </div>
            <div className="col-md-4">
              <label>Last Name:</label>
              <input type="text" className="form-control" name="lastName" value={profile.lastName} onChange={handleProfileChange} />
            </div>
            <div className="col-md-4">
              <label>Username:</label>
              <input type="text" className="form-control" name="username" value={profile.username} onChange={handleProfileChange} />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label>Email Address:</label>
              <input type="email" className="form-control" name="email" value={profile.email} onChange={handleProfileChange} />
            </div>
            <div className="col-md-4">
              <label>Mobile:</label>
              <input type="text" className="form-control" name="mobile" value={profile.mobile} onChange={handleProfileChange} />
            </div>
            <div className="col-md-4">
              <label>Country:</label>
              <input type="text" className="form-control" name="country" value={profile.country} onChange={handleProfileChange} />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label>Address:</label>
              <input type="text" className="form-control" placeholder='Address' name="address" value={profile.address} onChange={handleProfileChange} />
            </div>
            <div className="col-md-4">
              <label>State:</label>
              <input type="text" className="form-control" placeholder='State' name="state" value={profile.state} onChange={handleProfileChange} />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label>Zip Code:</label>
              <input type="text" className="form-control" placeholder='Zipcode' name="zipCode" value={profile.zipCode} onChange={handleProfileChange} />
            </div>
            <div className="col-md-4">
              <label>City:</label>
              <input type="text" className="form-control" placeholder='City' name="city" value={profile.city} onChange={handleProfileChange} />
            </div>
          </div>
          <div className='text-start'>          
            <button type="submit" className="btn text-white" style={{backgroundColor: '#352E5B'}}>Update Profile</button>
          </div>
        </form>

        <h5 className="text-start text-white p-2 mt-4" style={{backgroundColor: '#352E5B'}}>Set a Secure Password</h5>
        <form onSubmit={changePassword} className="text-start">
          <div className="row mb-3">
            <div className="col-md-4">
              <label>Current Password:</label>
              <input type="password" className="form-control" name="currentPassword" value={passwords.currentPassword} onChange={handlePasswordChange} />
            </div>
            <div className="col-md-4">
              <label>New Password:</label>
              <input type="password" className="form-control" name="newPassword" value={passwords.newPassword} onChange={handlePasswordChange} />
            </div>
            <div className="col-md-4">
              <label>Confirm Password:</label>
              <input type="password" className="form-control" name="confirmPassword" value={passwords.confirmPassword} onChange={handlePasswordChange} />
            </div>
          </div>
          <div className='text-start'>          
            <button type="submit" className="btn text-white" style={{backgroundColor: '#352E5B'}}>Change Password</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Settings;
