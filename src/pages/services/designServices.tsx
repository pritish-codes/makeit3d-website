import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Box, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DesignServices() {
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
              <Box className="h-8 w-8 text-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">3D Design Services</h1>
          </div>
          <p className="text-xl text-secondary max-w-3xl">
            At Makeit3D, we bring your ideas to life with expert 3D design services. Our skilled designers create detailed, accurate, and functional 3D models tailored to your specific needs with precision and creativity.
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
              <h2 className="text-3xl font-bold mb-6 text-text">Why Choose Our 3D Design Services?</h2>
              <p className="text-text/80 mb-6">
                Whether you're developing a new product, improving an existing design, or visualizing complex concepts, we ensure high-quality results that exceed expectations.
              </p>
              <div className="space-y-4">
                {[
                  'Tailored Designs: Crafted to meet your unique requirements.',
                  'Expertise Across Industries: Solutions for consumer goods, industrial components, and healthcare.',
                  'High-Quality Models: Optimized for visualization, prototyping, and manufacturing.',
                  'Seamless Collaboration: Incorporating your feedback throughout the design process.',
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
                alt="3D Design Process"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-video"
              />
            </motion.div>
          </div>

          {/* Process Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-12 text-text">Our 3D Design Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Concept Development',
                  description: 'Refine your idea into a detailed concept that forms the foundation of the design.'
                },
                {
                  title: '3D Modeling',
                  description: 'Create precise and intricate 3D models tailored to your specifications.'
                },
                {
                  title: 'Design Optimization',
                  description: 'Enhance performance, durability, and manufacturability while meeting cost and material requirements.'
                },
                {
                  title: 'File Preparation',
                  description: 'Deliver industry-standard formats ready for prototyping or manufacturing.'
                },
                {
                  title: 'Visualization and Rendering',
                  description: 'Produce photorealistic renderings for presentations or marketing purposes.'
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
            <h2 className="text-3xl font-bold mb-6 text-text">Bring Your Ideas to Life</h2>
            <p className="text-text/80 mb-8 max-w-2xl mx-auto">
              At Makeit3D, we are dedicated to creating innovative and functional designs. Contact us today to discuss your project and bring your vision to reality.
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