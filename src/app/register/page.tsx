'use client';

import React from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="register-container layout-container">
      <div className="register-card animate-fade">
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>
        <div className="register-header">
          <h2>Create an Account</h2>
          <p>Join the world's leading industrial UAV marketplace</p>
        </div>
        
        <form className="register-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="First Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Last Name" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Work Email Address</label>
            <input type="email" id="email" placeholder="name@company.com" required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Create a password" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" placeholder="Confirm password" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="company">Company / Organization Name</label>
            <input type="text" id="company" placeholder="Enter your company name" required />
          </div>

          <div className="form-group">
            <label>Account Type</label>
            <div className="account-types">
              <label className="type-card">
                <input type="radio" name="accountType" value="buyer" defaultChecked />
                <div className="type-content">
                  <span className="type-title">Industrial Buyer</span>
                  <span className="type-desc">I want to source UAVs and services.</span>
                </div>
              </label>
              <label className="type-card">
                <input type="radio" name="accountType" value="supplier" />
                <div className="type-content">
                  <span className="type-title">Verified Supplier</span>
                  <span className="type-desc">I want to sell products on DroneTV.</span>
                </div>
              </label>
              <label className="type-card">
                <input type="radio" name="accountType" value="professional" />
                <div className="type-content">
                  <span className="type-title">Industry Professional</span>
                  <span className="type-desc">I am looking for news and networking.</span>
                </div>
              </label>
            </div>
          </div>
          
          <div className="form-options">
            <label className="terms">
              <input type="checkbox" required />
              <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</span>
            </label>
          </div>
          
          <button type="submit" className="submit-btn">Create Account</button>
        </form>
        
        <div className="register-footer">
          <p>Already have an account? <Link href="/login">Login here</Link></p>
        </div>
      </div>

      <style jsx>{`
        .register-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 80vh;
          padding: 60px 20px;
        }

        .register-card {
          background: #fff;
          width: 100%;
          max-width: 650px;
          padding: 40px;
          border-radius: 4px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          border-top: 4px solid #fbc819;
        }

        .register-header {
          text-align: center;
          margin-bottom: 30px;
          margin-top: 20px;
        }

        .back-link {
          display: inline-block;
          color: #666;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 700;
          transition: color 0.2s;
        }

        .back-link:hover {
          color: #fbc819;
        }

        .register-header h2 {
          font-size: 2.2rem;
          font-weight: 900;
          color: #000;
          margin-bottom: 10px;
        }

        .register-header p {
          color: #666;
          font-size: 1.05rem;
        }

        .register-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 0.9rem;
          font-weight: 700;
          color: #333;
        }

        .form-group input[type="text"],
        .form-group input[type="email"],
        .form-group input[type="password"] {
          padding: 12px 15px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          font-family: 'Inter', sans-serif;
          transition: all 0.3s ease;
        }

        .form-group input:focus {
          outline: none;
          border-color: #fbc819;
          box-shadow: 0 0 0 3px rgba(251, 200, 25, 0.2);
        }

        .account-types {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 15px;
        }

        .type-card {
          position: relative;
          cursor: pointer;
        }

        .type-card input {
          position: absolute;
          opacity: 0;
        }

        .type-content {
          border: 2px solid #ddd;
          border-radius: 4px;
          padding: 15px;
          height: 100%;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .type-card input:checked ~ .type-content {
          border-color: #fbc819;
          background: rgba(251, 200, 25, 0.05);
        }

        .type-title {
          font-weight: 800;
          font-size: 0.95rem;
          color: #000;
        }

        .type-desc {
          font-size: 0.75rem;
          color: #666;
          line-height: 1.4;
        }

        .form-options {
          margin-top: 10px;
        }

        .terms {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.85rem;
          color: #555;
          cursor: pointer;
          line-height: 1.4;
        }

        .terms input {
          margin-top: 3px;
        }

        .terms a {
          color: #fbc819;
          font-weight: 700;
          text-decoration: none;
        }

        .terms a:hover {
          text-decoration: underline;
        }

        .submit-btn {
          background: #000;
          color: #fff;
          padding: 16px;
          border: none;
          border-radius: 4px;
          font-size: 1.1rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 15px;
        }

        .submit-btn:hover {
          background: #fbc819;
          color: #000;
        }

        .register-footer {
          margin-top: 30px;
          text-align: center;
          font-size: 0.95rem;
          color: #666;
        }

        .register-footer a {
          color: #000;
          font-weight: 700;
          text-decoration: none;
          margin-left: 5px;
          border-bottom: 2px solid #fbc819;
        }

        .register-footer a:hover {
          color: #fbc819;
        }

        @media (max-width: 768px) {
          .form-row, .account-types {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
