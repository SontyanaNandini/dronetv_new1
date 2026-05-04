'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const companies = [
  { id: 1, name: "SkyTech Dynamics", type: "Manufacturer", location: "Germany", rating: 4.8, description: "Industrial-grade heavy lift hexacopters.", logo: "SD", detailed: "SkyTech Dynamics specializes in the engineering and production of heavy-lift UAV platforms for industrial logistics, firefighting, and agricultural applications. Founded in 2015, we have deployed over 500 units globally with a focus on safety and endurance.", employees: "150+", established: "2015" },
  { id: 2, name: "GeoMap Solutions", type: "Service Provider", location: "India", rating: 4.9, description: "High-accuracy GIS and photogrammetry services.", logo: "GS", detailed: "GeoMap Solutions provides end-to-end geospatial intelligence. We specialize in LiDAR mapping, volumetric analysis for mines, and high-precision surveying for infrastructure projects across South Asia.", employees: "80+", established: "2018" },
  { id: 3, name: "AeroSense AI", type: "Software", location: "USA", rating: 4.7, description: "Autonomous navigation and analytics software.", logo: "AI", detailed: "AeroSense AI is a pioneer in computer vision and machine learning for UAVs. Our SLAM-based navigation kits allow drones to operate in GPS-denied environments such as tunnels and warehouses.", employees: "45", established: "2020" },
  { id: 4, name: "PowerFly Systems", type: "Components", location: "Japan", rating: 4.6, description: "Hydrogen fuel cell solutions for UAVs.", logo: "PF", detailed: "PowerFly is dedicated to extending UAV flight times through advanced power systems. Our hydrogen fuel cell kits provide up to 4x the endurance of traditional LiPo batteries.", employees: "120", established: "2012" },
  { id: 5, name: "DroneShield", type: "Security", location: "Australia", rating: 4.8, description: "Counter-drone and electronic warfare systems.", logo: "DS", detailed: "DroneShield provides world-leading multi-sensor detection and defeat capabilities against rogue drones. Our products are used by government, military, and critical infrastructure clients globally.", employees: "90", established: "2014" },
  { id: 6, name: "Volocopter", type: "Mobility", location: "Germany", rating: 4.9, description: "Pioneering urban air mobility and air taxis.", logo: "VC", detailed: "Volocopter is building the world's first sustainable and scalable urban air mobility business to bring affordable air taxi services to megacities worldwide.", employees: "500+", established: "2011" },
  { id: 7, name: "Wingtra", type: "Surveying", location: "Switzerland", rating: 4.8, description: "Professional VTOL drones for mapping.", logo: "WT", detailed: "Wingtra is the world's leading VTOL drone producer for mapping, surveying, and mining. Our flagship drone, WingtraOne, is used by professionals in 90+ countries.", employees: "100+", established: "2016" },
  { id: 8, name: "DJI Enterprise", type: "Industrial", location: "China", rating: 4.7, description: "Global leader in commercial drone solutions.", logo: "DJ", detailed: "DJI Enterprise provides specialized UAV hardware and software solutions for energy, public safety, and infrastructure inspection.", employees: "5000+", established: "2006" },
];

export default function CompanyProfilePage() {
  const params = useParams();
  const companyId = parseInt(params.id as string);
  const company = companies.find(c => c.id === companyId) || companies[0];

  return (
    <div className="profile-page animate-fade">
      <section className="profile-hero">
        <div className="layout-container">
          <Link href="/ecosystem/companies" className="back-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Companies
          </Link>
          <div className="hero-content">
            <div className="profile-logo">{company.logo}</div>
            <div className="hero-text">
              <div className="badge">{company.type}</div>
              <h1>{company.name}</h1>
              <div className="loc">📍 {company.location} • Established {company.established}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-details layout-container">
        <div className="profile-grid">
          <div className="main-info">
            <div className="info-section">
              <h2>Company Overview</h2>
              <p>{company.detailed}</p>
            </div>

            <div className="stats-row">
              <div className="stat-card">
                <span>Rating</span>
                <strong>{company.rating} / 5.0</strong>
              </div>
              <div className="stat-card">
                <span>Team Size</span>
                <strong>{company.employees} Professionals</strong>
              </div>
              <div className="stat-card">
                <span>Status</span>
                <strong className="status-verified">Verified Supplier</strong>
              </div>
            </div>

            <div className="info-section">
              <h2>Capabilities & Solutions</h2>
              <ul className="capabilities-list">
                <li>End-to-end Industrial Integration</li>
                <li>Global Support & Maintenance</li>
                <li>Custom R&D and Prototyping</li>
                <li>Regulatory Compliance Assistance</li>
              </ul>
            </div>
          </div>

          <aside className="contact-sidebar">
            <div className="contact-box glass-card">
              <h3>Inquire with {company.name}</h3>
              <p>Direct communication with the manufacturer's sales team.</p>
              <form className="sidebar-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Business Email" />
                <textarea placeholder="Tell us about your requirements..." rows={4}></textarea>
                <button type="submit" className="inquiry-btn">Send Inquiry</button>
              </form>
            </div>

            <div className="social-links">
              <a href="#">Official Website</a>
              <a href="#">LinkedIn Profile</a>
            </div>
          </aside>
        </div>

        <div className="bottom-nav">
          <Link href="/" className="back-link-bottom">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Return to Home Portal
          </Link>
        </div>
      </section>

      <style jsx>{`
        .profile-page { background: #000; color: #fff; min-height: 100vh; padding-bottom: 100px; }
        
        .profile-hero { 
          background: linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url('/manufacturing.png') center/cover;
          padding: 60px 0 80px; border-bottom: 2px solid #fbc819;
        }

        .back-link { 
          display: flex; align-items: center; gap: 8px; color: #aaa; 
          font-size: 0.9rem; font-weight: 700; margin-bottom: 40px; transition: color 0.3s ease;
        }
        .back-link:hover { color: #fbc819; }

        .hero-content { display: flex; gap: 40px; align-items: center; }
        .profile-logo { 
          width: 140px; height: 140px; background: #fbc819; color: #000;
          display: flex; align-items: center; justify-content: center;
          font-size: 3.5rem; font-weight: 900;
        }
        .hero-text h1 { font-size: 3.5rem; font-weight: 900; margin-bottom: 10px; letter-spacing: -1px; }
        .badge { background: rgba(251, 200, 25, 0.1); color: #fbc819; border: 1px solid #fbc819; padding: 4px 12px; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; display: inline-block; margin-bottom: 15px; }
        .loc { font-size: 1.1rem; color: #888; }

        .profile-details { padding-top: 80px; }
        .profile-grid { display: grid; grid-template-columns: 1fr 350px; gap: 80px; }

        .info-section { margin-bottom: 60px; }
        .info-section h2 { font-size: 1.8rem; font-weight: 800; color: #fbc819; margin-bottom: 25px; text-transform: uppercase; }
        .info-section p { font-size: 1.15rem; color: #ccc; line-height: 1.7; }

        .stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 60px; }
        .stat-card { background: #111; padding: 25px; border: 1px solid #222; }
        .stat-card span { display: block; font-size: 0.8rem; color: #666; text-transform: uppercase; font-weight: 800; margin-bottom: 10px; }
        .stat-card strong { font-size: 1.2rem; color: #fff; }
        .status-verified { color: #4CAF50 !important; }

        .capabilities-list { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .capabilities-list li { display: flex; align-items: center; gap: 10px; color: #aaa; font-size: 1rem; }
        .capabilities-list li::before { content: '✓'; color: #fbc819; font-weight: 900; }

        .contact-box { padding: 40px; border: 1px solid #222; background: #0a0a0a; }
        .contact-box h3 { font-size: 1.3rem; font-weight: 800; margin-bottom: 15px; color: #fff; }
        .contact-box p { font-size: 0.9rem; color: #666; margin-bottom: 30px; }
        .sidebar-form { display: flex; flex-direction: column; gap: 15px; }
        .sidebar-form input, .sidebar-form textarea { background: #000; border: 1px solid #333; padding: 12px; color: #fff; border-radius: 0; outline: none; }
        .sidebar-form input:focus, .sidebar-form textarea:focus { border-color: #fbc819; }
        .inquiry-btn { background: #fbc819; color: #000; font-weight: 900; padding: 15px; text-transform: uppercase; margin-top: 10px; transition: all 0.3s ease; }
        .inquiry-btn:hover { background: #fff; transform: translateY(-3px); }

        .social-links { margin-top: 30px; display: flex; flex-direction: column; gap: 15px; }
        .social-links a { color: #fbc819; font-weight: 700; border-bottom: 1px solid #333; padding-bottom: 5px; width: fit-content; transition: color 0.3s ease; }
        .social-links a:hover { color: #fff; }

        .bottom-nav { margin-top: 100px; padding-top: 40px; border-top: 1px solid #222; display: flex; justify-content: center; }
        .back-link-bottom { 
          display: flex; align-items: center; gap: 12px; color: #000; 
          background: #fbc819; padding: 15px 40px; font-weight: 900; 
          text-transform: uppercase; transition: all 0.3s ease;
        }
        .back-link-bottom:hover { background: #fff; transform: translateY(-5px); box-shadow: 0 10px 30px rgba(251,200,25,0.3); }

        @media (max-width: 1000px) {
          .profile-grid { grid-template-columns: 1fr; gap: 60px; }
          .hero-content { flex-direction: column; text-align: center; }
          .hero-text h1 { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
}
