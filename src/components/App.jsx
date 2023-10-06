import React from 'react';
import '../CSS/App.css'
import '../CSS/carousel.css';
import Navbar from '../components/navbar'
import Carousel from './Carousel';
import QuienesSomos from './QuienesSomos'
import Producto from './Producto'; 
import Recetas from './Recetas';
import Footer from './Footer'; 

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Carousel />
        <div className="history-section">
          <QuienesSomos />
        </div>
        <Producto />
        <Recetas />
      </div>
      <Footer /> 
    </div>
  );
}

export default App;

