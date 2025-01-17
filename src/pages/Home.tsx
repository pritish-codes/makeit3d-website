import React, { useEffect } from 'react';
import { Printer, ChevronRight, Lightbulb, Factory, PenTool, Cog, Box } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import {TestimonialSlider} from '../components/Testimonial'
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToServices = (e?: React.MouseEvent) => {
    e?.preventDefault();
    const servicesSection = document.querySelector('#services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Check if we should scroll to services after navigation
    if (location.state?.scrollToServices) {
      // Small delay to ensure the page is rendered
      setTimeout(scrollToServices, 100);
      // Clear the state
      navigate('/', { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  const services = [
    {
      icon: Lightbulb,
      title: 'FDM 3D Printing',
      description: 'Makeit3D specializes in cost-effective FDM 3D printing, delivering durable prototypes, custom parts, and small-scale production with precision, rapid turnaround, and versatile material options.',
      link: '/services/fdm'
    },
    {
      icon: Factory,
      title: 'SLA 3D Printing',
      description: 'We provide high-precision SLA 3D printing, offering detailed prototypes, smooth finishes, and versatile applications with speed, customization, and exceptional quality for every project.',
      link: '/services/small-batch-manufacturing'
    },
    {
      icon: PenTool,
      title: 'Reverse Engineering Services',
      description: 'We provide expert reverse engineering services, recreating, analyzing, and enhancing designs with cutting-edge 3D scanning, CAD tools, and tailored solutions for diverse industries.',
      link: '/services/design-assistance'
    },
    {
      icon: Cog,
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

  return (
    <>
      {/* Hero Section */}
      <header className="relative h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[100px]" />
            <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[90px]" />
          </div>
        </div>

        <Navbar onServicesClick={scrollToServices} />

        <div className="relative z-10 container mx-auto px-6 flex-1 flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 rounded-full mb-6">
                <span className="text-purple-400 text-sm font-medium">Innovation in 3D Printing</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                From Concept to Creation, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">We Print It All</span>
              </h1>
                <p className="text-xl text-white mb-8 leading-relaxed">
                Your one-stop solution for custom 3D printing, tailored to your imagination.
                </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={scrollToServices} className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center text-lg font-semibold">
                  Our Services <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => navigate('/portfolio')} 
                  className="px-8 py-4 bg-gray-800/50 backdrop-blur text-white rounded-lg hover:bg-gray-700/50 transition-all duration-300 text-lg font-semibold border border-gray-700 hover:border-gray-600"
                >
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1638959684318-68dd903ef878?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="3D printing in action" 
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-square ring-1 ring-gray-800"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-gray-600">
              Discover how MakeIt3D transforms ideas into reality with cutting-edge 3D printing services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                  >
                    Learn More <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px]" />
          </div>
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with us today to discuss your 3D printing needs and receive a free quote.
            </p>
            <Link 
              to="/contact"
              className="group inline-flex px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 items-center justify-center text-lg font-semibold"
            >
              Contact Us <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      <TestimonialSlider/>
      <Footer />
    </>
  );
}