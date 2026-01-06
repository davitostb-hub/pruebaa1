import React from 'react';
import { Camera, CalendarCheck } from 'lucide-react';
import { Reveal } from './Reveal';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?auto=format&fit=crop&q=80" 
                alt="Brindis masivo" 
                className="w-full h-full object-cover opacity-20 grayscale"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-900/80 to-charcoal-950"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
            <Reveal width="100%">
                <h2 className="font-display font-black text-4xl md:text-6xl text-white mb-8">
                    ¿TE UNES A LA <span className="text-amber-500">LEYENDA</span>?
                </h2>
                <p className="font-sans text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                    La próxima edición ya se está cocinando. No dejes que te lo cuenten. Prepara tu hígado y tu mejor sonrisa.
                </p>
                
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <button className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg rounded-2xl shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                        <CalendarCheck className="w-6 h-6" />
                        ÚNETE A LA LISTA
                    </button>
                    <button className="px-8 py-4 bg-charcoal-800 hover:bg-charcoal-700 text-white border border-charcoal-600 font-bold text-lg rounded-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                        <Camera className="w-6 h-6" />
                        VER GALERÍA 2024
                    </button>
                </div>
            </Reveal>
        </div>
    </section>
  );
};