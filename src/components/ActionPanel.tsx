'use client';

import React from 'react';

const ActionPanel = () => {
  return (
    <div className="right-panel animate-fade">
      <div className="user-card glass-card">
        <div className="user-welcome">
          <div className="avatar">D</div>
          <div>
            <p className="welcome-text">Welcome to DroneTV</p>
            <p className="sub-text">Join the industrial marketplace</p>
          </div>
        </div>
        <div className="action-buttons">
          <button className="primary-btn">Join Free</button>
          <button className="secondary-btn">Sign In</button>
        </div>
      </div>

      <div className="promo-card glass-card">
        <h4>Sourcing Request</h4>
        <p>Post your requirements and get multiple quotes within 24h.</p>
        <button className="outline-btn">Post RFQ</button>
      </div>

      <div className="featured-section glass-card">
        <h4>Upcoming Events</h4>
        <div className="event-item">
          <div className="event-date">May 15</div>
          <div className="event-info">
            <p className="event-name">Global Drone Expo</p>
            <p className="event-loc">New Delhi, India</p>
          </div>
        </div>
        <button className="text-btn">View all events →</button>
      </div>

      <style jsx>{`
        .right-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .user-card, .promo-card, .featured-section {
          padding: 20px;
        }

        .user-welcome {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .avatar {
          width: 45px;
          height: 45px;
          background: #fbc819;
          color: #000;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.2rem;
        }

        .welcome-text { font-weight: 700; font-size: 0.95rem; }
        .sub-text { font-size: 0.8rem; color: #a0a0a0; }

        .action-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .primary-btn {
          background: #fbc819;
          color: #000;
          padding: 10px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .secondary-btn {
          background: #333;
          color: #fff;
          padding: 10px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        h4 {
          color: #fbc819;
          margin-bottom: 12px;
          font-size: 1rem;
        }

        p { font-size: 0.85rem; color: #a0a0a0; margin-bottom: 15px; }

        .outline-btn {
          width: 100%;
          background: rgba(251, 200, 25, 0.1);
          color: #fbc819;
          padding: 10px;
          border-radius: 12px;
          font-weight: 600;
        }

        .event-item {
          display: flex;
          gap: 12px;
          margin-bottom: 15px;
        }

        .event-date {
          background: rgba(251, 200, 25, 0.1);
          color: #fbc819;
          padding: 5px 10px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 700;
          height: fit-content;
        }

        .event-name { font-weight: 600; font-size: 0.85rem; color: #fff; }
        .event-loc { font-size: 0.75rem; color: #a0a0a0; }

        .text-btn {
          color: #fbc819;
          font-size: 0.85rem;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default ActionPanel;
