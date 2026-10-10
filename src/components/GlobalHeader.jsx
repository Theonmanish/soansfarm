import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ExternalLink, Menu, X } from 'lucide-react';

const desktopLink = 'inline-flex items-center gap-1 whitespace-nowrap font-body text-[0.8rem] uppercase tracking-[0.12em] text-farm-stone transition-colors hover:text-farm-cream';
const mobileLink = 'inline-flex items-center justify-center gap-1 whitespace-nowrap font-body text-[0.85rem] uppercase tracking-[0.15em] text-farm-stone transition-colors hover:text-farm-cream';

export default function GlobalHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const closeMenu = () => setIsMobileOpen(false);
  const activeClass = 'text-farm-cream';

  return (
    <header className="pointer-events-none fixed left-1/2 top-6 z-[1000] w-auto max-w-[90vw] -translate-x-1/2">
      <nav className="pointer-events-auto inline-flex items-center gap-4 rounded-full border border-white/10 bg-[rgba(11,11,10,0.75)] px-5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl transition-all md:gap-6 md:px-6">

        <Link to="/" className="flex items-center gap-2.5" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt=""
            aria-hidden="true"
            className="h-9 w-9 rounded-full bg-white p-0.5 object-contain"
          />
          <span className="whitespace-nowrap font-editorial text-[1.15rem] font-medium tracking-[0.15em] text-farm-cream">
            SOANS FARM
          </span>
        </Link>

        <div className="hidden h-4 w-px bg-white/15 md:block" />

        <ul className="hidden list-none items-center gap-6 md:flex">
          <li><Link to="/" className={`${desktopLink} ${isHome ? activeClass : ''}`}>Home</Link></li>
          <li><Link to="/the-farm#history" className={desktopLink}>History</Link></li>
          <li><Link to="/the-farm#philosophy" className={desktopLink}>Philosophy</Link></li>
          <li><Link to="/#contact" className={`${desktopLink} ${isHome && location.hash === '#contact' ? activeClass : ''}`}>Contact</Link></li>
          <li><a href="https://tour.soansfarm.in" target="_blank" rel="noopener noreferrer" className={desktopLink}>Catalogue</a></li>
        </ul>

        <button
          className="block cursor-pointer border-0 bg-transparent p-1 text-farm-cream md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {isMobileOpen && (
        <div className="pointer-events-auto absolute left-1/2 top-[calc(100%+0.75rem)] w-60 -translate-x-1/2 rounded-[20px] border border-white/15 bg-[rgba(11,11,10,0.92)] p-5 shadow-[0_12px_36px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
          <ul className="m-0 flex list-none flex-col gap-4 p-0 text-center">
            <li><Link to="/" onClick={closeMenu} className={`${mobileLink} ${isHome ? activeClass : ''}`}>Home</Link></li>
            <li><Link to="/the-farm#history" onClick={closeMenu} className={mobileLink}>History</Link></li>
            <li><Link to="/the-farm#philosophy" onClick={closeMenu} className={mobileLink}>Philosophy</Link></li>
            <li><Link to="/#contact" onClick={closeMenu} className={`${mobileLink} ${isHome && location.hash === '#contact' ? activeClass : ''}`}>Contact</Link></li>
            <li>
              <a href="https://tour.soansfarm.in" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className={`${mobileLink} text-farm-gold`}>
                <span>Catalogue</span><ExternalLink size={14} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
