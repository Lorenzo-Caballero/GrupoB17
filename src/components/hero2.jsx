import React, { useState, useEffect } from 'react';
import '../CSS/hero.css'; 
import heroImage from '../assets/solowave2.png';
import imagen2 from '../assets/muzafondo.jpg';
import imagen3 from '../assets/artesanal.jpg';
import imagen4 from '../assets/pizza.jpg';

function Hero() {
  const Carrusel = () => {
    const [backgroundIndex, setBackgroundIndex] = useState(0);

    const backgrounds = [
      imagen2,
      imagen3,
      imagen4,
    ];

    useEffect(() => {
      const intervalId = setInterval(() => {
        setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
      }, 5000);

      return () => {
        clearInterval(intervalId);
      };
    }, [backgroundIndex, backgrounds]);

    const backgroundImageStyle = {
      backgroundImage: `url(${backgrounds[backgroundIndex]})`,
      transition: 'background-image 1s ease-in-out', // Ajusta la duración y la función de temporización según tus preferencias
    };

    return (
      <div className='contenedorprincipal'>
        <div className="boxtitu">
          <h1 className='titulo'>FABRICA DE <br />MUZARELLA ARTESANAL <br />CATONA</h1>
          <div className="box">
            <div className="rectangle2">
              <a href="default.asp" className='textoboton2'><b>NUESTRO <br />PRODUCTO</b></a>
            </div>
          </div>
        </div>

        <div className="box2">
                <div className="rectangle">
                    <a href="default.asp" className='textoboton'><b>CONOCENOS</b></a>
                </div>
        </div>

        <div className="hero" style={backgroundImageStyle}>
            <div className='herowave'>
            <img src={heroImage} alt="Hero Image" />
            <p className='textonosotros'><b>¿QUERES <br />SABER MAS DE <br />NOSOTROS?</b></p>
            </div>
        </div>
        
      </div>
    );
  };

  return <Carrusel />;
}

export default Hero;