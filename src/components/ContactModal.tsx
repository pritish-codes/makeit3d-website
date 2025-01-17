import React from "react";
import { X, Send, Phone, Mail, MapPin } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`fixed left-1/2 top-1/2 transform -translate-x-1/2 w-full max-w-lg bg-white shadow-2xl rounded-3xl transition-all duration-300 z-50 ${
          isOpen
            ? "opacity-100 -translate-y-1/2 scale-100"
            : "opacity-0 -translate-y-[60%] scale-90 pointer-events-none"
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Modal Content */}
        <div className="px-8 py-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in <span className="text-purple-600">Touch</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Have a question or project in mind? We'd love to hear from you.
          </p>

          {/* Contact Info */}
          <div className="space-y-5 mb-10">
            <div className="flex items-center space-x-3 text-gray-600">
              <Phone className="h-5 w-5 text-purple-600" />
              <span className="font-medium">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Mail className="h-5 w-5 text-purple-600" />
              <span className="font-medium">info@makeit3d.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <MapPin className="h-5 w-5 text-purple-600" />
              <span className="font-medium">123 Print Street, Tech City</span>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="John"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 shadow-inner placeholder-gray-400
                             focus:ring-2 focus:ring-purple-500 focus:outline-none transition-shadow"
                  required
                />
              </div>
              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 shadow-inner placeholder-gray-400
                             focus:ring-2 focus:ring-purple-500 focus:outline-none transition-shadow"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="johndoe@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 shadow-inner placeholder-gray-400
                           focus:ring-2 focus:ring-purple-500 focus:outline-none transition-shadow"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="How can we help?"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 shadow-inner placeholder-gray-400
                           focus:ring-2 focus:ring-purple-500 focus:outline-none transition-shadow"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your project or question..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 shadow-inner placeholder-gray-400
                           focus:ring-2 focus:ring-purple-500 focus:outline-none transition-shadow resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-lg font-medium
                         shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center"
            >
              <span>Send Message</span>
              <Send className="h-5 w-5 ml-2" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
