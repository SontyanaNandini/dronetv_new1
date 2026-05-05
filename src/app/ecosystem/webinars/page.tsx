'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const webinars = [
  { id: 1, title: "Mastering BVLOS Operations", speaker: "John Smith", category: "Training", duration: "45 min", views: "1.2k", img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80" },
  { id: 2, title: "UAV Data Processing with AI", speaker: "Sarah Chen", category: "Tech", duration: "60 min", views: "3.5k", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" },
  { id: 3, title: "Future of Urban Air Mobility", speaker: "Michael Vance", category: "Insights", duration: "30 min", views: "800", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" },
  { id: 4, title: "Hydrogen Fuel Cell Integration", speaker: "David Wu", category: "Hardware", duration: "50 min", views: "2.1k", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" },
  { id: 5, title: "Swarm Intelligence in Logistics", speaker: "Dr. Sofia Rossi", category: "Logistics", duration: "40 min", views: "1.8k", img: "https://images.unsplash.com/photo-1586769852044-692d6e3703a0?w=800&q=80" },
  { id: 6, title: "FAA Part 107 Exam Mastery", speaker: "Anita Desai", category: "Regulatory", duration: "90 min", views: "5.2k", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80" },
  { id: 7, title: "Agriculture Spraying Drones", speaker: "Rajesh Kumar", category: "AgriTech", duration: "55 min", views: "2.9k", img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80" },
  { id: 8, title: "LiDAR Mapping Best Practices", speaker: "Liam O'Connor", category: "Surveying", duration: "70 min", views: "4.1k", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" },
];

export default function WebinarsPage() {
  const [query, setQuery] = useState('');

  const filtered = webinars.filter(w => 
    w.title.toLowerCase().includes(query.toLowerCase()) ||
    w.speaker.toLowerCase().includes(query.toLowerCase()) ||
    w.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="webinars-page animate-fade">
      <section className="catalog-hero">
        <div className="layout-container">
          <div className="hero-top-row">
            <div className="hero-content">
              <h1>Webinar Series</h1>
              <p>Access exclusive masterclasses and webinars from industry leaders.</p>
            </div>
            <button className="pro-access-btn">Premium Access</button>
          </div>
          
          <div className="filter-bar">
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Search webinars by topic or speaker..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </div>
            
            <div className="dropdowns-row">
              <div className="filter-select">
                <select>
                  <option>All Categories</option>
                  <option>Training</option>
                  <option>Tech</option>
                  <option>Insights</option>
                </select>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
              
              <div className="filter-select">
                <select>
                  <option>Sort by Views</option>
                  <option>Newest</option>
                  <option>Duration</option>
                </select>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="results-header layout-container">
        <div className="results-info">
          <h2>Recorded Masterclasses ({filtered.length})</h2>
          <span className="page-count">Knowledge Hub 2026</span>
        </div>
      </section>

      <section className="webinars-content layout-container">
        <div className="webinars-grid">
          {filtered.map(web => (
            <div key={web.id} className="webinar-card">
              <div className="webinar-thumb-area">
                <img src={web.img} alt={web.title} />
                <div className="play-overlay">
                  <div className="play-icon">▶</div>
                </div>
              </div>
              <div className="webinar-body">
                <h3>{web.title}</h3>
                <div className="web-speaker">With {web.speaker}</div>
                <div className="web-cat-badge">{web.category}</div>
                
                <div className="stats-row">
                  <div className="stat-box">
                    <strong>{web.duration}</strong>
                    <span>Duration</span>
                  </div>
                  <div className="stat-box">
                    <strong>{web.views}</strong>
                    <span>Views</span>
                  </div>
                </div>
                
                <button className="watch-now-btn">Watch Masterclass</button>
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
          .webinars-page { padding-bottom: 100px; }
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

          .webs-page {
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

          .pro-access-btn {
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

          .pro-access-btn:hover {
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

          .webinars-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
            margin-top: 30px;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
          }

          .webinar-card {
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

          .webinar-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          }

          .webinar-thumb-area {
            height: 180px;
            background: #000;
            position: relative;
            overflow: hidden;
          }

          .webinar-thumb-area img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.8;
            transition: transform 0.5s ease;
          }
          .webinar-card:hover .webinar-thumb-area img { transform: scale(1.1); opacity: 0.6; }

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
            box-shadow: 0 0 20px rgba(251,200,25,0.4);
          }
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

        .pro-access-btn {
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

        .pro-access-btn:hover {
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

        .webinars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          margin-top: 30px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .webinar-card {
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

        .webinar-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .webinar-thumb-area {
          height: 180px;
          background: #000;
          position: relative;
          overflow: hidden;
        }

        .webinar-thumb-area img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.8;
          transition: transform 0.5s ease;
        }
        .webinar-card:hover .webinar-thumb-area img { transform: scale(1.1); opacity: 0.6; }

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
          box-shadow: 0 0 20px rgba(251,200,25,0.4);
        }

        .webinar-body {
          padding: 15px;
          flex: 1;
          display: flex;
          flex-direction: column;
          background: #fde68a;
          text-align: center;
        }

        .webinar-body h3 {
          font-size: 0.9rem;
          font-weight: 900;
          margin-bottom: 4px;
          line-height: 1.3;
          height: 2.6rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .web-speaker {
          font-size: 0.75rem;
          color: #000;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .web-cat-badge {
          font-size: 0.65rem;
          color: #fff;
          font-weight: 800;
          background: #000;
          display: inline-block;
          padding: 2px 10px;
          border-radius: 4px;
          margin-bottom: 15px;
          align-self: center;
          text-transform: uppercase;
        }

        .stat-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: auto;
          margin-bottom: 15px;
          border-top: 1px solid rgba(0,0,0,0.05);
          padding-top: 10px;
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
          font-size: 0.9rem;
          font-weight: 900;
        }

        .stat-box span {
          font-size: 0.6rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #666;
        }

        .watch-now-btn {
          width: 100%;
          background: #000;
          color: #fff;
          border: none;
          padding: 10px;
          border-radius: 8px;
          font-weight: 800;
          font-size: 0.75rem;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s;
        }
        .watch-now-btn:hover { background: #333; }

        .bottom-nav {
          margin-top: 60px;
          display: center;
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
          .webinars-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 900px) {
          .webinars-grid { grid-template-columns: repeat(2, 1fr); }
          .hero-top-row { flex-direction: column; text-align: center; gap: 20px; }
        }

        @media (max-width: 600px) {
          .webinars-grid { grid-template-columns: 1fr; }
          .filter-bar { flex-direction: column; }
        }
      `}</style>
    </div>
  );
}
