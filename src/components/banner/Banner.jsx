import React from 'react'
import Card from '../card/Card';
import Carrusel from '../carrusel/Carrusel';


/*

    SE PODRIA COLOCAR UN CONDICIONAL QUE CONTROLE SI ES LLAMADO DESDE EL MAINVIEW CARGUE XXXX, Y SI ES LLAMADO 
    EN EL MODAL HAGA OTRA COSA

*/
const Banner = ({ parent = 'MainView' }) => {
    const style = {
        background: 'url(src/assets/imagenes/16x9-solid.jpg)',
        // background: "url('https://www.displayninja.com/wp-content/uploads/2019/06/720p-vs-1080p-vs-1440p-vs-4K-vs-8K.jpg')",
        // backgroundImage: 'url("https://s3.amazonaws.com/dam.smashmexico.com.mx/wp-content/uploads/2023/11/la-ultima-puerta-final-explicado-pelicula-johnny-depp-netflix.jpg") no-repeat center',
        // 'background': 'url("https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MTkyMHgxMDgwfGVufDB8fDB8fHww") no-repeat center',
        // 'background': 'url("./assets/imagenes/16x9.jpg") no-repeat center',
        // 'height': 'auto',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // width: '100%',
        // height: '50%'
    };

    if (parent === 'MainView') {

    }


    return (
        // <div className='img-fluid' style={style}>
        <div className='' style={{ width: '100%' }}>
            <div className='IMAGEN DE FONDO' style={style}>
                <div className="container-fluid">
                    <div className="row vh-100 d-flex align-items-center" >

                        {
                            parent === 'MainView'
                                ? (
                                    <div>
                                        <div className="col-12 row d-flex align-items-end" style={{ height:'80vh' }}>
                                            <div className="col-5">
                                                <Card titulo='The Office' introduccion='El iluso jefe Michael intenta encauzar el descontento de sus empleados en la empresa papelera Dunder Mifflin a traves de continuas debilidades y percances.' />
                                            </div>
                                        </div>
                                        <div className="col-12 p-5">
                                            <Carrusel />
                                        </div>
                                    </div>
                                )
                                :
                                <>
                                </>
                        }

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banner