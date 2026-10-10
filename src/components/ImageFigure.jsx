import React from 'react';

const aspectRatios = {
  '16-9': 'aspect-video',
  '4-3': 'aspect-[4/3]',
  '3-4': 'aspect-[3/4]',
  '21-9': 'aspect-[21/9]',
  '1-1': 'aspect-square',
};

export default function ImageFigure({ src, alt, caption = '', aspectRatio = '16-9', className = '' }) {
  if (!src) return null;

  return (
    <figure className={`w-full ${className}`}>
      <div className={`w-full overflow-hidden bg-farm-card ${aspectRatios[aspectRatio] || 'aspect-video'}`}>
        <img src={src} alt={alt || ''} loading="lazy" className="h-full w-full object-cover" />
      </div>
      {caption && <figcaption className="mt-3 text-xs italic text-farm-muted">{caption}</figcaption>}
    </figure>
  );
}
