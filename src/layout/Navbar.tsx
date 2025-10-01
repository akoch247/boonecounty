import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Flag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/aboutus', label: 'About Us' },
    { path: '/events', label: 'Events' },
    { path: '/get-involved', label: 'Get Involved' },
    { path: '/join', label: 'Join' },
    { path: '/news', label: 'News & Resources' }
  ];

  return (
    <header className="border-b border-neutral-200 bg-white/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <Flag className="h-6 w-6 text-blue-600" />
          <span className="text-xl text-neutral-900">BCRWC</span>
          <Flag className="h-6 w-6 text-red-600" />
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {navigationItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant="ghost"
                className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-neutral-100 text-neutral-900'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <div className="hidden md:flex">
          <Link to="/join">
            <Button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-4 py-2 rounded-md shadow-md">
              <Flag className="h-5 w-5 mr-2" /> Join Now
            </Button>
          </Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <nav className="flex flex-col px-4 py-2">
            {navigationItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className={`w-full text-left px-4 py-2 rounded-md ${
                    location.pathname === item.path
                      ? 'bg-neutral-100 text-neutral-900'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
