
import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Category, Project } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<Category>(Category.ALL);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(PROJECTS);
  const [isAnimate, setIsAnimate] = useState(false);

  const categories = Object.values(Category);

  useEffect(() => {
    setIsAnimate(false);
    const timer = setTimeout(() => {
      if (filter === Category.ALL) {
        setFilteredProjects(PROJECTS);
      } else {
        setFilteredProjects(PROJECTS.filter(p => p.category === filter));
      }
      setIsAnimate(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [filter]);

  return (
    <div className="min-h-screen pt-32 md:pt-48 pb-24 px-6 sm:px-12 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-12 mb-16 md:mb-24">
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black text-black tracking-tighter uppercase leading-[0.85]">
              Project<br /><span className="text-green-600">Index</span>
            </h1>
            <p className="text-gray-400 max-w-md uppercase tracking-[0.3em] text-[10px] md:text-xs font-black">
              Selected works from the visioncraft archives v.2.0
            </p>
          </div>
          
          {/* Enhanced Responsive Filter Bar */}
          <div className="w-full xl:w-auto overflow-x-auto scrollbar-hide -mx-6 px-6 sm:mx-0 sm:px-0">
            <div className="flex flex-nowrap xl:flex-wrap gap-3 glass p-3 rounded-2xl border border-black/5 bg-gray-50/50 min-w-max sm:min-w-0">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-3 rounded-xl text-[10px] md:text-xs uppercase font-black tracking-widest transition-all duration-500 ${filter === cat ? 'bg-black text-white shadow-xl scale-105' : 'text-gray-500 hover:text-black hover:bg-black/5'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 transition-all duration-700 ${isAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative aspect-[3/4] sm:aspect-[4/5] xl:aspect-[16/20] glass rounded-[40px] md:rounded-[60px] overflow-hidden border border-black/5 hover:border-blue-600/40 transition-all duration-700 bg-gray-50 shadow-sm hover:shadow-2xl"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-10 md:p-14 translate-y-12 group-hover:translate-y-0 transition-transform duration-700">
                <span className="text-[10px] uppercase tracking-[0.4em] text-green-400 font-black mb-4 block group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">{project.category}</span>
                <div className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter">{project.title}</div>
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-green-600 transition-all duration-700 delay-200"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
