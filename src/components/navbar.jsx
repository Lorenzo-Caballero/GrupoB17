import React from 'react';
import '../CSS/nav.css';
import miImagen from '../assets/logo2.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="menu-icon">
        <i className="fas fa-bars"></i>
      </div>
      <ul className="ulnavbar">
          <li><a href="about.asp">Contacto</a></li>
          <li><a href="contact.asp">Nuestros Productos</a></li>
          <li><a href="news.asp">Sobre Nosotros</a></li>
          <li><a href="default.asp">Inicio</a></li>
      </ul>
      <div className="busqueda-div">
        <input className="barrabusqueda" type="text" id="search" placeholder="Explora.." />
        
      </div>
      <img src={miImagen} alt="Logo" className="logoimagen" />
    </nav>
  );
}

export default Navbar;