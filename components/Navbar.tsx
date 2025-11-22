import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  onAuthClick?: () => void;
  onNavigate?: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAuthClick, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (label: string) => {
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      // Simple routing logic: 'Inicio' goes home, others go to catalog
      if (label === 'Inicio') {
        onNavigate('home');
      } else {
        onNavigate('catalog');
      }
    }
  };

  return (
    <header className="w-full relative z-50">
      {/* Top "Comic" Background Strip - Simulated with a gradient/pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-100 via-white to-gray-100 opacity-50 pointer-events-none -z-10"></div>
      
      {/* Main Nav Container */}
      <div className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-700 text-xl p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6">
              {NAV_LINKS.map((link) => (
                <button 
                  key={link.label} 
                  onClick={() => handleLinkClick(link.label)}
                  className="text-gray-600 hover:text-black font-bold uppercase text-sm tracking-wide transition-colors duration-200 font-sans focus:outline-none"
                  style={{ textShadow: '1px 1px 0px rgba(255,255,255,1)' }}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Logo for Mobile */}
            <div 
              className="lg:hidden font-black text-xl tracking-tighter italic cursor-pointer"
              onClick={() => handleLinkClick('Inicio')}
            >
              KINGDOM POP
            </div>

            {/* Right Side: Search & Actions */}
            <div className="flex flex-1 lg:flex-none items-center justify-end gap-4 md:gap-6">
              
              {/* Search Bar */}
              <div className="hidden sm:block relative w-full max-w-xs">
                <input 
                  type="text" 
                  placeholder="Buscar" 
                  className="w-full bg-white border border-gray-300 text-gray-700 rounded-full py-1.5 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent shadow-sm text-sm"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-brand-orange">
                  <i className="fas fa-search"></i>
                </button>
              </div>

              {/* User Actions */}
              <div className="flex items-center gap-4">
                <button 
                  onClick={onAuthClick}
                  className="flex flex-col items-center text-gray-600 hover:text-black group focus:outline-none"
                >
                  <i className="fas fa-user text-lg mb-0.5 group-hover:scale-110 transition-transform"></i>
                  <span className="text-[10px] font-bold uppercase hidden md:block">Perfil</span>
                </button>
                <button className="flex flex-col items-center text-gray-600 hover:text-black group focus:outline-none">
                  <div className="relative">
                    <i className="fas fa-shopping-cart text-lg mb-0.5 group-hover:scale-110 transition-transform"></i>
                    <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">2</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase hidden md:block">Carrito</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 top-full flex flex-col p-4 gap-3 z-50">
          <div className="relative w-full mb-2">
            <input 
              type="text" 
              placeholder="Buscar productos..." 
              className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>
          {NAV_LINKS.map((link) => (
            <button 
              key={link.label} 
              onClick={() => handleLinkClick(link.label)}
              className="text-gray-700 font-bold uppercase text-sm py-2 border-b border-gray-100 last:border-0 hover:text-brand-orange hover:pl-2 transition-all text-left focus:outline-none"
            >
              {link.label}
            </button>
          ))}
          {/* Mobile Auth Link */}
          <button 
            onClick={() => { setIsMobileMenuOpen(false); onAuthClick?.(); }}
            className="text-brand-orange font-bold uppercase text-sm py-2 border-b border-gray-100 hover:pl-2 transition-all text-left focus:outline-none"
          >
            Iniciar Sesión
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;