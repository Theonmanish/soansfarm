
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import EditorialBlock from '../components/EditorialBlock';

export default function TheFarm() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="the-farm-page">
      {/* Page Hero */}
      <PageHero
        category="ESTATE IDENTITY & HERITAGE"
        routeNum="01"
        title="The Farm"
        subtitle="A legacy of agricultural innovation in coastal Karnataka"
        leadText="Located near Moodbidri in coastal Karnataka, Soans Farm has evolved through generations of agricultural experimentation, crop diversification, and tropical horticulture. Its history reflects a sustained effort to cultivate challenging terrain, develop productive farming systems, and introduce crops suited to the region."
        metaTags={[
          {
            key: 'PROJECT BEGAN',
            value: '1926',
          },
          {
            key: 'AGRICULTURAL LEGACY',
            value: 'PINEAPPLE & MIXED CULTIVATION',
          },
        ]}
      />

      {/* 01. OVERVIEW */}
      <section id="overview" className="section">
        <div className="container">
          <SectionHeading
            number="01. OVERVIEW"
            title="A Farm Shaped by Cultivation"
            subtitle="Agricultural production and botanical diversity"
          />

          <EditorialBlock
            title="A Living Agricultural Landscape"
            lead="Soans Farm developed as a long-term agricultural undertaking, bringing hilly terrain and previously uncultivated land into productive use."
            body={[
              "The estate combines pineapple fields, plantation crops, tropical fruit trees, spice cultivation, bamboo varieties, and diverse plant collections within a shared agricultural landscape.",
              "Its character lies in the relationship between productive farming and horticultural experimentation, where crop cultivation and the study of plant diversity have developed alongside one another over generations.",
            ]}
            imageTitle="The Agricultural Landscape"
            imageCaption="A varied landscape shaped by successive generations of cultivation."
          />
        </div>
      </section>

      {/* 02. HISTORY & HERITAGE */}
      <section id="history" className="section section-surface">
        <div className="container">
          <SectionHeading
            number="02. HISTORY & HERITAGE"
            title="A History of Agricultural Enterprise"
            subtitle="From the Basel Mission initiative to successive generations of cultivation"
          />

          <EditorialBlock
            number="1926 — THE BEGINNING"
            title="An Agricultural Project Takes Root"
            lead="In 1926, the Basel Mission initiated an agricultural project to bring the hilly terrain and non-forested grasslands of the Moodbidri region under cultivation."
            body={[
              "The project was undertaken under the leadership of Rev. Fischer, a Basel Mission missionary based in Karkala. Alfred Soans, a young agricultural graduate of the Allahabad Agricultural Institute, joined the undertaking in 1928 to advance its agricultural development.",
              "Early coconut cultivation struggled with shallow soil over laterite beds and limited irrigation. Through experimentation and intercropping, Alfred Soans introduced crops better suited to the land. Pineapple proved particularly important, eventually becoming the estate’s principal commercial crop.",
              "The project faced further difficulties during the Second World War, when declining agricultural returns and changing political circumstances threatened its continuation. Alfred Soans persisted in his efforts to preserve the farm, eventually securing its continued management under a lease.",
            ]}
            imageTitle="The Early Agricultural Project"
            imageCaption="Historical records documenting the development of Soans Farm."
            reverse={true}
          />

          <EditorialBlock
            number="AFTER 1947 — EXPANSION & DIVERSIFICATION"
            title="Building a Diverse Agricultural Farm"
            lead="Following India's independence, improvements in agricultural practices created opportunities for the estate to expand and diversify."
            body={[
              "Mechanisation and improved irrigation supported the development of cultivated land. Pineapple remained a major crop, while mango, sapota, pepper, cinnamon, nutmeg, cocoa, cashew, coconut, and vanilla broadened the estate’s agricultural output.",
              "This diversification enabled more extensive use of the land throughout the year and created additional employment opportunities for the surrounding community.",
              "In later decades, Dr. Livingston Chandramohan (L. C.) Soans, an agricultural scientist and botanist, further developed the estate's horticultural character. His work introduced unusual tropical fruit species, expanded plant collections, and cultivated diverse bamboo varieties, extending the farm's legacy beyond commercial agriculture.",
            ]}
            imageTitle="A Diversified Estate"
            imageCaption="Mixed cropping and successive generations of horticultural development."
          />
        </div>
      </section>

      {/* 03. PHILOSOPHY */}
      <section id="philosophy" className="section">
        <div className="container">
          <SectionHeading
            number="03. PHILOSOPHY"
            title="Principles of Cultivation"
            subtitle="A practical approach to land, crops, and botanical exploration"
          />

          <div className="editorial-grid grid-3">
            <div className="philosophy-card-seamless">
              <span className="phi-num">01</span>
              <h4>Crop Diversification</h4>
              <p>
                Growing a range of crops suited to the land, allowing different
                species to contribute to a varied agricultural system.
              </p>
            </div>

            <div className="philosophy-card-seamless">
              <span className="phi-num">02</span>
              <h4>Agricultural Experimentation</h4>
              <p>
                Exploring new crops and cultivation methods to identify what
                can thrive in the region's soil and climatic conditions.
              </p>
            </div>

            <div className="philosophy-card-seamless">
              <span className="phi-num">03</span>
              <h4>Intercropping</h4>
              <p>
                Making productive use of the land by cultivating compatible
                crops together rather than relying on a single crop.
              </p>
            </div>

            <div className="philosophy-card-seamless">
              <span className="phi-num">04</span>
              <h4>Adaptation to the Land</h4>
              <p>
                Responding to local soil, terrain, rainfall, and irrigation
                conditions when selecting crops and cultivation practices.
              </p>
            </div>

            <div className="philosophy-card-seamless">
              <span className="phi-num">05</span>
              <h4>Horticultural Diversity</h4>
              <p>
                Extending cultivation beyond commercial crops through tropical
                fruit species, bamboo, and diverse plant collections.
              </p>
            </div>

            <div className="philosophy-card-seamless">
              <span className="phi-num">06</span>
              <h4>Knowledge Through Practice</h4>
              <p>
                Developing agricultural knowledge through continued cultivation,
                observation, and experimentation across generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .philosophy-card-seamless {
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
        }

        .phi-num {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: var(--text-gold);
          margin-bottom: 0.5rem;
        }

        .philosophy-card-seamless h4 {
          margin-bottom: 0.5rem;
          font-family: var(--font-serif);
          font-size: 1.35rem;
        }

        .philosophy-card-seamless p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
}