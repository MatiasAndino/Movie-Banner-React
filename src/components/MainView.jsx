import React from 'react'
import Navbar from './Navbar'
import Card from './card/Card'
import Carrusel from './carrusel/Carrusel'
import Banner2 from './banner/Banner2'
import Modal from './modal/Modal'
// import Card from './card/Card'


const MainView = () => {
  return (
    <div className='bg-danger container-fluid'>
      <Navbar />
      <Banner2 parent='MainView' />
      <Carrusel />
      <Carrusel />
{/* 
      <Modal />
      <Modal />
      <Modal />
      <Modal />
      <Modal />
      <Modal /> */}




    </div>
  )
}

export default MainView;