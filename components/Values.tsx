import React from 'react';
import { Users, Heart, Trash2 } from 'lucide-react';
import { Reveal } from './Reveal';

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; desc: string; delay: number }> = ({ icon, title, desc, delay }) => (
    <Reveal delay={delay}>
        <div className="bg-charcoal-800/50 backdrop-blur-md p-8 rounded-3xl border border-charcoal-700 hover:border-amber-500 transition-all duration-300 group h-full">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-amber-900/50">
                {icon}
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-4">{title}</h3>
            <p className="font-sans text-gray-400">{desc}</p>
        </div>
    </Reveal>
);

export const Values: React.FC = () => {
  return (
    <section className="py-32 bg-charcoal-950 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <Reveal width="100%">
            <div className="text-center mb-20">
                <p className="text-amber-500 font-bold tracking-[0.2em] mb-2 uppercase text-sm">Espíritu Santboià</p>
                <h2 className="font-display font-black text-4xl md:text-5xl text-white">LA RUTA DE LOS VALORES</h2>
            </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
                icon={<Users className="w-8 h-8" />}
                title="Inclusividad"
                desc="Aquí no hay VIPS. El alcalde brinda con el estudiante, el abuelo con el punk. Todos somos iguales ante un quinto frío."
                delay={0}
            />
             <ValueCard 
                icon={<Heart className="w-8 h-8" />}
                title="Orgullo de Pueblo"
                desc="Reivindicamos nuestras calles, nuestros bares y nuestra forma de ser. Sant Boi no es periferia, es el centro del mundo."
                delay={0.2}
            />
             <ValueCard 
                icon={<Trash2 className="w-8 h-8" />}
                title="Civismo Radical"
                desc="Nos lo pasamos bien sin destrozar nada. El vaso a la papelera, el respeto al vecino y la fiesta en paz."
                delay={0.4}
            />
        </div>
      </div>
    </section>
  );
};