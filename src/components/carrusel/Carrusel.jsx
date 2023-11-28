import React, { useEffect, useState } from 'react';
import useScreenWidth from '../screen/useScreenWidth';
import useIndiceCarrusel from './indice/useIndiceCarrusel';

const Carrusel = () => {

    const PATH = './src/images/'
    const archivos = ['00.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg',
        '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg']

    const screenWidth = useScreenWidth();
    const { activeIndex, next, prev, reset } = useIndiceCarrusel();
    const [imagenes, setImagenes] = useState(archivos);

    const windowOptions = {
        0: {
            items: 3,
            style: {height : '18.016vw'}
        },
        1: {
            items: 4,
            style: {height : '13.666vw'}
        },
        2: {
            items: 5,
            style: {height : '11.4vw'}
        },
        3: {
            items: 6,
            style: {height : '9.766vw'}
        },
    }

    const items = windowOptions[screenWidth.items].items;
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
                <div className={`carousel-item ${index === 0 && 'active'}`} key={Math.random() * 100000}>

                    {/* <div className='cards-wrapper bg-danger align-items-center' style={{ overflow: 'visible', height: ` ${9.766 + resto}vw ` }} > */}
                    <div className='cards-wrapper bg-danger align-items-center' style={{ overflow: 'visible', ...windowOptions[screenWidth.items].style }} >
                    {/* <div className='cards-wrapper bg-danger align-items-center' style={{ overflow: 'visible', height: '12vw' }} > */}

                        {
                            element.map(imagen => (

                                <div class="card bg-transparent border border-0" >
                                    <img
                                        className='card-img-top'
                                        src={PATH + imagen}
                                        alt={imagen}
                                        key={imagen}
                                        style={{zIndex: '2'}}
                                        // style={windowOptions[screenWidth.items].style}
                                    />
                                    <div class="card-body bg-dark text-light">
                                        <p class="card-text">Some quick examp</p>
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
    }, [screenWidth.items])


    return (
        <div className="container-fluid">
            <div style={{ height: '20px' }}></div>
            <h2 className='text-light m-2 fs-4 align-text-top'>FAVORITOS</h2>
            <div id="carouselExample" className="carousel slide d-flex justify-content-center" style={{}}>
                <div className="carousel-inner" style={{ width: '95%', overflow: 'visible' }} >
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

export default Carrusel;