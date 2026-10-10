import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import EditorialBlock from '../components/EditorialBlock';
import FullWidthImageSection from '../components/FullWidthImageSection';

export default function Visit() {
  return (
    <div className="visit-page">
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
      <section className="section">
        <div className="container">
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
            imageTitle="Visitor Pathway Visual"
            imageCaption="Unpaved plantation trail visual placeholder."
          />
        </div>
      </section>

      {/* 02. WHAT VISITORS CAN EXPLORE */}
      <section className="section section-surface">
        <div className="container">
          <SectionHeading
            number="02. EXPLORATION"
            title="What Visitors Can Explore"
            subtitle="Plantations, plant collections, and labyrinths"
          />
          <div className="editorial-grid grid-3">
            <div className="visit-card">
              <span className="tag-label">CROP TRAILS</span>
              <h4>Commercial Plantations</h4>
              <p>Walk through pineapple fields, shade-grown cocoa plots, and tall areca nut palm rows.</p>
            </div>
            <div className="visit-card">
              <span className="tag-label">HORTICULTURE</span>
              <h4>Living Botanical Collection</h4>
              <p>Observe rare tropical fruit trees, exotic specimen plantings, and bamboo varieties.</p>
            </div>
            <div className="visit-card">
              <span className="tag-label">LABYRINTH</span>
              <h4>Labyrinth</h4>
              <p>Walk the single continuous winding paths of the Cretan and French cathedral labyrinths.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. EDUCATIONAL VISITS */}
      <section className="section">
        <div className="container">
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
            imageTitle="Academic Student Visit"
            imageCaption="Student observation group visual placeholder."
            reverse={true}
          />
        </div>
      </section>

      {/* 04. PRACTICAL INFORMATION & LOCATION */}
      <section className="section section-surface">
        <div className="container">
          <SectionHeading
            number="04. REGIONAL CONTEXT"
            title="Location & Practical Guidelines"
            subtitle="Moodbidri region, Coastal Karnataka"
          />
          <div className="editorial-grid grid-2">
            <div className="location-box">
              <span className="tag-label">ESTATE LOCATION</span>
              <h3>Moodbidri Region</h3>
              <p style={{ marginTop: '0.5rem' }}>
                Soans Farm is situated in the Moodbidri region of Dakshina Kannada district in coastal Karnataka, India.
              </p>
              <div className="meta-list">
                <p>▪ Region: Coastal Karnataka / Dakshina Kannada</p>
                <p>▪ Terrain: Rolling hilly agricultural hinterland</p>
              </div>
            </div>

            <div className="location-box">
              <span className="tag-label">VISITOR GUIDELINES SHELL</span>
              <h3>Visitor Information Placeholder</h3>
              <p style={{ marginTop: '0.5rem' }}>
                Formal visiting hours, entry details, and seasonal access schedules will be updated upon final content integration.
              </p>
              <div className="meta-list">
                <p>▪ Status: Visual shell ready for finalized visitor schedules</p>
                <p>▪ Notice: Working agricultural estate guidelines apply</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING VISUAL SECTION */}
      <FullWidthImageSection
        title="Estate Access Road & Entrance Visual"
        category="VISITOR ARCHIVE"
        caption="Entrance driveway visual placeholder for Soans Farm."
      />

      <style>{`
        .visit-card, .location-box {
          background-color: var(--bg-card);
          border: 1px solid var(--border-subtle);
          padding: 2rem;
        }

        .visit-card h4, .location-box h3 {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
        }

        .visit-card p, .location-box p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .meta-list {
          margin-top: 1.25rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
          font-size: 0.8rem;
          color: var(--text-muted);
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
      `}</style>
    </div>
  );
}
