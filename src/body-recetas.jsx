import React from "react";
import './body-recetas.css';
import logo from '../source/assets/imagenes/flecha-correcta(3).png';
import bastones from '../src/assets/imagenes/bastones.png';
import calabaza from  '../src/assets/imagenes/calabaza.png';
import noquis from  '../src/assets/imagenes/noquis.png';
import pizza from  '../src/assets/imagenes/pizza.png';
import tomate from  '../src/assets/imagenes/tomate.png';

function BodyRecetas(){
    return(
        <>
          <div class="productos-contenido">
            <div class="product-line">
                 <h2 class="titulo">Recetas</h2>
                 <p class="subtitulo"> Les dejamos aca algunas recetas que se pueden hacer con nuestra Muzzarella</p>
                <a class="product-link" href="#">
                    <p class="product-link-p">Ver Todo</p>
                    <img class="product-line-img" src={logo}/>
                </a>
            </div>
            <div class="productos__articulos-container ">
                <div class="producto__articulo">
                    <img class="productos__articulo-img" src="imagenes/pizza.png" alt=""/>
                    <h6 class="productos__articulo-nombre">Pizza</h6>
                    <a class="productos__articulo-ver" href="">Ver Receta</a>
                </div>
                <div class="producto__articulo">
                    <img class="productos__articulo-img" src={bastones} alt=""/>
                    <h6 class="productos__articulo-nombre">Bastoncitos de Muzzarella</h6>
                    <a class="productos__articulo-ver" href="">Ver Receta</a>
                </div>
                <div class="producto__articulo">
                    <img class="productos__articulo-img" src={calabaza}/>
                    <h6 class="productos__articulo-nombre">Calabaza rellena</h6>
                    <a class="productos__articulo-ver" href="">Ver Receta</a>
                </div>
                <div class="producto__articulo">
                    <img class="productos__articulo-img" src={noquis} alt=""/>
                    <h6 class="productos__articulo-nombre">Ñoquis rellenos</h6>
                    <a class="productos__articulo-ver" href="">Ver Receta</a>
                </div>
                <div class="producto__articulo">
                    <img class="productos__articulo-img" src={tomate} alt=""/>
                    <h6 class="productos__articulo-nombre">Tomate</h6>
                    <a class="productos__articulo-ver" href="">Ver Receta</a>
                </div>
                <div class="producto__articulo">
                    <img class="productos__articulo-img" src={pizza} alt=""/>
                    <h6 class="productos__articulo-nombre">Pizza</h6>
                    <a class="productos__articulo-ver" href="">Ver Receta</a>
                </div>
                <div class="producto__articulo">
                    <img class="productos__articulo-img" src={tomate} alt=""/>
                    <h6 class="productos__articulo-nombre">Tomate</h6>
                    <a class="productos__articulo-ver" href="">Ver Receta</a>
                </div>
                <div class="producto__articulo">
                    <img class="productos__articulo-img" src={pizza} alt=""/>
                    <h6 class="productos__articulo-nombre">Pizza</h6>
                    <a class="productos__articulo-ver" href="">Ver Receta</a>
                </div>
            </div>
          </div> 
         </>
    )
}