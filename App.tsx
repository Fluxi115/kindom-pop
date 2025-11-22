import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Franchises from './components/Franchises';
import ProductList from './components/ProductList';
import AuthPage from './components/AuthPage';
import CatalogPage from './components/CatalogPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import { Product } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'auth' | 'catalog' | 'product-details'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const navigateToAuth = () => setCurrentView('auth');
  const navigateToHome = () => setCurrentView('home');
  
  const handleNavigation = (page: string) => {
    if (page === 'home') {
      setCurrentView('home');
    } else if (page === 'catalog') {
      setCurrentView('catalog');
    }
    window.scrollTo(0,0);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product-details');
    window.scrollTo(0,0);
  };

  if (currentView === 'auth') {
    return <AuthPage onBack={navigateToHome} />;
  }

  if (currentView === 'catalog') {
    return <CatalogPage onNavigate={handleNavigation} onAuthClick={navigateToAuth} onProductClick={handleProductClick} />;
  }

  if (currentView === 'product-details' && selectedProduct) {
    return (
      <ProductDetailsPage 
        product={selectedProduct} 
        onNavigate={handleNavigation} 
        onAuthClick={navigateToAuth} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-orange selection:text-white">
      <Navbar onAuthClick={navigateToAuth} onNavigate={handleNavigation} />
      <main>
        <Hero />
        <Franchises />
        <ProductList title="Destacados" onProductClick={handleProductClick} />
      </main>
      
      <footer className="bg-gray-100 py-8 border-t border-gray-200 mt-10">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <div className="flex justify-center space-x-6 mb-4">
             <a href="#" className="hover:text-brand-orange"><i className="fab fa-facebook fa-lg"></i></a>
             <a href="#" className="hover:text-brand-orange"><i className="fab fa-instagram fa-lg"></i></a>
             <a href="#" className="hover:text-brand-orange"><i className="fab fa-twitter fa-lg"></i></a>
          </div>
          <p>&copy; {new Date().getFullYear()} Kingdom Pop. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;