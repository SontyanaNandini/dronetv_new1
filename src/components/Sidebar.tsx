'use client';

import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const categories = [
    { title: 'Drones & UAV', icon: '🚁' },
    { title: 'Services & Training', icon: '🎓' },
    { title: 'AI Solutions', icon: '🧠' },
    { title: 'GIS & GNSS', icon: '📍' },
    { title: 'Sensors', icon: '📷' },
    { title: 'Components', icon: '⚙️' },
    { title: 'Software', icon: '💻' },
    { title: 'Power Systems', icon: '🔋' },
    { title: 'Connectivity', icon: '📡' },
    { title: 'Compliance', icon: '📋' }
  ];

  return (
    <aside className="sidebar-container animate-slide">
      <div className="category-group">
        <h3>Categories</h3>
        <ul className="sidebar-list">
          {categories.map((cat, idx) => {
            const slug = cat.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
            return (
              <Link href={`/categories/${slug}`} key={idx} className="sidebar-item-link">
                <li className="sidebar-item">
                  <div className="item-left">
                    <span className="cat-icon">{cat.icon}</span>
                    <span className="cat-title">{cat.title}</span>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>

      <style jsx>{`
        .sidebar-container {
          background: transparent;
          padding: 20px 0;
          height: 100%;
          border-right: 1px solid #eee;
        }

        h3 {
          font-size: 0.95rem;
          font-weight: 800;
          color: #333;
          padding: 0 20px;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .sidebar-list {
          display: flex;
          flex-direction: column;
        }

        .sidebar-item-link { text-decoration: none; display: block; }
        .sidebar-item {
          padding: 12px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #555;
        }

        .item-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .cat-icon {
          font-size: 1.1rem;
          width: 24px;
          display: flex;
          justify-content: center;
        }

        .sidebar-item:hover {
          background: #f8f8f8;
          color: #fbc819;
          border-radius: 12px;
        }

        .cat-title {
          font-size: 0.9rem;
          font-weight: 500;
        }

        .sidebar-item svg {
          opacity: 0.3;
          transition: opacity 0.2s ease;
        }

        .sidebar-item:hover svg {
          opacity: 1;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
