import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Search, Filter, Layers, Info, ArrowLeft, Maximize2 } from 'lucide-react';

const labelClass = 'flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-farm-gold';
const controlClass = 'inline-flex cursor-pointer items-center gap-2 border border-farm-border bg-farm-card px-2.5 py-1.5 text-xs text-farm-cream';

export default function ExploreEstate() {
  return (
    <div className="flex min-h-[calc(100vh-88px)] flex-col overflow-hidden bg-farm-bg">
      <div className="flex min-h-16 items-center justify-between gap-4 border-b border-farm-border bg-farm-surface px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-4 sm:gap-6">
          <Link to="/" className="inline-flex shrink-0 items-center gap-2 text-xs tracking-[0.15em] text-farm-gold"><ArrowLeft size={16} /><span className="hidden sm:inline">RETURN TO SITE</span></Link>
          <div className="min-w-0">
            <span className="block text-[0.6rem] tracking-[0.2em] text-farm-muted">SOANS ESTATE SPATIAL DIRECTORY</span>
            <h1 className="truncate font-editorial text-xl leading-none text-farm-cream">Estate Exploration Shell</h1>
          </div>
        </div>
        <div className="hidden items-center gap-2 border border-farm-border px-3 py-1.5 text-[0.7rem] tracking-[0.15em] text-farm-muted lg:flex">
          <Compass size={14} /><span>COORDS: 13.0489° N, 74.9964° E | MOODBIDRI</span>
        </div>
      </div>

      <div className="grid flex-1 grid-cols-1 overflow-y-auto lg:min-h-0 lg:grid-cols-[320px_minmax(0,1fr)_340px] lg:overflow-hidden">
        <aside className="flex flex-col gap-6 overflow-y-auto border-b border-farm-border bg-farm-surface p-5 lg:border-b-0 lg:border-r">
          <div className="flex flex-col gap-2.5">
            <label className={labelClass}>LOCATION & SPECIES SEARCH</label>
            <div className="relative flex items-center"><Search size={16} className="absolute left-3 text-farm-muted" /><input type="text" placeholder="Search estate zones, crop beds, or plant species..." disabled className="w-full cursor-not-allowed border border-farm-border bg-farm-card py-2.5 pl-9 pr-3 text-xs text-farm-muted placeholder:text-farm-muted" /></div>
            <span className="text-[0.65rem] italic text-farm-muted">Search engine integration pending content database</span>
          </div>

          <div className="flex flex-col gap-2.5">
            <label className={labelClass}><Filter size={12} /> ESTATE ZONE FILTERS</label>
            <div className="flex flex-wrap gap-2">
              <button className="border border-farm-gold bg-farm-gold/5 px-2.5 py-1.5 text-[0.65rem] tracking-wider text-farm-gold">ALL ZONES</button>
              {['PLANTATIONS', 'BAMBOO GROVES', 'BOTANICAL COLLECTION', 'WALKING LABYRINTHS', 'NURSERY AREAS'].map((zone) => <button key={zone} className="border border-farm-border bg-farm-card px-2.5 py-1.5 text-[0.65rem] tracking-wider text-farm-stone">{zone}</button>)}
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <label className={labelClass}><Layers size={12} /> MAP LAYER OVERLAYS</label>
            <div className="flex flex-col gap-2 text-xs text-farm-muted">
              <label className="flex items-center gap-2 text-farm-cream"><input type="checkbox" checked readOnly />Topographical Elevation Grid</label>
              <label className="flex items-center gap-2"><input type="checkbox" disabled />Canopy Layer Overlay</label>
              <label className="flex items-center gap-2"><input type="checkbox" disabled />Walking Trail Network</label>
              <label className="flex items-center gap-2"><input type="checkbox" disabled />Specimen Markers</label>
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-2 border-t border-farm-border pt-4">
            <span className="text-[0.65rem] tracking-[0.15em] text-farm-gold">STRUCTURAL SHELL STATUS</span>
            <p className="text-xs leading-relaxed text-farm-muted">This interactive map viewport is structurally configured. Spatial GIS data, vector boundaries, and plant taxonomy popups will be bound in upcoming content phase.</p>
          </div>
        </aside>

        <main className="arch-grid-bg relative flex min-h-[400px] items-center justify-center bg-farm-bg p-4 sm:p-8 lg:min-h-0">
          <div className="relative z-[2] flex h-full min-h-[360px] w-full flex-col justify-between border border-dashed border-farm-border-medium bg-[rgba(17,19,17,0.7)] p-4 sm:p-6">
            <div className="flex justify-between gap-4 text-[0.65rem] tracking-[0.15em] text-farm-muted"><span>ESTATE MAP</span><span className="text-right">SURVEY DATA REQUIRED</span></div>
            <div className="m-auto max-w-[500px] text-center">
              <Compass size={48} strokeWidth={0.75} className="mx-auto mb-4 text-farm-muted opacity-40" />
              <h3 className="mb-2 font-editorial text-3xl text-farm-cream">Estate map unavailable</h3>
              <p className="text-sm text-farm-stone">Verified boundaries, trails, and specimen locations will appear when estate survey data is available.</p>
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-[0.7rem] tracking-[0.15em] text-farm-muted"><button className={controlClass}>+</button><span>SCALE: 1 : 2,500</span><button className={controlClass}>-</button></div>
              <button className={controlClass}><Maximize2 size={12} /><span className="hidden sm:inline">EXPAND VIEWPORT</span></button>
            </div>
          </div>
        </main>

        <aside className="flex flex-col overflow-y-auto border-t border-farm-border bg-farm-surface p-5 lg:border-l lg:border-t-0">
          <div className="mb-5 flex items-center justify-between gap-3 border-b border-farm-border pb-4">
            <label className={labelClass}><Info size={12} /> LOCATION INFORMATION PANEL</label>
            <span className="shrink-0 text-[0.6rem] tracking-[0.15em] text-farm-gold">SPECIMEN SHELL</span>
          </div>
          <div>
            <div className="border border-farm-border bg-farm-card p-5">
              <span className="mb-2 block text-[0.6rem] tracking-[0.2em] text-farm-gold">ZONE A01 — CENTRAL ESTATE</span>
              <h3 className="mb-2 font-editorial text-[1.4rem] text-farm-cream">Estate location data</h3>
              <p className="mb-5 text-[0.85rem] text-farm-stone">Verified soil, plant taxonomy, canopy, and historical records are not yet available for display.</p>
              <div className="grid grid-cols-2 gap-3 border-t border-farm-border pt-3">
                {['ELEVATION', 'SOIL TYPE', 'CANOPY DENSITY', 'SPECIES COUNT'].map((key) => <div key={key} className="flex flex-col"><span className="text-[0.6rem] tracking-wider text-farm-muted">{key}</span><span className="text-xs text-farm-cream">Pending verification</span></div>)}
              </div>
            </div>
            <div className="mt-6 border border-farm-border bg-farm-card p-5">
              <span className="mb-2 block text-[0.6rem] tracking-[0.2em] text-farm-gold">BOTANICAL DATA SHELL</span>
              <h4 className="mb-2 font-editorial text-xl text-farm-cream">Plant Specimen Panel Shell</h4>
              <p className="text-[0.85rem] text-farm-stone">Detailed botanical taxonomy, family classification, and harvest schedules will display here upon map element selection.</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
