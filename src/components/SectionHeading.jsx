import React from 'react';

export default function SectionHeading({ number = '', title = '', subtitle = '', align = 'left' }) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
      {number && <span className="mb-2 block font-editorial text-lg italic text-farm-gold">{number}</span>}
      <h2 className="relative inline-block font-editorial text-[clamp(2.1rem,3.5vw,3.2rem)] leading-[1.18] tracking-[-0.01em] text-farm-cream">{title}</h2>
      {subtitle && <p className="mt-2 font-editorial text-xl italic text-farm-gold">{subtitle}</p>}
    </div>
  );
}
