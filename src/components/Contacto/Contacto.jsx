import React from 'react'

function Contacto() {
  return (
    <div>
      <div className="container_contact">
        <h2 id='title_contact'>Entre en contacto con nosotros!</h2>
        <div className="container_contactChildren">
          <div className="email">
            <label>Correo:</label><br></br>
            <input style={{width: '100%'}} type="email" name="correo" id="email" placeholder='Ingrese su email' />
          </div>
          <div className="description">
            <label>Descripción:</label><br></br>
            <textarea type="text" name="description" id="description" placeholder='Ingrese su mensaje' />
          </div>
          <button id='btn_contact'>Enviar mensaje</button>
        </div>
      </div>
    </div>
  )
}

export default Contacto