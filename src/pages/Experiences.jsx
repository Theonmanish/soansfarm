import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ExperienceFeature from '../components/ExperienceFeature';
import FullWidthImageSection from '../components/FullWidthImageSection';

export default function Experiences() {
  const expList = [
    {
      num: '01',
      title: 'Exploring the Farm Pathways',
      subtitle: 'Self-Guided Farm Walk',
      description: 'Encounters with mixed plantations, fruit collections, bamboo groves, spice plantings, and nursery areas through walks and farm pathways.',
      highlights: [
        'Shaded plantation walking paths',
        'Direct observation of multi-tier canopy agriculture',
        'Seasonal fruit tree observation zones'
      ],
      imageTitle: 'Farm Pathway Visual'
    },
    {
      num: '02',
      title: 'Plantation & Crop Experience',
      subtitle: 'Agricultural Observation',
      description: 'Understanding how pineapple, cocoa, areca nut, and spices are cultivated within an integrated agricultural landscape.',
      highlights: [
        'Pineapple plantation field walks',
        'Shade-grown cocoa understory observation',
        'Areca nut palm row pathways'
      ],
      imageTitle: 'Plantation Field Walk'
    },
    {
      num: '03',
      title: 'Botanical Collection Walk',
      subtitle: 'Horticultural Discovery',
      description: 'Observing living tropical specimens, uncommon fruit species, and bamboo varieties collected over decades of horticultural work.',
      highlights: [
        'Rare tropical fruit tree specimens',
        'Diverse bamboo species grove paths',
        'Medicinal herb & nursery propagation areas'
      ],
      imageTitle: 'Botanical Collection Walk'
    },
    
    {
      num: '04',
      title: 'Educational & Academic Visits',
      subtitle: 'Agricultural Learning',
      description: ' welcoming school and college students, agricultural learners, and travelers interested in tropical horticulture.',
      highlights: [
        'Direct crop & soil observation',
        'Multi-crop farming technique demonstrations',
        'Botanical collection taxonomy study'
      ],
      imageTitle: 'Educational Learning Walk'
    }
  ];

  return (
    <div className="experiences-page">
      {/* Page Hero Header */}
      <PageHero
        category="FARM VISITS & DISCOVERY"
        routeNum="05"
        title="Visitor Experiences"
        subtitle="Farm walks, botanical observations, and walking labyrinths"
        leadText="A visit to Soans Farm offers an introduction to a working tropical agricultural farm rather than an urban botanical garden. Visitors encounter mixed plantations, fruit collections, bamboo groves, spice plantings, and walking labyrinths through farm pathways."
        metaTags={[
          { key: 'VISIT TYPE', value: 'WORKING FARM WALK & BOTANICAL STUDY' },
          { key: 'DISTINCTIVE ELEMENTS', value: 'FRENCH & CRETAN WALKING LABYRINTHS' },
          { key: 'LEARNING', value: 'EDUCATIONAL VISITS FOR SCHOOLS & LEARNERS' }
        ]}
      />

      {/* 01. EXPERIENCES LIST */}
      <section className="section">
        <div className="container">
          <SectionHeading
            number="01. ELEMENTS"
            title="Distinctive farm Visitor Elements"
            subtitle="Walks, plant study, and reflective spaces"
          />
          {expList.map((item, idx) => (
            <ExperienceFeature
              key={idx}
              num={item.num}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              highlights={item.highlights}
              imageTitle={item.imageTitle}
            />
          ))}
        </div>
      </section>

      {/* 02. CLOSING SECTION */}
      <section className="section section-surface text-center-wrapper">
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <span className="tag-label">VISITOR GUIDELINES</span>
          <h2>Plan Your farm Visit</h2>
          <p className="lead" style={{ margin: '1rem 0 2rem' }}>
            Review practical information and location context for visiting Soans Farm in coastal Karnataka.
          </p>
          <Link to="/visit" className="btn-editorial">
            <span>READ VISITOR INFORMATION</span>
            <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      {/* CLOSING VISUAL SECTION */}
      <FullWidthImageSection
        title="farm Pathway Landscape Visual"
        category="EXPERIENCE ARCHIVE"
        caption="Shaded walking pathway through farm bamboo and plantation canopy."
      />
    </div>
  );
}
