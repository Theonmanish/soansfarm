import React from 'react';
import ImageFigure from './ImageFigure';

export default function ImageGrid({ items = [], columns = 3 }) {
  const gridColumns = { 1: 'grid-cols-1', 2: 'grid-cols-1 md:grid-cols-2', 3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3', 4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' };
  return (
    <div className={`grid gap-12 ${gridColumns[columns] || gridColumns[3]}`}>
      {items.map((item, idx) => (
        <article key={idx} className="flex flex-col border border-farm-border bg-farm-card p-6">
          {item.imageSrc && <ImageFigure src={item.imageSrc} alt={item.imageAlt || item.title} aspectRatio={item.aspect || '4-3'} className="mb-6" />}
          <span className="mb-3 text-[0.65rem] uppercase tracking-[0.18em] text-farm-gold">{item.category || 'BOTANICAL RECORD'}</span>
          <h3 className="mb-3 font-editorial text-xl leading-tight text-farm-cream">{item.title}</h3>
          {item.caption && <p className="text-sm leading-relaxed text-farm-stone">{item.caption}</p>}
        </article>
      ))}
    </div>
  );
}
