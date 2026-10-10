import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CropPlantFeature from '../components/CropPlantFeature';
import ImageFigure from '../components/ImageFigure';

export default function Cultivation() {
  const cropList = [
    {
      name: 'Pineapple Plantation',
      category: 'PRIMARY COMMERCIAL CROP',
      description: 'The crop most closely associated with the farm, cultivated as commercial produce within the mixed agricultural landscape. Fresh farm products and juice are part of the visitor experience.',
      specs: [
        { label: 'Cultivation Style', value: 'Open field & inter-cropped beds' },
        { label: 'Heritage', value: 'Introduced systematically in late 1920s' }
      ],
      imageCaption: 'Pineapple rows beneath the farm canopy.',
    },
    {
      name: 'Cocoa Plantation',
      category: 'SHADE UNDERSTORY CROP',
      description: 'Grown as a shade-tolerant understory plant beneath taller trees, producing pods directly from its trunk and larger branches (cauliflory).',
      specs: [
        { label: 'Canopy Placement', value: 'Lower-tier shaded understory' },
        { label: 'Growth Habit', value: 'Cauliflorous trunk fruiting' }
      ],
    },
    {
      name: 'Areca Nut Plantation',
      category: 'VERTICAL PALM CANOPY',
      description: 'A major coastal Karnataka plantation crop whose slender palms and high crowns provide vertical structure and form part of multi-crop arrangements.',
      specs: [
        { label: 'Regional Role', value: 'Major coastal Karnataka crop' },
        { label: 'Structural Layer', value: 'High vertical canopy crown' }
      ],
    },
    {
      name: 'Bamboo Groves',
      category: 'LANDSCAPE CANOPY & PATHWAYS',
      description: 'Features multiple varieties—including giant bamboo, Burmese bamboo, yellow bamboo, Buddha’s belly bamboo, and small-leaf garden bamboo—forming shaded pathways and distinct landscape architecture.',
      specs: [
        { label: 'Varieties Documented', value: 'Giant, Burmese, Yellow, Buddha’s Belly, Garden' },
        { label: 'Landscape Function', value: 'Shaded walking pathways & windbreaks' }
      ],
      imageCaption: 'Bamboo grove at Soans Farm.',
    }
  ];

  return (
    <div>
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
      <section className="relative border-b border-farm-border py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="01. KEY CROPS"
            title="Primary farm Crops"
            subtitle="Commercial harvest & plantation canopy elements"
          />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {cropList.map((crop, idx) => (
              <CropPlantFeature
                key={idx}
                name={crop.name}
                category={crop.category}
                description={crop.description}
                specs={crop.specs}
                imageCaption={crop.imageCaption}
                imageSrc={crop.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 02. OTHER AGRICULTURAL ACTIVITIES */}
      <section className="relative border-b border-farm-border bg-farm-surface py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="02. BROADER OUTPUT"
            title="Other Agricultural Activities & Spices"
            subtitle="Tropical fruits, spices, cereals, and nursery material"
          />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-farm-border bg-farm-card p-8">
              <span className="mb-5 inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.2em] text-farm-gold before:inline-block before:h-px before:w-6 before:bg-farm-gold">TROPICAL FRUITS</span>
              <h4 className="mb-3 font-editorial text-[1.4rem] text-farm-cream">Exotic Tropical Fruit Trees</h4>
              <p className="text-[0.9rem] text-farm-stone">
                Rambutan, mangosteen, durian, langsat, longan, dragon fruit, jaboticaba, abiu, and miracle fruit species.
              </p>
            </div>
            <div className="border border-farm-border bg-farm-card p-8">
              <span className="mb-5 inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.2em] text-farm-gold before:inline-block before:h-px before:w-6 before:bg-farm-gold">SPICE CULTIVATION</span>
              <h4 className="mb-3 font-editorial text-[1.4rem] text-farm-cream">Farm Spices</h4>
              <p className="text-[0.9rem] text-farm-stone">
                Black pepper vines, vanilla, nutmeg, cinnamon, clove, and allspice cultivated within shaded crop plots.
              </p>
            </div>
            <div className="border border-farm-border bg-farm-card p-8">
              <span className="mb-5 inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.2em] text-farm-gold before:inline-block before:h-px before:w-6 before:bg-farm-gold">NURSERY PROPAGATION</span>
              <h4 className="mb-3 font-editorial text-[1.4rem] text-farm-cream">Planting & Propagation Material</h4>
              <p className="text-[0.9rem] text-farm-stone">
                Nursery-propagated material for fruit trees, ornamental plants, bamboo varieties, and medicinal herbs.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 03. BAMBOO GROVE — OXYGEN PARK */}
      
      <section className="relative border-b border-farm-border bg-farm-surface py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="03. BAMBOO COLLECTION"
            title="The Oxygen Park"
            subtitle="Bamboo, botanical diversity, and a connection to place"
          />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="text-[clamp(1.15rem,1.8vw,1.35rem)] font-light leading-relaxed text-farm-cream">
                At Soans Farm, the bamboo grove—known as the Oxygen Park—
                brings together approximately 55 varieties of bamboo in a
                distinctive botanical collection.
              </p>

              <p>
                Its significance extends beyond the farm. The name Moodbidri
                is commonly associated with the words <em>Moodu</em>, meaning
                east, and <em>Bidiru</em>, meaning bamboo. The name is linked
                to the bamboo that once grew abundantly across the region,
                reflecting a landscape in which this remarkable grass was
                part of the area's natural identity.
              </p>

              <p>
                The collection at Soans Farm offers a contemporary connection
                to that heritage. With its varied forms, heights, and growth
                patterns, bamboo adds botanical richness to the farm while
                demonstrating the diversity of a plant group valued for its
                rapid growth, versatility, and role in carbon storage.
              </p>
            </div>

            <div>
              <ImageFigure src="/bamboo1.jpg" alt="Bamboo grove at Soans Farm" caption="A collection of approximately 55 bamboo varieties at Soans Farm." />
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
