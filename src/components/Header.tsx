'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [isMarketplaceOpen, setIsMarketplaceOpen] = useState(false);
  const [isEcosystemOpen, setIsEcosystemOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isSearchCatOpen, setIsSearchCatOpen] = useState(false);
  const [searchCategory, setSearchCategory] = useState('Products');
  const [currentLang, setCurrentLang] = useState('English');

  useEffect(() => {
    if (pathname.includes('/marketplace') || pathname.includes('/categories')) {
      setSearchCategory('Products');
    } else if (pathname.includes('/ecosystem')) {
      setSearchCategory('Suppliers');
    }
  }, [pathname]);

  const languages = [
    'English', 'Hindi', 'Bengali', 'Telugu', 'Tamil', 'Kannada',
    'Odia', 'Assamese', 'Nepali', 'Spanish', 'French', 'Chinese'
  ];

  return (
    <>
      <div className="top-live-banner">
        <div className="live-badge">
          <span className="dot">🔴</span>
          LIVE STREAMING
        </div>
        <p><strong>April 2026 Global Drone Expo | Virtual Show</strong> — Empowering Autonomous Intelligence Today</p>
        <button className="view-more-btn">View More</button>
      </div>
      <header className="header">
        <div className="layout-container header-inner">

          <nav className="main-nav">
            <Link href="/" className="nav-logo-link">
              <img src="/logo_hd.png" alt="DroneTV" className="nav-logo-img" />
            </Link>
            <div className="nav-dropdown-wrapper" onMouseEnter={() => setIsMarketplaceOpen(true)} onMouseLeave={() => setIsMarketplaceOpen(false)}>
              <button className={`nav-item ${pathname.includes('/marketplace') ? 'active' : ''}`}>
                Marketplace
                <svg className={`chevron ${isMarketplaceOpen ? 'open' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
              </button>
              {isMarketplaceOpen && (
                <div className="nav-dropdown-menu animate-fade">
                  <Link href="/marketplace/products" className={pathname === '/marketplace/products' ? 'active' : ''}>Products</Link>
                  <Link href="/marketplace/services" className={pathname === '/marketplace/services' ? 'active' : ''}>Services</Link>
                </div>
              )}
            </div>

            <div className="nav-dropdown-wrapper" onMouseEnter={() => setIsEcosystemOpen(true)} onMouseLeave={() => setIsEcosystemOpen(false)}>
              <button className={`nav-item ${pathname.includes('/ecosystem') ? 'active' : ''}`}>
                Ecosystem
                <svg className={`chevron ${isEcosystemOpen ? 'open' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
              </button>
              {isEcosystemOpen && (
                <div className="nav-dropdown-menu animate-fade">
                  <Link href="/ecosystem/companies" className={pathname === '/ecosystem/companies' ? 'active' : ''}>Companies</Link>
                  <Link href="/ecosystem/professionals" className={pathname === '/ecosystem/professionals' ? 'active' : ''}>Professionals</Link>
                  <Link href="/ecosystem/events" className={pathname === '/ecosystem/events' ? 'active' : ''}>Events</Link>
                  <Link href="/ecosystem/webinars" className={pathname === '/ecosystem/webinars' ? 'active' : ''}>Webinars</Link>
                </div>
              )}
            </div>

            <div className="nav-dropdown-wrapper" onMouseEnter={() => setIsResourcesOpen(true)} onMouseLeave={() => setIsResourcesOpen(false)}>
              <div className="nav-dropdown-btn-group">
                <Link href="/resources" className="nav-item">Resources</Link>
                <button className="dropdown-arrow-btn">
                  <svg className={`chevron ${isResourcesOpen ? 'open' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
                </button>
              </div>
              {isResourcesOpen && (
                <div className="nav-dropdown-menu animate-fade">
                  <Link href="/about">About Us</Link>
                  <Link href="/videos">Video Library</Link>
                  <Link href="/gallery">Gallery</Link>
                </div>
              )}
            </div>

            <Link href="/contact" className={`nav-item ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
            <Link href="/pricing" className={`nav-item ${pathname === '/pricing' ? 'active' : ''}`}>Pricing</Link>
          </nav>

          <div className="search-section">
            <div className="search-bar">
              <div className="search-category" onClick={() => setIsSearchCatOpen(!isSearchCatOpen)}>
                <span>{searchCategory}</span>
                <svg className={`chevron ${isSearchCatOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6" /></svg>
                
                {isSearchCatOpen && (
                  <div className="search-cat-dropdown animate-fade">
                    <button onClick={() => setSearchCategory('Products')}>Products</button>
                    <button onClick={() => setSearchCategory('Suppliers')}>Suppliers</button>
                  </div>
                )}
              </div>
              <input type="text" placeholder={`Search for ${searchCategory === 'Products' ? 'Drones, AI Solutions...' : 'Global Suppliers...'}`} />
              <button className="search-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                Search
              </button>
            </div>
          </div>

          <div className="lang-section" onMouseEnter={() => setIsLangOpen(true)} onMouseLeave={() => setIsLangOpen(false)}>
            <button className="lang-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              <span>{currentLang} / USD</span>
              <svg className={`chevron ${isLangOpen ? 'open' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
            </button>

            {isLangOpen && (
              <div className="lang-dropdown animate-fade">
                <div className="dropdown-grid">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      className={`lang-option ${currentLang === lang ? 'active' : ''}`}
                      onClick={() => {
                        setCurrentLang(lang);
                        setIsLangOpen(false);
                      }}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <nav className="nav-section">
            <div className="nav-dropdown-wrapper login-wrapper" onMouseEnter={() => setIsLoginOpen(true)} onMouseLeave={() => setIsLoginOpen(false)}>
              <button className="signin-btn">
                Login
                <svg className={`chevron ${isLoginOpen ? 'open' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
              </button>
              {isLoginOpen && (
                <div className="nav-dropdown-menu login-menu animate-fade">
                  <Link href="/login">Login</Link>
                  <Link href="/register">Register</Link>
                </div>
              )}
            </div>
          </nav>
        </div>

      </header>
      <style jsx>{`
        .top-live-banner {
          background: linear-gradient(90deg, #fff 0%, #fbc819 50%, #fff 100%);
          color: #000;
          padding: 10px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          font-size: 0.85rem;
          font-weight: 700;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .live-badge {
          background: #000;
          color: #fbc819;
          padding: 4px 12px;
          font-weight: 900;
          display: flex;
          align-items: center;
          gap: 6px;
          border-radius: 2px;
          font-size: 0.75rem;
        }

        .top-live-banner p {
          margin: 0;
          color: #333;
        }

        .view-more-btn {
          background: #000;
          color: #fff;
          border: none;
          padding: 4px 15px;
          font-weight: 800;
          font-size: 0.75rem;
          cursor: pointer;
          transition: background 0.3s;
          border-radius: 2px;
        }

        .view-more-btn:hover {
          background: #333;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 4px 0; /* Reduced to accommodate large logo without increasing bar height */
          background: #fbc819;
          border-bottom: 2px solid #000;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .logo-link {
          display: flex;
          align-items: center;
        }

        .header-logo {
          height: 75px; /* Increased for prominent branding */
          width: auto;
          object-fit: contain;
          filter: brightness(1.02);
          transition: transform 0.3s ease;
          display: block;
        }
        .header-logo:hover {
          transform: scale(1.02);
        }

        .main-nav {
          display: flex;
          align-items: center;
          gap: 35px;
          font-family: 'Inter', sans-serif;
        }

        .nav-logo-link {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .nav-logo-img {
          height: 48px;
          width: auto;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .nav-logo-img:hover {
          transform: scale(1.04);
        }

        .nav-dropdown-wrapper {
          position: relative;
        }

        .nav-dropdown-btn-group { display: flex; align-items: center; gap: 4px; }
        .nav-dropdown-btn, 
        .nav-dropdown-btn *,
        .dropdown-arrow-btn,
        .dropdown-arrow-btn * {
          color: #000 !important;
          fill: #000 !important;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px !important;
          font-weight: 900 !important;
          transition: all 0.3s ease;
          background: transparent;
          padding: 0;
          margin: 0;
          font-family: 'Inter', sans-serif !important;
          text-decoration: none;
          cursor: pointer;
          border: none;
          color: #000 !important;
          line-height: 1.2 !important;
          letter-spacing: -0.02em !important;
          white-space: nowrap;
        }
        .dropdown-arrow-btn {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        .nav-item:hover, 
        .nav-item:hover *,
        .dropdown-arrow-btn:hover,
        .dropdown-arrow-btn:hover * { 
          color: #000 !important; 
          fill: #000 !important;
        }

        /* Consistent Dropdown Menu Style */
        .nav-dropdown-menu, .lang-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background: #fbc819; 
          min-width: 200px;
          padding: 8px; 
          display: flex;
          flex-direction: column;
          gap: 4px;
          z-index: 1000;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          margin-top: 10px;
          border: 1px solid rgba(0,0,0,0.1);
          font-family: 'Inter', sans-serif;
          border-radius: 12px;
          /* overflow: hidden removed to prevent clipping of the hover bridge */
        }
        /* Robust hover bridge */
        .nav-dropdown-menu::after {
          content: '';
          position: absolute;
          top: -20px;
          left: 0;
          width: 100%;
          height: 20px;
          background: transparent;
        }

        .nav-dropdown-menu a, .lang-option {
          padding: 12px 16px;
          font-size: 0.85rem !important;
          color: #000 !important;
          font-weight: 500 !important;
          transition: all 0.2s ease;
          width: 100%;
          text-align: left;
          font-family: inherit;
          display: block;
          border-radius: 6px;
          text-decoration: none;
        }

        .nav-dropdown-menu a:hover, .lang-option:hover, .nav-dropdown-menu a.active {
          background: #4b5563; /* Gray hover state */
          color: #fff !important;
        }

        .lang-dropdown {
          right: 0;
          left: auto;
          min-width: 150px;
        }

        .lang-option.active {
          color: #000 !important;
          font-weight: 900;
          background: rgba(0,0,0,0.05);
        }

        .main-nav a,
        .main-nav a *,
        .main-nav button,
        .main-nav button * {
          color: #000 !important;
          fill: #000 !important;
          font-weight: 700;
        }

        .main-nav a {
          font-size: 0.9rem;
          font-weight: 900 !important;
          transition: all 0.3s ease;
          white-space: nowrap;
          text-decoration: none;
          color: #000 !important;
          font-family: 'Inter', sans-serif;
        }

        .main-nav a:hover, 
        .main-nav a:hover *,
        .main-nav button:hover,
        .main-nav button:hover * {
          color: #000 !important;
          fill: #000 !important;
        }

        .search-section {
          flex: 1;
          max-width: 400px;
        }

        .search-bar {
          display: flex;
          background: #fff;
          border: 1px solid #000;
          border-radius: 4px;
          overflow: visible; /* To show dropdown */
          transition: all 0.3s ease;
          position: relative;
        }

        .search-category {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 15px;
          border-right: 1px solid #eee;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 700;
          color: #333;
          position: relative;
          min-width: 100px;
          user-select: none;
        }

        .search-category:hover { background: #f9f9f9; }

        .search-cat-dropdown {
          position: absolute;
          top: calc(100% + 5px);
          left: 0;
          background: #fff;
          border: 1px solid #eee;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          border-radius: 8px;
          z-index: 1100;
          width: 130px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .search-cat-dropdown button {
          padding: 12px 15px;
          text-align: left;
          background: none;
          border: none;
          font-size: 0.85rem;
          font-weight: 600;
          color: #555;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .search-cat-dropdown button:hover {
          background: #fbc819;
          color: #000;
        }

        .search-bar:focus-within {
          box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
        }

        .search-bar input {
          flex: 1;
          background: transparent;
          border: none;
          padding: 10px 15px;
          color: #000;
          outline: none;
          font-size: 0.95rem;
          font-family: 'Inter', sans-serif;
        }
        .search-bar input::placeholder { color: rgba(0,0,0,0.4); }

        .search-btn {
          background: #000;
          color: #fbc819;
          padding: 0 20px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          font-family: inherit;
          border: none;
          cursor: pointer;
          border-radius: 0 2px 2px 0;
        }

        .nav-item.active {
          color: #000 !important;
          position: relative;
        }
        
        .nav-item.active::after {
          content: '';
          position: absolute;
          bottom: -22px;
          left: 0;
          width: 100%;
          height: 3px;
          background: #000;
          border-radius: 2px;
        }

        .search-btn:hover {
          background: #333;
        }

        .lang-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #000;
          font-size: 0.85rem;
          font-weight: 700;
          padding: 8px 12px;
          transition: all 0.3s ease;
          position: relative;
          font-family: inherit;
          background: none;
          border: none;
          cursor: pointer;
        }

        .chevron {
          transition: transform 0.3s ease;
          opacity: 0.6;
        }

        .chevron.open {
          transform: rotate(180deg);
        }

        .lang-section {
          position: relative;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 30px;
          font-family: 'Inter', sans-serif;
        }

        .signin-btn {
          background: transparent;
          color: #000 !important;
          padding: 8px 20px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 900 !important;
          font-family: inherit;
          border: 1.5px solid #000;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .signin-btn:hover {
          background: #000;
          color: #fbc819 !important;
        }

        .login-wrapper {
          position: relative;
        }

        .login-menu {
          right: 0;
          left: auto !important;
        }

        @media (max-width: 1200px) {
          .main-nav {
            display: none;
          }
          .search-section {
            max-width: 300px;
          }
        }

        @media (max-width: 900px) {
          .search-section, .lang-section {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
