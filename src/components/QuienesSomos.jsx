import React from 'react';
import imgFamiliar from '../assets/puente.jpg'
import '../CSS/QuienesSomos.css';

const QuienesSomos = () => {
  return (
    <div className="quienes_somos">
      
      <div className="cont_imgtext">
        <div className="text">
          <h1 className="titulo_qs">¿Quiénes somos?</h1>
          <p className='texto_intro'>
            Somos una empresa familiar que nos dedicamos a la elaboración de Queso Mozarella. ¿Por qué Catona? Nuestro nombre proviene de mi Abuela Materna "Petrona Acosta" que de pequeños no nos salía pronunciar su nombre y le quedó Catona en lugar de Petrona, quien era oriunda de la ciudad de Santa Fe, de donde son nuestros padres, es por eso que nuestro logo también está presente en el Puente Colgante de Santa Fe, puente ING. Marcial Candioti en homenaje a nuestros orígenes. Nos destacamos por una venta directa de fábrica con una relación estrecha con nuestros Clientes.
          </p>
        </div>
        <img className="imgfamiliar" src={imgFamiliar} alt="" />
      </div>
    </div>
  );
};

export default QuienesSomos;
