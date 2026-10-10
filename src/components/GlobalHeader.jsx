import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ExternalLink, Menu, X } from 'lucide-react';

export default function GlobalHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const isCurrentActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path.startsWith('/the-farm') && location.pathname === '/the-farm') return true;
    return false;
  };

  return (
    <header className="floating-header-wrapper">
      <nav className="floating-navbar">
        {/* Brand Identity */}
        <Link to="/" className="floating-brand" onClick={() => setIsMobileOpen(false)}>
          <span className="brand-name">SOANS FARM</span>
        </Link>

        <div className="floating-nav-divider"></div>

        {/* Primary Desktop Nav Links */}
        <ul className="floating-nav-list desktop-only">
          <li>
            <Link to="/" className={`floating-nav-link ${isCurrentActive('/') ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/the-farm#history" className="floating-nav-link">
              History
            </Link>
          </li>
          <li>
            <Link to="/the-farm#philosophy" className="floating-nav-link">
              Philosophy
            </Link>
          </li>
          <li>
            <Link to="/#contact" className={`floating-nav-link ${location.pathname === '/' && location.hash === '#contact' ? 'active' : ''}`}>
              Contact
            </Link>
          </li>
          
          <li>
            <a
              href="https://tour.soansfarm.in"
              target="_blank"
              rel="noopener noreferrer"
              className="floating-nav-link "
            >
              <span>Catalogue</span>
              
            </a>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="floating-mobile-toggle mobile-only"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Navigation"
        >
          {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Floating Mobile Drawer */}
      {isMobileOpen && (
        <div className="floating-mobile-drawer">
          <ul className="mobile-nav-items">
            <li>
              <Link to="/" onClick={() => setIsMobileOpen(false)} className={isCurrentActive('/') ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/the-farm#history" onClick={() => setIsMobileOpen(false)}>
                History
              </Link>
            </li>
            <li>
              <Link to="/the-farm#philosophy" onClick={() => setIsMobileOpen(false)}>
                Philosophy
              </Link>
            </li>
            <li>
              <Link to="/#contact" onClick={() => setIsMobileOpen(false)} className={location.pathname === '/' && location.hash === '#contact' ? 'active' : ''}>
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://tour.soansfarm.in"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className="external-catalogue-link"
              >
                <span>Catalogue</span>
                <ExternalLink size={14} />
              </a>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        .floating-header-wrapper {
          position: fixed;
          top: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          width: auto;
          max-width: 90vw;
          pointer-events: none;
        }

        .floating-navbar {
          pointer-events: auto;
          display: inline-flex;
          align-items: center;
          gap: 1.5rem;
          padding: 0.65rem 1.6rem;
          background: rgba(11, 11, 10, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(234, 228, 216, 0.12);
          border-radius: 9999px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
          transition: all 0.3s ease;
        }

        .floating-brand {
          display: flex;
          align-items: center;
        }

        .brand-name {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          letter-spacing: 0.15em;
          color: var(--text-primary);
          font-weight: 500;
          white-space: nowrap;
        }

        .floating-nav-divider {
          width: 1px;
          height: 16px;
          background-color: rgba(234, 228, 216, 0.15);
        }

        .floating-nav-list {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 1.5rem;
        }

        .floating-nav-link {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-secondary);
          transition: color 0.25s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          white-space: nowrap;
        }

        .floating-nav-link:hover, .floating-nav-link.active {
          color: var(--text-primary);
        }

        .external-catalogue-link {
          color: var(--text-gold);
        }

        .external-catalogue-link:hover {
          color: var(--text-primary);
        }

        .ext-icon {
          opacity: 0.8;
        }

        .floating-mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.2rem;
        }

        .desktop-only {
          display: flex;
        }

        .mobile-only {
          display: none;
        }

        .floating-mobile-drawer {
          pointer-events: auto;
          position: absolute;
          top: calc(100% + 0.75rem);
          left: 50%;
          transform: translateX(-50%);
          width: 240px;
          background: rgba(11, 11, 10, 0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(234, 228, 216, 0.15);
          border-radius: 20px;
          padding: 1.25rem;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.6);
        }

        .mobile-nav-items {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: center;
        }

        .mobile-nav-items a {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
        }

        .mobile-nav-items a.active, .mobile-nav-items a:hover {
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }
          .mobile-only {
            display: block;
          }
          .floating-nav-divider {
            display: none;
          }
          .floating-navbar {
            padding: 0.5rem 1.2rem;
            gap: 1rem;
          }
        }
      `}</style>
    </header>
  );
}
