'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const companies = [
  { id: 1, name: "SkyTech Dynamics", type: "Manufacturer", location: "Germany", rating: 4.8, description: "Industrial-grade heavy lift hexacopters.", logo: "SD", badge: "gold" },
  { id: 2, name: "GeoMap Solutions", type: "Service Provider", location: "India", rating: 4.9, description: "High-accuracy GIS and photogrammetry services.", logo: "GS", badge: "platinum" },
  { id: 3, name: "AeroSense AI", type: "Software", location: "USA", rating: 4.7, description: "Autonomous navigation and analytics software.", logo: "AI", badge: "silver" },
  { id: 4, name: "PowerFly Systems", type: "Components", location: "Japan", rating: 4.6, description: "Hydrogen fuel cell solutions for UAVs.", logo: "PF", badge: "silver" },
  { id: 5, name: "DroneShield", type: "Security", location: "Australia", rating: 4.8, description: "Counter-drone and electronic warfare systems.", logo: "DS", badge: "gold" },
  { id: 6, name: "Volocopter", type: "Mobility", location: "Germany", rating: 4.9, description: "Pioneering urban air mobility and air taxis.", logo: "VC", badge: "platinum" },
  { id: 7, name: "Wingtra", type: "Surveying", location: "Switzerland", rating: 4.8, description: "Professional VTOL drones for mapping.", logo: "WT", badge: "gold" },
  { id: 8, name: "DJI Enterprise", type: "Industrial", location: "China", rating: 4.7, description: "Global leader in commercial drone solutions.", logo: "DJ", badge: "silver" },
  { id: 9, name: "Autel Robotics", type: "Manufacturer", location: "USA", rating: 4.6, description: "Advanced UAV platforms for enterprise and public safety.", logo: "AR", badge: "silver" },
  { id: 10, name: "Parrot", type: "Defense", location: "France", rating: 4.8, description: "Micro-UAVs for defense and security professionals.", logo: "PA", badge: "gold" },
  { id: 11, name: "IdeaForge", type: "Defense", location: "India", rating: 4.9, description: "India's largest manufacturer of tactical drones.", logo: "IF", badge: "platinum" },
  { id: 12, name: "Quantum-Systems", type: "Mapping", location: "Germany", rating: 4.7, description: "State-of-the-art VTOL fixed-wing drones.", logo: "QS", badge: "silver" },
  { id: 13, name: "Flyability", type: "Inspection", location: "Switzerland", rating: 4.9, description: "Indoor collision-tolerant drones for inspection.", logo: "FA", badge: "platinum" },
  { id: 14, name: "Ehang", type: "Logistics", location: "China", rating: 4.6, description: "Autonomous aerial vehicles for passenger and cargo.", logo: "EH", badge: "silver" },
  { id: 15, name: "Microdrones", type: "Surveying", location: "Germany", rating: 4.7, description: "Integrated LiDAR and mapping UAV solutions.", logo: "MD", badge: "silver" },
  { id: 16, name: "Freefly Systems", type: "Logistics", location: "USA", rating: 4.8, description: "High-performance heavy-lift industrial drones.", logo: "FS", badge: "gold" },
];

const badgeConfig: Record<string, { label: string; icon: string }> = {
  silver:   { label: 'Silver',   icon: '🥈' },
  gold:     { label: 'Gold',     icon: '🥇' },
  platinum: { label: 'Platinum', icon: '💎' },
};

export default function CompaniesPage() {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('All Types');

  const filtered = companies.filter(c => {
    const matchesQuery =
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.type.toLowerCase().includes(query.toLowerCase()) ||
      c.location.toLowerCase().includes(query.toLowerCase());
    const matchesType = typeFilter === 'All Types' || c.type === typeFilter;
    return matchesQuery && matchesType;
  });
  return (
    <div className="companies-page animate-fade">
      <section className="page-header">
        <div className="layout-container">
          <div className="breadcrumb">Ecosystem &gt; Companies</div>
          <h1>Verified Companies</h1>
          <p>Connect with industry leaders, manufacturers, and service providers in the global drone ecosystem.</p>
        </div>
      </section>

      <section className="content-grid layout-container">
        <div className="search-filter-bar">
          <input
            type="text"
            placeholder="Search by name, type or location..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
            <option>All Types</option>
            <option>Manufacturer</option>
            <option>Service Provider</option>
            <option>Software</option>
            <option>Components</option>
            <option>Security</option>
            <option>Mobility</option>
            <option>Surveying</option>
            <option>Industrial</option>
            <option>Defense</option>
            <option>Mapping</option>
            <option>Inspection</option>
            <option>Logistics</option>
          </select>
          {query && (
            <button className="clear-btn" onClick={() => setQuery('')}>× Clear</button>
          )}
        </div>
        {filtered.length === 0 && (
          <div className="no-results">
            <p>No companies found matching <strong>"{query}"</strong>. Try a different search term.</p>
          </div>
        )}

        <div className="companies-list">
          {filtered.map(company => (
            <div key={company.id} className="company-card">
              <div className="company-header-row">
                <div className="company-logo">{company.logo}</div>
                <div className="company-info">
                  <div className="card-header">
                    <h3>{company.name}</h3>
                    <span className="rating">★ {company.rating}</span>
                  </div>
                  <div className="tags">
                    <span className="type-tag">{company.type}</span>
                    <span className="loc-tag">📍 {company.location}</span>
                  </div>
                  <span className={`tier-badge tier-${company.badge}`}>
                    {badgeConfig[company.badge].icon} {badgeConfig[company.badge].label} Member
                  </span>
                </div>
              </div>
              <div className="company-description">
                <p>{company.description}</p>
                <div className="card-actions">
                  <Link href={`/ecosystem/companies/${company.id}`} className="view-btn">View Profile</Link>
                  <button className="contact-btn">Contact</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bottom-nav">
          <Link href="/" className="back-link-bottom">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Return to Home Portal
          </Link>
        </div>
      </section>

      <style jsx>{`
        .companies-page { background: #000; color: #fff; min-height: 100vh; padding-bottom: 100px; }
        .page-header { 
          background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.95)), url('/manufacturing.png') center/cover;
          padding: 80px 0 40px; border-bottom: 1px solid #222;
        }
        .breadcrumb { font-size: 0.8rem; color: #fbc819; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 2px; }
        h1 { font-size: 3rem; font-weight: 900; margin-bottom: 15px; }
        .page-header p { color: #aaa; max-width: 600px; }

        .content-grid { padding-top: 60px; }
        .search-filter-bar { display: flex; gap: 15px; margin-bottom: 40px; align-items: center; }
        .search-filter-bar input { flex: 1; background: #111; border: 1px solid #333; padding: 15px; color: #fff; outline: none; font-size: 0.95rem; transition: border-color 0.3s; }
        .search-filter-bar input:focus { border-color: #fbc819; }
        .search-filter-bar select { background: #111; color: #fff; border: 1px solid #333; padding: 15px; width: 200px; outline: none; cursor: pointer; }
        .clear-btn { background: #333; color: #fff; border: none; padding: 10px 16px; cursor: pointer; font-size: 0.85rem; font-weight: 700; transition: all 0.2s; white-space: nowrap; }
        .clear-btn:hover { background: #fbc819; color: #000; }
        .no-results { text-align: center; padding: 60px 20px; color: #666; font-size: 1.1rem; border: 1px dashed #333; margin-bottom: 40px; }
        .no-results strong { color: #fbc819; }

        .companies-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 25px; }
        
        .company-card { 
          background: linear-gradient(145deg, #111 0%, #080808 100%);
          border: 1px solid #222; 
          padding: 24px; 
          display: flex; 
          flex-direction: column;
          gap: 20px; 
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .company-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 2px;
          background: #fbc819;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .company-card:hover { 
          border-color: #444; 
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.6), 0 0 20px rgba(251, 200, 25, 0.1);
        }

        .company-card:hover::after {
          transform: scaleX(1);
        }

        .company-header-row {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .company-logo { 
          width: 54px; height: 54px; 
          background: #000; 
          color: #fbc819; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-size: 1.4rem; 
          font-weight: 900; 
          flex-shrink: 0;
          border: 1px solid #333;
          position: relative;
          z-index: 2;
        }

        .company-info { flex: 1; display: flex; flex-direction: column; }
        
        .card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 5px; }
        .card-header h3 { font-size: 1.15rem; font-weight: 800; color: #fff; margin: 0; letter-spacing: -0.5px; }
        .rating { color: #fbc819; font-weight: 800; font-size: 0.8rem; background: rgba(251, 200, 25, 0.1); padding: 2px 6px; }

        .tags { display: flex; gap: 8px; margin-bottom: 12px; }
        .type-tag { font-size: 0.65rem; color: #fbc819; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; }
        .loc-tag { font-size: 0.7rem; color: #555; font-weight: 600; }

        .company-info p { 
          font-size: 0.85rem; 
          color: #888; 
          line-height: 1.5; 
          margin-bottom: 20px;
          height: 38px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-actions { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 10px; }

        /* Tier Badge Styles */
        .tier-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.65rem;
          font-weight: 900;
          padding: 3px 8px;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-top: 5px;
        }

        .tier-silver {
          background: linear-gradient(135deg, #8a9ba8, #c8d6df, #8a9ba8);
          color: #1a1a1a;
          border: 1px solid #9cb0bd;
        }

        .tier-gold {
          background: linear-gradient(135deg, #b8860b, #fbc819, #f0a500, #fbc819);
          color: #000;
          border: 1px solid #e5b617;
          box-shadow: 0 0 8px rgba(251, 200, 25, 0.3);
        }

        .tier-platinum {
          background: linear-gradient(135deg, #6a5acd, #a78bfa, #e0d7ff, #a78bfa);
          color: #fff;
          border: 1px solid #a78bfa;
          box-shadow: 0 0 10px rgba(167, 139, 250, 0.35);
        }
        
        .view-btn { 
          background: #fbc819 !important; 
          color: #000 !important; 
          font-weight: 800; 
          padding: 10px; 
          font-size: 0.85rem; 
          text-transform: uppercase;
          text-align: center;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        
        .contact-btn { 
          border: 1px solid #333 !important; 
          color: #fff !important; 
          font-weight: 700; 
          font-size: 0.8rem;
          text-transform: uppercase;
          transition: all 0.3s ease;
          background: transparent !important;
          cursor: pointer;
          border-radius: 2px;
        }

        .view-btn:hover { background: #fff !important; color: #000 !important; }
        .contact-btn:hover { border-color: #fbc819 !important; color: #fbc819 !important; }

        .bottom-nav { margin-top: 80px; padding-top: 40px; border-top: 1px solid #222; display: flex; justify-content: center; }
        .back-link-bottom { 
          display: flex; align-items: center; gap: 12px; color: #000; 
          background: #fbc819; padding: 15px 40px; font-weight: 900; 
          text-transform: uppercase; transition: all 0.3s ease;
        }
        .back-link-bottom:hover { background: #fff; transform: translateY(-5px); box-shadow: 0 10px 30px rgba(251,200,25,0.3); }

        @media (max-width: 600px) {
          .companies-list { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
