import React from 'react'
import BtnReproducir from '../buttons/BtnReproducir'
import BtnMasInformacion from '../buttons/BtnMasInformacion'

const Card = ({ titulo, introduccion }) => {
  return (
      <div className="card m-5 border border-0 pt-5" id='card'>
        <div className="card-body">
          <h1 className="card-title text-center display-1 fw-bold text-light">{titulo}</h1>
          <p className="card-text fs-4 fw-semibold mt-4 text-light">{introduccion}</p>
          <BtnReproducir titulo={titulo} />
          <BtnMasInformacion />
        </div>
      </div>

  )
}

export default Card