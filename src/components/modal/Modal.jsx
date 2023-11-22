import React from 'react'
import Banner2 from '../banner/Banner2'

const Modal = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                MODAL
            </button>

            <div className="container-fluid">

                {/* <div className="modal fade modal-xl" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                    <Banner />
                    </div>
                    </div>
                    </div>
                */}
                <div class="modal fade modal-xl modal-dialog-centered modal-dialog-scrollable" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <Banner2 parent='Banner'/>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Modal