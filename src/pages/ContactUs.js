import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BiPhone, BiEnvelope, BiMap } from 'react-icons/bi';

const ContactUs = () => {
  const [selectedSubject, setSelectedSubject] = useState("general1");

  return (
    <div className='mt-5'>
      <h2 className="text-center text-warning">Contact Us</h2>
      <p className="text-center">Any question or remarks? Just write us a message!</p>

      <div className="row mt-4">
        <div className="col-lg-5 bg-dark text-white p-4 rounded">
          <h5>Contact Information</h5>
          <p>Say something to start a live chat!</p>
          <p><BiPhone /> +1 012 3456 789</p>
          <p><BiEnvelope /> demo@gmail.com</p>
          <p><BiMap /> 132 Dartmouth Street, Boston, MA 02156</p>
        </div>
        
        <div className="mt-5 col-lg-7 mt-5 mt-lg-5 mt-md-5">
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label text-start">First Name:</label>
                <input type="text" className="form-control" placeholder="First Name" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label text-start">Last Name:</label>
                <input type="text" className="form-control" placeholder="Last Name" />
              </div>
            </div>
            
            <div className="mb-3">
              <label className="form-label text-start">Email:</label>
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            
            <div className="mb-3">
              <label className="form-label text-start">Phone Number:</label>
              <input type="text" className="form-control" placeholder="Phone Number" />
            </div>
            
            <div className="mb-3">
              <label className="form-label text-start">Select Subject</label>
              <div className="d-flex flex-wrap gap-3">
                {["general1", "general2", "general3", "general4"].map((id, index) => (
                  <div className="form-check" key={id}>
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="subject" 
                      id={id} 
                      checked={selectedSubject === id} 
                      onChange={() => setSelectedSubject(id)} 
                    />
                    <label className="form-check-label" htmlFor={id}>General Inquiry {index + 1}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-3">
              <label className="form-label text-start">Message</label>
              <textarea className="form-control" rows="4" placeholder="Write your message..."></textarea>
            </div>
            
            <button type="submit" className="btn btn-dark w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
