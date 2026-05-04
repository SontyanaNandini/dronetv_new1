'use client';

import React from 'react';
import Link from 'next/link';

const events = [
  { id: 1, name: "Global Drone Expo 2026", date: "11-14 April", loc: "Dubai, UAE", type: "Exhibition", status: "Open" },
  { id: 2, name: "UAV Innovation Summit", date: "22-24 May", loc: "Singapore", type: "Conference", status: "Filling Fast" },
  { id: 3, name: "AgriDrone Field Days", date: "15 June", loc: "Iowa, USA", type: "Live Demo", status: "Limited" },
  { id: 4, name: "Drone Logistics Summit", date: "02-04 July", loc: "London, UK", type: "B2B Meeting", status: "Coming Soon" },
];

export default function EventsPage() {
  return (
    <div className="events-page animate-fade">
      <section className="page-header">
        <div className="layout-container">
          <div className="breadcrumb">Ecosystem &gt; Events</div>
          <h1>Upcoming Industry Events</h1>
          <p>Stay ahead of the curve by attending the world's most influential drone expos and conferences.</p>
        </div>
      </section>

      <section className="events-content layout-container">
        <div className="events-table">
          <div className="table-header">
            <span>Event Name</span>
            <span>Date</span>
            <span>Location</span>
            <span>Type</span>
            <span>Status</span>
            <span>Action</span>
          </div>
          {events.map(event => (
            <div key={event.id} className="table-row">
              <span className="ev-name">{event.name}</span>
              <span>{event.date}</span>
              <span>{event.loc}</span>
              <span className="ev-type">{event.type}</span>
              <span className={`ev-status ${event.status.toLowerCase().replace(' ', '-')}`}>{event.status}</span>
              <button className="reg-btn">Register</button>
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
        .events-page { background: #000; color: #fff; min-height: 100vh; padding-bottom: 100px; }
        .page-header { 
          background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.95)), url('/gis.png') center/cover;
          padding: 80px 0 40px; border-bottom: 1px solid #222;
        }
        .breadcrumb { font-size: 0.8rem; color: #fbc819; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 2px; }
        h1 { font-size: 3rem; font-weight: 900; margin-bottom: 15px; }
        .page-header p { color: #aaa; max-width: 600px; }

        .events-content { padding-top: 60px; }
        .events-table { background: #111; border: 1px solid #222; overflow-x: auto; }
        .table-header { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr; padding: 20px; background: #1a1a1a; font-weight: 800; font-size: 0.8rem; text-transform: uppercase; color: #666; border-bottom: 1px solid #333; min-width: 800px; }
        .table-row { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr; padding: 25px 20px; align-items: center; border-bottom: 1px solid #222; transition: background 0.3s ease; min-width: 800px; }
        .table-row:hover { background: #1a1a1a; }
        .ev-name { font-weight: 800; color: #fbc819; font-size: 1.1rem; }
        .ev-type { font-size: 0.8rem; color: #aaa; }
        .ev-status { font-size: 0.7rem; font-weight: 800; text-transform: uppercase; padding: 4px 8px; border: 1px solid; width: fit-content; }
        .ev-status.open { color: #4CAF50; border-color: #4CAF50; }
        .ev-status.filling-fast { color: #fbc819; border-color: #fbc819; }
        .ev-status.limited { color: #FF5722; border-color: #FF5722; }
        .ev-status.coming-soon { color: #aaa; border-color: #aaa; }
        .reg-btn { background: #fff; color: #000; font-weight: 800; padding: 8px 15px; font-size: 0.85rem; transition: background 0.3s ease; }
        .reg-btn:hover { background: #fbc819; }

        .bottom-nav { margin-top: 80px; padding-top: 40px; border-top: 1px solid #222; display: flex; justify-content: center; }
        .back-link-bottom { 
          display: flex; align-items: center; gap: 12px; color: #000; 
          background: #fbc819; padding: 15px 40px; font-weight: 900; 
          text-transform: uppercase; transition: all 0.3s ease;
        }
        .back-link-bottom:hover { background: #fff; transform: translateY(-5px); box-shadow: 0 10px 30px rgba(251,200,25,0.3); }

        @media (max-width: 1000px) {
          .table-header { display: none; }
          .table-row { grid-template-columns: 1fr 1fr; gap: 15px; height: auto; padding: 20px; }
        }
      `}</style>
    </div>
  );
}
