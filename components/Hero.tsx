import React from 'react';
import HeroCarousel from './HeroCarousel';
import { HERO_BG_IMAGE, HERO_CAROUSEL_IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-blue-900 relative overflow-hidden min-h-[450px] md:min-h-[550px] flex items-center justify-center">
      
      {/* Static Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${HERO_BG_IMAGE})` }}
      ></div>

      {/* Gradient Overlay to ensure text is readable over the single image */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-blue-900/50 z-0"></div>

      {/* Snow Background Effect (CSS simulated) */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0" 
           style={{
             backgroundImage: `radial-gradient(circle at 50% 50%, white 2px, transparent 2.5px), radial-gradient(circle at 20% 20%, white 2px, transparent 2.5px)`,
             backgroundSize: '50px 50px, 80px 80px',
             animation: 'snow 10s linear infinite'
           }}>
      </div>
      
      {/* Bottom Snow Drifts */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 z-10">
         <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         </svg>
      </div>

      <div className="container mx-auto px-4 relative z-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-12 py-8">
        

{/* Image Side: Carousel of Products */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
               {/* Circular Container for Carousel */}
               <div className="w-full h-full rounded-full border-[6px] border-white/30 shadow-[0_0_30px_rgba(0,0,0,0.3)] overflow-hidden transform md:rotate-[-6deg] hover:rotate-0 transition-transform duration-700 bg-white relative z-10">
                  <HeroCarousel 
                    images={HERO_CAROUSEL_IMAGES} 
                    interval={3500} 
                    indicatorClass="bottom-6"
                  />
               </div>

               {/* Decorative Elements around the circle */}
               <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-orange rounded-full flex items-center justify-center transform rotate-12 shadow-lg z-20 animate-pulse">
                 <div className="text-center leading-none">
                   <span className="block text-white font-black text-xl">HOT</span>
                   <span className="block text-white text-xs font-bold">SALE</span>
                 </div>
               </div>
            </div>
        </div>



        {/* Text Side */}
        <div className="text-center md:text-left text-white order-2 md:order-1">
          <h2 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-xl tracking-tight leading-tight">
            <span className="block text-brand-orange drop-shadow-sm">NUEVA</span> COLECCIÓN
          </h2>
          <p className="text-lg md:text-xl font-medium opacity-90 mb-8 max-w-md mx-auto md:mx-0 text-blue-50 leading-relaxed">
            Descubre las figuras exclusivas de esta temporada invernal. ¡Personajes icónicos para tu repisa!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-sm font-bold">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-full shadow-xl hover:bg-gray-100 hover:scale-105 transition-all border-2 border-transparent">
              Ver Catálogo
            </button>
            <button className="bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-full hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm">
              Ofertas
            </button>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;