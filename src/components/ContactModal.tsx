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
      <div
        className={`fixed inset-0 bg-text/50 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed left-1/2 top-1/2 transform -translate-x-1/2 w-full max-w-lg bg-primary shadow-2xl rounded-3xl transition-all duration-300 z-50 ${
          isOpen
            ? "opacity-100 -translate-y-1/2 scale-100"
            : "opacity-0 -translate-y-[60%] scale-90 pointer-events-none"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-text/40 hover:text-text/60 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="px-8 py-10">
          <h2 className="text-4xl font-bold text-text mb-4">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <p className="text-text/80 mb-8">
            Have a question or project in mind? We'd love to hear from you.
          </p>

          <div className="space-y-5 mb-10">
            <div className="flex items-center space-x-3 text-text/80">
              <Phone className="h-5 w-5 text-accent" />
              <span className="font-medium">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3 text-text/80">
              <Mail className="h-5 w-5 text-accent" />
              <span className="font-medium">info@makeit3d.com</span>
            </div>
            <div className="flex items-center space-x-3 text-text/80">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="font-medium">123 Print Street, Tech City</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-text mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="John"
                  className="w-full px-4 py-3 rounded-lg border border-text/20 bg-secondary shadow-inner placeholder-text/40
                             focus:ring-2 focus:ring-accent focus:outline-none transition-shadow"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-text mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Doe"
                  className="w-full px-4 py-3 rounded-lg border border-text/20 bg-secondary shadow-inner placeholder-text/40
                             focus:ring-2 focus:ring-accent focus:outline-none transition-shadow"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-text mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="johndoe@example.com"
                className="w-full px-4 py-3 rounded-lg border border-text/20 bg-secondary shadow-inner placeholder-text/40
                           focus:ring-2 focus:ring-accent focus:outline-none transition-shadow"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-text mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="How can we help?"
                className="w-full px-4 py-3 rounded-lg border border-text/20 bg-secondary shadow-inner placeholder-text/40
                           focus:ring-2 focus:ring-accent focus:outline-none transition-shadow"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-text mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 rounded-lg border border-text/20 bg-secondary shadow-inner placeholder-text/40
                           focus:ring-2 focus:ring-accent focus:outline-none transition-shadow resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gold text-text rounded-lg text-lg font-medium
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