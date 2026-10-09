import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import EditorialBlock from '../components/EditorialBlock';
import FullWidthImageSection from '../components/FullWidthImageSection';

export default function TheFarm() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="the-farm-page">
      {/* Page Hero Header */}
      <PageHero
        category="ESTATE IDENTITY & HERITAGE"
        routeNum="01"
        title="The Farm"
        subtitle="A long-established agricultural estate in coastal Karnataka"
        leadText="Soans Farm is a working agricultural and horticultural estate located in the Moodbidri region. Known for its combination of commercial agriculture, tropical fruit cultivation, spice crops, bamboo groves, and botanical diversity, the estate developed as a long-term agricultural project rather than a single-crop plantation."
        metaTags={[
          { key: 'ESTATE FOUNDATION', value: 'EARLY 20TH CENTURY BASEL MISSION INITIATIVES' },
          { key: 'PRIMARY CROP IDENTITY', value: 'PINEAPPLE & MIXED TROPICAL CULTIVATION' },
          ]}
      />

      {/* 01. OVERVIEW */}
      <section id="overview" className="section">
        <div className="container">
          <SectionHeading
            number="01. OVERVIEW"
            title="Estate Overview & Dual Character"
            subtitle="Working agricultural landscape & living plant study"
          />
          <EditorialBlock
            title="Simultaneous Production & Botanical Study"
            lead="The farm brings together cultivated plantations, fruit trees, plant collections, nursery activity, bamboo groves, and distinctive structures like its walking labyrinths."
            body={[
              "Its character is shaped by the interaction between productive agriculture and an extensive living collection of plants.",
              "It functions simultaneously as a working agricultural landscape, an experimental horticultural site, and a destination for agricultural observation and education."
            ]}
            imageTitle="Estate Visual Overview"
            imageCaption="Architectural canopy overlay of cultivated fields and plant collections."
          />
        </div>
      </section>

      {/* 02. HISTORY & HERITAGE */}
      <section id="history" className="section section-surface">
        <div className="container">
          <SectionHeading
            number="02. HISTORY & HERITAGE"
            title="Documented History & Generations"
            subtitle="Basel Mission roots, Alfred Soans, and Dr. L. C. Soans"
          />
          <EditorialBlock
            number="HISTORICAL CHRONOLOGY"
            title="Agricultural Roots & Systematic Crop Selection"
            lead="The history of the farm reaches back to the Basel Mission’s agricultural initiatives in the early 20th century, which sought to bring hilly and uncultivated land under productive cultivation."
            body={[
              "Alfred Soans (1903–1981), an agricultural graduate of the Allahabad Agricultural Institute, joined the Basel Mission’s horticultural project at Moodbidri in 1928. Through experimentation with crops suited to the region’s challenging soil and climatic conditions, he established pineapple as the farm’s principal commercial crop during the 1930s, helping pioneer its cultivation across the region.",
              "The estate’s horticultural legacy continued under Dr. Livingston Chandramohan (L. C.) Soans, an agricultural scientist and botanist who returned to the farm in 1966 after completing his doctoral research in the United States. Over the following decades, he introduced a remarkable range of exotic tropical fruit species, expanded the farm’s botanical diversity, and advanced its multi-crop cultivation practices. The estate also became known for its varied bamboo collections and its enduring contribution to agricultural innovation and horticulture in coastal Karnataka."
            ]}
            imageTitle="Archival Estate Record"
            imageCaption="Archival document placeholder: Agricultural development chronology."
            reverse={true}
          />
        </div>
      </section>

      {/* 03. PHILOSOPHY */}
      <section id="philosophy" className="section">
        <div className="container">
          <SectionHeading
            number="03. PHILOSOPHY"
            title="Core Agricultural Principles"
            subtitle="Practical experimentation & practical land stewardship"
          />
          <div className="editorial-grid grid-3">
            <div className="philosophy-card-seamless">
              <span className="phi-num">01</span>
              <h4>Crop Multiplicity</h4>
              <p>Combining crops with different growth patterns, vertical heights, and canopy layers.</p>
            </div>
            <div className="philosophy-card-seamless">
              <span className="phi-num">02</span>
              <h4>Global Tropical Testing</h4>
              <p>Testing and cultivating tropical fruit species from diverse geographic and climate regions.</p>
            </div>
            
            <div className="philosophy-card-seamless">
              <span className="phi-num">03</span>
              <h4>Nursery Propagation</h4>
              <p>Preserving and developing plant diversity through dedicated nursery and horticultural propagation work.</p>
            </div>
            <div className="philosophy-card-seamless">
              <span className="phi-num">04</span>
              <h4>Local Microclimate Adaptation</h4>
              <p>Adapting agriculture to local rainfall, soil conditions, hilly terrain, and seasonal water availability.</p>
            </div>
            <div className="philosophy-card-seamless">
              <span className="phi-num">05</span>
              <h4>Agriculture as Knowledge</h4>
              <p>Treating farming as both a sustainable livelihood and a field of practical botanical knowledge.</p>
            </div>
          </div>
        </div>
      </section>

      

      <style>{`
        .philosophy-card-seamless {
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
        }

        .phi-num {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: var(--text-gold);
          margin-bottom: 0.5rem;
        }

        .philosophy-card-seamless h4 {
          margin-bottom: 0.5rem;
          font-family: var(--font-serif);
          font-size: 1.35rem;
        }

        .philosophy-card-seamless p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
}
