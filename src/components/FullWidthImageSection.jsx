import React from 'react';
import PlaceholderImage from './PlaceholderImage';

export default function FullWidthImageSection({
  title = 'Estate Visual Landscape',
  category = 'ARCHIVAL PHOTOGRAPHY',
  caption = 'Panoramic view of cultivated landscape and architectural canopy.',
  aspectRatio = '21-9'
}) {
  return (
    <div className="full-width-image-section">
      <div className="container">
        <PlaceholderImage
          aspectRatio={aspectRatio}
          title={title}
          category={category}
          caption={caption}
        />
      </div>

      <style>{`
        .full-width-image-section {
          padding: 40px 0;
          border-bottom: 1px solid var(--border-subtle);
        }
      `}</style>
    </div>
  );
}
