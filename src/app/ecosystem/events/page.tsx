'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const events = [
  { 
    id: 1, 
    name: "DRONE EXPO", 
    description: "Join us at the premier event of the year that continues to redefine the future ...", 
    date: "2026-04-17 to 2026-04-18", 
    location: "DRONE EXPO, Bangalore International Exhibition Centre, Bengaluru",
    badge: "General",
    cost: "Free",
    status: "Event Ended",
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80"
  },
  { 
    id: 2, 
    name: "Photofina Expo", 
    description: "Join us for the premiere photography trade show in South India. Experience...", 
    date: "2026-02-07 to 2026-02-09", 
    location: "Photofina Expo, KBR Convention, Chandeeshwari Colony, Erukula ...",
    badge: "General",
    cost: "Free",
    status: "Event Ended",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80"
  },
];

export default function EventsPage() {
  const [query, setQuery] = useState('');

  const filtered = events.filter(e => 
    e.name.toLowerCase().includes(query.toLowerCase()) ||
    e.location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="events-page animate-fade">
      <section className="catalog-hero">
        <div className="layout-container">
          <div className="hero-top-row">
            <div className="hero-content">
              <h1>Events Calendar</h1>
              <p>Discover amazing events from our community</p>
            </div>
            <button className="list-event-btn">List your Event</button>
          </div>
          
          <div className="filter-bar">
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Search events..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </div>
            
            <div className="dropdowns-row">
              <div className="filter-select">
                <select>
                  <option>All Event Types</option>
                  <option>Exhibition</option>
                  <option>Conference</option>
                </select>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
              
              <div className="filter-select">
                <select>
                  <option>Sort by Upcoming</option>
                  <option>Past Events</option>
                </select>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="results-header layout-container">
        <div className="results-info">
          <h2>All Events</h2>
          <span className="page-count">Page 1 of 1</span>
        </div>
      </section>

      <section className="events-content layout-container">
        <div className="events-grid">
          {filtered.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-thumb-area">
                <img src={event.img} alt={event.name} />
                <div className="badge-row">
                  <span className="type-badge">{event.badge}</span>
                  <span className="cost-badge">{event.cost}</span>
                </div>
              </div>
              <div className="event-body">
                <h3>{event.name}</h3>
                <p className="event-desc">{event.description}</p>
                
                <div className="event-meta">
                  <div className="meta-item">🗓️ {event.date}</div>
                  <div className="meta-item">📍 {event.location}</div>
                  <div className="meta-item">👥 Not specified</div>
                </div>

                <div className="event-footer">
                  <span className="status-tag">{event.status}</span>
                </div>
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
        .events-page { padding-bottom: 100px; }
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

        .evts-page {
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

        .list-event-btn {
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

        .list-event-btn:hover {
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

        .events-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          margin-top: 30px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .event-card {
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

        .event-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .event-thumb-area {
          height: 180px;
          background: #fffbeb;
          position: relative;
          overflow: hidden;
        }

        .event-thumb-area img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .badge-row {
          position: absolute;
          top: 10px;
          right: 10px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          align-items: flex-end;
        }

        .type-badge {
          background: #3b82f6;
          color: #fff;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 2px 10px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .cost-badge {
          background: #22c55e;
          color: #fff;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 40px;
          text-transform: uppercase;
        }

        .event-body {
          padding: 15px;
          flex: 1;
          display: flex;
          flex-direction: column;
          background: #fde68a;
        }

        .event-body h3 {
          font-size: 0.95rem;
          font-weight: 900;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .event-desc {
          font-size: 0.72rem;
          color: #444;
          font-weight: 600;
          margin-bottom: 12px;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .event-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 15px;
        }

        .meta-item {
          font-size: 0.65rem;
          font-weight: 700;
          color: #555;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .event-footer {
          margin-top: auto;
          display: flex;
          justify-content: flex-end;
        }

        .status-tag {
          background: #fee2e2;
          color: #ef4444;
          font-size: 0.65rem;
          font-weight: 900;
          padding: 4px 10px;
          border-radius: 4px;
          text-transform: uppercase;
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
          .events-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 900px) {
          .events-grid { grid-template-columns: repeat(2, 1fr); }
          .hero-top-row { flex-direction: column; text-align: center; gap: 20px; }
        }

        @media (max-width: 600px) {
          .events-grid { grid-template-columns: 1fr; }
          .filter-bar { flex-direction: column; }
        }
      `}</style>
    </div>
  );
}
