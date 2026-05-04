'use client';

import React from 'react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="pricing-page animate-fade">
      <section className="pricing-hero">
        <div className="layout-container">
          <div className="meta-text">THREE ANNUAL PACKAGES • YEAR 2026</div>
          <h1>Designed for <span>every stage</span> of your growth.</h1>
          <p>12-month subscription • 100% advance on confirmation. All prices exclusive of GST.</p>
          <div className="trust-badges">
            <span>✓ Razorpay secure</span>
            <span>✓ UPI • Cards • Netbanking</span>
            <span>✓ GST Invoice in 24h</span>
          </div>
        </div>
      </section>

      <section className="pricing-grid layout-container">
        {/* Reach Pack */}
        <div className="plan-card">
          <div className="plan-badge-top">ESTABLISH PRESENCE</div>
          <h2>Reach Pack</h2>
          <p className="plan-desc">Verified presence on India's drone industry marketplace. Ideal for companies establishing their digital footprint.</p>
          <div className="price">
            <span className="currency">₹</span>
            <strong>25,000</strong>
            <span className="period">/year</span>
          </div>
          <div className="gst-small">+ 18% GST - ₹4,500 - Total ₹29,500</div>

          <button className="select-btn">Select & Pay • Reach Pack</button>

          <div className="features-list">
            <div className="feature-group">
              <h4>MARKETPLACE & WEBSITE</h4>
              <ul>
                <li>✓ Verified company profile on DroneTV.in</li>
                <li>✓ Dedicated single-page website on DroneTV</li>
                <li>✓ Up to 10 product & service listings</li>
                <li>✓ B2B enquiry form active on profile</li>
                <li className="dimmed">— Featured category page placement</li>
                <li className="dimmed">— Homepage feature or priority ranking</li>
              </ul>
            </div>
            <div className="feature-group">
              <h4>LEAD NOTIFICATIONS</h4>
              <ul>
                <li>✓ Notification email on new enquiry</li>
                <li>✓ View full lead details on platform</li>
                <li className="dimmed">— Monthly lead summary report</li>
                <li className="dimmed">— Full buyer contact details delivered</li>
              </ul>
            </div>
            <div className="feature-group">
              <h4>SOCIAL MEDIA</h4>
              <ul>
                <li>✓ 2 promotional posts — one-time at onboarding</li>
                <li>✓ Published on YouTube, LinkedIn, Instagram, Facebook</li>
                <li className="dimmed">— Short reel (30-60 sec) produced</li>
                <li className="dimmed">— Video interview (5-min on YouTube)</li>
              </ul>
            </div>
          </div>
          <div className="show-less">Show less</div>
        </div>

        {/* Scale Pack */}
        <div className="plan-card featured">
          <div className="best-value-badge">BEST VALUE</div>
          <div className="plan-badge-top">BEST VALUE</div>
          <h2>Scale Pack</h2>
          <p className="plan-desc">Full-year brand presence with video interviews, social media content, and magazine advertising. Best value for established drone companies.</p>
          <div className="price">
            <span className="currency">₹</span>
            <strong>75,000</strong>
            <span className="period">/year</span>
          </div>
          <div className="gst-small">+ 18% GST - ₹13,500 - Total ₹88,500</div>

          <button className="select-btn">Select & Pay • Scale Pack</button>

          <div className="complimentary-box">
            <span>🎁 COMPLIMENTARY</span>
            <strong>Drone Simulator Zone Plan</strong>
            <small>Worth ₹7,500/year - Special offer - Limited time</small>
          </div>

          <div className="features-list">
            <div className="feature-group">
              <h4>MARKETPLACE & WEBSITE</h4>
              <ul>
                <li>✓ Featured profile with Featured Supplier badge</li>
                <li>✓ Enhanced single-page website — gallery, services, lead form</li>
                <li>✓ Up to 25 product & service listings</li>
                <li>✓ Featured category placement — 3 months during the year</li>
                <li className="dimmed">— Homepage feature or priority search ranking</li>
              </ul>
            </div>
            <div className="feature-group">
              <h4>LEAD NOTIFICATIONS</h4>
              <ul>
                <li>✓ Notification email on new enquiry</li>
                <li>✓ View full lead details on platform</li>
                <li>✓ Monthly lead summary report — enquiry count & profile views</li>
                <li className="dimmed">— Full buyer contact details delivered directly</li>
              </ul>
            </div>
            <div className="feature-group">
              <h4>SOCIAL MEDIA & VIDEO</h4>
              <ul>
                <li>✓ 6 promotional posts over 12 months (bi-monthly)</li>
                <li>✓ 2 short reels (30-60 sec) produced & published</li>
                <li>✓ 1 video interview (5-min) — YouTube + platform page</li>
                <li>✓ Interview promoted via dedicated social post on publish week</li>
              </ul>
            </div>
          </div>
          <div className="show-less">Show less</div>
        </div>

        {/* Brand Pack */}
        <div className="plan-card">
          <div className="plan-badge-top">INDUSTRY AUTHORITY</div>
          <h2>Brand Pack</h2>
          <p className="plan-desc">Complete industry authority — media, marketplace, magazine, expo stall branding, and full buyer data. For companies that lead their category.</p>
          <div className="price">
            <span className="currency">₹</span>
            <strong>1,50,000</strong>
            <span className="period">/year</span>
          </div>
          <div className="gst-small">+ 18% GST - ₹27,000 - Total ₹1,77,000</div>

          <button className="select-btn">Select & Pay • Brand Pack</button>

          <div className="complimentary-box">
            <span>🎁 COMPLIMENTARY</span>
            <strong>Drone Simulator Pro Plan</strong>
            <small>Worth ₹21,500/year - Special offer - Limited time</small>
          </div>

          <div className="features-list">
            <div className="feature-group">
              <h4>MARKETPLACE & WEBSITE</h4>
              <ul>
                <li>✓ Premium Profile with Industry Partner badge</li>
                <li>✓ Full single-page website — premium layout + custom banner</li>
                <li>✓ Unlimited product & service listings</li>
                <li>✓ Homepage & category feature — 12 months, quarterly refresh</li>
                <li>✓ Priority ranking in DroneTV.in search results</li>
              </ul>
            </div>
            <div className="feature-group">
              <h4>LEAD NOTIFICATIONS</h4>
              <ul>
                <li>✓ Notification email on new enquiry</li>
                <li>✓ View full lead details on platform</li>
                <li>✓ Monthly analytics — enquiries, views, listing performance</li>
                <li>✓ Full buyer contact details on platform — name, company, email, phone</li>
              </ul>
            </div>
            <div className="feature-group">
              <h4>SOCIAL MEDIA & VIDEO</h4>
              <ul>
                <li>✓ 12 promotional posts — one per month around milestones</li>
                <li>✓ 4 short reels (30-60 sec) produced & published</li>
                <li>✓ 2 video interviews (5-min) — YouTube + embedded on platform</li>
              </ul>
            </div>
          </div>
          <div className="show-less">Show less</div>
        </div>
      </section>

      <section className="comparison-section layout-container">
        <div className="meta-text">SIDE-BY-SIDE</div>
        <h2>Package comparison at a glance</h2>
        <p>Every benefit across Reach, Scale, and Brand — so you can pick on fit, not guesswork.</p>

        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="feature-col">FEATURE</th>
                <th>Reach Pack <small>₹25,000/yr + GST</small></th>
                <th className="highlight-col">Scale Pack <small>₹75,000/yr + GST</small></th>
                <th>Brand Pack <small>₹1,50,000/yr + GST</small></th>
              </tr>
            </thead>
            <tbody>
              <tr className="category-row"><td colSpan={4}>MARKETPLACE & WEBSITE</td></tr>
              <tr>
                <td className="feature-label">Company Profile</td>
                <td>Verified</td>
                <td className="highlight-cell">Featured</td>
                <td>Premium</td>
              </tr>
              <tr>
                <td className="feature-label">Single Page Website</td>
                <td>Basic</td>
                <td className="highlight-cell">Enhanced</td>
                <td>Full Premium</td>
              </tr>
              <tr>
                <td className="feature-label">Product / Service Listings</td>
                <td>Up to 10</td>
                <td className="highlight-cell">Up to 25</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td className="feature-label">B2B Enquiry Form</td>
                <td>✓</td>
                <td className="highlight-cell">✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td className="feature-label">Featured Category Placement</td>
                <td>—</td>
                <td className="highlight-cell">3 months</td>
                <td>12 mo • quarterly refresh</td>
              </tr>
              <tr>
                <td className="feature-label">Homepage Feature</td>
                <td>—</td>
                <td>—</td>
                <td className="highlight-cell">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="final-badges layout-container">
        <span>✓ Profile live in 7 business days</span>
        <span>✓ Up to 2 revision rounds</span>
        <span>✓ Content approval before publish</span>
        <span>✓ Perpetual usage rights</span>
      </div>

      <div className="bottom-nav">
        <Link href="/" className="back-link-bottom">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Return to Home Portal
        </Link>
      </div>

      <style jsx>{`
        .pricing-page { background: #000; color: #fff; min-height: 100vh; padding-bottom: 100px; }
        
        .pricing-hero { 
          padding: 140px 0 80px; 
          text-align: left;
          background: linear-gradient(180deg, #fffbeb 0%, #ffffff 100%) !important; /* Branded yellow-white mix */
          color: #1e293b; /* Dark text for light background */
        }
        .meta-text { font-size: 0.75rem; color: #d97706; font-weight: 800; letter-spacing: 3px; margin-bottom: 25px; }
        h1 { font-size: 3.5rem; font-weight: 900; margin-bottom: 20px; letter-spacing: -2px; line-height: 1.1; color: #0f172a; }
        h1 span { 
          color: #fbc819; 
          font-style: italic;
          background: linear-gradient(to right, #fbc819, #d97706);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .pricing-hero p { font-size: 1.1rem; color: #475569; margin-bottom: 40px; max-width: 700px; }
        .trust-badges { display: flex; gap: 40px; color: #d97706; font-size: 0.85rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; }

        .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; margin-bottom: 120px; }
        
        .plan-card { 
          background: rgba(10, 10, 10, 0.8);
          border: 1px solid #1a1a1a; 
          padding: 50px 40px; 
          position: relative; 
          display: flex; 
          flex-direction: column;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .plan-card:hover {
          border-color: #333;
          transform: translateY(-10px);
          box-shadow: 0 40px 80px rgba(0,0,0,0.8);
        }

        .plan-card.featured { 
          border-color: #fbc819; 
          background: rgba(15, 15, 15, 0.9);
          transform: scale(1.08); 
          z-index: 10; 
          box-shadow: 0 0 50px rgba(251, 200, 25, 0.15);
        }

        .plan-card.featured:hover {
          transform: scale(1.1) translateY(-10px);
          box-shadow: 0 50px 100px rgba(0,0,0,0.9), 0 0 30px rgba(251, 200, 25, 0.2);
        }
        
        .plan-badge-top { font-size: 0.65rem; font-weight: 900; color: #fbc819; letter-spacing: 2px; margin-bottom: 20px; text-transform: uppercase; }
        .best-value-badge { position: absolute; top: -18px; left: 50%; transform: translateX(-50%); background: #fbc819; color: #000; padding: 6px 20px; font-weight: 900; font-size: 0.75rem; border-radius: 40px; box-shadow: 0 10px 20px rgba(251, 200, 25, 0.3); }
        
        h2 { font-size: 2.2rem; font-weight: 900; margin-bottom: 15px; color: #fff; letter-spacing: -0.5px; }
        .plan-desc { font-size: 0.85rem; color: #aaa; line-height: 1.5; margin-bottom: 30px; height: 70px; }
        
        .price { display: flex; align-items: baseline; gap: 6px; margin-bottom: 10px; }
        .currency { font-size: 1.4rem; color: #fbc819; font-weight: 900; }
        .price strong { font-size: 2.8rem; color: #fff; font-weight: 900; }
        .period { font-size: 1.1rem; color: #888; }
        .gst-small { font-size: 0.8rem; color: #666; margin-bottom: 50px; font-weight: 700; }
        
        .select-btn { 
          background: #fbc819; 
          color: #000; 
          border: none; 
          padding: 22px; 
          font-weight: 900; 
          font-size: 0.95rem; 
          text-transform: uppercase; 
          margin-bottom: 50px; 
          transition: all 0.3s ease; 
          width: 100%; 
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .select-btn::after {
          content: '';
          position: absolute;
          top: -50%; left: -50%; width: 200%; height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.4), transparent);
          transform: rotate(45deg);
          transition: 0.5s;
          left: -100%;
        }

        .select-btn:hover::after {
          left: 100%;
        }

        .select-btn:hover { background: #fff; transform: scale(1.02); }
        
        .complimentary-box { 
          background: linear-gradient(to bottom right, rgba(251, 200, 25, 0.08), transparent);
          border: 1px dashed rgba(251, 200, 25, 0.4); 
          padding: 25px; 
          margin-bottom: 50px; 
        }
        .complimentary-box span { display: block; font-size: 0.7rem; color: #fbc819; font-weight: 900; margin-bottom: 8px; }
        .complimentary-box strong { display: block; color: #fff; font-size: 1.1rem; margin-bottom: 5px; font-weight: 800; }
        .complimentary-box small { font-size: 0.75rem; color: #888; }

        .feature-group { margin-bottom: 40px; }
        .feature-group h4 { font-size: 0.75rem; color: #666; font-weight: 900; letter-spacing: 2px; margin-bottom: 20px; border-bottom: 1px solid #1a1a1a; padding-bottom: 10px; }
        .features-list ul { list-style: none; display: flex; flex-direction: column; gap: 15px; padding: 0; }
        .features-list li { font-size: 0.9rem; color: #ccc; font-weight: 600; display: flex; gap: 10px; }
        .features-list li.dimmed { color: #444; }
        
        .show-less { font-size: 0.85rem; color: #fbc819; font-weight: 900; margin-top: auto; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; }

        .comparison-section { padding-top: 100px; border-top: 1px solid #111; margin-bottom: 80px; }
        .comparison-section h2 { font-size: 2.8rem; margin-bottom: 20px; letter-spacing: -1px; }
        .comparison-section p { font-size: 1.1rem; color: #888; margin-bottom: 60px; }
        
        .comparison-table-wrapper { 
          background: rgba(10, 10, 10, 0.5); 
          border: 1px solid #1a1a1a; 
          padding: 30px; 
          overflow-x: auto;
          backdrop-filter: blur(10px);
        }
        .comparison-table { width: 100%; border-collapse: collapse; min-width: 900px; }
        .comparison-table th { padding: 30px 20px; text-align: left; font-size: 1.2rem; font-weight: 900; border-bottom: 2px solid #1a1a1a; }
        .comparison-table th small { display: block; font-size: 0.9rem; color: #888; font-weight: 800; margin-top: 8px; }
        .comparison-table td { padding: 25px; border-bottom: 1px solid #111; font-size: 1rem; color: #ccc; }
        .category-row td { background: #0a0a0a; font-size: 0.75rem; font-weight: 900; color: #fbc819; letter-spacing: 2px; padding: 15px 25px; border-bottom: 1px solid #1a1a1a; }
        .feature-label { font-weight: 800; color: #ccc; }
        .highlight-col { color: #fbc819; background: rgba(251, 200, 25, 0.01); }
        .highlight-cell { color: #fbc819; font-weight: 900; font-size: 1.1rem; }

        .final-badges { display: flex; justify-content: space-between; border-top: 1px solid #111; padding: 60px 0; color: #888; font-size: 0.9rem; font-weight: 800; gap: 30px; flex-wrap: wrap; text-transform: uppercase; letter-spacing: 1px; }

        .bottom-nav { margin-top: 100px; padding-top: 60px; border-top: 1px solid #111; display: flex; justify-content: center; }
        .back-link-bottom { 
          display: flex; align-items: center; gap: 15px; color: #000; 
          background: #fbc819; padding: 20px 50px; font-weight: 900; 
          text-transform: uppercase; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: 1px;
        }
        .back-link-bottom:hover { 
          background: #fff; 
          transform: translateY(-8px); 
          box-shadow: 0 20px 50px rgba(251,200,25,0.4); 
        }

        @media (max-width: 1100px) {
          .pricing-grid { grid-template-columns: 1fr; gap: 60px; }
          .plan-card.featured { transform: none; }
          .plan-card.featured:hover { transform: translateY(-10px); }
          h1 { font-size: 3.5rem; letter-spacing: -1px; }
        }
      `}</style>
    </div>
  );
}
