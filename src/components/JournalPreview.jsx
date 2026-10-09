import React from 'react';
import PlaceholderImage from './PlaceholderImage';

export default function JournalPreview({
  category = 'ESTATE ARCHIVE',
  date = 'OCTOBER 2026',
  title = 'Journal Article Title Placeholder',
  excerpt = 'Short editorial excerpt describing the botanical or agricultural record entry.',
  imageTitle = ''
}) {
  return (
    <article className="journal-editorial-entry">
      <div className="journal-entry-image">
        <PlaceholderImage
          aspectRatio="16-9"
          title={imageTitle || title}
          category={category}
        />
      </div>
      <div className="journal-entry-content">
        <div className="journal-entry-meta">
          <span className="journal-category">{category}</span>
          <span className="journal-date">{date}</span>
        </div>
        <h3 className="journal-title">{title}</h3>
        <p className="journal-excerpt">{excerpt}</p>
        <span className="text-link">READ ENTRY</span>
      </div>

      <style>{`
        .journal-editorial-entry {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .journal-entry-content {
          padding-top: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .journal-entry-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }

        .journal-category {
          color: var(--text-gold);
        }

        .journal-date {
          color: var(--text-muted);
        }

        .journal-title {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
          line-height: 1.25;
        }

        .journal-excerpt {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
      `}</style>
    </article>
  );
}
