import React, { useState, useEffect } from 'react';
import '../CSS/hero.css'; 
import heroImage from '../assets/solowave3.png';
import imagen2 from '../assets/muzafondo.jpg';
import imagen3 from '../assets/artesanal.jpg';
import imagen4 from '../assets/pizzahero.jpeg';

function Hero() {
  const Carrusel = () => {
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const [claseBoton, setClaseBoton] = useState('herowave');
    const [claseBoton2, setClaseBoton2] = useState('textonosotros');
    const [claseBoton3, setClaseBoton3] = useState('titulo');

    const scrollToContacto = () => {
      const contactoElement = document.getElementById('contacto'); // Usa el id del elemento que deseas enfocar
      if (contactoElement) {
        contactoElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const scrollToHistoria = () => {
      const historiaElement = document.getElementById('historia'); // Usa el id del elemento que deseas enfocar
      if (historiaElement) {
        historiaElement.scrollIntoView({ behavior: 'smooth' });
      }
    };


    const manejarHover = () => {
      setClaseBoton('herowave2');
    };

    const manejarLeave = () => {
      setClaseBoton('herowave');
    };

    const manejarHover2 = () => {
      setClaseBoton2('textonosotros2');
    };

    const manejarLeave2 = () => {
      setClaseBoton2('textonosotros');
    };
  
    const manejarHover3 = () => {
      setClaseBoton3('titulo2');
    };

    const manejarLeave3 = () => {
      setClaseBoton3('titulo');
    };

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
      <div id='contenedorprincipal'>
        <div className="boxtitu">
          <h1 className= {claseBoton3}>FABRICA DE <br />MUZARELLA ARTESANAL <br />CATONA</h1>
          <div className="box">
            <div className="rectangle2">
              <a className='textoboton2'  onMouseEnter={manejarHover3} onMouseLeave={manejarLeave3} onClick={scrollToContacto}><b>CONTACTANOS</b></a>
            </div>
          </div>
        </div>

        <div   className= "box2" onMouseEnter={manejarHover} onMouseLeave={manejarLeave}>
                <div className="rectangle" onMouseEnter={manejarHover2} onMouseLeave={manejarLeave2} onClick={scrollToHistoria}>
                    <a className= "textoboton" ><b>CONOCENOS</b></a>
                </div>
        </div>

        <div className="hero" style={backgroundImageStyle}>
            <div className={claseBoton}>
            <img src={heroImage} alt="Hero Image" />
            <p className={claseBoton2}><b>¿QUERES <br />SABER MAS DE <br />NOSOTROS?</b></p>
            </div>
        </div>
        
      </div>
    );
  };

  return <Carrusel />;
}

export default Hero;