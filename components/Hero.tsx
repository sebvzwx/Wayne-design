import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 md:pt-32 px-4 bg-gradient-to-b from-black via-slate-900 to-slate-950">
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 via-transparent to-neon-pink/10 animate-breathe"></div>
        <div style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(46,92,255,0.1) 0px, rgba(46,92,255,0.1) 1px, transparent 1px, transparent 50px), repeating-linear-gradient(90deg, rgba(46,92,255,0.1) 0px, rgba(46,92,255,0.1) 1px, transparent 1px, transparent 50px)' }} className="absolute inset-0"></div>
      </div>

      {/* Animated accent lines */}
      <div className="absolute top-0 left-[10%] w-1 h-1/3 bg-gradient-to-b from-neon-blue via-neon-blue to-transparent opacity-30 animate-breathe-opacity"></div>
      <div className="absolute bottom-0 right-[10%] w-1 h-1/4 bg-gradient-to-t from-neon-pink via-neon-pink to-transparent opacity-30 animate-breathe-opacity" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-[5%] w-1 h-1/5 bg-gradient-to-b from-neon-pink via-neon-pink to-transparent opacity-20 animate-breathe-opacity" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-[5%] w-1 h-1/4 bg-gradient-to-t from-neon-blue via-neon-blue to-transparent opacity-20 animate-breathe-opacity" style={{ animationDelay: '1.5s' }}></div>

      {/* Pixel Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.5) 2px, rgba(0,0,0,.5) 4px)' }} className="absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
          
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full ios-glass mb-8 sm:mb-12 animate-fade-in-up hover:scale-105 transition-transform duration-300 cursor-default text-xs sm:text-sm">
            <span className="relative flex h-2 sm:h-3 w-2 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-lime opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-neon-lime"></span>
            </span>
            <span className="font-bold text-white tracking-widest uppercase">Available for Hire</span>
          </div>

          {/* Subtitle - HYBRID CREATIVE */}
          <div className="mb-8 sm:mb-10 md:mb-12 animate-fade-in-up text-xs sm:text-sm md:text-lg font-black tracking-widest uppercase" style={{ animationDelay: '0.1s' }}>
            <span className="text-neon-pink">EXPLORING</span>
            <span className="text-white mx-2">A</span>
            <span className="text-neon-blue">COLORFUL</span>
            <span className="text-white mx-2">WORLD</span>
          </div>

          {/* Main Title - WAYNE in Pixel Style */}
          <h1 
            className="font-pixel text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-wider mb-8 sm:mb-10 md:mb-12 leading-tight animate-fade-in-up text-white drop-shadow-2xl"
            style={{
              animationDelay: '0.2s',
              textShadow: `
                0 0 20px rgba(46, 92, 255, 0.8),
                0 0 40px rgba(46, 92, 255, 0.5),
                0 0 60px rgba(255, 46, 147, 0.4),
                0 4px 15px rgba(0, 0, 0, 0.9),
                inset 0 -2px 5px rgba(0, 0, 0, 0.5)
              `,
              letterSpacing: '0.15em',
              background: 'linear-gradient(135deg, #CCFF00 0%, #2E5CFF 50%, #FF2E93 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            WAYNE
          </h1>

          {/* Secondary Description */}
          <div className="mb-8 sm:mb-10 md:mb-12 animate-fade-in-up text-sm sm:text-base md:text-lg text-gray-300 font-bold tracking-wide" style={{ animationDelay: '0.3s' }}>
            <div>HYBRID <span className="text-neon-blue font-bold">CREATIVE</span></div>
          </div>

          {/* Description Text */}
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-12 sm:mb-14 md:mb-16 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            融合 <span className="text-neon-pink font-bold">视觉美学</span> 与 <span className="text-neon-blue font-bold">代码逻辑</span>
            <br className="hidden sm:block" />
            构建极具未来感的数字体验
          </p>
          
          {/* Buttons - Responsive Layout */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-fade-in-up w-full sm:w-auto" style={{ animationDelay: '0.5s' }}>
            <a 
              href="#portfolio" 
              className="group relative px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-5 bg-white text-black rounded-lg sm:rounded-xl font-bold text-sm sm:text-base md:text-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              查看作品
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-5 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base md:text-lg border-2 border-white/20 hover:bg-white/10 text-white transition-all duration-300 backdrop-blur-md"
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
