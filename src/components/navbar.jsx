import React, { useState, useEffect } from 'react';
import '../CSS/nav.css';


function Navbar() {
  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClass = `navbar ${scrolled ? 'scrolled' : ''}`;

  const scrollToHistoria2 = () => {
    const historiaElement = document.getElementById('historia'); // Usa el id del elemento que deseas enfocar
    if (historiaElement) {
      historiaElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToInicio = () => {
    const inicioElement = document.getElementById('contenedorprincipal'); // Usa el nuevo id del elemento que deseas enfocar
    if (inicioElement) {
      inicioElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToContacto2 = () => {
    const contactoElement = document.getElementById('contacto'); // Usa el id del elemento que deseas enfocar
    if (contactoElement) {
      contactoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToProducto = () => {
    const productoElement = document.getElementById('layout-producto'); // Usa el nuevo id del elemento que deseas enfocar
    if (productoElement) {
      productoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRecetas = () => {
    const recetasElement = document.getElementById('main-recetas'); // Usa el nuevo id del elemento que deseas enfocar
    if (recetasElement) {
      recetasElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={navbarClass}>
      <ul className="ulnavbar">
        <a onClick={scrollToRecetas}>Recetas</a>
        <a onClick={scrollToProducto}>Nuestro Producto</a>
        <a onClick={scrollToHistoria2}>Sobre Nosotros</a>
        <a onClick={scrollToContacto2}>Contacto</a>
        <a onClick={scrollToInicio}>Inicio</a>
      </ul>
      <h1 className='logobarra'>CATONA</h1>
    </nav>
  );
}

export default Navbar;