import React from 'react';
import '../CSS/recetas.css';
import data from '../recetas.json'
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
          {data.map((receta,index)=> {return (
          <div className="producto__articulo" key={index}>
          <img className="productos__articulo-img" src={receta.imagen} alt={receta.titulo} />
          <h6 className="productos__articulo-nombre">{receta.titulo}</h6>
          <a className="productos__articulo-ver" href="">Ver Receta</a>
        </div>
          )}) }

        </div>
      </div>
    </main>
  );
};

export default Recetas;
