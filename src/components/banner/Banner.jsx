import React from 'react'
import Card from '../card/Card';
import Carrusel from '../carrusel/Carrusel';
import BackgroundImage from './background-image/BackgroundImage';
import Contenido from './Contenido';


/*

    SE PODRIA COLOCAR UN CONDICIONAL QUE CONTROLE SI ES LLAMADO DESDE EL MAINVIEW CARGUE XXXX, Y SI ES LLAMADO 
    EN EL MODAL HAGA OTRA COSA

*/
const Banner = ({ parent = 'MainView' }) => {
    const src = 'src/assets/imagenes/16x9-solid.jpg';
    return (
        <div className=''>

            <div className=''>
                <BackgroundImage />
            </div>

            <div className="">
                <Contenido parent="MainView" />
            </div>
        </div>
    )
}

export default Banner;