import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductListProps {
  products?: Product[];
  title?: string;
}

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Link 
      to={`/product/${product.id}`}
      className="group flex flex-col items-center bg-white p-4 rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-100 block"
    >
      <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
        />
        {/* Hover overlay Action */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
          <button className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-brand-orange text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg pointer-events-none">
              Ver Detalle
          </button>
        </div>
      </div>
      <h4 className="font-extrabold text-lg text-gray-900 text-center leading-tight mb-1">
        {product.name}
      </h4>
      <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-2">
        {product.category}
      </p>
      <p className="font-bold text-xl text-gray-800">
        ${product.price.toFixed(2)}
      </p>
    </Link>
  );
};

const ProductList: React.FC<ProductListProps> = ({ products = PRODUCTS, title }) => {
  return (
    <section className="pb-20 container mx-auto px-4">
      {title && (
        <h3 className="text-2xl md:text-3xl font-bold text-brand-orange mb-8 mt-4">
          {title}
        </h3>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;