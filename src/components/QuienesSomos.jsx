import React from 'react';
import imgFamiliar from '../assets/puente4.jpg'
import '../CSS/QuienesSomos.css';

const QuienesSomos = () => {
  return (
    <div id='historia'>
        <div className="contenedor_quienes">
          <h1 className="titulo_qs">Nuestra Historia<br />Puente a Nuestros Orígenes<img className="imgfamiliar" src={imgFamiliar} alt="" /></h1>
          <p className='texto_intro'>
            Somos una empresa <b>familiar</b> dedicada a la elaboración de Queso Mozarella. 
            Nos destacamos por una venta directa de <b>fábrica</b> y por la atencion y cuidado que le damos a cada cliente, ya que para nosotros ocupan el primer lugar.<br></br><b>¿Por qué Catona?</b> El nombre proviene de nuestra Abuela Materna "Petrona Acosta". Como no nos salía pronunciar su nombre le quedó Catona en lugar de Petrona.<br></br>Ella era oriunda de la ciudad de Santa Fe, de donde son nuestros padres, es por eso que en nuestro logo también está presente el <b>Puente Colgante de Santa Fe</b>, en homenaje a nuestros orígenes.
          </p>
      </div>
    </div>

  );
};

export default QuienesSomos;
