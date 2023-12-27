import React from 'react';
import '../CSS/App.css';
import '../CSS/carousel.css';
import Navbar from '../components/navbar';
import Carousel from './Carousel';
import QuienesSomos from './QuienesSomos';
import Producto from './Producto';
import Recetas from './Recetas';
import Footer from './Footer';
import Hero from './hero3';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero /> 
      <QuienesSomos />
      <Producto />
      <Recetas />
      <Footer />
    </div>
  );
}

export default App;

