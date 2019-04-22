import React, { Fragment, useState } from 'react';
import YOUTUBE_LINK from '../../assets/api_bits.js';
import Modal from 'react-modal';
import ModalTrigger from './ModalTrigger.jsx';
import ModalContent from './ModalContent.jsx';

export default ({ariaLabel, triggerText, role}) => {
    const [isOpen, setIsOpen] = useState(false);
    let modalNode;

    const onKeyDown = (evt) => {
        if (evt.keyCode === 27) 
            setIsOpen(false)
    };

    const onClickAway = evt => {
        if (modalNode && modalNode.contains(evt.target))
            return;
        
            setIsOpen(false)
    }
    
    return (
        <Fragment>
            <ModalTrigger 
                text={triggerText}
                onOpen={() => setIsOpen(true)}
            />
            {isOpen && 
                <ModalContent 
                    aria-label={ariaLabel}
                    modalRef={n => modalNode = n}
                    onClickAway={onClickAway}
                    onClose={() => setIsOpen(false)} 
                    role={role}
                    onKeyDown={onKeyDown}
                />
            }
        </Fragment>
    );
}; 








/* 
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
 */