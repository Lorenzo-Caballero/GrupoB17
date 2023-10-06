import React from 'react';
import '../CSS/recetas.css';
import pizzaImage from '../assets/pizza.png';
import bastonesImage from '../assets/bastones.png';
import calabazaImage from '../assets/calabaza.png';
import backButtonImage from '../assets/arrow_back_black_24dp 1.png'; // Agrega la ruta correcta para la imagen de la flecha hacia atrás

const Recetas = () => {
  return (
    <main>
      <div className="productos-contenido">
        <div className="product-line">
          <h2 className="titulo">Recetas</h2>
          <p className="subtitulo">Les dejamos aquí algunas recetas que se pueden hacer con nuestra Muzzarella</p>
          <a className="product-link" href="#">
            <p className="product-link-p">Ver Todo</p>
            <img className="product-line-img" src={backButtonImage} alt="Back Arrow" /> {/* Agrega la imagen de la flecha hacia atrás */}
          </a>
        </div>
        <div className="productos__articulos-container">
          <div className="producto__articulo">
            <img className="productos__articulo-img" src={pizzaImage} alt="Pizza" />
            <h6 className="productos__articulo-nombre">Pizza</h6>
            <a className="productos__articulo-ver" href="">Ver Receta</a>
          </div>
          <div className="producto__articulo">
            <img className="productos__articulo-img" src={bastonesImage} alt="Bastoncitos de Muzzarella" />
            <h6 className="productos__articulo-nombre">Bastoncitos de Muzzarella</h6>
            <a className="productos__articulo-ver" href="">Ver Receta</a>
          </div>
          <div className="producto__articulo">
            <img className="productos__articulo-img" src={calabazaImage} alt="Calabaza Rellena" />
            <h6 className="productos__articulo-nombre">Calabaza rellena</h6>
            <a className="productos__articulo-ver" href="">Ver Receta</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Recetas;
