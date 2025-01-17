import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  title: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Karan Prabhu',
    title: 'Designation',
    image: 'https://images.unsplash.com/photo-1594737625785-c891b256dd7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    quote: 'I would totally recommend Makeit3D if anyone has requirements for 3D printing and design services. Very efficient, quality and specifications were on point to the spec sheets. They were able to print the complex product samples and deliver it before the deadline.'
  },
  {
    name: 'Abhishek Kulkarni',
    title: 'Designation',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    quote: 'Very happy working with Makeit3D on getting my 3D prints made. They are super responsive and show genuine interest in getting a quality print done.'
  },
  {
    name: 'Raveena Mittal',
    title: 'Designation',
    image: 'https://images.unsplash.com/photo-1593708358799-2d6c5f686733?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    quote: "Makeit3D surely has a bunch of talent always ready to serve your 3D printing requests with the best quality and finish. I had ordered a couple of gifts items for birthdays and anniversaries and I couldn't be more satisfied."
  }
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient and effects */}
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
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear from businesses and individuals who have transformed their ideas into reality with our 3D printing services.
            </p>
          </motion.div>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12">
            <div className="absolute -inset-1">
              <div className="w-full h-full rotate-180 opacity-30 bg-gradient-to-r from-purple-500/30 via-transparent to-transparent rounded-2xl blur" />
            </div>

            {/* Content Container */}
            <div className="relative">
              {/* Quote Icon */}
              <Quote className="h-12 w-12 text-purple-400/50 mb-6" />
              
              {/* Main Content Area - Fixed Height */}
              <div className="h-[300px] mb-8">
                <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                  {/* Image */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`image-${currentIndex}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl" />
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover ring-2 ring-purple-500/20"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Text Content */}
                  <div className="flex flex-col">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`content-${currentIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                      >
                        <blockquote className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
                          "{testimonials[currentIndex].quote}"
                        </blockquote>
                        <div>
                          <p className="text-white font-semibold text-lg">
                            {testimonials[currentIndex].name}
                          </p>
                          <p className="text-purple-400">
                            {testimonials[currentIndex].title}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center space-x-4 pt-4 border-t border-white/10">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNext}
                  className="p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}