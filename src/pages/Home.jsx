import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';
import SectionHeading from '../components/SectionHeading';


export default function Home() {
  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="home-hero">
        <div className="hero-bg-frame">
          <PlaceholderImage
            aspectRatio="21-9"
            title="Soans Farm — Moodbidri Landscape"
            category="AGRICULTURAL Farm ARCHIVE"
            fullBleed={true}
          />
        </div>
        <div className="container hero-content-container">
          <div className="hero-text-wrapper">
            <span className="tag-label">Farm OVERVIEW</span>
            <h1 className="hero-main-title">SOANS FARM</h1>
            <p className="hero-intro-statement">
              A World Of Horticultural And Botanical Diversity
            </p>
            <p className="lead">
              A long-established agricultural farm, horticultural collection, and diverse cultivated landscape in coastal Karnataka.
            </p>




          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="section section-surface">
        <div className="container">
          <div className="editorial-grid grid-asymmetric-left">
            <div className="intro-text">
              <SectionHeading
                number="01. farm IDENTITY"
                title="A Working Agricultural Landscape"
                subtitle="Decades of horticultural experimentation & cultivation"
              />
              <p className="lead">
                Soans Farm functions as a working agricultural farm, combining commercial plantations, fruit cultivation, plant collections, nursery activity, bamboo groves, and distinctive walking labyrinths.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Developed over decades, the farm brings together productive agriculture and an extensive living botanical collection in coastal Karnataka.
              </p>
            </div>
            <div className="intro-visual">
              <PlaceholderImage
                aspectRatio="4-3"
                title="Farm Overview Visual"
                category="Farm COMPOSITION"
                caption="Layered agricultural canopy and plantation topography."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE Farm / HISTORY SECTION */}
      <section className="section">
        <div className="container">
          <div className="editorial-grid grid-asymmetric-right">
            <div className="Farm-visual">
              <PlaceholderImage
                aspectRatio="3-4"
                title="Archival Heritage Visual"
                category="HISTORICAL ARCHIVE"
                caption="Archival representation of Farm development."
              />
            </div>
            <div className="Farm-text">
              <SectionHeading
                number="02. HERITAGE & PHILOSOPHY"
                title="The Farm & Agricultural Legacy"
                subtitle="Rooted in practical stewardship and crop diversity"
              />
              <p className="lead">
                The Farm's identity has been shaped by generations of agricultural practice, testing fruit species from diverse tropical regions and integrating traditional and alternative structures into the landscape.
              </p>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/the-farm#history" className="btn-editorial">
                  <span>READ HISTORY</span>
                  <ChevronRight size={14} />
                </Link>
                <Link to="/the-farm#philosophy" className="btn-editorial">
                  <span>OUR PHILOSOPHY</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 4. BOTANICAL GARDEN SECTION */}
      <section className="section section-surface">
        <div className="container">
          <div className="editorial-grid grid-asymmetric-right">
            
            <div>
              <SectionHeading
                number="03. BOTANICAL COLLECTION"
                title="Decades of Plant Diversity"
                subtitle="An informal setting for horticultural study"
              />
              <p className="lead">
                Developed gradually over decades, the living plant collection encompasses commercial fruit crops, exotic tropical species, spices, bamboo varieties, and medicinal herbs.
              </p>
              <p style={{ marginTop: '1rem' }}>
                The collection supports agricultural experimentation while preserving rare specimens and providing planting material for propagation.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <a
                  href="https://tour.soansfarm.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial btn-gold"
                >
                  <span>EXPLORE PLANT CATALOGUE</span>

                </a>
              </div>
            </div>
            <div>
              <PlaceholderImage
                aspectRatio="1-1"
                title="Botanical Specimen Record"
                category="LIVING COLLECTION"
                caption="Documented tropical botanical collection."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXPLORE THE Farm TRANSITION */}
      <section className="section section-surface transition-section">
        <div className="container text-center-wrapper">
          <span className="tag-label">INTERACTIVE MAP & CATALOGUE</span>
          <h2>Explore the Virtual Tour & Farm Map</h2>
          <p className="lead" style={{ maxWidth: '720px', margin: '1rem auto 2.5rem' }}>
            Access the official Soans Farm spatial directory and plant catalogue.
          </p>
          <a
            href="https://tour.soansfarm.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial btn-gold"
          >

            <span>ENTER TOUR.SOANSFarm.IN</span>

          </a>
        </div>
      </section>



      {/* 6. CULTIVATION SECTION — SEAMLESS EDITORIAL SPREAD */}
      <section className="section">
        <div className="container">
          <SectionHeading
            number="04. CULTIVATION"
            title="Working Agricultural Character"
            subtitle="Commercial plantations and tropical fruit diversity"
          />
          <div className="editorial-grid grid-3">
            <div className="feature-block-seamless">
              <PlaceholderImage aspectRatio="4-3" title="Pineapple Plantation" category="KEY CROP" />
              <div className="seamless-body">
                <h4>Pineapple Plantation</h4>
                <p>Commercial produce closely associated with the long-term identity of the Farm.</p>
              </div>
            </div>

            <div className="feature-block-seamless">
              <PlaceholderImage aspectRatio="4-3" title="Cocoa Understory" category="SHADE CROP" />
              <div className="seamless-body">
                <h4>Cocoa & Shade Crops</h4>
                <p>Shade-tolerant crops cultivated beneath tall plantation palm canopies.</p>
              </div>
            </div>

            <div className="feature-block-seamless">
              <PlaceholderImage aspectRatio="4-3" title="Bamboo Groves" category="LANDSCAPE CANOPY" />
              <div className="seamless-body">
                <h4>Bamboo Groves</h4>
                <p>Multiple bamboo varieties forming shaded pathways and natural architecture.</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link to="/cultivation" className="btn-editorial">
              <span>VIEW ALL CULTIVATION AREAS</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>



      {/* 7. EXPERIENCES SECTION */}
      <section className="section">
        <div className="container">
          <SectionHeading
            number="05. VISITOR ELEMENTS"
            title="Farm Experiences & Walks"
            subtitle="Walks, plant observations, and labyrinth"
          />
          
            <div className="exp-block-seamless">
              <PlaceholderImage aspectRatio="16-9" title="Plantation Trails" category="Farm WALK" />
              <div className="seamless-body">
                <h4>Plantation & Crop Trails</h4>
                <p>Self-guided pathway exploration across multi-crop arrangements and shade canopies.</p>
              </div>
            </div>

            
          
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link to="/experiences" className="btn-editorial">
              <span>EXPLORE ALL VISITOR EXPERIENCES</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      

      
      {/* 8. ENERGY HEALING SECTION */}
      <section className="section section-surface">
        <div className="container">
          <SectionHeading
            number="06. ENERGY & REFLECTION"
            title="Spaces for Stillness"
            subtitle="Labyrinths, ancient patterns, and contemplative spaces"
          />

          <div className="editorial-grid grid-asymmetric-left">
            <div>
              <p className="lead">
                Beyond its agricultural and botanical collections, Soans Farm
                features distinctive structures inspired by traditional patterns,
                sacred geometry, and contemplative practices.
              </p>

              <p style={{ marginTop: '1rem' }}>
                From the winding pathways of its labyrinths to the Medicine Wheel,
                pyramid, and spiral patterns, these spaces invite visitors to slow
                down, explore their cultural associations, and experience the
                landscape through quiet walking and reflection.
              </p>

              <div style={{ marginTop: '2rem' }}>
                <Link to="/energy-healing" className="btn-editorial">
                  <span>EXPLORE ENERGY & REFLECTION</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            <div>
              <PlaceholderImage
                aspectRatio="16-9"
                title="Labyrinth & Contemplative Spaces"
                category="ENERGY & REFLECTION"
                caption="Distinctive patterns and spaces within the estate."
              />
            </div>
          </div>
        </div>
      </section>

      
      
      {/* 9. CONTACT SECTION */}

      <section className="section" id="contact">
        <div className="container">
          <SectionHeading
            number="08. CONTACT"
            title="Visit Soans Farm"
          />

          <div className="editorial-grid grid-3">
            {/* Instagram */}
            <div className="journal-block-seamless">
              <div style={{ padding: '1.25rem 0' }}>
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-gold)',
                    letterSpacing: '0.15em'
                  }}
                >
                  SOCIAL
                </span>

                <h4 style={{ margin: '0.75rem 0' }}>
                  Instagram
                </h4>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1rem'
                  }}
                >
                  Follow Soans Farm for updates from the Farm.
                </p>

                <a
                  href="https://www.instagram.com/soansFarm?xtok=MXZkOGx0bHN1MHQ1NQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--text-gold)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.05em',
                    textDecoration: 'none'
                  }}
                >
                  @soansFarm ↗
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="journal-block-seamless">
              <div style={{ padding: '1.25rem 0' }}>
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-gold)',
                    letterSpacing: '0.15em'
                  }}
                >
                  ENQUIRIES
                </span>

                <h4 style={{ margin: '0.75rem 0' }}>
                  Get in Touch
                </h4>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1rem'
                  }}
                >
                  Contact us for enquiries and further information.
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                  }}
                >
                  <a
                    href="tel:9449836361"
                    style={{
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      textDecoration: 'none'
                    }}
                  >
                    +91 94498 36361
                  </a>

                  <a
                    href="tel:9902331561"
                    style={{
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      textDecoration: 'none'
                    }}
                  >
                    +91 99023 31561
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="journal-block-seamless">
              <div style={{ padding: '1.25rem 0' }}>
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-gold)',
                    letterSpacing: '0.15em'
                  }}
                >
                  LOCATION
                </span>

                <h4 style={{ margin: '0.75rem 0' }}>
                  Soans Farm
                </h4>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1rem'
                  }}
                >
                  Moodbidri, Karnataka, India
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Soans+Farm+Moodbidri"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--text-gold)',
                    fontSize: '0.85rem',
                    textDecoration: 'none'
                  }}
                >
                  Get Directions ↗
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div
            style={{
              marginTop: '3rem',
              width: '100%',
              overflow: 'hidden',
              border: '1px solid rgba(234, 228, 216, 0.12)',
              borderRadius: '8px',
              background: 'var(--surface, #111311)'
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.004856101571!2d75.00020590000001!3d13.098878600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb5532d0a50835%3A0x4fca633a88c45486!2sSoans%20Farm!5e0!3m2!1sen!2sin!4v1791568059436!5m2!1sen!2sin"
              title="Find Soans Farm on Google Maps"
              width="100%"
              height="420"
              style={{
                display: 'block',
                border: 0,
                filter: 'grayscale(100%) contrast(0.95)'
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      <style>{`
        .home-hero {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          padding: 120px 0 80px;
          border-bottom: 1px solid var(--border-subtle);
          background-color: var(--bg-surface);
        }

        .hero-bg-frame {
          position: absolute;
          inset: 0;
          opacity: 0.35;
          pointer-events: none;
        }

        .hero-content-container {
          position: relative;
          z-index: 2;
        }

        .hero-text-wrapper {
          max-width: 860px;
        }

        .hero-main-title {
          font-size: clamp(3.5rem, 7vw, 6rem);
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .hero-intro-statement {
          margin-bottom: 2.5rem;
        }

        .hero-context-bar {
          display: flex;
          gap: 2rem;
          padding: 1rem 0;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 2.5rem;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          color: var(--text-gold);
        }

        .hero-actions-row {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .hero-scroll-indicator {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          color: var(--text-muted);
        }

        .feature-block-seamless, .exp-block-seamless, .journal-block-seamless {
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 1.5rem;
        }

        .seamless-body {
          padding-top: 1.25rem;
        }

        .seamless-body h4 {
          margin-bottom: 0.5rem;
          font-family: var(--font-serif);
          font-size: 1.4rem;
        }

        .text-center-wrapper {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
          .hero-intro-statement {
          color: #B99868;
          font-weight: 400;
          letter-spacing: 0.04em;
}

        


      `}</style>
    </div>
  );
}
