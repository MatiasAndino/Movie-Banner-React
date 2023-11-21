import React from 'react';

const Carrusel = () => {


    const PATH = './src/images/'
    const imagenes = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg',
        '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg',]

    const minItems = 8;
    const total = imagenes.length;
    const iteraciones = Math.ceil(total / minItems);

    // const elements = [...Array( iteraciones )].map((_, index) => {
    //     return [...Array( minItems )].map((_, i) => imagenes[i + (minItems * index)]);
    // });

    const elements = [];
    for (let index = 0; index < iteraciones; index++) {
        elements.push(imagenes.slice(index * minItems, (index + 1) * minItems))
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h2 className='text-light'>NUESTRA SELECCION PARA MATIAS</h2>

                </div>
                <div className="col-12">

                </div>
                <div id="carouselExample" className="carousel slide bg-success">
                    <div className="carousel-inner">
                        {
                            elements.map((element, index) => {
                                return (
                                    <div className={`carousel-item ${index === 0 && 'active'}`} key={Math.random() * 100000}>
                                        {
                                            element.map(imagen => (
                                                <img className='img-flush rounded m-2' src={PATH + imagen} alt={imagen} key={imagen} />
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

        </>
    )
}

export default Carrusel;