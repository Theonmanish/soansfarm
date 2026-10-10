import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import JournalPreview from '../components/JournalPreview';

export default function Journal() {
  const journalArticles = [
    {
      category: 'BOTANICAL OBSERVATION',
      date: 'OCTOBER 2026',
      title: 'Structural Architecture of Giant & Yellow Bamboo Varieties',
      excerpt: 'Examining canopy density, pathway shading, and clump propagation across estate bamboo groves in coastal Karnataka.',
      imageSrc: '/bamboo1.jpg',
      imageAlt: 'Bamboo grove at Soans Farm',
    },
    {
      category: 'AGRICULTURAL HISTORY',
      date: 'SEPTEMBER 2026',
      title: 'Basel Mission Agricultural Initiatives & Hilly Land Reclamation',
      excerpt: 'Archival notes on early 20th century land transformation and systematic crop selection under Alfred Soans.',
    },
    {
      category: 'HORTICULTURE',
      date: 'AUGUST 2026',
      title: 'Cauliflory in Understory Cocoa Cultivation',
      excerpt: 'Observing floral pod emergence directly from trunks and primary branches beneath plantation shade canopies.',
    },
    {
      category: 'CLIMATE & HYDROLOGY',
      date: 'JULY 2026',
      title: 'Monsoonal Rainfall Patterns & Soil Water Retention',
      excerpt: 'Adapting multi-tier crop arrangements to intense southwest monsoon precipitation in rolling coastal terrain.',
    },
    {
      category: 'LANDSCAPE ARCHITECTURE',
      date: 'JUNE 2026',
      title: 'Geometry & Concentric Paths in French Cathedral Labyrinths',
      excerpt: 'Exploring single-continuous pathway design and quiet concentration spaces within working agricultural grounds.',
      imageSrc: '/labyrinth.jpg',
      imageAlt: 'Labyrinth path at Soans Farm',
    },
    {
      category: 'FRUIT SPECIES RECORD',
      date: 'MAY 2026',
      title: 'Documenting Exotic Tropical Fruit Adaptation',
      excerpt: 'Field notes on rambutan, mangosteen, jaboticaba, and miracle fruit species introduced over decades of plant study.',
    }
  ];

  return (
    <div>
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
      <section className="relative border-b border-farm-border py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="01. FEATURED RECORD"
            title="Primary Journal Entry"
            subtitle="Highlighted archival document"
          />
          <div className="border border-farm-border bg-farm-card p-7 md:p-10">
            <div className="max-w-4xl">
                <span className="mb-5 inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.2em] text-farm-gold before:inline-block before:h-px before:w-6 before:bg-farm-gold">FEATURED BOTANICAL RECORD</span>
                <span className="mb-2 block text-[0.7rem] tracking-[0.15em] text-farm-muted">OCTOBER 2026 ▪ MOODBIDRI ARCHIVE</span>
                <h2 className="mb-3 font-editorial text-[2.4rem] text-farm-cream">Decades of Tropical Fruit Species Experimentation</h2>
                <p className="my-4 mb-6 text-[clamp(1.15rem,1.8vw,1.35rem)] font-light leading-relaxed text-farm-cream">
                  An editorial summary of Dr. L. C. Soans's long-term study into uncommon tropical fruit trees, nursery propagation, and climate adaptation in coastal Karnataka.
                </p>
                <span className="inline-flex items-center gap-2 border-b border-farm-border-gold pb-1 font-body text-sm uppercase tracking-[0.15em] text-farm-gold transition-colors hover:border-farm-cream hover:text-farm-cream">READ FULL ARCHIVAL ENTRY</span>
              </div>
          </div>
        </div>
      </section>

      {/* 02. CATEGORIES FILTER SHELL */}
      <section className="relative border-b border-farm-border bg-farm-surface py-10">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <span className="text-[0.7rem] tracking-[0.2em] text-farm-gold">FILTER ARCHIVE:</span>
            <div className="flex flex-wrap gap-2">
              <button className="cursor-pointer border border-farm-gold bg-farm-gold/5 px-3 py-2 text-[0.7rem] tracking-[0.12em] text-farm-gold">ALL RECORDS</button>
              <button className="cursor-pointer border border-farm-border bg-transparent px-3 py-2 text-[0.7rem] tracking-[0.12em] text-farm-stone">BOTANICAL OBSERVATIONS</button>
              <button className="cursor-pointer border border-farm-border bg-transparent px-3 py-2 text-[0.7rem] tracking-[0.12em] text-farm-stone">AGRICULTURAL HISTORY</button>
              <button className="cursor-pointer border border-farm-border bg-transparent px-3 py-2 text-[0.7rem] tracking-[0.12em] text-farm-stone">HORTICULTURE</button>
              <button className="cursor-pointer border border-farm-border bg-transparent px-3 py-2 text-[0.7rem] tracking-[0.12em] text-farm-stone">CLIMATE & HYDROLOGY</button>
            </div>
          </div>
        </div>
      </section>

      {/* 03. ARTICLE GRID */}
      <section className="relative border-b border-farm-border py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="02. ARCHIVE GRID"
            title="Recent Journal Entries"
            subtitle="Documented field observations & notes"
          />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {journalArticles.map((article, idx) => (
              <JournalPreview
                key={idx}
                category={article.category}
                date={article.date}
                title={article.title}
                excerpt={article.excerpt}
                imageSrc={article.imageSrc}
                imageAlt={article.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
