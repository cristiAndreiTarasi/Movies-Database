import React from 'react';
import ReactDOM from 'react-dom';

export default ({
    ariaLabel, 
    modalRef, 
    onClickAway,
    onClose, 
    role='dialog',
    data,
    video
}) => {
    return ReactDOM.createPortal(
        <aside 
            className="c-modal-cover" 
            role={role} 
            aria-modal='true' 
            tabIndex='-1'
            onClick={onClickAway}
        >
            <div className="c-modal" ref={modalRef}>
                <button className="c-modal__close" aria-labelledby="close-modal" onClick={onClose}>
                    <span id="close-modal" className="u-hide-visually">Close</span>
                    <svg className="c-modal__close-icon" viewBox="0 0 40 40">
                        <path d="M 10,10 L 30,30 M 30,10 L 10,30"></path>
                    </svg>
                </button>
                
                <div className="c-modal__body">
                    <div className='container'>
                        <h1>{data.title}</h1>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe 
                                className="embed-responsive-item" 
                                src={video}
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className='lead'>{data.overview}</p>
                    </div>
                </div>
            </div>
        </aside>, document.body
    );
};