import React, { useEffect, useState } from 'react'
import Modal from '../../modal/Modal';


const PATH = './src/images/'

const Card = ({ imagen, setModalData }) => {

    function openHandleModal() {
        console.log(PATH + imagen)
        setModalData(PATH + imagen);
    }


    const r = Math.floor(Math.random() * 100)

    return (
        <>
            <div className="card border border-0" key={Math.random() * 100000} >
                <img
                    className='card-img-top'
                    src={PATH + imagen}
                    alt={imagen}
                    key={imagen}
                    style={{ zIndex: '2' }}
                    onClick={openHandleModal}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                />
                <div className="card-body bg-dark text-light">
                    <p className="card-text">❤❤❤❤❤</p>
                </div>
            </div>
            {/* <Modal visible={showM} i={"exampleModal" + r}>
                <Modal.BannerModal parent='Banner' src={modalData} />
                <Modal.Body />
            </Modal> */}
        </>
    )
}


export default Card;