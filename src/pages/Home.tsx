import React, { useEffect } from 'react';
import { Printer, ChevronRight, Factory, Box, Wrench, Package, ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { TestimonialSlider } from '../components/Testimonial';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToServices = (e?: React.MouseEvent) => {
    e?.preventDefault();
    const servicesSection = document.querySelector('#services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (location.state?.scrollToServices) {
      setTimeout(scrollToServices, 100);
      navigate('/', { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  const services = [
    {
      icon: Factory,
      title: 'FDM 3D Printing',
      description: 'Makeit3D specializes in cost-effective FDM 3D printing, delivering durable prototypes, custom parts, and small-scale production with precision, rapid turnaround, and versatile material options.',
      link: '/services/fdm'
    },
    {
      icon: Factory,
      title: 'SLA 3D Printing',
      description: 'We provide high-precision SLA 3D printing, offering detailed prototypes, smooth finishes, and versatile applications with speed, customization, and exceptional quality for every project.',
      link: '/services/sla'
    },
    {
      icon: Wrench,
      title: 'Reverse Engineering Services',
      description: 'We provide expert reverse engineering services, recreating, analyzing, and enhancing designs with cutting-edge 3D scanning, CAD tools, and tailored solutions for diverse industries.',
      link: '/services/reverse-engineering'
    },
    {
      icon: Package,
      title: 'Product Development Services',
      description: 'We provide comprehensive product development services, transforming ideas into market-ready products with innovative 3D design, rapid prototyping, and advanced manufacturing tailored to your needs.',
      link: '/services/industrial-solutions'
    },
    {
      icon: Box,
      title: '3D Design Services',
      description: 'We offer expert 3D design services to transform your ideas into detailed and functional models, tailored to meet your specific needs with precision and creativity.',
      link: '/services/designServices'
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <header className="relative min-h-[100svh] bg-accent">
        <div className="absolute inset-0 hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent/80 to-accent/60">
            <div className="absolute -inset-[10px] opacity-50">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/30 rounded-full blur-[100px]" />
              <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px]" />
              <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[90px]" />
            </div>
          </div>
        </div>

        <Navbar onServicesClick={scrollToServices} />

        <div className="relative z-10 container mx-auto px-6 flex-1 flex items-center min-h-[calc(100vh-5rem)]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 bg-gold/10 rounded-full mb-6">
                <span className="text-gold text-sm font-medium">Innovation in 3D Printing</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                From Concept to Creation, <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-primary">We Print It All</span>
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Your one-stop solution for custom 3D printing, tailored to your imagination.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={scrollToServices} className="group px-8 py-4 bg-gold text-accent rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/25 flex items-center justify-center text-lg font-semibold">
                  Our Services <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => navigate('/portfolio')} 
                  className="px-8 py-4 bg-accent/50 backdrop-blur text-primary rounded-lg hover:bg-accent/60 transition-all duration-300 text-lg font-semibold border border-primary/20 hover:border-gold"
                >
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-primary/20 rounded-2xl blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1638959684318-68dd903ef878?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="3D printing in action" 
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-square ring-1 ring-primary/20"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-12 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-text">Our Services</h2>
            <p className="text-xl text-text/80">
              Discover how MakeIt3D transforms ideas into reality with cutting-edge 3D printing services.
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <Link to={service.link}>
                    <motion.div 
                      className="h-full bg-primary rounded-2xl p-8 shadow-lg shadow-text/5 border border-text/10
                                transition-all duration-300 hover:shadow-xl hover:border-gold/20
                                relative overflow-hidden"
                      whileHover={{ y: -8 }}
                    >
                      {/* Animated gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Icon container with animation */}
                      <motion.div 
                        className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6 relative z-10
                                  group-hover:bg-accent/10 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Icon className="h-8 w-8 text-accent group-hover:text-gold transition-colors duration-300" />
                      </motion.div>

                      <h3 className="text-2xl font-semibold mb-4 text-text group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-text/70 mb-6 relative z-10">
                        {service.description}
                      </p>

                      {/* Animated learn more link */}
                      <div className="flex items-center text-accent group-hover:text-gold transition-colors duration-300">
                        <span className="font-semibold">Learn More</span>
                        <motion.div
                          className="ml-2"
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                        >
                          <ChevronRight className="h-5 w-5" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider/>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6">
          <div className="relative bg-gradient-to-b from-white to-secondary/50 rounded-3xl p-12 md:p-16 shadow-xl border border-accent/5">
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-accent/5 to-transparent opacity-60 blur-2xl" />
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-gold/5 to-transparent opacity-60 blur-2xl" />
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="flex-1 text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
                  Ready to Start Your <span className="text-accent">Project</span>?
                </h2>
                <p className="text-xl text-text/80 mb-8 max-w-2xl">
                  Get in touch with us today to discuss your 3D printing needs and receive a free quote. Let's bring your ideas to life together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact"
                    className="group inline-flex px-8 py-4 bg-gold text-accent rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/25 items-center justify-center text-lg font-semibold"
                  >
                    Start Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/portfolio"
                    className="group inline-flex px-8 py-4 bg-primary border-2 border-gold/10 text-gold rounded-xl transition-all duration-300 hover:scale-105 hover:border-gold/20 items-center justify-center text-lg font-semibold"
                  >
                    View Portfolio <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block w-1/3 relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 to-gold/10 rounded-2xl blur-2xl" />
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2070" 
                  alt="3D Printing Process" 
                  className="relative rounded-2xl shadow-xl w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}