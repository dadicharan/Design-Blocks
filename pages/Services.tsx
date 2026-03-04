
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 md:pt-48 pb-24 px-6 sm:px-12 md:px-16 lg:px-24 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-24 md:mb-40 space-y-8 max-w-5xl text-center md:text-left">
          <div className="inline-block px-6 py-2 glass rounded-full border border-green-600/30 mb-6 bg-gray-50">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-green-600 font-black">Capabilities</span>
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black text-black tracking-tighter uppercase leading-[0.85]">
            Studio <br /><span className="text-blue-600">Excellence</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto md:mx-0">
            We provide a comprehensive ecosystem of design services, focusing on the architectural backbone of futuristic habitats. From majestic halls to hyper-functional cabinetry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-16">
          {SERVICES.map((service, i) => (
            <div key={i} className="group glass rounded-[60px] md:rounded-[80px] overflow-hidden border border-black/5 p-3 sm:p-4 flex flex-col hover:border-blue-600/30 transition-all duration-700 bg-white hover:shadow-2xl">
              <div className="h-72 sm:h-80 md:h-96 xl:h-[450px] overflow-hidden rounded-[45px] md:rounded-[65px] relative bg-gray-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-90 group-hover:opacity-100" 
                />
                <div className="absolute top-8 left-8 md:top-12 md:left-12">
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-white font-black bg-blue-600 px-4 py-1.5 rounded-full shadow-lg">Protocol {String(i + 1).padStart(2, '0')}</span>
                </div>
              </div>
              <div className="p-10 md:p-14 flex flex-col flex-grow">
                <h3 className="text-3xl md:text-4xl font-black text-black uppercase mb-6 tracking-tighter group-hover:text-blue-600 transition-colors duration-500">{service.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed mb-12 text-sm md:text-base lg:text-lg">{service.description}</p>
                <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-t border-black/5 pt-10">
                  <div className="flex -space-x-3">
                    <div className="w-4 h-4 rounded-full bg-blue-600 shadow-lg"></div>
                    <div className="w-4 h-4 rounded-full bg-green-600 shadow-lg"></div>
                    <div className="w-4 h-4 rounded-full bg-black/10"></div>
                  </div>
                  <button className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-black text-black group-hover:text-green-600 transition-all flex items-center gap-4">
                    Inquire Details
                    <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
