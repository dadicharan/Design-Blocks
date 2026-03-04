
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-40 md:pt-56 pb-24 px-6 sm:px-12 md:px-16 lg:px-24 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 xl:gap-32">
          <div className="space-y-12">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-black text-black tracking-tighter uppercase leading-[0.85]">
              Initiate<br /><span className="text-green-600">Project</span>
            </h1>
            <p className="text-gray-600 text-xl md:text-2xl font-light leading-relaxed max-w-lg">
              Our studio handles a selective number of high-end projects annually. Share your vision to start the design dialogue.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8 border-t border-black/5">
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-[0.5em] text-blue-600 font-black block">Studio HQ</span>
                <p className="text-black text-lg md:text-xl font-bold leading-tight">Metropolis Central Hub,<br />Architectural Block 8</p>
              </div>
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-[0.5em] text-blue-600 font-black block">Direct Inquiries</span>
                <a href="mailto:project@designblocks.studio" className="text-black text-lg md:text-xl font-bold hover:text-green-600 transition-colors">project@designblocks.studio</a>
              </div>
            </div>
          </div>

          <div className="glass p-10 md:p-16 lg:p-20 rounded-[60px] md:rounded-[80px] border border-black/5 bg-gray-50/30 shadow-2xl">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-3">
                <label className="text-[11px] uppercase tracking-[0.4em] text-gray-400 font-black">User Identification</label>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-transparent border-b-2 border-black/10 py-5 text-xl text-black focus:outline-none focus:border-blue-600 transition-all placeholder:text-gray-300 font-medium" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] uppercase tracking-[0.4em] text-gray-400 font-black">Email Protocol</label>
                <input 
                  type="email" 
                  placeholder="email@domain.com" 
                  className="w-full bg-transparent border-b-2 border-black/10 py-5 text-xl text-black focus:outline-none focus:border-blue-600 transition-all placeholder:text-gray-300 font-medium" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] uppercase tracking-[0.4em] text-gray-400 font-black">Brief Narrative</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your space and aesthetic goals..." 
                  className="w-full bg-transparent border-b-2 border-black/10 py-5 text-xl text-black focus:outline-none focus:border-blue-600 transition-all resize-none placeholder:text-gray-300 font-medium"
                ></textarea>
              </div>
              
              <button className="group relative w-full py-8 md:py-10 bg-black overflow-hidden transition-all transform hover:-translate-y-2 shadow-2xl">
                <span className="relative z-10 text-white font-black uppercase tracking-[0.5em] text-[10px] md:text-xs">Transmit Protocol</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>
                <div className="absolute inset-0 group-hover:bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
