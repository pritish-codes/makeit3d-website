import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Portfolio } from './pages/Portfolio';
import { FDMPrototyping } from './pages/services/fdm';
import { SLAPrototyping } from './pages/services/sla';
import { ReverseEngineering } from './pages/services/reverseEngineering';
import { DesignServices } from './pages/services/designServices';
import { PrivacyPolicy } from './pages/policies/PrivacyPolicy';
import { TermsConditions } from './pages/policies/TermsConditions';
import { RefundPolicy } from './pages/policies/RefundPolicy';
import { ProductDevelopment } from './pages/services/productDevelopment';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services/fdm" element={<FDMPrototyping />} />
        <Route path="/services/small-batch-manufacturing" element={<SLAPrototyping />} />
        <Route path="/services/design-assistance" element={<ReverseEngineering />} />
        <Route path="/services/industrial-solutions" element={<ProductDevelopment />} />
        <Route path="/services/designServices" element={<DesignServices />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </div>
  );
}
