import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const servicesSection = document.querySelector('#services');
      servicesSection?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToServices: true } });
    }
  };

  return (
    <footer className="bg-accent text-primary py-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="text-2xl font-bold text-primary mb-6 block">
              MakeIt3D
            </Link>
            <p className="mt-4 text-secondary">
              Bringing your ideas to life through innovative 3D printing solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={handleServicesClick}
                  className="text-secondary hover:text-gold transition"
                >
                  Services
                </button>
              </li>
              <li>
                <Link to="/about" className="text-secondary hover:text-gold transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-secondary hover:text-gold transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary hover:text-gold transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Contact</h4>
            <ul className="space-y-2 text-secondary">
              <li>makeit3d9212@gmail.com</li>
              <li>+91 9591244280</li>
              <li>
                #83, 3rd Cross<br />
                Saibabanagar, Srirampuram<br />
                Bangalore, 560021
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Policies</h4>
            <ul className="space-y-2 mb-6">

              <li>
                <Link
                  to="/terms-conditions"
                  className="text-secondary hover:text-gold transition"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="text-secondary hover:text-gold transition"
                >
                  Refund/Return Policy
                </Link>
              </li>
            </ul>
            <h4 className="text-lg font-semibold mb-4 text-gold">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-secondary hover:text-gold transition"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/make_it3d/"
                className="text-secondary hover:text-gold transition"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-secondary hover:text-gold transition"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-secondary hover:text-gold transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent/20 mt-12 pt-8 text-center text-secondary">
          <p>© 2024 MakeIt3D. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}