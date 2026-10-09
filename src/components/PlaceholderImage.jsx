import React from 'react';

export default function PlaceholderImage({ 
  aspectRatio = '16-9', 
  title = 'Estate Visual Record', 
  category = 'PHOTOGRAPHY', 
  caption = '',
  className = '',
  fullBleed = false
}) {
  return (
    <div className={`photo-seamless-wrapper ${fullBleed ? 'full-bleed-media' : ''} ${className}`}>
      <div className={`photo-frame-seamless photo-frame-aspect-${aspectRatio}`}>
        <div className="photo-seamless-overlay">
          <div className="photo-placeholder-meta">
            <span className="photo-placeholder-tag">{category}</span>
            <span>SOANS ESTATE ARCHIVE</span>
          </div>
          
          <div className="photo-placeholder-center">
            <svg 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="var(--text-gold)" 
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{ margin: '0 auto', opacity: 0.5 }}
            >
              <rect width="18" height="18" x="3" y="3" rx="0" ry="0" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
            <p className="photo-placeholder-title">{title}</p>
          </div>

          <div className="photo-placeholder-meta">
            <span>SPECIMEN / FIELD LOCATION</span>
            <span>MOODBIDRI, KARNATAKA</span>
          </div>
        </div>
      </div>
      {caption && (
        <p className="photo-caption-integrated">
          <span style={{ color: 'var(--text-gold)' }}>▪</span> {caption}
        </p>
      )}

      <style>{`
        .photo-seamless-wrapper {
          position: relative;
          width: 100%;
        }

        .full-bleed-media {
          width: 100vw;
          margin-left: calc(50% - 50vw);
        }

        .photo-frame-seamless {
          position: relative;
          width: 100%;
          background: linear-gradient(135deg, #131713 0%, #0B0B0A 100%);
          border: none;
          box-shadow: none;
          overflow: hidden;
        }

        .photo-seamless-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2rem;
          background: radial-gradient(circle at 50% 50%, rgba(19, 23, 19, 0.2) 0%, rgba(11, 11, 10, 0.85) 100%);
          border-bottom: 1px solid rgba(234, 228, 216, 0.05);
        }

        .photo-caption-integrated {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 0.75rem;
          font-style: italic;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      `}</style>
    </div>
  );
}
