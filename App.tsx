import React, { useEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Franchises from './components/Franchises';
import ProductList from './components/ProductList';
import AuthPage from './components/AuthPage';
import CatalogPage from './components/CatalogPage';
import ProductDetailsPage from './components/ProductDetailsPage';

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Footer: React.FC = () => (
  <footer className="bg-gray-100 py-8 border-t border-gray-200 mt-auto">
    <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
      <div className="flex justify-center space-x-6 mb-4">
         <a href="#" className="hover:text-brand-orange"><i className="fab fa-facebook fa-lg"></i></a>
         <a href="#" className="hover:text-brand-orange"><i className="fab fa-instagram fa-lg"></i></a>
         <a href="#" className="hover:text-brand-orange"><i className="fab fa-twitter fa-lg"></i></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Kingdom Pop. Todos los derechos reservados.</p>
    </div>
  </footer>
);

// Main Layout component (Navbar + Content + Footer)
const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const HomePage: React.FC = () => (
  <main>
    <Hero />
    <Franchises />
    <ProductList title="Destacados" />
  </main>
);

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900 selection:bg-brand-orange selection:text-white">
      <ScrollToTop />
      <Routes>
        {/* Routes that share the Main Layout (Navbar + Footer) */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="product/:id" element={<ProductDetailsPage />} />
        </Route>
        
        {/* Routes with unique layouts */}
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
};

export default App;