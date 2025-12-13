import React from 'react';
import { ArrowRight, Code, Palette } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 md:pt-32 px-4 bg-gradient-to-b from-black via-slate-900 to-slate-950">
      
      {/* Linear Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 via-transparent to-neon-pink/10 animate-breathe"></div>
        <svg className="absolute w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(46,92,255,0.1) 0px, rgba(46,92,255,0.1) 1px, transparent 1px, transparent 50px), repeating-linear-gradient(90deg, rgba(46,92,255,0.1) 0px, rgba(46,92,255,0.1) 1px, transparent 1px, transparent 50px)' }}>
        </svg>
      </div>

      {/* Animated accent lines - Left and Right symmetric */}
      <div className="absolute top-0 left-[10%] w-1 h-1/3 bg-gradient-to-b from-neon-blue via-neon-blue to-transparent opacity-30 animate-breathe-opacity"></div>
      <div className="absolute bottom-0 right-[10%] w-1 h-1/4 bg-gradient-to-t from-neon-pink via-neon-pink to-transparent opacity-30 animate-breathe-opacity" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-[5%] w-1 h-1/5 bg-gradient-to-b from-neon-pink via-neon-pink to-transparent opacity-20 animate-breathe-opacity" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-[5%] w-1 h-1/4 bg-gradient-to-t from-neon-blue via-neon-blue to-transparent opacity-20 animate-breathe-opacity" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full ios-glass mb-6 sm:mb-10 animate-fade-in-up hover:scale-105 transition-transform duration-300 cursor-default text-xs sm:text-sm">
            <span className="relative flex h-2 sm:h-3 w-2 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-lime opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-neon-lime"></span>
            </span>
            <span className="font-bold text-white tracking-widest uppercase">Available for Hire</span>
          </div>

          {/* Main Title - Responsive Font Sizes */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-6 sm:mb-8 leading-[0.9] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="block text-white drop-shadow-2xl">HYBRID</span>
            <span className="block relative">
              <span className="absolute inset-0 text-white/5" aria-hidden="true">CREATIVE</span>
              <span className="relative text-neon-blue" style={{
                // textShadow: '0 0 20px rgba(46, 92, 255, 0.5), 0 0 40px rgba(46, 92, 255, 0.3)'
              }}>CREATIVE.</span>
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            融合 <span className="text-neon-pink font-bold">视觉美学</span> 与 <span className="text-neon-blue font-bold">代码逻辑</span>
            <br />
            构建极具未来感的数字体验
          </p>
          
          {/* Buttons - Responsive Layout */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 animate-fade-in-up w-full sm:w-auto" style={{ animationDelay: '0.3s' }}>
            <a 
              href="#portfolio" 
              className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white text-black rounded-full font-bold text-sm sm:text-base md:text-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              查看作品
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform sm:hidden md:block" />
            </a>
            <a 
              href="#contact" 
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg border-2 border-white/20 hover:bg-white/10 text-white transition-all duration-300 backdrop-blur-md"
            >
              联系我
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;