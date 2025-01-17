import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ExternalLink, Printer, Cog, Lightbulb } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  icon: keyof typeof icons;
}

const icons = {
  Printer,
  Cog,
  Lightbulb,
} as const;

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Custom Drone Parts",
    category: "Prototyping",
    description: "High-strength, lightweight drone components optimized for performance",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: "Printer"
  },
  {
    id: 2,
    title: "Medical Device Prototype",
    category: "Healthcare",
    description: "Precision-engineered medical device components for testing",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    icon: "Cog"
  },
  {
    id: 3,
    title: "Architectural Model",
    category: "Architecture",
    description: "Detailed architectural model for client presentation",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    icon: "Lightbulb"
  },
  {
    id: 4,
    title: "Custom Robot Parts",
    category: "Robotics",
    description: "Specialized components for robotic automation",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: "Cog"
  },
  {
    id: 5,
    title: "Consumer Product Prototype",
    category: "Product Design",
    description: "Rapid prototype for consumer product testing",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: "Printer"
  },
  {
    id: 6,
    title: "Automotive Parts",
    category: "Automotive",
    description: "Custom automotive components for vintage car restoration",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: "Cog"
  },
];

export function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

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
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
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
            Our Portfolio
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Explore our diverse collection of 3D printing projects and innovations.
          </motion.p>
        </motion.div>
      </div>

      {/* Portfolio Grid Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {portfolioItems.map((item) => {
              const Icon = icons[item.icon];
              return (
                <motion.div
                  key={item.id}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <button className="flex items-center text-purple-600 hover:text-purple-700 transition-colors">
                      View Details <ExternalLink className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}