'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const productsData = [
  { id: '1', name: "Customized Metal Stamping Part, Steel with Zinc Plated", price: "US$ 0.39 - 0.65", unit: "Piece", category: "UAV Components", img: "/manufacturing.png", description: "High-precision zinc-plated steel components designed for industrial UAV chassis and structural integrity." },
  { id: '2', name: "High-quality Super Capacitor, Up to 1,000C Discharge Current", price: "US$ 0.05 - 0.50", unit: "Piece", category: "Power Systems", img: "/power.png", description: "Ultra-high discharge capacitor for emergency power backups and rapid energy release in professional drone systems." },
  { id: '3', name: "Bulk Pushbutton Switch Assortment for Industrial Application", price: "US$ 3.00", unit: "Piece", category: "Sensors", img: "/sensors.png", description: "Standardized industrial switches for drone control interfaces and power management modules." },
  { id: '4', name: "Industrial high precision electrical connecting parts", price: "US$ 2.00", unit: "Piece", category: "UAV Components", img: "/manufacturing.png", description: "Precision electrical connectors for stable signal transmission in high-vibration drone environments." },
  { id: '5', name: "Wholesale RG59 + Power Coaxial Cable CCTV/Satellite Use", price: "US$ 168.00", unit: "Kilometer", category: "GIS & GNSS", img: "/gis.png", description: "Heavy-duty coaxial cables for base station setup and long-range communication infrastructure." },
];

export default function ProductDetailPage() {
  const { id } = useParams();
  // Find product by id, fallback to first product for demo
  const product = productsData.find(p => p.id === String(id)) || productsData[0];

  return (
    <div className="product-detail-page animate-fade">
      {/* Product Hero (Launchpad Style) */}
      <section className="product-hero">
        <div className="layout-container hero-inner">
          <div className="hero-text-box">
            <span className="detail-cat">{product.category}</span>
            <h1 className="hero-title">{product.name}</h1>
            <div className="detail-price-box">
              <span className="price-label">Price:</span>
              <span className="price-value">{product.price}</span>
              <span className="price-unit">/ {product.unit}</span>
            </div>
            <div className="action-btns">
              <button className="primary-btn">Contact Supplier</button>
              <button className="secondary-btn">Inquiry Now</button>
            </div>
          </div>
          <div className="hero-image-box">
            <img src={product.img} alt={product.name} className="main-prod-img" />
            <div className="image-glow"></div>
          </div>
        </div>
      </section>

      {/* Product Specs / Info */}
      <section className="detail-content layout-container">
        <div className="specs-grid">
          <div className="specs-main">
            <h2>Product Description</h2>
            <p className="description-text">{product.description}</p>
            
            <div className="technical-specs">
              <h3>Technical Specifications</h3>
              <table className="specs-table">
                <tbody>
                  <tr><td>Material</td><td>Industrial Grade Steel / Composite</td></tr>
                  <tr><td>Certification</td><td>ISO 9001, CE, RoHS</td></tr>
                  <tr><td>Lead Time</td><td>7-15 Days</td></tr>
                  <tr><td>Customization</td><td>Available on request</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <aside className="supplier-sidebar">
            <div className="supplier-card">
              <h3>Supplier Information</h3>
              <p className="supplier-name">Verified UAV Parts Ltd.</p>
              <div className="trust-badges">
                <span className="badge-verified">Verified Gold</span>
              </div>
              <button className="visit-store">Visit Store</button>
            </div>
          </aside>
        </div>

        <div className="bottom-nav">
          <Link href="/marketplace/products" className="back-link-bottom">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            Back to Launchpad
          </Link>
        </div>
      </section>

      <style jsx>{`
        .product-detail-page {
          background: #f4f6f9;
          min-height: 100vh;
          padding-bottom: 80px;
          color: #333;
        }

        .product-hero {
          background: linear-gradient(135deg, #fff5e6 0%, #fffbf0 50%, #ffffff 100%);
          padding: 80px 0;
          border-bottom: 1px solid #eee;
        }

        .hero-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .detail-cat {
          font-size: 0.9rem;
          color: #ff3e30;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 15px;
          display: block;
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: 900;
          color: #1a1a1a;
          line-height: 1.1;
          margin-bottom: 25px;
        }

        .detail-price-box {
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          display: inline-flex;
          align-items: baseline;
          gap: 10px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          margin-bottom: 35px;
        }

        .price-label { font-size: 0.9rem; color: #888; font-weight: 600; }
        .price-value { font-size: 1.8rem; font-weight: 900; color: #ff3e30; }
        .price-unit { font-size: 0.9rem; color: #666; }

        .action-btns { display: flex; gap: 15px; }
        .primary-btn { 
          background: #ff3e30; border: none; color: #fff; padding: 15px 35px; 
          border-radius: 4px; font-weight: 800; text-transform: uppercase; cursor: pointer;
        }
        .secondary-btn { 
          background: transparent; border: 2px solid #ff3e30; color: #ff3e30; padding: 13px 33px; 
          border-radius: 4px; font-weight: 800; text-transform: uppercase; cursor: pointer;
        }

        .hero-image-box { position: relative; }
        .main-prod-img { 
          width: 100%; aspect-ratio: 1; object-fit: contain; 
          position: relative; z-index: 2; 
        }
        .image-glow {
          position: absolute; width: 120%; height: 120%; top: -10%; left: -10%;
          background: radial-gradient(circle, rgba(255, 62, 48, 0.05) 0%, transparent 70%);
          z-index: 1;
        }

        .detail-content { margin-top: 50px; }
        .specs-grid { display: grid; grid-template-columns: 1fr 320px; gap: 40px; }
        
        .specs-main { 
          background: #fff; padding: 40px; border-radius: 8px; 
          box-shadow: 0 4px 15px rgba(0,0,0,0.05); 
        }
        .specs-main h2 { font-size: 1.5rem; font-weight: 800; margin-bottom: 20px; }
        .description-text { line-height: 1.7; color: #555; margin-bottom: 40px; }

        .technical-specs h3 { font-size: 1.2rem; font-weight: 800; margin-bottom: 15px; }
        .specs-table { width: 100%; border-collapse: collapse; }
        .specs-table td { padding: 12px 0; border-bottom: 1px solid #eee; font-size: 0.9rem; }
        .specs-table td:first-child { color: #999; font-weight: 600; width: 150px; }
        .specs-table td:last-child { color: #333; font-weight: 700; }

        .supplier-card { 
          background: #fff; padding: 30px; border-radius: 8px; 
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          position: sticky; top: 150px;
        }
        .supplier-card h3 { font-size: 1rem; color: #888; text-transform: uppercase; margin-bottom: 15px; }
        .supplier-name { font-size: 1.2rem; font-weight: 800; margin-bottom: 10px; }
        .badge-verified { 
          background: #ecfdf5; color: #10b981; padding: 4px 10px; 
          border-radius: 4px; font-size: 0.75rem; font-weight: 800; 
        }
        .visit-store { 
          width: 100%; margin-top: 25px; padding: 12px; 
          background: #fff; border: 1px solid #ddd; font-weight: 700; cursor: pointer;
        }

        .bottom-nav { margin-top: 60px; display: flex; justify-content: center; }
        .back-link-bottom { 
          display: flex; 
          align-items: center; 
          gap: 15px; 
          color: #000; 
          border: 2px solid #000; 
          padding: 12px 30px; 
          font-weight: 800; 
          font-size: 0.85rem; 
          text-transform: uppercase; 
          letter-spacing: 1px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 4px;
          text-decoration: none;
        }
        .back-link-bottom svg { transition: transform 0.3s ease; }
        .back-link-bottom:hover { 
          background: #000; 
          color: #fbc819; 
          transform: translateY(-5px); 
          box-shadow: 0 10px 30px rgba(0,0,0,0.15); 
        }
        .back-link-bottom:hover svg { transform: translateX(-5px); }

        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr; text-align: center; }
          .detail-price-box { justify-content: center; }
          .action-btns { justify-content: center; }
          .specs-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
