'use client';

import React from 'react';
import Link from 'next/link';

const professionals = [
  { id: 1, name: "Dr. Sarah Chen", role: "AI Research Lead", specialty: "Autonomous Swarm Intelligence", exp: "12+ Yrs", img: "SC" },
  { id: 2, name: "Rajesh Kumar", role: "Industrial Pilot", specialty: "Mining & Volumetric Surveying", exp: "8 Yrs", img: "RK" },
  { id: 3, name: "Michael Vance", role: "UAV Designer", specialty: "Composite Airframes & VTOL", exp: "15 Yrs", img: "MV" },
  { id: 4, name: "Anita Desai", role: "GIS Analyst", specialty: "Precision Agriculture Analytics", exp: "6 Yrs", img: "AD" },
];

export default function ProfessionalsPage() {
  return (
    <div className="pros-page animate-fade">
      <section className="page-header">
        <div className="layout-container">
          <div className="breadcrumb">Ecosystem &gt; Professionals</div>
          <h1>Industry Professionals</h1>
          <p>Find and hire verified experts, certified pilots, and specialized UAV engineers for your projects.</p>
        </div>
      </section>

      <section className="pros-content layout-container">
        <div className="pros-grid">
          {professionals.map(pro => (
            <div key={pro.id} className="pro-card">
              <div className="pro-avatar">{pro.img}</div>
              <div className="pro-details">
                <h3>{pro.name}</h3>
                <div className="role-badge">{pro.role}</div>
                <div className="specialty">
                  <span>Specialty:</span>
                  <strong>{pro.specialty}</strong>
                </div>
                <div className="exp">Experience: {pro.exp}</div>
                <div className="pro-actions">
                  <button className="profile-btn">View CV</button>
                  <button className="hire-btn">Hire Now</button>
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
        .pros-page { background: #000; color: #fff; min-height: 100vh; padding-bottom: 100px; }
        .page-header { 
          background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.95)), url('/hero.png') center/cover;
          padding: 80px 0 40px; border-bottom: 1px solid #222;
        }
        .breadcrumb { font-size: 0.8rem; color: #fbc819; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 2px; }
        h1 { font-size: 3rem; font-weight: 900; margin-bottom: 15px; }
        .page-header p { color: #aaa; max-width: 600px; }

        .pros-content { padding-top: 60px; }
        .pros-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 40px; }
        .pro-card { background: #111; border: 1px solid #222; overflow: hidden; transition: all 0.3s ease; }
        .pro-card:hover { border-color: #fbc819; transform: scale(1.02); }
        .pro-avatar { height: 250px; background: #1a1a1a; display: flex; align-items: center; justify-content: center; font-size: 4rem; font-weight: 900; color: #fbc819; }
        .pro-details { padding: 30px; }
        .pro-details h3 { font-size: 1.5rem; font-weight: 800; margin-bottom: 8px; }
        .role-badge { background: #fbc819; color: #000; display: inline-block; padding: 2px 10px; font-weight: 800; font-size: 0.75rem; text-transform: uppercase; margin-bottom: 20px; }
        .specialty { font-size: 0.9rem; margin-bottom: 10px; }
        .specialty span { color: #666; margin-right: 5px; }
        .exp { font-size: 0.85rem; color: #aaa; margin-bottom: 25px; }
        .pro-actions { display: flex; gap: 10px; }
        .profile-btn { flex: 1; border: 1px solid #333; padding: 12px; font-weight: 700; color: #fff; }
        .hire-btn { flex: 1; background: #fff; color: #000; padding: 12px; font-weight: 800; }

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
