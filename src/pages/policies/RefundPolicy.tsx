import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { RefreshCw } from 'lucide-react';

export function RefundPolicy() {
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
              <RefreshCw className="h-8 w-8 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Refund Policy</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Understanding our refund and return process for 3D printing services.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Overview</h2>
            <p>
              We are committed to ensuring your satisfaction with our 3D printing services.
              This policy outlines our procedures for refunds and returns.
            </p>

            <h2>Eligibility for Refunds</h2>
            <p>
              Refunds may be issued in the following cases:
            </p>
            <ul>
              <li>Manufacturing defects or errors on our part</li>
              <li>Significant deviation from agreed specifications</li>
              <li>Damaged items received during shipping</li>
              <li>Order cancellation before production begins</li>
            </ul>

            <h2>Non-Refundable Items</h2>
            <p>
              The following are generally non-refundable:
            </p>
            <ul>
              <li>Custom-designed items that meet specifications</li>
              <li>Items modified or damaged by the customer</li>
              <li>Design services already rendered</li>
              <li>Shipping and handling fees</li>
            </ul>

            <h2>Return Process</h2>
            <ol>
              <li>Contact our customer service within 7 days of receiving your order</li>
              <li>Provide order details and reason for return</li>
              <li>Receive return authorization and shipping instructions</li>
              <li>Return item in original packaging</li>
              <li>Refund will be processed after inspection</li>
            </ol>

            <h2>Refund Processing</h2>
            <p>
              Once approved:
            </p>
            <ul>
              <li>Refunds are processed within 5-7 business days</li>
              <li>Credit card refunds may take additional 2-5 business days</li>
              <li>Store credit is available immediately</li>
            </ul>

            <h2>Quality Guarantee</h2>
            <p>
              We stand behind the quality of our work. If you're not satisfied with the
              quality of your order, please contact us immediately for resolution.
            </p>

            <h2>Contact Information</h2>
            <p>
              For refund requests or questions, please contact us at:
              <br />
              Email: returns@makeit3d.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}