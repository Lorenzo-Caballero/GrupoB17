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

  return (
    <nav className={navbarClass}>
      <ul className="ulnavbar">
        <a href="about.asp">Contacto</a>
        <a href="contact.asp">Nuestros Productos</a>
        <a href="news.asp">Sobre Nosotros</a>
        <a href="default.asp">Inicio</a>
      </ul>
      <h1 className='logobarra'>CATONA</h1>
    </nav>
  );
}

export default Navbar;