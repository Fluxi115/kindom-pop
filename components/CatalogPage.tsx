import React from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface CatalogPageProps {
  onNavigate: (page: string) => void;
  onAuthClick: () => void;
  onProductClick: (product: Product) => void;
}

const CatalogPage: React.FC<CatalogPageProps> = ({ onNavigate, onAuthClick, onProductClick }) => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar onNavigate={onNavigate} onAuthClick={onAuthClick} />
      
      <div className="bg-gray-50 py-8 mb-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">
            Catálogo Completo
          </h1>
          <p className="text-gray-500 mt-2 font-medium">
            Explora nuestra colección completa de figuras y coleccionables.
          </p>
        </div>
      </div>

      <main>
        <ProductList products={PRODUCTS} onProductClick={onProductClick} />
      </main>

      <footer className="bg-gray-100 py-8 border-t border-gray-200 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Kingdom Pop. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default CatalogPage;