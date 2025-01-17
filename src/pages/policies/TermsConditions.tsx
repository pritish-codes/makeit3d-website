import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ScrollText } from 'lucide-react';

export function TermsConditions() {
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
              <ScrollText className="h-8 w-8 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Terms & Conditions</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Please read these terms and conditions carefully before using our services.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using our services, you accept and agree to be bound by these
              Terms and Conditions and our Privacy Policy.
            </p>

            <h2>2. Services</h2>
            <p>
              We provide 3D printing services, including but not limited to:
            </p>
            <ul>
              <li>Custom prototyping</li>
              <li>Small-batch manufacturing</li>
              <li>Design assistance</li>
              <li>Industrial solutions</li>
              <li>Rapid tooling</li>
            </ul>

            <h2>3. Ordering and Payment</h2>
            <p>
              All orders are subject to acceptance and availability. Prices are subject to
              change without notice. Payment must be made in full before order processing
              begins.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              You retain all rights to your designs and intellectual property. By submitting
              designs for printing, you warrant that you have the right to use and
              reproduce the content.
            </p>

            <h2>5. Quality and Warranties</h2>
            <p>
              We strive to provide high-quality services but cannot guarantee exact color
              matches or specific material properties. All services are provided "as is"
              without any warranties.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              We shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages resulting from your use of our services.
            </p>

            <h2>7. Modifications</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of our
              services constitutes acceptance of modified terms.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these Terms & Conditions, please contact us at:
              <br />
              Email: legal@makeit3d.com
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