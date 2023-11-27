

import React, { useEffect, useState } from 'react';
import useScreenWidth from '../screen/useScreenWidth';
import useIndiceCarrusel from './indice/useIndiceCarrusel';

const Carrusel2 = () => {
    const PATH = './src/images/'
    const archivos = [
        { path: '00.jpg', visible: false }, { path: '01.jpg', visible: false }, { path: '02.jpg', visible: false },
        { path: '03.jpg', visible: false }, { path: '04.jpg', visible: false }, { path: '05.jpg', visible: false },
        { path: '06.jpg', visible: false }, { path: '07.jpg', visible: false }, { path: '08.jpg', visible: false },
        { path: '09.jpg', visible: false }, { path: '10.jpg', visible: false }, { path: '11.jpg', visible: false },
        { path: '12.jpg', visible: false }, { path: '13.jpg', visible: false }, { path: '14.jpg', visible: false },
        { path: '15.jpg', visible: false }, { path: '16.jpg', visible: false }, { path: '17.jpg', visible: false },
        { path: '18.jpg', visible: false }, { path: '19.jpg', visible: false },
    ]
    const screenWidth = useScreenWidth();
    const { activeIndex, next, prev, reset } = useIndiceCarrusel();
    const [imagenes, setImagenes] = useState(archivos);

    const windowOptions = {
        0: {
            items: 3,
            style: {
                // width: '32%',
                // height: 'auto',
                // marginLeft: '1%',
            }
        },
        1: {
            items: 4,
            style: {
                // width: '24%',
                // height: 'auto',
                // marginLeft: '.8%',
            }
        },
        2: {
            items: 5,
            style: {
                // width: '19.2%',
                // height: 'auto',
                // marginLeft: '.65%',
            }
        },
        3: {
            items: 6,
            style: {
                // width: '16.08%',
                // width: '15%',
                // height: 'auto',
                // marginLeft: '0%',
            }
        },
    }

    const items = windowOptions[screenWidth].items;
    const total = imagenes.length;
    const iteraciones = Math.ceil(total / items);

    const [carouselContent, setCarouselContent] = useState({ items, content: [] });



    useEffect(() => {

        reset();

        const posicion = carouselContent.items * activeIndex;

        const newImagenes = [...imagenes.slice(posicion), ...imagenes.slice(0, posicion)];

        const elements = [];

        for (let index = 0; index < iteraciones; index++) {
            elements.push(newImagenes.slice(index * items, (index + 1) * items));
        }

        const updatedCarouselContent = elements.map((element, index) => {
            return (
                <div className={`carousel-item ${index === 0 && 'active'}`} key={Math.random() * 100000} >
                    <h2 className='text-danger m-2 fs-4' >CAROUSEL DE LOCAS!!++++++++++++++++++++++</h2>
                    <div className='cards-wrapper' >
                        {/* <div className=' cards-wrapper bg-primary' style={{ height: '253px' }}  > */}
                        {
                            element.map((imagen, imagenIndex) => (
                                <div
                                    className={`card border border-0 bg-dark ${imagenIndex === 0 && 'primero'} ${imagenIndex === carouselContent.items && 'ultimo'}`}
                                >
                                    <img
                                        src={PATH + imagen.path}
                                        className="card-img-top border border-1 border-dark"
                                        alt="..."
                                        style={{ borderRadius: '5px 5px 5px 5px' }}
                                    />
                                    <div className={`card-body bg-dark text-light`}>
                                        {/* <h5 className="card-text">Card title</h5> */}
                                        <h5 className="card-title">Card title</h5>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
        })

        setCarouselContent({ items, content: updatedCarouselContent });
        setImagenes(newImagenes);
    }, [screenWidth])



    return (

        <div className='container-fluid' >
            <div className=''>
                {/* <h2 className='text-danger m-2 fs-4' >CAROUSEL DE LOCAS!!++++++++++++++++++++++</h2> */}
            </div>

            <div id="carouselExample" className="carousel slide d-flex justify-content-center">
                <div className="carousel-inner row align-items-center" style={{ width:'95%', overflow: 'visible', height:'15vw' }} >
                    {
                        carouselContent.content
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={() => prev(iteraciones)}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={() => next(iteraciones)}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carrusel2;


// element.map(imagen => (
//     <img
//         className='img-fluid rounded imagenn'
//         src={PATH + imagen}
//         alt={imagen}
//         key={imagen}
//         style={windowOptions[screenWidth].style}
//     />
// ))