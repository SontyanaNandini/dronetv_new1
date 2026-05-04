'use client';

import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="contact-page animate-fade">
      <section className="contact-hero">
        <div className="layout-container">
          <div className="hero-badge">Industrial Support</div>
          <h1>Get in Touch</h1>
          <p>Connecting you to the global drone industry. Our team of specialists is here to assist with your sourcing, technical, and business inquiries.</p>
        </div>
      </section>

      <section className="contact-content layout-container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h3>Global Headquarters</h3>
                <p>BIEC, 10th Mile, Tumkur Road<br/>Bengaluru, Karnataka 560073, India</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <div className="info-text">
                <h3>Support Hotline</h3>
                <p>+91 (80) 1234-5678<br/>Mon - Fri: 9:00 AM - 6:00 PM IST</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div className="info-text">
                <h3>Email Inquiries</h3>
                <p>General: info@dronetv.in<br/>Partnerships: partners@dronetv.in</p>
              </div>
            </div>

            <div className="social-connect">
              <h4>Industry Network</h4>
              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">YouTube</a>
              </div>
            </div>

            <div className="office-status">
              <span className="status-dot active"></span>
              <span className="status-text">Support Team Online</span>
            </div>
          </div>

          <div className="form-container">
            <form className="contact-form glass-card">
              <div className="form-header">
                <h2>Direct Message</h2>
                <p>Fill out the form below and a representative will contact you within 24 hours.</p>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="e.g. John Doe" required />
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input type="text" placeholder="e.g. UAV Tech Ltd." />
                </div>
              </div>
              <div className="form-group">
                <label>Business Email</label>
                <input type="email" placeholder="e.g. john@company.com" required />
              </div>
              <div className="form-group">
                <label>Inquiry Type</label>
                <select>
                  <option>Sourcing Inquiry</option>
                  <option>Exhibition Information</option>
                  <option>Partnership Proposal</option>
                  <option>Technical Support</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Please describe your requirements in detail..." rows={5} required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Inquiry 
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </button>
            </form>
          </div>
        </div>
        <div className="bottom-nav">
          <Link href="/" className="back-link-bottom">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Return to Home Portal
          </Link>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          background: #000;
          color: #fff;
          min-height: 100vh;
          padding-bottom: 100px;
        }

        .contact-hero {
          background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.95)), url('/hero.png') center/cover;
          padding: 140px 0 80px;
          text-align: center;
          border-bottom: 2px solid #fbc819;
        }


        .bottom-nav { 
          margin-top: 80px; padding-top: 40px; border-top: 1px solid #222; 
          display: flex; justify-content: center; 
        }
        .back-link-bottom { 
          display: flex; align-items: center; gap: 12px; color: #000; 
          background: #fbc819; padding: 15px 40px; font-weight: 900; 
          text-transform: uppercase; transition: all 0.3s ease;
        }
        .back-link-bottom:hover { background: #fff; transform: translateY(-5px); box-shadow: 0 10px 30px rgba(251, 200, 25, 0.3); }

        .hero-badge {
          background: #fbc819;
          color: #000;
          display: inline-block;
          padding: 6px 15px;
          font-weight: 800;
          font-size: 0.75rem;
          text-transform: uppercase;
          margin-bottom: 20px;
          letter-spacing: 1px;
        }

        .contact-hero h1 {
          font-size: 4rem;
          font-weight: 900;
          margin-bottom: 25px;
          color: #fff;
          letter-spacing: -2px;
        }

        .contact-hero p {
          font-size: 1.25rem;
          max-width: 800px;
          margin: 0 auto;
          color: #aaa;
          line-height: 1.6;
        }

        .contact-content {
          padding-top: 80px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 80px;
          align-items: start;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 45px;
        }

        .info-card {
          display: flex;
          gap: 25px;
          transition: transform 0.3s ease;
        }

        .info-card:hover {
          transform: translateX(10px);
        }

        .info-icon {
          font-size: 1.8rem;
          background: rgba(251, 200, 25, 0.1);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fbc819;
          border: 1px solid rgba(251, 200, 25, 0.2);
        }

        .info-text h3 {
          font-size: 1.2rem;
          font-weight: 800;
          color: #fbc819;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .info-text p {
          color: #999;
          font-size: 1rem;
          line-height: 1.6;
        }

        .social-connect h4 {
          margin-bottom: 20px;
          text-transform: uppercase;
          font-size: 0.85rem;
          color: #555;
          letter-spacing: 2px;
          font-weight: 800;
        }

        .social-links {
          display: flex;
          gap: 25px;
        }

        .social-link {
          color: #fff;
          font-weight: 700;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .social-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #fbc819;
          transition: width 0.3s ease;
        }

        .social-link:hover {
          color: #fbc819;
        }

        .social-link:hover::after {
          width: 100%;
        }

        .office-status {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.03);
          padding: 10px 20px;
          width: fit-content;
          border: 1px solid #222;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #4CAF50;
          border-radius: 50%;
          box-shadow: 0 0 10px #4CAF50;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }

        .status-text {
          font-size: 0.85rem;
          font-weight: 700;
          color: #888;
        }

        .form-container {
          background: #111;
          padding: 50px;
          border: 1px solid #222;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
        }

        .form-header {
          margin-bottom: 40px;
        }

        .form-header h2 {
          font-size: 2rem;
          font-weight: 900;
          color: #fff;
          margin-bottom: 10px;
        }

        .form-header p {
          color: #777;
          font-size: 1rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .form-group label {
          font-size: 0.8rem;
          font-weight: 800;
          color: #fbc819;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .form-group input, .form-group select, .form-group textarea {
          background: #000;
          border: 1px solid #333;
          padding: 15px;
          color: #fff;
          font-size: 1rem;
          border-radius: 0;
          outline: none;
          transition: all 0.3s ease;
        }

        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          border-color: #fbc819;
          background: #050505;
          box-shadow: 0 0 15px rgba(251, 200, 25, 0.1);
        }

        .submit-btn {
          background: #fbc819;
          color: #000;
          padding: 18px;
          font-weight: 900;
          font-size: 1rem;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: 10px;
        }

        .submit-btn:hover {
          background: #fff;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(251, 200, 25, 0.3);
        }

        @media (max-width: 1100px) {
          .contact-grid { grid-template-columns: 1fr; gap: 60px; }
          .form-container { padding: 30px; }
        }

        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr; }
          .contact-hero h1 { font-size: 2.8rem; }
        }
      `}</style>
    </div>
  );
}
