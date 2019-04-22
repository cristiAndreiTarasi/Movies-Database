import React, { Fragment, useState } from 'react';
import ModalTrigger from './ModalTrigger.jsx';
import ModalContent from './ModalContent.jsx';

export default ({ariaLabel, role, data, video}) => {
    const [isOpen, setIsOpen] = useState(false);
    let modalNode;

    const onClickAway = evt => {
        if (modalNode && modalNode.contains(evt.target))
            return;
        
            setIsOpen(false);
    }
    
    return (
        <Fragment>
            <ModalTrigger onOpen={() => setIsOpen(true)} />
            {isOpen && 
                <ModalContent 
                    aria-label={ariaLabel}
                    modalRef={n => modalNode = n}
                    onClickAway={onClickAway}
                    onClose={() => setIsOpen(false)} 
                    role={role}
                    data={data}
                    video={video}
                />
            }
        </Fragment>
    );
}; 