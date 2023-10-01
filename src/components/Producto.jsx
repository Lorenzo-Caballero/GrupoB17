import React from 'react';
import '../CSS/producto.css';
import imagenprodu from '../assets/artesanal.jpg';

const Producto = () => {
  return (
    <div className="layout-producto">
      <div className="container-producto">
      <h1 className="heading">Probá nuestra mozzarella</h1>
        <div className="content-producto">
          <p className="text-producto">
            En Mar del Plata, creamos una Mozzarella Artesanal excepcional, sin conservantes ni químicos, utilizando las mejores materias primas de la región. Nuestra dedicación al proceso artesanal incluye el tiempo necesario para madurar la masa madre y seguir métodos tradicionales transmitidos de generación en generación.Cada bolsa de 2.7 kg se envasa a mano, garantizando un producto de excelencia. Nuestra misión es llevar un pedazo de Mar del Plata a cada mesa. Queremos ser embajadores de la región, compartiendo la esencia de Mar del Plata a través de nuestra Mozzarella Artesanal.
          </p>
          <img className="placeholder-image" src={imagenprodu} alt="Imagen del producto" />
        </div>
      </div>
    </div>
  );
};

export default Producto;
