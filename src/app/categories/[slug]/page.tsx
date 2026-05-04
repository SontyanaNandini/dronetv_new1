'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const categoryData: Record<string, any> = {
  'drones-uav': { title: 'Drones & UAV', desc: 'Enterprise-grade industrial drones for mapping, defense, and logistics.', items: ['Heavy Lift Hexacopter', 'VTOL Fixed Wing', 'Tactical Nano Drone', 'Agricultural Sprayer'] },
  'services-training': { title: 'Services & Training', desc: 'Professional UAV pilot certification and industrial inspection services.', items: ['DGCA Certification', 'LiDAR Surveying', 'Powerline Inspection', 'Thermal Mapping'] },
  'ai-solutions': { title: 'AI Solutions', desc: 'Autonomous navigation and computer vision software for intelligent flight.', items: ['Obstacle Avoidance SDK', 'Swarm Control AI', 'Target Tracking System', 'Predictive Maintenance'] },
  'gis-gnss': { title: 'GIS & GNSS', desc: 'High-precision positioning and geospatial data solutions.', items: ['RTK/PPK Kits', 'LiDAR Scanners', 'Photogrammetry Software', 'Satellite Positioning'] },
  'sensors': { title: 'Sensors', desc: 'Multispectral, thermal, and optical payloads for specialized data collection.', items: ['Hyperspectral Camera', 'Thermal Imaging Core', 'High-Res RGB Sensor', 'Gas Detection Payload'] },
  'components': { title: 'Components', desc: 'Essential hardware including motors, ESCs, and flight controllers.', items: ['Brushless Motors', 'Carbon Fiber Props', 'Industrial ESCs', 'Flight Controllers'] },
  'software': { title: 'Software', desc: 'Mission planning, fleet management, and post-processing tools.', items: ['Mission Planner Pro', 'Fleet Management Hub', 'Cloud Data Processing', 'Analytics Dashboard'] },
  'power-systems': { title: 'Power Systems', desc: 'Advanced battery technology and hydrogen fuel cell solutions.', items: ['Solid State Batteries', 'Hydrogen Fuel Cells', 'Smart Charging Hubs', 'Power Management ICs'] },
  'connectivity': { title: 'Connectivity', desc: 'Long-range telemetry, satellite links, and 5G/LTE integration.', items: ['Long Range Telemetry', 'Satellite Uplink Kit', '5G Drone Module', 'Encrypted Video Link'] },
  'compliance': { title: 'Compliance', desc: 'Regulatory documentation, NPNT integration, and insurance solutions.', items: ['NPNT Compliance Kit', 'UAV Insurance Plans', 'Flight Log Audit Tool', 'Regulatory Consulting'] },
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = categoryData[slug] || { title: 'Category Not Found', desc: 'Please select a valid industry category.', items: [] };

  return (
    <div className="category-page animate-fade">
      <section className="page-header">
        <div className="layout-container">
          <div className="breadcrumb">Marketplace &gt; Categories &gt; {category.title}</div>
          <h1>{category.title}</h1>
          <p>{category.desc}</p>
        </div>
      </section>

      <section className="category-content layout-container">
        <div className="section-title">
          <h2>Industrial Solutions</h2>
          <p>Verified hardware and software for specialized operations.</p>
        </div>
        <div className="items-grid">
          {category.items.map((item: string, i: number) => (
            <div key={i} className="item-card glass-card">
              <div className="item-img-placeholder">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3>{item}</h3>
              <p>Industrial grade solution for {category.title.toLowerCase()} professionals.</p>
              <div className="item-meta">
                <span className="price-tag">Inquire for Price</span>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>

        <div className="technical-specs-section">
          <h2>Standard Specifications</h2>
          <div className="specs-grid">
            <div className="spec-card">
              <h4>Operational Range</h4>
              <p>Up to 15km line-of-sight with encrypted digital link.</p>
            </div>
            <div className="spec-card">
              <h4>Environmental Protection</h4>
              <p>IP65 Rated — Dust-proof and water-resistant for all-weather use.</p>
            </div>
            <div className="spec-card">
              <h4>Regulatory Compliance</h4>
              <p>Fully compliant with Global Civil Aviation standards and NPNT protocols.</p>
            </div>
            <div className="spec-card">
              <h4>Data Security</h4>
              <p>AES-256 encrypted telemetry and on-board data storage.</p>
            </div>
          </div>
        </div>

        <div className="expert-consultation">
          <div className="expert-text">
            <h2>Talk to a {category.title} Expert</h2>
            <p>Our industry specialists can help you design a custom solution for your specific enterprise needs. Get a consultation within 24 hours.</p>
            <button className="consult-btn">Schedule Free Consultation</button>
          </div>
          <div className="expert-img"></div>
        </div>

        <div className="related-resources">
          <h2>Related Training & Certification</h2>
          <div className="resource-list">
            <div className="res-item">
              <span>Advanced {category.title} Operation Certification</span>
              <a href="/videos">Watch Tutorial →</a>
            </div>
            <div className="res-item">
              <span>Maintenance & Troubleshooting Masterclass</span>
              <a href="/videos">View Library →</a>
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
        .category-page { background: #000; color: #fff; min-height: 100vh; padding-bottom: 100px; }
        .page-header { 
          background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.95)), url('/gis.png') center/cover;
          padding: 120px 0 60px; border-bottom: 2px solid #fbc819;
        }
        .breadcrumb { font-size: 0.8rem; color: #fbc819; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 2px; }
        h1 { font-size: 4rem; font-weight: 900; margin-bottom: 20px; letter-spacing: -2px; }
        .page-header p { font-size: 1.2rem; color: #aaa; max-width: 700px; line-height: 1.6; }

        .category-content { padding-top: 80px; }
        .section-title { margin-bottom: 40px; }
        .section-title h2 { font-size: 2rem; font-weight: 800; color: #fff; margin-bottom: 10px; }
        .section-title p { color: #666; font-size: 1rem; }

        .items-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 30px; margin-bottom: 100px; }
        .item-card { background: #0a0a0a; border: 1px solid #1a1a1a; padding: 30px; transition: all 0.4s ease; }
        .item-card:hover { border-color: #fbc819; transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.6); }
        .item-img-placeholder { height: 200px; background: #050505; border: 1px solid #111; display: flex; align-items: center; justify-content: center; margin-bottom: 25px; }
        
        .item-card h3 { font-size: 1.3rem; font-weight: 800; color: #fff; margin-bottom: 12px; }
        .item-card p { font-size: 0.9rem; color: #888; line-height: 1.6; margin-bottom: 30px; }
        
        .item-meta { display: flex; justify-content: space-between; align-items: center; }
        .price-tag { font-size: 0.85rem; font-weight: 800; color: #fbc819; }
        .view-details-btn { background: #fbc819; color: #000; font-weight: 900; font-size: 0.8rem; padding: 10px 20px; text-transform: uppercase; transition: all 0.3s ease; }
        .view-details-btn:hover { background: #fff; }

        .technical-specs-section { margin-bottom: 100px; padding: 80px; background: #050505; border: 1px solid #111; }
        .technical-specs-section h2 { font-size: 2.2rem; font-weight: 900; margin-bottom: 50px; text-align: center; color: #fbc819; text-transform: uppercase; }
        .specs-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; }
        .spec-card h4 { font-size: 1.1rem; color: #fff; margin-bottom: 15px; font-weight: 800; text-transform: uppercase; }
        .spec-card p { color: #888; font-size: 1rem; line-height: 1.6; }

        .expert-consultation { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; margin-bottom: 100px; padding: 80px; border: 1px solid #222; }
        .expert-text h2 { font-size: 2.5rem; font-weight: 900; margin-bottom: 25px; }
        .expert-text p { font-size: 1.1rem; color: #888; line-height: 1.7; margin-bottom: 40px; }
        .consult-btn { background: #fff; color: #000; font-weight: 900; padding: 20px 40px; text-transform: uppercase; font-size: 0.9rem; transition: all 0.3s ease; }
        .consult-btn:hover { background: #fbc819; transform: scale(1.05); }
        .expert-img { height: 400px; background: #111 url('/hero.png') center/cover; border: 1px solid #333; }

        .related-resources { margin-bottom: 100px; }
        .related-resources h2 { font-size: 2rem; font-weight: 900; margin-bottom: 40px; }
        .resource-list { display: flex; flex-direction: column; gap: 15px; }
        .res-item { display: flex; justify-content: space-between; padding: 25px; border: 1px solid #1a1a1a; background: #0a0a0a; transition: all 0.3s ease; }
        .res-item:hover { border-color: #fbc819; background: #0d0d0d; }
        .res-item span { font-size: 1.1rem; font-weight: 700; }
        .res-item a { color: #fbc819; font-weight: 800; text-decoration: none; text-transform: uppercase; font-size: 0.85rem; }

        .bottom-nav { margin-top: 100px; padding-top: 60px; border-top: 1px solid #222; display: flex; justify-content: center; }
        .back-link-bottom { 
          display: flex; align-items: center; gap: 15px; color: #000; 
          background: #fbc819; padding: 20px 50px; font-weight: 900; 
          text-transform: uppercase; transition: all 0.3s ease;
        }
        .back-link-bottom:hover { background: #fff; transform: translateY(-8px); box-shadow: 0 20px 50px rgba(251,200,25,0.4); }

        @media (max-width: 900px) {
          .specs-grid, .expert-consultation { grid-template-columns: 1fr; gap: 40px; padding: 40px; }
          h1 { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
}
