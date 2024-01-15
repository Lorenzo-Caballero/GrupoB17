import React from 'react';
import '../CSS/footer.css';
import miImagen from '../assets/logo2.png';

const Footer = () => {
  return (
    <footer>
      <div className="elementos">
        <img src={miImagen} alt="Logo" className="logoimagen" />
        <h1 className='p_footer'>TEL: 02236073064&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        <h2 className='derechos'>Mozzarella Artesanal Catona, Mar del plata, Argentina, Todos los derechos reservados&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
        <h2>Seguinos en instagram</h2>
        <div className="div-redes">
          <a href="https://www.instagram.com/mozzarella_catona_mdp/"><i className="redes fa-brands fa-instagram"></i></a>
        </div>
        <p>Diseño web por:</p>
        <a href="https://www.linkedin.com/in/joel-chasmann/"><i className="redes fa-brands fa-linkedin"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
