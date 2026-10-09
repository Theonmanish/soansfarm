import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import JournalPreview from '../components/JournalPreview';
import PlaceholderImage from '../components/PlaceholderImage';

export default function Journal() {
  const journalArticles = [
    {
      category: 'BOTANICAL OBSERVATION',
      date: 'OCTOBER 2026',
      title: 'Structural Architecture of Giant & Yellow Bamboo Varieties',
      excerpt: 'Examining canopy density, pathway shading, and clump propagation across estate bamboo groves in coastal Karnataka.',
      imageTitle: 'Bamboo Architectural Study'
    },
    {
      category: 'AGRICULTURAL HISTORY',
      date: 'SEPTEMBER 2026',
      title: 'Basel Mission Agricultural Initiatives & Hilly Land Reclamation',
      excerpt: 'Archival notes on early 20th century land transformation and systematic crop selection under Alfred Soans.',
      imageTitle: 'Archival Historical Document'
    },
    {
      category: 'HORTICULTURE',
      date: 'AUGUST 2026',
      title: 'Cauliflory in Understory Cocoa Cultivation',
      excerpt: 'Observing floral pod emergence directly from trunks and primary branches beneath plantation shade canopies.',
      imageTitle: 'Cauliflorous Cocoa Study'
    },
    {
      category: 'CLIMATE & HYDROLOGY',
      date: 'JULY 2026',
      title: 'Monsoonal Rainfall Patterns & Soil Water Retention',
      excerpt: 'Adapting multi-tier crop arrangements to intense southwest monsoon precipitation in rolling coastal terrain.',
      imageTitle: 'Monsoon Hydrology Field Study'
    },
    {
      category: 'LANDSCAPE ARCHITECTURE',
      date: 'JUNE 2026',
      title: 'Geometry & Concentric Paths in French Cathedral Labyrinths',
      excerpt: 'Exploring single-continuous pathway design and quiet concentration spaces within working agricultural grounds.',
      imageTitle: 'Labyrinth Geometric Plan'
    },
    {
      category: 'FRUIT SPECIES RECORD',
      date: 'MAY 2026',
      title: 'Documenting Exotic Tropical Fruit Adaptation',
      excerpt: 'Field notes on rambutan, mangosteen, jaboticaba, and miracle fruit species introduced over decades of plant study.',
      imageTitle: 'Exotic Fruit Specimen Field Note'
    }
  ];

  return (
    <div className="journal-page">
      {/* Page Hero Header */}
      <PageHero
        category="EDITORIAL ARCHIVE"
        routeNum="07"
        title="Journal & Records"
        subtitle="Agricultural notes, botanical observations, and historical records"
        leadText="The Soans Farm Journal serves as a contemporary digital repository for ongoing observations on plant science, crop performance, monsoonal hydrology, and the agricultural history of the estate."
        metaTags={[
          { key: 'ARCHIVE TYPE', value: 'BOTANICAL & HORTICULTURAL RECORDS' },
          { key: 'TOPICS', value: 'AGRICULTURE, HISTORY, CLIMATE, LABYRINTHS' },
          { key: 'PUBLICATION', value: 'EDITORIAL ARCHIVE SHELL' }
        ]}
      />

      {/* 01. FEATURED ARTICLE */}
      <section className="section">
        <div className="container">
          <SectionHeading
            number="01. FEATURED RECORD"
            title="Primary Journal Entry"
            subtitle="Highlighted archival document"
          />
          <div className="featured-article-card">
            <div className="editorial-grid grid-asymmetric-left">
              <div className="featured-text">
                <span className="tag-label">FEATURED BOTANICAL RECORD</span>
                <span className="pub-date">OCTOBER 2026 ▪ MOODBIDRI ARCHIVE</span>
                <h2 className="featured-title">Decades of Tropical Fruit Species Experimentation</h2>
                <p className="lead" style={{ margin: '1rem 0 1.5rem' }}>
                  An editorial summary of Dr. L. C. Soans's long-term study into uncommon tropical fruit trees, nursery propagation, and climate adaptation in coastal Karnataka.
                </p>
                <span className="text-link">READ FULL ARCHIVAL ENTRY</span>
              </div>
              <div className="featured-visual">
                <PlaceholderImage
                  aspectRatio="16-9"
                  title="Tropical Fruit Study Record"
                  category="FEATURED ARCHIVE"
                  caption="Documented botanical specimen archive."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. CATEGORIES FILTER SHELL */}
      <section className="section section-surface" style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="categories-filter-bar">
            <span className="filter-label">FILTER ARCHIVE:</span>
            <div className="filter-buttons">
              <button className="cat-btn active">ALL RECORDS</button>
              <button className="cat-btn">BOTANICAL OBSERVATIONS</button>
              <button className="cat-btn">AGRICULTURAL HISTORY</button>
              <button className="cat-btn">HORTICULTURE</button>
              <button className="cat-btn">CLIMATE & HYDROLOGY</button>
            </div>
          </div>
        </div>
      </section>

      {/* 03. ARTICLE GRID */}
      <section className="section">
        <div className="container">
          <SectionHeading
            number="02. ARCHIVE GRID"
            title="Recent Journal Entries"
            subtitle="Documented field observations & notes"
          />
          <div className="editorial-grid grid-3">
            {journalArticles.map((article, idx) => (
              <JournalPreview
                key={idx}
                category={article.category}
                date={article.date}
                title={article.title}
                excerpt={article.excerpt}
                imageTitle={article.imageTitle}
              />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .featured-article-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border-subtle);
          padding: 2.5rem;
        }

        .pub-date {
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          display: block;
          margin-bottom: 0.5rem;
        }

        .featured-title {
          font-family: var(--font-serif);
          font-size: 2.4rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .categories-filter-bar {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .filter-label {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          color: var(--text-gold);
        }

        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .cat-btn {
          background: none;
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          padding: 0.4rem 0.8rem;
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          cursor: pointer;
        }

        .cat-btn.active {
          border-color: var(--text-gold);
          color: var(--text-gold);
          background-color: var(--bg-accent-subtle);
        }

        @media (max-width: 768px) {
          .categories-filter-bar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
