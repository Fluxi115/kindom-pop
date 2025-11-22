import React from 'react';
import Navbar from './Navbar';

// Image of a pile of figures to match the aesthetic
const BG_IMAGE = "https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=2000&auto=format&fit=crop";

interface AuthPageProps {
  onBack?: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      
      {/* Navbar added to top of Auth Page */}
      <Navbar />

      <div className="flex-1 flex relative overflow-hidden">
        
        {/* Mobile Background Layer: Full screen image with Blur */}
        <div className="absolute inset-0 lg:hidden z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${BG_IMAGE})` }}
          />
          <div className="absolute inset-0 bg-white/30 backdrop-blur-md"></div>
        </div>

        {/* Desktop Left Panel: Sharp Image */}
        <div 
          className="hidden lg:block lg:w-1/2 bg-cover bg-center relative z-0"
          style={{ backgroundImage: `url(${BG_IMAGE})` }}
        >
          {/* Optional overlay to ensure it's not too overwhelming if needed, but keeping clear per screenshot 1 */}
        </div>

        {/* Content Area: Right on Desktop, Centered on Mobile */}
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-12 lg:bg-white">
           
           {/* Main Card Container */}
           <div className="w-full max-w-[380px] flex flex-col items-center gap-6">
              
              {/* Logo: Custom SVG Construction - Acts as Back button */}
              <button onClick={onBack} className="w-40 h-40 bg-[#FFF5DA] rounded-[30px] border-[6px] border-black relative overflow-hidden shadow-2xl mb-4 hover:scale-105 transition-transform cursor-pointer" title="Volver al inicio">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                       <pattern id="comic-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                         <circle cx="10" cy="10" r="2" fill="#cbd5e1" opacity="0.8" />
                       </pattern>
                    </defs>
                    {/* Comic Background */}
                    <rect width="200" height="200" fill="url(#comic-dots)" opacity="0.6" />

                    {/* Head Base */}
                    <path d="M40 130 Q40 180 100 180 Q160 180 160 130 L160 90 L40 90 Z" fill="#E6C49C" stroke="black" strokeWidth="8" />
                    
                    {/* Crown */}
                    <path d="M30 90 L30 50 L65 75 L100 30 L135 75 L170 50 L170 90 Z" fill="#FCD34D" stroke="black" strokeWidth="8" strokeLinejoin="round" />
                    
                    {/* Crown Balls */}
                    <circle cx="30" cy="50" r="10" fill="#FCD34D" stroke="black" strokeWidth="5" />
                    <circle cx="100" cy="30" r="10" fill="#FCD34D" stroke="black" strokeWidth="5" />
                    <circle cx="170" cy="50" r="10" fill="#FCD34D" stroke="black" strokeWidth="5" />

                    {/* Crown Gem */}
                    <rect x="90" y="100" width="20" height="20" fill="#2563EB" stroke="black" strokeWidth="4" transform="rotate(45 100 110)" />

                    {/* Eyes */}
                    <circle cx="65" cy="140" r="14" fill="black" />
                    <circle cx="135" cy="140" r="14" fill="black" />
                    
                    {/* Nose/Triangle */}
                    <path d="M100 150 L105 160 L95 160 Z" fill="#D4A77E" opacity="0.5" />
                  </svg>
              </button>

              {/* Inputs */}
              <div className="w-full space-y-4">
                  <input 
                    type="email" 
                    placeholder="Correo electronico" 
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 shadow-sm text-gray-700 placeholder-gray-400 bg-white"
                  />
                  <input 
                    type="password" 
                    placeholder="Contraseña" 
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 shadow-sm text-gray-700 placeholder-gray-400 bg-white"
                  />
              </div>

              {/* Terms Checkbox */}
              <div className="w-full flex items-start gap-3 pl-1">
                  <div className="relative flex items-center mt-0.5">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      className="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-gray-600 checked:bg-black checked:border-black transition-all" 
                    />
                    <i className="fas fa-check absolute text-white text-xs opacity-0 peer-checked:opacity-100 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></i>
                  </div>
                  <label htmlFor="terms" className="text-xs font-semibold text-gray-700 leading-tight cursor-pointer select-none">
                      Al crear una cuenta acepto los terminos y condiciones.
                  </label>
              </div>

              {/* Main Button */}
              <button className="w-full bg-[#FF5722] hover:bg-[#F4511E] text-white font-bold py-3.5 rounded-lg shadow-lg hover:shadow-xl transform active:scale-[0.98] transition-all text-base">
                  Iniciar sesión
              </button>

              {/* Footer Link */}
              <p className="text-xs text-gray-500 font-medium mt-2">
                  ¿Aun no estas registrado? <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">Crea una cuenta</a>
              </p>

           </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;