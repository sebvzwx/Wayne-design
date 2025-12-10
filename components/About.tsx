import React from 'react';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-20 md:py-32 relative px-4 bg-gradient-to-b from-black via-slate-950 to-slate-900">
      
      {/* Linear Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 via-transparent to-neon-pink/10 animate-breathe"></div>
        <div style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(46,92,255,0.1) 0px, rgba(46,92,255,0.1) 1px, transparent 1px, transparent 50px), repeating-linear-gradient(90deg, rgba(46,92,255,0.1) 0px, rgba(46,92,255,0.1) 1px, transparent 1px, transparent 50px)' }} className="absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Bento Grid Layout - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Left Card: Info */}
          <div className="ios-glass p-6 sm:p-10 md:p-14 rounded-4xl md:rounded-5xl flex flex-col justify-center transform hover:scale-[1.01] transition-transform duration-500 lg:col-span-2">
             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 text-white">关于我<span className="text-neon-blue">.</span></h2>
             <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8 font-medium">
                我是 Wayne，一名专注于 <span className="text-blue-400 font-bold">Web3 社区增长</span> 与 <span className="text-pink-400 font-bold">视觉艺术</span> 交叉领域的 <span className="text-white font-black">Full-Stack Operator</span>。
             </p>
             <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
                我对自己的定位是一名<span className="text-blue-400 font-bold"> 技术驱动型 </span>的全栈运营，具备<span className="text-neon-lime font-bold">社区实战经验</span>、<span className="text-neon-lime font-bold">独立视觉设计</span>、<span className="text-neon-lime font-bold">AI赋能工作</span>能力
             </p>
          </div>

          {/* Right Card: Skills */}
          <div className="ios-glass p-6 sm:p-10 md:p-14 rounded-4xl md:rounded-5xl flex flex-col justify-center bg-white/5 border-white/10 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-10 text-white flex items-center gap-3">
              <span className="w-2 h-6 sm:w-3 sm:h-8 bg-neon-lime rounded-full"></span>
              技术栈
            </h3>
            
            <div className="space-y-6 sm:space-y-8">
              {SKILLS.map((skill) => {
                return (
                  <div key={skill.name} className="group">
                    <div className="mb-3 sm:mb-4 px-1 text-sm sm:text-base">
                      <span className="font-bold text-white">{skill.name}</span>
                    </div>
                    <div className="flex justify-between items-start mb-4 sm:mb-5 px-1">
                      <span className="text-xs sm:text-sm text-gray-400">{skill.description}</span>
                    </div>
                    {/* Divider Line */}
                    <div 
                      className="h-[2px] w-full rounded-full group-hover:h-[3px] transition-all duration-300"
                      style={{ 
                        backgroundColor: skill.color,
                        boxShadow: `0 0 12px ${skill.color}60`
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;