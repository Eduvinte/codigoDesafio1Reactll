import React from 'react'
import pictureHome from '../../images/pictureHome.png'
function Home() {
  return (
    <div>
      <div className="container_home">
        <h2>BienVenido a <strong>Happy Cake</strong></h2>
        <small>El lugar de los pasteles felices</small>
        <img id='pastel' alt='pasteles' src={pictureHome} width={150} />
      </div>
    </div>
  )
}

export default Home