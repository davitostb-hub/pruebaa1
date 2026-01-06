import React from 'react';
import { Beer, ArrowDown } from 'lucide-react';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&q=80" 
          alt="Fiesta en la calle" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-900/50 to-charcoal-950"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <Reveal width="100%">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-amber-500 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.5)] animate-bounce">
              <Beer className="w-12 h-12 text-black" />
            </div>
          </div>
        </Reveal>
        
        <Reveal width="100%" delay={0.2}>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl tracking-tighter text-white mb-6 uppercase drop-shadow-2xl">
            Corre<span className="text-amber-500">quintos</span>
          </h1>
        </Reveal>

        <Reveal width="100%" delay={0.4}>
          <p className="font-sans text-xl md:text-3xl text-gray-300 font-light tracking-widest uppercase mb-12">
            La Leyenda de <span className="font-bold text-white">Sant Boi</span>
          </p>
        </Reveal>

        <Reveal width="100%" delay={0.6}>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
             <button onClick={() => document.getElementById('concepto')?.scrollIntoView({behavior: 'smooth'})} className="group relative px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold font-display rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/50">
              <span className="flex items-center gap-2">
                DESCUBRE LA RUTA <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
             </button>
          </div>
        </Reveal>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal-950 to-transparent z-10"></div>
    </section>
  );
};