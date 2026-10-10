import React from 'react';

const ratios = {
  '16-9': 'aspect-video',
  '4-3': 'aspect-[4/3]',
  '3-4': 'aspect-[3/4]',
  '21-9': 'aspect-[21/9]',
  '1-1': 'aspect-square',
};

export default function PlaceholderImage({ aspectRatio = '16-9', title = 'Estate Visual Record', category = 'PHOTOGRAPHY', caption = '', className = '', fullBleed = false }) {
  return (
    <div className={`${fullBleed ? 'relative left-1/2 w-screen -translate-x-1/2' : 'relative w-full'} ${className}`}>
      <div className={`relative w-full overflow-hidden bg-gradient-to-br from-[#131713] to-farm-bg ${ratios[aspectRatio] || 'aspect-video'}`}>
        <div className="absolute inset-0 flex flex-col justify-between border-b border-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(19,23,19,0.2)_0%,rgba(11,11,10,0.85)_100%)] p-8">
          <div className="flex items-center justify-between font-body text-[0.7rem] uppercase tracking-[0.15em] text-farm-muted">
            <span className="text-[0.65rem] tracking-[0.2em] text-farm-gold">{category}</span>
            <span>SOANS FARM ARCHIVE</span>
          </div>
          <div className="m-auto text-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-farm-gold)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto opacity-50">
              <rect width="18" height="18" x="3" y="3" rx="0" ry="0" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
            <p className="mt-2 font-editorial text-xl italic text-farm-stone">{title}</p>
          </div>
          <div className="flex items-center justify-between font-body text-[0.7rem] uppercase tracking-[0.15em] text-farm-muted">
            <span>SPECIMEN / FIELD LOCATION</span>
            <span>MOODBIDRI, KARNATAKA</span>
          </div>
        </div>
      </div>
      {caption && <p className="mt-3 flex items-center gap-2 text-xs italic text-farm-muted"><span className="text-farm-gold">▪</span>{caption}</p>}
    </div>
  );
}
