import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, MessageCircle, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(186,104,200,0.2),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">AI With Ayesha</h3>
            <p className="text-purple-100 mb-4">
              Pakistan's Youngest AI Creator & Youth Tech Speaker
            </p>
            <p className="text-sm text-purple-200">
              Inspiring the next generation to learn AI and technology
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-purple-100 hover:text-accent-300 transition-colors">
                About
              </Link>
              <Link to="/projects" className="text-purple-100 hover:text-accent-300 transition-colors">
                Projects
              </Link>
              <Link to="/speaking" className="text-purple-100 hover:text-accent-300 transition-colors">
                Speaking
              </Link>
              <Link to="/blog" className="text-purple-100 hover:text-accent-300 transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.youtube.com/@aiwithayesha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-100 hover:text-accent-300 transition-colors"
              >
                <Youtube size={18} />
                YouTube
              </a>
              <a
                href="https://instagram.com/aiwithayesha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-100 hover:text-accent-300 transition-colors"
              >
                <Instagram size={18} />
                Instagram
              </a>
              <a
                href="https://wa.me/923162092866"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-100 hover:text-accent-300 transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href="mailto:ayesha@aiwithayesha.com"
                className="flex items-center gap-2 text-purple-100 hover:text-accent-300 transition-colors"
              >
                <Mail size={18} />
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-700 text-center text-sm text-purple-200">
          <p>&copy; {new Date().getFullYear()} AI With Ayesha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
