import React from 'react';
import YOUTUBE_LINK from '../../assets/api_bits.js';
import Modal from 'react-modal';

export default (props) => (
    <div>
        <Modal 
            isOpen={props.showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={props.handleCloseModal}
            >
            <div className='container'>
                <h1>{props.data.title}</h1>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe 
                        class="embed-responsive-item" 
                        src={props.video}
                        allowfullscreen
                    ></iframe>
                </div>
                <p className='lead'>{props.data.overview}</p>
                <button onClick={props.handleCloseModal}>Close Modal</button>
            </div>
        </Modal>
    </div>
);

/*<Modal
    isOpen={!!selectedMovie}
    contentLabel='Selected Movie'
    ariaHideApp={false}
    onRequestClose={closeModal}
    shouldCloseOnOverlayClick={true}
>
   {selectedMovie &&  (
        <div className='container'>
            <h1>{selectedMovie.title}</h1>
            <div class="embed-responsive embed-responsive-16by9">
                <iframe 
                    class="embed-responsive-item" 
                    src={video}
                    allowfullscreen
                ></iframe>
            </div>
            <p className='lead'>{selectedMovie.overview}</p>
            <button onClick={closeModal}>Close</button>  
        </div>
   )}
</Modal>*/