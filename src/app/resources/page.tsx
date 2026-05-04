'use client';

import React from 'react';
import Link from 'next/link';

export default function ResourcesLandingPage() {
  const resourceCards = [
    { title: "About Us", desc: "Learn about our mission, vision, and the leadership team driving innovation.", link: "/about", icon: "🏢" },
    { title: "Video Library", desc: "Watch product launches, technical tutorials, and industry news.", link: "/videos", icon: "🎬" },
    { title: "Gallery", desc: "Browse high-impact visuals of UAV technology and field deployments.", link: "/gallery", icon: "🖼️" },
    { title: "Whitepapers", desc: "Deep-dive technical documents and industry research reports.", link: "#", icon: "📄" },
    { title: "Case Studies", desc: "Real-world examples of UAV technology solving complex problems.", link: "#", icon: "📊" },
    { title: "FAQ", desc: "Frequently asked questions about our marketplace and ecosystem.", link: "#", icon: "❓" },
  ];

  return (
    <div className="resources-landing animate-fade">
      <section className="page-header">
        <div className="layout-container">
          <div className="breadcrumb">Resources</div>
          <h1>Knowledge & Discovery Hub</h1>
          <p>Everything you need to stay informed and excel in the global drone industry.</p>
        </div>
      </section>

      <section className="resources-content layout-container">
        <div className="resources-grid">
          {resourceCards.map((card, i) => (
            <Link href={card.link} key={i} className="resource-card-link">
              <div className="resource-card glass-card">
                <div className="card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <span className="explore-link">Explore Hub &gt;</span>
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
        .resources-landing { background: #000; color: #fff; min-height: 100vh; padding-bottom: 100px; }
        .page-header { 
          background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.95)), url('/gis.png') center/cover;
          padding: 80px 0 40px; border-bottom: 1px solid #222;
        }
        .breadcrumb { font-size: 0.8rem; color: #fbc819; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 2px; }
        h1 { font-size: 3rem; font-weight: 900; margin-bottom: 15px; }

        .resources-content { padding-top: 60px; }
        .resources-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 30px; }
        .resource-card-link { text-decoration: none; }
        .resource-card { padding: 40px; border: 1px solid #222; background: #0a0a0a; transition: all 0.3s ease; height: 100%; display: flex; flex-direction: column; }
        .resource-card:hover { border-color: #fbc819; transform: translateY(-5px); }
        .card-icon { font-size: 2.5rem; margin-bottom: 20px; }
        .resource-card h3 { font-size: 1.5rem; font-weight: 800; color: #fff; margin-bottom: 15px; }
        .resource-card p { color: #666; line-height: 1.5; margin-bottom: 25px; flex-grow: 1; }
        .explore-link { color: #fbc819; font-weight: 800; font-size: 0.85rem; text-transform: uppercase; }

        .bottom-nav { margin-top: 80px; padding-top: 40px; border-top: 1px solid #222; display: flex; justify-content: center; }
        .back-link-bottom { 
          display: flex; align-items: center; gap: 12px; color: #000; 
          background: #fbc819; padding: 15px 40px; font-weight: 900; 
          text-transform: uppercase; transition: all 0.3s ease;
        }
        .back-link-bottom:hover { background: #fff; transform: translateY(-5px); box-shadow: 0 10px 30px rgba(251,200,25,0.3); }

        @media (max-width: 600px) {
          .resources-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
