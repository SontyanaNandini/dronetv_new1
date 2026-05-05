'use client';

import React from 'react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="pricing-page animate-fade">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="layout-container">
          <div className="hero-content">
            <span className="side-by-side">SIDE-BY-SIDE</span>
            <h1>Package comparison at a glance.</h1>
            <p>Every benefit across Reach, Scale, and Brand — so you can pick on fit, not guesswork.</p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pricing-grid-section layout-container">
        <div className="pricing-grid">
          {/* Reach Pack */}
          <div className="plan-card rounded-24">
            <div className="plan-top">
              <span className="plan-intent">ESTABLISH PRESENCE</span>
              <h2>Reach Pack</h2>
              <p>Verified presence on India's drone industry marketplace. Ideal for companies establishing their digital footprint.</p>
            </div>
            
            <div className="price-block">
              <div className="main-price">
                <span className="curr">₹</span>
                <strong>25,000</strong>
                <span className="year">/year</span>
              </div>
              <div className="gst-info">+ 18% GST - ₹4,500 - Total ₹29,500</div>
            </div>

            <button className="select-pay-btn">Select & Pay • Reach Pack</button>

            <div className="features-list">
              <div className="feat-group">
                <h4>MARKETPLACE & WEBSITE</h4>
                <ul>
                  <li>✓ Verified company profile on DroneTv.in</li>
                  <li>✓ Dedicated single-page website on DroneTv</li>
                  <li>✓ Up to 10 product & service listings</li>
                  <li>✓ B2B enquiry form active on profile</li>
                  <li className="dimmed">— Featured category page placement</li>
                  <li className="dimmed">— Homepage feature or priority ranking</li>
                </ul>
              </div>
              <div className="feat-group">
                <h4>LEAD NOTIFICATIONS</h4>
                <ul>
                  <li>✓ Notification email on new enquiry</li>
                  <li>✓ View full lead details on platform</li>
                  <li className="dimmed">— Monthly lead summary report</li>
                  <li className="dimmed">— Full buyer contact details delivered</li>
                </ul>
              </div>
              <div className="feat-group">
                <h4>SOCIAL MEDIA</h4>
                <ul>
                  <li>✓ 2 promotional posts — one-time at onboarding</li>
                  <li>✓ Published on YouTube, LinkedIn, Instagram, Facebook</li>
                  <li className="dimmed">— Short reel (30-60 sec) produced</li>
                  <li className="dimmed">— Video interview (5-min on YouTube)</li>
                </ul>
              </div>
              <div className="feat-group">
                <h4>MAGAZINE</h4>
                <ul>
                  <li>✓ Industry Directory listing — logo & category (1 issue)</li>
                  <li className="dimmed">— Magazine advertisement</li>
                  <li className="dimmed">— Magazine editorial article</li>
                </ul>
              </div>
            </div>
            <div className="show-less">— Show less</div>
          </div>

          {/* Scale Pack */}
          <div className="plan-card featured rounded-24">
            <div className="best-value-ribbon">★ BEST VALUE</div>
            <div className="plan-top">
              <span className="plan-intent yellow-text">BEST VALUE</span>
              <h2>Scale Pack</h2>
              <p>Full-year brand presence with video interviews, social media, content, and magazine advertising. Best value for established drone companies.</p>
            </div>
            
            <div className="price-block">
              <div className="main-price">
                <span className="curr">₹</span>
                <strong>75,000</strong>
                <span className="year">/year</span>
              </div>
              <div className="gst-info">+ 18% GST - ₹13,500 - Total ₹88,500</div>
            </div>

            <button className="select-pay-btn yellow-btn">Select & Pay • Scale Pack</button>

            <div className="complimentary-card">
              <div className="comp-header">★ COMPLIMENTARY</div>
              <div className="comp-body">
                <strong>Drone Simulator Zone Plan</strong>
                <span>Worth ₹7,500/year • Special offer • Limited time</span>
              </div>
            </div>

            <div className="features-list">
              <div className="feat-group">
                <h4>MARKETPLACE & WEBSITE</h4>
                <ul>
                  <li>✓ Featured profile with Featured Supplier badge</li>
                  <li>✓ Enhanced single-page website — gallery, services, lead form</li>
                  <li>✓ Up to 25 product & service listings</li>
                  <li>✓ Featured category placement — 3 months during the year</li>
                  <li className="dimmed">— Homepage feature or priority search ranking</li>
                </ul>
              </div>
              <div className="feat-group">
                <h4>LEAD NOTIFICATIONS</h4>
                <ul>
                  <li>✓ Notification email on new enquiry</li>
                  <li>✓ View full lead details on platform</li>
                  <li>✓ Monthly lead summary report — enquiry count & profile views</li>
                  <li className="dimmed">— Full buyer contact details delivered directly</li>
                </ul>
              </div>
              <div className="feat-group">
                <h4>SOCIAL MEDIA & VIDEO</h4>
                <ul>
                  <li>✓ 6 promotional posts over 12 months (bi-monthly)</li>
                  <li>✓ 2 short reels (30-60 sec) produced & published</li>
                  <li>✓ 1 video interview (5-min) — YouTube + platform page</li>
                  <li>✓ Interview promoted via dedicated social post on publish week</li>
                  <li className="dimmed">— Event coverage posts</li>
                </ul>
              </div>
              <div className="feat-group">
                <h4>CONTENT</h4>
                <ul>
                  <li>✓ 1 editorial article (600-800 words) on DroneTv.in</li>
                  <li>✓ Article promoted via social media on publish day</li>
                </ul>
              </div>
              <div className="feat-group">
                <h4>MAGAZINE</h4>
                <ul>
                  <li>✓ Half-page advertisement in 2 issues</li>
                  <li>✓ Industry Directory listing — logo & tagline</li>
                  <li className="dimmed">— Magazine editorial article or cover feature</li>
                </ul>
              </div>
            </div>
            <div className="show-less">— Show less</div>
          </div>

          {/* Brand Pack */}
          <div className="plan-card rounded-24">
            <div className="plan-top">
              <span className="plan-intent">INDUSTRY AUTHORITY</span>
              <h2>Brand Pack</h2>
              <p>Complete industry authority — media, marketplace, magazine, expo stall branding, and full buyer data. For companies that lead their category.</p>
            </div>
            
            <div className="price-block">
              <div className="main-price">
                <span className="curr">₹</span>
                <strong>1,50,000</strong>
                <span className="year">/year</span>
              </div>
              <div className="gst-info">+ 18% GST - ₹27,000 - Total ₹1,77,000</div>
            </div>

            <button className="select-pay-btn">Select & Pay • Brand Pack</button>

            <div className="complimentary-card">
              <div className="comp-header">★ COMPLIMENTARY</div>
              <div className="comp-body">
                <strong>Drone Simulator Pro Plan</strong>
                <span>Worth ₹31,500/year • Special offer • Limited time</span>
              </div>
            </div>

            <div className="features-list">
              <div className="feat-group">
                <h4>MARKETPLACE & WEBSITE</h4>
                <ul>
                  <li>✓ Premium Profile with Industry Partner badge</li>
                  <li>✓ Full single-page website — premium layout + custom banner</li>
                  <li>✓ Unlimited product & service listings</li>
                  <li>✓ Homepage & category feature — 12 months, quarterly refresh</li>
                  <li>✓ Priority ranking in DroneTv.in search results</li>
                </ul>
              </div>
              <div className="feat-group">
                <h4>LEAD NOTIFICATIONS</h4>
                <ul>
                  <li>✓ Notification email on new enquiry</li>
                  <li>✓ View full lead details on platform</li>
                  <li>✓ Monthly analytics — enquiries, views, listing performance</li>
                  <li>✓ Full buyer contact details on platform — name, company, email, phone</li>
                </ul>
              </div>
              <div className="feat-group">
                <h4>SOCIAL MEDIA & VIDEO</h4>
                <ul>
                  <li>✓ 12 promotional posts — one per month around milestones</li>
                  <li>✓ 4 short reels (30-60 sec) produced & published</li>
                  <li>✓ 2 video interviews (5-min) — YouTube + embedded on platform</li>
                  <li>✓ Both interviews promoted via dedicated social campaigns</li>
                  <li>✓ 1 event coverage post — where DroneTv is media partner</li>
                </ul>
              </div>
              <div className="feat-group">
                <h4>CONTENT</h4>
                <ul>
                  <li>✓ 3 feature articles (700-1000 words) on DroneTv.in</li>
                  <li>✓ Up to 6 DroneTv News items per year</li>
                </ul>
              </div>
              <div className="feat-group">
                <h4>MAGAZINE</h4>
                <ul>
                  <li>✓ Full-page advertisement in 4 issues (quarterly)</li>
                  <li>✓ 1 full editorial article (2-3 pages) in one issue</li>
                  <li>✓ Magazine cover feature eligibility</li>
                  <li>✓ Industry Directory listing with logo & tagline in all issues</li>
                </ul>
              </div>
              <div className="feat-group">
                <h4>INDUSTRY & EXPO</h4>
                <ul>
                  <li>✓ Company branding in DroneTv expo stall materials where applicable</li>
                </ul>
              </div>
            </div>
            <div className="show-less">— Show less</div>
          </div>
        </div>

        <div className="quick-stats-bar">
          <span>✓ Profile live in 7 business days</span>
          <span>✓ Up to 2 revision rounds</span>
          <span>✓ Content approval before publish</span>
          <span>✓ Perpetual usage rights</span>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="comparison-section layout-container">
        <div className="section-header-row">
          <div className="header-text">
            <span className="side-by-side-label">SIDE-BY-SIDE</span>
            <h2>Package comparison at a glance.</h2>
            <p>Every benefit across Reach, Scale, and Brand — so you can pick on fit, not guesswork.</p>
          </div>
          <button className="expand-btn">+ Expand all 5 groups</button>
        </div>

        <div className="table-container rounded-24">
          <table className="comp-table">
            <thead>
              <tr>
                <th className="feat-col">FEATURE</th>
                <th className="plan-col">
                  <strong>Reach Pack</strong>
                  <span>₹25,000/yr + GST</span>
                </th>
                <th className="plan-col highlighted">
                  <strong>Scale Pack</strong>
                  <span>₹75,000/yr + GST</span>
                </th>
                <th className="plan-col">
                  <strong>Brand Pack</strong>
                  <span>₹1,50,000/yr + GST</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="cat-row"><td colSpan={4}>MARKETPLACE & WEBSITE</td></tr>
              <tr>
                <td>Company Profile</td>
                <td>Verified</td>
                <td className="highlight-cell">Featured</td>
                <td>Premium</td>
              </tr>
              <tr>
                <td>Single Page Website</td>
                <td>Basic</td>
                <td className="highlight-cell">Enhanced</td>
                <td>Full Premium</td>
              </tr>
              <tr>
                <td>Product / Service Listings</td>
                <td>Up to 10</td>
                <td className="highlight-cell">Up to 25</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>B2B Enquiry Form</td>
                <td>✓</td>
                <td className="highlight-cell">✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Featured Category Placement</td>
                <td>—</td>
                <td className="highlight-cell">3 months</td>
                <td>12 mo • quarterly refresh</td>
              </tr>
              <tr>
                <td>Homepage Feature</td>
                <td>—</td>
                <td className="highlight-cell">—</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Priority Search Ranking</td>
                <td>—</td>
                <td className="highlight-cell">—</td>
                <td>✓</td>
              </tr>
              
              <tr className="cat-row"><td colSpan={4}>LEAD NOTIFICATIONS</td></tr>
              <tr>
                <td>Lead Notification Email</td>
                <td>✓</td>
                <td className="highlight-cell">✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>View Full Lead Details</td>
                <td>✓</td>
                <td className="highlight-cell">✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Monthly Analytics</td>
                <td>—</td>
                <td className="highlight-cell">✓</td>
                <td>✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Bundle Savings Section */}
      <section className="bundle-savings layout-container">
        <div className="section-header-centered">
          <span className="meta">WHAT YOU SAVE BY BUNDLING</span>
          <h2>If you bought <span>everything separately.</span></h2>
          <p>Market rates are approximate vendor benchmarks. DroneTv bundles marketplace, media, reels, interviews, and magazine for the drone industry at significantly better value.</p>
        </div>

        <div className="savings-grid">
          <div className="savings-card rounded-24">
            <span className="pkg">REACH PACK PACKAGE</span>
            <h3>₹25,000 <span>/yr</span></h3>
            <div className="savings-calc">
              <div className="row"><span>If bought separately</span> <span className="strike">~₹51,000</span></div>
              <div className="row"><span>DroneTv bundle</span> <span>₹25,000</span></div>
            </div>
            <div className="save-badge">YOU SAVE <strong>~₹26,000</strong></div>
            <button className="pay-mini-btn">Pay ₹25,000</button>
          </div>

          <div className="savings-card featured rounded-24">
            <span className="pkg">SCALE PACK PACKAGE</span>
            <h3>₹75,000 <span>/yr</span></h3>
            <div className="savings-calc">
              <div className="row"><span>If bought separately</span> <span className="strike">~₹2,05,000</span></div>
              <div className="row"><span>DroneTv bundle</span> <span>₹75,000</span></div>
            </div>
            <div className="save-badge yellow">YOU SAVE <strong>~₹1,30,000</strong></div>
            <button className="pay-mini-btn dark">Pay ₹75,000</button>
          </div>

          <div className="savings-card rounded-24">
            <span className="pkg">BRAND PACK PACKAGE</span>
            <h3>₹1,50,000 <span>/yr</span></h3>
            <div className="savings-calc">
              <div className="row"><span>If bought separately</span> <span className="strike">~₹4,73,000</span></div>
              <div className="row"><span>DroneTv bundle</span> <span>₹1,50,000</span></div>
            </div>
            <div className="save-badge">YOU SAVE <strong>~₹3,23,000</strong></div>
            <button className="pay-mini-btn">Pay ₹1,50,000</button>
          </div>
        </div>
      </section>

      {/* Comparison Row */}
      <section className="competitive-edge layout-container">
        <div className="comp-row rounded-24">
          <div className="comp-item">
            <span className="comp-label">WHY DRONETV OVER GENERIC PLATFORMS</span>
            <h3>IndiaMart</h3>
            <p>₹28,000/yr — all industries, no media production.</p>
          </div>
          <div className="comp-item">
            <span className="comp-label opacity-0">.</span>
            <h3>JustDial</h3>
            <p>₹18,000-20,000/yr — local directory listing only.</p>
          </div>
          <div className="comp-item branded">
            <span className="comp-label yellow-text">DRONETV</span>
            <h3>DroneTv</h3>
            <p>India's only drone-exclusive platform — marketplace + media + magazine + interviews + leads, bundled.</p>
          </div>
        </div>
      </section>

      <div className="bottom-nav">
        <Link href="/" className="back-pill-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <span>Back</span>
        </Link>
      </div>

      <style jsx>{`
        .pricing-page {
          background: #fbc819;
          color: #000;
          min-height: 100vh;
          padding-bottom: 100px;
        }

        .pricing-hero {
          padding: 60px 0 20px;
        }

        .side-by-side {
          font-size: 0.65rem;
          color: #000;
          font-weight: 900;
          letter-spacing: 1.5px;
          border-left: 3px solid #000;
          padding-left: 10px;
          margin-bottom: 15px;
          display: block;
        }

        .hero-content h1 {
          font-size: 2.5rem;
          font-weight: 900;
          margin-bottom: 10px;
          letter-spacing: -1.5px;
          color: #000;
        }

        .hero-content p {
          font-size: 0.95rem;
          color: #333;
          max-width: 500px;
          font-weight: 600;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-top: 30px;
        }

        .plan-card {
          background: #fef3c7;
          border: 1px solid rgba(0,0,0,0.05);
          padding: 30px;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }

        .plan-card.featured {
          border: 2px solid #000;
          background: #fef3c7;
        }

        .best-value-ribbon {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #000;
          color: #fbc819;
          padding: 4px 15px;
          font-size: 0.6rem;
          font-weight: 900;
          border-radius: 20px;
          white-space: nowrap;
        }

        .plan-intent {
          font-size: 0.6rem;
          font-weight: 900;
          color: #666;
          letter-spacing: 1px;
          margin-bottom: 10px;
          display: block;
        }

        .yellow-text { color: #000; }

        .plan-top h2 { font-size: 1.8rem; font-weight: 900; margin-bottom: 8px; color: #000; }
        .plan-top p { font-size: 0.8rem; color: #555; line-height: 1.4; margin-bottom: 20px; height: 50px; font-weight: 500; }

        .price-block { margin-bottom: 20px; }
        .main-price { display: flex; align-items: baseline; gap: 4px; }
        .curr { font-size: 1.2rem; font-weight: 800; color: #000; }
        .main-price strong { font-size: 2.4rem; font-weight: 900; color: #000; }
        .year { font-size: 0.9rem; color: #666; }
        .gst-info { font-size: 0.7rem; color: #666; font-weight: 700; margin-top: 4px; }

        .select-pay-btn {
          background: #000;
          color: #fff;
          border: none;
          padding: 12px;
          border-radius: 8px;
          font-weight: 900;
          font-size: 0.8rem;
          cursor: pointer;
          margin-bottom: 25px;
          transition: all 0.3s;
        }

        .yellow-btn { background: #fbc819; color: #000; border: 2px solid #000; }
        .select-pay-btn:hover { transform: scale(1.02); background: #333; }
        .yellow-btn:hover { background: #fff; }

        .complimentary-card {
          border: 1px dashed rgba(0,0,0,0.2);
          background: rgba(251, 200, 25, 0.1);
          padding: 15px;
          margin-bottom: 25px;
          border-radius: 8px;
        }

        .comp-header { font-size: 0.55rem; font-weight: 900; color: #000; margin-bottom: 6px; opacity: 0.6; }
        .comp-body strong { display: block; font-size: 0.9rem; font-weight: 900; color: #000; margin-bottom: 2px; }
        .comp-body span { font-size: 0.65rem; color: #666; font-weight: 700; }

        .feat-group { margin-bottom: 20px; }
        .feat-group h4 { font-size: 0.6rem; color: #000; font-weight: 900; letter-spacing: 1px; margin-bottom: 12px; opacity: 0.5; }
        .feat-group ul { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; }
        .feat-group li { font-size: 0.8rem; color: #444; font-weight: 600; line-height: 1.3; }
        .feat-group li.dimmed { color: #aaa; }

        .show-less { margin-top: auto; font-size: 0.7rem; font-weight: 900; color: #000; cursor: pointer; text-transform: uppercase; }

        .quick-stats-bar {
          display: flex;
          justify-content: space-between;
          margin-top: 30px;
          padding: 15px 0;
          border-top: 1px solid rgba(0,0,0,0.1);
          color: #000;
          font-size: 0.75rem;
          font-weight: 800;
        }

        .bundle-savings { margin-top: 120px; }
        .section-header-centered { text-align: center; margin-bottom: 60px; }
        .section-header-centered .meta { font-size: 0.7rem; color: #000; font-weight: 900; letter-spacing: 2px; }
        .section-header-centered h2 { font-size: 3rem; font-weight: 900; margin: 15px 0; color: #000; }
        .section-header-centered h2 span { color: #fff; background: #000; padding: 0 10px; }
        .section-header-centered p { font-size: 1rem; color: #333; max-width: 800px; margin: 0 auto; font-weight: 600; }

        .savings-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .savings-card { background: #fef3c7; padding: 40px; border: 1px solid rgba(0,0,0,0.05); text-align: center; }
        .savings-card.featured { border-color: #000; background: #fff; }
        .savings-card .pkg { font-size: 0.65rem; font-weight: 900; color: #888; display: block; margin-bottom: 15px; }
        .savings-card h3 { font-size: 2.5rem; font-weight: 900; margin-bottom: 30px; color: #000; }
        .savings-card h3 span { font-size: 1rem; color: #888; }

        .savings-calc { border-top: 1px solid rgba(0,0,0,0.1); padding: 20px 0; display: flex; flex-direction: column; gap: 10px; }
        .savings-calc .row { display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 700; color: #555; }
        .strike { text-decoration: line-through; opacity: 0.5; }

        .save-badge {
          background: #eee;
          padding: 15px;
          border-radius: 8px;
          margin: 20px 0 30px;
          font-size: 0.9rem;
          color: #555;
        }
        .save-badge.yellow { background: #000; color: #fbc819; }
        .save-badge strong { font-size: 1.2rem; }

        .pay-mini-btn {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: 2px solid #000;
          background: transparent;
          color: #000;
          font-weight: 900;
          font-size: 0.8rem;
          cursor: pointer;
        }
        .pay-mini-btn.dark { background: #000; color: #fbc819; border-color: #000; }

        .competitive-edge { margin-top: 120px; }
        .comp-row { background: #fef3c7; padding: 40px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; border: 1px solid rgba(0,0,0,0.05); }
        .comp-item h3 { font-size: 1.8rem; font-weight: 900; margin-bottom: 10px; color: #000; }
        .comp-item p { font-size: 0.85rem; color: #555; font-weight: 700; }
        .comp-label { font-size: 0.6rem; font-weight: 900; color: #888; letter-spacing: 1.5px; margin-bottom: 10px; display: block; }
        .branded { background: #fff; padding: 20px; border-radius: 12px; margin: -20px; border: 2px solid #000; }

        .comparison-section { margin-top: 40px; padding-bottom: 30px; }
        .section-header-row { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 20px; max-width: 1000px; margin-left: auto; margin-right: auto; }
        .side-by-side-label { font-size: 0.6rem; color: #000; font-weight: 900; letter-spacing: 1.5px; border-left: 3px solid #000; padding-left: 10px; margin-bottom: 8px; display: block; }
        .header-text h2 { font-size: 1.8rem; font-weight: 900; margin-bottom: 5px; color: #000; }
        .header-text p { font-size: 0.85rem; color: #333; font-weight: 600; }
        .expand-btn { 
          background: #fff; 
          color: #000; 
          border: 1px solid #000; 
          padding: 5px 12px; 
          border-radius: 6px; 
          font-weight: 800; 
          font-size: 0.65rem; 
          cursor: pointer; 
          transition: all 0.3s;
        }
        .expand-btn:hover { background: #000; color: #fff; }

        .table-container { background: #fff; border: 2px solid #000; overflow-x: auto; max-width: 1000px; margin: 0 auto; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .comp-table { width: 100%; border-collapse: collapse; min-width: 700px; }
        .comp-table th { padding: 12px 8px; text-align: left; border-bottom: 2px solid #000; background: #fff; }
        .feat-col { width: 30%; font-size: 0.65rem; font-weight: 900; color: #000; letter-spacing: 1px; }
        .plan-col { width: 23%; text-align: center; }
        .plan-col strong { display: block; font-size: 0.95rem; font-weight: 900; color: #000; margin-bottom: 1px; }
        .plan-col span { font-size: 0.65rem; color: #666; font-weight: 700; }
        .plan-col.highlighted { background: #fbc819; border-left: 2px solid #000; border-right: 2px solid #000; }
        .plan-col.highlighted strong { color: #000; }
        .plan-col.highlighted span { color: #333; }

        .cat-row td { background: rgba(0,0,0,0.08); color: #000; font-size: 0.6rem; font-weight: 900; padding: 8px 15px; letter-spacing: 1.5px; border-bottom: 1px solid #000; text-align: center; }
        .comp-table td { padding: 8px 15px; border-bottom: 1px solid rgba(0,0,0,0.1); color: #000; font-size: 0.75rem; font-weight: 700; }
        .highlight-cell { background: rgba(0,0,0,0.03); text-align: center; font-weight: 900; color: #000 !important; }
        .comp-table td:not(.feat-col):not(.highlight-cell) { text-align: center; }

        .rounded-24 { border-radius: 24px; }

        .bottom-nav { margin-top: 100px; display: flex; justify-content: center; }
        .back-link-bottom {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #fbc819;
          font-weight: 800;
          text-decoration: none;
          padding: 15px 30px;
          border: 2px solid #fbc819;
          border-radius: 12px;
          font-size: 0.85rem;
          transition: all 0.3s;
        }
        .back-link-bottom:hover { background: #fbc819; color: #000; }

        @media (max-width: 1100px) {
          .pricing-grid, .savings-grid, .comp-row { grid-template-columns: 1fr; }
          .branded { margin: 0; }
        }
      `}</style>
    </div>
  );
}
