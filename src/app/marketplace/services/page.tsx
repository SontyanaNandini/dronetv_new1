'use client';

import React from 'react';
import Link from 'next/link';

const services = [
  { id: 1, name: "Ai tools Development", type: "Machine Learning Services", company: "IPAGE UMS", description: "We give you the solution for the business you are in like how you should apply ai in your workflow.", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800", rating: "4.6", location: "India", tags: ["Custom AI Tool Development", "Workflow Integration"] },
  { id: 2, name: "AI Calling, AI Technology, AI Development", type: "Artificial Intelligence Services", company: "RUDRAVEGA AI LABS PRIVATE LIMITED", description: "AI for Sales & Marketing. Cutting edge voice synthesis and autonomous lead generation.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800", rating: "4.7", location: "India", tags: ["Feature 1", "Feature 2", "+2"] },
  { id: 3, name: "Simulator Software Development", type: "Drone Training & Education", company: "IPAGE INFOTECH PVT LTD", description: "We develop all types of drone simulators which are useful for real life based applications.", img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800", rating: "4.0", location: "India", tags: ["Real-life Scenario Simulation", "Advanced Flight Control"] },
  { id: 4, name: "Precision GIS Mapping", type: "Data Services", company: "GIS GLOBAL CORP", description: "High-accuracy photogrammetry and LiDAR data processing for construction and mining.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", rating: "4.8", location: "India", tags: ["LiDAR Analysis", "3D Modeling"] },
  { id: 5, name: "UAV Fleet Maintenance", type: "Support", company: "DRONECARE SYSTEMS", description: "Scheduled maintenance and emergency repair services for industrial airframes.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800", rating: "4.5", location: "India", tags: ["Annual Contract", "Spare Parts"] },
];

export default function ServicesPage() {
  return (
    <div className="services-page animate-fade">
      <section className="page-header">
        <div className="layout-container">
          <div className="breadcrumb">Marketplace &gt; Services</div>
          <h1>All Services (95)</h1>
          <p>Scale your operations with expert UAV services, from pilot training to advanced AI data analytics.</p>
        </div>
      </section>

      <section className="services-content layout-container">
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-img-wrapper">
                <div className="service-img" style={{ backgroundImage: `url(${service.img})` }}>
                  <div className="type-badge">{service.type}</div>
                </div>
              </div>
              <div className="service-info">
                <h3>{service.name}</h3>
                <div className="company-info">
                  <span>🏢 {service.company}</span>
                </div>
                <p className="desc">{service.description}</p>
                <div className="rating-loc">
                  <div className="rating">⭐ {service.rating}</div>
                  <div className="loc">📍 {service.location}</div>
                </div>
                <div className="tags-row">
                  {service.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta glass-card">
          <div className="cta-text">
            <h2>Custom Solutions for Enterprises</h2>
            <p>Need a tailored UAV service package? Our consultants will design a solution specifically for your industry needs.</p>
          </div>
          <button className="consult-btn">Talk to an Expert</button>
        </div>
        <div className="bottom-nav">
          <Link href="/" className="back-link-bottom">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Return to Home Portal
          </Link>
        </div>
      </section>

      <style jsx>{`
        .services-page { background: transparent; color: #000; min-height: 100vh; padding-bottom: 100px; }
        
        .page-header { 
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('/gis.png') center/cover;
          padding: 40px 0 30px;
          border-bottom: 1px solid #222;
          text-align: center;
          color: #fff;
        }

        .bottom-nav { margin-top: 60px; display: flex; justify-content: center; }
        .back-link-bottom { 
          display: flex; 
          align-items: center; 
          gap: 15px; 
          color: #000; 
          border: 1.5px solid rgba(0, 0, 0, 1); 
          padding: 12px 30px; 
          font-weight: 800; 
          font-size: 0.85rem; 
          text-transform: uppercase; 
          letter-spacing: 1px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 12px;
          text-decoration: none;
        }
        .back-link-bottom svg { transition: transform 0.3s ease; }
        .back-link-bottom:hover { 
          background: #000; 
          color: #fbc819; 
          border-color: #fbc819;
          transform: translateY(-5px); 
          box-shadow: 0 10px 30px rgba(251, 200, 25, 0.25); 
        }
        .back-link-bottom:hover svg { transform: translateX(-5px); }

        .breadcrumb { font-size: 0.75rem; color: #fbc819; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 2px; font-weight: 800; }
        h1 { font-size: 2.2rem; font-weight: 900; margin-bottom: 12px; color: #fff; }
        .page-header p { color: #eee; max-width: 700px; margin: 0 auto; font-size: 0.95rem; font-weight: 500; }

        .services-content { padding-top: 40px; }

        .services-grid { 
          display: grid; 
          grid-template-columns: repeat(4, 1fr); 
          gap: 20px; 
          margin-bottom: 80px; 
        }
        
        .service-card { 
          background: #fff; 
          border: 1px solid #eee; 
          transition: all 0.3s ease; 
          display: flex; 
          flex-direction: column; 
          border-radius: 24px; 
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        .service-card:hover { 
          transform: translateY(-10px); 
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        
        .service-img-wrapper {
          padding: 12px;
          width: 100%;
        }

        .service-img { 
          height: 160px; 
          background-size: cover; 
          background-position: center; 
          position: relative; 
          border-radius: 16px;
          overflow: hidden;
        }
        
        .type-badge { 
          position: absolute; 
          top: 12px; 
          right: 12px; 
          background: rgba(0,0,0,0.7); 
          color: #fff; 
          font-size: 0.65rem; 
          font-weight: 800; 
          padding: 6px 15px; 
          text-transform: uppercase; 
          border-radius: 20px;
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .type-badge::before {
          content: '🤖';
          font-size: 0.8rem;
        }
        
        .service-info { padding: 0 16px 16px; display: flex; flex-direction: column; flex: 1; }
        
        .service-info h3 { 
          font-size: 1.1rem; 
          font-weight: 900; 
          margin-bottom: 6px; 
          color: #000; 
          line-height: 1.3;
        }

        .company-info {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 12px;
        }
        .company-info span {
          font-size: 0.8rem;
          font-weight: 700;
          color: #666;
          text-transform: uppercase;
        }

        .desc { 
          color: #555; 
          font-size: 0.95rem; 
          line-height: 1.5; 
          margin-bottom: 20px; 
          flex: 1; 
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .rating-loc {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .rating {
          background: #fff9e6;
          color: #d97706;
          font-size: 0.75rem;
          font-weight: 900;
          padding: 4px 10px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .loc {
          font-size: 0.75rem;
          color: #888;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag {
          background: #f3f4f6;
          color: #4b5563;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 6px 12px;
          border-radius: 6px;
          text-transform: uppercase;
        }

        .services-cta { 
          margin-top: 40px; padding: 60px; display: flex; align-items: center; justify-content: space-between;
          background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/hero.png') center/cover;
          border-radius: 24px;
          border: 1px solid #222;
        }
        .cta-text h2 { font-size: 2.2rem; font-weight: 900; margin-bottom: 10px; color: #fff; }
        .cta-text p { color: #eee; max-width: 600px; font-size: 1.1rem; }
        .consult-btn { background: #fbc819; color: #000; font-weight: 900; padding: 15px 40px; font-size: 1rem; text-transform: uppercase; border-radius: 12px; }

        @media (max-width: 1100px) {
          .services-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr; }
          h1 { font-size: 2.5rem; }
          .services-cta { flex-direction: column; text-align: center; gap: 30px; padding: 40px 20px; }
          .cta-text h2 { font-size: 1.8rem; }
        }
      `}</style>
    </div>
  );
}
