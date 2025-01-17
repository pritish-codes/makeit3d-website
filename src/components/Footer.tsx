import React from 'react';
import { Link } from 'react-router-dom';
import { Printer, Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  const footerLogo = (
    <div className="flex items-center space-x-2 mb-6 md:mb-0">
      <Printer className="h-8 w-8 text-purple-500" />
      <span className="text-2xl font-bold">MakeIt3D</span>
    </div>
  );

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Grid layout: 4 balanced columns */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand / Intro */}
          <div>
            <Link to="/">{footerLogo}</Link>
            <p className="mt-4 text-gray-400">
              Bringing your ideas to life through innovative 3D printing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/#services" className="text-gray-400 hover:text-purple-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-purple-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-purple-400 transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>makeit3d9212@gmail.com</li>
              <li>+91 9591244280</li>
              <li>
                #83, 3rd Cross<br />
                Saibabanagar, Srirampuram<br />
                Bangalore, 560021
              </li>
            </ul>
          </div>

          {/* Policies and Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Policies</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-purple-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-conditions"
                  className="text-gray-400 hover:text-purple-400 transition"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="text-gray-400 hover:text-purple-400 transition"
                >
                  Refund/Return Policy
                </Link>
              </li>
            </ul>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/make_it3d/"
                className="text-gray-400 hover:text-purple-400 transition"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 MakeIt3D. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}