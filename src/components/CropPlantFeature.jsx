import React from 'react';
import ImageFigure from './ImageFigure';

export default function CropPlantFeature({ name = 'Crop Name', category = 'AGRICULTURAL CROP', description = '', specs = [], imageSrc = '', imageAlt = '', imageCaption = '', reverse = false }) {
  const hasImage = Boolean(imageSrc);
  return (
    <div className="border-b border-farm-border py-14 last:border-0">
      <div className={`grid grid-cols-1 items-center gap-10 lg:gap-12 ${hasImage ? (reverse ? 'lg:grid-cols-[1.6fr_1fr]' : 'lg:grid-cols-[1fr_1.6fr]') : ''}`}>
        {hasImage && <ImageFigure src={imageSrc} alt={imageAlt || name} caption={imageCaption} />}
        <div className={hasImage ? '' : 'max-w-4xl'}>
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-farm-gold">{category}</span>
          <h3 className="mb-4 font-editorial text-[clamp(1.8rem,3vw,2.4rem)] leading-tight text-farm-cream">{name}</h3>
          {description && <p className="mb-7 text-base leading-relaxed text-farm-stone">{description}</p>}
          {specs.length > 0 && <div className="flex flex-col gap-2 border-t border-farm-border pt-5">
            {specs.map((s, idx) => <div key={idx} className="flex justify-between gap-5 text-sm">
              <span className="text-farm-muted">{s.label}:</span><span className="text-farm-cream">{s.value}</span>
            </div>)}
          </div>}
        </div>
      </div>
    </div>
  );
}
