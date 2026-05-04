'use client';

import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="login-container layout-container">
      <div className="login-card animate-fade">
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Login to your DroneTV account</p>
        </div>
        
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              required 
            />
          </div>
          
          <div className="form-group">
            <div className="password-header">
              <label htmlFor="password">Password</label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              required 
            />
          </div>
          
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
          </div>
          
          <button type="submit" className="submit-btn">Login</button>
        </form>
        
        <div className="login-footer">
          <p>Don't have an account? <Link href="/register">Register here</Link></p>
        </div>
      </div>

      <style jsx>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 80vh;
          padding: 40px 20px;
        }

        .login-card {
          background: #fff;
          width: 100%;
          max-width: 480px;
          padding: 40px;
          border-radius: 4px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          border-top: 4px solid #fbc819;
        }

        .login-header {
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

        .login-header h2 {
          font-size: 2rem;
          font-weight: 900;
          color: #000;
          margin-bottom: 10px;
        }

        .login-header p {
          color: #666;
          font-size: 1rem;
        }

        .login-form {
          display: flex;
          flex-direction: column;
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

        .password-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .forgot-password {
          font-size: 0.8rem;
          color: #fbc819;
          font-weight: 600;
          text-decoration: none;
        }

        .forgot-password:hover {
          text-decoration: underline;
        }

        .form-group input {
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

        .form-options {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .remember-me {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: #555;
          cursor: pointer;
        }

        .submit-btn {
          background: #000;
          color: #fff;
          padding: 14px;
          border: none;
          border-radius: 4px;
          font-size: 1.05rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
        }

        .submit-btn:hover {
          background: #fbc819;
          color: #000;
        }

        .login-footer {
          margin-top: 30px;
          text-align: center;
          font-size: 0.9rem;
          color: #666;
        }

        .login-footer a {
          color: #000;
          font-weight: 700;
          text-decoration: none;
          margin-left: 5px;
          border-bottom: 2px solid #fbc819;
        }

        .login-footer a:hover {
          color: #fbc819;
        }
      `}</style>
    </main>
  );
}
