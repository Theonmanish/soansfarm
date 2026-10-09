import React from 'react';
import PlaceholderImage from './PlaceholderImage';

export default function CropPlantFeature({
  name = 'Crop Name',
  category = 'AGRICULTURAL CROP',
  description = '',
  specs = [],
  imageTitle = '',
  imageCaption = '',
  reverse = false
}) {
  return (
    <div className={`crop-editorial-spread ${reverse ? 'reverse' : ''}`}>
      <div className="editorial-grid grid-asymmetric-left">
        <div className="crop-editorial-visual">
          <PlaceholderImage
            aspectRatio="16-9"
            title={imageTitle || name}
            category={category}
            caption={imageCaption}
          />
        </div>
        <div className="crop-editorial-content">
          <span className="crop-category-tag">{category}</span>
          <h3 className="crop-name">{name}</h3>
          {description && <p className="crop-description">{description}</p>}

          {specs.length > 0 && (
            <div className="crop-specs">
              {specs.map((s, idx) => (
                <div key={idx} className="crop-spec-item">
                  <span className="spec-label">{s.label}:</span>
                  <span className="spec-val">{s.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .crop-editorial-spread {
          padding: 3.5rem 0;
          border-bottom: 1px solid var(--border-subtle);
        }

        .crop-editorial-spread:last-child {
          border-bottom: none;
        }

        .crop-editorial-spread.reverse .editorial-grid {
          grid-template-columns: 1.6fr 1fr;
        }

        .crop-category-tag {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-gold);
          margin-bottom: 0.5rem;
          display: block;
        }

        .crop-name {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .crop-description {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 1.75rem;
          line-height: 1.7;
        }

        .crop-specs {
          border-top: 1px solid var(--border-subtle);
          padding-top: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .crop-spec-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
        }

        .spec-label {
          color: var(--text-muted);
        }

        .spec-val {
          color: var(--text-primary);
        }
      `}</style>
    </div>
  );
}
