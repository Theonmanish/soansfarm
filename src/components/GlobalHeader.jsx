
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ExternalLink, Menu, X } from 'lucide-react';

const desktopLink =
  'inline-flex items-center gap-1 whitespace-nowrap font-body text-[0.8rem] uppercase tracking-[0.12em] text-farm-stone transition-colors hover:text-farm-cream';

const mobileLink =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-body text-[0.85rem] uppercase tracking-[0.12em] text-farm-stone transition-colors hover:text-farm-cream';

export default function GlobalHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const closeMenu = () => setIsMobileOpen(false);
  const activeClass = 'text-farm-cream';

  return (
    <header className="pointer-events-none fixed left-1/2 top-4 z-[1000] w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 md:top-6 md:max-w-[90vw]">
      <nav className="pointer-events-auto flex w-max max-w-full items-center justify-between gap-3 rounded-full border border-white/10 bg-[rgba(11,11,10,0.85)] px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl transition-all sm:gap-4 sm:px-4 md:gap-6 md:px-6 md:py-2.5">

        {/* Logo and brand */}
        <Link
          to="/"
          className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-2.5"
          onClick={closeMenu}
        >
          <img
            src="/logo.png"
            alt=""
            aria-hidden="true"
            className="h-8 w-8 shrink-0 rounded-full bg-white p-0.5 object-contain sm:h-9 sm:w-9"
          />

          <span className="whitespace-nowrap font-editorial text-[0.95rem] font-medium tracking-[0.1em] text-farm-cream sm:text-[1.05rem] sm:tracking-[0.12em] md:text-[1.15rem] md:tracking-[0.15em]">
            SOANS FARM
          </span>
        </Link>

        <div className="hidden h-4 w-px shrink-0 bg-white/15 md:block" />

        {/* Desktop navigation */}
        <ul className="hidden list-none items-center gap-6 md:flex">
          <li>
            <Link to="/" className={`${desktopLink} ${isHome ? activeClass : ''}`}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/the-farm#history" className={desktopLink}>
              History
            </Link>
          </li>

          <li>
            <Link to="/the-farm#philosophy" className={desktopLink}>
              Philosophy
            </Link>
          </li>

          <li>
            <Link
              to="/#contact"
              className={`${desktopLink} ${
                isHome && location.hash === '#contact' ? activeClass : ''
              }`}
            >
              Contact
            </Link>
          </li>

          <li>
            <a
              href="https://tour.soansfarm.in"
              target="_blank"
              rel="noopener noreferrer"
              className={desktopLink}
            >
              Catalogue
            </a>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 text-farm-cream transition-colors hover:bg-white/10 md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {isMobileOpen && (
        <div className="pointer-events-auto absolute left-1/2 top-[calc(100%+0.75rem)] w-60 -translate-x-1/2 rounded-[20px] border border-white/15 bg-[rgba(11,11,10,0.96)] p-5 shadow-[0_12px_36px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
          <ul className="m-0 flex list-none flex-col items-center gap-5 p-0 text-center">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className={`${mobileLink} ${isHome ? activeClass : ''}`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link to="/the-farm#history" onClick={closeMenu} className={mobileLink}>
                History
              </Link>
            </li>

            <li>
              <Link to="/the-farm#philosophy" onClick={closeMenu} className={mobileLink}>
                Philosophy
              </Link>
            </li>

            <li>
              <Link
                to="/#contact"
                onClick={closeMenu}
                className={`${mobileLink} ${
                  isHome && location.hash === '#contact' ? activeClass : ''
                }`}
              >
                Contact
              </Link>
            </li>

            <li>
              <a
                href="https://tour.soansfarm.in"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className={`${mobileLink} text-farm-gold`}
              >
                <span>Catalogue</span>
                <ExternalLink size={14} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
