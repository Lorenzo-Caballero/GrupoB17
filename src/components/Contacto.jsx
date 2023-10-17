import React from 'react'
import '../CSS/contacto.css'
const Contacto = () => {
  return (
    
    <div class="contacto">
                <h3 class="contacto-titulo">Hable con nosotros</h3>
                <div class="input-container">
                    <input type="text" class="input-container__input-name" id="name" maxlength="100" placeholder="Nombre" required />
                    <label for="name" class="input-container__label"></label>
                   
                </div>
                <div class="input-container">
                    <textarea class="input-container__input-email" name="email" id="email" maxlength="120" placeholder="Escribe su email" required></textarea>
                    <label class="input-container__label" for="email"></label>
                </div>
                <div class="input-container">
                    <textarea class="input-container__input" name="message" id="message" maxlength="120" placeholder="Escribe tu mensaje" required></textarea>
                    <label class="input-container__label" for="message"></label>
                </div>
               
                <button class="contacto-button">Enviar mensaje</button>
    </div>
    
  )
}

export default Contacto
