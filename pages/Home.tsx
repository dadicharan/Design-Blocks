
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { AnimatedNumber } from '../components/AnimatedNumber';

const Home: React.FC = () => {
  // Get a slice of projects to show "all images" on home
  const featuredProjects = PROJECTS.slice(0, 6);

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Hero Section - Explicitly touching the navbar */}
      <section className="relative h-[75vh] md:h-[85vh] flex items-center px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 border-b border-black/5">
        {/* Hero Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dgcyqntse/image/upload/v1770874551/Frame_1_psrw7r.jpg" 
            alt="Futuristic Interior Background" 
            className="w-full h-full object-cover object-center"
          />
          {/* Responsive Gradients for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent md:from-white/40 lg:from-white/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-[1600px] mx-auto w-full relative z-10">
          <div className="max-w-4xl space-y-6 md:space-y-10">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.85] tracking-tighter text-black uppercase">
                Designing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-blue-700">
                  Spaces
                </span> <br />
                For Tomorrow
              </h1>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 font-medium max-w-xl md:max-w-2xl leading-relaxed">
              Design Blocks architecturalizes luxury through minimalist structure and futuristic flow. 
              Our vision creates silent power in every habitat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6">
              <Link to="/projects" className="group relative px-8 md:px-12 py-5 bg-black overflow-hidden transition-all transform hover:-translate-y-1 shadow-2xl text-center">
                <span className="relative z-10 text-white font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Quick-Bar */}
      <section className="bg-white border-b border-black/5 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { val: 120, label: 'Projects', suffix: '+' },
              { val: 15, label: 'Awards', suffix: '' },
              { val: 10, label: 'Sq. Ft.', suffix: 'k+' },
              { val: 4, label: 'Studios', suffix: '' }
            ].map((stat, i) => (
              <div key={i} className="text-center lg:text-left group">
                <div className="text-4xl md:text-6xl font-black text-black tracking-tighter group-hover:text-blue-600 transition-colors">
                  <AnimatedNumber value={stat.val} suffix={stat.suffix} />
                </div>
                <div className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-bold mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery Section - SHOWING ALL IMAGES */}
      <section className="py-24 md:py-40 bg-gray-50/50">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
          <div className="mb-20 space-y-4">
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-black uppercase tracking-tighter leading-none">
              Featured <br /><span className="text-green-600">Visuals</span>
            </h2>
            <div className="w-24 h-2 bg-blue-600"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {featuredProjects.map((project) => (
              <Link 
                to="/projects" 
                key={project.id} 
                className="group relative aspect-square overflow-hidden rounded-[40px] md:rounded-[60px] bg-white border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-700"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-x-0 bottom-0 p-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-green-400 text-[10px] font-black uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h3 className="text-white text-2xl font-black uppercase tracking-tight">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/projects" className="inline-flex items-center gap-4 text-black font-black uppercase tracking-[0.5em] text-xs hover:text-blue-600 transition-colors group">
              Explore Full Archive
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision Block */}
      <section className="py-24 md:py-48 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="w-full lg:w-1/2 relative">
             <div className="relative overflow-hidden rounded-[40px] md:rounded-[60px] group shadow-2xl aspect-square lg:aspect-[4/5]">
               <img 
                 src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200" 
                 alt="Modern Vision" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
             </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-8 md:space-y-12">
            <div className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-black text-black uppercase leading-none tracking-tighter">
              The <span className="text-blue-600">Cyber</span> <br /> Habitat
            </div>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl font-light leading-relaxed">
              At Design Blocks, we don't just furnish rooms; we define environments. Our philosophy merges biological comfort with digital precision, creating spaces that feel as organic as they are futuristic.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
              {['Adaptive Lighting Systems', 'Modular Living Structures', 'Immersive Spatial Audio', 'Haptic Environment Control'].map(item => (
                <li key={item} className="flex items-center gap-6 group cursor-default">
                  <div className="w-8 md:w-12 h-[2px] bg-green-600 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-500"></div>
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-black text-black group-hover:translate-x-2 transition-transform duration-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
