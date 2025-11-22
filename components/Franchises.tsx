import React from 'react';
import { FRANCHISES } from '../constants';

const Franchises: React.FC = () => {
  return (
    <section className="py-10 container mx-auto px-4">
      <h3 className="text-2xl md:text-3xl font-bold text-brand-orange mb-6">
        Franquicias
      </h3>
      <div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
        {FRANCHISES.map((franchise) => (
          <div key={franchise.id} className="flex items-center justify-center">
             {/* Using stylized text as logo placeholders */}
             <span className={`text-2xl md:text-4xl font-black uppercase ${franchise.color}`} style={{ fontFamily: 'Impact, sans-serif' }}>
               {franchise.logoText}
             </span>
          </div>
        ))}
        {/* Add a generic "Other" icon for visual balance */}
        <i className="fas fa-star text-3xl text-yellow-400"></i>
      </div>
    </section>
  );
};

export default Franchises;