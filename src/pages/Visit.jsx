import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import EditorialBlock from '../components/EditorialBlock';

export default function Visit() {
  return (
    <div>
      {/* Page Hero Header */}
      <PageHero
        category="VISITOR INFORMATION"
        routeNum="08"
        title="Visiting Soans Farm"
        subtitle="Practical information for estate walks, observations, and educational visits"
        leadText="A visit to Soans Farm offers an introduction to a working tropical agricultural estate. Visitors encounter mixed plantations, fruit collections, bamboo groves, spice plantings, and walking labyrinths through estate pathways."
        metaTags={[
          { key: 'LOCATION', value: 'MOODBIDRI, DAKSHINA KANNADA' },
          { key: 'ESTATE TYPE', value: 'WORKING AGRICULTURAL & BOTANICAL ESTATE' },
          { key: 'VISIT FOCUS', value: 'AGRICULTURAL OBSERVATION & BOTANICAL STUDY' }
        ]}
      />

      {/* 01. VISITING THE FARM */}
      <section className="relative border-b border-farm-border py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="01. EXPECTATIONS"
            title="What Visitors Can Expect"
            subtitle="An authentic working estate landscape"
          />
          <EditorialBlock
            title="Working Agricultural Character"
            lead="Visitors explore a real working farm environment shaped by weather, monsoons, and seasonal harvests rather than a manicured city park."
            body={[
              "Pathways navigate through active plantation beds, shade understories, fruit tree collections, and bamboo groves.",
              "Footwear suitable for unpaved walking paths and variable terrain is recommended when walking through plantation zones."
            ]}
          />
        </div>
      </section>

      {/* 02. WHAT VISITORS CAN EXPLORE */}
      <section className="relative border-b border-farm-border bg-farm-surface py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="02. EXPLORATION"
            title="What Visitors Can Explore"
            subtitle="Plantations, plant collections, and labyrinths"
          />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-farm-border bg-farm-card p-8">
              <span className="mb-5 inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.2em] text-farm-gold before:inline-block before:h-px before:w-6 before:bg-farm-gold">CROP TRAILS</span>
              <h4 className="mb-2 font-editorial text-2xl text-farm-cream">Commercial Plantations</h4>
              <p className="text-[0.9rem] leading-relaxed text-farm-stone">Walk through pineapple fields, shade-grown cocoa plots, and tall areca nut palm rows.</p>
            </div>
            <div className="border border-farm-border bg-farm-card p-8">
              <span className="mb-5 inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.2em] text-farm-gold before:inline-block before:h-px before:w-6 before:bg-farm-gold">HORTICULTURE</span>
              <h4 className="mb-2 font-editorial text-2xl text-farm-cream">Living Botanical Collection</h4>
              <p className="text-[0.9rem] leading-relaxed text-farm-stone">Observe rare tropical fruit trees, exotic specimen plantings, and bamboo varieties.</p>
            </div>
            <div className="border border-farm-border bg-farm-card p-8">
              <span className="mb-5 inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.2em] text-farm-gold before:inline-block before:h-px before:w-6 before:bg-farm-gold">LABYRINTH</span>
              <h4 className="mb-2 font-editorial text-2xl text-farm-cream">Labyrinth</h4>
              <p className="text-[0.9rem] leading-relaxed text-farm-stone">Walk the single continuous winding paths of the Cretan and French cathedral labyrinths.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. EDUCATIONAL VISITS */}
      <section className="relative border-b border-farm-border py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="03. LEARNING"
            title="Educational & Academic Visits"
            subtitle="Student groups, botanists, and agricultural learners"
          />
          <EditorialBlock
            title="Field Study & Observation"
            lead="The estate has long welcomed school and college student groups interested in tropical horticulture, multi-tier agriculture, and plant science."
            body={[
              "Educational visits focus on direct observation of crops, shade cultivation, soil moisture retention, and botanical taxonomy."
            ]}
            reverse={true}
          />
        </div>
      </section>

      {/* 04. PRACTICAL INFORMATION & LOCATION */}
      <section className="relative border-b border-farm-border bg-farm-surface py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="04. REGIONAL CONTEXT"
            title="Location & Practical Guidelines"
            subtitle="Moodbidri region, Coastal Karnataka"
          />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="border border-farm-border bg-farm-card p-8">
              <span className="mb-5 inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.2em] text-farm-gold before:inline-block before:h-px before:w-6 before:bg-farm-gold">ESTATE LOCATION</span>
              <h3 className="mb-2 font-editorial text-2xl text-farm-cream">Moodbidri Region</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-farm-stone">
                Soans Farm is situated in the Moodbidri region of Dakshina Kannada district in coastal Karnataka, India.
              </p>
              <div className="mt-5 flex flex-col gap-1 border-t border-farm-border pt-4 text-sm text-farm-muted">
                <p className="text-[0.9rem] leading-relaxed text-farm-stone">▪ Region: Coastal Karnataka / Dakshina Kannada</p>
                <p className="text-[0.9rem] leading-relaxed text-farm-stone">▪ Terrain: Rolling hilly agricultural hinterland</p>
              </div>
            </div>

            <div className="border border-farm-border bg-farm-card p-8">
              <span className="mb-5 inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.2em] text-farm-gold before:inline-block before:h-px before:w-6 before:bg-farm-gold">VISITOR GUIDELINES SHELL</span>
              <h3 className="mb-2 font-editorial text-2xl text-farm-cream">Visiting Details</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-farm-stone">
                Formal visiting hours, entry details, and seasonal access schedules will be updated upon final content integration.
              </p>
              <div className="mt-5 flex flex-col gap-1 border-t border-farm-border pt-4 text-sm text-farm-muted">
                <p className="text-[0.9rem] leading-relaxed text-farm-stone">▪ Status: Visual shell ready for finalized visitor schedules</p>
                <p className="text-[0.9rem] leading-relaxed text-farm-stone">▪ Notice: Working agricultural estate guidelines apply</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
