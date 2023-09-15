import React from 'react';
import './nav.css';
import miImagen from '../src/assets/logo.jpg';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="ulnavbar">
            <li><a href="about.asp">Contacto</a></li>
            <li><a href="contact.asp">Nuestros Productos</a></li>
            <li><a href="news.asp">Sobre Nosotros</a></li>
            <li><a href="default.asp">Inicio</a></li>
        </ul>
        <div className="busqueda-div">
            <input className="barrabusqueda" type="text" id="search" placeholder="Search.." />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="busqueda-icono"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
                />
            </svg>
        </div>
        <img src={miImagen} alt="Logo" className="logoimagen" />
    </nav>
  );
}

export default Navbar;