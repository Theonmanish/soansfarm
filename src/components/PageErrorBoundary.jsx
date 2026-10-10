import React from 'react';
import { Link } from 'react-router-dom';

export default class PageErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (import.meta.env.DEV) {
      console.error('Page rendering failed:', error, info.componentStack);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="relative border-b border-farm-border py-16 md:py-28" role="alert">
          <div className="mx-auto w-[90%] max-w-[1400px]">
            <p className="mb-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-farm-gold before:h-px before:w-6 before:bg-farm-gold">PAGE UNAVAILABLE</p>
            <h1 className="mb-3 font-editorial text-[clamp(2.75rem,5vw,4.5rem)] leading-tight text-farm-cream">This page couldn’t be displayed.</h1>
            <p className="mb-8 text-[clamp(1.15rem,1.8vw,1.35rem)] font-light leading-relaxed text-farm-cream">Try opening the page again or return to the home page.</p>
            <Link className="inline-flex items-center gap-3 border border-farm-border-medium px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-farm-cream transition-all hover:border-farm-gold hover:bg-farm-gold/5 hover:text-farm-gold" to="/">Return to the home page</Link>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
