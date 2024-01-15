import React, { useState } from 'react';
import '../CSS/recetas.css';
import recetaimg from '../assets/receta.png';
import data from '../recetas.json';
import { SwitchTransition, CSSTransition } from "react-transition-group";

const Recetas = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedReceta, setSelectedReceta] = useState(null);

  const openModal = (receta) => {
    setSelectedReceta(receta);
    setShowModal(true);
    setArticulosContainerDisplay('none');
  };

  const closeModal = () => {
    setSelectedReceta(null);
    setShowModal(false);
    setArticulosContainerDisplay('flex');
  };

  const recetas = data;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % recetas.length;
    setCurrentIndex(nextIndex);
  };

  const goToPrevSlide = () => {
    const prevIndex = (currentIndex - 1 + recetas.length) % recetas.length;
    setCurrentIndex(prevIndex);
  };

  const recetaActual = recetas[currentIndex];
  const [articulosContainerDisplay, setArticulosContainerDisplay] = useState('flex');

  return (
    <main id='main-recetas'>
      <div className="productos-titulo">
        <div className="titulo-recetas">
          <h1 className='h1-recetas'> Recetas Catona <br />Mas Sabor en Tus Platos<img className="recetaimg" src={recetaimg} alt="" /></h1>
        </div>
      </div>

      <div className='contenedor-carousel-modal'>
      <div className="carousel">
      <div className={`productos__articulos-container ${articulosContainerDisplay === 'none' ? 'oculto' : ''}`}>
          <button className="btn-caru" onClick={goToPrevSlide}>&#60;</button>
          <SwitchTransition >
            <CSSTransition classNames="fade" key={recetaActual.id} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}>
              <div className="producto__articulo" key={recetaActual.id}>
                <img className="productos__articulo-img" src={recetaActual.imagen} alt={recetaActual.titulo} />
                <h6 className="productos__articulo-nombre">{recetaActual.titulo}</h6>
                <p className="productos__articulo-ingrediente">Ingredientes : {recetaActual.ingredientes + ''}</p>
                <a className="productos__articulo-ver" onClick={() => openModal(recetaActual)}>Ver Receta</a>
              </div>
            </CSSTransition>
          </SwitchTransition>
          <button className="btn-caru" onClick={goToNextSlide}> &#62;</button>
        </div>
      </div>

      {showModal && selectedReceta && (
        <div className='modal-container'> 
            <div className="modal">
          <div className="modal-content">
              <span className="close-btn" onClick={closeModal}>&times;</span>
              <h2 className='productos__articulo-nombre2'>{selectedReceta.titulo}</h2>
              <img className='modal-img'src={selectedReceta.imagen} alt={selectedReceta.titulo} />
            <p className='productos__articulo-ingrediente2'><b>Ingredientes: </b>{selectedReceta.ingredientes.join(', ')}</p>
            <p className='productos__articulo-ingrediente2'><b>Preparacion: </b> {selectedReceta.preparacion}</p>
          </div>
        </div>
        </div>
        
      )}
      </div>
    </main>
  );
};

export default Recetas;


