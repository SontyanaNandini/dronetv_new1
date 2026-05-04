'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const products = [
  { id: 1, name: "Customized Metal Stamping Part, Steel with Zinc Plated", price: "US$ 0.39 - 0.65", unit: "Piece", category: "UAV Components", img: "/manufacturing.png" },
  { id: 2, name: "High-quality Super Capacitor, Up to 1,000C Discharge Current", price: "US$ 0.05 - 0.50", unit: "Piece", category: "Power Systems", img: "/power.png" },
  { id: 3, name: "Bulk Pushbutton Switch Assortment for Industrial Application", price: "US$ 3.00", unit: "Piece", category: "Sensors", img: "/sensors.png" },
  { id: 4, name: "Industrial high precision electrical connecting parts", price: "US$ 2.00", unit: "Piece", category: "UAV Components", img: "/manufacturing.png" },
  { id: 5, name: "Wholesale RG59 + Power Coaxial Cable CCTV/Satellite Use", price: "US$ 168.00", unit: "Kilometer", category: "GIS & GNSS", img: "/gis.png" },
  { id: 6, name: "VTOL Carbon Fiber Airframe for Fixed Wing Drones", price: "US$ 850.00", unit: "Unit", category: "UAV Components", img: "/hero.png" },
];

const categories = ["All Products", "UAV Components", "Power Systems", "Sensors", "GIS & GNSS", "AI Solutions", "Flight Controllers"];

export default function ProductsPage() {
  const [filter, setFilter] = useState("All Products");

  const filteredProducts = filter === "All Products"
    ? products
    : products.filter(p => p.category === filter);

  return (
    <div className="launchpad-page animate-fade">
      {/* Launchpad Hero Section */}
      <section className="launchpad-hero">
        <div className="layout-container hero-inner">
          <div className="hero-text-box">
            <h1 className="hero-title">NEW PRODUCT LAUNCHPAD</h1>
            <p className="hero-subtitle">Explore the hottest releases in the past two weeks</p>
          </div>
          <div className="hero-graphic">
            <div className="calendar-box">
              <div className="calendar-header">
                <div className="dots"><span></span><span></span><span></span></div>
              </div>
              <div className="calendar-body">
                <span className="new-tag">NEW</span>
              </div>
            </div>
            <div className="glow-effect"></div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="tabs-container">
        <div className="layout-container">
          <div className="tabs-wrapper">
            <button className="scroll-btn prev">‹</button>
            <div className="tabs-scroll">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`tab-item ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button className="scroll-btn next">›</button>
          </div>
        </div>
      </div>

      {/* Product Grid Section */}
      <section className="launchpad-content layout-container">
        <div className="launchpad-grid">
          {filteredProducts.map(product => (
            <Link href={`/marketplace/products/${product.id}`} key={product.id} className="launch-card">
              <div className="card-img-box">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="card-info">
                <h3 className="card-name">{product.name}</h3>
                <div className="card-price-row">
                  <span className="card-price">{product.price}</span>
                  <span className="card-unit">/ {product.unit}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bottom-nav">
          <Link href="/" className="back-link-bottom">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            Return to Home Portal
          </Link>
        </div>
      </section>

      <style jsx>{`
        .launchpad-page {
          background: #f4f6f9;
          min-height: 100vh;
          padding-bottom: 80px;
          color: #333;
        }

        .launchpad-hero {
          background: linear-gradient(135deg, #fff5e6 0%, #fffbf0 50%, #ffffff 100%);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid #eee;
        }

        .hero-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .hero-text-box {
          max-width: 600px;
          z-index: 2;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 900;
          color: #1a1a1a;
          letter-spacing: -1px;
          margin-bottom: 10px;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #666;
          font-weight: 500;
        }

        .hero-graphic {
          position: relative;
          width: 300px;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .calendar-box {
          background: #fff;
          width: 180px;
          height: 220px;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          transform: rotate(5deg);
          position: relative;
          z-index: 5;
          overflow: hidden;
          border: 1px solid #eee;
        }

        .calendar-header {
          background: #fbc819;
          height: 40px;
          display: flex;
          align-items: center;
          padding: 0 15px;
        }

        .dots {
          display: flex;
          gap: 6px;
        }

        .dots span {
          width: 8px;
          height: 8px;
          background: rgba(255,255,255,0.4);
          border-radius: 50%;
        }

        .calendar-body {
          height: 180px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .new-tag {
          font-size: 4rem;
          font-weight: 900;
          color: #000;
          letter-spacing: -2px;
        }

        .glow-effect {
          position: absolute;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(251, 200, 25, 0.15) 0%, transparent 70%);
          z-index: 1;
        }

        .tabs-container {
          background: #fff;
          position: sticky;
          top: 80px; /* Assuming header is sticky */
          z-index: 100;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
          padding: 10px 0;
        }

        .tabs-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .tabs-scroll {
          flex: 1;
          display: flex;
          overflow-x: auto;
          gap: 5px;
          scrollbar-width: none;
        }

        .tabs-scroll::-webkit-scrollbar { display: none; }

        .tab-item {
          padding: 12px 25px;
          background: transparent;
          border: none;
          white-space: nowrap;
          font-weight: 700;
          color: #666;
          cursor: pointer;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          border-radius: 4px;
        }

        .tab-item:hover { color: #fbc819; }

        .tab-item.active {
          background: #fbc819;
          color: #000;
        }

        .scroll-btn {
          width: 32px;
          height: 32px;
          background: #fff;
          border: 1px solid #eee;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.2rem;
          color: #999;
        }

        .launchpad-content {
          margin-top: 30px;
        }

        .launchpad-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 20px;
        }

        .launch-card {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
          text-decoration: none;
        }

        .launch-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .card-img-box {
          width: 100%;
          aspect-ratio: 1;
          background: #f8f8f8;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .card-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-info {
          padding: 15px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .card-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: #444;
          margin-bottom: 12px;
          line-height: 1.4;
          height: 40px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .card-price-row {
          margin-top: auto;
          display: flex;
          align-items: baseline;
          gap: 5px;
        }

        .card-price {
          font-size: 1rem;
          font-weight: 900;
          color: #1a1a1a;
        }

        .card-unit {
          font-size: 0.75rem;
          color: #888;
        }

        .bottom-nav {
          margin-top: 60px;
          display: flex;
          justify-content: center;
        }

        .back-link-bottom {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #000;
          background: #fbc819;
          padding: 15px 40px;
          font-weight: 900;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }

        .back-link-bottom:hover {
          background: #fff;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(251,200,25,0.3);
        }

        @media (max-width: 900px) {
          .hero-inner { flex-direction: column; text-align: center; }
          .hero-graphic { margin-top: 40px; }
          .hero-title { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
}
