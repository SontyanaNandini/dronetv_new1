'use client';

import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="contact-page animate-fade">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="layout-container">
          <h1>Contact Us</h1>
          <p>We're here to help and answer your questions.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-content layout-container">
        <div className="contact-grid">
          {/* Form Column */}
          <div className="form-column">
            <div className="contact-card rounded-24">
              <h2>Send a Message</h2>
              <form className="main-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label>Phone *</label>
                    <input type="tel" placeholder="Phone number" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" placeholder="Email address" required />
                </div>
                
                <div className="form-group">
                  <label>Message *</label>
                  <textarea placeholder="How can we help?" rows={3} required></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>

          {/* Info Column */}
          <div className="info-column">
            <div className="contact-card rounded-24 info-side">
              <h2>Get In Touch</h2>
              <div className="info-list">
                <div className="info-item">
                  <div className="info-icon small">✉️</div>
                  <div className="info-text">
                    <strong>Email</strong>
                    <span>bd@dronetv.in</span>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon small">📞</div>
                  <div className="info-text">
                    <strong>Phone</strong>
                    <span>+91 7520123555</span>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon small">📍</div>
                  <div className="info-text">
                    <strong>Location</strong>
                    <span>White Waters, Shaikpet, Hyderabad, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-card rounded-24 social-side">
              <div className="social-links-row">
                <div className="social-circle">in</div>
                <div className="social-circle">yt</div>
                <div className="social-circle">tw</div>
                <div className="social-circle">ig</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-nav">
          <Link href="/" className="back-pill-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span>Back</span>
          </Link>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          background: #fbc819;
          min-height: 100vh;
          padding-bottom: 80px;
        }

        .contact-hero {
          padding: 30px 0 10px;
          text-align: center;
        }

        .contact-hero h1 {
          font-size: 2.2rem;
          font-weight: 900;
          color: #000;
          margin-bottom: 5px;
          letter-spacing: -1.5px;
        }

        .contact-hero p {
          font-size: 0.95rem;
          color: #333;
          font-weight: 600;
        }

        .contact-content {
          margin-top: 10px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 20px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-card {
          background: #fef3c7;
          padding: 25px;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }

        .contact-card h2 {
          font-size: 1.2rem;
          font-weight: 900;
          color: #000;
          margin-bottom: 20px;
        }

        .main-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.7rem;
          font-weight: 800;
          color: #000;
          text-transform: uppercase;
          opacity: 0.6;
        }

        .form-group input, .form-group textarea {
          width: 100%;
          padding: 10px 15px;
          border-radius: 8px;
          border: 1px solid rgba(0,0,0,0.1);
          background: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.3s;
        }

        .form-group textarea { resize: none; }

        .submit-btn {
          background: #000;
          color: #fff;
          padding: 12px;
          border: none;
          border-radius: 8px;
          font-weight: 900;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s;
        }

        .submit-btn:hover { background: #333; }

        .info-side {
          margin-bottom: 20px;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .info-item {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .info-icon.small {
          width: 35px;
          height: 35px;
          background: #fbc819;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          border: 1px solid rgba(0,0,0,0.1);
          flex-shrink: 0;
        }

        .info-text {
          display: flex;
          flex-direction: column;
        }

        .info-text strong { font-size: 0.75rem; font-weight: 900; color: #000; }
        .info-text span { font-size: 0.8rem; font-weight: 600; color: #444; }

        .social-side {
          padding: 15px 25px;
        }

        .social-links-row {
          display: flex;
          gap: 10px;
          justify-content: center;
        }

        .social-circle {
          width: 32px;
          height: 32px;
          background: #000;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 0.7rem;
          cursor: pointer;
          transition: all 0.3s;
        }

        .social-circle:hover {
          background: #fbc819;
          color: #000;
          transform: scale(1.1);
        }

        .rounded-24 { border-radius: 24px; }

        .bottom-nav { margin-top: 60px; display: flex; justify-content: center; }
        
        .back-pill-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #000;
          border: 3px solid #fbc819;
          padding: 12px 50px;
          border-radius: 100px;
          color: #fbc819;
          text-decoration: none;
          font-weight: 900;
          font-size: 1.8rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .back-pill-btn:hover { background: #fbc819; color: #000; transform: scale(1.05); }
        .back-pill-btn:hover svg { stroke: #000; }

        @media (max-width: 1000px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
