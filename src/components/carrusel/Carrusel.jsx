import React, { useEffect, useState } from 'react';
import useScreenWidth from '../screen/useScreenWidth';
import useIndiceCarrusel from './indice/useIndiceCarrusel';
import Card from './card/Card'
import Modal from '../modal/Modal';
const PATH = './src/images/'

const Carrusel = () => {

    const archivos = ['00.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg',
        '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg']

    const { screenWidth, items, style } = useScreenWidth();
    const { activeIndex, next, prev, reset } = useIndiceCarrusel();
    const [imagenes, setImagenes] = useState(archivos);

    const total = imagenes.length;
    const iteraciones = Math.ceil(total / items);

    const [carouselContent, setCarouselContent] = useState({ items, content: [] });



    // const [showM, set_Show_M] = useState(false);
    // const [modalData, set_Modal_Data] = useState("");

    // const modalShow = () => {
    //     set_Show_M(!showM);
    // };
    // const closeModal = () => {
    //     set_Show_M(false);
    // };

    // function openHandleModal() {
    //     modalShow();
    // }
    
    
    
    
    useEffect(() => {
        reset();
        // set_Modal_Data(PATH + '00.jpg');

        const posicion = carouselContent.items * activeIndex;

        const newImagenes = [...imagenes.slice(posicion), ...imagenes.slice(0, posicion)];

        const elements = [];

        for (let index = 0; index < iteraciones; index++) {
            elements.push(newImagenes.slice(index * items, (index + 1) * items));
        }

        const updatedCarouselContent = elements.map((element, index) => {
            return (
                <div className={`carousel-item ${index === 0 && 'active'}`} key={Math.random() * 100000}>

                    <div className='cards-wrapper align-items-center' key={Math.random() * 100000} style={{ overflow: 'visible', ...style }}  >

                        {
                            element.map(imagen => (
                                
                                <Card imagen={imagen} key={Math.random() * 100000} />
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
        <div className="container-fluid">
            <div style={{ height: '30px' }}></div>
            <h2 className='text-light m-2 fs-4 align-text-top'>FAVORITOS</h2>
            <div id="carouselExample" className="carousel slide d-flex justify-content-center">
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
            {/* <Modal visible={showM}>
                <Modal.BannerModal parent={'Banner'} src={modalData} />
            </Modal> */}
        </div>

    )
}

export default Carrusel;