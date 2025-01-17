import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';

export function SLAPrototyping() {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[100px]" />
            <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[80px]" />
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 py-24">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-purple-500/20 backdrop-blur rounded-xl flex items-center justify-center">
              <Lightbulb className="h-8 w-8 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">SLA 3D Printing</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            At Makeit3D, we offer advanced Stereolithography (SLA) 3D printing services, delivering unmatched precision and quality for high-resolution parts with intricate details and smooth surfaces.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6">
          {/* Overview Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose SLA?</h2>
              <p className="text-gray-600 mb-6">
                SLA (Stereolithography) 3D printing uses a laser to cure liquid resin layer by layer, achieving exceptional accuracy and surface finish. It's ideal for applications requiring fine details, complex geometries, and smooth surfaces.
              </p>
              <div className="space-y-4">
                {[
                  'High precision and intricate details',
                  'Smooth surface finish with minimal post-processing',
                  'Wide range of versatile materials',
                  'Rapid prototyping for faster iterations',
                  'Cost-effective low-volume production',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">{feature}</span>
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
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2070"
                alt="SLA Process"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-video"
              />
            </motion.div>
          </div>

          {/* Applications Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-12">Applications of SLA 3D Printing</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Prototyping',
                  description: 'Highly detailed prototypes to test form, fit, and function.'
                },
                {
                  title: 'Medical Models',
                  description: 'Accurate anatomical models and dental molds with fine details.'
                },
                {
                  title: 'Jewelry and Consumer Products',
                  description: 'Intricate designs and luxury prototypes with smooth finishes.'
                },
              ].map((application, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                >
                  <div className="bg-gray-50 rounded-2xl p-8 h-full">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                      <span className="text-2xl font-bold text-purple-600">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{application.title}</h3>
                    <p className="text-gray-600">{application.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Start Your SLA Project Today</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact Makeit3D for tailored SLA solutions. Let us bring your intricate designs to life with unmatched precision and efficiency.
            </p>
            <motion.button
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
