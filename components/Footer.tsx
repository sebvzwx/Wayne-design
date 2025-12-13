import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-8 sm:py-10 md:py-12 px-4 bg-gradient-to-b from-slate-900 via-slate-950 to-black relative">
      
      {/* Linear Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-pink/10 via-transparent to-neon-blue/10 animate-breathe"></div>
        <div style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(46,92,255,0.1) 0px, rgba(46,92,255,0.1) 1px, transparent 1px, transparent 50px), repeating-linear-gradient(90deg, rgba(46,92,255,0.1) 0px, rgba(46,92,255,0.1) 1px, transparent 1px, transparent 50px)' }} className="absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="bg-[#111] rounded-3xl md:rounded-5xl p-8 sm:p-12 md:p-16 lg:p-20 text-center border border-white/10 relative overflow-hidden group">
          
          {/* Background Glow on Hover */}
          <div className="absolute inset-0 bg-neon-blue/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">Contact Me</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto font-medium">
              期待在社区运营、视觉设计、前端架构及创意编程领域的深度合作。
            </p>
            
            <a  className="inline-block text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white hover:text-neon-lime transition-colors mb-10 sm:mb-16 tracking-tight break-all sm:break-normal">
              Mail : 485198841@qq.com
              {/* <p></p>
              TG：@zengwayne */}
            </a>
            <p></p>    
            <a  className="inline-block text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white hover:text-neon-lime transition-colors mb-10 sm:mb-16 tracking-tight break-all sm:break-normal">
              
              
              TG：@zengwayne
            </a>

            <div className="flex justify-center gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12 flex-wrap">
              {[
                // { Icon: Github, href: '#' },
                // { Icon: Linkedin, href: '#' },
                // { Icon: Twitter, href: '#' },
                // { Icon: Mail, href: '#' }
              ].map(({ Icon, href }, index) => (
                <a 
                  key={index}
                  href={href} 
                  className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                >
                  <Icon size={20} className="sm:w-6 md:w-6" />
                </a>
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center text-xs font-bold text-gray-500 uppercase tracking-widest pt-6 sm:pt-8 border-t border-white/10 gap-3">
              <p>&copy; {new Date().getFullYear()} WAYNE. 保留所有权利。</p>
              <div className="md:whitespace-nowrap">
                 Designed in GuangDong,China
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;