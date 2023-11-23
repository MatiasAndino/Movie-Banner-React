import React from 'react'
import Carrusel from '../carrusel/Carrusel'
import Card from '../card/Card'

const Contenido = ({ parent }) => {
    const sobre = {
        // display: 'flex',
        // alignSelf: 'flex-start',
        position: 'absolute',
        top: '15%',
        zIndex:'1',

    }

    return (
        <div style={sobre} >

            <div className="row">
                {
                    parent === 'MainView'
                        ? (
                            <div className=''>
                                {/* <div className="col-12 row align-items-end" style={{ width:'150vw', height: '100%' }}> */}
                                    {/* <div className="col-5"> */}
                                        <Card titulo='The Office' introduccion='El iluso jefe Michael intenta encauzar el descontento de sus empleados en la empresa papelera Dunder Mifflin a traves de continuas debilidades y percances.' />
                                    {/* </div> */}
                                {/* </div> */}
                                {/* <div className="col-12"> */}
                                    {/* <Carrusel /> */}
                                {/* </div> */}
                            </div>
                        )
                        :
                        <>
                            MODAL
                        </>
                }
            </div>
        </div>
    )
}

export default Contenido