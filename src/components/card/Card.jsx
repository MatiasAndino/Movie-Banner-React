import React from 'react'
import BtnReproducir from '../buttons/BtnReproducir'
import BtnMasInformacion from '../buttons/BtnMasInformacion'

const Card = ({ titulo, introduccion }) => {
  const fontSizeP = {
    fontSize: '1vw',
  }
  const fontSizeT = {
    fontSize: '4vw',
  }
  return (
      <div className="card m-5 border border-1 pt-5" id='card'>
        <div className="card-body">
          <h1 className="card-title text-center fw-bold text-light" style={ fontSizeT }>{ titulo }</h1>
          <p className="card-text fw-semibold mt-4 text-light" style={ fontSizeP }>{ introduccion }</p>
          <BtnReproducir titulo={titulo} />
          <BtnMasInformacion />
        </div>
      </div>

  )
}

export default Card