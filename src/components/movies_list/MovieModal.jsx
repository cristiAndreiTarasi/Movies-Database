import React from 'react';
import YOUTUBE_LINK from '../../assets/api_bits.js';
import Modal from 'react-modal';

export default (props) => (
    <div>
        <Modal
            isOpen={!!props.selectedMovie}
            contentLabel='Selected Movie'
            ariaHideApp={false}
            onRequestClose={props.closeModal}
            shouldCloseOnOverlayClick={true}
        >
           {props.selectedMovie &&  (
                <div className='container'>
                    <h1>{props.selectedMovie.title}</h1>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe 
                            class="embed-responsive-item" 
                            src={props.video}
                            allowfullscreen
                        ></iframe>
                    </div>
                    <p className='lead'>{props.selectedMovie.overview}</p>
                    <button onClick={props.closeModal}>Close</button>  
                </div>
           )}
        </Modal>
    </div>
);