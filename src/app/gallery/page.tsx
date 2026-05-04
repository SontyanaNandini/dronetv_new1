'use client';

import React from 'react';
import Link from 'next/link';

const galleryItems = [
  { id: 1, title: "Precision Mapping", img: "/gis.png" },
  { id: 2, title: "Heavy Lift Operations", img: "/manufacturing.png" },
  { id: 3, title: "Industrial Sourcing", img: "/hero.png" },
  { id: 4, title: "Autonomous Swarms", img: "/manufacturing.png" },
  { id: 5, title: "Field Surveying", img: "/gis.png" },
  { id: 6, title: "UAV Assembly", img: "/hero.png" },
  { id: 7, title: "Arctic Research", img: "/gis.png" },
  { id: 8, title: "Urban Air Mobility", img: "/manufacturing.png" },
  { id: 9, title: "Night Surveillance", img: "/hero.png" },
  { id: 10, title: "Offshore Wind Inspection", img: "/manufacturing.png" },
  { id: 11, title: "Smart City Mapping", img: "/gis.png" },
  { id: 12, title: "Tunnel Inspection", img: "/hero.png" },
  { id: 13, title: "Precision Spraying", img: "/manufacturing.png" },
  { id: 14, title: "Emergency Response", img: "/gis.png" },
  { id: 15, title: "Livestock Monitoring", img: "/hero.png" },
  { id: 16, title: "Underwater ROV Support", img: "/manufacturing.png" },
];

export default function GalleryPage() {
  return (
    <div className="gallery-page animate-fade">
      <section className="page-header">
        <div className="layout-container">
          <div className="breadcrumb">Resources &gt; Gallery</div>
          <h1>UAV Visual Showcase</h1>
          <p>A curated collection of the most advanced drone technologies and field deployments across the globe.</p>
        </div>
      </section>

      <section className="gallery-content layout-container">
        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-img-wrapper">
                <img src={item.img} alt={item.title} />
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <button className="expand-btn">View Full Size</button>
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
        .gallery-page { background: #000; color: #fff; min-height: 100vh; padding-bottom: 100px; }
        .page-header { 
          background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.95)), url('/manufacturing.png') center/cover;
          padding: 80px 0 40px; border-bottom: 1px solid #222;
        }
        .breadcrumb { font-size: 0.8rem; color: #fbc819; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 2px; }
        h1 { font-size: 3rem; font-weight: 900; margin-bottom: 15px; }

        .gallery-content { padding-top: 60px; }
        .gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); gap: 15px; }
        .gallery-item { position: relative; overflow: hidden; background: #0a0a0a; aspect-ratio: 16/10; border: 1px solid #111; }
        .gallery-img-wrapper { height: 100%; transition: transform 0.5s ease; }
        .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .gallery-item:hover img { transform: scale(1.1); }
        
        .gallery-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.75); display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; backdrop-filter: blur(5px); }
        .gallery-item:hover .gallery-overlay { opacity: 1; }
        .gallery-overlay h3 { font-size: 1.5rem; font-weight: 800; color: #fff; margin-bottom: 20px; transform: translateY(20px); transition: transform 0.3s ease; }
        .gallery-item:hover .gallery-overlay h3 { transform: translateY(0); }
        .expand-btn { background: #fbc819; color: #000; font-weight: 800; padding: 10px 25px; text-transform: uppercase; font-size: 0.8rem; transition: background 0.3s ease; }
        .expand-btn:hover { background: #fff; }

        .bottom-nav { margin-top: 80px; padding-top: 40px; border-top: 1px solid #222; display: flex; justify-content: center; }
        .back-link-bottom { 
          display: flex; align-items: center; gap: 12px; color: #000; 
          background: #fbc819; padding: 15px 40px; font-weight: 900; 
          text-transform: uppercase; transition: all 0.3s ease;
        }
        .back-link-bottom:hover { background: #fff; transform: translateY(-5px); box-shadow: 0 10px 30px rgba(251,200,25,0.3); }

        @media (max-width: 600px) {
          .gallery-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
