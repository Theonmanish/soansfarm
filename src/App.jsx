import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout & Global Components
import GlobalHeader from './components/GlobalHeader';
import GlobalFooter from './components/GlobalFooter';
import ScrollToTop from './components/ScrollToTop';

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

function MainLayout() {
  const location = useLocation();
  const isExplorePage = location.pathname === '/explore';

  return (
    <div className="app-root">
      <ScrollToTop />
      
      {/* Global Navigation Header */}
      <GlobalHeader />

      {/* Primary Page Route Switch */}
      <main className="app-content">
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
        </Routes>
      </main>

      {/* Global Footer (Hidden on interactive map shell page for full viewport experience) */}
      {!isExplorePage && <GlobalFooter />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}
