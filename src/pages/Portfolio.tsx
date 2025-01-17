import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Printer, Cog, Lightbulb, Shield, Backpack, Hand, Monitor, Key, Cpu } from 'lucide-react';

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
  Shield,
  Backpack,
  Hand,
  Monitor,
  Key,
  Cpu,
  Lightbulb,
} as const;

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "PCB Enclosure",
    category: "Industrial",
    description: "Custom PCB enclosures with IP65 protection for reliable and secure applications",
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1974",
    icon: "Shield"
  },
  {
    id: 2,
    title: "Bag Strap Hooks",
    category: "Consumer Products",
    description: "3D-printed bag strap hooks manufactured for a leading bag manufacturing company",
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2070",
    icon: "Backpack"
  },
  {
    id: 3,
    title: "Bionic Hand",
    category: "Research",
    description: "3D-printed bionic hand and arm created for an innovative college research project",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2070",
    icon: "Hand"
  },
  {
    id: 4,
    title: "Bag Elements",
    category: "Prototyping",
    description: "3D-printed bag elements for visualization, produced for a bag manufacturing company",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1974",
    icon: "Backpack"
  },
  {
    id: 5,
    title: "Classroom ID Board",
    category: "Signage",
    description: "Custom-designed and 3D-printed classroom identification board for clear and stylish labelling",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2022",
    icon: "Monitor"
  },
  {
    id: 6,
    title: "Remote Holder",
    category: "Home Solutions",
    description: "Custom-designed and 3D-printed remote holder for convenient organization",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2070",
    icon: "Monitor"
  },
  {
    id: 7,
    title: "Racing Team Keychains",
    category: "Merchandise",
    description: "Vibrant multi-colour 3D-printed keychains created in bulk for a college racing team",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64926?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2070",
    icon: "Key"
  },
  {
    id: 8,
    title: "Raspberry Pi Case",
    category: "Electronics",
    description: "Precision 3D-printed Raspberry Pi enclosure for secure and efficient hardware protection",
    image: "https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2080",
    icon: "Cpu"
  },
  {
    id: 9,
    title: "Pi Cam Housing",
    category: "Electronics",
    description: "Custom 3D-printed Pi Cam enclosure designed for an astronomy enthusiast's projects",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2070",
    icon: "Cpu"
  },
  {
    id: 10,
    title: "Prosthetic Hand",
    category: "Medical",
    description: "Fully functional hand designed and 3D-printed for an innovative tech company",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2070",
    icon: "Hand"
  },
  {
    id: 11,
    title: "Company Logo Display",
    category: "Corporate",
    description: "3D-printed company logo designed as a stylish desk display",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2070",
    icon: "Lightbulb"
  }
];

// Rest of the component remains the same
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
      <div className="relative bg-gradient-to-br from-accent via-accent/80 to-accent/60 overflow-hidden">
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
            Our Portfolio
          </motion.h1>
          <motion.p
            className="text-xl text-secondary max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Explore our diverse collection of 3D printing projects and innovations.
          </motion.p>
        </motion.div>
      </div>

      {/* Portfolio Grid Section */}
      <section className="py-24 bg-primary">
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
                  className="group relative bg-primary rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-4 py-1 bg-secondary text-accent rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-text">{item.title}</h3>
                    <p className="text-text/70">{item.description}</p>
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