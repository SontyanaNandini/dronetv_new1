'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="about-page animate-fade">
      <section className="about-hero">
        <div className="layout-container">
          <div className="breadcrumb">Resources &gt; About Us</div>
          <h1>Empowering the Future of Autonomous Intelligence</h1>
          <p>DroneTV is the world's leading B2B marketplace and ecosystem platform dedicated to the UAV and autonomous systems industry.</p>
        </div>
      </section>

      <section className="about-content layout-container">
        <div className="mission-grid">
          <div className="mission-card">
            <h2>Our Mission</h2>
            <p>To bridge the gap between global manufacturers and enterprise buyers, accelerating the adoption of drone technology across critical industries like agriculture, defense, and infrastructure.</p>
          </div>
          <div className="vision-card">
            <h2>Our Vision</h2>
            <p>A world where autonomous systems seamlessly integrate into daily operations, enhancing safety, efficiency, and sustainability on a global scale.</p>
          </div>
        </div>

        <div className="stats-container glass-card">
          <div className="stat-item">
            <strong>500+</strong>
            <span>Verified Suppliers</span>
          </div>
          <div className="stat-item">
            <strong>120+</strong>
            <span>Countries Reached</span>
          </div>
          <div className="stat-item">
            <strong>10k+</strong>
            <span>UAV Solutions</span>
          </div>
          <div className="stat-item">
            <strong>24/7</strong>
            <span>Global Support</span>
          </div>
        </div>

        <div className="team-section">
          <h2>Our Leadership</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar"></div>
              <h3>Vikram Singh</h3>
              <p>Founder & CEO. Aerospace engineer with 20 years in defense technology.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar"></div>
              <h3>Elena Rodriguez</h3>
              <p>Chief Strategy Officer. Expert in global supply chain and B2B commerce.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar"></div>
              <h3>David Chen</h3>
              <p>Head of AI Research. Pioneer in autonomous swarm intelligence.</p>
            </div>
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
        .about-page { background: #000; color: #fff; min-height: 100vh; padding-bottom: 100px; }
        .about-hero { 
          background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.95)), url('/manufacturing.png') center/cover;
          padding: 120px 0 60px; border-bottom: 2px solid #fbc819; text-align: center;
        }
        .breadcrumb { font-size: 0.8rem; color: #fbc819; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 2px; }
        h1 { font-size: 3.5rem; font-weight: 900; margin-bottom: 20px; letter-spacing: -1px; }
        .about-hero p { font-size: 1.2rem; color: #aaa; max-width: 800px; margin: 0 auto; }

        .about-content { padding-top: 80px; }
        .mission-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 80px; }
        .mission-card, .vision-card { padding: 40px; border: 1px solid #222; background: #0a0a0a; }
        .mission-card h2, .vision-card h2 { color: #fbc819; font-size: 1.8rem; margin-bottom: 20px; text-transform: uppercase; }
        .mission-card p, .vision-card p { font-size: 1.1rem; color: #888; line-height: 1.6; }

        .stats-container { display: flex; justify-content: space-around; padding: 60px; margin-bottom: 80px; border: 1px solid #222; }
        .stat-item { text-align: center; }
        .stat-item strong { display: block; font-size: 3rem; color: #fbc819; font-weight: 900; margin-bottom: 10px; }
        .stat-item span { font-size: 0.9rem; color: #666; text-transform: uppercase; font-weight: 700; letter-spacing: 1px; }

        .team-section h2 { text-align: center; font-size: 2.5rem; font-weight: 900; margin-bottom: 50px; }
        .team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
        .team-card { text-align: center; border: 1px solid #111; padding: 30px; transition: border-color 0.3s ease; }
        .team-card:hover { border-color: #fbc819; }
        .team-avatar { width: 120px; height: 120px; background: #1a1a1a; margin: 0 auto 20px; border-radius: 50%; border: 2px solid #222; }
        .team-card h3 { font-size: 1.4rem; color: #fff; margin-bottom: 10px; }
        .team-card p { font-size: 0.9rem; color: #666; line-height: 1.5; }

        .bottom-nav { margin-top: 100px; padding-top: 40px; border-top: 1px solid #222; display: flex; justify-content: center; }
        .back-link-bottom { 
          display: flex; align-items: center; gap: 12px; color: #000; 
          background: #fbc819; padding: 15px 40px; font-weight: 900; 
          text-transform: uppercase; transition: all 0.3s ease;
        }
        .back-link-bottom:hover { background: #fff; transform: translateY(-5px); box-shadow: 0 10px 30px rgba(251,200,25,0.3); }

        @media (max-width: 800px) {
          .mission-grid, .team-grid { grid-template-columns: 1fr; }
          .stats-container { flex-direction: column; gap: 40px; }
        }
      `}</style>
    </div>
  );
}
