import React, { useState, useEffect } from 'react';
import '../CSS/App.css';
import '../CSS/carousel.css';
import Navbar from '../components/navbar';
import QuienesSomos from './QuienesSomos';
import Producto from './Producto';
import Recetas from './Recetas';
import Footer from './Footer';
import Hero from './hero3';
import Contacto from './Contacto';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

function App() {
  const [showWhatsAppButton, setShowWhatsAppButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ajusta la posición según sea necesario
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;

      // Define una posición específica donde quieres mostrar el botón
      const scrollThreshold = 200;
      
      // Obtiene la altura total del documento
      const documentHeight = Math.max(
        document.body.scrollHeight, document.body.offsetHeight, 
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight
      );

      // Comprueba si estamos cerca del final de la página
      const isNearBottom = scrollPosition + window.innerHeight >= documentHeight - 200;

      // Actualiza el estado basado en el desplazamiento y la posición en la página
      setShowWhatsAppButton(scrollPosition > scrollThreshold && !isNearBottom);
    };

    // Agrega el event listener para el scroll
    window.addEventListener('scroll', handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Contacto />
      <QuienesSomos />
      <Producto />
      <Recetas />
      {showWhatsAppButton && (
        <WhatsAppWidget phoneNumber="2236049325" message="Hola, somos la fábrica de Mozzarella Artesanal de Catona 😊. Escribe el mensaje que desees enviarnos y serás dirigido a nuestro chat de WhatsApp" />
      )}
      <Footer />
    </div>
  );
}

export default App;





