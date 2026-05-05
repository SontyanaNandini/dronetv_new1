'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const queryStr = searchQuery.trim() ? `?q=${encodeURIComponent(searchQuery.trim())}` : '';
    if (searchCategory === 'Products') {
      router.push(`/marketplace/products${queryStr}`);
    } else {
      router.push(`/ecosystem/companies${queryStr}`);
    }
  };

  const languages = [
    'English', 'Hindi', 'Bengali', 'Telugu', 'Tamil', 'Kannada',
    'Odia', 'Assamese', 'Nepali', 'Spanish', 'French', 'Chinese'
  ];

  return (
    <>
      <header className="header">
        <div className="top-live-banner">
          <div className="live-badge">
            <span className="dot">🔴</span>
            LIVE STREAMING
          </div>
          <p><strong>April 2026 Global Drone Expo | Virtual Show</strong> — Empowering Autonomous Intelligence Today</p>
          <button className="view-more-btn">View More</button>
        </div>
        <div className="layout-container header-inner">
          <div className="nav-left-group">
            <Link href="/" className="logo-link">
              <img src="/Drone%20Tv%201%20PNG.png" alt="DroneTV Logo" className="header-logo" />
            </Link>

            <nav className="main-nav">
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
          </div>

          <div className="search-section">
            <form className="search-bar" onSubmit={handleSearch}>
              <div className="search-category" onClick={() => setIsSearchCatOpen(!isSearchCatOpen)}>
                <span>{searchCategory}</span>
                <svg className={`chevron ${isSearchCatOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6" /></svg>
                
                {isSearchCatOpen && (
                  <div className="search-cat-dropdown animate-fade">
                    <button type="button" onClick={(e) => { e.stopPropagation(); setSearchCategory('Products'); setIsSearchCatOpen(false); }}>Products</button>
                    <button type="button" onClick={(e) => { e.stopPropagation(); setSearchCategory('Suppliers'); setIsSearchCatOpen(false); }}>Suppliers</button>
                  </div>
                )}
              </div>
              <input 
                type="text" 
                placeholder={`Search for ${searchCategory === 'Products' ? 'Drones, AI Solutions...' : 'Global Suppliers...'}`} 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                Search
              </button>
            </form>
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
          padding: 8px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          font-size: 0.85rem;
          font-weight: 700;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          width: 100%;
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
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 2px 0;
          background: #fbc819;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
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
          flex-shrink: 0;
          min-width: 180px;
        }

        .nav-left-group {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .header-logo {
          height: 60px; 
          width: auto;
          object-fit: contain;
          transition: transform 0.3s ease;
          display: block;
        }
        .header-logo:hover {
          transform: scale(1.03);
        }

        .main-nav {
          display: flex;
          align-items: center;
          gap: 35px;
          font-family: 'Inter', sans-serif;
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
          font-weight: 600 !important;
          transition: all 0.2s ease;
          background: transparent;
          padding: 8px 15px !important;
          margin: 0;
          font-family: system-ui, -apple-system, sans-serif !important;
          text-decoration: none;
          cursor: pointer;
          border: none;
          color: #000 !important;
          line-height: 1 !important;
          letter-spacing: -0.2px !important;
          white-space: nowrap;
          border-radius: 8px;
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
        }
        
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
          background: #4b5563; 
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

        .search-section {
          flex: 1;
          max-width: 400px;
        }

        .search-bar {
          display: flex;
          background: #fff;
          border: 2px solid #000;
          border-radius: 30px;
          overflow: visible; 
          transition: all 0.3s ease;
          position: relative;
          height: 38px;
        }

        .search-category {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 12px 0 20px;
          border-right: 1.5px solid #eee;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 800;
          color: #000;
          position: relative;
          min-width: 110px;
          user-select: none;
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

        .search-btn {
          background: #000;
          color: #fbc819;
          padding: 0 18px;
          font-weight: 900;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.3s ease;
          font-family: inherit;
          border: none;
          cursor: pointer;
          border-radius: 0 30px 30px 0;
          margin: -2px -2px -2px 0;
          position: relative;
          z-index: 2;
          height: calc(100% + 4px);
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.5px;
        }

        .nav-item.active {
          background: rgba(0,0,0,0.08) !important;
          color: #000 !important;
        }

        .lang-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #000;
          font-size: 14px;
          font-weight: 600;
          padding: 8px 12px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .signin-btn {
          background: transparent;
          color: #000 !important;
          padding: 8px 15px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600 !important;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .signin-btn:hover {
          background: #000;
          color: #fbc819 !important;
        }

        @media (max-width: 1200px) {
          .main-nav { display: none; }
          .search-section { max-width: 300px; }
        }

        @media (max-width: 900px) {
          .search-section, .lang-section { display: none; }
        }
      `}</style>
    </>
  );
};

export default Header;
