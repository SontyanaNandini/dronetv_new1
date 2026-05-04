'use client';

import React, { useEffect, useState } from 'react';

const LoadingAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.classList.remove('initial-loading');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loading-overlay">
      <div className="loader-content">
        <div className="radar-ring ring-1"></div>
        <div className="radar-ring ring-2"></div>
        <div className="logo-container">
          <img
            src="/logo.png"
            alt="DroneTV Logo"
            className="loading-logo"
            width="280"
            style={{ width: '280px', height: 'auto' }}
          />
        </div>
      </div>

      <style jsx>{`
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #fbc819 0%, #fffbeb 50%, #ffffff 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          transition: opacity 0.5s ease-out;
        }

        .loader-content {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .radar-ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid rgba(0, 0, 0, 0.1);
          animation: radarPulse 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }

        .ring-1 {
          width: 200px;
          height: 200px;
          animation-delay: 0s;
        }

        .ring-2 {
          width: 200px;
          height: 200px;
          animation-delay: 1s;
        }

        .logo-container {
          position: relative;
          z-index: 10;
        }

        .loading-logo {
          width: 280px;
          height: auto;
          animation: floatHover 3s ease-in-out infinite;
          filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.15));
        }

        @keyframes radarPulse {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
            border-width: 4px;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
            border-width: 1px;
          }
        }

        @keyframes floatHover {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;
