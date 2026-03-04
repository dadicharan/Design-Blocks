
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/designblocks.ai?igsh=MXlxNTJxdzRlbHdr',
      icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /> 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/designblocks/',
      icon: <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /> 
    },
  ];

  return (
    <footer className="bg-white pt-32 pb-16 relative overflow-hidden border-t border-black/5">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[180px] pointer-events-none"></div>
      
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-16 md:gap-24 mb-24">
          
          <div className="sm:col-span-2 lg:col-span-5 space-y-12">
            <Link to="/" className="group inline-flex items-center gap-6 transition-transform hover:-translate-y-1 duration-500">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/dgcyqntse/image/upload/v1770962303/logo_4k_enhanced_f642jd.png" 
                  alt="Design Blocks Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-4xl font-black tracking-tighter text-black uppercase leading-none">Design Blocks</span>
                <span className="text-[10px] uppercase tracking-[0.5em] text-blue-600 font-bold">Interior Studio</span>
              </div>
            </Link>

            <p className="text-gray-500 text-lg md:text-xl max-w-sm leading-relaxed font-light">
              The architectural evolution of habitat design. We create minimalist structures for high-performance living.
            </p>
            
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 glass rounded-2xl flex items-center justify-center group hover:border-blue-600/50 transition-all duration-700 hover:-translate-y-2 bg-white"
                  aria-label={social.name}
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-black text-[11px] font-black uppercase tracking-[0.5em] mb-12 border-b border-black/5 pb-4 w-fit">Navigation</h4>
            <ul className="grid grid-cols-1 gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-500 hover:text-green-600 text-xs md:text-sm font-black uppercase tracking-[0.3em] transition-all duration-300 flex items-center gap-4 group"
                  >
                    <span className="w-0 h-[2px] bg-green-600 group-hover:w-6 transition-all"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-black text-[11px] font-black uppercase tracking-[0.5em] mb-12 border-b border-black/5 pb-4 w-fit">Studio Hub</h4>
            <div className="space-y-12">
              <div>
                <p className="text-gray-400 uppercase tracking-[0.4em] text-[10px] mb-3 font-black">Digital Protocol</p>
                <a href="mailto:hello@designblocks.studio" className="text-xl md:text-2xl text-black font-black hover:text-blue-600 transition-colors tracking-tight">hello@designblocks.studio</a>
              </div>
              <div>
                <p className="text-gray-400 uppercase tracking-[0.4em] text-[10px] mb-3 font-black">Physical Coordinates</p>
                <p className="text-lg md:text-xl text-black font-bold leading-tight">Architectural Block 8, Future Ave<br />Metropolis Central Hub</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.4em] font-black text-center md:text-left">© 2026 Design Blocks Studio. Established in Structural Excellence.</p>
          <div className="flex gap-12">
            <span className="text-[10px] text-gray-600 uppercase tracking-[0.4em] hover:text-blue-600 cursor-pointer font-black transition-colors">Privacy</span>
            <span className="text-[10px] text-gray-600 uppercase tracking-[0.4em] hover:text-blue-600 cursor-pointer font-black transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
