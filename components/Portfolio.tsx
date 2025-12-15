import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, X } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="portfolio" className="py-12 sm:py-20 md:py-32 relative px-4 bg-gradient-to-b from-slate-900 via-slate-950 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-neon-pink/10 via-transparent to-neon-blue/10 animate-breathe"></div>
          <div style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(46,92,255,0.1) 0px, rgba(46,92,255,0.1) 1px, transparent 1px, transparent 50px), repeating-linear-gradient(90deg, rgba(46,92,255,0.1) 0px, rgba(46,92,255,0.1) 1px, transparent 1px, transparent 50px)' }} className="absolute inset-0"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6">精选作品</h2>
            <div className="h-1.5 sm:h-2 w-24 sm:w-32 bg-neon-blue rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {PROJECTS.map((project) => (
              <div 
                key={project.id} 
                className="group relative h-64 sm:h-80 md:h-96 lg:h-[380px] w-full cursor-pointer perspective-1000"
              >
                <div 
                  onClick={() => setSelectedImage(project.imageUrl)}
                  className="relative h-full w-full rounded-2xl sm:rounded-3xl md:rounded-4xl overflow-hidden border border-white/10 transition-all duration-500 ease-out group-hover:shadow-[0_20px_60px_-15px_rgba(46,92,255,0.3)] group-hover:-translate-y-2 bg-[#111]"
                >
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/90 opacity-80 group-hover:opacity-90 transition-opacity"></div>

                  <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
                    <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 group-hover:bg-neon-lime group-hover:text-black transition-colors duration-300">
                       <ArrowUpRight size={20} className="sm:w-6 md:w-7" />
                    </div>

                    <div className="transform translate-y-3 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs font-bold uppercase tracking-wider text-black bg-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 sm:mb-3 leading-tight">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 max-h-0 group-hover:max-h-24 overflow-hidden">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center animate-zoomIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 hover:bg-neon-pink transition-colors duration-300 text-white"
            >
              <X size={24} />
            </button>

            <img 
              src={selectedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
