import React from 'react';
import '../CSS/footer.css';
import miImagen from '../assets/logo2.png';

const Footer = () => {
  return (
    <footer>
      <div className="elementos">
        <img src={miImagen} alt="Logo" className="logoimagen" />
        <p className='p_footer'>TEL: 02236073064</p>
        <div className="div-redes">
          <a href="https://cdnjs.com/libraries/font-awesome"><i className="redes fa-brands fa-facebook"></i></a>
          <a href="https://cdnjs.com/libraries/font-awesome"><i className="redes fa-brands fa-whatsapp"></i></a>
          <a href="https://cdnjs.com/libraries/font-awesome"><i className="redes fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
