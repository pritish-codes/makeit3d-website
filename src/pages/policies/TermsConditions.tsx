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
            Last updated: January 29, 2025
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
                  <h2 className="text-2xl font-bold text-text mb-6">Interpretation and Definitions</h2>
                  <h3 className="text-xl font-semibold text-text mb-4">Interpretation</h3>
                  <p className="text-text/80">
                    Words with capitalized initials have meanings defined under the following conditions.
                  </p>

                  <h3 className="text-xl font-semibold text-text mt-6 mb-4">Definitions</h3>
                  <ul className="list-disc list-inside space-y-2 text-text/80 ml-4">
                    <li><strong>Affiliate</strong>: An entity that controls, is controlled by, or is under common control with a party.</li>
                    <li><strong>Country</strong>: Karnataka, India.</li>
                    <li><strong>Company</strong>: Makeit3D, #39 3rd Cross, Saibabanagar, Srirampuram, Bengaluru-560021.</li>
                    <li><strong>Device</strong>: Any device that can access the Service, such as a computer, cellphone, or tablet.</li>
                    <li><strong>Service</strong>: Refers to the Website.</li>
                    <li><strong>Terms and Conditions</strong>: This agreement that governs the use of the Service.</li>
                    <li><strong>Website</strong>: Makeit3D, accessible from <a href="https://www.makeit3d.in" className="text-accent underline">www.makeit3d.in</a>.</li>
                    <li><strong>You</strong>: The individual or legal entity accessing or using the Service.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">Acknowledgment</h2>
                  <p className="text-text/80">
                    These Terms govern the use of this Service and establish the agreement between You and the Company. Your access to and use of the Service is conditioned upon acceptance of these Terms.
                  </p>
                  <p className="text-text/80">
                    If You do not agree with any part of these Terms, You may not access the Service.
                  </p>
                  <p className="text-text/80">
                    You represent that you are over 18 years old, as the Company does not permit those under 18 to use the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">Links to Other Websites</h2>
                  <p className="text-text/80">
                    Our Service may contain links to third-party websites. We have no control over and assume no responsibility for their content, privacy policies, or practices.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">Termination</h2>
                  <p className="text-text/80">
                    We may terminate or suspend Your access immediately if You breach these Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">Limitation of Liability</h2>
                  <p className="text-text/80">
                    To the maximum extent permitted by applicable law, the Company shall not be liable for any indirect, incidental, special, or consequential damages arising from Your use of the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
                  <p className="text-text/80">
                    The Service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">Governing Law</h2>
                  <p className="text-text/80">
                    The laws of Karnataka, India, govern these Terms and Your use of the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">Dispute Resolution</h2>
                  <p className="text-text/80">
                    If You have any concerns about the Service, You agree to resolve the dispute informally by contacting the Company.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">Changes to These Terms</h2>
                  <p className="text-text/80">
                    We reserve the right to modify these Terms at any time. By continuing to use Our Service after changes become effective, You agree to be bound by the revised terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">Contact Us</h2>
                  <p className="text-text/80">
                    If you have any questions about these Terms and Conditions, You can contact us:
                  </p>
                  <p className="text-text/80">
                    Email: <a href="mailto:makeit3d9212@gmail.com" className="text-accent underline">makeit3d9212@gmail.com</a>
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
