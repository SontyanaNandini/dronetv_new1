'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const shows = [
    {
      name: 'Dubai Expo',
      date: '11–14 April, 2026',
      location: 'Dubai World Trade Centre',
      title: 'GLOBAL SOURCES DRONE EXPO MIDDLE EAST',
      description: "Connecting Global Manufacturers with Industrial Buyers in the World's Fastest Growing Markets! Showcasing the future of logistics and urban mobility.",
      image: '/hero.png',
      badge: 'Exhibitions 2026',
      sub: '11–14 April | Dubai World Trade Centre',
      city: 'Dubai, UAE'
    },
    {
      name: 'Bangalore Show',
      date: '18–21 April, 2026',
      location: 'BIEC, Bengaluru',
      title: 'INDIA DRONE & AEROSPACE SHOW 2026',
      description: "Join 500+ exhibitors in India's Silicon Valley. Discover the latest in agricultural drones, surveying technology, and indigenous UAV manufacturing.",
      image: '/manufacturing.png',
      badge: 'Premier Event',
      sub: '18–21 April | Bangalore International Exhibition Centre',
      city: 'Bengaluru, India'
    },
    {
      name: 'Hyderabad Expo',
      date: '27–30 April, 2026',
      location: 'HITEX, Hyderabad',
      title: 'HYDERABAD UAV & GIS TECHNOLOGY EXPO',
      description: "Focused on Geospatial Intelligence and Drone-as-a-Service. Meet verified suppliers of LiDAR, Photogrammetry, and AI-driven mapping solutions.",
      image: '/gis.png',
      badge: 'Tech Summit',
      sub: '27–30 April | HITEX Exhibition Center',
      city: 'Hyderabad, India'
    },
    {
      name: 'Saudi Arabia Show',
      date: 'Oct. 2026',
      location: 'Riyadh Exhibition Center',
      title: 'SAUDI VISION 2030 DRONE INNOVATION',
      description: "Exploring the frontier of autonomous systems in the Middle East. Specialized tracks for oil & gas inspection, smart city logistics, and security.",
      image: '/sensors.png',
      badge: 'Future Tech',
      sub: 'October 2026 | Riyadh International Convention',
      city: 'Riyadh, Saudi Arabia'
    },
  ];

  const activeShow = shows[activeTab];

  return (
    <section className="hero-section animate-fade">
      <div className="hero-tabs">
        {shows.map((tab, idx) => (
          <div 
            key={idx} 
            className={`hero-tab ${activeTab === idx ? 'active' : ''}`}
            onClick={() => setActiveTab(idx)}
          >
            <span className="tab-name">{tab.name}</span>
            <span className="tab-date">{tab.date}</span>
            {activeTab === idx && <div className="tab-indicator"></div>}
          </div>
        ))}
      </div>

      <div className="main-banner" style={{ backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%), url(${activeShow.image})` }}>
        <div className="banner-overlay"></div>
        <div className="banner-content key-content-animation" key={`content-${activeTab}`}>
          <div className="banner-badge">{activeShow.badge}</div>
          <div className="banner-sub">
            {activeShow.sub}
          </div>
          <div className="banner-loc">{activeShow.city}</div>
          <h2>{activeShow.title}</h2>
          <p>{activeShow.description}</p>
          <div className="banner-actions">
            <Link href="/register" className="banner-btn primary">
              Register Now
            </Link>
            <button className="banner-btn primary" onClick={() => setIsInfoModalOpen(true)}>
              Show Info
            </button>
          </div>
        </div>
      </div>

      {isInfoModalOpen && (
        <div className="info-modal-overlay" onClick={() => setIsInfoModalOpen(false)}>
          <div className="info-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setIsInfoModalOpen(false)}>×</button>
            <div className="modal-header">
              <span className="modal-badge">{activeShow.badge}</span>
              <h3>{activeShow.title}</h3>
            </div>
            <div className="modal-body">
              <img src={activeShow.image} alt={activeShow.title} className="modal-img" />
              <div className="modal-details">
                <p><strong>📍 Location:</strong> {activeShow.location}</p>
                <p><strong>📅 Date:</strong> {activeShow.date}</p>
                <p><strong>👥 Expected Attendees:</strong> 15,000+ Professionals</p>
                <p><strong>🏢 Exhibitors:</strong> 400+ Verified Suppliers</p>
                <div className="modal-desc">
                  {activeShow.description}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <Link href="/register" className="banner-btn primary" style={{textDecoration: 'none'}}>Register as Attendee</Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .hero-section {
          padding: 20px;
          background: #fff;
          height: 100%;
        }

        .hero-tabs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-bottom: 20px;
        }

        .hero-tab {
          padding: 15px;
          text-align: center;
          background: linear-gradient(to bottom, #ffffff 0%, #fffbeb 100%);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          gap: 4px;
          color: #333;
          border: 1px solid #f3e8ff; /* Subtle tint */
          position: relative;
          overflow: hidden;
        }

        .hero-tab:hover {
          background: #f0f0f0;
          border-color: #ddd;
          transform: translateY(-2px);
        }

        .hero-tab.active {
          background: #000;
          color: #fbc819;
          border-color: #000;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .tab-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: #fbc819;
        }

        .tab-name {
          font-weight: 800;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
        }

        .tab-date {
          font-size: 0.7rem;
          opacity: 0.7;
          font-weight: 600;
        }

        .main-banner {
          height: 420px;
          border-radius: 0;
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          padding: 50px;
          color: #fff;
          display: flex;
          align-items: center;
        }

        .banner-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
        }

        .key-content-animation {
          animation: slideUpFade 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .banner-badge {
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 15px;
          display: inline-block;
          border-bottom: 3px solid #fbc819;
          font-size: 0.75rem;
          color: #fbc819;
        }

        .banner-sub {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 8px;
          color: #fff;
        }

        .banner-loc {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: #fbc819;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .banner-loc::before {
          content: '📍';
        }

        h2 {
          font-size: 2.6rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 20px;
          text-transform: uppercase;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }

        p {
          font-size: 1.1rem;
          margin-bottom: 35px;
          opacity: 0.9;
          line-height: 1.5;
          max-width: 600px;
        }

        .banner-actions {
          display: flex;
          gap: 15px;
        }

        .banner-btn {
          padding: 12px 35px;
          font-weight: 800;
          font-size: 1rem;
          transition: all 0.3s ease;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: inherit;
        }

        a.banner-btn.primary,
        button.banner-btn.primary {
          background: #fbc819 !important;
          color: #000 !important;
          border: none;
        }

        .banner-btn.outline {
          background: transparent;
          border: 2px solid #fff;
          color: #fff;
        }

        .banner-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }

        a.banner-btn.primary:hover,
        button.banner-btn.primary:hover {
          background: #e5b617 !important;
          color: #000 !important;
        }

        @media (max-width: 900px) {
          .hero-tabs { grid-template-columns: 1fr 1fr; }
          h2 { font-size: 1.8rem; }
          .main-banner { padding: 30px; height: auto; min-height: 400px; }
        }

        .info-modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.8);
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          backdrop-filter: blur(5px);
        }

        .info-modal-content {
          background: #fff;
          width: 100%;
          max-width: 600px;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          animation: modalFadeIn 0.3s ease;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .close-modal {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(0,0,0,0.5);
          color: #fff;
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
        }

        .close-modal:hover {
          background: #fbc819;
          color: #000;
        }

        .modal-header {
          background: #111;
          color: #fff;
          padding: 25px;
        }

        .modal-badge {
          display: inline-block;
          background: #fbc819;
          color: #000;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 3px 8px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .modal-header h3 {
          font-size: 1.4rem;
          font-weight: 900;
          line-height: 1.3;
        }

        .modal-body {
          padding: 0;
        }

        .modal-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }

        .modal-details {
          padding: 25px;
        }

        .modal-details p {
          color: #333;
          margin-bottom: 10px;
          font-size: 0.95rem;
        }

        .modal-desc {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #eee;
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .modal-footer {
          padding: 20px 25px;
          background: #f8f8f8;
          border-top: 1px solid #eee;
          text-align: right;
        }
      `}</style>
    </section>
  );
};

export default Hero;
