import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CropPlantFeature from '../components/CropPlantFeature';

export default function Products() {
  const productOutput = [
    {
      name: 'Fresh Pineapple & Fruit Harvest',
      category: 'SEASONAL PRODUCE',
      description: 'Farm-grown commercial pineapple along with seasonal yields of tropical fruits harvested from the diverse agricultural landscape.',
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
        { label: 'Source', value: '100% Farm-grown pineapple harvest' },
        { label: 'Character', value: 'Freshly extracted farm juice' }
      ],
    },
    {
      name: ' Spices',
      category: 'SPICE HARVEST',
      description: 'Spices cultivated within shade-tolerant crop layers including black pepper, vanilla, nutmeg, cinnamon, clove, and allspice.',
      specs: [
        { label: 'Cultivation', value: 'Integrated canopy shade growing' },
        { label: 'Varieties', value: 'Pepper, Nutmeg, Cinnamon, Clove, Vanilla' }
      ],
    },
    {
      name: 'Nursery Plants & Planting Material',
      category: 'HORTICULTURAL PROPAGATION',
      description: 'Propagation material for fruit trees, ornamental plants, bamboo varieties, herbs, and medicinal plants produced in the farm nursery.',
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
        title="Products & Farm Yield"
        subtitle="Fresh fruits, farm juice, spices, and horticultural nursery plants"
        leadText="Soans Farm produces a range of agricultural output spanning commercial fruits, fresh farm juice, shade-grown spices, and propagated nursery material for growers and plant enthusiasts."
        metaTags={[
          { key: 'PRIMARY PRODUCE', value: 'FRESH PINEAPPLE & SEASONAL FRUITS' },
          { key: 'EXTRACTED PRODUCE', value: 'FARM FRESH PINEAPPLE JUICE' },
          { key: 'SPICES & NURSERY', value: 'SPICES' }
        ]}
      />

      {/* 01. PRODUCTS LIST */}
      <section className="relative border-b border-farm-border py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="01. YIELD OVERVIEW"
            title="Farm Produce & Output"
            subtitle="Agricultural output generated across farm cultivation zones"
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

      

    </div>
  );
}
