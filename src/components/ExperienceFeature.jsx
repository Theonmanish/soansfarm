import React from 'react';
import PlaceholderImage from './PlaceholderImage';

export default function ExperienceFeature({
  num = '01',
  title = 'Experience Title',
  subtitle = 'Estate Element',
  description = '',
  highlights = [],
  imageTitle = ''
}) {
  return (
    <div className="experience-feature-item">
      <div className="editorial-grid grid-asymmetric-right">
        <div className="exp-image-col">
          <PlaceholderImage
            aspectRatio="16-9"
            title={imageTitle || title}
            category={`EXPERIENCE RECORD ${num}`}
            caption={`Architectural placement: ${title}`}
          />
        </div>
        
        <div className="exp-text-col">
          <span className="section-num">{num}. {subtitle.toUpperCase()}</span>
          <h3 className="exp-title">{title}</h3>
          {description && <p className="exp-desc">{description}</p>}

          {highlights.length > 0 && (
            <div className="exp-highlights">
              <span className="exp-hl-heading">ESTATE ELEMENTS</span>
              <ul className="exp-hl-list">
                {highlights.map((item, idx) => (
                  <li key={idx}>▪ {item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .experience-feature-item {
          padding: 3rem 0;
          border-bottom: 1px solid var(--border-subtle);
        }

        .experience-feature-item:last-child {
          border-bottom: none;
        }

        .exp-title {
          font-family: var(--font-serif);
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .exp-desc {
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
        }

        .exp-highlights {
          border-top: 1px solid var(--border-subtle);
          padding-top: 1rem;
        }

        .exp-hl-heading {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: var(--text-gold);
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.5rem;
        }

        .exp-hl-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}
