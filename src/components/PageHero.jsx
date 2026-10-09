import React from 'react';

export default function PageHero({
  category = 'ESTATE SECTION',
  routeNum = '01',
  title = 'Page Title',
  subtitle = '',
  leadText = '',
  metaTags = []
}) {
  return (
    <section className="page-hero section">
      <div className="container">
        <div className="page-hero-inner">
          {/* Top Tag & Route Identifier */}
          <div className="hero-top-meta">
            <span className="tag-label">{category}</span>
            <span className="route-badge">ROUTE {routeNum}</span>
          </div>

          {/* Main Title & Subtitle */}
          <h1 className="hero-title">{title}</h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}

          {/* Editorial Lead Paragraph */}
          {leadText && <p className="lead hero-lead">{leadText}</p>}

          {/* Architectural Metadata Bar */}
          {metaTags.length > 0 && (
            <div className="hero-meta-bar">
              {metaTags.map((tag, idx) => (
                <div key={idx} className="hero-meta-item">
                  <span className="meta-key">{tag.key}</span>
                  <span className="meta-value">{tag.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .page-hero {
          padding-top: 90px;
          padding-bottom: 80px;
          border-bottom: 1px solid var(--border-subtle);
          background: linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-main) 100%);
        }

        .page-hero-inner {
          max-width: 960px;
        }

        .hero-top-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .route-badge {
          font-family: var(--font-sans);
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          color: var(--text-muted);
          border: 1px solid var(--border-subtle);
          padding: 0.25rem 0.6rem;
        }

        .hero-title {
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .hero-subtitle {
          font-family: var(--font-serif);
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          font-style: italic;
          color: var(--text-gold);
          margin-bottom: 1.5rem;
        }

        .hero-lead {
          margin-bottom: 2.5rem;
          max-width: 840px;
        }

        .hero-meta-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          padding-top: 1.75rem;
          border-top: 1px solid var(--border-subtle);
        }

        .hero-meta-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .meta-key {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-muted);
        }

        .meta-value {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
