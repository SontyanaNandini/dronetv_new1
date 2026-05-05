'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';

const products = [
  { 
    id: 1, 
    name: "AI Calling", 
    company: "RUDRAVEGA AI LABS PRIVATE LIMITED", 
    added: "11 Mar 2026", 
    description: "AI Calling by RUDRAVEGA AI LABS PRIVATE LIMITED is a state-of-the-art solution that leverages artificial intelligence to handle complex voice interactions.",
    rating: 4.9,
    location: "India",
    features: ["FEATURE 1", "FEATURE 2"],
    category: "Artificial Intelligence Solutions", 
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 2, 
    name: "AI Software Development", 
    company: "RUDRAVEGA AI LABS PRIVATE LIMITED", 
    added: "11 Mar 2026", 
    description: "AI Software Development by RUDRAVEGA AI LABS PRIVATE LIMITED offers customized solutions for enterprise-grade autonomous systems.",
    rating: 4.7,
    location: "India",
    features: ["FEATURE 1", "FEATURE 2"],
    category: "Artificial Intelligence Solutions", 
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 3, 
    name: "AI for Database", 
    company: "RUDRAVEGA AI LABS PRIVATE LIMITED", 
    added: "11 Mar 2026", 
    description: "AI for Database provided by RUDRAVEGA AI LABS PRIVATE LIMITED revolutionizes data management with predictive indexing and query optimization.",
    rating: 4.8,
    location: "India",
    features: ["FEATURE 1", "FEATURE 2"],
    category: "Artificial Intelligence Solutions", 
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 4, 
    name: "Industrial high precision electrical connecting parts", 
    company: "TECH CONNECT SOLUTIONS", 
    added: "10 Mar 2026", 
    description: "High-grade electrical connectors designed for industrial UAV systems and extreme environmental conditions.",
    rating: 4.6,
    location: "Germany",
    features: ["IP67", "MIL-SPEC"],
    category: "UAV Components", 
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 5, 
    name: "VTOL Carbon Fiber Airframe for Fixed Wing Drones", 
    company: "AERO DYNAMICS LTD", 
    added: "09 Mar 2026", 
    description: "Lightweight, high-strength carbon fiber airframe optimized for long-range surveillance and mapping missions.",
    rating: 4.9,
    location: "USA",
    features: ["LIGHTWEIGHT", "DURABLE"],
    category: "UAV Components", 
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 6, 
    name: "4K Thermal Camera Sensor", 
    company: "VISION TECH SYSTEMS", 
    added: "08 Mar 2026", 
    description: "High-resolution thermal imaging sensor with integrated AI object detection for search and rescue operations.",
    rating: 4.8,
    location: "Japan",
    features: ["4K RES", "AI DETECT"],
    category: "Sensors", 
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800" 
  },
];

const categories = ["All Products", "UAV Components", "Power Systems", "Sensors", "GIS & GNSS", "Artificial Intelligence Solutions"];

export default function ProductsPage() {
  return (
    <React.Suspense fallback={<div style={{ padding: '100px', textAlign: 'center', color: '#000' }}>Loading products...</div>}>
      <ProductsContent />
    </React.Suspense>
  );
}

function ProductsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');

  React.useEffect(() => {
    const q = searchParams.get('q');
    if (q !== null) setSearchQuery(q);
  }, [searchParams]);

  const filteredProducts = products.filter(p => {
    const matchesCategory = filter === "All Products" || p.category === filter;
    const matchesQuery = !searchQuery || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="launchpad-page animate-fade">
      <section className="catalog-hero">
        <div className="layout-container">
          <div className="hero-content">
            <h1>Products Catalog</h1>
            <p>Explore advanced drones, sensors, and accessories for professionals.</p>
            <div className="title-underline"></div>
          </div>
          
          <div className="filter-bar">
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </div>
            
            <div className="dropdowns-row">
              <div className="filter-select">
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                  {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
              
              <div className="filter-select">
                <select defaultValue="Newest">
                  <option value="Newest">Sort by Newest</option>
                  <option value="PriceLow">Price: Low to High</option>
                  <option value="PriceHigh">Price: High to Low</option>
                  <option value="Rating">Top Rated</option>
                </select>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="results-header layout-container">
        <div className="results-info">
          <h2>All Products ({filteredProducts.length})</h2>
          <span className="page-count">Page 1 of {Math.max(1, Math.ceil(filteredProducts.length / 12))}</span>
        </div>
      </section>


      {/* Product Grid Section */}
      <section className="launchpad-content">
        <div className="layout-container">
          <div className="launchpad-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <Link href={`/marketplace/products/${product.id}`} key={product.id} className="launch-card">
                  <div className="card-img-box">
                    <img src={product.img} alt={product.name} />
                    <div className="cat-badge">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                      {product.category}
                    </div>
                  </div>
                  <div className="card-info">
                    <h3 className="card-name">{product.name}</h3>
                    <div className="company-row">
                      <span className="company-icon">🏢</span>
                      <span className="company-name">{product.company}</span>
                    </div>
                    <div className="added-row">Added: {product.added}</div>
                    <p className="card-description">{product.description}</p>
                    
                    <div className="card-footer">
                      <div className="rating-loc">
                        <span className="rating">⭐ {product.rating}</span>
                        <span className="location">📍 {product.location}</span>
                      </div>
                      <div className="feature-tags">
                        {product.features.map(f => <span key={f} className="tag">{f}</span>)}
                        <span className="tag-more">+2</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="no-products-found">
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>

          <div className="bottom-nav">
            <Link href="/" className="back-link-bottom">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              Return to Home Portal
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .launchpad-page {
          background: #fbc819;
          min-height: 100vh;
        }

        .catalog-hero {
          background: linear-gradient(to bottom, #fbc819 0%, #fddc69 100%);
          padding: 30px 0 20px;
          text-align: center;
        }

        .hero-content h1 {
          font-size: 2.2rem;
          font-weight: 900;
          color: #000;
          margin-bottom: 8px;
          letter-spacing: -1px;
        }

        .hero-content p {
          font-size: 0.95rem;
          color: #333;
          font-weight: 500;
          margin-bottom: 15px;
        }

        .title-underline {
          width: 60px;
          height: 3px;
          background: #000;
          margin: 0 auto 25px;
          border-radius: 2px;
        }

        .filter-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          background: rgba(255, 255, 255, 0.2);
          padding: 8px;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          max-width: 900px;
          margin: 0 auto;
        }

        .search-box {
          flex: 1;
          position: relative;
        }

        .search-box input {
          width: 100%;
          padding: 12px 20px 12px 45px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.1);
          background: #fff;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .search-box input:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(0,0,0,0.05);
          border-color: #000;
        }

        .search-box svg {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #666;
        }

        .dropdowns-row {
          display: flex;
          gap: 12px;
        }

        .filter-select {
          position: relative;
          min-width: 160px;
        }

        .filter-select select {
          width: 100%;
          appearance: none;
          padding: 12px 40px 12px 20px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.1);
          background: #fff;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-select select:hover {
          border-color: #000;
        }

        .filter-select svg {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: #666;
        }

        .results-header {
          padding: 20px 0 5px;
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
          text-transform: uppercase;
        }

        .page-count {
          font-size: 0.9rem;
          font-weight: 700;
          color: #555;
        }

        .launchpad-content {
          margin-top: 30px;
        }

        .bottom-nav {
          margin-top: 50px;
          display: flex;
          justify-content: center;
        }

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
          border-radius: 12px;
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

        @media (max-width: 1100px) {
          .launchpad-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 600px) {
          .launchpad-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: 1.5rem; }
        }
      `}</style>
    </div>
  );
}
