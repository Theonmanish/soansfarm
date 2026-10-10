
import React from 'react';
import { Link } from 'react-router-dom';

const currentYear = new Date().getFullYear();

export default function GlobalFooter() {
  return (
    <footer className="global-footer">
      <div className="container">
        <div className="footer-top">
          {/* Column 1: Identity */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-brand-title">
              SOANS FARM
            </Link>

            <p className="footer-brand-tagline">
              Agricultural Estate & Botanical Collection
            </p>

            <p className="footer-location-note">
              Established agricultural Farm.
            </p>
          </div>

          {/* Column 2: Farm */}
          <div className="footer-col">
            <h4 className="footer-heading">THE FARM</h4>
            <ul className="footer-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/the-farm">The Farm & Heritage</Link></li>
              <li><Link to="/the-land">The Land & Environment</Link></li>
              <li><Link to="/cultivation">Agricultural Cultivation</Link></li>
              <li><Link to="/botanical-garden">Botanical Collection</Link></li>
            </ul>
          </div>

          {/* Column 3: Discovery */}
          <div className="footer-col">
            <h4 className="footer-heading">DISCOVER</h4>
            <ul className="footer-nav">
              <li><Link to="/experiences">Farm Experiences</Link></li>
              <li><Link to="/explore">Explore Farm</Link></li>
              <li><Link to="/energy-healing">Energy & Reflection</Link></li>
              <li><Link to="/products">Farm Products</Link></li>
              <li><Link to="/journal">Journal</Link></li>
              <li><Link to="/visit">Visiting Information</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Location */}
          <div className="footer-col">
            <h4 className="footer-heading">LOCATION CONTEXT</h4>
            <p className="footer-meta-text">
              Moodbidri, Dakshina Kannada District
              <br />
              Coastal Karnataka, India
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© {currentYear} SOANS FARM. ALL RIGHTS RESERVED.</p>
         
        </div>
      </div>
      <style>{`
        .global-footer {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--border-subtle);
          padding: 80px 0 40px 0;
          position: relative;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          padding-bottom: 60px;
          border-bottom: 1px solid var(--border-subtle);
          gap: 3rem;
        }

        .footer-brand-title {
          display: inline-block;
          font-family: var(--font-serif);
          font-size: 1.8rem;
          letter-spacing: 0.12em;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .footer-brand-tagline {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-gold);
          margin-bottom: 1.25rem;
        }

        .footer-location-note {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .footer-heading {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--text-gold);
          margin-bottom: 1.25rem;
        }

        .footer-nav {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-nav a {
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }

        .footer-nav a:hover {
          color: var(--text-primary);
        }

        .footer-meta-text {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .footer-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          border: 1px solid var(--border-subtle);
          padding: 0.4rem 0.8rem;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--text-gold);
        }

        .footer-bottom {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 30px;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          color: var(--text-muted);
        }

        .footer-archival-note {
          font-family: var(--font-sans);
          font-size: 0.7rem;
        }

        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .brand-col {
            grid-column: 1 / -1;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
