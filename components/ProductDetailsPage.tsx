import React, { useState } from 'react';
import Navbar from './Navbar';
import { Product } from '../types';

interface ProductDetailsPageProps {
  product: Product;
  onNavigate: (page: string) => void;
  onAuthClick: () => void;
}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({ product, onNavigate, onAuthClick }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Fallback if images array isn't present
  const images = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];

  return (
    <div className="min-h-screen bg-white font-sans pb-20">
      <Navbar onNavigate={onNavigate} onAuthClick={onAuthClick} />

      <div className="container mx-auto px-4 py-6 lg:py-10">
        
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-6">
          <span className="cursor-pointer hover:text-brand-orange" onClick={() => onNavigate('catalog')}>{product.category}</span>
          <span className="mx-2">{'>'}</span>
          <span className="text-gray-800 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Images */}
          <div className="flex flex-col gap-4">
            {/* Main Image Area */}
            <div className="w-full aspect-square bg-gray-50 rounded-xl overflow-hidden border border-gray-100 relative">
              <img 
                src={images[selectedImageIndex]} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply p-4"
              />
            </div>
            
            {/* Desktop Thumbnails */}
            <div className="hidden md:flex gap-4 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-20 h-20 flex-shrink-0 rounded-lg border-2 overflow-hidden bg-gray-50 ${selectedImageIndex === idx ? 'border-brand-orange' : 'border-transparent hover:border-gray-200'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain mix-blend-multiply p-1"/>
                </button>
              ))}
            </div>

            {/* Mobile Dots Indicator */}
            <div className="flex md:hidden justify-center gap-2 mt-2">
               {images.map((_, idx) => (
                 <button
                   key={idx}
                   onClick={() => setSelectedImageIndex(idx)}
                   className={`w-2.5 h-2.5 rounded-full transition-colors ${selectedImageIndex === idx ? 'bg-gray-800' : 'bg-gray-300'}`}
                 />
               ))}
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div className="flex flex-col pt-2">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 leading-tight">
              {product.name}
            </h1>
            
            <div className="text-3xl font-medium text-gray-900 mb-8">
              ${product.price.toFixed(2)}
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 mb-6">
              <button className="w-full bg-[#FF5722] hover:bg-[#F4511E] text-white font-bold text-lg py-3.5 rounded-lg shadow-md transition-transform active:scale-[0.99]">
                Comprar ahora
              </button>
              <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold text-lg py-3.5 rounded-lg border border-gray-200 transition-colors">
                Añadir al carrito
              </button>
            </div>

            {/* Gift Option */}
            <div className="flex items-start gap-3 mb-8">
               <div className="relative flex items-center mt-1">
                 <input 
                   type="checkbox" 
                   id="isGift" 
                   className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-400 checked:bg-black checked:border-black transition-all" 
                 />
                 <i className="fas fa-check absolute text-white text-xs opacity-0 peer-checked:opacity-100 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></i>
               </div>
               <div>
                 <label htmlFor="isGift" className="block text-sm font-bold text-gray-900 cursor-pointer">
                   Es un regalo.
                 </label>
                 <p className="text-xs text-gray-500">
                   Recibe esta compra con envoltura de regalo.
                 </p>
               </div>
            </div>

            {/* Description */}
            <div className="prose prose-sm text-gray-600 leading-relaxed">
              <p>
                {product.description || "No description available."}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;