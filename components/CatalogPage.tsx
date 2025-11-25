import React from 'react';
import ProductList from './ProductList';
import { PRODUCTS } from '../constants';

const CatalogPage: React.FC = () => {
  return (
    <div className="bg-white font-sans h-full">
      
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
        <ProductList products={PRODUCTS} />
      </main>
    </div>
  );
};

export default CatalogPage;