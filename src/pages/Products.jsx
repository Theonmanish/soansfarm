import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CropPlantFeature from '../components/CropPlantFeature';

export default function Products() {
  const productOutput = [
    {
      name: 'Fresh Pineapple & Fruit Harvest',
      category: 'SEASONAL PRODUCE',
      description: 'Estate-grown commercial pineapple along with seasonal yields of tropical fruits harvested from the diverse agricultural landscape.',
      specs: [
        { label: 'Harvest Availability', value: 'Seasonal rotation' },
        { label: 'Primary Crop', value: 'Pineapple' }
      ],
    },
    {
      name: 'Farm Fresh Pineapple Juice',
      category: 'PRIMARY HARVEST PRODUCT',
      description: 'One of the most consistently associated products linking the farm’s primary harvest to direct consumption for visiting guests.',
      specs: [
        { label: 'Source', value: '100% Estate-grown pineapple harvest' },
        { label: 'Character', value: 'Freshly extracted estate juice' }
      ],
    },
    {
      name: 'Documented Estate Spices',
      category: 'SPICE HARVEST',
      description: 'Documented estate spices cultivated within shade-tolerant crop layers including black pepper, vanilla, nutmeg, cinnamon, clove, and allspice.',
      specs: [
        { label: 'Cultivation', value: 'Integrated canopy shade growing' },
        { label: 'Varieties', value: 'Pepper, Nutmeg, Cinnamon, Clove, Vanilla' }
      ],
    },
    {
      name: 'Nursery Plants & Planting Material',
      category: 'HORTICULTURAL PROPAGATION',
      description: 'Propagation material for fruit trees, ornamental plants, bamboo varieties, herbs, and medicinal plants produced in the estate nursery.',
      specs: [
        { label: 'Plant Types', value: 'Fruit saplings, Bamboo clumps, Medicinal herbs' },
        { label: 'Availability', value: 'Varies by propagation season' }
      ],
    }
  ];

  return (
    <div>
      {/* Page Hero Header */}
      <PageHero
        category="AGRICULTURAL OUTPUT"
        routeNum="06"
        title="Products & Estate Yield"
        subtitle="Fresh fruits, estate juice, spices, and horticultural nursery plants"
        leadText="Soans Farm produces a range of agricultural output spanning commercial fruits, fresh farm juice, shade-grown spices, and propagated nursery material for growers and plant enthusiasts."
        metaTags={[
          { key: 'PRIMARY PRODUCE', value: 'FRESH PINEAPPLE & SEASONAL FRUITS' },
          { key: 'EXTRACTED PRODUCE', value: 'FARM FRESH PINEAPPLE JUICE' },
          { key: 'SPICES & NURSERY', value: 'ESTATE SPICES & PLANTING MATERIAL' }
        ]}
      />

      {/* 01. PRODUCTS LIST */}
      <section className="relative border-b border-farm-border py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="01. YIELD OVERVIEW"
            title="Estate Produce & Output"
            subtitle="Agricultural output generated across estate cultivation zones"
          />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {productOutput.map((item, idx) => (
              <CropPlantFeature
                key={idx}
                name={item.name}
                category={item.category}
                description={item.description}
                specs={item.specs}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 02. AGRICULTURAL INQUIRIES */}
      <section className="relative border-b border-farm-border bg-farm-surface py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <div className="border border-farm-border bg-farm-card p-8 md:p-12">
            <span className="mb-5 inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.2em] text-farm-gold before:inline-block before:h-px before:w-6 before:bg-farm-gold">AGRICULTURAL INQUIRIES</span>
            <h3>Seasonal Produce & Nursery Plant Inquiries</h3>
            <p className="mb-6 mt-3 max-w-[780px] text-[clamp(1.15rem,1.8vw,1.35rem)] font-light leading-relaxed text-farm-cream">
              Current availability of fresh produce, spices, and nursery planting material varies according to monsoons and harvest seasons.
            </p>
            <span className="inline-flex items-center gap-2 border-b border-farm-border-gold pb-1 font-body text-sm uppercase tracking-[0.15em] text-farm-gold transition-colors hover:border-farm-cream hover:text-farm-cream">INQUIRE ABOUT SEASONAL HARVEST</span>
          </div>
        </div>
      </section>

    </div>
  );
}
