import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { RefreshCw } from 'lucide-react';

export function RefundPolicy() {
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
              <RefreshCw className="h-8 w-8 text-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Return and Refund Policy</h1>
          </div>
          <p className="text-xl text-secondary max-w-3xl">
            Last updated: February 02, 2025
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
                  <h2 className="text-2xl font-bold text-text mb-6">Introduction</h2>
                  <p className="text-text/80">
                    Thank you for shopping at Makeit3D. If, for any reason, you are not completely satisfied with a purchase, we invite you to review our policy on refunds and returns.
                  </p>
                  <p className="text-text/80">
                    This Return and Refund Policy has been created with the help of the Return and Refund Policy Generator.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">Interpretation and Definitions</h2>
                  <h3 className="text-xl font-semibold text-text mb-4">Interpretation</h3>
                  <p className="text-text/80">
                    Words with capitalized initials have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural.
                  </p>
                  <h3 className="text-xl font-semibold text-text mt-6 mb-4">Definitions</h3>
                  <ul className="list-disc list-inside space-y-2 text-text/80 ml-4">
                    <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our") refers to Makeit3D, #83 3rd Cross, Saibanagar, Srirampuram, Bengaluru-560021.</li>
                    <li><strong>Goods</strong> refer to the items offered for sale on the Service.</li>
                    <li><strong>Orders</strong> mean a request by You to purchase Goods from Us.</li>
                    <li><strong>Service</strong> refers to the Website.</li>
                    <li><strong>Website</strong> refers to Makeit3D, accessible from <a href="https://makeit3d.in" className="text-accent underline">makeit3d.in</a>.</li>
                    <li><strong>You</strong> means the individual or legal entity accessing or using the Service.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">Your Order Cancellation Rights</h2>
                  <p className="text-text/80">
                    You are entitled to cancel your Order within 7 days without giving any reason.
                  </p>
                  <p className="text-text/80">
                    The deadline for cancelling an Order is 7 days from the date you received the Goods.
                  </p>
                  <p className="text-text/80">
                    To exercise your right of cancellation, inform us via:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-text/80 ml-4">
                    <li>Email: <a href="mailto:makeit3d9212@gmail.com" className="text-accent underline">makeit3d9212@gmail.com</a></li>
                  </ul>
                  <p className="text-text/80">
                    We will reimburse you within 14 days of receiving the returned Goods, using the same payment method.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">Conditions for Returns</h2>
                  <p className="text-text/80">For Goods to be eligible for a return:</p>
                  <ul className="list-disc list-inside space-y-2 text-text/80 ml-4">
                    <li>The Goods were purchased in the last 7 days.</li>
                    <li>The Goods are in the original packaging.</li>
                  </ul>
                  <p className="text-text/80">The following Goods cannot be returned:</p>
                  <ul className="list-disc list-inside space-y-2 text-text/80 ml-4">
                    <li>Custom-made or personalized items.</li>
                    <li>Goods that deteriorate quickly or are past their expiration date.</li>
                    <li>Unsealed Goods not suitable for return due to hygiene reasons.</li>
                    <li>Items inseparably mixed with other products after delivery.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">Returning Goods</h2>
                  <p className="text-text/80">
                    You are responsible for the cost and risk of returning Goods. Return items to:
                  </p>
                  <p className="text-text/80 font-semibold">#617/618, 2nd Main, E Block, 2nd Stage, Rajajinagar, Bengaluru-560010</p>
                  <p className="text-text/80">
                    We recommend using an insured and trackable mail service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">Gifts</h2>
                  <p className="text-text/80">
                    If Goods were marked as a gift when purchased, you'll receive a gift credit once the returned product is received.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text mb-6">Contact Us</h2>
                  <p className="text-text/80">
                    If you have any questions, contact us:
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

