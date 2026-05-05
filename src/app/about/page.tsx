'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="about-page animate-fade">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="layout-container">
          <h1>About Drone TV</h1>
          <p>Driving the future of drones through education and innovation.</p>
          <div className="title-underline"></div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision layout-container">
        <div className="mv-grid">
          <div className="mv-left">
            <div className="info-card rounded-24 animate-slide">
              <div className="card-header-row">
                <div className="icon-circle">🎯</div>
                <h2>Our Mission</h2>
              </div>
              <p>To bring every sector of the drone industry together on one unified platform Drone TV. We aim to offer new innovators a prominent space to showcase their ideas, deliver expert content from drone companies, and present in-depth insights from drone enthusiasts, industry speakers, and tech visionaries.</p>
            </div>
            
            <div className="info-card rounded-24 animate-slide delay-100">
              <div className="card-header-row">
                <div className="icon-circle">👁️</div>
                <h2>Our Vision</h2>
              </div>
              <p>To become the definitive global platform for showcasing drone innovation where every drone enthusiast, creator, and company has a voice. We envision a future where Drone TV stands as the trusted source for all things drones: from new technologies and regulatory updates to stories of impact across the globe.</p>
            </div>
          </div>
          
          <div className="mv-right">
            <div className="brand-card rounded-24 animate-fade delay-200">
              <div className="brand-logo-area">
                <div className="logo-placeholder">
                  <span className="logo-icon">🚁</span>
                  <div className="logo-text">
                    <strong>Drone<span>Tv</span></strong>
                    <small>VOICE OF DRONE TECHNOLOGY</small>
                  </div>
                </div>
              </div>
              <div className="brand-content">
                <h3>Shaping Tomorrow's Technology</h3>
                <p>Through comprehensive education and industry partnerships, we're building the foundation for the next generation of drone innovations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="founder-message layout-container">
        <div className="founder-card rounded-24">
          <div className="founder-grid">
            <div className="founder-photo-area">
              <div className="photo-circle">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" alt="Founder" />
                <div className="heart-badge">❤️</div>
              </div>
            </div>
            <div className="founder-content">
              <h2>A Message from Our Founder</h2>
              <p>Drone TV was created to unify the drone ecosystem a platform that educates, connects, and empowers. With experience across training, services, and simulation, I saw the urgent need for a media space that truly reflects the pulse of this fast-growing industry.</p>
              <p>What began in February 2024 as an idea became reality in 2025 with live event coverage, expert interviews, and community-driven storytelling. Today, Drone TV stands as a voice for innovators and drone professionals nationwide.</p>
              <p>Drone TV continues that journey showcasing how drones are transforming industries and lives.</p>
              <div className="founder-quote">We're not just documenting the future we're helping build it.</div>
              
              <div className="founder-id">
                <strong>Dev R</strong>
                <span>Founder & CEO, Drone TV</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="our-journey layout-container">
        <div className="section-header-centered">
          <h2>Our Journey</h2>
          <p>The milestones that shaped the voice of drone technology</p>
        </div>
        
        <div className="journey-timeline">
          <div className="timeline-item">
            <div className="time-marker">Feb 2024</div>
            <div className="time-content">
              <h4>The Vision</h4>
              <p>Drone TV conceived as a unified media space for the UAV ecosystem.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="time-marker">Aug 2024</div>
            <div className="time-content">
              <h4>First Broadcast</h4>
              <p>Launched our first industry deep-dive series and expert interviews.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="time-marker">Jan 2025</div>
            <div className="time-content">
              <h4>B2B Marketplace</h4>
              <p>Integrated the sourcing portal to connect global manufacturers with buyers.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="time-marker">Present</div>
            <div className="time-content">
              <h4>The Ecosystem</h4>
              <p>Leading the drone industry dialogue with verified directories and global events.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section layout-container">
        <div className="section-header-centered">
          <h2>Meet Our Team</h2>
          <p>The passionate individuals behind Drone TV's mission to democratize drone technology education</p>
        </div>
        
        <div className="team-grid">
          <div className="team-card rounded-24">
            <div className="team-photo">SC</div>
            <h3>Sarah Chen</h3>
            <span>CTO</span>
          </div>
          <div className="team-card rounded-24">
            <div className="team-photo">RK</div>
            <h3>Rajesh Kumar</h3>
            <span>Head of Content</span>
          </div>
          <div className="team-card rounded-24">
            <div className="team-photo">AD</div>
            <h3>Anita Desai</h3>
            <span>Operations Manager</span>
          </div>
          <div className="team-card rounded-24">
            <div className="team-photo">MV</div>
            <h3>Michael Vance</h3>
            <span>Strategic Partnerships</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="join-mission">
        <div className="layout-container">
          <div className="cta-box rounded-24">
            <h2>Ready to Join Our Mission?</h2>
            <p>Become a part of the global drone ecosystem today.</p>
            <div className="cta-btns">
              <Link href="/register" className="cta-primary">Get Started</Link>
              <Link href="/contact" className="cta-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-page {
          background: #fbc819;
          min-height: 100vh;
          padding-bottom: 100px;
        }

        .about-hero {
          padding: 30px 0 20px;
          text-align: center;
        }

        .about-hero h1 {
          font-size: 2.8rem;
          font-weight: 900;
          color: #000;
          margin-bottom: 5px;
          letter-spacing: -1.5px;
        }

        .about-hero p {
          font-size: 0.95rem;
          color: #333;
          font-weight: 600;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background: #000;
          margin: 20px auto 0;
          border-radius: 2px;
        }

        .mv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 40px;
        }

        .info-card {
          background: #fef3c7;
          padding: 30px;
          margin-bottom: 30px;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        }

        .card-header-row {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .icon-circle {
          width: 45px;
          height: 45px;
          background: #fbc819;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          border: 2px solid #000;
        }

        .info-card h2 {
          font-size: 1.5rem;
          font-weight: 900;
          color: #000;
        }

        .info-card p {
          font-size: 0.95rem;
          color: #444;
          line-height: 1.6;
          font-weight: 500;
        }

        .brand-card {
          background: #fef3c7;
          height: 100%;
          padding: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        }

        .brand-logo-area {
          margin-bottom: 30px;
        }

        .logo-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .logo-icon { font-size: 4rem; }
        .logo-text { line-height: 1; }
        .logo-text strong { font-size: 2.5rem; font-weight: 900; }
        .logo-text span { color: #ef4444; }
        .logo-text small { display: block; font-size: 0.7rem; font-weight: 800; letter-spacing: 1px; color: #666; }

        .brand-content h3 {
          font-size: 1.5rem;
          font-weight: 900;
          margin-bottom: 15px;
        }

        .brand-content p {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.6;
        }

        .founder-message {
          margin-top: 60px;
        }

        .founder-card {
          background: #fef3c7;
          padding: 60px;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .founder-grid {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 60px;
          align-items: center;
        }

        .photo-circle {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          border: 5px solid #fbc819;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }

        .photo-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .heart-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          width: 50px;
          height: 50px;
          background: #fbc819;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          border: 3px solid #fef3c7;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }

        .founder-content h2 {
          font-size: 2.2rem;
          font-weight: 900;
          margin-bottom: 25px;
        }

        .founder-content p {
          font-size: 1rem;
          color: #444;
          line-height: 1.6;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .founder-quote {
          font-size: 1.1rem;
          font-weight: 800;
          color: #000;
          margin-top: 30px;
          padding-left: 20px;
          border-left: 4px solid #fbc819;
        }

        .founder-id {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
        }

        .founder-id strong { font-size: 1.2rem; font-weight: 900; }
        .founder-id span { font-size: 0.85rem; font-weight: 700; color: #666; }

        .section-header-centered {
          text-align: center;
          margin: 80px 0 50px;
        }

        .section-header-centered h2 {
          font-size: 2.5rem;
          font-weight: 900;
          margin-bottom: 10px;
        }

        .section-header-centered p {
          font-size: 1rem;
          color: #444;
          font-weight: 600;
        }

        .journey-timeline {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }

        .journey-timeline::before {
          content: '';
          position: absolute;
          left: 50%; top: 0; bottom: 0;
          width: 2px; background: #000;
          opacity: 0.1;
        }

        .timeline-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          width: 100%;
        }

        .time-marker {
          width: 120px;
          background: #000;
          color: #fff;
          padding: 8px;
          border-radius: 8px;
          text-align: center;
          font-weight: 800;
          font-size: 0.8rem;
        }

        .time-content {
          width: 600px;
          background: #fef3c7;
          padding: 20px;
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .time-content h4 { font-weight: 900; font-size: 1.1rem; margin-bottom: 5px; }
        .time-content p { font-size: 0.9rem; color: #555; }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .team-card {
          background: #fef3c7;
          padding: 30px;
          text-align: center;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .team-photo {
          width: 80px;
          height: 80px;
          background: #fbc819;
          border-radius: 50%;
          margin: 0 auto 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 900;
          border: 2px solid #000;
        }

        .team-card h3 { font-size: 1.1rem; font-weight: 900; margin-bottom: 4px; }
        .team-card span { font-size: 0.8rem; color: #666; font-weight: 700; text-transform: uppercase; }

        .join-mission {
          margin-top: 100px;
        }

        .cta-box {
          background: #000;
          color: #fff;
          padding: 60px;
          text-align: center;
        }

        .cta-box h2 {
          font-size: 2.5rem;
          font-weight: 900;
          margin-bottom: 15px;
          color: #fbc819;
        }

        .cta-box p {
          font-size: 1.2rem;
          color: #aaa;
          margin-bottom: 35px;
        }

        .cta-btns {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .cta-primary {
          background: #fbc819;
          color: #000;
          padding: 15px 40px;
          border-radius: 8px;
          font-weight: 900;
          transition: all 0.3s;
        }

        .cta-secondary {
          border: 2px solid #fff;
          color: #fff;
          padding: 15px 40px;
          border-radius: 8px;
          font-weight: 800;
          transition: all 0.3s;
        }

        .cta-primary:hover { transform: scale(1.05); background: #fff; }
        .cta-secondary:hover { background: #fff; color: #000; }

        .rounded-24 { border-radius: 24px; }

        @media (max-width: 1000px) {
          .mv-grid, .founder-grid { grid-template-columns: 1fr; }
          .founder-photo-area { display: flex; justify-content: center; }
          .team-grid { grid-template-columns: repeat(2, 1fr); }
          .timeline-item { flex-direction: column; gap: 20px; align-items: flex-start; }
          .time-content { width: 100%; }
        }
      `}</style>
    </div>
  );
}
