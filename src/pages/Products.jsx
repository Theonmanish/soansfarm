import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CropPlantFeature from '../components/CropPlantFeature';
import FullWidthImageSection from '../components/FullWidthImageSection';

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
      imageTitle: 'Fresh Pineapple Produce',
      imageCaption: 'Harvested estate pineapple produce.'
    },
    {
      name: 'Farm Fresh Pineapple Juice',
      category: 'PRIMARY HARVEST PRODUCT',
      description: 'One of the most consistently associated products linking the farm’s primary harvest to direct consumption for visiting guests.',
      specs: [
        { label: 'Source', value: '100% Estate-grown pineapple harvest' },
        { label: 'Character', value: 'Freshly extracted estate juice' }
      ],
      imageTitle: 'Estate Pineapple Juice',
      imageCaption: 'Freshly extracted estate pineapple juice.'
    },
    {
      name: 'Documented Estate Spices',
      category: 'SPICE HARVEST',
      description: 'Documented estate spices cultivated within shade-tolerant crop layers including black pepper, vanilla, nutmeg, cinnamon, clove, and allspice.',
      specs: [
        { label: 'Cultivation', value: 'Integrated canopy shade growing' },
        { label: 'Varieties', value: 'Pepper, Nutmeg, Cinnamon, Clove, Vanilla' }
      ],
      imageTitle: 'Estate Spice Collection',
      imageCaption: 'Harvested spices visual placeholder.'
    },
    {
      name: 'Nursery Plants & Planting Material',
      category: 'HORTICULTURAL PROPAGATION',
      description: 'Propagation material for fruit trees, ornamental plants, bamboo varieties, herbs, and medicinal plants produced in the estate nursery.',
      specs: [
        { label: 'Plant Types', value: 'Fruit saplings, Bamboo clumps, Medicinal herbs' },
        { label: 'Availability', value: 'Varies by propagation season' }
      ],
      imageTitle: 'Horticultural Nursery Material',
      imageCaption: 'Nursery sapling propagation beds.'
    }
  ];

  return (
    <div className="products-page">
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
      <section className="section">
        <div className="container">
          <SectionHeading
            number="01. YIELD OVERVIEW"
            title="Estate Produce & Output"
            subtitle="Agricultural output generated across estate cultivation zones"
          />
          <div className="editorial-grid grid-2">
            {productOutput.map((item, idx) => (
              <CropPlantFeature
                key={idx}
                name={item.name}
                category={item.category}
                description={item.description}
                specs={item.specs}
                imageTitle={item.imageTitle}
                imageCaption={item.imageCaption}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 02. AGRICULTURAL INQUIRIES */}
      <section className="section section-surface">
        <div className="container">
          <div className="product-inquiry-box">
            <span className="tag-label">AGRICULTURAL INQUIRIES</span>
            <h3>Seasonal Produce & Nursery Plant Inquiries</h3>
            <p className="lead" style={{ maxWidth: '780px', margin: '0.75rem 0 1.5rem' }}>
              Current availability of fresh produce, spices, and nursery planting material varies according to monsoons and harvest seasons.
            </p>
            <span className="text-link">INQUIRE ABOUT SEASONAL HARVEST</span>
          </div>
        </div>
      </section>

      {/* CLOSING VISUAL SECTION */}
      <FullWidthImageSection
        title="Harvest & Nursery Visual — Soans Estate"
        category="AGRICULTURAL ARCHIVE"
        caption="Visual record placeholder of nursery saplings and farm harvest output."
      />

      <style>{`
        .product-inquiry-box {
          background-color: var(--bg-card);
          border: 1px solid var(--border-subtle);
          padding: 3rem;
        }
      `}</style>
    </div>
  );
}
