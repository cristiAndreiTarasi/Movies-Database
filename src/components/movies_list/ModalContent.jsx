import React from 'react';
import ReactDOM from 'react-dom';

export default ({
    ariaLabel, 
    modalRef, 
    onClickAway,
    onClose, 
    onKeyDown, 
    role='dialog'
}) => {
    return ReactDOM.createPortal(
        <aside 
            className="c-modal-cover" 
            role={role} 
            aria-label={ariaLabel}
            aria-modal='true' 
            tabIndex='-1'
            onKeyDown={onKeyDown}
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
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita facere, alias quaerat praesentium, illum, dolorem doloribus aliquid eius architecto reprehenderit ipsum sint iure officiis voluptatem doloremque quas dolore iusto vel.</p>
                    </div>
                </div>
            </div>
        </aside>, document.body
    );
};