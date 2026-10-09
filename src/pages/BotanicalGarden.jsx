import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import EditorialBlock from '../components/EditorialBlock';
import ImageGrid from '../components/ImageGrid';
import FullWidthImageSection from '../components/FullWidthImageSection';

export default function BotanicalGarden() {
  const notablePlants = [
    {
      title: 'Diesel Tree (Copaifera langsdorffii)',
      category: 'UNCOMMON TREE SPECIMEN',
      caption: 'Documented botanical specimen producing terpene oleoresin.',
      aspect: '4-3'
    },
    {
      title: 'Amherstia nobilis (Pride of Burma)',
      category: 'TROPICAL FLOWERING TREE',
      caption: 'Notable tropical flowering specimen in living collection.',
      aspect: '4-3'
    },
    {
      title: 'Brownea grandiceps (Rose of Venezuela)',
      category: 'BOTANICAL SPECIMEN',
      caption: 'Understory flowering tree with distinctive dense floral heads.',
      aspect: '4-3'
    },
    {
      title: 'Macadamia & Cola Nut Specimens',
      category: 'EXOTIC NUT TREES',
      caption: 'Introduced exotic nut-bearing species.',
      aspect: '4-3'
    },
    {
      title: 'Rare Tropical Fruit Collections',
      category: 'FRUIT SPECIES STUDY',
      caption: 'Living collection of uncommon tropical fruit trees.',
      aspect: '4-3'
    },
    {
      title: 'Medicinal Herbs & Ferns',
      category: 'HERBAL COLLECTION',
      caption: 'Understory medicinal plants and fern collections.',
      aspect: '4-3'
    }
  ];

  return (
    <div className="botanical-garden-page">
      {/* Page Hero Header */}
      <PageHero
        category="BOTANICAL COLLECTION"
        routeNum="04"
        title="Botanical Collection"
        subtitle="Decades of horticultural preservation and living plant study"
        leadText="The botanical collection at Soans Farm developed gradually through decades of agricultural and horticultural work, driven largely by Dr. L. C. Soans's interest in uncommon fruit species, bamboo varieties, and plant science."
        metaTags={[
          { key: 'COLLECTION CHARACTER', value: 'INFORMAL SETTING FOR BOTANICAL LEARNING' },
          { key: 'PLANT GROUPS', value: 'FRUITS, SPICES, BAMBOO, PALMS, MEDICINALS' },
          { key: 'PURPOSE', value: 'EXPERIMENTATION, PRESERVATION, PROPAGATION' }
        ]}
      />

      {/* 01. DEVELOPMENT & PURPOSE */}
      <section className="section">
        <div className="container">
          <SectionHeading
            number="01. DEVELOPMENT"
            title="Development & Purpose of the Collection"
            subtitle="Supporting experimentation, preservation, and nursery work"
          />
          <EditorialBlock
            title="Horticultural Experimentation & Learning"
            lead="The botanical collection serves several complementary purposes across the estate."
            body={[
              "It supports ongoing agricultural experimentation, preserves unusual tropical plants, provides fruit and plantation crops, develops nursery material, and serves as an informal setting for botanical observation and learning.",
              "Rather than a formal manicured public park, the collection exists organically within the working agricultural framework."
            ]}
            imageTitle="Botanical Archive Record"
            imageCaption="Visual study of tropical plant canopy and foliage diversity."
          />
        </div>
      </section>

      {/* 02. NOTABLE PLANT GROUPS */}
      <section className="section section-surface">
        <div className="container">
          <SectionHeading
            number="02. NOTABLE SPECIMENS"
            title="Notable Plant Groups & Rare Species"
            subtitle="Documented tropical specimens and botanical rarities"
          />
          <ImageGrid items={notablePlants} columns={3} />
        </div>
      </section>

      {/* 03. EDUCATIONAL CHARACTER */}
      <section className="section">
        <div className="container">
          <SectionHeading
            number="03. OBSERVATION"
            title="Educational & Observational Character"
            subtitle="Direct observation of tropical plant science"
          />
          <EditorialBlock
            title="Informal Botanical Study Environment"
            lead="The estate has long welcomed student groups, agricultural learners, and visiting botanists."
            body={[
              "Visitors observe living plant specimens in their cultivated setting, gaining insights into multi-layer canopy dynamics, soil moisture preservation, and plant taxonomy."
            ]}
            imageTitle="Observational Pathways"
            imageCaption="Educational observation pathway through plant collection zones."
            reverse={true}
          />
        </div>
      </section>

      {/* 04. PLANT CATALOGUE INTRO */}
      <section className="section section-surface">
        <div className="container">
          <div className="catalogue-intro-box">
            <span className="tag-label">CATALOGUE FRAMEWORK</span>
            <h3>Future Botanical Index & Taxonomy Shell</h3>
            <p className="lead" style={{ maxWidth: '800px', margin: '0.75rem 0 1.5rem' }}>
              This section is structurally established to receive verified botanical names, family classifications, native origins, and specimen location coordinates in future content passes.
            </p>
            <div className="catalogue-meta-badge">
              <span>STATUS: CATALOGUE STRUCTURE READY FOR CONTENT INTEGRATION</span>
            </div>
          </div>
        </div>
      </section>

      {/* 05. CLOSING VISUAL SECTION */}
      <FullWidthImageSection
        title="Botanical Specimen Close-Up Study — Soans Estate"
        category="BOTANICAL ARCHIVE"
        caption="Macro photography visual frame placeholder for living plant collection."
      />

      <style>{`
        .catalogue-intro-box {
          background-color: var(--bg-card);
          border: 1px solid var(--border-gold);
          padding: 3rem;
          text-align: left;
        }

        .catalogue-meta-badge {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          color: var(--text-gold);
          text-transform: uppercase;
          border-top: 1px solid var(--border-subtle);
          padding-top: 1.25rem;
        }
      `}</style>
    </div>
  );
}
