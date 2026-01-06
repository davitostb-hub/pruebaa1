import React from 'react';
import { Instagram, Map } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-charcoal-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <h4 className="font-display font-black text-2xl text-white mb-2">CORREQUINTOS</h4>
                <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Sant Boi de Llobregat.</p>
                <p className="text-gray-600 text-xs mt-1">Hecho con ❤️ y lúpulo.</p>
            </div>

            <div className="flex gap-6">
                 <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                    <Instagram className="w-6 h-6" />
                 </a>
                 <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                    <Map className="w-6 h-6" />
                 </a>
            </div>

            <div className="text-center md:text-right">
                <p className="text-amber-500 font-bold text-sm italic">"Si no te acuerdas, no pasó"</p>
                <p className="text-gray-600 text-xs mt-2">Bebe con moderación, baila sin control.</p>
            </div>
        </div>
      </div>
    </footer>
  );
};