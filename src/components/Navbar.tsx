import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onServicesClick?: (e: React.MouseEvent) => void;
}

export function Navbar({ onServicesClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleServicesClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      onServicesClick?.(e);
    } else {
      navigate('/', { state: { scrollToServices: true } });
    }
  };

  return (
    <nav className="relative z-50 container mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <motion.div
            className="w-10 h-10 relative overflow-hidden rounded-full border border-primary/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/favicon/favicon.jpeg"
              alt="MakeIt3D Logo"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <span className="text-2xl font-bold text-primary">MakeIt3D</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <button
            onClick={handleServicesClick}
            className="text-primary hover:text-gold transition"
          >
            Services
          </button>
          <Link to="/about" className="text-primary hover:text-gold transition">
            About
          </Link>
          <Link
            to="/portfolio"
            className="text-primary hover:text-gold transition"
          >
            Portfolio
          </Link>
          <Link to="/contact" className="text-primary hover:text-gold transition">
            Contact
          </Link>
        </div>
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-accent/95 backdrop-blur-lg border-t border-accent">
          <div className="flex flex-col space-y-4 p-6">
            <button
              onClick={handleServicesClick}
              className="text-left text-primary hover:text-gold transition"
            >
              Services
            </button>
            <Link to="/about" className="text-primary hover:text-gold transition">
              About
            </Link>
            <Link
              to="/portfolio"
              className="text-primary hover:text-gold transition"
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="text-primary hover:text-gold transition"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
