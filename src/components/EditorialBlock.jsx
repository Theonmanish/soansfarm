import React from 'react';
import ImageFigure from './ImageFigure';

export default function EditorialBlock({ number = '', title = '', lead = '', body = [], imageSrc = '', imageAlt = '', imageCaption = '', imageAspect = '4-3', reverse = false }) {
  const hasImage = Boolean(imageSrc);
  return (
    <div className="mb-16 last:mb-0">
      <div className={`grid grid-cols-1 items-center gap-12 ${hasImage ? (reverse ? 'lg:grid-cols-[1.6fr_1fr]' : 'lg:grid-cols-[1fr_1.6fr]') : ''}`}>
        <div className={hasImage ? '' : 'max-w-4xl'}>
          {number && <span className="mb-2 block font-editorial text-lg italic text-farm-gold">{number}</span>}
          {title && <h3 className="mb-4 font-editorial text-[clamp(1.5rem,2.2vw,2.2rem)] leading-tight text-farm-cream">{title}</h3>}
          {lead && <p className="mb-5 text-[clamp(1.15rem,1.8vw,1.35rem)] font-light leading-relaxed text-farm-cream">{lead}</p>}
          {body.map((para, idx) => <p key={idx} className="mb-4 text-[1.05rem] font-light leading-[1.7] text-farm-stone">{para}</p>)}
        </div>
        {hasImage && <ImageFigure src={imageSrc} alt={imageAlt || title} aspectRatio={imageAspect} caption={imageCaption} />}
      </div>
    </div>
  );
}
