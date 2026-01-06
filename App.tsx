import React from 'react';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { TShirt } from './components/TShirt';
import { Values } from './components/Values';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-charcoal-950 text-white selection:bg-amber-500 selection:text-black">
      <Hero />
      <Concept />
      <TShirt />
      <Values />
      <CTA />
      <Footer />
    </main>
  );
};

export default App;