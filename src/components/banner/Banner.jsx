import React from 'react'
import Card from '../card/Card';
import Carrusel from '../carrusel/Carrusel';



const Banner = () => {
    const style = {
        'background': 'url("https://s3.amazonaws.com/dam.smashmexico.com.mx/wp-content/uploads/2023/11/la-ultima-puerta-final-explicado-pelicula-johnny-depp-netflix.jpg") no-repeat center',
        // 'background': 'url("https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MTkyMHgxMDgwfGVufDB8fDB8fHww") no-repeat center',
        // 'background': 'url("./assets/imagenes/16x9.jpg") no-repeat center',
        // 'height': 'auto',
        'backgroundSize': 'cover',
        'minWidth': '100%',
    };

    return (
        <div className='img-fluid' style={style}>

            <div className="container-fluid">
                <div className="row vh-100 d-flex align-items-center">
                    <div className="col-12">
                        <Card titulo='The Office' introduccion='El iluso jefe Michael intenta encauzar el descontento de sus empleados en la empresa papelera Dunder Mifflin a traves de continuas debilidades y percances.' />
                    </div>
                    {/* <div className="col-12 p-5">
                        <Carrusel />
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default Banner