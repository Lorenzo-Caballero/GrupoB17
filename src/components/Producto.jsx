import React from 'react';
import '../CSS/producto.css';
import imagenprodu from '../assets/queso.png';

const Producto = () => {
  return (
    <div id="layout-producto">
      <div className="container-producto">
        <h1 className="titulo_qs2">Mozzarella Artesanal <h3>Sin Conservantes ni Químicos</h3></h1>
        <img className="placeholder-image" src={imagenprodu} alt="Imagen del producto" />
      </div>
      <div className="content-producto">
          <p className="texto_producto">
            En Mar del Plata, creamos una Mozzarella Artesanal excepcional, sin conservantes ni químicos, utilizando las<b> mejores materias primas</b> de la región. Nuestra dedicación al proceso artesanal incluye el tiempo necesario para madurar la masa madre y seguir métodos tradicionales transmitidos de generación en generación.Cada <b>bolsa de 2.7 kg</b> se envasa a mano, garantizando un producto de excelencia. Nuestra misión es llevar un pedazo de Mar del Plata a cada mesa. Queremos ser embajadores de la región, compartiendo la esencia de Mar del Plata a través de nuestra Mozzarella <b>Artesanal</b>.
          </p>
      </div>
    </div>
  );
};

export default Producto;
