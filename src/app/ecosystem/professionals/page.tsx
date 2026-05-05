'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const professionals = [
  { 
    id: 1, 
    name: "Boddu Diwakar Reddy", 
    role: "AI/ML Engineer", 
    location: "Andhra Pradesh",
    description: "Boddu Diwakar Reddy, an AI/ML Engineer based in Andhra Pradesh, specializing in developing...",
    skills: 3, 
    services: 1, 
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" 
  },
  { 
    id: 2, 
    name: "Sumit Krishnan", 
    role: "Remote Pilot Instructor", 
    location: "India",
    description: "Sumit Krishnan is currently working as a Remote Pilot Instructor at India Drone Academy where...",
    skills: 3, 
    services: 3, 
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" 
  },
];

export default function ProfessionalsPage() {
  const [query, setQuery] = useState('');

  const filtered = professionals.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.role.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="pros-page animate-fade">
      <section className="catalog-hero">
        <div className="layout-container">
          <div className="hero-top-row">
            <div className="hero-content">
              <h1>Professionals Directory</h1>
              <p>Explore top professionals in drone, AI, and geospatial technology.</p>
            </div>
            <button className="list-profile-btn">List your Profile</button>
          </div>
          
          <div className="filter-bar">
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Search professionals..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </div>
            
            <div className="dropdowns-row">
              <div className="filter-select">
                <select>
                  <option>All Categories</option>
                  <option>AI & ML</option>
                  <option>Drone Pilot</option>
                </select>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
              
              <div className="filter-select">
                <select>
                  <option>Sort by Name</option>
                  <option>Most Recent</option>
                </select>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="results-header layout-container">
        <div className="results-info">
          <h2>All Professionals</h2>
          <span className="page-count">Page 1 of 1</span>
        </div>
      </section>

      <section className="pros-content layout-container">
        <div className="pros-grid">
          {filtered.map(pro => (
            <div key={pro.id} className="pro-card">
              <div className="pro-avatar-area">
                <img src={pro.img} alt={pro.name} />
              </div>
              <div className="pro-body">
                <h3>{pro.name}</h3>
                <div className="pro-loc">📍 {pro.location}</div>
                <p className="pro-desc">{pro.description}</p>
                
                <div className="stats-row">
                  <div className="stat-box">
                    <strong>{pro.skills}</strong>
                    <span>Skills</span>
                  </div>
                  <div className="stat-box">
                    <strong>{pro.services}</strong>
                    <span>Services</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
        .professionals-page { padding-bottom: 100px; }
        .bottom-nav { margin-top: 100px; display: flex; justify-content: center; }
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

        .pros-page {
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

        .list-profile-btn {
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

        .list-profile-btn:hover {
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
          min-width: 170px;
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

        .pros-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          margin-top: 30px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .pro-card {
          background: #fffbeb;
          border-radius: 24px;
          overflow: hidden;
          color: #000;
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(0,0,0,0.05);
          height: 100%;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .pro-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .pro-avatar-area {
          height: 250px;
          background: #fffbeb;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .pro-avatar-area img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .pro-body {
          padding: 15px;
          flex: 1;
          display: flex;
          flex-direction: column;
          background: #fde68a;
          text-align: center;
        }

        .pro-body h3 {
          font-size: 1rem;
          font-weight: 900;
          margin-bottom: 2px;
        }

        .pro-loc {
          font-size: 0.7rem;
          color: #666;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .pro-desc {
          font-size: 0.75rem;
          color: #444;
          margin-bottom: 20px;
          line-height: 1.4;
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
          border-left: 1px solid rgba(0,0,0,0.1);
        }
        .stat-box:first-child { border-left: none; }

        .stat-box strong {
          font-size: 1rem;
          font-weight: 900;
        }

        .stat-box span {
          font-size: 0.65rem;
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
          .pros-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 900px) {
          .pros-grid { grid-template-columns: repeat(2, 1fr); }
          .hero-top-row { flex-direction: column; text-align: center; gap: 20px; }
        }

        @media (max-width: 600px) {
          .pros-grid { grid-template-columns: 1fr; }
          .filter-bar { flex-direction: column; }
        }
      `}</style>
    </div>
  );
}
