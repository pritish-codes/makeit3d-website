import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <Home />
              </motion.div>
            } 
          />
          <Route 
            path="/about" 
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <About />
              </motion.div>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <Contact />
              </motion.div>
            } 
          />
          <Route 
            path="/portfolio" 
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <Portfolio />
              </motion.div>
            } 
          />
          <Route 
            path="/services/fdm" 
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <FDMPrototyping />
              </motion.div>
            } 
          />
          <Route 
            path="/services/small-batch-manufacturing" 
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <SLAPrototyping />
              </motion.div>
            } 
          />
          <Route 
            path="/services/design-assistance" 
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <ReverseEngineering />
              </motion.div>
            } 
          />
          <Route 
            path="/services/industrial-solutions" 
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <ProductDevelopment />
              </motion.div>
            } 
          />
          <Route 
            path="/services/designServices" 
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <DesignServices />
              </motion.div>
            } 
          />
          <Route 
            path="/privacy-policy" 
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <PrivacyPolicy />
              </motion.div>
            } 
          />
          <Route 
            path="/terms-conditions" 
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <TermsConditions />
              </motion.div>
            } 
          />
          <Route 
            path="/refund-policy" 
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <RefundPolicy />
              </motion.div>
            } 
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}