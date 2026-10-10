import React from 'react';
import { Link } from 'react-router-dom';

const currentYear = new Date().getFullYear();
const footerLink = 'text-[0.9rem] text-farm-stone transition-colors hover:text-farm-cream';
const heading = 'mb-5 font-body text-xs uppercase tracking-[0.2em] text-farm-gold';

export default function GlobalFooter() {
  return (
    <footer className="relative border-t border-farm-border bg-farm-surface px-0 pb-10 pt-20">
      <div className="mx-auto w-[90%] max-w-[1400px]">
        <div className="grid grid-cols-2 gap-8 border-b border-farm-border pb-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="mb-1 inline-block font-editorial text-[1.8rem] tracking-[0.12em] text-farm-cream">SOANS FARM</Link>
            <p className="mb-5 text-xs uppercase tracking-[0.15em] text-farm-gold">Agricultural Estate & Botanical Collection</p>
            <p className="text-[0.9rem] leading-relaxed text-farm-stone">Established agricultural Farm.</p>
          </div>
          <div>
            <h4 className={heading}>THE FARM</h4>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              <li><Link to="/" className={footerLink}>Home</Link></li>
              <li><Link to="/the-farm" className={footerLink}>The Farm & Heritage</Link></li>
              <li><Link to="/cultivation" className={footerLink}>Agricultural Cultivation</Link></li>
              <li><Link to="/botanical-garden" className={footerLink}>Botanical Collection</Link></li>
            </ul>
          </div>
          <div>
            <h4 className={heading}>DISCOVER</h4>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              <li><Link to="/experiences" className={footerLink}>Farm Experiences</Link></li>
              <li><Link to="/energy-healing" className={footerLink}>Energy Healing</Link></li>
              <li><Link to="/products" className={footerLink}>Farm Products</Link></li>
              <li><Link to="/#contact" className={footerLink}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className={heading}>LOCATION CONTEXT</h4>
            <p className="mb-6 text-[0.9rem] leading-relaxed text-farm-stone">Moodbidri, Dakshina Kannada District<br />Coastal Karnataka, India</p>
          </div>
        </div>
        <div className="flex items-center justify-center pt-8 text-center text-xs tracking-[0.12em] text-farm-muted">
          <p>© {currentYear} SOANS FARM. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
