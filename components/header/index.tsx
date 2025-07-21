'use client'

import { CodeXml, Menu, X } from "lucide-react";
import { RoundedButton } from "../ui/roundedButton";
import { useState } from "react";
import { Button } from "../ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-zinc-900/80 border-b border-zinc-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-xl border border-primary/20">
              <CodeXml className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">
              <span className="bg-gradient-to-t from-primary to-red-300 bg-clip-text text-transparent">
                JockaMT
              </span>
              <span className="text-zinc-300">.dev</span>
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {headerLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-xl transition-all duration-200 ease-in-out"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <RoundedButton onClick={() => window.location.href = 'https://wa.link/1sdj1y'} className="bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 text-white font-medium px-6 py-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-200">
              Contate-nos
            </RoundedButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              onClick={toggleMenu}
              className="p-2 text-zinc-300 hover:text-white rounded-lg transition-colors duration-200"
            >
              <div className="relative p-1 w-6 h-6">
                <Menu className={`absolute h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                <X className={`absolute h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 border-t border-zinc-700/50' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className={`px-2 pt-2 pb-3 space-y-1 transform transition-all duration-300 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}>
            {headerLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="block px-3 py-2 text-base font-medium text-zinc-300 hover:text-white rounded-lg transition-all duration-200 transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <RoundedButton 
                className="w-full bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 text-white font-medium py-2 shadow-lg shadow-primary/25 transition-all duration-200 transform hover:scale-105"
                onClick={() => 
                  {
                    window.location.href = 'https://wa.link/1sdj1y'
                    setIsMenuOpen(false)
                  }
                }
              >
                Contate-nos
              </RoundedButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;