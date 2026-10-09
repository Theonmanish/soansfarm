import React from 'react';

export default function SectionHeading({
  number = '',
  title = '',
  subtitle = '',
  align = 'left'
}) {
  return (
    <div className={`section-heading align-${align}`}>
      {number && <span className="section-num">{number}</span>}
      <h2 className="heading-title">{title}</h2>
      {subtitle && <p className="heading-subtitle">{subtitle}</p>}

      <style>{`
        .section-heading {
          margin-bottom: 3rem;
        }

        .section-heading.align-center {
          text-align: center;
        }

        .heading-title {
          position: relative;
          display: inline-block;
        }

        .heading-subtitle {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-style: italic;
          color: var(--text-gold);
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
}
