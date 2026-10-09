import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CropPlantFeature from '../components/CropPlantFeature';
import FullWidthImageSection from '../components/FullWidthImageSection';

export default function Cultivation() {
  const cropList = [
    {
      name: 'Pineapple Plantation',
      category: 'PRIMARY COMMERCIAL CROP',
      description: 'The crop most closely associated with the estate, cultivated as commercial produce within the mixed agricultural landscape. Fresh farm products and juice are part of the visitor experience.',
      specs: [
        { label: 'Cultivation Style', value: 'Open field & inter-cropped beds' },
        { label: 'Heritage', value: 'Introduced systematically in late 1920s' }
      ],
      imageTitle: 'Pineapple Plantation Field',
      imageCaption: 'Field cultivation of commercial pineapple.'
    },
    {
      name: 'Cocoa Plantation',
      category: 'SHADE UNDERSTORY CROP',
      description: 'Grown as a shade-tolerant understory plant beneath taller trees, producing pods directly from its trunk and larger branches (cauliflory).',
      specs: [
        { label: 'Canopy Placement', value: 'Lower-tier shaded understory' },
        { label: 'Growth Habit', value: 'Cauliflorous trunk fruiting' }
      ],
      imageTitle: 'Cocoa Pods & Trunk Growth',
      imageCaption: 'Shade-grown cocoa beneath plantation canopy.'
    },
    {
      name: 'Areca Nut Plantation',
      category: 'VERTICAL PALM CANOPY',
      description: 'A major coastal Karnataka plantation crop whose slender palms and high crowns provide vertical structure and form part of multi-crop arrangements.',
      specs: [
        { label: 'Regional Role', value: 'Major coastal Karnataka crop' },
        { label: 'Structural Layer', value: 'High vertical canopy crown' }
      ],
      imageTitle: 'Areca Nut Slender Palms',
      imageCaption: 'Slender areca palms forming vertical architectural columns.'
    },
    {
      name: 'Bamboo Groves',
      category: 'LANDSCAPE CANOPY & PATHWAYS',
      description: 'Features multiple varieties—including giant bamboo, Burmese bamboo, yellow bamboo, Buddha’s belly bamboo, and small-leaf garden bamboo—forming shaded pathways and distinct landscape architecture.',
      specs: [
        { label: 'Varieties Documented', value: 'Giant, Burmese, Yellow, Buddha’s Belly, Garden' },
        { label: 'Landscape Function', value: 'Shaded walking pathways & windbreaks' }
      ],
      imageTitle: 'Giant Bamboo Pathways',
      imageCaption: 'Shaded bamboo grove pathway.'
    }
  ];

  return (
    <div className="cultivation-page">
      {/* Page Hero Header */}
      <PageHero
        category="AGRICULTURE & CULTIVATION"
        routeNum="03"
        title="Cultivation & Plantations"
        subtitle="Commercial crops, multi-tier plantations, and agricultural output"
        leadText="Soans Farm operates as a diverse working agricultural landscape where commercial produce, plantation crops, shade-tolerant understory plants, and nursery propagation coexist within structured environmental layers."
        metaTags={[
          { key: 'PRIMARY PRODUCE', value: 'PINEAPPLE, ARECA NUT, COCOA, SPICES' },
          { key: 'FRUIT SPECIES', value: 'RAMBUTAN, MANGOSTEEN, DURIAN, EXOTICS' },
          { key: 'PROPAGATION', value: 'HORTICULTURAL NURSERY MATERIAL' }
        ]}
      />

      {/* 01. KEY CROPS & PLANTATIONS */}
      <section className="section">
        <div className="container">
          <SectionHeading
            number="01. KEY CROPS"
            title="Primary Estate Crops"
            subtitle="Commercial harvest & plantation canopy elements"
          />
          <div className="editorial-grid grid-2">
            {cropList.map((crop, idx) => (
              <CropPlantFeature
                key={idx}
                name={crop.name}
                category={crop.category}
                description={crop.description}
                specs={crop.specs}
                imageTitle={crop.imageTitle}
                imageCaption={crop.imageCaption}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 02. OTHER AGRICULTURAL ACTIVITIES */}
      <section className="section section-surface">
        <div className="container">
          <SectionHeading
            number="02. BROADER OUTPUT"
            title="Other Agricultural Activities & Spices"
            subtitle="Tropical fruits, spices, cereals, and nursery material"
          />
          <div className="editorial-grid grid-3">
            <div className="activity-card">
              <span className="tag-label">TROPICAL FRUITS</span>
              <h4>Exotic Tropical Fruit Trees</h4>
              <p>
                Rambutan, mangosteen, durian, langsat, longan, dragon fruit, jaboticaba, abiu, and miracle fruit species.
              </p>
            </div>
            <div className="activity-card">
              <span className="tag-label">SPICE CULTIVATION</span>
              <h4>Documented Estate Spices</h4>
              <p>
                Black pepper vines, vanilla, nutmeg, cinnamon, clove, and allspice cultivated within shaded crop plots.
              </p>
            </div>
            <div className="activity-card">
              <span className="tag-label">NURSERY PROPAGATION</span>
              <h4>Planting & Propagation Material</h4>
              <p>
                Nursery-propagated material for fruit trees, ornamental plants, bamboo varieties, and medicinal herbs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. CLOSING VISUAL SECTION */}
      <FullWidthImageSection
        title="Plantation Canopy Visual — Soans Farm"
        category="AGRICULTURAL ARCHIVE"
        caption="Visual representation of multi-crop arrangements and seasonal harvests."
      />

      <style>{`
        .activity-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border-subtle);
          padding: 2rem;
        }

        .activity-card h4 {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          margin-bottom: 0.75rem;
        }

        .activity-card p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
}
