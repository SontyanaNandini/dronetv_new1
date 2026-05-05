'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const galleryPhotos = [
  { id: 1, title: "Industry Interview", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80" },
  { id: 2, title: "Event Collaboration", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80" },
  { id: 3, title: "Panel Discussion", img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80" },
  { id: 4, title: "Networking Session", img: "https://images.unsplash.com/photo-1540575861501-7c0f110f6f87?w=600&q=80" },
  { id: 5, title: "Booth Highlights", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80" },
  { id: 6, title: "Expert Talk", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80" },
  { id: 7, title: "Tech Demonstration", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80" },
  { id: 8, title: "Community Meetup", img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80" },
  { id: 9, title: "Industry Sourcing", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80" },
  { id: 10, title: "Drone Expo 2025", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80" },
  { id: 11, title: "Strategic Planning", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" },
  { id: 12, title: "Global Summit", img: "https://images.unsplash.com/photo-1505373633569-e0930841775e?w=600&q=80" },
];

export default function GalleryPage() {
  const [query, setQuery] = useState('');

  const filtered = galleryPhotos.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="gallery-page animate-fade">
      <section className="catalog-hero">
        <div className="layout-container">
          <div className="hero-content-centered">
            <h1>Photo Gallery</h1>
            <p>Highlights from our events and collaborations.</p>
            <div className="title-underline"></div>
          </div>
          
          <div className="interactive-row">
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Search photos..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </div>
            
            <div className="actions-row">
              <button className="add-gallery-btn">+ Gallery</button>
              <div className="filter-select mini">
                <select>
                  <option>All Photos</option>
                  <option>Events</option>
                  <option>Products</option>
                </select>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="results-header layout-container">
        <div className="results-info">
          <h2>Gallery (48)</h2>
          <span className="page-count">Highlights 2026</span>
        </div>
      </section>

      <section className="gallery-content layout-container">
        <div className="gallery-grid">
          {filtered.map(photo => (
            <div key={photo.id} className="gallery-item-card rounded-24">
              <img src={photo.img} alt={photo.title} />
              <div className="photo-overlay">
                <span>{photo.title}</span>
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
        .gallery-page { padding-bottom: 100px; }
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

        .galls-page {
          background: #fbc819;
          min-height: 100vh;
          padding-bottom: 80px;
        }

        .catalog-hero {
          background: #fbc819;
          padding: 40px 0 20px;
        }

        .hero-content-centered {
          text-align: center;
          margin-bottom: 40px;
        }

        .hero-content-centered h1 {
          font-size: 3rem;
          font-weight: 900;
          color: #000;
          margin-bottom: 5px;
          letter-spacing: -2px;
        }

        .hero-content-centered p {
          font-size: 1.1rem;
          color: #333;
          font-weight: 600;
        }

        .title-underline {
          width: 60px;
          height: 4px;
          background: #000;
          margin: 15px auto 0;
          border-radius: 2px;
        }

        .interactive-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          background: rgba(255, 255, 255, 0.3);
          padding: 10px;
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .search-box {
          flex: 1;
          position: relative;
        }

        .search-box input {
          width: 100%;
          padding: 10px 20px 10px 40px;
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

        .actions-row {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .add-gallery-btn {
          background: #000;
          color: #fff;
          border: none;
          padding: 10px 25px;
          border-radius: 8px;
          font-weight: 800;
          font-size: 0.85rem;
          cursor: pointer;
        }

        .filter-select.mini {
          position: relative;
          min-width: 160px;
        }

        .filter-select select {
          width: 100%;
          appearance: none;
          padding: 10px 30px 10px 15px;
          border-radius: 8px;
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

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          margin-top: 30px;
        }

        .gallery-item-card {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: #000;
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          cursor: pointer;
        }

        .gallery-item-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .gallery-item-card:hover img {
          transform: scale(1.1);
          opacity: 0.7;
        }

        .photo-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
          padding: 20px 15px 10px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .gallery-item-card:hover .photo-overlay {
          opacity: 1;
        }

        .photo-overlay span {
          color: #fff;
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .rounded-24 { border-radius: 24px; }

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

        @media (max-width: 1200px) { .gallery-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 900px) { .gallery-grid { grid-template-columns: repeat(2, 1fr); .interactive-row { flex-direction: column; } } }
        @media (max-width: 600px) { .gallery-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
