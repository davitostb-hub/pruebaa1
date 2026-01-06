import React from 'react';
import { Droplets, MoveRight, MapPin } from 'lucide-react';
import { Reveal } from './Reveal';

export const Concept: React.FC = () => {
  return (
    <section id="concepto" className="py-24 bg-charcoal-950 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
            <Reveal width="100%">
                <h2 className="font-display font-black text-4xl md:text-6xl text-white mb-4">
                    20cl DE <span className="text-amber-500">TRADICIÓN</span>
                </h2>
                <div className="h-2 w-24 bg-amber-500 mx-auto rounded-full"></div>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Visual Side */}
            <div className="relative">
                <Reveal>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-charcoal-800 rotate-2 hover:rotate-0 transition-transform duration-500 group">
                        <img 
                            src="https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80" 
                            alt="Cerveza Quinto" 
                            className="w-full h-[600px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8">
                            <h3 className="font-display font-bold text-3xl text-amber-500">EL QUINTO</h3>
                            <p className="text-gray-300">La medida perfecta. Ni corto, ni largo. Lo justo para brindar y seguir.</p>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Text Side */}
            <div className="space-y-12">
                <Reveal delay={0.2}>
                    <div className="bg-charcoal-900/50 p-8 rounded-2xl border border-charcoal-800 hover:border-amber-500/50 transition-colors backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-amber-500/20 p-3 rounded-xl text-amber-500">
                                <Droplets className="w-8 h-8" />
                            </div>
                            <h3 className="font-display font-bold text-2xl text-white">¿Por qué "Quintos"?</h3>
                        </div>
                        <p className="font-sans text-gray-400 leading-relaxed">
                            No es una caña, no es una mediana. Es el calibre oficial de Sant Boi. 20 centilitros de oro líquido que se consumen de pie, en la calle, compartiendo risas antes de que se caliente.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.4}>
                    <div className="bg-charcoal-900/50 p-8 rounded-2xl border border-charcoal-800 hover:border-amber-500/50 transition-colors backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-amber-500/20 p-3 rounded-xl text-amber-500">
                                <MoveRight className="w-8 h-8" />
                            </div>
                            <h3 className="font-display font-bold text-2xl text-white">¿Por qué "Corre"?</h3>
                        </div>
                        <p className="font-sans text-gray-400 leading-relaxed">
                            El estatismo está prohibido. El Correquintos es peregrinaje. De bar en bar, de plaza en plaza. La energía fluye y la multitud se mueve como un solo organismo festivo por las calles del casco antiguo.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.6}>
                    <div className="flex items-center gap-2 text-amber-500 font-bold tracking-wider">
                        <MapPin className="w-5 h-5" />
                        <span>CASCO ANTIGUO • SANT BOI DE LLOBREGAT</span>
                    </div>
                </Reveal>
            </div>
        </div>
      </div>
    </section>
  );
};