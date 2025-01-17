import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Package, CheckCircle2, ArrowRight } from 'lucide-react';

export function ProductDevelopment() {
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
              <Package className="h-8 w-8 text-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Product Development</h1>
          </div>
          <p className="text-xl text-secondary max-w-3xl">
            At Makeit3D, we offer comprehensive product development services designed to transform your ideas into market-ready products, utilizing advanced 3D design, additive manufacturing, and laser cutting technologies.
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
              <h2 className="text-3xl font-bold mb-6 text-text">Why Choose Our Product Development Services?</h2>
              <p className="text-text/80 mb-6">
                From conceptualization to prototyping and beyond, we work closely with you to create custom solutions that meet your functional, aesthetic, and budgetary requirements.
              </p>
              <div className="space-y-4">
                {[
                  'End-to-End Support: From concept to refinement, we guide you through every stage.',
                  'Custom Solutions: Tailored designs to meet your specific needs and goals.',
                  'Advanced Manufacturing Methods: High-quality results using 3D printing and laser cutting.',
                  'Rapid Prototyping: Visualize and test your ideas quickly with precise prototypes.',
                  'Cost-Effective Approach: Save time and resources with additive manufacturing.',
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
                alt="Product Development Process"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-video"
              />
            </motion.div>
          </div>

          {/* Process Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-12 text-text">Our Product Development Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Conceptualization',
                  description: 'Understand your vision and create an initial concept aligned with your goals.'
                },
                {
                  title: '3D Design',
                  description: 'Bring ideas to life with detailed CAD models that meet all specifications.'
                },
                {
                  title: 'Prototyping',
                  description: 'Produce high-quality prototypes using FDM and SLA technologies.'
                },
                {
                  title: 'Material Selection',
                  description: 'Choose the best materials for your product based on its use and durability.'
                },
                {
                  title: 'Refinement and Testing',
                  description: 'Optimize your design through iterative prototyping and testing.'
                },
              ].map((step, index) => (
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
                    <h3 className="text-xl font-semibold mb-4 text-text">{step.title}</h3>
                    <p className="text-text/70">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-text">Turn Your Ideas Into Reality</h2>
            <p className="text-text/80 mb-8 max-w-2xl mx-auto">
              At Makeit3D, we are passionate about helping you create innovative products that stand out. Contact us today to begin your product development journey.
            </p>
            <motion.button
              className="inline-flex items-center px-8 py-4 bg-gold text-accent rounded-lg transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}