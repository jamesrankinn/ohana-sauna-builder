
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Home, Settings, Package, Image, Book, Phone, Users, Menu, X } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", path: createPageUrl("Home"), icon: Home },
    { name: "Designer", path: createPageUrl("Designer"), icon: Settings },
    { name: "Gallery", path: createPageUrl("Gallery"), icon: Image },
    { name: "About", path: createPageUrl("About"), icon: Users },
    { name: "Education", path: createPageUrl("Education"), icon: Book },
    { name: "Orders", path: createPageUrl("Orders"), icon: Package },
    { name: "Contact", path: createPageUrl("Contact"), icon: Phone },
  ];

  return (
    <div className="min-h-screen bg-[var(--steam-white)] text-[var(--charcoal)]">
      <style>
        {`
          :root {
            --warm-cedar: #D2B48C;
            --rich-mahogany: #CD853F;
            --deep-forest: #2F4F2F;
            --sauna-stone-gray: #8B7D6B;
            --steam-white: #F8F6F0;
            --ember-orange: #CC6600;
            --zen-sage: #9CAF88;
            --charcoal: #36454F;
            --soft-birch: #F5F2E8;
          }
        `}
      </style>
      
      {/* Header */}
      <header className="bg-[var(--steam-white)]/90 backdrop-blur-lg border-b border-[var(--sauna-stone-gray)]/20 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            <Link to={createPageUrl("Home")} className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-[var(--deep-forest)] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                <Home className="w-6 h-6 text-[var(--steam-white)]" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[var(--charcoal)]">Ohana Saunas</h1>
                <p className="text-sm text-[var(--charcoal)]/70 -mt-1">Handcrafted Wellness Sanctuaries</p>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium ${
                    location.pathname === item.path
                      ? 'bg-[var(--deep-forest)] text-[var(--steam-white)] shadow-md'
                      : 'text-[var(--charcoal)] hover:text-[var(--deep-forest)] hover:bg-[var(--warm-cedar)]/30'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[var(--charcoal)] hover:bg-[var(--warm-cedar)]/30"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>

          {/* Mobile dropdown menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-[var(--steam-white)]/98 backdrop-blur-lg border-b border-[var(--sauna-stone-gray)]/20 shadow-xl">
              <div className="px-4 py-4 space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all text-base font-medium ${
                      location.pathname === item.path
                        ? 'bg-[var(--deep-forest)] text-[var(--steam-white)]'
                        : 'text-[var(--charcoal)] hover:bg-[var(--warm-cedar)]/30'
                    }`}
                  >
                    <item.icon className="w-6 h-6" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[var(--charcoal)] text-[var(--steam-white)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[var(--deep-forest)] rounded-xl flex items-center justify-center">
                  <Home className="w-6 h-6 text-[var(--steam-white)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Ohana Saunas</h3>
                  <p className="text-[var(--steam-white)]/70">Handcrafted Wellness Sanctuaries</p>
                </div>
              </div>
              <p className="text-[var(--steam-white)]/80 mb-4">
                For over two decades, we've been crafting premium custom saunas that transform homes into wellness retreats. Each sauna is a masterpiece of Finnish tradition and modern innovation.
              </p>
              <p className="text-[var(--steam-white)]/60 text-sm">
                Licensed • Insured • 20+ Years Experience
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-[var(--steam-white)]/80 text-sm">
                <li>Custom Sauna Design</li>
                <li>Traditional Finnish Saunas</li>
                <li>Infrared Saunas</li>
                <li>Steam Rooms</li>
                <li>Installation & Maintenance</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-[var(--steam-white)]/80 text-sm">
                <p>(250) 883-6649</p>
                <p>contact@ohanasauna.ca</p>
                <p>Mon-Fri: 8AM-6PM</p>
                <p>Sat: 9AM-4PM</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[var(--steam-white)]/20 mt-12 pt-8 text-center text-[var(--steam-white)]/60 text-sm">
            <p>&copy; 2024 Ohana Saunas. All rights reserved. | Licensed Contractor | Fully Insured</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
