import React, { useEffect, useState } from 'react';
import useScreenWidth from '../screen/useScreenWidth';
import useIndiceCarrusel from './indice/useIndiceCarrusel';

const Carrusel = () => {


    const BASE_MARGIN_TOP = 2;
    const PATH = './src/images/'
    const archivos = ['00.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg',
        '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg']

    const screenWidth = useScreenWidth();
    const { activeIndex, next, prev, reset } = useIndiceCarrusel();
    const [imagenes, setImagenes] = useState(archivos);
    const marginTop = BASE_MARGIN_TOP + screenWidth;

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
                    {
                        element.map(imagen => (
                            <img
                                className='img-fluid rounded'
                                src={PATH + imagen}
                                alt={imagen}
                                key={imagen}
                                style={windowOptions[screenWidth].style}
                            />
                        ))
                    }
                </div>
            )
        })

        setCarouselContent({ items, content: updatedCarouselContent });
        setImagenes(newImagenes);
    }, [screenWidth])


    return (
        <div className={ `mb-2 mt-${marginTop}` }>
            <div className="row mb-1" >
                <div className="col-12" style={{ zIndex: 1 }}>
                    <h2 className='text-light m-2 fs-4' >FAVORITOS</h2>

                </div>
                <div className="col-12">

                </div>
            </div>
            <div className=''>

                <div className="container-fluid">
                    <div id="carouselExample" className="carousel slide" style={{ zIndex: 1 }}>
                        <div className="carousel-inner"  >
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
            </div>
        </div>
    )
}

export default Carrusel;