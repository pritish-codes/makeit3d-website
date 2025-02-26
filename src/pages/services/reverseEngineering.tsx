import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ReverseEngineering() {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-accent via-accent/80 to-accent/60 overflow-hidden">
        <Navbar />
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute -inset-[10px] opacity-50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/30 rounded-full blur-[100px]" />
            <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px]" />
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 py-24">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-gold/20 backdrop-blur rounded-xl flex items-center justify-center">
              <Wrench className="h-8 w-8 text-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Reverse Engineering</h1>
          </div>
          <p className="text-xl text-secondary max-w-3xl">
            At Makeit3D, we specialize in delivering top-notch reverse engineering solutions to help you recreate, analyze, and enhance existing products with precision and efficiency.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-primary py-24">
        <div className="container mx-auto px-6">
          {/* Overview Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-text">Why Choose Reverse Engineering?</h2>
              <p className="text-text/80 mb-6">
                Reverse engineering captures the geometry and design of a physical object and converts it into a detailed digital model. This process enables businesses to analyze existing products, recreate obsolete components, or modify designs for improved performance.
              </p>
              <div className="space-y-4">
                {[
                  'Component Recreation: Recreate discontinued or hard-to-find parts with precision.',
                  'Design Optimization: Improve functionality, aesthetics, and manufacturability.',
                  'Digitization of Legacy Parts: Convert physical objects into 3D CAD models.',
                  'Prototyping and Manufacturing: Create prototypes or manufacturing-ready designs.',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span className="text-text/80">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-accent/20 rounded-2xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2070"
                alt="Reverse Engineering Process"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-video"
              />
            </motion.div>
          </div>

          {/* Applications Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-12 text-text">Applications of Reverse Engineering</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Aerospace & Automotive',
                  description: 'Recreate or enhance critical components with unmatched precision.'
                },
                {
                  title: 'Consumer Goods',
                  description: 'Modernize or replicate out-of-production designs for small-batch manufacturing.'
                },
                {
                  title: 'Medical & Healthcare',
                  description: 'Develop detailed digital models for prosthetics, implants, and medical devices.'
                },
              ].map((application, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                >
                  <div className="bg-secondary rounded-2xl p-8 h-full">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                      <span className="text-2xl font-bold text-accent">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-text">{application.title}</h3>
                    <p className="text-text/70">{application.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-text">Get Started Today</h2>
            <p className="text-text/80 mb-8 max-w-2xl mx-auto">
              Unlock the full potential of your designs with Makeit3D's reverse engineering services. Contact us to discuss your project and discover how we can help you achieve your goals.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gold text-accent rounded-lg transition-all duration-300"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}