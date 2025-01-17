import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Shield } from 'lucide-react';

export function PrivacyPolicy() {
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
              <Shield className="h-8 w-8 text-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Privacy Policy</h1>
          </div>
          <p className="text-xl text-secondary max-w-3xl">
            Learn how we collect, use, and protect your personal information.
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
                  <h2 className="text-2xl font-bold text-text mb-6">Information We Collect</h2>
                  <p className="text-text/80 mb-4">
                    We collect information that you provide directly to us, including when you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-text/80 ml-4">
                    <li>Create an account</li>
                    <li>Place an order</li>
                    <li>Contact us for support</li>
                    <li>Sign up for our newsletter</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">How We Use Your Information</h2>
                  <p className="text-text/80 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-text/80 ml-4">
                    <li>Process your orders and payments</li>
                    <li>Communicate with you about your orders</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Improve our services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">Information Sharing</h2>
                  <p className="text-text/80 mb-4">
                    We do not sell your personal information. We may share your information with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-text/80 ml-4">
                    <li>Service providers who assist in our operations</li>
                    <li>Professional advisers</li>
                    <li>Law enforcement when required by law</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">Data Security</h2>
                  <p className="text-text/80">
                    We implement appropriate technical and organizational measures to protect your
                    personal information against unauthorized access, alteration, disclosure, or
                    destruction.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">Your Rights</h2>
                  <p className="text-text/80 mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-text/80 ml-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">Contact Us</h2>
                  <p className="text-text/80">
                    If you have any questions about this Privacy Policy, please contact us at:
                    <br />
                    Email: privacy@makeit3d.com
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