import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import EditorialBlock from '../components/EditorialBlock';
import ImageGrid from '../components/ImageGrid';

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
    <div>
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
      <section className="relative border-b border-farm-border py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
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
          />
        </div>
      </section>

      {/* 02. NOTABLE PLANT GROUPS */}
      <section className="relative border-b border-farm-border bg-farm-surface py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="02. NOTABLE SPECIMENS"
            title="Notable Plant Groups & Rare Species"
            subtitle="Documented tropical specimens and botanical rarities"
          />
          <ImageGrid items={notablePlants} columns={3} />
        </div>
      </section>

      {/* 03. EDUCATIONAL CHARACTER */}
      <section className="relative border-b border-farm-border py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="03. OBSERVATION"
            title="Educational & Observational Character"
            subtitle="Direct observation of tropical plant science"
          />
          <EditorialBlock
            title="Informal Botanical Study Environment"
            lead="The farm has long welcomed student groups, agricultural learners, and visiting botanists."
            body={[
              "Visitors observe living plant specimens in their cultivated setting, gaining insights into multi-layer canopy dynamics, soil moisture preservation, and plant taxonomy."
            ]}
            reverse={true}
          />
        </div>
      </section>

      {/* 04. PLANT CATALOGUE INTRO */}
      <section className="relative border-b border-farm-border bg-farm-surface py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <div className="border border-farm-border-gold bg-farm-card p-8 text-left md:p-12">
            <span className="mb-5 inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.2em] text-farm-gold before:inline-block before:h-px before:w-6 before:bg-farm-gold">CATALOGUE FRAMEWORK</span>
            <h3>Future Botanical Index & Taxonomy Shell</h3>
            <p className="mb-6 mt-3 max-w-[800px] text-[clamp(1.15rem,1.8vw,1.35rem)] font-light leading-relaxed text-farm-cream">
              This section is structurally established to receive verified botanical names, family classifications, native origins, and specimen location coordinates in future content passes.
            </p>
            <div className="border-t border-farm-border pt-5 text-[0.7rem] uppercase tracking-[0.2em] text-farm-gold">
              <span>STATUS: CATALOGUE STRUCTURE READY FOR CONTENT INTEGRATION</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
