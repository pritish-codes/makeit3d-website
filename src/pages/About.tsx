import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* =============================
          HERO SECTION
      ============================== */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <Navbar />

        {/* Animated background elements */}
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
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[90px]" />
          </div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 container mx-auto px-6 py-24"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About MakeIt3D
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Pioneering the future of manufacturing through innovative 3D
            printing solutions.
          </motion.p>
        </motion.div>
      </div>

      {/* =============================
          COMPANY STORY SECTION
      ============================== */}
      <motion.section
        className="py-24 bg-white relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <motion.h2
                className="text-3xl font-bold mb-6"
                variants={itemVariants}
              >
                Our Story
              </motion.h2>
              <motion.p className="text-gray-600 mb-6" variants={itemVariants}>
                Makeit3D is a dynamic and innovative company specializing in
                providing comprehensive 3D printing and design solutions. With
                expertise in FDM (Fused Deposition Modeling), SLA
                (Stereolithography), reverse engineering, product development,
                and 3D design, we are committed to offering our clients
                state-of-the-art technologies and tailored solutions that meet
                their specific needs. Our FDM and SLA 3D printing services allow
                us to produce highly accurate prototypes and functional parts
                with exceptional precision, making us a trusted partner for
                businesses looking for rapid prototyping and small-batch
                manufacturing. In addition, our reverse engineering services
                help businesses rebuild or improve existing products by creating
                detailed digital models from physical objects, while our 3D
                design services support the creation of custom designs that
                bring innovative ideas to life. We also specialize in end-to-end
                product development, working closely with our clients from
                concept to final product, ensuring a seamless process that
                results in high-quality, market-ready solutions. At Makeit3D, we
                pride ourselves on delivering efficient, cost-effective, and
                scalable solutions that help our clients stay ahead in an
                ever-evolving market, fostering innovation and driving success
                through advanced 3D technology.
              </motion.p>
              <motion.p className="text-gray-600" variants={itemVariants}>
                Our commitment to innovation, quality, and customer satisfaction
                has made us a trusted partner for businesses and individuals
                looking to bring their ideas to life.
              </motion.p>
            </motion.div>
            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Our workshop"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-video"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* =============================
          FOUNDERS SECTION
      ============================== */}
      <motion.section
        className="relative py-24 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <motion.div
            className="absolute inset-0"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px]" />
          </motion.div>
        </div>
        <div className="relative container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-16 text-white"
            variants={itemVariants}
          >
            Meet Our Founders
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Founder 1 */}
            <motion.div
              className="text-center"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative mb-6 inline-block">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl" />
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                  alt="Naveen Gururaj - Co-founder"
                  className="relative w-48 h-48 rounded-full object-cover mx-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">
                Naveen Gururaj
              </h3>
              <p className="text-purple-400 mb-4">CEO & Co-founder</p>
              <p className="text-gray-300 max-w-md mx-auto">
                A Mechanical Engineering graduate from RV College of
                Engineering, Naveen brings extensive experience from the SPM
                manufacturing and 3D printing industries. With a passion for 3D
                design, he leverages his expertise to drive innovation and
                deliver impactful solutions in this evolving field.
              </p>
            </motion.div>

            {/* Founder 2 */}
            <motion.div
              className="text-center"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative mb-6 inline-block">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl" />
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="Marcus Rodriguez - CTO"
                  className="relative w-48 h-48 rounded-full object-cover mx-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">
                Harivinay
              </h3>
              <p className="text-purple-400 mb-4">CTO & Co-founder</p>
              <p className="text-gray-300 max-w-md mx-auto">
                His journey began in 2020, driven by a passion for design and
                problem-solving. An internship sparked his interest in 3D
                printing, transforming ideas into reality. Collaborations with
                Airbus, Caterpillar, and Bentley refined his skills in precision
                and innovation. Today, he leverages this expertise to deliver
                cutting-edge 3D printing solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* =============================
          LOCATION SECTION
      ============================== */}
      <motion.section
        className="py-24 bg-white relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-4">Visit Our Facility</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Located in the heart of Bangalore, our state-of-the-art facility is 
            equipped with the latest 3D printing technology.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Embedded Iframe Map */}
            <motion.div
              className="relative overflow-hidden rounded-xl shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.9694498394388!2d77.55401557159733!3d12.996126343077202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8ed3544e23%3A0xe0911aa3b7b3689b!2s39%2C%2019%2F39%2C%203rd%20Cross%20Rd%2C%20Mariappanapalya%2C%20Rajajinagar%2C%20Bengaluru%2C%20Karnataka%20560021!5e0!3m2!1sen!2sin!4v1736818971481!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
            <motion.div className="space-y-6" variants={itemVariants}>
              <h3 className="text-2xl font-semibold">Our Location</h3>
              <p className="text-gray-600">
                #83, 3rd Cross Saibabanagar, Srirampuram
                <br />
                Bangalore, 560021{" "}
              </p>
              <div>
                <h4 className="font-semibold mb-2">Hours of Operation</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>Monday - Friday: 10am - 6pm</li>
                  <li>Saturday - Sunday: Closed</li>
                </ul>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <motion.a
                  href="https://www.google.com/maps/dir//39+19%2F39,+3rd+Cross+Rd+Mariappanapalya,+Rajajinagar+Bengaluru,+Karnataka+560021/@12.9960593,77.5561978,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3bae3d8ed3544e23:0xe0911aa3b7b3689b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Directions
                </motion.a>
                <motion.div
                  className="px-8 py-4 bg-white text-gray-800 rounded-lg border border-gray-200 hover:border-purple-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/contact">Contact Us</Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <Footer />
    </motion.div>
  );
}
