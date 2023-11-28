import React from 'react'
import Navbar from './Navbar'
import Card from './card/Card'
import Carrusel from './carrusel/Carrusel'
import Carrusel2 from './carrusel/Carrusel2'
import Banner2 from './banner/Banner2'
import Banner from './banner/Banner'
import Modal from './modal/Modal'
// import Card from './card/Card'


const MainView = () => {

  return (
    <div className='bg-dark'>

        <Navbar />
        {/* <Banner2 parent='MainView' /> */}
        <Banner parent='MainView' />

        <Carrusel />
        <Carrusel />
        <Carrusel />
        <Carrusel />

      {/* <Carrusel2 />
      <Carrusel2 />
      <Carrusel2 /> */}
      <div style={{height:'500px'}}></div>

    </div>


  )
}

export default MainView;