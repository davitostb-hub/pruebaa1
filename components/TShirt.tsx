import React from 'react';
import { Shield, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';

export const TShirt: React.FC = () => {
  return (
    <section className="py-24 bg-charcoal-900 relative">
      <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1">
                 <Reveal>
                    <div className="relative group">
                         {/* Glowing effect behind */}
                        <div className="absolute inset-0 bg-amber-500 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80" 
                            alt="Camiseta Correquintos" 
                            className="relative w-full h-auto rounded-3xl shadow-2xl border-2 border-charcoal-700 transform group-hover:scale-[1.02] transition-transform duration-500 object-cover aspect-[4/5]"
                        />
                        <div className="absolute top-6 right-6 bg-amber-500 text-black font-black px-4 py-2 rounded-lg transform rotate-6 shadow-lg">
                            EDICIÓN LIMITADA
                        </div>
                    </div>
                 </Reveal>
             </div>

             <div className="order-1 lg:order-2">
                 <Reveal>
                    <h2 className="font-display font-black text-4xl md:text-6xl text-white mb-6 leading-none">
                        LA <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">ARMADURA</span>
                    </h2>
                 </Reveal>

                 <Reveal delay={0.2}>
                    <p className="text-xl text-gray-300 mb-8 font-light">
                        No es solo algodón. Es un trofeo de supervivencia. Llevar la camiseta del año demuestra que estuviste ahí, que brindaste y que resististe.
                    </p>
                 </Reveal>

                 <div className="grid grid-cols-1 gap-6">
                    <Reveal delay={0.4}>
                        <div className="flex items-start gap-4">
                            <div className="bg-charcoal-800 p-3 rounded-full text-amber-500 shrink-0">
                                <Shield className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-1">Identidad de Clan</h4>
                                <p className="text-gray-400 text-sm">Diseño exclusivo cada año. Un código visual que solo los de Sant Boi entienden.</p>
                            </div>
                        </div>
                    </Reveal>
                    
                    <Reveal delay={0.6}>
                        <div className="flex items-start gap-4">
                            <div className="bg-charcoal-800 p-3 rounded-full text-amber-500 shrink-0">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-1">Calidad Premium</h4>
                                <p className="text-gray-400 text-sm">Resistente a manchas de cerveza, abrazos fuertes y bailes improvisados.</p>
                            </div>
                        </div>
                    </Reveal>
                 </div>
             </div>
        </div>
      </div>
    </section>
  );
};