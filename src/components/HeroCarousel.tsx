import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  autoPlay?: boolean;
  interval?: number;
}

export function HeroCarousel({ autoPlay = true, interval = 6000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const portfolioImages = [
    { src: "/portfolio/1.jpeg", alt: "PCB Enclosure" },
    { src: "/portfolio/2.jpeg", alt: "Bag Strap Hooks" },
    { src: "/portfolio/3.jpeg", alt: "Bionic Hand" },
    { src: "/portfolio/4.jpeg", alt: "Bag Elements" },
    { src: "/portfolio/5.jpeg", alt: "Classroom ID Board" },
    { src: "/portfolio/6.jpeg", alt: "Remote Holder" },
    { src: "/portfolio/7.jpeg", alt: "Racing Team Keychains" },
    { src: "/portfolio/8.jpeg", alt: "Raspberry Pi Case" },
    { src: "/portfolio/9.jpeg", alt: "Pi Cam Housing" },
    { src: "/portfolio/10.jpeg", alt: "Prosthetic Hand" },
    { src: "/portfolio/11.jpeg", alt: "Company Logo Display" }
  ];

  // Framer Motion variants (horizontal slide only, no fade)
  const variants = {
    initial: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%'
    }),
    animate: {
      x: 0
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%'
    })
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioImages.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolioImages.length - 1 : prevIndex - 1
    );
  };

  // Start or reset the auto-play timer
  const startTimer = () => {
    if (!autoPlay) return;
    if (timerId) clearInterval(timerId);
    const id = setInterval(() => {
      handleNext();
    }, interval);
    setTimerId(id);
  };

  // Clear the timer when component unmounts
  useEffect(() => {
    startTimer();
    return () => {
      if (timerId) clearInterval(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, interval]);

  // Reset the timer each time the user manually changes the slide
  // so it doesn't auto-shift too soon.
  const handleManualChange = (newIndex: number) => {
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
    startTimer();
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden z-10 bg-gradient-to-t from-accent/30 to-transparent pointer-events-none" />

      {/* Image carousel */}
      <AnimatePresence custom={direction} mode="sync">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.6,
            ease: 'easeInOut'
          }}
          className="absolute inset-0"
        >
          <img
            src={portfolioImages[currentIndex].src}
            alt={portfolioImages[currentIndex].alt}
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* Product name overlay */}
          <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-md shadow-sm text-sm md:text-base lg:text-lg font-medium">
            {portfolioImages[currentIndex].alt}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="absolute inset-0 flex items-center justify-between z-20 px-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            handlePrev();
            startTimer(); // reset timer if user clicks
          }}
          className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            handleNext();
            startTimer(); // reset timer if user clicks
          }}
          className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20 overflow-x-auto px-4">
        {portfolioImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleManualChange(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-gold w-6'
                : 'bg-primary/50 hover:bg-primary/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
