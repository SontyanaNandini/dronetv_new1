'use client';

import React from 'react';
import Link from 'next/link';

const videoCategories = ["All", "Product Launch", "Tutorials", "Case Studies", "Industry News"];

const videos = [
  { id: 1, title: "DJI Agras T50 In-Depth Review", category: "Tutorials", duration: "12:45", views: "45k", thumb: "/manufacturing.png" },
  { id: 2, title: "How AI is Changing Precision Agriculture", category: "Case Studies", duration: "08:20", views: "12k", thumb: "/hero.png" },
  { id: 3, title: "Introducing the SkyTech H1 Heavy Lifter", category: "Product Launch", duration: "03:15", views: "85k", thumb: "/gis.png" },
  { id: 4, title: "Drone Regulations Update April 2026", category: "Industry News", duration: "05:50", views: "30k", thumb: "/manufacturing.png" },
  { id: 5, title: "Autonomous Swarm Intelligence Future", category: "Industry News", duration: "09:30", views: "18k", thumb: "/hero.png" },
  { id: 6, title: "LiDAR Data Processing Masterclass", category: "Tutorials", duration: "25:10", views: "22k", thumb: "/gis.png" },
  { id: 7, title: "Mining Surveying in high altitudes", category: "Case Studies", duration: "15:40", views: "8k", thumb: "/manufacturing.png" },
  { id: 8, title: "VTOL Design: Engineering Deep Dive", category: "Product Launch", duration: "11:20", views: "55k", thumb: "/hero.png" },
  { id: 9, title: "UAV Swarms for Urban Search and Rescue", category: "Case Studies", duration: "07:15", views: "34k", thumb: "/gis.png" },
  { id: 10, title: "Public Safety Drone Implementation", category: "Industry News", duration: "06:40", views: "15k", thumb: "/manufacturing.png" },
  { id: 11, title: "Hyperspectral Mapping in the Amazon", category: "Case Studies", duration: "18:25", views: "5k", thumb: "/hero.png" },
  { id: 12, title: "Next-Gen Battery Tech: 4-Hour Flights", category: "Product Launch", duration: "04:50", views: "92k", thumb: "/gis.png" },
];

export default function VideosPage() {
  return (
    <div className="videos-page animate-fade">
      <section className="page-header">
        <div className="layout-container">
          <div className="breadcrumb">Resources &gt; Video Library</div>
          <h1>UAV Video Knowledge Base</h1>
          <p>The ultimate digital video resource for drone professionals, containing product deep-dives, industry expert interviews, and case studies.</p>
        </div>
      </section>

      <section className="videos-content layout-container">
        <div className="filter-bar">
          {videoCategories.map(cat => (
            <button key={cat} className={`filter-btn ${cat === "All" ? "active" : ""}`}>{cat}</button>
          ))}
        </div>

        <div className="video-grid">
          {videos.map(video => (
            <div key={video.id} className="video-card">
              <div className="video-thumb" style={{backgroundImage: `url(${video.thumb})`}}>
                <div className="play-icon">▶</div>
                <div className="duration-tag">{video.duration}</div>
              </div>
              <div className="video-info">
                <span className="vid-cat">{video.category}</span>
                <h3>{video.title}</h3>
                <div className="vid-meta">{video.views} views • 1 week ago</div>
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
        .videos-page { background: #000; color: #fff; min-height: 100vh; padding-bottom: 100px; }
        .page-header { 
          background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.95)), url('/gis.png') center/cover;
          padding: 80px 0 40px; border-bottom: 1px solid #222;
        }
        .breadcrumb { font-size: 0.8rem; color: #fbc819; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 2px; }
        h1 { font-size: 3rem; font-weight: 900; margin-bottom: 15px; }

        .videos-content { padding-top: 40px; }
        .filter-bar { display: flex; gap: 15px; margin-bottom: 40px; flex-wrap: wrap; }
        .filter-btn { background: #111; color: #fff; border: 1px solid #222; padding: 10px 25px; font-weight: 700; transition: all 0.3s ease; }
        .filter-btn.active, .filter-btn:hover { background: #fbc819; color: #000; border-color: #fbc819; }

        .video-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 30px; }
        .video-card { background: #0a0a0a; border: 1px solid #111; transition: transform 0.3s ease; }
        .video-card:hover { transform: translateY(-5px); border-color: #333; }
        .video-thumb { height: 200px; background-size: cover; background-position: center; position: relative; display: flex; align-items: center; justify-content: center; }
        .play-icon { width: 60px; height: 60px; background: rgba(251, 200, 25, 0.8); border-radius: 50%; color: #000; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; padding-left: 5px; opacity: 0; transition: opacity 0.3s ease; }
        .video-card:hover .play-icon { opacity: 1; }
        .duration-tag { position: absolute; bottom: 10px; right: 10px; background: rgba(0,0,0,0.8); padding: 2px 8px; font-size: 0.75rem; font-weight: 800; }
        
        .video-info { padding: 20px; }
        .vid-cat { font-size: 0.7rem; color: #fbc819; text-transform: uppercase; font-weight: 800; margin-bottom: 10px; display: block; }
        .video-info h3 { font-size: 1.2rem; font-weight: 800; color: #fff; margin-bottom: 10px; line-height: 1.4; }
        .vid-meta { font-size: 0.8rem; color: #555; }

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
