import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import EditorialBlock from '../components/EditorialBlock';
import FullWidthImageSection from '../components/FullWidthImageSection';

export default function TheLand() {
  return (
    <div className="the-land-page">
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
      <section className="section">
        <div className="container">
          <SectionHeading
            number="01. LANDSCAPE"
            title="Hilly Terrain & Topography"
            subtitle="Coastal Karnataka geography and natural contours"
          />
          <EditorialBlock
            title="Terrain Adaptation & Contours"
            lead="The landscape is defined by gentle slopes, hillocks, and natural drainage paths characteristic of the coastal Karnataka hinterland."
            body={[
              "Rather than flattening the terrain, agricultural plots and crop terraces adapt to the natural slope, enabling effective rainwater management and soil preservation across seasons."
            ]}
            imageTitle="Hilly Landscape Contour"
            imageCaption="Topographical elevation visual record of the Moodbidri region."
          />
        </div>
      </section>

      {/* 02. CLIMATE & HYDROLOGY */}
      <section className="section section-surface">
        <div className="container">
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
            imageTitle="Monsoon Rainfall & Hydrology"
            imageCaption="Rainwater collection and canopy hydrology visual placeholder."
            reverse={true}
          />
        </div>
      </section>

      {/* 03. PLANT LIFE & BIODIVERSITY */}
      <section className="section">
        <div className="container">
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
            imageTitle="Biodiversity Canopy Study"
            imageCaption="Visual study of canopy density and understory plant life."
          />
        </div>
      </section>

      {/* 04. LAYERED AGRICULTURAL LANDSCAPE */}
      <section className="section section-surface">
        <div className="container">
          <SectionHeading
            number="04. VERTICAL ARCHITECTURE"
            title="Layered Crop Architecture"
            subtitle="Multi-level agricultural canopy design"
          />
          <div className="editorial-grid grid-4">
            <div className="layer-card">
              <span className="layer-num">LEVEL 01</span>
              <h4>Ground & Field Level</h4>
              <p>Open pineapple fields, low cover crops, and medicinal ground plants utilizing direct sun exposure.</p>
            </div>
            <div className="layer-card">
              <span className="layer-num">LEVEL 02</span>
              <h4>Understory & Shade Crops</h4>
              <p>Shade-associated crops like cocoa, pepper vines, and nursery plants thriving under filtered sunlight.</p>
            </div>
            <div className="layer-card">
              <span className="layer-num">LEVEL 03</span>
              <h4>Mid-Canopy Fruit Trees</h4>
              <p>Diverse tropical fruit trees including rambutan, mangosteen, durian, and nutmeg specimens.</p>
            </div>
            <div className="layer-card">
              <span className="layer-num">LEVEL 04</span>
              <h4>Upper Palms & Bamboo</h4>
              <p>Tall areca nut palms, coconut crowns, and towering giant bamboo groves defining the sky skyline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. CLOSING VISUAL SECTION */}
      <FullWidthImageSection
        title="Panoramic Landscape Visual — Soans Estate"
        category="LANDSCAPE ARCHIVE"
        caption="Full-width visual record of coastal Karnataka terrain and layered canopy."
      />

      <style>{`
        .layer-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border-subtle);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
        }

        .layer-num {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: var(--text-gold);
          margin-bottom: 0.75rem;
        }

        .layer-card h4 {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          margin-bottom: 0.5rem;
        }

        .layer-card p {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
}
