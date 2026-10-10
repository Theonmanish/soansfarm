
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
    <div>
      {/* Page Hero */}
      <PageHero
        category="FARM IDENTITY & HERITAGE"
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
      <section id="overview" className="relative border-b border-farm-border py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="01. OVERVIEW"
            title="A Farm Shaped by Cultivation"
            subtitle="Agricultural production and botanical diversity"
          />

          <EditorialBlock
            title="A Living Agricultural Landscape"
            lead="Soans Farm developed as a long-term agricultural undertaking, bringing hilly terrain and previously uncultivated land into productive use."
            body={[
              "The farm combines pineapple fields, plantation crops, tropical fruit trees, spice cultivation, bamboo varieties, and diverse plant collections within a shared agricultural landscape.",
              "Its character lies in the relationship between productive farming and horticultural experimentation, where crop cultivation and the study of plant diversity have developed alongside one another over generations.",
            ]}
          />
        </div>
      </section>

      {/* 02. HISTORY & HERITAGE */}
      <section id="history" className="relative border-b border-farm-border bg-farm-surface py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
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
              "Early coconut cultivation struggled with shallow soil over laterite beds and limited irrigation. Through experimentation and intercropping, Alfred Soans introduced crops better suited to the land. Pineapple proved particularly important, eventually becoming the farm’s principal commercial crop.",
              "The project faced further difficulties during the Second World War, when declining agricultural returns and changing political circumstances threatened its continuation. Alfred Soans persisted in his efforts to preserve the farm, eventually securing its continued management under a lease.",
            ]}
            reverse={true}
          />

          <EditorialBlock
            number="AFTER 1947 — EXPANSION & DIVERSIFICATION"
            title="Building a Diverse Agricultural Farm"
            lead="Following India's independence, improvements in agricultural practices created opportunities for the farm to expand and diversify."
            body={[
              "Mechanisation and improved irrigation supported the development of cultivated land. Pineapple remained a major crop, while mango, sapota, pepper, cinnamon, nutmeg, cocoa, cashew, coconut, and vanilla broadened the farm’s agricultural output.",
              "This diversification enabled more extensive use of the land throughout the year and created additional employment opportunities for the surrounding community.",
              "In later decades, Dr. Livingston Chandramohan (L. C.) Soans, an agricultural scientist and botanist, further developed the farm's horticultural character together with his brother Irwin V Soans. Their work introduced exotic tropical fruit species, expanded plant collections, and cultivated diverse bamboo varieties, extending the farm's legacy beyond commercial agriculture.",
            ]}
          />
        </div>
      </section>

      {/* 03. PHILOSOPHY */}
      <section id="philosophy" className="relative border-b border-farm-border py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="03. PHILOSOPHY"
            title="Principles of Cultivation"
            subtitle="A practical approach to land, crops, and botanical exploration"
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col border-b border-farm-border py-6">
              <span className="mb-2 font-editorial text-3xl text-farm-gold">01</span>
              <h4 className="mb-2 font-editorial text-2xl text-farm-cream">Crop Diversification</h4>
              <p className="text-[0.9rem] leading-relaxed text-farm-stone">
                Growing a range of crops suited to the land, allowing different
                species to contribute to a varied agricultural system.
              </p>
            </div>

            <div className="flex flex-col border-b border-farm-border py-6">
              <span className="mb-2 font-editorial text-3xl text-farm-gold">02</span>
              <h4 className="mb-2 font-editorial text-2xl text-farm-cream">Agricultural Experimentation</h4>
              <p className="text-[0.9rem] leading-relaxed text-farm-stone">
                Exploring new crops and cultivation methods to identify what
                can thrive in the region's soil and climatic conditions.
              </p>
            </div>

            <div className="flex flex-col border-b border-farm-border py-6">
              <span className="mb-2 font-editorial text-3xl text-farm-gold">03</span>
              <h4 className="mb-2 font-editorial text-2xl text-farm-cream">Intercropping</h4>
              <p className="text-[0.9rem] leading-relaxed text-farm-stone">
                Making productive use of the land by cultivating compatible
                crops together rather than relying on a single crop.
              </p>
            </div>

            <div className="flex flex-col border-b border-farm-border py-6">
              <span className="mb-2 font-editorial text-3xl text-farm-gold">04</span>
              <h4 className="mb-2 font-editorial text-2xl text-farm-cream">Adaptation to the Land</h4>
              <p className="text-[0.9rem] leading-relaxed text-farm-stone">
                Responding to local soil, terrain, rainfall, and irrigation
                conditions when selecting crops and cultivation practices.
              </p>
            </div>

            <div className="flex flex-col border-b border-farm-border py-6">
              <span className="mb-2 font-editorial text-3xl text-farm-gold">05</span>
              <h4 className="mb-2 font-editorial text-2xl text-farm-cream">Horticultural Diversity</h4>
              <p className="text-[0.9rem] leading-relaxed text-farm-stone">
                Extending cultivation beyond commercial crops through tropical
                fruit species, bamboo, and diverse plant collections.
              </p>
            </div>

            <div className="flex flex-col border-b border-farm-border py-6">
              <span className="mb-2 font-editorial text-3xl text-farm-gold">06</span>
              <h4 className="mb-2 font-editorial text-2xl text-farm-cream">Knowledge Through Practice</h4>
              <p className="text-[0.9rem] leading-relaxed text-farm-stone">
                Developing agricultural knowledge through continued cultivation,
                observation, and experimentation across generations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
