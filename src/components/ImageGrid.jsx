import React from 'react';
import PlaceholderImage from './PlaceholderImage';

export default function ImageGrid({ items = [], columns = 3 }) {
  return (
    <div className={`image-grid grid-${columns} editorial-grid`}>
      {items.map((item, idx) => (
        <div key={idx} className="grid-image-item">
          <PlaceholderImage
            aspectRatio={item.aspect || '4-3'}
            title={item.title}
            category={item.category || 'BOTANICAL RECORD'}
            caption={item.caption}
          />
        </div>
      ))}
    </div>
  );
}
