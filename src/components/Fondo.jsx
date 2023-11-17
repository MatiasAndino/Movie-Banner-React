import React from 'react'
import Navbar from './Navbar'
import Card from './card/Card'


const Fondo = () => {
  return (
    <>
    <Navbar />
      <Card titulo='The Office' introduccion='El iluso jefe Michael intenta encauzar el descontento de sus empleados en la empresa papelera Dunder Mifflin a traves de continuas debilidades y percances.' />
    </>
  )
}

export default Fondo;