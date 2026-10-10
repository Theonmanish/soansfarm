import React from 'react';
import ImageFigure from './ImageFigure';

export default function FullWidthImageSection({
  imageSrc = '',
  imageAlt = '',
  caption = '',
  aspectRatio = '21-9'
}) {
  if (!imageSrc) return null;

  return (
    <div className="border-b border-farm-border py-10">
      <div className="mx-auto w-[90%] max-w-[1400px]">
        <ImageFigure
          src={imageSrc}
          alt={imageAlt}
          aspectRatio={aspectRatio}
          caption={caption}
        />
      </div>
    </div>
  );
}
