import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ScrollText } from 'lucide-react';

export function TermsConditions() {
  return (
    <motion.div
      className="min-h-screen bg-primary"
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
              <ScrollText className="h-8 w-8 text-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Terms & Conditions</h1>
          </div>
          <p className="text-xl text-secondary max-w-3xl">
            Please read these terms and conditions carefully before using our services.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-accent/5">
              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">1. Acceptance of Terms</h2>
                  <p className="text-text/80">
                    By accessing and using our services, you accept and agree to be bound by these
                    Terms and Conditions and our Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">2. Services</h2>
                  <p className="text-text/80 mb-4">
                    We provide 3D printing services, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-text/80 ml-4">
                    <li>Custom prototyping</li>
                    <li>Small-batch manufacturing</li>
                    <li>Design assistance</li>
                    <li>Industrial solutions</li>
                    <li>Rapid tooling</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">3. Ordering and Payment</h2>
                  <p className="text-text/80">
                    All orders are subject to acceptance and availability. Prices are subject to
                    change without notice. Payment must be made in full before order processing
                    begins.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">4. Intellectual Property</h2>
                  <p className="text-text/80">
                    You retain all rights to your designs and intellectual property. By submitting
                    designs for printing, you warrant that you have the right to use and
                    reproduce the content.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">5. Quality and Warranties</h2>
                  <p className="text-text/80">
                    We strive to provide high-quality services but cannot guarantee exact color
                    matches or specific material properties. All services are provided "as is"
                    without any warranties.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">6. Limitation of Liability</h2>
                  <p className="text-text/80">
                    We shall not be liable for any indirect, incidental, special, consequential,
                    or punitive damages resulting from your use of our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">7. Modifications</h2>
                  <p className="text-text/80">
                    We reserve the right to modify these terms at any time. Continued use of our
                    services constitutes acceptance of modified terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">Contact Information</h2>
                  <p className="text-text/80">
                    For questions about these Terms & Conditions, please contact us at:
                    <br />
                    Email: legal@makeit3d.com
                    <br />
                    Phone: +1 (555) 123-4567
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}