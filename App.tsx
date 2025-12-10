import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-neon-lime selection:text-black bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default App;