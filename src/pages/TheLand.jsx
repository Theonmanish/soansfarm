import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import EditorialBlock from '../components/EditorialBlock';
import FullWidthImageSection from '../components/FullWidthImageSection';

export default function TheLand() {
  return (
    <div>
      {/* Page Hero Header */}
      <PageHero
        category="ENVIRONMENT & TOPOGRAPHY"
        routeNum="02"
        title="The Land & Microclimate"
        subtitle="Physical environment and vertical crop architecture"
        leadText="Situated in the rolling, hilly terrain of coastal Karnataka, Soans Farm experiences a tropical climate shaped by the southwest monsoon. The landscape is organized as a multi-layered agricultural environment where different crops occupy various vertical levels."
        metaTags={[
          { key: 'GEOGRAPHIC REGION', value: 'MOODBIDRI, DAKSHINA KANNADA' },
          { key: 'CLIMATE PATTERN', value: 'TROPICAL MONSOONAL WITH DRY PERIODS' },
          { key: 'TERRAIN TYPE', value: 'ROLLING HILLY COASTAL TOPOGRAPHY' }
        ]}
      />

      {/* 01. LANDSCAPE & TOPOGRAPHY */}
      <section className="relative border-b border-farm-border py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="01. LANDSCAPE"
            title="Hilly Terrain & Topography"
            subtitle="Coastal Karnataka geography and natural contours"
          />
          <EditorialBlock
            title="Terrain Adaptation & Contours"
            lead="The landscape is defined by gentle slopes, hillocks, and natural drainage paths characteristic of the coastal Karnataka hinterland."
            
          />
        </div>
      </section>

      {/* 02. CLIMATE & HYDROLOGY */}
      <section className="relative border-b border-farm-border bg-farm-surface py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="02. CLIMATE"
            title="Monsoon Rainfall & Growing Seasons"
            subtitle="Seasonal hydrology and tropical humidity"
          />
          <EditorialBlock
            title="Seasonal Monsoonal Hydrology"
            lead="The region receives substantial seasonal rainfall during the southwest monsoon, followed by a warmer, drier period."
            body={[
              "This climate supports dense vegetation and provides ideal growing conditions for tropical fruits, plantation crops, spices, bamboo varieties, and ornamental plants."
            ]}
            reverse={true}
          />
        </div>
      </section>

      {/* 03. PLANT LIFE & BIODIVERSITY */}
      <section className="relative border-b border-farm-border py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="03. BIODIVERSITY"
            title="Cultivated Plant Diversity & Habitats"
            subtitle="Commercial species alongside botanical collections"
          />
          <EditorialBlock
            title="Living Vegetation Structure"
            lead="The plant life includes commercial crops alongside plants maintained for botanical, ornamental, or educational interest."
            body={[
              "The estate's documented diversity encompasses food crops, plantation species, spice plants, fruit trees, palms, bamboo, ornamental plants, medicinal herbs, and exotic species.",
              "While a formal inventory of fauna is not publicly available, the farm environment provides habitats for birds and living organisms within its diverse vegetation structure."
            ]}
            imageSrc="/bamboo1.jpg"
            imageAlt="Bamboo grove and visitors at Soans Farm"
            imageCaption="Bamboo contributes to the estate’s layered plant habitats."
          />
        </div>
      </section>

      {/* 04. LAYERED AGRICULTURAL LANDSCAPE */}
      <section className="relative border-b border-farm-border bg-farm-surface py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="04. VERTICAL ARCHITECTURE"
            title="Layered Crop Architecture"
            subtitle="Multi-level agricultural canopy design"
          />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col border border-farm-border bg-farm-card p-7">
              <span className="mb-3 text-[0.65rem] tracking-[0.2em] text-farm-gold">LEVEL 01</span>
              <h4 className="mb-2 font-editorial text-[1.35rem] text-farm-cream">Ground & Field Level</h4>
              <p className="text-[0.85rem] text-farm-stone">Open pineapple fields, low cover crops, and medicinal ground plants utilizing direct sun exposure.</p>
            </div>
            <div className="flex flex-col border border-farm-border bg-farm-card p-7">
              <span className="mb-3 text-[0.65rem] tracking-[0.2em] text-farm-gold">LEVEL 02</span>
              <h4 className="mb-2 font-editorial text-[1.35rem] text-farm-cream">Understory & Shade Crops</h4>
              <p className="text-[0.85rem] text-farm-stone">Shade-associated crops like cocoa, pepper vines, and nursery plants thriving under filtered sunlight.</p>
            </div>
            <div className="flex flex-col border border-farm-border bg-farm-card p-7">
              <span className="mb-3 text-[0.65rem] tracking-[0.2em] text-farm-gold">LEVEL 03</span>
              <h4 className="mb-2 font-editorial text-[1.35rem] text-farm-cream">Mid-Canopy Fruit Trees</h4>
              <p className="text-[0.85rem] text-farm-stone">Diverse tropical fruit trees including rambutan, mangosteen, durian, and nutmeg specimens.</p>
            </div>
            <div className="flex flex-col border border-farm-border bg-farm-card p-7">
              <span className="mb-3 text-[0.65rem] tracking-[0.2em] text-farm-gold">LEVEL 04</span>
              <h4 className="mb-2 font-editorial text-[1.35rem] text-farm-cream">Upper Palms & Bamboo</h4>
              <p className="text-[0.85rem] text-farm-stone">Tall areca nut palms, coconut crowns, and towering giant bamboo groves defining the sky skyline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. CLOSING VISUAL SECTION */}
      <FullWidthImageSection
        imageSrc="/hero.png"
        imageAlt="Pineapple fields beneath tropical canopy at Soans Farm"
        caption="Pineapple cultivation beneath the estate’s tropical canopy."
      />

    </div>
  );
}
