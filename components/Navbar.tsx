
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-white py-4 md:py-6 border-b border-black/5">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-10 md:px-20 flex justify-between items-center relative">
        {/* Logo and Brand */}
        <Link to="/" className="group flex items-center gap-4 sm:gap-6 relative z-[60]">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
            <img 
              src="https://res.cloudinary.com/dgcyqntse/image/upload/v1770962303/logo_4k_enhanced_f642jd.png" 
              alt="Design Blocks Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl md:text-4xl font-black tracking-tighter text-black uppercase leading-none">Design Blocks</span>
            <span className="text-[7px] sm:text-[9px] md:text-[10px] tracking-[0.5em] uppercase text-blue-600 font-bold group-hover:text-green-600 transition-colors">Interior Design</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-12 xl:gap-20">
          {links.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-xs md:text-sm font-black tracking-[0.3em] uppercase transition-all duration-300 relative ${location.pathname === link.path ? 'text-green-600' : 'text-gray-500 hover:text-blue-600'}`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-green-600 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden relative z-[60] w-12 h-12 flex flex-col justify-center items-center gap-2 focus:outline-none glass rounded-xl border border-black/5"
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-0.5 bg-black transition-all duration-500 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-all duration-500 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-all duration-500 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
      </div>

      {/* Premium Mobile Menu Drawer */}
      <div 
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        
        <div className="absolute top-0 right-0 w-[85%] sm:w-[60%] h-full bg-white shadow-[-20px_0_60px_rgba(0,0,0,0.1)] flex flex-col pt-40 px-12 sm:px-20 border-l border-black/5">
          <div className="flex flex-col gap-10">
            {links.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-3xl sm:text-4xl font-black uppercase tracking-tighter transition-all duration-500 ${location.pathname === link.path ? 'text-green-600 translate-x-4' : 'text-black hover:text-blue-600'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
