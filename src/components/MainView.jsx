import React from 'react'
import Navbar from './Navbar'
import Card from './card/Card'
import Carrusel from './carrusel/Carrusel'
import Banner from './banner/Banner'
import Modal from './modal/Modal'
// import Card from './card/Card'


const MainView = () => {
  return (
    <div className='bg-dark'>
      {/* <div className='header'>
        <Navbar />
        <div className="row d-flex justify-content-center">
        <div className="col border border-warning">
        
        
        </div>
        <div className="col-12 border border-primary">
        <Card titulo='The Office' introduccion='El iluso jefe Michael intenta encauzar el descontento de sus empleados en la empresa papelera Dunder Mifflin a traves de continuas debilidades y percances.' />
        
        </div>
        </div>
        <div className="container-fluid">
        <Carrusel />
        </div>
        <Carrusel />
        <Carrusel />
      </div> */}

<Navbar />
<Banner parent='MainView' />
<Modal />

      {/* <div className='header'>
        <Navbar />
        <div className="container-fluid">
          <div className="row vh-100 d-flex align-items-end">
            <div className="col-12">
              <Card titulo='The Office' introduccion='El iluso jefe Michael intenta encauzar el descontento de sus empleados en la empresa papelera Dunder Mifflin a traves de continuas debilidades y percances.' />
            </div>
            <div className="col-12 p-5">
              <Carrusel />
            </div>
          </div>
        </div>
      </div> */}


      {/* <div className="p-5">
        <Carrusel />

      </div> */}





    </div>
  )
}

export default MainView;