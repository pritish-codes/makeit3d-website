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
      className="min-h-screen bg-primary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-accent via-accent/80 to-accent/60 overflow-hidden">
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/30 rounded-full blur-[100px]" />
            <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[90px]" />
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
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About MakeIt3D
          </motion.h1>
          <motion.p
            className="text-xl text-secondary max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Pioneering the future of manufacturing through innovative 3D
            printing solutions.
          </motion.p>
        </motion.div>
      </div>

      {/* Company Story Section */}
      <motion.section
        className="py-24 bg-primary relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <motion.h2
                className="text-3xl font-bold mb-6 text-text"
                variants={itemVariants}
              >
                Our Story
              </motion.h2>
              <motion.p className="text-text/80 mb-6" variants={itemVariants}>
                Makeit3D is a dynamic and innovative company specializing in
                providing comprehensive 3D printing and design solutions. With
                expertise in FDM (Fused Deposition Modeling), SLA
                (Stereolithography), reverse engineering, product development,
                and 3D design, we are committed to offering our clients
                state-of-the-art technologies and tailored solutions that meet
                their specific needs.
              </motion.p>
              <motion.p className="text-text/80" variants={itemVariants}>
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
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-accent/20 rounded-2xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Our workshop"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-video"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Founders Section */}
      <motion.section
        className="relative py-24 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent/80 to-accent/60">
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/20 rounded-full blur-[120px]" />
          </motion.div>
        </div>
        <div className="relative container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-16 text-primary"
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
                <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-primary/20 rounded-full blur-xl" />
                <img
                  src="./founders/naveen.jpeg"
                  alt="Naveen Gururaj - Co-founder"
                  className="relative w-48 h-48 rounded-full object-cover mx-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                Naveen Gururaj
              </h3>
              <p className="text-gold mb-4">CEO & Co-founder</p>
              <p className="text-secondary max-w-md mx-auto">
                A Mechanical Engineering graduate from RV College of
                Engineering, Naveen brings extensive experience from the SPM
                manufacturing and 3D printing industries.
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
                <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-primary/20 rounded-full blur-xl" />
                <img
                  src="./founders/harivinay.jpeg"
                  alt="Harivinay"
                  className="relative w-48 h-48 rounded-full object-cover mx-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                Harivinay
              </h3>
              <p className="text-gold mb-4">CTO & Co-founder</p>
              <p className="text-secondary max-w-md mx-auto">
                His journey began in 2020, driven by a passion for design and
                problem-solving. Today, he leverages this expertise to deliver
                cutting-edge 3D printing solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Location Section */}
      <motion.section
        className="py-24 bg-primary relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-4 text-text">Visit Our Facility</h2>
            <p className="text-text/80 max-w-2xl mx-auto">
              Located in the heart of Bangalore, our state-of-the-art facility is 
              equipped with the latest 3D printing technology.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <motion.div
              className="relative overflow-hidden rounded-xl shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mapouter w-full">
                <div className="gmap_canvas w-full">
                  <iframe 
                    className="gmap_iframe w-full h-[450px]" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=makeit3d &amp;t=k&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    title="MakeIt3D Location"
                  ></iframe>
                </div>
              </div>
            </motion.div>
            <motion.div className="space-y-6" variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-text">Our Location</h3>
              <p className="text-text/80">
                #83, 3rd Cross Saibabanagar, Srirampuram
                <br />
                Bangalore, 560021
              </p>
              <div>
                <h4 className="font-semibold mb-2 text-text">Hours of Operation</h4>
                <ul className="text-text/80 space-y-2">
                  <li>Monday - Friday: 10am - 6pm</li>
                  <li>Saturday - Sunday: Closed</li>
                </ul>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <motion.a
                  href="https://www.google.com/maps/dir//39+19%2F39,+3rd+Cross+Rd+Mariappanapalya,+Rajajinagar+Bengaluru,+Karnataka+560021/@12.9960593,77.5561978,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3bae3d8ed3544e23:0xe0911aa3b7b3689b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gold text-accent rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Directions
                </motion.a>
                <motion.div
                  className="px-8 py-4 bg-primary text-text rounded-lg border border-text/20 hover:border-gold transition-all duration-300"
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