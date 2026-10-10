import React from 'react';
import ImageFigure from './ImageFigure';

export default function JournalPreview({ category = 'ESTATE ARCHIVE', date = 'OCTOBER 2026', title = '', excerpt = '', imageSrc = '', imageAlt = '' }) {
  return (
    <article className="flex h-full flex-col border-b border-farm-border pb-8">
      <ImageFigure src={imageSrc} alt={imageAlt || title} />
      <div className="flex flex-grow flex-col pt-6">
        <div className="mb-3 flex justify-between gap-3 text-[0.65rem] uppercase tracking-[0.15em]">
          <span className="text-farm-gold">{category}</span><span className="text-farm-muted">{date}</span>
        </div>
        <h3 className="mb-3 font-editorial text-2xl leading-tight text-farm-cream">{title}</h3>
        <p className="mb-6 flex-grow text-[0.95rem] font-light leading-[1.7] text-farm-stone">{excerpt}</p>
        <span className="inline-flex items-center gap-2 self-start border-b border-farm-border-gold pb-1 font-body text-[0.85rem] uppercase tracking-[0.15em] text-farm-gold transition-colors hover:border-farm-cream hover:text-farm-cream">READ ENTRY</span>
      </div>
    </article>
  );
}
