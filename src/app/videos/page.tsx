'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const featuredVideos = [
  { 
    id: 1, 
    title: "Dr. Pranay Kumar Speaks on RPTO Association", 
    desc: "Dr. Pranay Kumar of India Drone TV discusses the RPTO...", 
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    isFeatured: true
  },
  { 
    id: 2, 
    title: "A Game-Changing Initiative by Mr. Dev in Drone Technology", 
    desc: "This latest segment on Drone TV highlights Mr. Dev's...", 
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80",
    isFeatured: true
  },
  { 
    id: 3, 
    title: "Dr. Pranay Kumar on Industry-Scale Drone Integration at Drone Expo 2025", 
    desc: "Dr. Pranay Kumar, COO of BBPL Aero and Technical Advisor at...", 
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    isFeatured: true
  },
  { 
    id: 4, 
    title: "Gowrav Reddy on Drone Tech for Indian Agriculture", 
    desc: "At Drone Expo, Gowrav Reddy, Founder of CropWings,...", 
    img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
    isFeatured: true
  },
];

export default function VideosPage() {
  const [query, setQuery] = useState('');

  const filtered = featuredVideos.filter(v => 
    v.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="videos-page animate-fade">
      <section className="catalog-hero">
        <div className="layout-container">
          <div className="hero-top-row">
            <div className="hero-content">
              <h1>Video Library</h1>
              <p>Explore innovative drone tech, AI, and GIS solutions.</p>
            </div>
            <div className="hero-actions">
              <button className="add-video-btn">+ Video</button>
              <div className="filter-select mini">
                <select>
                  <option>All Categories</option>
                  <option>Interviews</option>
                  <option>Expos</option>
                </select>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
            </div>
          </div>
          
          <div className="filter-bar">
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Search videos or topics..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </div>
          </div>
        </div>
      </section>

      <section className="results-header layout-container">
        <div className="results-info">
          <h2>★ Featured Videos ({filtered.length})</h2>
          <span className="page-count">Knowledge Base 2026</span>
        </div>
      </section>

      <section className="videos-content layout-container">
        <div className="video-grid">
          {filtered.map(vid => (
            <div key={vid.id} className="video-card">
              <div className="video-thumb-area">
                <img src={vid.img} alt={vid.title} />
                <div className="featured-badge">★ Featured</div>
                <div className="play-overlay">
                  <div className="play-icon">▶</div>
                </div>
              </div>
              <div className="video-body">
                <h3>{vid.title}</h3>
                <p className="video-desc">{vid.desc}</p>
                <button className="watch-btn">Watch Video</button>
              </div>
            </div>
          ))}
        </div>
      </section>

        <div className="bottom-nav">
        <Link href="/" className="back-pill-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <span>Back</span>
        </Link>
      </div>

      <style jsx>{`
        .videos-page { padding-bottom: 100px; }
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

        .vids-page {
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

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .add-video-btn {
          background: #000;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 800;
          font-size: 0.8rem;
          cursor: pointer;
        }

        .filter-bar {
          background: rgba(255, 255, 255, 0.3);
          padding: 8px;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          max-width: 600px;
        }

        .search-box {
          position: relative;
        }

        .search-box input {
          width: 100%;
          padding: 10px 20px 10px 45px;
          border-radius: 8px;
          border: 1px solid rgba(0,0,0,0.1);
          background: #fff;
          font-weight: 600;
          font-size: 0.85rem;
        }

        .search-box svg {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #666;
        }

        .filter-select.mini {
          position: relative;
          min-width: 150px;
        }

        .filter-select select {
          width: 100%;
          appearance: none;
          padding: 10px 30px 10px 15px;
          border-radius: 8px;
          border: 1px solid rgba(0,0,0,0.1);
          background: #fff;
          font-weight: 700;
          font-size: 0.8rem;
          cursor: pointer;
        }

        .filter-select svg {
          position: absolute;
          right: 10px;
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
          font-size: 1.5rem;
          font-weight: 900;
          color: #000;
        }

        .page-count {
          font-size: 0.85rem;
          font-weight: 700;
          color: #555;
        }

        .video-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 30px;
        }

        .video-card {
          background: #fef3c7;
          border-radius: 24px;
          overflow: hidden;
          transition: transform 0.3s;
          border: 1px solid rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
        }

        .video-card:hover { transform: translateY(-8px); }

        .video-thumb-area {
          height: 180px;
          background: #000;
          position: relative;
          overflow: hidden;
        }

        .video-thumb-area img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.8;
          transition: transform 0.5s;
        }
        .video-card:hover .video-thumb-area img { transform: scale(1.1); opacity: 0.6; }

        .featured-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: #fbc819;
          color: #000;
          font-size: 0.6rem;
          font-weight: 900;
          padding: 4px 10px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .play-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.2);
        }

        .play-icon {
          width: 50px; height: 50px;
          background: #fbc819;
          color: #000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          padding-left: 4px;
        }

        .video-body {
          padding: 20px;
          background: #fef3c7;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .video-body h3 {
          font-size: 1rem;
          font-weight: 900;
          margin-bottom: 10px;
          line-height: 1.3;
          height: 2.6rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .video-desc {
          font-size: 0.75rem;
          color: #666;
          font-weight: 500;
          margin-bottom: 20px;
          line-height: 1.4;
        }

        .watch-btn {
          margin-top: auto;
          background: #000;
          color: #fff;
          border: none;
          padding: 10px;
          border-radius: 8px;
          font-weight: 800;
          font-size: 0.75rem;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.3s;
        }
        .watch-btn:hover { background: #333; }

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

        @media (max-width: 1200px) { .video-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 900px) { .video-grid { grid-template-columns: repeat(2, 1fr); } .hero-top-row { flex-direction: column; gap: 20px; } }
        @media (max-width: 600px) { .video-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
