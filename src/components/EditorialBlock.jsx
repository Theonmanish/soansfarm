import React from 'react';
import PlaceholderImage from './PlaceholderImage';

export default function EditorialBlock({
  number = '',
  title = '',
  lead = '',
  body = [],
  imageTitle = '',
  imageCaption = '',
  imageAspect = '4-3',
  reverse = false
}) {
  return (
    <div className={`editorial-block ${reverse ? 'reverse' : ''}`}>
      <div className="editorial-grid grid-asymmetric-left">
        <div className="editorial-text-col">
          {number && <span className="section-num">{number}</span>}
          {title && <h3 className="editorial-title">{title}</h3>}
          {lead && <p className="lead" style={{ marginBottom: '1.25rem' }}>{lead}</p>}
          
          {body.map((para, idx) => (
            <p key={idx} style={{ marginBottom: '1rem' }}>{para}</p>
          ))}
        </div>

        <div className="editorial-image-col">
          <PlaceholderImage
            aspectRatio={imageAspect}
            title={imageTitle || title}
            caption={imageCaption}
          />
        </div>
      </div>

      <style>{`
        .editorial-block {
          margin-bottom: 4rem;
        }

        .editorial-block:last-child {
          margin-bottom: 0;
        }

        .editorial-title {
          margin-bottom: 1rem;
        }

        .editorial-block.reverse .editorial-grid {
          grid-template-columns: 1.6fr 1fr;
        }

        @media (max-width: 1024px) {
          .editorial-block.reverse .editorial-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
