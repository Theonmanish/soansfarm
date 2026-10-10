import React from 'react';
import ImageFigure from './ImageFigure';

export default function ExperienceFeature({ num = '01', title = 'Experience Title', subtitle = 'Estate Element', description = '', highlights = [], imageSrc = '', imageAlt = '' }) {
  const hasImage = Boolean(imageSrc);
  return (
    <div className="border-b border-farm-border py-12 last:border-0">
      <div className={`grid grid-cols-1 items-center gap-12 ${hasImage ? 'lg:grid-cols-[1.6fr_1fr]' : ''}`}>
        {hasImage && <ImageFigure src={imageSrc} alt={imageAlt || title} />}
        <div className={hasImage ? '' : 'max-w-4xl'}>
          <span className="mb-2 block font-editorial text-lg italic text-farm-gold">{num}. {subtitle.toUpperCase()}</span>
          <h3 className="mb-4 font-editorial text-[2rem] leading-tight text-farm-cream">{title}</h3>
          {description && <p className="mb-6 text-[1.05rem] font-light leading-[1.7] text-farm-stone">{description}</p>}
          {highlights.length > 0 && <div className="border-t border-farm-border pt-4">
            <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.2em] text-farm-gold">ESTATE ELEMENTS</span>
            <ul className="m-0 flex list-none flex-col gap-2 p-0 text-sm text-farm-muted">
              {highlights.map((item, idx) => <li key={idx}>▪ {item}</li>)}
            </ul>
          </div>}
        </div>
      </div>
    </div>
  );
}
