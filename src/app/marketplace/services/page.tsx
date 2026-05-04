'use client';

import React from 'react';
import Link from 'next/link';

const services = [
  { id: 1, name: "Industrial Pilot Certification", type: "Training", description: "Comprehensive DGCA-aligned training for industrial drone operations.", img: "/hero.png", duration: "10 Days", price: "$450.00" },
  { id: 2, name: "Precision GIS Mapping", type: "Data Services", description: "High-accuracy photogrammetry and LiDAR data processing for construction and mining.", img: "/gis.png", duration: "Per Project", price: "Custom Quote" },
  { id: 3, name: "UAV Fleet Maintenance", type: "Support", description: "Scheduled maintenance and emergency repair services for industrial airframes.", img: "/manufacturing.png", duration: "Annual Contract", price: "$1,200.00/yr" },
  { id: 4, name: "AI Crop Analytics", type: "Software", description: "Autonomous health monitoring and yield prediction using multispectral data.", img: "/sensors.png", duration: "Subscription", price: "$89.00/mo" },
  { id: 5, name: "Heavy Lift Rental", type: "Rental", description: "Short-term leasing of industrial hexacopters for specialized logistics projects.", img: "/hexacopter.png", duration: "Weekly", price: "$950.00/wk" },
];

export default function ServicesPage() {
  return (
    <div className="services-page animate-fade">
      <section className="page-header">
        <div className="layout-container">
          <div className="breadcrumb">Marketplace &gt; Services</div>
          <h1>Industrial Services</h1>
          <p>Scale your operations with expert UAV services, from pilot training to advanced AI data analytics.</p>
        </div>
      </section>

      <section className="services-content layout-container">
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-img" style={{ backgroundImage: `url(${service.img})` }}>
                <div className="type-badge">{service.type}</div>
              </div>
              <div className="service-info">
                <h3>{service.name}</h3>
                <p className="desc">{service.description}</p>
                <div className="meta">
                  <div className="meta-item">
                    <span>Duration</span>
                    <strong>{service.duration}</strong>
                  </div>
                  <div className="meta-item">
                    <span>Starting from</span>
                    <strong className="price">{service.price}</strong>
                  </div>
                </div>
                <button className="book-btn">Book Service</button>
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
        .services-page { background: #000; color: #fff; min-height: 100vh; padding-bottom: 100px; }
        
        .page-header { 
          background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.95)), url('/gis.png') center/cover;
          padding: 100px 0 60px;
          border-bottom: 1px solid #222;
          text-align: center;
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
        .back-link-bottom:hover { background: #fff; transform: translateY(-5px); box-shadow: 0 10px 30px rgba(251,200,25,0.3); }

        .breadcrumb { font-size: 0.8rem; color: #fbc819; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 2px; }
        h1 { font-size: 3.5rem; font-weight: 900; margin-bottom: 20px; }
        .page-header p { color: #aaa; max-width: 700px; margin: 0 auto; font-size: 1.1rem; }

        .services-content { padding-top: 80px; }

        .services-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 30px; margin-bottom: 80px; }
        
        .service-card { background: #111; border: 1px solid #222; transition: all 0.3s ease; display: flex; flex-direction: column; }
        .service-card:hover { border-color: #fbc819; transform: translateY(-10px); }
        
        .service-img { height: 240px; background-size: cover; background-position: center; position: relative; }
        .type-badge { position: absolute; bottom: 0; left: 0; background: #fbc819; color: #000; font-size: 0.75rem; font-weight: 800; padding: 5px 15px; text-transform: uppercase; }
        
        .service-info { padding: 30px; display: flex; flex-direction: column; flex: 1; }
        .service-info h3 { font-size: 1.4rem; font-weight: 800; margin-bottom: 15px; color: #fff; }
        .desc { color: #888; font-size: 1rem; line-height: 1.6; margin-bottom: 25px; flex: 1; }
        
        .meta { display: flex; border-top: 1px solid #222; border-bottom: 1px solid #222; padding: 20px 0; margin-bottom: 30px; gap: 40px; }
        .meta-item { display: flex; flex-direction: column; gap: 5px; }
        .meta-item span { font-size: 0.7rem; text-transform: uppercase; color: #555; font-weight: 700; letter-spacing: 1px; }
        .meta-item strong { font-size: 1rem; color: #eee; }
        .price { color: #fbc819 !important; }

        .book-btn { background: #fff; color: #000; font-weight: 900; padding: 15px; font-size: 0.95rem; text-transform: uppercase; transition: all 0.3s ease; }
        .book-btn:hover { background: #fbc819; transform: scale(1.02); }

        .services-cta { 
          margin-top: 40px; padding: 60px; display: flex; align-items: center; justify-content: space-between;
          background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/hero.png') center/cover;
          border: 1px solid #222;
        }
        .cta-text h2 { font-size: 2.2rem; font-weight: 900; margin-bottom: 10px; }
        .cta-text p { color: #aaa; max-width: 600px; font-size: 1.1rem; }
        .consult-btn { background: #fbc819; color: #000; font-weight: 900; padding: 15px 40px; font-size: 1rem; text-transform: uppercase; }

        @media (max-width: 900px) {
          .services-cta { flex-direction: column; text-align: center; gap: 30px; padding: 40px 20px; }
          .cta-text h2 { font-size: 1.8rem; }
        }
      `}</style>
    </div>
  );
}
