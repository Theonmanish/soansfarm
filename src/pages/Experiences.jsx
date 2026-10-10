import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ExperienceFeature from '../components/ExperienceFeature';

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
    }
  ];

  return (
    <div>
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
      <section className="relative border-b border-farm-border py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
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
            />
          ))}
        </div>
      </section>

      {/* 02. CLOSING SECTION */}
      <section className="relative border-b border-farm-border bg-farm-surface py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[720px] text-center">
          <span className="mb-5 inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.2em] text-farm-gold before:inline-block before:h-px before:w-6 before:bg-farm-gold">VISITOR GUIDELINES</span>
          <h2>Plan Your farm Visit</h2>
          <p className="my-4 mb-8 text-[clamp(1.15rem,1.8vw,1.35rem)] font-light leading-relaxed text-farm-cream">
            Review practical information and location context for visiting Soans Farm in coastal Karnataka.
          </p>
          <Link to="/visit" className="inline-flex items-center gap-3 border border-farm-border-medium px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-farm-cream transition-all hover:border-farm-gold hover:bg-farm-gold/5 hover:text-farm-gold">
            <span>READ VISITOR INFORMATION</span>
            <ChevronRight size={14} />
          </Link>
        </div>
      </section>

    </div>
  );
}
