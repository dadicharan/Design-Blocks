
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-40 md:pt-56 pb-24 px-6 sm:px-12 md:px-16 lg:px-24 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 lg:gap-32 items-center mb-32 md:mb-48">
          <div className="space-y-12 md:space-y-16 order-2 lg:order-1">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-black text-black tracking-tighter uppercase leading-[0.85]">
              Silent <br />
              <span className="text-blue-600">Power</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-light leading-relaxed">
              Design Blocks is not just a studio; it is a philosophy of structure, light, and tomorrow. We believe that true luxury is found in the architectural silence of a perfectly planned space.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8">
              <div className="space-y-4">
                <span className="text-[11px] font-black text-black uppercase tracking-[0.4em] block border-b border-blue-600 w-fit pb-2">Space</span>
                <p className="text-gray-500 text-sm md:text-base leading-loose font-light">Flow redefined through geometric logic and structural purity.</p>
              </div>
              <div className="space-y-4">
                <span className="text-[11px] font-black text-black uppercase tracking-[0.4em] block border-b border-green-600 w-fit pb-2">Light</span>
                <p className="text-gray-500 text-sm md:text-base leading-loose font-light">Natural and cybernetic illumination synced with human rhythms.</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 glass rounded-[60px] md:rounded-[80px] p-4 md:p-6 border border-black/5 overflow-hidden aspect-square bg-gray-50 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200" 
              alt="Architecture" 
              className="w-full h-full object-cover rounded-[45px] md:rounded-[60px] grayscale opacity-80 hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>

        <div className="border-t border-black/5 pt-24 md:pt-40 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 md:gap-24">
          <div className="space-y-8 group">
            <span className="text-blue-600 font-black uppercase tracking-[0.6em] text-[10px]">Vision</span>
            <div className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter leading-none group-hover:text-blue-600 transition-colors duration-500">Beyond The Horizon</div>
            <p className="text-gray-500 font-light leading-loose text-base md:text-lg">We envision a world where interior spaces are organic extensions of the human identity—minimal, powerful, and technologically integrated.</p>
          </div>
          <div className="space-y-8 group">
            <span className="text-green-600 font-black uppercase tracking-[0.6em] text-[10px]">Precision</span>
            <div className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter leading-none group-hover:text-green-600 transition-colors duration-500">Geometric Truth</div>
            <p className="text-gray-500 font-light leading-loose text-base md:text-lg">Every line we draw serves a structural purpose. We eliminate the noise to reveal the architectural soul of your environment.</p>
          </div>
          <div className="space-y-8 group">
            <span className="text-blue-600 font-black uppercase tracking-[0.6em] text-[10px]">Craft</span>
            <div className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter leading-none group-hover:text-blue-600 transition-colors duration-500">Future Artisan</div>
            <p className="text-gray-500 font-light leading-loose text-base md:text-lg">While our aesthetic is futuristic, our commitment to quality is timeless. We partner with the finest manufacturers to build your vision.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
