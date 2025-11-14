import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/speaking', label: 'Speaking' },
    { href: '/media', label: 'Media' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="sticky top-0 z-50 h-18 bg-white/50 border-b border-primary-100/30 backdrop-blur-[15px] backdrop-saturate-180 shadow-[0_2px_16px_rgba(156,39,176,0.08)]">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 font-bold text-neutral-900 text-xl">
            AI With Ayesha
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'font-medium text-base transition-all duration-fast hover:text-primary-500 hover:scale-105',
                isActive(link.href) ? 'text-primary-500' : 'text-neutral-900'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button size="sm" asChild>
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-18 left-0 right-0 bg-white/90 backdrop-blur-[20px] border-b border-primary-100/30 shadow-modal">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'font-medium text-base py-2 transition-colors',
                  isActive(link.href) ? 'text-primary-500' : 'text-neutral-900'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full mt-2" asChild>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
