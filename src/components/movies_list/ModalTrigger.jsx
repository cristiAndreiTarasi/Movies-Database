
import React from 'react';

export default ({text, onOpen}) => (
    <button 
        className='btn btn-info btn-sm'
        onClick={onOpen}
    >
        {text}
    </button>
);