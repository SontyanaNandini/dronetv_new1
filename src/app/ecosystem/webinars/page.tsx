'use client';

import React from 'react';
import Link from 'next/link';

const webinars = [
  { id: 1, title: "Mastering BVLOS Operations", speaker: "John Smith", category: "Training", duration: "45 min", views: "1.2k" },
  { id: 2, title: "UAV Data Processing with AI", speaker: "Sarah Chen", category: "Tech", duration: "60 min", views: "3.5k" },
  { id: 3, title: "Future of Urban Air Mobility", speaker: "Michael Vance", category: "Insights", duration: "30 min", views: "800" },
  { id: 4, title: "Hydrogen Fuel Cell Integration", speaker: "David Wu", category: "Hardware", duration: "50 min", views: "2.1k" },
];

export default function WebinarsPage() {
  return (
    <div className="webinars-page animate-fade">
      <section className="page-header">
        <div className="layout-container">
          <div className="breadcrumb">Ecosystem &gt; Webinars</div>
          <h1>Digital Learning & Webinars</h1>
          <p>Access exclusive masterclasses and webinars from industry leaders to keep your team at the cutting edge.</p>
        </div>
      </section>

      <section className="webinars-content layout-container">
        <div className="webinars-grid">
          {webinars.map(web => (
            <div key={web.id} className="webinar-card">
              <div className="webinar-thumb">
                <div className="play-btn">▶</div>
                <div className="dur-tag">{web.duration}</div>
              </div>
              <div className="webinar-info">
                <span className="web-cat">{web.category}</span>
                <h3>{web.title}</h3>
                <div className="web-speaker">With {web.speaker}</div>
                <div className="web-meta">{web.views} views • Recorded 2 days ago</div>
                <button className="watch-btn">Watch Now</button>
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
        .webinars-page { background: #000; color: #fff; min-height: 100vh; padding-bottom: 100px; }
        .page-header { 
          background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.95)), url('/manufacturing.png') center/cover;
          padding: 80px 0 40px; border-bottom: 1px solid #222;
        }
        .breadcrumb { font-size: 0.8rem; color: #fbc819; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 2px; }
        h1 { font-size: 3rem; font-weight: 900; margin-bottom: 15px; }
        .page-header p { color: #aaa; max-width: 600px; }

        .webinars-content { padding-top: 60px; }
        .webinars-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 30px; }
        .webinar-card { background: #111; border: 1px solid #222; transition: all 0.3s ease; }
        .webinar-card:hover { border-color: #fbc819; transform: translateY(-5px); }
        .webinar-thumb { height: 180px; background: #1a1a1a; position: relative; display: flex; align-items: center; justify-content: center; border-bottom: 2px solid #222; }
        .play-btn { width: 60px; height: 60px; background: rgba(251, 200, 25, 0.8); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: #000; padding-left: 5px; cursor: pointer; transition: transform 0.3s ease; }
        .play-btn:hover { transform: scale(1.1); background: #fbc819; }
        .dur-tag { position: absolute; bottom: 10px; right: 10px; background: rgba(0,0,0,0.8); padding: 2px 8px; font-size: 0.75rem; font-weight: 800; }
        .webinar-info { padding: 25px; }
        .web-cat { font-size: 0.7rem; color: #fbc819; font-weight: 800; text-transform: uppercase; margin-bottom: 10px; display: block; }
        .webinar-info h3 { font-size: 1.2rem; font-weight: 800; margin-bottom: 10px; color: #fff; line-height: 1.4; }
        .web-speaker { color: #666; font-size: 0.9rem; margin-bottom: 15px; }
        .web-meta { font-size: 0.8rem; color: #444; margin-bottom: 25px; }
        .watch-btn { width: 100%; border: 1px solid #333; padding: 12px; font-weight: 700; color: #fff; transition: all 0.3s ease; background: transparent; cursor: pointer; }
        .watch-btn:hover { background: #fff; color: #000; border-color: #fff; }

        .bottom-nav { margin-top: 80px; padding-top: 40px; border-top: 1px solid #222; display: flex; justify-content: center; }
        .back-link-bottom { 
          display: flex; align-items: center; gap: 12px; color: #000; 
          background: #fbc819; padding: 15px 40px; font-weight: 900; 
          text-transform: uppercase; transition: all 0.3s ease;
        }
        .back-link-bottom:hover { background: #fff; transform: translateY(-5px); box-shadow: 0 10px 30px rgba(251,200,25,0.3); }
      `}</style>
    </div>
  );
}
