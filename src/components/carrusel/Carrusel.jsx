import React from 'react';
import useScreenWidth from '../screen/useScreenWidth';

const Carrusel = () => {


    const PATH = './src/images/'
    const imagenes = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg',
        '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg',]

    const screenWidth = useScreenWidth();

    const windowOptions = {
        0: {
            items: 3,
            style: {
                width: '32%',
                height: 'auto',
                marginLeft: '1%',
            }
        },
        1: {
            items: 4,
            style: {
                width: '24%',
                height: 'auto',
                marginLeft: '.8%',
            }
        },
        2: {
            items: 5,
            style: {
                width: '19.2%',
                height: 'auto',
                marginLeft: '.65%',
            }
        },
        3: {
            items: 6,
            style: {
                width: '16.08%',
                height: 'auto',
                marginLeft: '.5%',
            }
        },
    }

    const minItems = windowOptions[screenWidth].items;
    const total = imagenes.length;
    const iteraciones = Math.ceil(total / minItems);

    // const elements = [...Array( iteraciones )].map((_, index) => {
    //     return [...Array( minItems )].map((_, i) => imagenes[i + (minItems * index)]);
    // });

    const elements = [];
    for (let index = 0; index < iteraciones; index++) {
        elements.push(imagenes.slice(index * minItems, (index + 1) * minItems))
    }


    /*
        6 elementos 16.08% margen .5%
        5 elementos 19.2%  margen .65%
        4 elementos 24%  margen .8%
        3 elementos 32%   margen 1%

        el carrusel al reestructurar la cantidad de items debe seguir mostrando los items que estaban previo a la redimension
    */

    return (
        <div className='mb-2'>
            <div className="row mb-1" >
                <div className="col-12" style={{ zIndex: 1 }}>
                    <h2 className='text-light m-2 fs-4' >NUESTRA SELECCION PARA TU MAMÁ</h2>

                </div>
                <div className="col-12">

                </div>
            </div>
            <div className=''>

                <div className="container-fluid">
                    <div id="carouselExample" className="carousel slide" style={{ zIndex: 1 }}>
                        <div className="carousel-inner"  >
                            {
                                elements.map((element, index) => {
                                    return (
                                        <div className={`carousel-item ${index === 0 && 'active'}`} key={Math.random() * 100000} >
                                            {
                                                element.map(imagen => (
                                                    <img className='img-fluid rounded' src={PATH + imagen} alt={imagen} key={imagen} style={windowOptions[screenWidth].style} />
                                                    // <img className='img-fluid rounded' src={PATH + imagen} alt={imagen} key={imagen} style={{ width: '16.08%', height: 'auto', marginLeft: '.5%' }} />
                                                    // <img className='img-thumbnail rounded' src={PATH + imagen} alt={imagen} key={imagen} style={{ width: '16%', height: 'auto', marginLeft:'.55%' }} />
                                                ))
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrusel;