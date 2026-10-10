import React from 'react';

export default function PageHero({ category = 'ESTATE SECTION', routeNum = '01', title = 'Page Title', subtitle = '', leadText = '', metaTags = [] }) {
  return (
    <section className="relative border-b border-farm-border bg-gradient-to-b from-farm-surface to-farm-bg py-16 md:py-20">
      <div className="mx-auto w-[90%] max-w-[1400px]">
        <div className="max-w-[960px]">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.2em] text-farm-gold before:inline-block before:h-px before:w-6 before:bg-farm-gold">{category}</span>
            <span className="border border-farm-border px-2 py-1 font-body text-[0.7rem] tracking-[0.2em] text-farm-muted">ROUTE {routeNum}</span>
          </div>
          <h1 className="mb-3 font-editorial text-[clamp(2.75rem,5vw,4.5rem)] leading-[1.12] tracking-[-0.01em] text-farm-cream">{title}</h1>
          {subtitle && <p className="mb-6 font-editorial text-[clamp(1.2rem,2vw,1.6rem)] italic text-farm-gold">{subtitle}</p>}
          {leadText && <p className="mb-10 max-w-[840px] text-[clamp(1.15rem,1.8vw,1.35rem)] font-light leading-relaxed text-farm-cream">{leadText}</p>}
          {metaTags.length > 0 && <div className="flex flex-wrap gap-8 border-t border-farm-border pt-7">
            {metaTags.map((tag, idx) => <div key={idx} className="flex flex-col gap-1">
              <span className="text-[0.65rem] uppercase tracking-[0.15em] text-farm-muted">{tag.key}</span>
              <span className="text-sm text-farm-stone">{tag.value}</span>
            </div>)}
          </div>}
        </div>
      </div>
    </section>
  );
}
