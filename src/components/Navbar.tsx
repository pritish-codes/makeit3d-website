import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Printer, Menu, X } from 'lucide-react';

interface NavbarProps {
  onServicesClick?: (e: React.MouseEvent) => void;
}

export function Navbar({ onServicesClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleServicesClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      // If we're already on the home page, just scroll
      onServicesClick?.(e);
    } else {
      // If we're on another page, navigate home first then scroll
      navigate('/', { state: { scrollToServices: true } });
    }
  };

  const headerLogo = (
    <div className="flex items-center space-x-2">
      <Printer className="h-8 w-8 text-purple-500" />
      <span className="text-2xl font-bold text-white">MakeIt3D</span>
    </div>
  );

  return (
    <nav className="relative z-50 container mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        <Link to="/">{headerLogo}</Link>
        <div className="hidden md:flex space-x-8">
          <button onClick={handleServicesClick} className="text-gray-300 hover:text-purple-400 transition">Services</button>
          <Link to="/about" className="text-gray-300 hover:text-purple-400 transition">About</Link>
          <Link to="/portfolio" className="text-gray-300 hover:text-purple-400 transition">Portfolio</Link>
          <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition">Contact</Link>
        </div>
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
          <div className="flex flex-col space-y-4 p-6">
            <button onClick={handleServicesClick} className="text-left text-gray-300 hover:text-purple-400 transition">Services</button>
            <Link to="/about" className="text-gray-300 hover:text-purple-400 transition">About</Link>
            <Link to="/portfolio" className="text-gray-300 hover:text-purple-400 transition">Portfolio</Link>
            <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}