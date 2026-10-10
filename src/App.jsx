import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';

// Layout & Global Components
import GlobalHeader from './components/GlobalHeader';
import GlobalFooter from './components/GlobalFooter';
import ScrollToTop from './components/ScrollToTop';
import PageErrorBoundary from './components/PageErrorBoundary';

// Page Views (11 Primary Routes)
import Home from './pages/Home';
import TheFarm from './pages/TheFarm';
import TheLand from './pages/TheLand';
import Cultivation from './pages/Cultivation';
import BotanicalGarden from './pages/BotanicalGarden';
import Experiences from './pages/Experiences';
import ExploreEstate from './pages/ExploreEstate';
import Products from './pages/Products';
import Journal from './pages/Journal';
import Visit from './pages/Visit';
import EnergyHealing from './pages/EnergyHealing';

function MainLayout() {
  const location = useLocation();
  const isExplorePage = location.pathname === '/explore';

  return (
    <div className="min-h-screen bg-farm-bg text-farm-cream">
      <ScrollToTop />
      
      {/* Global Navigation Header */}
      <GlobalHeader />

      {/* Primary Page Route Switch */}
      <main>
        <PageErrorBoundary key={location.pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/the-farm" element={<TheFarm />} />
            <Route path="/the-land" element={<TheLand />} />
            <Route path="/cultivation" element={<Cultivation />} />
            <Route path="/botanical-garden" element={<BotanicalGarden />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/explore" element={<ExploreEstate />} />
            <Route path="/products" element={<Products />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/visit" element={<Visit />} />
            <Route path="/energy-healing" element={<EnergyHealing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageErrorBoundary>
      </main>

      {/* Global Footer (Hidden on interactive map shell page for full viewport experience) */}
      {!isExplorePage && <GlobalFooter />}
    </div>
  );
}

function NotFound() {
  return (
    <section className="relative border-b border-farm-border py-16 md:py-28">
      <div className="mx-auto w-[90%] max-w-[1400px]">
        <p className="mb-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-farm-gold before:h-px before:w-6 before:bg-farm-gold">404 — PAGE NOT FOUND</p>
        <h1 className="mb-3 font-editorial text-[clamp(2.75rem,5vw,4.5rem)] leading-tight text-farm-cream">We couldn’t find that page.</h1>
        <p className="mb-8 text-[clamp(1.15rem,1.8vw,1.35rem)] font-light leading-relaxed text-farm-cream">The page may have moved, or the address may be incorrect.</p>
        <Link className="inline-flex items-center gap-3 border border-farm-border-medium px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-farm-cream transition-all hover:border-farm-gold hover:bg-farm-gold/5 hover:text-farm-gold" to="/">Return to the home page</Link>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}
