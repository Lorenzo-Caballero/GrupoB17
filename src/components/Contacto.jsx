import React from 'react';
import '../CSS/contacto.css';

const Contacto = () => {
  return (
    <div id="contacto">
      <div className="contacto-container">
        <h1>¿Queres Saber Más? ¡Contáctanos!</h1>
      </div>
      <div className='contacto-redes'>
        <h2 className='h2-contacto'>Hablanos por whatsapp</h2>
        <a href='https://wa.me/2236073064' target="_blank"><i class="fa-brands fa-whatsapp icono"></i></a>
        <h3 className='h2-contacto'>Seguinos en nuestro instagram! </h3>
        <a href="https://www.instagram.com/mozzarella_catona_mdp?igsh=MTdqaWJ2dDZkZzl2cA==" target="_blank"><i class="fa-brands fa-instagram icono"></i></a>
      </div>
    </div>
  );
};

export default Contacto;
