'use client';

import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import ActionPanel from "@/components/ActionPanel";
import Link from 'next/link';
import React, { useState } from 'react';

export default function Home() {
  const [showExhibitors, setShowExhibitors] = useState(false);
  return (
    <main className="layout-container">
      <div className="main-grid">
        <div className="main-content-card">
          {/* Left Sidebar */}
          <Sidebar />

          {/* Center Content */}
          <div className="center-content">
            <Hero />
          </div>
        </div>

        {/* Verified Exhibitors Section - directly below expo tabs */}
        <section className="verified-exhibitors animate-fade">
          <div className="exhibitor-banner">
            <div className="banner-info">
              <h2>Meet the <span className="verified-badge-inline"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Verified</span> <br/>Exhibitors at the Show</h2>
              <p>Discover the exhibitor list and trending products <br/>at 2026 April shows.</p>
              <button className="explore-btn" onClick={() => setShowExhibitors(true)}>Explore Now</button>
            </div>
            <div className="exhibitor-cards">
              {[
                {
                  name: "Shenzhen UAV Tech Co., Ltd.",
                  location: "Phase 1: Hall 1 1E17",
                  tags: ["ODM", "OEM"],
                  images: ["/hexacopter.png", "/manufacturing.png", "/hero.png"]
                },
                {
                  name: "Skydio Industrial Systems",
                  location: "Phase 2: Hall 6 6U42",
                  tags: ["OEM", "OBM"],
                  images: ["/sensors.png", "/gis.png", "/manufacturing.png"]
                },
                {
                  name: "Autel Robotics Global",
                  location: "Phase 3: Hall 7 7Q32",
                  tags: ["ODM", "OBM"],
                  images: ["/power.png", "/sensors.png", "/gis.png"]
                }
              ].map((ex, i) => (
                <div key={i} className="ex-card">
                  <div className="ex-header">
                    <div className="ex-icon">🏢</div>
                    <div className="ex-name-loc">
                      <h4>{ex.name}</h4>
                      <div className="ex-tags">
                        {ex.tags.map(tag => <span key={tag}>{tag}</span>)}
                      </div>
                      <p className="ex-loc">📍 {ex.location}</p>
                    </div>
                  </div>
                  <div className="ex-previews">
                    {ex.images.map((img, j) => (
                      <div key={j} className="pre-img" style={{ backgroundImage: `url(${img})` }}></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Categories Row */}
        <section className="featured-categories-section animate-fade">
          <div className="layout-container">
            <div className="featured-categories-outer">
              <div className="cat-grid-mini">
                <Link href="/marketplace/products" className="cat-card-mini">
                  <div className="cat-img-box">
                    <img src="/hero.png" alt="UAV" className="cat-prod-img" />
                  </div>
                  <div className="cat-info-mini">
                    <h3>DRONE</h3>
                    <p>Advanced UAV solutions for industrial inspections and precision mapping.</p>
                  </div>
                </Link>
                <Link href="/marketplace/services" className="cat-card-mini">
                  <div className="cat-img-box">
                    <img src="/manufacturing.png" alt="AI" className="cat-prod-img" />
                  </div>
                  <div className="cat-info-mini">
                    <h3>AI</h3>
                    <p>Cutting-edge autonomous flight and real-time data processing software.</p>
                  </div>
                </Link>
                <Link href="/marketplace/products" className="cat-card-mini">
                  <div className="cat-img-box">
                    <img src="/sensors.png" alt="GIS" className="cat-prod-img" />
                  </div>
                  <div className="cat-info-mini">
                    <h3>GIS</h3>
                    <p>High-accuracy GNSS and sensor integration for spatial intelligence.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Sections: New Products & Most Popular */}
        <section className="trending-sections layout-container animate-fade">
          <div className="trending-grid">
            {/* New Products Box */}
            <div className="trending-box">
              <div className="box-header">
                <div className="header-title">
                  <h3>New Products</h3>
                  <p>Explore the hottest releases in the past two weeks</p>
                </div>
                <Link href="/marketplace/products" className="see-all">See All</Link>
              </div>
              <div className="trending-items">
                {[
                  { id: "1", name: "Customized UAV Chassis", price: "US$ 145.00 - 280.00", moq: "100 Units", img: "/manufacturing.png" },
                  { id: "2", name: "High-Gain FPV Antenna", price: "US$ 12.50 - 24.00", moq: "50 Pieces", img: "/sensors.png" },
                  { id: "3", name: "Smart LiPo Balance Charger", price: "US$ 45.00 - 85.00", moq: "20 Units", img: "/power.png" },
                  { id: "4", name: "Precision Brushless Motor", price: "US$ 32.00 - 64.00", moq: "200 Pieces", img: "/power.png" }
                ].map((item, i) => (
                  <Link href={`/marketplace/products/${item.id}`} key={i} className="trending-item">
                    <div className="item-img" style={{ backgroundImage: `url(${item.img})` }}></div>
                    <div className="item-info">
                      <h4 className="item-name">{item.name}</h4>
                      <p className="item-price">{item.price}</p>
                      <p className="item-moq">Min. order: {item.moq}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Most Popular Box */}
            <div className="trending-box">
              <div className="box-header">
                <div className="header-title">
                  <h3>Most Popular</h3>
                  <p>Trending B2B wholesale products: bulk deals from suppliers</p>
                </div>
                <Link href="/marketplace/products" className="see-all">See All</Link>
              </div>
              <div className="trending-items">
                {[
                  { id: "1", rank: 1, name: "Professional Survey Drone", price: "US$ 2,400.00 - 4,500.00", moq: "1 Unit", img: "/hero.png" },
                  { id: "2", rank: 2, name: "4K Thermal Camera Sensor", price: "US$ 850.00 - 1,200.00", moq: "5 Pieces", img: "/sensors.png" },
                  { id: "3", rank: 3, name: "RTK GNSS Base Station", price: "US$ 1,800.00 - 2,200.00", moq: "1 Set", img: "/gis.png" },
                  { id: "4", rank: 4, name: "Autonomous Mapping AI", price: "US$ 320.00 - 500.00", moq: "10 Licenses", img: "/manufacturing.png" }
                ].map((item, i) => (
                  <Link href={`/marketplace/products/${item.id}`} key={i} className="trending-item">
                    <div className="item-img" style={{ backgroundImage: `url(${item.img})` }}>
                      <div className="rank-badge">{item.rank}</div>
                    </div>
                    <div className="item-info">
                      <h4 className="item-name">{item.name}</h4>
                      <p className="item-price">{item.price}</p>
                      <p className="item-moq">Min. order: {item.moq}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Curated Selection Sections */}
        <section className="selection-sections layout-container animate-fade">
          <div className="selection-grid">
            {/* Analyst's Choice */}
            <div className="selection-box">
              <div className="box-header">
                <div className="header-title">
                  <h3>Analyst's Choice</h3>
                  <p>Products handpicked by sourcing experts</p>
                </div>
                <Link href="/marketplace/products" className="see-all">See All</Link>
              </div>
              <div className="selection-items">
                <div className="selection-item">
                  <div className="sel-img" style={{ backgroundImage: "url('/hero.png')" }}></div>
                  <div className="sel-info">
                    <h4>Trending</h4>
                    <p>VTOL Systems</p>
                  </div>
                </div>
                <div className="selection-item">
                  <div className="sel-img" style={{ backgroundImage: "url('/manufacturing.png')" }}></div>
                  <div className="sel-info">
                    <h4>Hot Picks</h4>
                    <p>Carbon Chassis</p>
                  </div>
                </div>
                <div className="selection-item">
                  <div className="sel-img" style={{ backgroundImage: "url('/sensors.png')" }}></div>
                  <div className="sel-info">
                    <h4>Innovative</h4>
                    <p>AI Gimbals</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Low MOQ */}
            <div className="selection-box">
              <div className="box-header">
                <div className="header-title">
                  <h3>Low MOQ</h3>
                  <p>Small quantities ideal for customization</p>
                </div>
                <Link href="/marketplace/products" className="see-all">See All</Link>
              </div>
              <div className="selection-items">
                <div className="selection-item">
                  <div className="sel-img" style={{ backgroundImage: "url('/power.png')" }}></div>
                  <div className="sel-info">
                    <h4>New Arrivals</h4>
                    <p>UAV Motors</p>
                  </div>
                </div>
                <div className="selection-item">
                  <div className="sel-img" style={{ backgroundImage: "url('/gis.png')" }}></div>
                  <div className="sel-info">
                    <h4>Quick Sourcing</h4>
                    <p>GNSS Tech</p>
                  </div>
                </div>
                <div className="selection-item">
                  <div className="sel-img" style={{ backgroundImage: "url('/sensors.png')" }}></div>
                  <div className="sel-info">
                    <h4>Best Sellers</h4>
                    <p>RTK Sensors</p>
                  </div>
                </div>
              </div>
            </div>

            {/* OEM Products */}
            <div className="selection-box">
              <div className="box-header">
                <div className="header-title">
                  <h3>OEM Products</h3>
                  <p>Cut in-house production for cost savings</p>
                </div>
                <Link href="/marketplace/products" className="see-all">See All</Link>
              </div>
              <div className="selection-items">
                <div className="selection-item">
                  <div className="sel-img" style={{ backgroundImage: "url('/manufacturing.png')" }}></div>
                  <div className="sel-info">
                    <p className="sel-price">US$ 3.07</p>
                    <p className="sel-moq">Min. order: 100</p>
                    <span className="sel-tag">Hot Picks</span>
                  </div>
                </div>
                <div className="selection-item">
                  <div className="sel-img" style={{ backgroundImage: "url('/sensors.png')" }}></div>
                  <div className="sel-info">
                    <p className="sel-price">US$ 0.67</p>
                    <p className="sel-moq">Min. order: 500</p>
                    <span className="sel-tag">Hot Picks</span>
                  </div>
                </div>
                <div className="selection-item">
                  <div className="sel-img" style={{ backgroundImage: "url('/power.png')" }}></div>
                  <div className="sel-info">
                    <p className="sel-price">US$ 0.82</p>
                    <p className="sel-moq">Min. order: 500</p>
                    <span className="sel-tag">Hot Picks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RFQ Section */}
        <section className="rfq-section layout-container animate-fade">
          <div className="rfq-banner" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200')" }}>
            <div className="rfq-overlay">
              <div className="rfq-info">
                <h2>DroneTV Sourcing Solutions</h2>
                <div className="rfq-benefits">
                  <div className="benefit-item">
                    <span className="dot">•</span>
                    <p>Submit a DroneTV RFQ for UAV parts or services.</p>
                  </div>
                  <div className="benefit-item">
                    <span className="dot">•</span>
                    <p>Get multiple quotes from Verified UAV Manufacturers.</p>
                  </div>
                  <div className="benefit-item">
                    <span className="dot">•</span>
                    <p>Access exclusive industrial drone pricing!</p>
                  </div>
                </div>
                <button className="rfq-view-more">View More</button>
              </div>

              <div className="rfq-form-card">
                <h3>Get Quotations Now</h3>
                <div className="rfq-form">
                  <div className="input-group">
                    <input type="text" placeholder="Enter UAV parts, AI software, or GIS equipment..." />
                  </div>
                  <div className="form-row">
                    <input type="number" placeholder="Quantity" />
                    <select>
                      <option>Piece</option>
                      <option>Unit</option>
                      <option>Set</option>
                    </select>
                  </div>
                  <button className="rfq-submit-btn">Request for Quotations</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Source by Region Section */}
        <section className="region-section layout-container animate-fade">
          <div className="region-box">
            <div className="region-header">
              <h3>Source by Region</h3>
              <p>Facilitate world wholesale, retail and E-commerce businesses. Global sourcing is easy!</p>
            </div>
            <div className="region-grid">
              <div className="region-card india">
                <img src="https://flagcdn.com/w40/in.png" alt="India" />
                <span>India</span>
              </div>
              <div className="region-card korea">
                <img src="https://flagcdn.com/w40/kr.png" alt="South Korea" />
                <span>South Korea</span>
              </div>
              <div className="region-card vietnam">
                <img src="https://flagcdn.com/w40/vn.png" alt="Vietnam" />
                <span>Vietnam</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories Section */}
        <section className="featured-categories layout-container animate-fade">
          <div className="fc-box">
            <div className="fc-header">
              <h3>Featured Categories</h3>
              <p>The most in-demand categories among buyers.</p>
            </div>
            <div className="fc-scroll-container">
              <div className="fc-grid">
                {[
                  { name: "Flight Controllers", img: "/power.png" },
                  { name: "Lipo Batteries", img: "/manufacturing.png" },
                  { name: "Carbon Fiber", img: "/hero.png" },
                  { name: "GNSS Modules", img: "/gis.png" },
                  { name: "Thermal Sensors", img: "/sensors.png" },
                  { name: "FPV Cameras", img: "/hero.png" },
                  { name: "Brushless Motors", img: "/power.png" },
                  { name: "Propellers", img: "/manufacturing.png" },
                  { name: "AI Software", img: "/gis.png" }
                ].map((cat, idx) => (
                  <div key={idx} className="fc-item">
                    <div className="fc-icon-wrapper">
                      <img src={cat.img} alt={cat.name} />
                    </div>
                    <span className="fc-name">{cat.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Center Section */}
        <section className="knowledge-center layout-container animate-fade">
          <div className="kc-header">
            <h3>Sourcing Knowledge Center</h3>
            <Link href="/resources" className="see-all">See All</Link>
          </div>
          <div className="kc-grid">
            <div className="kc-card">
              <div className="kc-img" style={{ backgroundImage: "url('/power.png')" }}></div>
              <div className="kc-info">
                <h4>Advances in Solid-State Lipo Batteries</h4>
                <p>The industry is on the cusp of transformative changes that promise to reshape how commercial drones are powered for extended flights...</p>
                <span className="kc-date">2026/03/16</span>
              </div>
            </div>
            <div className="kc-card">
              <div className="kc-img" style={{ backgroundImage: "url('/manufacturing.png')" }}></div>
              <div className="kc-info">
                <h4>Technologies Converging for Longer-Range Flight</h4>
                <p>Discover the latest innovations in VTOL airframes and high-efficiency brushless motor systems that enable heavy payload delivery...</p>
                <span className="kc-date">2026/02/24</span>
              </div>
            </div>
            <div className="kc-card">
              <div className="kc-img" style={{ backgroundImage: "url('/hero.png')" }}></div>
              <div className="kc-info">
                <h4>Lightweight Carbon Fiber and Aerospace Materials</h4>
                <p>The UAV airframe market has evolved dramatically over the past decade, driven by rising demand for durable yet ultralight materials...</p>
                <span className="kc-date">2026/03/19</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sourcing Services Section */}
        <section className="sourcing-services layout-container animate-fade">
          <div className="ss-header">
            <h3>Sourcing Services</h3>
          </div>
          <div className="ss-grid">
            <div className="ss-card">
              <div className="ss-img-container">
                <img src="/power.png" alt="Match" className="ss-img" />
                <div className="ss-overlay">
                  <h4>MATCH</h4>
                </div>
              </div>
              <p>Meet verified UAV suppliers hassle-free and without boundaries.</p>
            </div>
            <div className="ss-card">
              <div className="ss-img-container">
                <img src="/manufacturing.png" alt="VIP Buyer" className="ss-img" />
                <div className="ss-overlay">
                  <h4>VIP Buyer</h4>
                </div>
              </div>
              <p>Join our B2B Buyer Community for exclusive industrial pricing.</p>
            </div>
            <div className="ss-card">
              <div className="ss-img-container">
                <img src="/gis.png" alt="Drone Industry Reports" className="ss-img" />
                <div className="ss-overlay">
                  <h4>Drone Industry Reports</h4>
                </div>
              </div>
              <p>Subscribe to receive DroneTV market reports and analysis — FREE.</p>
            </div>
            <div className="ss-card">
              <div className="ss-img-container">
                <img src="/sensors.png" alt="Online Events" className="ss-img" />
                <div className="ss-overlay">
                  <h4>Online Events</h4>
                </div>
              </div>
              <p>Watch live demos of the latest UAV trends and products from top suppliers.</p>
            </div>
          </div>
        </section>

        {/* Event Banner Section */}
        <section className="event-banner-section layout-container animate-fade">
          <div className="event-banner">
            <div className="eb-content">
              <h2>October 2026 DroneTV India UAV Expo</h2>
              <div className="eb-tags">
                <span className="eb-date">15–18 October 2026</span>
                <span className="eb-location">Pragati Maidan, New Delhi</span>
              </div>
              <p>The Top Destination for Global Sourcing in Industrial UAVs, AI-Integrated Drones & GIS Technologies!</p>
            </div>
            <div className="eb-action">
              <button className="eb-register-btn">Register Now</button>
            </div>
            <div className="eb-image-clip">
              <img src="/hero.png" alt="Drone Expo" />
            </div>
          </div>
        </section>

        {/* Recommended Product List */}
        <section className="recommended-list layout-container animate-fade">
          <h3>Recommended Product List</h3>
          <div className="rl-grid">
            <div className="rl-col">
              <Link href="/marketplace/products">DJI Matrice 350 RTK</Link>
              <Link href="/marketplace/products">Hexacopter Frames</Link>
              <Link href="/marketplace/products">FPV Racing Drones</Link>
              <Link href="/marketplace/products">Agriculture Drones</Link>
            </div>
            <div className="rl-col">
              <Link href="/marketplace/products">Solid-State Lipo</Link>
              <Link href="/marketplace/products">Brushless Motors</Link>
              <Link href="/marketplace/products">Carbon Propellers</Link>
              <Link href="/marketplace/products">Pixhawk Controllers</Link>
            </div>
            <div className="rl-col">
              <Link href="/marketplace/products">Thermal Cameras</Link>
              <Link href="/marketplace/products">LiDAR Sensors</Link>
              <Link href="/marketplace/products">GNSS RTK Modules</Link>
              <Link href="/marketplace/products">Optical Zoom Gimbals</Link>
            </div>
            <div className="rl-col">
              <Link href="/marketplace/products">Ground Control Stations</Link>
              <Link href="/marketplace/products">Long-Range Video TX</Link>
              <Link href="/marketplace/products">AI Object Tracking</Link>
              <Link href="/marketplace/products">Drone Parachutes</Link>
            </div>
            <div className="rl-col">
              <Link href="/marketplace/products">ESC Speed Controllers</Link>
              <Link href="/marketplace/products">FPV Goggles</Link>
              <Link href="/marketplace/products">Power Boards</Link>
              <Link href="/marketplace/products">Antennas & Receivers</Link>
            </div>
          </div>
        </section>

      <section className="stats-section animate-fade">
        <div className="stat-card">
          <strong>5,000+</strong>
          <span>Verified UAVs</span>
        </div>
        <div className="stat-card">
          <strong>1,200+</strong>
          <span>Global Suppliers</span>
        </div>
        <div className="stat-card">
          <strong>120</strong>
          <span>Countries Served</span>
        </div>
        <div className="stat-card">
          <strong>24/7</strong>
          <span>Trade Support</span>
        </div>
      </section>


      <section className="why-us-section layout-container">
        <div className="why-header">
          <h2>Why Professionals Choose DroneTV</h2>
          <p>The world's most trusted B2B ecosystem for autonomous intelligence.</p>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">🛡️</div>
            <h3>Verified Sourcing</h3>
            <p>Every supplier on our platform undergoes a rigorous 50-point verification process to ensure industrial reliability.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">🌍</div>
            <h3>Global Logistics</h3>
            <p>Our network of logistics partners ensures seamless delivery of heavy-lift systems to over 120 countries.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">📊</div>
            <h3>Deep Intelligence</h3>
            <p>Access exclusive market reports, whitepapers, and technical deep-dives only available to DroneTV members.</p>
          </div>
        </div>
      </section>

      <section className="exhibition-portal layout-container">
        <div className="exhibition-header">
          <h2>Upcoming Global Exhibitions</h2>
          <Link href="/ecosystem/events" className="view-more">View All Events →</Link>
        </div>
        <div className="exhibition-grid">
          <div className="ex-card-wide" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000')" }}>
            <div className="ex-overlay-dark">
              <span className="ex-badge">October 2026</span>
              <h3>Dubai Drone Expo 2026</h3>
              <p>World Trade Center | International Manufacturing Hub</p>
              <button className="register-btn">Register to Attend</button>
            </div>
          </div>
          <div className="ex-card-wide" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=1000')" }}>
            <div className="ex-overlay-dark">
              <span className="ex-badge">November 2026</span>
              <h3>Saudi Autonomous Summit</h3>
              <p>Riyadh International | Future of Middle-East UAVs</p>
              <button className="register-btn">Register to Attend</button>
            </div>
          </div>
          <div className="ex-card-wide" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518655061766-48c2488c9b60?auto=format&fit=crop&q=80&w=1000')" }}>
            <div className="ex-overlay-dark">
              <span className="ex-badge">December 2026</span>
              <h3>Hyderabad Drone Summit</h3>
              <p>HITEX Exhibition Center | India's Industrial Growth</p>
              <button className="register-btn">Register to Attend</button>
            </div>
          </div>
          <div className="ex-card-wide" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1000')" }}>
            <div className="ex-overlay-dark">
              <span className="ex-badge">January 2027</span>
              <h3>Bangalore Aerospace & Drone</h3>
              <p>BIEC Bangalore | The Global Technology Hub</p>
              <button className="register-btn">Register to Attend</button>
            </div>
          </div>
        </div>
      </section>




        {/* DroneTV About Section */}
        <section className="dronetv-about animate-fade">
          <div className="about-overlay"></div>
          <div className="about-content">
            <div className="about-text">
              <span className="badge">Trusted Industrial Hub</span>
              <h2>Global Drone Ecosystem <br/>& Innovation Network</h2>
              <p>DroneTV is the premier B2B marketplace bridging the gap between cutting-edge UAV manufacturing and industrial applications. Our platform is engineered to facilitate secure sourcing, tech discovery, and collaborative innovation.</p>
              
              <div className="trust-grid">
                <div className="trust-card">
                  <div className="trust-icon">🌐</div>
                  <h4>Global Sourcing</h4>
                  <p>Access to 500+ verified manufacturers worldwide.</p>
                </div>
                <div className="trust-card">
                  <div className="trust-icon">🔍</div>
                  <h4>Strict Verification</h4>
                  <p>Multi-step audit process for all supplier partners.</p>
                </div>
                <div className="trust-card">
                  <div className="trust-icon">🛡️</div>
                  <h4>Trade Security</h4>
                  <p>End-to-end transaction protection & escrow.</p>
                </div>
                <div className="trust-card">
                  <div className="trust-icon">💡</div>
                  <h4>Tech Innovation</h4>
                  <p>Exclusive access to AI & GIS drone prototypes.</p>
                </div>
              </div>

              <div className="about-actions">
                <button className="join-btn">Become a Partner</button>
                <button className="learn-btn">Download Report</button>
              </div>
            </div>
          </div>
        </section>

        {/* Sourcing Solutions Section */}
        <section className="sourcing-solutions animate-fade">
          <div className="section-header">
            <h2>Sourcing Solutions & Services</h2>
            <p>Empowering your procurement with specialized industrial tools.</p>
          </div>
          
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="sol-icon">📦</div>
              <h3>Sample Requests</h3>
              <p>Evaluate quality before bulk orders with low-cost sample options.</p>
              <a href="#">Learn More →</a>
            </div>
            <div className="solution-card">
              <div className="sol-icon">✅</div>
              <h3>Trade Assurance</h3>
              <p>Your orders are protected from payment to delivery.</p>
              <a href="#">Learn More →</a>
            </div>
            <div className="solution-card">
              <div className="sol-icon">✈️</div>
              <h3>Global Logistics</h3>
              <p>Door-to-door shipping solutions for industrial equipment.</p>
              <a href="#">Learn More →</a>
            </div>
            <div className="solution-card">
              <div className="sol-icon">🛠️</div>
              <h3>Custom Manufacturing</h3>
              <p>Connect with OEM/ODM partners for bespoke drone tech.</p>
              <a href="#">Learn More →</a>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .stats-section { display: flex; justify-content: space-around; padding: 60px 40px; background: #050505; margin-top: 40px; border: 1px solid #111; }
        .stat-card { text-align: center; }
        .stat-card strong { display: block; font-size: 2.5rem; color: #fbc819; font-weight: 900; margin-bottom: 5px; }
        .stat-card span { font-size: 0.75rem; color: #666; text-transform: uppercase; font-weight: 800; letter-spacing: 1px; }

        .product-sections { display: flex; flex-direction: column; gap: 60px; margin-top: 60px; }
        .category-section { border-bottom: 1px solid #111; padding-bottom: 50px; }
        .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
        .section-header h2 { font-size: 1.6rem; font-weight: 900; color: #fff; letter-spacing: -1px; }
        .view-more { color: #fbc819; font-weight: 800; text-decoration: none; font-size: 0.8rem; text-transform: uppercase; }
        
        .product-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }

        .why-us-section { padding: 80px 0; text-align: center; border-bottom: 1px solid #111; }
        .why-header { margin-bottom: 50px; }
        .why-header h2 { font-size: 2.2rem; font-weight: 900; margin-bottom: 12px; color: #fff; }
        .why-header p { font-size: 1.1rem; color: #888; }
        .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .why-card { padding: 40px 20px; background: #0a0a0a; border: 1px solid #111; transition: all 0.3s ease; }
        .why-card:hover { border-color: #fbc819; transform: translateY(-8px); }
        .why-icon { font-size: 2.5rem; margin-bottom: 20px; }
        .why-card h3 { font-size: 1.2rem; color: #fff; margin-bottom: 12px; font-weight: 800; }
        .why-card p { font-size: 0.9rem; color: #888; line-height: 1.6; }

        .exhibition-portal { padding: 80px 0; border-bottom: 1px solid #111; }
        .exhibition-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
        .exhibition-header h2 { font-size: 2rem; font-weight: 900; color: #fff; }
        .exhibition-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
        .ex-card-wide { height: 400px; background-size: cover; background-position: center; position: relative; border: 1px solid #111; }
        .ex-overlay-dark { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.95), transparent); display: flex; flex-direction: column; justify-content: flex-end; padding: 40px; }
        .ex-overlay-dark h3 { font-size: 1.8rem; font-weight: 900; margin-bottom: 8px; color: #fff; }
        .ex-overlay-dark p { color: #888; margin-bottom: 25px; font-size: 1rem; font-weight: 700; }
        .ex-badge { background: #fbc819; color: #000; padding: 4px 12px; font-size: 0.7rem; font-weight: 900; width: fit-content; margin-bottom: 15px; }
        .register-btn { background: #fff; color: #000; font-weight: 900; padding: 15px 30px; width: fit-content; text-transform: uppercase; font-size: 0.85rem; border: none; cursor: pointer; transition: all 0.3s ease; }
        .register-btn:hover { background: #fbc819; transform: scale(1.05); }


        .verified-exhibitors {
          margin-top: 60px;
          background: #000;
          padding: 40px;
          border: 1px solid #222;
        }
        .exhibitor-banner {
          display: flex;
          gap: 40px;
          align-items: center;
        }
        .banner-info {
          flex: 1;
          color: #fff;
        }
        .banner-info h2 {
          font-size: 2.2rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 20px;
        }
        .verified-badge-inline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: #10b981;
          font-size: 2.2rem;
          margin: 0 5px;
          vertical-align: middle;
          font-weight: 900;
        }

        .verified-badge-inline svg {
          filter: drop-shadow(0 1px 1px rgba(0,0,0,0.05));
        }
        .banner-info p {
          color: #aaa;
          font-size: 1rem;
          margin-bottom: 30px;
        }
        .explore-btn {
          background: #fff;
          color: #000;
          padding: 12px 30px;
          font-weight: 800;
          border-radius: 4px;
        }
        .featured-categories-section {
          background: linear-gradient(180deg, #fffdf0 0%, #ffffff 100%) !important; /* Brighter yellow-white mix */
          padding: 30px 0;
          margin: 15px 0;
        }
        .featured-categories-outer {
          background: linear-gradient(135deg, #ffffff 0%, #fffdf0 100%); /* Brighter mix for inner box */
          padding: 12px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          border: 1px solid #fff9db;
        }
        .cat-grid-mini {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .cat-card-mini {
          background: linear-gradient(135deg, #fffcf0 0%, #ffffff 100%) !important;
          height: 240px;
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
          align-items: center !important;
          padding: 12px;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid #fef3c7 !important;
          text-align: center;
        }
        .cat-card-mini:hover {
          background: linear-gradient(135deg, #fefce8 0%, #ffffff 100%);
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(251, 200, 25, 0.1);
          border-color: #fbc819;
        }
        .cat-img-box {
          width: 100%;
          height: 80px;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          margin-bottom: 12px;
        }
        .cat-prod-img {
          height: 100%;
          width: auto;
          max-width: 140px;
          object-fit: contain;
          transition: transform 0.3s ease;
          display: block;
          margin: 0 auto; /* Extra insurance for centering */
        }
        .cat-info-mini {
          display: flex;
          flex-direction: column;
          align-items: center !important;
          justify-content: center !important;
          width: 100%;
          text-align: center !important; /* Force text centering */
        }
        .cat-info-mini h3 {
          color: #1e293b;
          font-size: 1.25rem;
          font-weight: 800;
          margin: 0 0 8px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          text-align: center !important;
        }
        .cat-info-mini p {
          color: #64748b;
          font-size: 0.85rem;
          line-height: 1.4;
          margin: 0 auto !important;
          max-width: 220px;
          text-align: center !important;
        }
        .cat-card-mini:hover .cat-prod-img {
          transform: scale(1.1);
        }
        .trending-sections {
          margin-top: 40px;
          margin-bottom: 40px;
        }
        .trending-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .trending-box {
          background: #fff;
          border-radius: 8px;
          padding: 24px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .box-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .header-title h3 {
          font-size: 1.15rem;
          font-weight: 900;
          color: #1a1a1a;
          margin-bottom: 2px;
          letter-spacing: -0.02em;
        }
        .header-title p {
          font-size: 0.72rem;
          color: #777;
          line-height: 1.2;
        }
        .see-all {
          font-size: 0.75rem;
          color: #1a1a1a;
          font-weight: 800;
          text-decoration: none;
          text-transform: uppercase;
        }
        .see-all:hover {
          text-decoration: underline;
        }
        .trending-items {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        .trending-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-decoration: none;
        }
        .item-img {
          width: 100%;
          aspect-ratio: 1;
          background-size: cover;
          background-position: center;
          background-color: #f8f8f8;
          border-radius: 4px;
          position: relative;
        }
        .rank-badge {
          position: absolute;
          top: 0;
          left: 0;
          background: #fbc819;
          color: #000;
          font-weight: 900;
          font-size: 0.65rem;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          clip-path: polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%);
        }
        .item-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .item-name {
          font-size: 0.68rem;
          font-weight: 700;
          color: #333;
          height: 28px;
          overflow: hidden;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .item-price {
          font-size: 0.82rem;
          font-weight: 900;
          color: #1a1a1a;
        }
        .item-moq {
          font-size: 0.62rem;
          color: #999;
          font-weight: 600;
          text-transform: uppercase;
        }
        @media (max-width: 1100px) {
          .trending-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .trending-items { grid-template-columns: 1fr 1fr; }
        }
        .selection-sections { margin-top: 20px; margin-bottom: 40px; }
        .selection-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .selection-box { background: #fff; border-radius: 8px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .selection-items { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 20px; }
        .selection-item { display: flex; flex-direction: column; gap: 10px; }
        .sel-img { width: 100%; aspect-ratio: 1; background-size: cover; background-position: center; background-color: #f8f8f8; border-radius: 4px; border: 1px solid #f0f0f0; }
        .sel-info h4 { font-size: 0.78rem; font-weight: 800; color: #1a1a1a; margin-bottom: 2px; }
        .sel-info p { font-size: 0.72rem; color: #777; margin: 0; line-height: 1.2; }
        .sel-price { font-size: 0.95rem; font-weight: 900; color: #1a1a1a; margin: 0 0 2px 0 !important; }
        .sel-moq { font-size: 0.68rem; color: #999; margin: 0 0 4px 0 !important; font-weight: 600; }
        .sel-tag { font-size: 0.68rem; color: #777; font-weight: 700; background: #f8f8f8; padding: 2px 6px; width: fit-content; border-radius: 2px; }
        @media (max-width: 1200px) {
          .selection-grid { grid-template-columns: 1fr; }
        }
        .rfq-section { margin-top: 20px; margin-bottom: 40px; }
        .rfq-banner { height: 420px; background-size: cover; background-position: center; border-radius: 12px; overflow: hidden; position: relative; border: 1px solid #333; }
        .rfq-overlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%); display: flex; align-items: center; justify-content: space-between; padding: 60px; }
        .rfq-info { color: #fff; max-width: 500px; }
        .rfq-info h2 { font-size: 2.5rem; font-weight: 900; margin-bottom: 30px; color: #fff !important; letter-spacing: -1px; }
        .rfq-benefits { display: flex; flex-direction: column; gap: 15px; margin-bottom: 40px; }
        .benefit-item { display: flex; gap: 12px; align-items: flex-start; }
        .benefit-item .dot { color: #fbc819; font-weight: 900; font-size: 1.2rem; }
        .benefit-item p { color: #eee; font-size: 1.05rem; margin: 0; font-weight: 600; line-height: 1.4; }
        .rfq-view-more { background: #fff; color: #000; font-weight: 800; padding: 12px 35px; border-radius: 4px; border: none; cursor: pointer; transition: all 0.3s ease; }
        .rfq-view-more:hover { background: #fbc819; transform: translateY(-2px); }
        
        .rfq-form-card { background: #fff; padding: 40px; border-radius: 12px; width: 450px; box-shadow: 0 25px 50px rgba(0,0,0,0.3); }
        .rfq-form-card h3 { font-size: 1.6rem; font-weight: 800; color: #1a1a1a; margin-bottom: 25px; letter-spacing: -0.5px; }
        .rfq-form { display: flex; flex-direction: column; gap: 18px; }
        .rfq-form input, .rfq-form select { padding: 14px 20px; border: 1px solid #ddd; border-radius: 30px; font-size: 0.95rem; outline: none; transition: all 0.3s ease; width: 100%; }
        .rfq-form input:focus { border-color: #fbc819; box-shadow: 0 0 0 3px rgba(251, 200, 25, 0.1); }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .rfq-submit-btn { background: linear-gradient(90deg, #fbc819, #f97316); color: #000; font-weight: 900; padding: 16px; border-radius: 30px; border: none; cursor: pointer; transition: all 0.3s ease; font-size: 1rem; margin-top: 10px; box-shadow: 0 4px 15px rgba(251, 200, 25, 0.3); }
        .rfq-submit-btn:hover { transform: scale(1.02); box-shadow: 0 8px 25px rgba(251, 200, 25, 0.4); }
        @media (max-width: 1100px) {
          .rfq-overlay { flex-direction: column; padding: 40px; text-align: center; justify-content: center; gap: 40px; }
          .rfq-banner { height: auto; min-height: 650px; }
          .rfq-info { max-width: 100%; }
          .benefit-item { justify-content: center; text-align: left; }
          .rfq-form-card { width: 100%; max-width: 420px; padding: 30px; }
          .rfq-info h2 { font-size: 2rem; }
        }
        .region-section { margin-top: 20px; margin-bottom: 40px; }
        .region-box { background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #f0f0f0; }
        .region-header { display: flex; align-items: baseline; gap: 20px; margin-bottom: 25px; }
        .region-header h3 { font-size: 1.25rem; font-weight: 800; color: #1a1a1a; margin: 0; letter-spacing: -0.5px; }
        .region-header p { font-size: 0.85rem; color: #777; margin: 0; }
        .region-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .region-card { display: flex; align-items: center; justify-content: center; gap: 15px; padding: 25px; border-radius: 8px; transition: all 0.3s ease; cursor: pointer; border: 1px solid transparent; }
        .region-card:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.05); border-color: #eee; }
        .region-card img { width: 30px; height: auto; box-shadow: 0 2px 5px rgba(0,0,0,0.1); border-radius: 2px; }
        .region-card span { font-size: 1.1rem; font-weight: 700; color: #333; }
        .region-card.india { background: #f0fdf4; }
        .region-card.korea { background: #f0f7ff; }
        .region-card.vietnam { background: #fef2f2; }
        @media (max-width: 900px) {
          .region-header { flex-direction: column; gap: 5px; }
          .region-grid { grid-template-columns: 1fr; }
        }
        .featured-categories { margin-top: 20px; margin-bottom: 40px; }
        .fc-box { background: #fff; border-radius: 8px; padding: 30px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #f0f0f0; }
        .fc-header { display: flex; align-items: baseline; gap: 20px; margin-bottom: 30px; }
        .fc-header h3 { font-size: 1.3rem; font-weight: 800; color: #1a1a1a; margin: 0; letter-spacing: -0.5px; }
        .fc-header p { font-size: 0.85rem; color: #777; margin: 0; }
        .fc-scroll-container { overflow-x: auto; scrollbar-width: none; padding-bottom: 10px; margin-left: -10px; padding-left: 10px; }
        .fc-scroll-container::-webkit-scrollbar { display: none; }
        .fc-grid { display: flex; gap: 35px; min-width: max-content; }
        .fc-item { display: flex; flex-direction: column; align-items: center; gap: 12px; cursor: pointer; transition: transform 0.3s ease; width: 100px; text-align: center; }
        .fc-item:hover { transform: translateY(-5px); }
        .fc-item:hover .fc-icon-wrapper { border-color: #fbc819; box-shadow: 0 8px 15px rgba(251, 200, 25, 0.15); }
        .fc-icon-wrapper { width: 90px; height: 90px; border-radius: 50%; background: #f8f8f8; display: flex; align-items: center; justify-content: center; border: 2px solid transparent; transition: all 0.3s ease; padding: 15px; }
        .fc-icon-wrapper img { width: 100%; height: 100%; object-fit: contain; mix-blend-mode: multiply; }
        .fc-name { font-size: 0.8rem; font-weight: 600; color: #444; line-height: 1.2; }
        @media (max-width: 768px) {
          .fc-header { flex-direction: column; gap: 5px; margin-bottom: 20px; }
          .fc-icon-wrapper { width: 70px; height: 70px; padding: 10px; }
          .fc-item { width: 80px; gap: 8px; }
          .fc-grid { gap: 20px; }
        }
        .featured-categories { margin-top: 20px; margin-bottom: 40px; }
        .fc-box { background: #fff; border-radius: 8px; padding: 30px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #f0f0f0; }
        .fc-header { display: flex; align-items: baseline; gap: 20px; margin-bottom: 30px; }
        .fc-header h3 { font-size: 1.3rem; font-weight: 800; color: #1a1a1a; margin: 0; letter-spacing: -0.5px; }
        .fc-header p { font-size: 0.85rem; color: #777; margin: 0; }
        .fc-scroll-container { overflow-x: auto; scrollbar-width: none; padding-bottom: 10px; margin-left: -10px; padding-left: 10px; }
        .fc-scroll-container::-webkit-scrollbar { display: none; }
        .fc-grid { display: flex; gap: 35px; min-width: max-content; }
        .fc-item { display: flex; flex-direction: column; align-items: center; gap: 12px; cursor: pointer; transition: transform 0.3s ease; width: 100px; text-align: center; }
        .fc-item:hover { transform: translateY(-5px); }
        .fc-item:hover .fc-icon-wrapper { border-color: #fbc819; box-shadow: 0 8px 15px rgba(251, 200, 25, 0.15); }
        .fc-icon-wrapper { width: 90px; height: 90px; border-radius: 50%; background: #f8f8f8; display: flex; align-items: center; justify-content: center; border: 2px solid transparent; transition: all 0.3s ease; padding: 15px; }
        .fc-icon-wrapper img { width: 100%; height: 100%; object-fit: contain; mix-blend-mode: multiply; }
        .fc-name { font-size: 0.8rem; font-weight: 600; color: #444; line-height: 1.2; }
        @media (max-width: 768px) {
          .fc-header { flex-direction: column; gap: 5px; margin-bottom: 20px; }
          .fc-icon-wrapper { width: 70px; height: 70px; padding: 10px; }
          .fc-item { width: 80px; gap: 8px; }
          .fc-grid { gap: 20px; }
        }
        .knowledge-center { margin-top: 20px; margin-bottom: 40px; }
        .kc-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 25px; padding: 0 5px; }
        .kc-header h3 { font-size: 1.4rem; font-weight: 900; color: #fbc819; margin: 0; letter-spacing: -0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.1); }
        .kc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .kc-card { background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #f0f0f0; transition: transform 0.3s ease, box-shadow 0.3s ease; display: flex; flex-direction: column; cursor: pointer; }
        .kc-card:hover { transform: translateY(-5px); box-shadow: 0 12px 25px rgba(0,0,0,0.1); border-color: #e0e0e0; }
        .kc-img { width: 100%; height: 200px; background-size: cover; background-position: center; border-bottom: 1px solid #f0f0f0; }
        .kc-info { padding: 25px; display: flex; flex-direction: column; flex: 1; }
        .kc-info h4 { font-size: 1.1rem; font-weight: 700; color: #1a1a1a; margin: 0 0 12px 0; line-height: 1.3; }
        .kc-info p { font-size: 0.85rem; color: #666; margin: 0 0 20px 0; line-height: 1.5; flex: 1; }
        .kc-date { font-size: 0.75rem; color: #aaa; font-weight: 500; }
        @media (max-width: 900px) {
          .kc-grid { grid-template-columns: 1fr; }
        }
        .sourcing-services { margin-top: 20px; margin-bottom: 40px; }
        .ss-header { margin-bottom: 25px; padding: 0 5px; }
        .ss-header h3 { font-size: 1.4rem; font-weight: 900; color: #ffffff; margin: 0; letter-spacing: -0.5px; text-shadow: 0 2px 4px rgba(0,0,0,0.3); }
        .ss-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .ss-card { display: flex; flex-direction: column; gap: 15px; cursor: pointer; }
        .ss-img-container { position: relative; border-radius: 8px; overflow: hidden; height: 180px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .ss-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
        .ss-card:hover .ss-img { transform: scale(1.05); }
        .ss-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%); display: flex; align-items: flex-end; padding: 20px; }
        .ss-overlay h4 { color: #fff; font-size: 1.2rem; font-weight: 800; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
        .ss-card p { font-size: 0.9rem; color: #555; line-height: 1.4; margin: 0; padding: 0 5px; }
        @media (max-width: 1024px) {
          .ss-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .ss-grid { grid-template-columns: 1fr; }
        }
        .event-banner-section { margin-top: 10px; margin-bottom: 50px; }
        .event-banner { background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%); border-radius: 12px; display: flex; align-items: center; justify-content: space-between; position: relative; overflow: hidden; padding: 40px 50px; box-shadow: 0 10px 30px rgba(0,0,0,0.15); border: 1px solid #444; }
        .eb-content { flex: 1; max-width: 65%; z-index: 2; }
        .eb-content h2 { font-size: 2.2rem; font-weight: 900; color: #fff; margin: 0 0 15px 0; letter-spacing: -0.5px; }
        .eb-tags { display: flex; gap: 15px; margin-bottom: 15px; flex-wrap: wrap; }
        .eb-tags span { padding: 6px 12px; font-size: 0.85rem; font-weight: 700; border-radius: 4px; }
        .eb-date { background: #fbc819; color: #000; }
        .eb-location { background: #fff; color: #000; }
        .eb-content p { color: #ccc; font-size: 1rem; margin: 0; line-height: 1.5; font-weight: 500; }
        .eb-action { z-index: 2; margin-left: 30px; margin-right: 250px; }
        .eb-register-btn { background: #fff; color: #1a1a1a; font-weight: 800; font-size: 1.1rem; padding: 15px 35px; border-radius: 6px; border: none; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(255,255,255,0.2); }
        .eb-register-btn:hover { background: #fbc819; transform: translateY(-3px); box-shadow: 0 6px 20px rgba(251,200,25,0.4); }
        .eb-image-clip { position: absolute; right: 0; top: 0; bottom: 0; width: 35%; clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%); z-index: 1; }
        .eb-image-clip img { width: 100%; height: 100%; object-fit: cover; opacity: 0.9; }
        @media (max-width: 1100px) {
          .event-banner { flex-direction: column; align-items: flex-start; padding: 30px; }
          .eb-content { max-width: 100%; margin-bottom: 25px; }
          .eb-action { margin: 0; }
          .eb-image-clip { display: none; }
        }
        .recommended-list { margin-top: 10px; margin-bottom: 50px; padding: 30px 10px; }
        .recommended-list h3 { font-size: 1.4rem; font-weight: 900; color: #ffffff; margin-top: 0; margin-bottom: 25px; letter-spacing: -0.5px; text-shadow: 0 2px 4px rgba(0,0,0,0.3); }
        .rl-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }
        .rl-col { display: flex; flex-direction: column; gap: 12px; }
        .rl-col a { font-size: 0.9rem; color: #e0e0e0; text-decoration: none; transition: color 0.2s ease; font-weight: 500; }
        .rl-col a:hover { color: #fbc819; }
        @media (max-width: 1024px) {
          .rl-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .rl-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .rl-grid { grid-template-columns: 1fr; }
        }
        .exhibitor-cards {
          flex: 2;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }
        .ex-card {
          background: #fff;
          padding: 15px;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .ex-header {
          display: flex;
          gap: 10px;
        }
        .ex-icon {
          width: 32px;
          height: 32px;
          background: #f8f8f8;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
        }
        .ex-name-loc h4 {
          font-size: 0.85rem;
          font-weight: 800;
          color: #333;
          margin-bottom: 4px;
        }
        .ex-tags {
          display: flex;
          gap: 5px;
          margin-bottom: 5px;
        }
        .ex-tags span {
          font-size: 0.65rem;
          font-weight: 700;
          color: #2196F3;
          background: #E3F2FD;
          padding: 1px 4px;
        }
        .ex-loc {
          font-size: 0.7rem;
          color: #888;
        }
        .ex-previews {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 5px;
        }
        .pre-img {
          aspect-ratio: 1;
          background-size: cover;
          background-position: center;
          background-color: #f0f0f0;
          border: 1px solid #eee;
        }

        .product-card {
          background: #fff;
          border: 1px solid #eee;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .product-card:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transform: translateY(-5px);
        }
        .product-img {
          height: 200px;
          position: relative;
          background-size: cover;
          background-position: center;
        }
        .supplier-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: #fbc819;
          color: #000;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 2px 6px;
          text-transform: uppercase;
        }
        .product-info {
          padding: 15px;
        }
        .product-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 8px;
          height: 40px;
          overflow: hidden;
        }
        .product-specs {
          font-size: 0.75rem;
          color: #888;
          margin-bottom: 12px;
        }
        .price {
          font-size: 1.1rem;
          font-weight: 800;
          color: #fbc819;
          margin-bottom: 4px;
        }
        .moq {
          font-size: 0.7rem;
          color: #aaa;
          margin-bottom: 15px;
        }
        .product-actions {
          display: flex;
          gap: 10px;
        }
        .inquiry-btn {
          flex: 1;
          background: #000;
          color: #fff;
          padding: 8px;
          font-weight: 700;
          font-size: 0.8rem;
          border: 1px solid #000;
        }
        .inquiry-btn:hover {
          background: #fbc819;
          color: #000;
          border-color: #fbc819;
        }
        .chat-btn {
          width: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #ddd;
          color: #666;
        }
        .chat-btn:hover {
          background: #f8f8f8;
          color: #000;
        }

        .dronetv-about {
          margin-top: 60px;
          position: relative;
          background: url('/hero.png') center/cover;
          min-height: 500px;
          display: flex;
          align-items: center;
          padding: 80px 40px;
          overflow: hidden;
        }
        .about-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 100%);
          z-index: 1;
        }
        .about-content {
          position: relative;
          z-index: 2;
          max-width: 1000px;
        }
        .badge {
          background: #fbc819;
          color: #000;
          padding: 6px 14px;
          font-weight: 800;
          font-size: 0.75rem;
          margin-bottom: 25px;
          display: inline-block;
          text-transform: uppercase;
        }
        h2 { font-size: 2.8rem; font-weight: 900; margin-bottom: 25px; color: #fff; line-height: 1.1; }
        p { color: #ccc; font-size: 1.1rem; margin-bottom: 40px; max-width: 700px; line-height: 1.6; }
        
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 50px;
        }
        .trust-card {
          background: rgba(255, 255, 255, 0.03);
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }
        .trust-card:hover {
          background: rgba(251, 200, 25, 0.05);
          border-color: #fbc819;
          transform: translateY(-5px);
        }
        .trust-icon { font-size: 1.5rem; margin-bottom: 15px; }
        .trust-card h4 { color: #fbc819; font-size: 1rem; margin-bottom: 10px; }
        .trust-card p { font-size: 0.85rem; margin-bottom: 0; color: #999; }
        
        .about-actions {
          display: flex;
          gap: 20px;
        }
        .join-btn {
          background: #fbc819;
          color: #000;
          padding: 14px 35px;
          font-weight: 800;
          font-size: 1rem;
        }
        .learn-btn {
          background: transparent;
          color: #fff;
          border: 2px solid #fff;
          padding: 12px 35px;
          font-weight: 800;
          font-size: 1rem;
        }
        
        .sourcing-solutions {
          margin-top: 80px;
          margin-bottom: 80px;
          padding: 40px;
          background: #f8f8f8;
          border: 1px solid #eee;
        }
        .sourcing-solutions .section-header {
          text-align: center;
          margin-bottom: 50px;
        }
        .sourcing-solutions h2 {
          font-size: 2.2rem;
          color: #1a1a1a;
          margin-bottom: 10px;
          font-weight: 800;
        }
        .sourcing-solutions p {
          color: #666;
          font-size: 1.1rem;
        }
        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        .solution-card {
          background: #fff;
          padding: 30px;
          text-align: center;
          border: 1px solid #eee;
          transition: all 0.3s ease;
        }
        .solution-card:hover {
          border-color: #fbc819;
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.05);
        }
        .sol-icon {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        .solution-card h3 {
          font-size: 1.1rem;
          font-weight: 800;
          color: #333;
          margin-bottom: 15px;
        }
        .solution-card p {
          font-size: 0.9rem;
          color: #777;
          line-height: 1.5;
          margin-bottom: 20px;
        }
        .solution-card a {
          font-weight: 700;
          color: #fbc819;
          font-size: 0.85rem;
          text-transform: uppercase;
        }

        @media (max-width: 1000px) {
          .solutions-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .solutions-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
