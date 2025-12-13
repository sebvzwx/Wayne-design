import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 sm:py-20 md:py-32 relative px-4 bg-gradient-to-b from-black via-slate-950 to-slate-900">
      
      {/* Linear Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 via-transparent to-neon-pink/10 animate-breathe"></div>
        <div style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(46,92,255,0.1) 0px, rgba(46,92,255,0.1) 1px, transparent 1px, transparent 50px), repeating-linear-gradient(90deg, rgba(46,92,255,0.1) 0px, rgba(46,92,255,0.1) 1px, transparent 1px, transparent 50px)' }} className="absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 md:mb-20 gap-6 sm:gap-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight md:leading-none">
            核心<br/><span className="text-neon-pink">能力</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-bold text-gray-400 max-w-md md:text-right">
            Core Ability
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {SERVICES.map((service, index) => {
             // Rotate colors: pink -> blue -> pink
             const iconBg = index === 0 ? 'bg-neon-pink' : index === 1 ? 'bg-neon-blue' : 'bg-neon-pink';
             const iconColor = 'text-black';

             return (
              <div 
                key={index} 
                className="group ios-glass p-6 sm:p-8 rounded-3xl md:rounded-4xl hover:bg-white/10 transition-all duration-300 flex flex-col h-full min-h-[320px] sm:min-h-[340px]"
              >
                <div className={`w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 ${iconBg} ${iconColor} rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-6 sm:mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <div className="mt-6 sm:mt-8">
                  <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-medium text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
             );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;