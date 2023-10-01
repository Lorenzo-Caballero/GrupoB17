
import React, { useState, useEffect } from 'react';
import '../CSS/carousel.css';
import imagen1 from '../assets/imagen1.jpg';
import imagen2 from '../assets/imagen2.jpg';
import imagen3 from '../assets/imagen3.jpg';  

const Carousel = () => {
    // Definición de las imágenes en un array
  const images = [imagen1, imagen2, imagen3];
    // Estado para rastrear la diapositiva actual
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState(images[currentIndex]); 
    const [isActive, setIsActive] = useState(true);

// Función para avanzar a la siguiente diapositiva
  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setCurrentImage(images[nextIndex]);

    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 3990);
  };

  useEffect(() => {
    // Esta función cambia automáticamente la diapositiva
    const intervalId = setInterval(goToNextSlide, 4000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId); 
  }); 

  return (
    <div className="carousel">
      <img
      src={currentImage}
      alt={`Slide ${currentIndex}`}
      className={`carousel-slide carousel-img ${isActive ? 'active' : ''}
      `}
      />
    </div>
  );
};

export default Carousel;