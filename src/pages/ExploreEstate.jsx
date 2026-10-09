import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Search, Filter, Layers, Info, ArrowLeft, Maximize2 } from 'lucide-react';

export default function ExploreEstate() {
  return (
    <div className="explore-estate-shell">
      {/* 1. MINIMAL SHELL TOP BAR */}
      <div className="explore-top-bar">
        <div className="top-bar-left">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} />
            <span>RETURN TO SITE</span>
          </Link>
          <div className="top-bar-title-group">
            <span className="brand-code">SOANS ESTATE SPATIAL DIRECTORY</span>
            <h1 className="shell-heading">Estate Exploration Shell</h1>
          </div>
        </div>

        <div className="top-bar-right">
          <div className="coordinate-badge">
            <Compass size={14} className="compass-anim" />
            <span>COORDS: 13.0489° N, 74.9964° E | MOODBIDRI</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN MAP SHELL WORKSPACE */}
      <div className="explore-workspace">
        {/* LEFT DOCKED CONTROL PANEL SHELL */}
        <aside className="explore-control-panel">
          {/* SEARCH BAR PLACEHOLDER */}
          <div className="panel-section search-section">
            <label className="panel-label">LOCATION & SPECIES SEARCH</label>
            <div className="search-input-shell">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search estate zones, crop beds, or plant species..."
                disabled
                className="search-input-disabled"
              />
            </div>
            <span className="input-hint">Search engine integration pending content database</span>
          </div>

          {/* CATEGORY FILTERS PLACEHOLDER */}
          <div className="panel-section">
            <label className="panel-label">
              <Filter size={12} /> ESTATE ZONE FILTERS
            </label>
            <div className="filter-tags-grid">
              <button className="filter-tag active">ALL ZONES</button>
              <button className="filter-tag">PLANTATIONS</button>
              <button className="filter-tag">BAMBOO GROVES</button>
              <button className="filter-tag">BOTANICAL COLLECTION</button>
              <button className="filter-tag">WALKING LABYRINTHS</button>
              <button className="filter-tag">NURSERY AREAS</button>
            </div>
          </div>

          {/* MAP LAYERS PLACEHOLDER */}
          <div className="panel-section">
            <label className="panel-label">
              <Layers size={12} /> MAP LAYER OVERLAYS
            </label>
            <div className="layer-options">
              <div className="layer-row active">
                <input type="checkbox" checked readOnly />
                <span>Topographical Elevation Grid</span>
              </div>
              <div className="layer-row">
                <input type="checkbox" disabled />
                <span>Canopy Layer Overlay</span>
              </div>
              <div className="layer-row">
                <input type="checkbox" disabled />
                <span>Walking Trail Network</span>
              </div>
              <div className="layer-row">
                <input type="checkbox" disabled />
                <span>Specimen Markers</span>
              </div>
            </div>
          </div>

          {/* ARCHITECTURAL STATUS NOTE */}
          <div className="panel-section status-note-section">
            <span className="status-title">STRUCTURAL SHELL STATUS</span>
            <p className="status-text">
              This interactive map viewport is structurally configured. Spatial GIS data, vector boundaries, and plant taxonomy popups will be bound in upcoming content phase.
            </p>
          </div>
        </aside>

        {/* FULL-PAGE MAP CANVAS AREA PLACEHOLDER */}
        <main className="explore-canvas-area arch-grid-bg">
          {/* ARCHITECTURAL CANVAS GRID & ORIENTATION */}
          <div className="canvas-watermark">
            <Compass size={80} strokeWidth={0.5} style={{ opacity: 0.15 }} />
            <span className="watermark-text">SOANS FARM SPATIAL VIEWPORT</span>
          </div>

          {/* MAP PLACEHOLDER OVERLAY GRAPHICS */}
          <div className="canvas-placeholder-frame">
            <div className="frame-header">
              <span className="frame-tag">MAP VIEWPORT CANVAS</span>
              <span className="frame-status">TILED RASTER / VECTOR SHELL</span>
            </div>

            <div className="frame-center-content">
              <div className="map-mockup-graphic">
                <svg width="240" height="180" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="240" height="180" rx="4" fill="#111311" stroke="var(--border-medium)" />
                  <path d="M20 140 Q 60 40 120 100 T 220 30" stroke="var(--text-gold)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                  <path d="M10 90 Q 90 150 180 80 T 230 160" stroke="var(--border-medium)" strokeWidth="1" fill="none" />
                  <circle cx="120" cy="100" r="6" fill="var(--text-gold)" />
                  <circle cx="120" cy="100" r="14" stroke="var(--text-gold)" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="60" cy="70" r="4" fill="var(--text-muted)" />
                  <circle cx="180" cy="80" r="4" fill="var(--text-muted)" />
                </svg>
              </div>
              <h3>Interactive Map Viewport Placeholder</h3>
              <p className="canvas-subtext">
                Spatial GIS canvas container ready for tile renderer and interactive vector plot integration.
              </p>
            </div>

            {/* CANVAS BOTTOM CONTROLS MOCKUP */}
            <div className="canvas-footer-controls">
              <div className="zoom-controls">
                <button className="control-btn">+</button>
                <span className="zoom-level">SCALE: 1 : 2,500</span>
                <button className="control-btn">-</button>
              </div>
              <button className="control-btn full-btn">
                <Maximize2 size={12} />
                <span>EXPAND VIEWPORT</span>
              </button>
            </div>
          </div>
        </main>

        {/* RIGHT DOCKED LOCATION / PLANT INFO PANEL SHELL */}
        <aside className="explore-info-panel">
          <div className="info-panel-header">
            <label className="panel-label">
              <Info size={12} /> LOCATION INFORMATION PANEL
            </label>
            <span className="panel-status-tag">SPECIMEN SHELL</span>
          </div>

          <div className="info-panel-content">
            <div className="info-card-placeholder">
              <span className="info-zone-tag">ZONE A01 — CENTRAL ESTATE</span>
              <h3 className="info-zone-title">Location Specimen Title Placeholder</h3>
              <p className="info-zone-desc">
                Select a zone marker on the map canvas to inspect soil characteristics, plant taxonomy, canopy density, and historical notes.
              </p>

              <div className="info-spec-grid">
                <div className="spec-cell">
                  <span className="sc-key">ELEVATION</span>
                  <span className="sc-val">84m ASL</span>
                </div>
                <div className="spec-cell">
                  <span className="sc-key">SOIL TYPE</span>
                  <span className="sc-val">Lateritic Loam</span>
                </div>
                <div className="spec-cell">
                  <span className="sc-key">CANOPY DENSITY</span>
                  <span className="sc-val">78% Filtered</span>
                </div>
                <div className="spec-cell">
                  <span className="sc-key">SPECIES COUNT</span>
                  <span className="sc-val">14 Documented</span>
                </div>
              </div>
            </div>

            <div className="info-card-placeholder" style={{ marginTop: '1.5rem' }}>
              <span className="info-zone-tag">BOTANICAL DATA SHELL</span>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                Plant Specimen Panel Shell
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Detailed botanical taxonomy, family classification, and harvest schedules will display here upon map element selection.
              </p>
            </div>
          </div>
        </aside>
      </div>

      <style>{`
        .explore-estate-shell {
          display: flex;
          flex-direction: column;
          height: calc(100vh - var(--header-height));
          background-color: var(--bg-main);
          overflow: hidden;
        }

        .explore-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 1.5rem;
          background-color: var(--bg-surface);
          border-bottom: 1px solid var(--border-subtle);
          height: 64px;
        }

        .top-bar-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          color: var(--text-gold);
        }

        .brand-code {
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          color: var(--text-muted);
          display: block;
        }

        .shell-heading {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: var(--text-primary);
          line-height: 1;
        }

        .coordinate-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.75rem;
        }

        .explore-workspace {
          display: flex;
          flex-grow: 1;
          height: calc(100% - 64px);
          overflow: hidden;
        }

        .explore-control-panel {
          width: 320px;
          background-color: var(--bg-surface);
          border-right: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          padding: 1.25rem;
          overflow-y: auto;
          gap: 1.5rem;
        }

        .explore-info-panel {
          width: 340px;
          background-color: var(--bg-surface);
          border-left: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          padding: 1.25rem;
          overflow-y: auto;
        }

        .panel-section {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .panel-label {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: var(--text-gold);
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .search-input-shell {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 0.75rem;
          color: var(--text-muted);
        }

        .search-input-disabled {
          width: 100%;
          padding: 0.6rem 0.75rem 0.6rem 2.2rem;
          background-color: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          font-size: 0.8rem;
          cursor: not-allowed;
        }

        .input-hint {
          font-size: 0.65rem;
          color: var(--text-muted);
          font-style: italic;
        }

        .filter-tags-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .filter-tag {
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          padding: 0.35rem 0.6rem;
          background-color: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          cursor: pointer;
        }

        .filter-tag.active {
          border-color: var(--text-gold);
          color: var(--text-gold);
          background-color: var(--bg-accent-subtle);
        }

        .layer-options {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .layer-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .layer-row.active {
          color: var(--text-primary);
        }

        .status-note-section {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }

        .status-title {
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: var(--text-gold);
        }

        .status-text {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .explore-canvas-area {
          flex-grow: 1;
          background-color: var(--bg-main);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .canvas-watermark {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          pointer-events: none;
        }

        .watermark-text {
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          color: var(--text-muted);
          opacity: 0.4;
        }

        .canvas-placeholder-frame {
          width: 100%;
          height: 100%;
          border: 1px dashed var(--border-medium);
          background-color: rgba(17, 19, 17, 0.7);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.5rem;
          position: relative;
          z-index: 2;
        }

        .frame-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          color: var(--text-muted);
        }

        .frame-center-content {
          margin: auto;
          text-align: center;
          max-width: 500px;
        }

        .frame-center-content h3 {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          margin: 1rem 0 0.5rem;
          color: var(--text-primary);
        }

        .canvas-subtext {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .canvas-footer-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .zoom-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          color: var(--text-muted);
        }

        .control-btn {
          background-color: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          padding: 0.3rem 0.6rem;
          font-size: 0.75rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }

        .info-panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 1.25rem;
        }

        .panel-status-tag {
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          color: var(--text-gold);
        }

        .info-card-placeholder {
          background-color: var(--bg-card);
          border: 1px solid var(--border-subtle);
          padding: 1.25rem;
        }

        .info-zone-tag {
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          color: var(--text-gold);
          display: block;
          margin-bottom: 0.4rem;
        }

        .info-zone-title {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .info-zone-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        .info-spec-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-subtle);
        }

        .spec-cell {
          display: flex;
          flex-direction: column;
        }

        .sc-key {
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }

        .sc-val {
          font-size: 0.8rem;
          color: var(--text-primary);
        }

        @media (max-width: 1024px) {
          .explore-workspace {
            flex-direction: column;
            overflow-y: auto;
          }
          .explore-control-panel, .explore-info-panel {
            width: 100%;
          }
          .explore-canvas-area {
            min-height: 400px;
          }
        }
      `}</style>
    </div>
  );
}
