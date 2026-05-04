import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import LoadingAnimation from "@/components/LoadingAnimation";
import Link from "next/link";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400', '700', '900'] 
});

export const metadata: Metadata = {
  title: "DroneTV - Global B2B Drone & AI Marketplace",
  description: "The leading industrial platform for UAV manufacturing, AI solutions, GIS services, and GNSS technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} initial-loading`}>
        <LoadingAnimation />
        <div className="page-wrapper">
          <Header />
          {children}
          <footer className="footer">
            <div className="layout-container">
              <div className="footer-grid" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr' }}>
                <div className="footer-col">
                  <img src="/logo.png" alt="DroneTV Logo" style={{ width: '200px', height: 'auto', marginBottom: '20px' }} />
                  <p>Leading the digital transformation of the UAV and Geospatial industry through innovation and connectivity.</p>
                </div>
                <div className="footer-col">
                  <h5>Marketplace</h5>
                  <ul>
                    <li><Link href="/marketplace/products">Products</Link></li>
                    <li><Link href="/marketplace/services">Services</Link></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h5>Ecosystem</h5>
                  <ul>
                    <li><Link href="/ecosystem/companies">Companies</Link></li>
                    <li><Link href="/ecosystem/professionals">Professionals</Link></li>
                    <li><Link href="/ecosystem/events">Events</Link></li>
                    <li><Link href="/ecosystem/webinars">Webinars</Link></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h5>Resources</h5>
                  <ul>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/videos">Video Library</Link></li>
                    <li><Link href="/gallery">Gallery</Link></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h5>Company</h5>
                  <ul>
                    <li><Link href="/pricing">Pricing</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Bottom Footer Strip */}
            <div className="footer-bottom-strip">
              <div className="fbs-inner">
                <img src="/logo.png" alt="DroneTV" className="fbs-logo" />
                <div className="fbs-socials">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="fbs-social-btn" aria-label="Facebook">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="fbs-social-btn" aria-label="Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  </a>
                  <a href="https://x.com" target="_blank" rel="noreferrer" className="fbs-social-btn" aria-label="X / Twitter">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="fbs-social-btn" aria-label="YouTube">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fbc819"/></svg>
                  </a>
                </div>
                <div className="fbs-links">
                  <a href="#">Privacy Policy</a>
                  <span>•</span>
                  <a href="#">Terms of Service</a>
                  <span>•</span>
                  <Link href="/contact">Contact</Link>
                </div>
                <p className="fbs-copy">&copy; {new Date().getFullYear()} Drone TV. Built with ♥ for the global drone community.</p>
                <a href="#" className="fbs-scroll-top" aria-label="Scroll to top">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6"/></svg>
                </a>
              </div>
            </div>
          </footer>
        </div>



      </body>
    </html>
  );
}
