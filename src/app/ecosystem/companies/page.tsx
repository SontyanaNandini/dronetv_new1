'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const companies = [
  { id: 1, name: "AEROMAT CREATIVE LABS...", location: "Pune, MAHARASHTRA, India", description: "Professional drone services and solutions.", logo: "https://images.unsplash.com/photo-1557683316-973673baf926?w=400&q=80", servicesCount: 6, productsCount: 1 },
  { id: 2, name: "Agmay Technologies Private..", location: "Hyderabad, Telangana, India", description: "Professional drone services and solutions.", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&q=80", servicesCount: 3, productsCount: 1 },
  { id: 3, name: "AlgoBotix Private Limited", location: "Bangalore, Karnataka, India", description: "Professional drone services and solutions.", logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80", servicesCount: 2, productsCount: 3 },
  { id: 4, name: "Amber Wings (Ubifly Pvt Ltd)", location: "Chennai, Tamil Nadu, India", description: "Professional drone services and solutions.", logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80", servicesCount: 3, productsCount: 1 },
  { id: 5, name: "IdeaForge Technology", location: "Mumbai, Maharashtra, India", description: "Leading tactical UAV manufacturer.", logo: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=400&q=80", servicesCount: 2, productsCount: 5 },
  { id: 6, name: "Garuda Aerospace", location: "Chennai, Tamil Nadu, India", description: "Low-cost drone solutions for agriculture.", logo: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&q=80", servicesCount: 10, productsCount: 2 },
  { id: 7, name: "Asteria Aerospace", location: "Bangalore, Karnataka, India", description: "Full-stack drone technology provider.", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&q=80", servicesCount: 4, productsCount: 3 },
  { id: 8, name: "Skylark Drones", location: "Bangalore, Karnataka, India", description: "Drone data analytics and software.", logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80", servicesCount: 8, productsCount: 1 },
];

const badgeConfig: Record<string, { label: string; icon: string }> = {
  silver:   { label: 'Silver',   icon: '🥈' },
  gold:     { label: 'Gold',     icon: '🥇' },
  platinum: { label: 'Platinum', icon: '💎' },
};

export default function CompaniesPage() {
  return (
    <React.Suspense fallback={<div style={{ padding: '100px', textAlign: 'center', color: '#fff' }}>Loading directory...</div>}>
      <CompaniesContent />
    </React.Suspense>
  );
}

function CompaniesContent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [typeFilter, setTypeFilter] = useState('All Types');

  React.useEffect(() => {
    const q = searchParams.get('q');
    if (q !== null) setQuery(q);
  }, [searchParams]);

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
      <section className="catalog-hero">
        <div className="layout-container">
          <div className="hero-top-row">
            <div className="hero-content">
              <h1>Companies Directory</h1>
              <p>Explore top companies leading drone, AI, and geospatial tech.</p>
            </div>
            <button className="list-company-btn">List your Company</button>
          </div>
          
          <div className="filter-bar">
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Search companies..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </div>
            
            <div className="dropdowns-row">
              <div className="filter-select">
                <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                  <option>All Industries</option>
                  <option>Manufacturer</option>
                  <option>Service Provider</option>
                  <option>Software</option>
                </select>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
              
              <div className="filter-select">
                <select defaultValue="Name">
                  <option value="Name">Sort by Name</option>
                  <option value="Rating">Top Rated</option>
                </select>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="results-header layout-container">
        <div className="results-info">
          <h2>All Companies ({filtered.length})</h2>
          <span className="page-count">Page 1 of {Math.max(1, Math.ceil(filtered.length / 12))}</span>
        </div>
      </section>

      <section className="companies-content layout-container">
        <div className="companies-grid">
          {filtered.map(company => (
            <Link href={`/ecosystem/companies/${company.id}`} key={company.id} className="company-card">
              <div className="company-logo-area">
                <img src={company.logo} alt={company.name} />
              </div>
              <div className="company-body">
                <h3>{company.name}</h3>
                <div className="loc">📍 {company.location}</div>
                <p className="desc">{company.description}</p>
                
                <div className="stats-row">
                  <div className="stat-box">
                    <strong>{company.servicesCount}</strong>
                    <span>Services</span>
                  </div>
                  <div className="stat-box">
                    <strong>{company.productsCount}</strong>
                    <span>Products</span>
                  </div>
                </div>
              </div>
            </Link>
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
        .companies-page {
          background: #fbc819;
          min-height: 100vh;
          padding-bottom: 80px;
        }

        .catalog-hero {
          background: #fbc819;
          padding: 30px 0 20px;
        }

        .hero-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .hero-content h1 {
          font-size: 2.5rem;
          font-weight: 900;
          color: #000;
          margin-bottom: 5px;
          letter-spacing: -1.5px;
        }

        .hero-content p {
          font-size: 0.95rem;
          color: #333;
          font-weight: 600;
        }

        .list-company-btn {
          background: #000;
          color: #fff;
          border: none;
          padding: 12px 25px;
          border-radius: 8px;
          font-weight: 800;
          font-size: 0.85rem;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .list-company-btn:hover {
          transform: scale(1.05);
        }

        .filter-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          background: rgba(255, 255, 255, 0.3);
          padding: 8px;
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .search-box {
          flex: 1;
          position: relative;
        }

        .search-box input {
          width: 100%;
          padding: 12px 20px 12px 45px;
          border-radius: 10px;
          border: 1px solid rgba(0,0,0,0.1);
          background: #fff;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .search-box svg {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #666;
        }

        .dropdowns-row {
          display: flex;
          gap: 10px;
        }

        .filter-select {
          position: relative;
          min-width: 150px;
        }

        .filter-select select {
          width: 100%;
          appearance: none;
          padding: 10px 35px 10px 15px;
          border-radius: 10px;
          border: 1px solid rgba(0,0,0,0.1);
          background: #fff;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
        }

        .filter-select svg {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: #666;
        }

        .results-header {
          padding: 20px 0 10px;
        }

        .results-info {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-bottom: 2px solid rgba(0,0,0,0.05);
          padding-bottom: 10px;
        }

        .results-info h2 {
          font-size: 1.6rem;
          font-weight: 900;
          color: #000;
        }

        .page-count {
          font-size: 0.85rem;
          font-weight: 700;
          color: #555;
        }

        .companies-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          margin-top: 30px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .company-card {
          background: #fffbeb; /* Cream top */
          border-radius: 24px;
          overflow: hidden;
          text-decoration: none;
          color: #000;
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(0,0,0,0.05);
          height: 100%;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .company-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .company-logo-area {
          height: 200px;
          background: #fffbeb;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .company-logo-area img {
          max-width: 85%;
          max-height: 85%;
          object-fit: contain;
        }

        .company-body {
          padding: 15px;
          flex: 1;
          display: flex;
          flex-direction: column;
          background: #fde68a; /* Solid yellow bottom */
        }

        .company-body h3 {
          font-size: 0.9rem;
          font-weight: 900;
          margin-bottom: 4px;
          text-transform: uppercase;
          line-height: 1.2;
          text-align: center;
        }

        .loc {
          font-size: 0.7rem;
          color: #666;
          font-weight: 700;
          margin-bottom: 8px;
          text-align: center;
        }

        .desc {
          font-size: 0.72rem;
          color: #444;
          font-weight: 600;
          margin-bottom: 15px;
          line-height: 1.4;
          text-align: center;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .stats-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: auto;
        }

        .stat-box {
          padding: 4px;
          text-align: center;
          display: flex;
          flex-direction: column;
          border-left: 1px solid rgba(0,0,0,0.05);
        }

        .stat-box:first-child { border-left: none; }

        .stat-box strong {
          font-size: 0.95rem;
          font-weight: 900;
        }

        .stat-box span {
          font-size: 0.6rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #666;
        }

        .bottom-nav {
          margin-top: 60px;
          display: flex;
          justify-content: center;
        }

        .back-link-bottom {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #000;
          font-weight: 800;
          text-decoration: none;
          padding: 12px 25px;
          border: 2px solid #000;
          border-radius: 8px;
          font-size: 0.85rem;
          transition: all 0.3s;
        }

        .back-link-bottom:hover {
          background: #000;
          color: #fbc819;
        }

        @media (max-width: 1200px) {
          .companies-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 900px) {
          .companies-grid { grid-template-columns: repeat(2, 1fr); }
          .hero-top-row { flex-direction: column; text-align: center; gap: 20px; }
        }

        @media (max-width: 600px) {
          .companies-grid { grid-template-columns: 1fr; }
          .filter-bar { flex-direction: column; }
        }
      `}</style>
    </div>
  );
}
